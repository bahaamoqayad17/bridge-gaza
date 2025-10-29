import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import crypto from "crypto";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const source = searchParams.get("source") || "register"; // "login" or "register"
    const userType = searchParams.get("userType") || "student"; // student or mentor (for register)

    // Validate userType if coming from register
    if (
      source === "register" &&
      userType !== "student" &&
      userType !== "mentor"
    ) {
      return NextResponse.json(
        { status: false, error: "Invalid user type" },
        { status: 400 }
      );
    }

    // Check for required environment variables
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      process.env.NEXT_PUBLIC_VERCEL_URL ||
      "http://localhost:3000";

    if (!clientId || !clientSecret) {
      console.error("Google OAuth credentials not configured");
      return NextResponse.json(
        { status: false, error: "Google OAuth is not configured" },
        { status: 500 }
      );
    }

    // Generate state token for CSRF protection (include source and userType in state)
    // Format: "randomToken|source|userType"
    const state = `${crypto
      .randomBytes(32)
      .toString("hex")}|${source}|${userType}`;

    // Store state in cookie (secure, httpOnly, short-lived)
    const isProduction = process.env.NODE_ENV === "production";
    const secureFlag = isProduction ? "; Secure" : "";
    const stateCookie = `oauth_state=${state}; HttpOnly; Path=/; Max-Age=600; SameSite=Lax${secureFlag}`;

    // Google OAuth authorization URL
    const redirectUri = `${baseUrl}/api/auth/google/callback`;
    const scope = "openid email profile";
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams(
      {
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: "code",
        scope: scope,
        access_type: "offline",
        prompt: "consent",
        state: state,
      }
    ).toString()}`;

    return NextResponse.redirect(authUrl, {
      headers: {
        "Set-Cookie": stateCookie,
      },
    });
  } catch (error) {
    console.error("Google OAuth initiation error:", error);
    return NextResponse.json(
      {
        status: false,
        error: "An error occurred while initiating Google OAuth",
      },
      { status: 500 }
    );
  }
}
