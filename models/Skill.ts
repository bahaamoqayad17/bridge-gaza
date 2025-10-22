import mongoose, { InferSchemaType } from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export type SkillType = Omit<InferSchemaType<typeof skillSchema>, ""> & {
  _id: mongoose.Types.ObjectId | string;
};

const Skill = mongoose.models.Skill || mongoose.model("Skill", skillSchema);

export default Skill;
