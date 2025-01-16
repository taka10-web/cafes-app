"use client";

import { useEffect, useState } from "react"

import Card from "@/components/layouts/Card";


export interface Cafes {
  _id : string,
  name: string,
  address: string,
  description:string,
  images: string[]
 }


export default function Cafes() {


  //カフェの一覧を取得する関数
  const fetchCafes = async () => {
    try {
      const res = await fetch("/api/cafes/")
      if(!res) {
        throw new Error("データの取得に失敗しました。");
      }
      const cafes = await res.json()
      return cafes
      console.log(cafes)
  
    } catch (error) {
      console.error(error);
      return []; // エラー発生時は空配列を返す
    }
  
  }

  const [ cafes, setCafes ] = useState<Cafes[]>([]);

  //初回表示時にカフェ一覧取得する
  useEffect(() => {
    fetchCafes().then((cafes) => {
      setCafes(cafes);
      console.log(cafes)
    })
  },[])
  
  return (
   <div>

    <Card cafes={cafes}/>
   </div>
  );
}