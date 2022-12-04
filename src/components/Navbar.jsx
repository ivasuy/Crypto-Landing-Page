import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#64DFDF]">DEFI</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <li>Platform</li>
            <li>Developer</li>
            <li>Community</li>
            <li>About</li>
            <button className="ml-4 inline-flex items-center justify-center h-14 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
              Use DEFI
            </button>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineMenu size={30} className="text-white" />
          ) : (
            <AiOutlineClose size={30} className="text-white" />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl">Platform</li>
            <li className="text-2xl">Developer</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">About</li>
            <button className="m-8 px-8 inline-flex items-center justify-center h-14 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
              Use DEFI
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
