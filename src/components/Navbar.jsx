import React from "react";

const Navbar = () => {
  return (
    <nav className="text-white px-14 py-6 flex items-center justify-between">
      <div className="logo flex items-center gap-1 text-3xl font-bold ">
        <h4>PLAY</h4>
        <div className="bg-gradient-to-r from-purple-600 to-blue-400 px-1 leading-none">
          <h4>NFT</h4>
        </div>
      </div>
      <div className="menu">
        <ul className="flex items-center gap-14">
          {["home", "explore", "marketplace", "artists", "news"].map(
            (item, index) => (
              <li
                key={index}
                className="group capitalize relative cursor-pointer hover:font-medium transition-all duration-300 mx-3"
              >
                {item}
                <div className="line absolute left-0 -bottom-[2px] w-[0%] h-[3px]  transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-400 rounded-full group-hover:w-[60%]"></div>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
