import React from "react";
import Rating from "@mui/material/Rating";

type ReviewProps = {
  reviews: [];
};

type Review = {
  _id: string;
  rating: number;
  comment: string;
};

export const Review: React.FC<ReviewProps> = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review: Review) => (
        <div key={review._id}>
          <Rating value={review.rating} precision={0.5} readOnly />
          <div>{review.comment}</div>
        </div>
      ))}
    </div>
  );
};
