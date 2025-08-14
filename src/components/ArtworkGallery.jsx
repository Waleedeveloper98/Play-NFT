import React from "react";
import Artwork from "./Artwork";
import { categories } from "../data";

const ArtworkGallery = () => {
  return (
    <div className="w-full">
      <h1 className="text-center text-5xl mt-10 font-bold mb-20">Explore Artworks</h1>
      <div className="gallery  rounded-lg mx-auto w-4/5 flex justify-center flex-wrap gap-10">
        {categories.map((category,idx)=>(
          <Artwork key={idx} category={category}/>
        ))}
      </div>
    </div>
  );
};

export default ArtworkGallery;
