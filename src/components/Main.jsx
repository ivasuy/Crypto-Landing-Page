import React from "react";
import mainVid from "../assets/video.mp4";

const Main = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={mainVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1>Decentralized</h1>
        <h1 className="py-2">
          <span className="blue">Trading</span> Protocol
        </h1>
        <p className="text-xl py-5">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className="m-2 inline-flex items-center justify-center h-16 px-6 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
            Documentation
          </button>
          <button className="m-2 inline-flex items-center justify-center h-16 px-8 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
            FAQ
          </button>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-2xl font-bold">
          Total Volume Secured: $42,104,783,662.47
        </p>
      </div>
    </div>
  );
};

export default Main;
