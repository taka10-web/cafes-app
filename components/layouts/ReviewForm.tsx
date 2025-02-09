import { Controller, useForm, SubmitHandler } from "react-hook-form";
import Rating from "@mui/material/Rating";
import { redirect, useParams } from "next/navigation";

interface Review {
  rating: number;
  comment: string;
}

export const ReviewForm = () => {
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
      console.log(res);
    } catch (err) {
      console.error(err);
      return null;
    }
    reset();
    redirect(`/cafes/${id}/`);
  };

  return (
    <>
      <div className="bg-gray-100">
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
              />
            )}
          />
          <p>コメント</p>
          <textarea
            className="border border-gary-300 w-80 mx-2 "
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
              className="shadow-md rounded-md  m-3 p-2 bg-green-600 text-white"
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
