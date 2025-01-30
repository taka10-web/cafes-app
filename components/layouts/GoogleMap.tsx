import React from "react";
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
// import { Cafes } from "@/app/cafes/page";

const mapStyle = {
  width: "100%",
  height: "46vh",
};

type MapProps = {
  cafeAdress: string | undefined;
};

export const GoogleMap: React.FC<MapProps> = ({ cafeAdress }) => {
  //中心となる緯度経度
  // const position = { lat: 35.710063, lng: 139.8107 };
  const [position, setPosition] = useState({ lat: 35.710063, lng: 139.8107 });
  const mapRef = useRef<HTMLDivElement>(null);

  //Loaderの初期化
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    version: "weekly",
  });

  // 初回レンダリング時に使用するライブラリを非同期でロード
  useEffect(() => {
    (async () => {
      const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        loader.importLibrary("maps"),
        loader.importLibrary("marker"),
      ]);
      // 地図の描画
      const map = new Map(mapRef.current!, {
        center: position,
        zoom: 15,
        mapId: "DEMO_MAP_ID",
      });
      // マーカーの描画
      new AdvancedMarkerElement({ map, position, title: "" });
      //住所を取得
    })();
  }, [position]);

  useEffect(() => {
    (async () => {
      //住所を取得
      const address = cafeAdress;
      //Geocoderを使用可能にする
      const { Geocoder } = await loader.importLibrary("geocoding");
      const geocoder = new Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (results) {
          const { lat, lng } = results[0].geometry.location;
          if (status === "OK") {
            setPosition({ lat: lat(), lng: lng() });
            console.log("OK");
          }
        }
      });
    })();
  }, []);

  return (
    <>
      <div ref={mapRef} style={mapStyle} className="rounded-t-2xl"></div>
    </>
  );
};
