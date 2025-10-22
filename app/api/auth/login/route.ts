import { NextRequest, NextResponse } from "next/server";
import User, { UserType } from "@/models/User";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongo";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const { email, password, rememberMe } = await request.json();

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { status: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { status: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Find user by email
    const user = (await User.findOne({ email })) as UserType | null;

    if (!user) {
      return NextResponse.json(
        { status: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json(
        { status: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        {
          status: false,
          error: "Account is not active. Please contact support.",
        },
        { status: 403 }
      );
    }

    // Create session data
    const sessionData = {
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };

    // Create JWT token with appropriate expiration
    let session;
    const expirationTime = rememberMe ? "30d" : "1d";

    session = jwt.sign(sessionData, process.env.NEXTAUTH_SECRET as string, {
      expiresIn: expirationTime,
    });

    // Calculate cookie max age
    const maxAge = rememberMe ? 2592000 : 86400; // 30 days or 1 day

    // Return user object without password
    return NextResponse.json(
      {
        status: true,
        message: "Login successful",
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
          isActive: user.isActive,
          country: user.country,
          avatar: user.avatar,
        },
      },
      {
        headers: {
          "Set-Cookie": `session=${session}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax`,
        },
      }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      {
        status: false,
        error: "An error occurred during login. Please try again.",
      },
      { status: 500 }
    );
  }
}
