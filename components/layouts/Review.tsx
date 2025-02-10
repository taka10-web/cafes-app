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
    <div className="border rounded-2xl boder-gary-300 w-[95%] mx-auto my-5 overflow-y-scroll">
      <div className="mt-3 h-[200px] rw-[100%]">
        {reviews.map((review: Review) => (
          <div className="h-auto border-b " key={review._id}>
            <div className="flex items-center mt-2">
              <img
                className="w-10 h-10 rounded-full ml-2 mr-3"
                src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?w=826"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">ユーザー</p>
              </div>
            </div>
            <Rating
              value={review.rating}
              precision={0.5}
              readOnly
              className="pl-2"
            />
            <div className="p-2">{review.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
