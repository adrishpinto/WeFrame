import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainSection = () => {
  const notify = () => toast("Wow so easy!");
  const [clicked, setClicked] = useState(1);
  const [count, setCount] = useState(1);
  const [fav, setFav] = useState(0);
  const data = [1, 2, 3, 4];
  return (
    <div>
      <div className="flex items-center justify-center w-[159px] h-[45px] ml-[34px] mt-2 ">
        <p className="text-[14px] font-[500] ">Home </p>
        <span className="inline-block w-[5px] h-[5px] rounded-full bg-[#9C9C9C] mx-2"></span>{" "}
        <span className="text-[#9C9C9C] text-[14px] font-[500]">
          Art de la table
        </span>
      </div>
      <div className="flex lg:flex-row flex-col">
        {/* Images */}
        <div className="sm:w-[761px] h-[652px] z-[-1] mt-[9px] bg-[#F8F6F4] relative rounded-md sm:ml-[30px] flex items-center justify-center">
          <div className="flex flex-col top-0 left-0 absolute mt-2">
            {data.map((item) => {
              return (
                <div
                  key={item}
                  className="size-[55px] bg-white rounded-sm my-1 flex items-center justify-center ml-[11px]"
                >
                  <img
                    className={`size-[40px] hover:cursor-pointer opacity-50 ${clicked == item && "opacity-[100]"}`}
                    onClick={() => setClicked(item)}
                    src="table.svg"
                    alt="table"
                  />
                </div>
              );
            })}
          </div>
          <div className="">
            <img
              src="machine_processed.png"
              className="sm:size-[552px]"
              alt="machine"
            />
          </div>
        </div>
        {/* specs */}
        <div>
          <div className="sm:ml-[25px] mx-4 sm:mx-4  mt-[9px] sm:w-[724px] ">
            {/* title start */}
            <div className=" sm:w-[743.64px] flex justify-between pr-6  items-center flex-col sm:flex-row">
              <h1 className="text-[30px] pd">
                Cheese – appareil à raclette 1/2 roue
              </h1>
              {!fav ? (
                <img
                  src="/heart.svg"
                  className="size-[27.64px] cursor-pointer"
                  onClick={() => setFav(1)}
                  alt="heart"
                />
              ) : (
                <FaHeart
                  onClick={() => setFav(0)}
                  className="text-2xl mr-[1px] text-red-600 cursor-pointer"
                />
              )}
            </div>
            <div className="flex items-center border-b-[0.5px] border-[#9C9C9C] border-opacity-40">
              <p className="text-[24px] tracking-tighter">39,50€</p>
              <p className="text-[#9C9C9C] text-[14px] ml-2">/pièce</p>
            </div>
            {/* title end */}
            {/* scale and diameter start*/}
            <div className="flex border-b-[0.5px] pb-[18px] border-[#9C9C9C] border-opacity-40">
              <div className="flex items-center h-[24px] mt-5 ">
                <img src="/scale.svg" className="size-[24px] " alt="scale" />
                <div className="flex justify-start ml-[10px]">
                  <div className="text-[16px]">20</div>
                  <div className="text-[10px]">cm</div>
                </div>
              </div>
              <div className="flex items-center h-[24px] mt-5 ml-4">
                <img
                  src="/diameter.svg"
                  className="size-[24px] "
                  alt="diameter"
                />
                <div className="flex justify-start ml-[10px]">
                  <div className="text-[16px]">50</div>
                  <div className="text-[10px]">cm</div>
                </div>
              </div>
            </div>
            {/* scale and diameter end*/}
            {/* specs start */}
            <div>
              <div className="text-[14px] mt-[15px] text-[#5D5D5D] ">
                <p>
                  Location appareil à raclette - Raclette traditionnelle 1/2
                  roue
                </p>
                <p>Réglable en hauteur</p>{" "}
                <p>Appareil à raclette professionnel</p>
                <p>Boîtier de chauffe horizontal réglable en hauteur</p>  
                <p> 220V</p>
                <p>900W</p>
              </div>
            </div>
            {/* specs end */}
            {/* add items start */}
            <div className="mt-20 sm:mt-[271px] border-t-[0.5px] border-[#9C9C9C] border-opacity-40 ">
              <div className="flex">
                {/* counter */}
                <div className="flex w-[153px] text-[16px] mt-[5px] h-[49px] rounded-sm border border-black border-opacity-[13%]  items-center justify-between px-3">
                  <div
                    className="size-4  items-center justify-center flex hover:cursor-pointer"
                    onClick={() =>
                      setCount((prev) => {
                        return prev > 0 ? prev - 1 : 0;
                      })
                    }
                  >
                    <div className="bg-[#9C9C9C] h-[1px] w-[9.33px] "></div>
                  </div>
                  <div>{count}</div>
                  <div
                    className="size-4  items-center justify-center flex hover:cursor-pointer"
                    onClick={() => setCount((prev) => prev + 1)}
                  >
                    <div className="text-[#393939] hover:cursor-pointer">+</div>
                  </div>
                </div>
                {/* add item */}
                <div
                  onClick={() => toast("Item(s) added")}
                  className="bg-[#5CD2DD] cursor-pointer w-[592px] h-[50px] rounded mt-[5px] ml-[8px] flex items-center justify-center font-white cg-font uppercase text-white text-[16px] "
                >
                  {" "}
                  Ajouter au panier
                </div>
              </div>
            </div>
            {/* add items end */}
          </div>
        </div>
      </div>
      {/* description start */}
      <div className="sm:ml-[36px] sm:mx-0 mx-2 flex  flex-col sm:flex-row ">
        <div className="flex flex-col mt-[40px]">
          <div className="cg-font  text-[20px] text-[#111928] font-[400]">
            Description produit
          </div>
          <p className="sm:w-[711px] leading-[18.2px] text-[14px] text-[#9C9C9C] mt-[10px]">
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
            pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit
            pour votre mariage, une fête d'anniversaire ou du personnel, ce
            produit a fait l'objet d'une sélection rigoureuse par notre équipe.
            Il est en location chez nous sous la référence "VAJGC". Nous sommes
            à votre disposition pour que les événements de nos clients, même en
            last-minute, soient toujours une réussite. Vous pourrez trouver tout
            une série d'autre produit à louer de ce type dans la catégorie "Art
            de la Table".
          </p>
        </div>
        <div className=" mb-[80px] ">
          <div className="sm:w-[658px] sm:ml-[51px] h-[62px] mt-[53px] flex items-center justify-between px-3 bg-[#FBF9F899]">
            <p className="text-[16px] font-[500] cg-font text-[#393939]">
              Livraisons
            </p>
            <div className="text-[24px]">+</div>
          </div>
          <div className="sm:w-[658px] sm:ml-[51px] h-[62px] flex items-center justify-between px-3 bg-[#FBF9F899]">
            <p className="text-[16px] font-[500] cg-font text-[#393939]">
              Questions
            </p>
            <div className="text-[24px]">+</div>
          </div>
        </div>
      </div>
      {/* description end */}
    </div>
  );
};

export default MainSection;
