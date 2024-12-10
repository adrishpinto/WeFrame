
function Header() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col sm:items-start items-center inter">
        {/* icon + search bar */}
        <div className="flex sm:flex-row flex-col sm:items-start items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-[65px] sm:w-[133.01px] w-[60%] mt-[33px] ml-[29px] "
          />
          <div className="sm:w-[748px] border border-slate-500 sm:border-0 rounded h-[50px]  flex items-center mt-[29px] ml-[11px] p-[0px] pl-[15px] gap-[10px] bg-[#F9FAFB] ">
            <input
              type="text"
              className="text-[14px] bg-[#F9FAFB] placeholder:text-[#667482] outline-none w-full"
              placeholder="Rechercher un produit"
            />
            <img
              src="/search-icon.svg"
              className="ml-auto size-[18px] mr-[13px] cursor-pointer "
            />
          </div>
        </div>
        {/* inspiration + fav etc */}
        <div className="flex sm:ml-[80px] sm:gap-[12px] sm:flex-row  sm:items-start sm:w-fit flex-col w-full items-center">
          <div className="flex mt-[45px]  ">
            <div className="flex sm:w-[109px] sm:h-[21px] sm:gap-[8px] items-center  justify-center cursor-pointer">
              <img src="/lightbulb.svg" className="size-[18px]" />
              <p className="font-medium text-[14px]  "> Inspirations</p>
            </div>
          </div>
          <div className="flex mt-[31px] ">
            <div className="flex sm:w-[164px] sm:h-[48px] gap-[8px] items-center  justify-center cursor-pointer">
              <img src="/heart.svg" className="size-[20px]" />
              <p className="font-[500] text-[14px] ">Mes favoris</p>
              <div className="w-[28px] h-[18px] rounded-[30px] bg-[#CAD2D566] text-[10px] flex items-center justify-center leading-[18px]">
                24
              </div>
            </div>
          </div>
          <div className="flex sm:mt-[31px] mt-5">
            <div className="flex w-[108px] size-[20px] bg-[#0093D0] rounded-[6px] h-[48px] gap-[8px] items-center cursor-pointer justify-center">
              <img src="/cart.svg" className="size-[18px]" />
              <p className="font-[500] text-[14px] text-white ">Painter</p>
            </div>
          </div>
          <div className="bg-[#EAEDEE] size-[44px] mt-5 sm:mt-[33px] rounded-[46px] "></div>
          <div className="flex w-[38px] h-[14px] gap-[8px] mt-5 mb-10 sm:mb-0 sm:mt-[48px] text-[14px] font-[500] items-center justify-center ">
            <p className="cursor-pointer">FR</p>
            <img src="down-arrow.svg" className="w-[10px] h-[5.83px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
