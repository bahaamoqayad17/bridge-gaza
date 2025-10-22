import mongoose, { InferSchemaType } from "mongoose";

const AvailabilitySchema = new mongoose.Schema(
  {
    days: {
      type: String,
      required: true,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    type: {
      type: String,
      required: true,
      enum: ["one-time", "weekly"],
    },
    date: {
      type: Date,
      required: true, // for weekly type
    },
    startTime: {
      type: Date,
      required: true, // for one-time type
    },
    endTime: {
      type: Date,
      required: true, // for one-time type
    },
    duration: {
      type: Number,
      required: true,
    },
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export type AvailabilityType = Omit<
  InferSchemaType<typeof AvailabilitySchema>,
  ""
> & {
  _id: mongoose.Types.ObjectId | string;
};

const Availability =
  mongoose.models.Availability ||
  mongoose.model("Availability", AvailabilitySchema);

export default Availability;
