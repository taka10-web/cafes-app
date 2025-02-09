"use client";
import React, { useEffect, useState } from "react";
import { Cafes } from "../page";
import DetailCard from "../../../components/layouts/DetailCard";
import { GoogleMap } from "@/components/layouts/GoogleMap";
import ReviewForm from "@/components/layouts/ReviewForm";
import { useParams } from "next/navigation";

const CefeDetails: React.FC = () => {
  const { id } = useParams();

  const [cafe, setCafe] = useState<Cafes>();

  // カフェの詳細を取得する関数
  useEffect(() => {
    const fetchCafe = async (id: string | string[] | undefined) => {
      try {
        const res = await fetch(`/api/cafes/${id}`);
        if (!res) {
          throw new Error("データの取得に失敗しました。");
        }
        const cafe = await res.json();
        if (cafe && cafe?.address) {
          setCafe(cafe);
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    fetchCafe(id);
  }, []);

  return (
    <>
      {cafe && (
        <div className="sm:flex w-full justify-center">
          <DetailCard cafe={cafe} />
          <div className="shadow-md border rounded-2xl boder-gary-300 lg:w-1/3 sm:w-1/2 mx-5 my-8">
            <GoogleMap cafeAdress={cafe?.address} />
            <ReviewForm />
          </div>
        </div>
      )}
    </>
  );
};

export default CefeDetails;
