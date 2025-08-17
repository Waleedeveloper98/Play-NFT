import React from "react";
import BgBtn from "./BgBtn";

const JoinBanner = () => {
  return (
    <div
      id="news"
      className="join-banner w-[95%] md:w-[70%] py-5 md:py-10 flex flex-col gap-6 items-center justify-center bg-gradient-to-r from-[#342687] to-[#144E88] mx-auto"
    >
      <h2 className="text-white md:text-4xl w-3/5 font-semibold text-center ">Join Us to Create Sell and Collect NFTd Digital Art</h2>
      <BgBtn text={"Join Community"} color={"text-white"}/>
    </div>
  );
};

export default JoinBanner;
