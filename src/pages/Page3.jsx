import React from "react";
import SellerCard from "../components/SellerCard";
import { marque1, marque2 } from "../data";
import ArtworkGallery from "../components/ArtworkGallery";

const Page3 = () => {
  return (
    <div id="marketplace" className="w-full min-h-screen text-white py-14">
      <h1 className="text-center text-5xl font-bold mb-20">Top Sellers</h1>
      <div className="sellers-marques-contaier relative py-10 flex flex-col gap-6">
        <div className="seller-marque1 flex flex-nowrap gap-10">
          {marque1.map((card, idx) => (
            <SellerCard key={idx} card={card} />
          ))}
          {marque1.map((card, idx) => (
            <SellerCard key={`marque1 ${idx}`} card={card} />
          ))}
        </div>
        <div className="seller-marque2 flex flex-nowrap gap-10 ">
          {marque2.map((card, idx) => (
            <SellerCard key={idx} card={card} />
          ))}
          {marque2.map((card, idx) => (
            <SellerCard key={`marque2 ${idx}`} card={card} />
          ))}
        </div>
        <div className="left-shade absolute -left-10 top-0  blur-xl w-18 md:w-28 h-full bg-black"></div>
        <div className="right-shade absolute -right-10 top-0  blur-xl w-18 md:w-28 h-full bg-black"></div>
      </div>
      <ArtworkGallery />
    </div>
  );
};

export default Page3;
