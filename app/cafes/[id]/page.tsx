"use client";
import React, { useEffect, useState } from "react";
import { Cafes } from "../page";
import DetailCard from "../../../components/layouts/DetailCard";
import { Review } from "@/components/layouts/Review";
import { GoogleMap } from "@/components/layouts/GoogleMap";
import ReviewForm from "@/components/layouts/ReviewForm";
import { useParams } from "next/navigation";

type Review = {
  _id: string;
  rating: number;
  comment: string;
};

const CefeDetails: React.FC = () => {
  const { id } = useParams();

  const [cafe, setCafe] = useState<Cafes>();

  const [average, setAverage] = useState<number>(0);

  //口コミの平均を計算
  const mathRatingAverage = () => {
    if (cafe?.reviews) {
      const total = cafe?.reviews.reduce((sum, { rating }) => sum + rating, 0);
      const ave = total / cafe.reviews.length || 0;
      setAverage(ave);
    } else {
      setAverage(0);
    }
  };

  // カフェの詳細を取得する関数
  const fetchCafe = async (id: string | string[] | undefined) => {
    try {
      const res = await fetch(`/api/cafes/${id}`);
      if (!res) {
        throw new Error("データの取得に失敗しました。");
      }
      const cafe = await res.json();
      if (cafe && cafe?.address && cafe?.reviews) {
        setCafe(cafe);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    fetchCafe(id);
  }, []);

  useEffect(() => {
    mathRatingAverage();
  }, [fetchCafe]);

  return (
    <>
      {cafe && (
        <div className="sm:flex w-full justify-center">
          <DetailCard cafe={cafe} average={average} />
          <div className="shadow-md border rounded-2xl boder-gary-300 lg:w-1/3 sm:w-1/2 mx-5 my-8">
            <GoogleMap cafeAdress={cafe?.address} />
            <Review reviews={cafe?.reviews} />
            <ReviewForm fetchCafe={fetchCafe} />
          </div>
        </div>
      )}
    </>
  );
};

export default CefeDetails;
