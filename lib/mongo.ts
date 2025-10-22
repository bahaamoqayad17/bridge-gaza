import mongoose from "mongoose";
import "../models/User";
import "../models/PasswordReset";
import "../models/Booking";
import "../models/Contact";
import "../models/Skill";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the NEXT_PUBLIC_MONGODB_URI environment variable"
  );
}

export async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose;
    }

    const mongooseInstance = await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB Connected Successfully");
    console.log(`📊 Database: ${mongooseInstance.connection.name}`);
    return mongooseInstance;
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    throw error;
  }
}
