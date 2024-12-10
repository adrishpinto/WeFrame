import { useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
const SimilarArticles = () => {
  const scrollX = useRef(null);

  const left = () => {
    scrollX.current.scrollBy({ left: "-310", behavior: "smooth" });
  };

  const right = () => {
    scrollX.current.scrollBy({ left: "310", behavior: "smooth" });
  };

  return (
    <div>
      <div className="h-[43px] sm:w-[1440px] flex-col sm:flex-row justify-center flex items-center sm:justify-between mx-auto ">
        <h1 className="text-[35px] cg-font font-[500] sm:text-center">
          Articles similaires
        </h1>
        <h1 className="uppercase underline font-[500] text-[16px] sm:text-center">
          Voir toute la collection
        </h1>
      </div>
      <div className="relative mt-10  overflow-hidden">
        <img
          src="arrow-left.svg"
          alt="arr"
          onClick={left}
          className="size-[46px] bg-[#5CD2DD] border-[15px] border-[#5CD2DD] absolute z-[1] top-[37%] left-0 cursor-pointer"
        />
        <div
          className="flex overflow-x-scroll  no-scrollbar ml-[10px]"
          ref={scrollX}
        >
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <img
          src="arrow-right.svg"
          alt="arr"
          onClick={right}
          className="size-[46px]  bg-[#5CD2DD] border-[15px] border-[#5CD2DD] absolute z-[1] top-[37%] right-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

const Item = () => {
  const [fav, setFav] = useState(false);
  return (
    <div className="w-[330px] h-[438px] flex flex-col ml-[27px] ">
      <div className="w-[295px] h-[340px] relative bg-[#F9F7F5] items-center justify-center flex">
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
        <img src="table.png" className="size-[224px]" alt="table" />
      </div>
      <div className="bg-white flex-col  ">
        <div className="flex justify-between px-1">
          <p className="text-[24px] pd ">Title</p>
          <div className="flex">
            <p className="font-[500] text-[24px] ">0</p>
            <p className="font-[500] text-[16px]">€</p>
          </div>
        </div>
        <div className="flex items-center justify-between  w-full mt-1 px-1">
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

export default SimilarArticles;
