import { Cafes } from "@/app/cafes/page";

type CardProps = {
  cafe: Cafes | undefined;
};

const DetailCard: React.FC<CardProps> = ({ cafe }) => {
  return (
    <>
      <div className="shadow-md border rounded-2xl boder-gary-300 lg:w-1/3 sm:w-1/2 mx-5 my-8">
        <div>
          <img
            src={cafe?.images[0]}
            alt={"cafeImag"}
            className="object-contain w-full rounded-t-2xl"
          />
        </div>
        <h2 className="text-lg font-bold ml-3 mt-3">{cafe?.name}</h2>
        <div className="text-lg text-yellow-600 ml-3 mt-3">★★★☆☆</div>
        <p className="ml-3 mt-3">{cafe?.description}</p>
        <ul className="mt-5">
          <li className="py-8 border-y border-gray-300">
            <span className="text-gray-600 text-md ml-2">住所 : </span>
            {cafe?.address}
          </li>
          <li className="py-8 border-b border-gray-300">
            <span className="text-gray-600 text-md ml-2">電話番号 : </span>
            {cafe?.phone_number}
          </li>
          <li className="py-8 border-b border-gray-300">
            <span className="text-gray-600 text-md ml-2">アクセス: </span>
            {cafe?.access}
          </li>
          <li className="py-8 border-b border-gray-300">
            <span className="text-gray-600 text-md ml-2">営業時間 : </span>
            {cafe?.business_hours}
          </li>
          <li className="py-8">
            <span className="text-gray-600 text-md ml-2">定休日 : </span>
            {cafe?.regular_holiday}
          </li>
        </ul>
      </div>
    </>
  );
};
export default DetailCard;
