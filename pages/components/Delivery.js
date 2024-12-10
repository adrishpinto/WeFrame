import { toast } from "react-toastify";

const Delivery = () => {
  return (
    <div className="mt-[83px]  w-full bg-gradient-to-b from-[#ee41970c] to-white ">
      <div className="invisible">.</div>
      {/* title start */}
      <div className="mt-[66px] w-fit mx-auto ">
        <h1 className="font-[500] text-[35px] text-center cg-font  ">
          On s’occupe de <span className="text-[#5CD2DD] font-[800]">tout</span>
        </h1>
        <p className="text-[#9C9C9C] mt-[8px] text-[14px] text-center ">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>
      {/* title end */}
      {/* Delivey start */}
      <div className="mt-[50px] sm:w-[928px] mx-auto flex flex-col sm:flex-row items-center sm:justify-between sm:space-y-0 space-y-28 ">
        <div className="flex items-center flex-col w-[178px] h-[115px] relative z-[-1] ">
          <img src="delivery.svg" alt="delivery" />
          <p className="cg-font text-[20px] mt-1">Livrais & Reprise</p>
          <p className="text-[#9C9C9C] mt-[8px] text-[14px]">
            Selon vos besoins
          </p>
          <div className="h-[0.5px] w-[128px] bg-[#9C9C9C]  sm:absolute top-[25%] right-[-50%] opacity-0 sm:opacity-100"></div>
          <div className="h-[100px] w-[0.5px] bg-[#9C9C9C]  sm:hidden absolute bottom-[-90%]"></div>
        </div>

        <div className="flex items-center flex-col w-[117px] h-[115px] relative z-[-1] ">
          <img src="delivery-2.svg" alt="delivery2" />
          <p className="cg-font text-[20px] mt-1">Nettoyage</p>
          <p className="text-[#9C9C9C] mt-[8px] text-[14px]">
            Selon vos besoins
          </p>
          <div className="h-[0.5px] w-[128px] bg-[#9C9C9C]  sm:absolute top-[25%] right-[-100%]  opacity-0 sm:opacity-100"></div>
          <div className="h-[100px] w-[0.5px] bg-[#9C9C9C]  sm:hidden absolute bottom-[-90%]"></div>
        </div>

        <div className="flex items-center flex-col w-[182px] h-[115px] relative z-[-1]">
          <img src="delivery-3.svg" alt="delivery3" />
          <p className="cg-font text-[20px] mt-1 ">Commande Illimitée</p>
          <p className="text-[#9C9C9C] mt-[8px] text-[14px]">
            Tout est possible
          </p>
          <div className="h-[0.5px] w-[166px] bg-[#9C9C9C]  sm:absolute top-[25%] right-[-70%] opacity-0 sm:opacity-100"></div>
          <div className="h-[100px] w-[0.5px] bg-[#9C9C9C]  sm:hidden absolute bottom-[-90%]"></div>
        </div>

        <div className="flex items-center flex-col  w-[220px] h-[119px] z-[-1]">
          <img
            src="delivery-4.svg"
            className="h-[54px] w-[62px]"
            alt="delivery4"
          />
          <p className="cg-font text-[20px] mt-1">Transport & Enlèvement</p>
          <p className="text-[#9C9C9C] mt-[8px] text-[14px]">
            On s’occupe de tout.
          </p>
        </div>
      </div>
      {/* Delivery End */}
      {/* Email Start */}
      <div className="mt-[137px] px-5">
        <div className="flex flex-col sm:flex-row">
          <img
            src="sofa.jpg"
            className="h-[300px] sm:w-[46.2%] rounded-xl"
            alt="sofa"
          />
          {/* email section */}
          <div className="bg-[#FFF3F9] p-5 sm:p-0 sm:w-[53.8%] sm:h-[300px] mt-20 sm:mt-0 sm:ml-[19px] rounded-xl">
            <div className="hidden">.</div>
            <div className="sm:w-[726px] mt-[34px] sm:ml-[33px]">
              <h1 className="font-[500] cg-font text-4xl sm:text-[43px] h-[53px]">
                S’inscrire & économiser{" "}
                <span className="text-[#5CD2DD]">10%</span>{" "}
              </h1>
              <p className="text-[#BDA2B0] sm:mt-[16px] text-[14px] leading-[22px] mt-10 w-[98%] ">
                Office ipsum you must be muted. Synergize helicopter prioritize
                anyway job due harvest most opportunity didn't. Yet busy any
                meeting shark light marginalised 4-blocker message. Productize
                corporate nail caught synergy highlights lunch. Company another
                pushback items dear or any.
              </p>
              <div className="mt-[22px] gap-3 flex flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="john@doe.com"
                  className="sm:w-[515px] h-[58px] pl-[22px] placeholder:text-[#A68A98] placeholder:text-[18px] outline-none border-[1px] border-[#F5E1EB] rounded-md"
                />
                <div className="mx-1 sm:mx-0 flex h-[50px] gap-2 sm:h-[60px] bg-[#5CD2DD] items-center justify-center sm:w-[157px] rounded-md">
                  <button
                    className="font-[700] w- cg-font text-[18px] text-white uppercase"
                    onClick={() => toast("Email sent Succesfully")}
                  >
                    S’inscrire
                  </button>
                  <img
                    src="arrow-right.svg"
                    alt="arr"
                    className="sm:size-[22px] size-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Email End */}
    </div>
  );
};

export default Delivery;
