import React from "react";
import { Cafes } from "@/app/cafes/page";

type CardProps = {
  cafes: Cafes[];
  handleCafeDetails: (id: string) => void;
};

const Card: React.FC<CardProps> = ({ cafes, handleCafeDetails }) => {
  return (
    <div className="bg-white py-2 ">
      {cafes.map((cafe: Cafes) => (
        <div
          className="max-w-sm w-full lg:max-w-full lg:flex mt-3 justify-center mx-auto"
          key={cafe._id}
          onClick={() => {
            handleCafeDetails(cafe._id);
          }}
        >
          <div
            className="h-48 w-auto lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden cursor-pointer cursor: pointer "
            style={{ backgroundImage: `url('${cafe.images}')` }}
          ></div>
          <div className="auto border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal lg:w-3/5 cursor-pointer cursor: pointer transition hover:bg-zinc-100  duration-300 ">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                Cafe Info
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {cafe.name}
              </div>
              <p className="text-gray-700 text-base">{cafe.description}</p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Torako</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
