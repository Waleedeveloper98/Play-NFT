import React from "react";
import ArtworkBtn from "./ArtworkBtn";

const Artwork = ({ category }) => {
  const {
    title,
    buttonText,
    images: [img1, img2, img3, img4],
  } = category;

  return (
    <div className="relative w-68 h-48 pt-2 rounded-2xl bg-gradient-to-r from-blue-950/20 to-sky-500 overflow-hidden border-[1.5px] border-blue-800">
      <div className="w-[97%] mx-auto h-4/5 rounded-l-2xl rounded-r-2xl rounded-b-none grid gap-1 overflow-hidden grid-rows-2 grid-cols-3">
        <div className="box overflow-hidden">
          <img className="w-full h-full object-cover" src={img1} alt="" />
        </div>
        <div className="box ">
          <img className="w-full h-full object-cover" src={img2} alt="" />
        </div>
        <div className="box ">
          <img className="w-full h-full object-cover" src={img3} alt="" />
        </div>
        <div className="box col-span-3">
          <img className="w-full h-full object-cover" src={img4} alt="" />
        </div>
      </div>
      <div className="w-full h-1/5 flex items-center justify-between px-2">
        <h3 className="font-light text-zinc-100">{title}</h3>
        <ArtworkBtn text={buttonText} />
      </div>
    </div>
  );
};

export default Artwork;
