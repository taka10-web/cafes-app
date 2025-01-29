import React from "react";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export const GoogleMap = () => {
  //中心となる緯度経度
  const position = { lat: 35.710063, lng: 139.8107 };
  const mapRef = useRef<HTMLDivElement>(null);

  //Loaderの初期化
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    version: "weekly",
  });

  // 初回レンダリング時に使用するライブラリを非同期でロード
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    (async () => {
      const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        loader.importLibrary("maps"),
        loader.importLibrary("marker"),
      ]);
      // 地図の描画
      const map = new Map(mapRef.current!, {
        center: position,
        zoom: 10,
        mapId: "DEMO_MAP_ID",
      });
      // マーカーの描画
      new AdvancedMarkerElement({ map, position, title: "" });
    })();
  }, []);

  return <div ref={mapRef} style={{ height: 300, width: 300 }}></div>;
};
