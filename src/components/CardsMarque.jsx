import React from "react";
import Card from "./Card";

const CardsMarque = () => {
  return (
    <div className="cards-marque-container w-full lg:h-[80vh] relative z-50   flex items-center mt-20 justify-center">
        {/* side blur */}
        <div className="left-blur absolute h-full w-14 md:w-28 bg-black/70 blur-xl -left-7 z-50 rounded-r-full"></div>
        <div className="right-blur absolute -right-7 w-14 md:w-28 h-full rounded-l-full z-50 bg-black/70 blur-xl"></div>


      <div className="pr-20 card-marque flex items-center justify-center whitespace-nowrap gap-14">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardsMarque;
