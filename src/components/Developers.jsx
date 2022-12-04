import React from "react";
import terminal from "../assets/terminal.png";

const Developers = () => {
  return (
    <div className=" text-white bg-black h-[70vh]">
      <div className="max-w-full m-auto h-full flex flex-col justify-center	sm:justify-between sm:flex-row">
        <div className="sm:m-auto p-4">
          <h2 className="text-5xl">Superpowers for DEFI developers.</h2>
          <p className="py-3">
            Checkout the <span className="blue">documentation</span>, the{" "}
            <span className="blue">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className="flex items-center mx-auto px-10">
          <img
            className="w-[250px] shadow-lg shadow-cyan-500/50"
            src={terminal}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;
