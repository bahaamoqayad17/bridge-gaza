// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { connectToDatabase } from "@/lib/mongo";
import User from "@/models/User";
import { sendWelcomeEmail } from "@/lib/email";
export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      password,
      country,
      bio,
      job_title,
      company_name,
      goal,
      userType,
    } = await request.json();

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { status: false, error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { status: false, error: "Password must be at least 6 characters long" },
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

    // Check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          status: false,
          error: "User with this email already exists",
        },
        { status: 409 }
      );
    }

    // Hash password
    const pwSalt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, pwSalt);

    // Determine role based on userType
    const role = userType === "mentor" ? "mentor" : "student";

    // Prepare user data based on type
    const userData: any = {
      name,
      email,
      password: hashedPassword,
      country: country || "",
      role,
      isActive: true,
    };

    // Add role-specific fields
    if (userType === "mentor") {
      userData.bio = bio || "";
      userData.job_title = job_title || "";
      userData.company_name = company_name || "";
    } else {
      userData.goal = goal || "";
    }

    // Create user
    const newUser = await User.create(userData);

    if (!newUser) {
      return NextResponse.json(
        { status: false, error: "Failed to create user" },
        { status: 500 }
      );
    }

    // Create session
    const sessionData = {
      user: {
        id: newUser._id.toString(),
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    };

    const session = jwt.sign(
      sessionData,
      process.env.NEXTAUTH_SECRET as string,
      {
        expiresIn: "30d",
      }
    );

    // Send welcome email
    await sendWelcomeEmail(newUser.email, newUser.name);

    return NextResponse.json(
      {
        status: true,
        message: "Registration successful! Welcome to Bridge Gaza!",
        user: {
          id: newUser._id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
          isActive: newUser.isActive,
        },
      },
      {
        headers: {
          // 30 days
          "Set-Cookie": `session=${session}; HttpOnly; Path=/; Max-Age=${2592000}; SameSite=Lax`,
        },
      }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        status: false,
        error: "An error occurred during registration. Please try again.",
      },
      { status: 500 }
    );
  }
}
