import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import User, { UserType } from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const error = searchParams.get("error");

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      process.env.NEXT_PUBLIC_VERCEL_URL ||
      "http://localhost:3000";

    // Check for OAuth errors
    if (error) {
      console.error("Google OAuth error:", error);
      return NextResponse.redirect(
        `${baseUrl}/login?error=${encodeURIComponent(
          "Google authentication failed"
        )}`
      );
    }

    // Validate required parameters
    if (!code || !state) {
      return NextResponse.redirect(
        `${baseUrl}/login?error=${encodeURIComponent("Invalid OAuth response")}`
      );
    }

    // Verify state token from cookie
    const cookies = request.headers.get("cookie") || "";
    const stateCookie = cookies
      .split(";")
      .find((c) => c.trim().startsWith("oauth_state="));

    if (!stateCookie) {
      return NextResponse.redirect(
        `${baseUrl}/login?error=${encodeURIComponent(
          "OAuth state verification failed"
        )}`
      );
    }

    const storedState = stateCookie.split("=")[1];
    if (storedState !== state) {
      return NextResponse.redirect(
        `${baseUrl}/login?error=${encodeURIComponent("OAuth state mismatch")}`
      );
    }

    // Extract source and userType from state (format: "randomToken|source|userType")
    const stateParts = state.split("|");
    const source = stateParts[1] || "register"; // "login" or "register"
    const userType = stateParts[2] || "student"; // "student" or "mentor"

    // Determine role:
    // - If from register, use the specified userType
    // - If from login and user doesn't exist, default to student
    let role = userType === "mentor" ? "mentor" : "student";

    // Get environment variables
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = `${baseUrl}/api/auth/google/callback`;

    if (!clientId || !clientSecret) {
      console.error("Google OAuth credentials not configured");
      return NextResponse.redirect(
        `${baseUrl}/login?error=${encodeURIComponent(
          "Google OAuth is not configured"
        )}`
      );
    }

    // Exchange authorization code for access token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error("Token exchange error:", errorData);
      return NextResponse.redirect(
        `${baseUrl}/login?error=${encodeURIComponent(
          "Failed to exchange authorization code"
        )}`
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get user information from Google
    const userInfoResponse = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!userInfoResponse.ok) {
      console.error("Failed to fetch user info from Google");
      return NextResponse.redirect(
        `${baseUrl}/login?error=${encodeURIComponent(
          "Failed to fetch user information"
        )}`
      );
    }

    const userInfo = await userInfoResponse.json();
    const { email, name, picture } = userInfo;

    if (!email || !name) {
      return NextResponse.redirect(
        `${baseUrl}/login?error=${encodeURIComponent(
          "Incomplete user information from Google"
        )}`
      );
    }

    await connectToDatabase();

    // Check if user already exists
    let user = (await User.findOne({ email })) as UserType | null;

    if (user) {
      // User exists - log them in (whether from login or register page)
      // Update avatar if available and better quality
      if (picture && (!user.avatar || user.avatar.includes("ui-avatars"))) {
        await User.updateOne({ email }, { avatar: picture });
        user.avatar = picture;
      }

      if (!user.isActive) {
        const errorUrl = source === "login" ? "/login" : "/register";
        return NextResponse.redirect(
          `${baseUrl}${errorUrl}?error=${encodeURIComponent(
            "Account is not active. Please contact support."
          )}`
        );
      }

      // Preserve existing user's role (don't change it)
      // The role variable is already set from state, but we use the existing user's role
      role = user.role;
    } else {
      // User doesn't exist - create new user
      // If from login page, default to student role
      if (source === "login") {
        role = "student"; // Default to student for login-initiated registrations
      }

      // Generate a random password (users won't need it for OAuth login, but it's required by schema)
      const randomPassword = crypto.randomBytes(32).toString("hex");
      const hashedPassword = await bcrypt.hash(randomPassword, 12);

      const userData: any = {
        name,
        email,
        password: hashedPassword,
        role,
        isActive: true,
        avatar:
          picture ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`,
      };

      // Set default country and role-specific fields
      if (role === "student") {
        userData.country = "Palestine";
        userData.goal = "";
      } else {
        // For mentors, set empty defaults for optional fields
        userData.bio = "";
        userData.job_title = "";
        userData.company_name = "";
        userData.country = "";
      }

      user = (await User.create(userData)) as UserType;
    }

    // Create session
    const sessionData = {
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };

    const session = jwt.sign(
      sessionData,
      process.env.NEXTAUTH_SECRET as string,
      {
        expiresIn: "30d", // OAuth login sessions last 30 days
      }
    );

    // Create redirect response
    const redirectPath = user.role === "mentor" ? "/mentors/profile" : "/";
    const redirectResponse = NextResponse.redirect(`${baseUrl}${redirectPath}`);

    // Set session cookie (add Secure flag in production)
    const isProduction = process.env.NODE_ENV === "production";
    const secureFlag = isProduction ? "; Secure" : "";

    redirectResponse.headers.set(
      "Set-Cookie",
      `session=${session}; HttpOnly; Path=/; Max-Age=${2592000}; SameSite=Lax${secureFlag}`
    );

    // Clear the OAuth state cookie
    redirectResponse.headers.append(
      "Set-Cookie",
      `oauth_state=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${secureFlag}`
    );

    return redirectResponse;
  } catch (error) {
    console.error("Google OAuth callback error:", error);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(
      `${baseUrl}/login?error=${encodeURIComponent(
        "An error occurred during Google authentication"
      )}`
    );
  }
}
