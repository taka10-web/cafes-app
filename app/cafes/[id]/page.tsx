"use client";
import React, { useEffect, useState } from "react";
import { Cafes } from "../page";
import DetailCard from "../../../components/layouts/DetailCard";
// import { usePathname } from "next/navigation";
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
        setCafe(cafe);
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    console.log(id);
    fetchCafe(id);
  }, []);

  return (
    <>
      <DetailCard cafe={cafe} />
    </>
  );
};

export default CefeDetails;
