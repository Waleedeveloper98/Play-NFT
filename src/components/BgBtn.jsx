import React from "react";

const BgBtn = ({text,color}) => {
  return (
    <button className={`bg-gradient-to-r  from-purple-600 to-blue-400 px-4 py-1 font-semibold rounded-md cursor-pointer hover:scale-105 transition-all duration-300 text-sm md:text-base ${color}`}>
      {text}
    </button>
  );
};

export default BgBtn;
