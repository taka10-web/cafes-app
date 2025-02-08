import { Controller, useForm, SubmitHandler } from "react-hook-form";
import Rating from "@mui/material/Rating";
import { useParams } from "next/navigation";
import React from "react";

interface Review {
  rating: number;
  comment: string;
}

type ReviewFormProps = {
  fetchCafe: (id: string | string[] | undefined) => void;
};

export const ReviewForm: React.FC<ReviewFormProps> = ({ fetchCafe }) => {
  const { id } = useParams();

  const defaultValues: Review = {
    rating: 3,
    comment: "",
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Review>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<Review> = async (formdata) => {
    console.log(formdata);
    try {
      const res = await fetch(`/api/cafes/${id}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      if (res.ok) {
      }
      console.log(res);
    } catch (err) {
      console.error(err);
      return null;
    }
    reset();
    fetchCafe(id);
  };

  return (
    <>
      <div className="border w-[95%] rounded-lg py-3 mx-auto mb-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="rating"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Rating
                value={field.value ?? 3}
                precision={0.5}
                onChange={(_, newValue) => field.onChange(newValue)}
                className="ml-3"
              />
            )}
          />
          <label className="block mb-2 ml-4 text-md font-medium text-gray-900">
            口コミを投稿する
          </label>
          <textarea
            className="block p-2.5 h-[180px] w-[95%] mx-auto text-sm text-gray-900 rounded-lg  focus:border-blue-500 focus:ring-2 focus:ring-blue-500 border border-gray-300"
            id="comment"
            {...register("comment", {
              maxLength: {
                value: 800,
                message: "800文字以下で入力してください",
              },
            })}
          ></textarea>
          {errors.comment && (
            <p className="text-red-500 text-sm">{errors.comment.message}</p>
          )}
          <div>
            <button
              type="submit"
              className="shadow-md rounded-md  m-4 p-2 bg-green-600 text-white"
            >
              投稿する
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
