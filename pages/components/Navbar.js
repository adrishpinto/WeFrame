import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [clicked, setClicked] = useState(0);
  const [nav, setNav] = useState(false);

  const navData = [
    { name: "Art de la table", id: "1" },
    { name: "Mobilier", id: "2" },
    { name: "Nappage", id: "3" },
    { name: "Matériel de salle", id: "4" },
    { name: "Cuisine", id: "5" },
    { name: "Barbecue", id: "6" },
    { name: "Tente", id: "7" },
    { name: "Chauffage", id: "8" },
    { name: "Podium - Piste de danse", id: "9" },
    { name: "Son et lumière", id: "10" },
    { name: "Packs", id: "11" },
    { name: "Consommables", id: "12" },
  ];

  return (
    <div className="sticky top-0 relative z-[50] mb-40">
      <div className="w-full bg-white h-[27px]">
        <div
          className="text-2xl absolute top-0 left-0 z-[60] block sm:hidden"
          onClick={() => setNav((prev) => !prev)}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className="w-full border-[#E5E7EB] mx-auto top-7 absolute bg-slate-50 sm:hidden z-[50]">
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden border border-black top-1 z-[50]"
            >
              {navData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setNav(false);
                  }}
                  className="text-center py-2 border-b border-black"
                >
                  {item.name}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="sm:w-[1537px] sm:stactic">
        <div className="w-full border-b-[1px] border-[#E5E7EB] mx-auto">
          <div className="w-fit h-[37.58px] mt-[32px] mx-auto gap-[38px] sm:flex hidden">
            {navData.map((item) => (
              <p
                key={item.id}
                onClick={() => setClicked(item.id)}
                className={`
                  inter
                  uppercase
                  tracking-tight
                  w-fit
                  text-[14px]
                  hover:cursor-pointer
                  ${
                    clicked == item.id
                      ? "text-[#0093D0] border-b border-[#0093D0] font-[700]"
                      : "text-[#6B7280]"
                  }
                `}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
