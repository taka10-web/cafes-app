import mongoose, { Document, Schema } from "mongoose";

export interface IReview extends Document {
  rating: number;
  comment: string;
}

const reviewSchema: Schema = new mongoose.Schema({
  rating: {
    type: Number,
  },
  comment: {
    type: String,
  },
});

const Review =
  mongoose.models.Review || mongoose.model<IReview>("Review", reviewSchema);

export default Review;
