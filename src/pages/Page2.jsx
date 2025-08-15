import React from "react";
import BrandsMarque from "../components/BrandsMarque";
import CardsMarque from "../components/CardsMarque";

const Page2 = () => {
  return (
    <div className="relative pt-10 w-full pb-40 md:pb-20 md:h-fit lg:h-[120vh]">
      <div className="left-shadow absolute w-28 md:w-44 h-84 -translate-y-32 -translate-x-10 bg-black/50 blur-2xl z-50 rounded-r-full"></div>
      <BrandsMarque />
      <h2 className="capitalize text-4xl md:text-6xl font-semibold tracking-tight text-white text-center my-20 md:my-20 md:mb-0">
        popular this week
      </h2>
      <CardsMarque />

      <div className=" right-shadow  absolute right-0 top-0 w-28 md:w-44 h-84 -translate-y-40 translate-x-10 bg-blue-700/60 blur-3xl z-50 rounded-l-full"></div>
    </div>
  );
};

export default Page2;
