import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full px-4 py-16 bg-black text-white text-center">
      <h1>Join Our DeFi Community</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-4"
          type="email"
          placeholder="Enter Your E-Mail"
        />
        <button className="inline-flex items-center justify-center h-16 px-8 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
          Sign Up
        </button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input className="mr-2" type="checkbox" />
        <p>Yes, I agree to receive email communications from DeFi.</p>
      </div>
    </div>
  );
};

export default Subscribe;
