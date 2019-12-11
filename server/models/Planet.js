import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Planet = new Schema(
  {
    title: { type: String, required: true },
    starId: { type: ObjectId, ref: "Star", required: true },
    galaxyId: { type: ObjectId, ref: "Galaxy", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
