import React from "react";

const BrandsMarque = () => {
  const brands = [
    "Binance",
    "Paypal",
    "Coinbase",
    "Revolut",
    "Blockchain",
    "OKX",
    "Bitget",
  ];

  return (
    <div className="relative w-full h-20 bg-gradient-to-r from-[#311673] to-[#214594] overflow-hidden flex items-center">
      <div className="marque">
        <div className="flex gap-20 pr-20 md:gap-36 md:pr-36 text-white text-2xl md:text-3xl font-semibold">
          {brands.map((brand, idx) => (
            <h2 key={idx}>{brand}</h2>
          ))}
        </div>
        <div className="flex gap-20 pr-20 md:gap-36 md:pr-36 text-white text-2xl md:text-3xl font-semibold">
          {brands.map((brand, idx) => (
            <h2 key={`copy-${idx}`}>{brand}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsMarque;
