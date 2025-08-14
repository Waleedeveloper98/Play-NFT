import React from "react";

const SellerCard = ({ card }) => {
  const { image, name, text } = card;
  return (
    <div className="seller shrink-0 border-[1.5px] border-sky-800 bg-gradient-to-bl from-[#200E50] to-[#0D2F57] w-48 sm:w-60 rounded-xl px-3 py-2 flex gap-3 items-start">
      <div className="w-14 h-12 sm:h-16 sm:w-16 rounded-md sm:rounded-xl bg-black overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div>
        <h4 className="font-semibold text-xs sm:text-base">{name}</h4>
        <h5 className="text-xs  mt-2 sm:mt-0 sm:text-sm text-zinc-100">
          {text}
        </h5>
      </div>
    </div>
  );
};

export default SellerCard;
// #200E50
// #0D2F57
