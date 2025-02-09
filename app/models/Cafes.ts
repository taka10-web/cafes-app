import mongoose, { Document, Schema } from "mongoose";

export interface ICafes extends Document {
  name: string;
  address: string;
  description: string;
  images: string[];
  phone_number: string;
  business_hours: string;
  access: string;
  regular_holiday: string;
  review: [];
}

const cafesSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  images: {
    type: [String],
    default: [],
  },
  phone_number: {
    type: String,
  },
  business_hours: {
    type: String,
  },
  access: {
    type: String,
  },
  regular_holiday: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Cafes =
  mongoose.models.Cafes || mongoose.model<ICafes>("Cafes", cafesSchema);

export default Cafes;
