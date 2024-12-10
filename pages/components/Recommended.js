import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Recommended = () => {
  return (
    <>
      <div className="mt-[50px]   sm:w-[1440px] flex-col  mx-auto ">
        <div className="flex items-center justify-between flex-col sm:flex-row w-full">
          <h1 className="text-[30px] text-center leading-8 sm:leading-10 mb-5 sm:mb-0 sm:text-[35px] cg-font font-[500] sm:text-center">
            Ces produits pourraient vous intéresser
          </h1>
          <h1 className="uppercase underline font-[500] text-[16px] sm:text-center">
            Voir toute la collection
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row mt-[30px] justify-between items-center space-y-10 sm:space-y-0">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
};

const Item = () => {
  const [fav, setFav] = useState(false);
  return (
    <div className="w-4/5 sm:w-[466px] h-[438px] flex flex-col z-[1]">
      <div className="w-full sm:w-[466px] h-[362px] relative bg-[#F9F7F5] items-center justify-center flex">
        <div
          className="absolute top-4 left-4 text-[26px] stroke-amber-400 stroke-2 cursor-pointer "
          onClick={() => setFav((prev) => !prev)}
        >
          {fav ? (
            <FaHeart className="text-red-500 text-[26px]  py-1 px-1" />
          ) : (
            <CiHeart className={`stroke-[0px] w-fit h-fit`} />
          )}
        </div>
        <div className="upper text-[10px] absolute bg-white font-[500] top-4 right-4 w-[100px] h-[18px] flex items-center justify-center">
          Art de la table
        </div>
        <img src="table.png" className="size-[224px]" />
      </div>
      <div className="bg-white flex-col w-full ">
        <div className="flex justify-between px-2">
          <p className="text-[24px] pd ">Title</p>
          <div className="flex">
            <p className="font-[500] text-[24px] ">0</p>
            <p className="font-[500] text-[16px]">€</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-2 mt-1">
          <p className="text-[14px] text-[#9C9C9C]">
            0,35€/Pièce · RÉF : VABGN5
          </p>
          <div className="bg-[#F1F4F6] rounded-[8px] flex items-center justify-center text-[11px]">
            20 pièces
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recommended;
