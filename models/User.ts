import mongoose, { InferSchemaType } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true, // for mentor
    },
    job_title: {
      type: String,
      trim: true, // for mentor
    },
    company_name: {
      type: String,
      trim: true, // for mentor
    },
    goal: {
      type: String,
      trim: true, // for student
    },
    avatar: {
      type: String,
      trim: true,
      default: "https://ui-avatars.com/api/?name=John+Doe",
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Compare password method
userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Ensure virtual fields are serialized
userSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc: any, ret: any) {
    delete (ret as any).password;
    return ret;
  },
});

export type UserType = InferSchemaType<typeof userSchema> & {
  _id: mongoose.Types.ObjectId | string;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
