import React, { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuLinks = [
    { title: "Home", url: "home" },
    { title: "Explore", url: "explore" },
    { title: "Marketplace", url: "marketplace" },
    { title: "Artists", url: "artists" },
    { title: "News", url: "news" },
  ];

  return (
    <nav className="relative z-50 text-white px-14 py-6 flex items-center justify-between bg-[#060318]">
      <Logo />
      <div className="menu hidden md:inline-block">
        <ul className="flex items-center gap-14 ">
          {menuLinks.map((item) => (
            <li
              key={item.title}
              className="group capitalize relative cursor-pointer hover:font-medium transition-all duration-300 mx-3"
            >
              <Link to={item.url} smooth="true" duration={600}>
                {item.title}
              </Link>
              <div className="line absolute left-0 -bottom-[2px] w-[0%] h-[3px]  transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-400 rounded-full group-hover:w-[60%]"></div>
            </li>
          ))}
        </ul>
      </div>
      {isOpen ? (
        <X
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer w-8 h-8 inline-block md:hidden"
        />
      ) : (
        <Menu
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer w-8 h-8 inline-block md:hidden"
        />
      )}
      <ul
        className={`bg-black/70 backdrop-blur-md max-w-[95%] mx-auto absolute inset-x-0 ${
          isOpen ? "top-22" : "-translate-y-full"
        } flex flex-col items-center justify-center gap-6 py-12 font-medium transition-all duration-300 md:hidden`}
      >
        {menuLinks.map((item) => (
          <li
            key={item.title}
            className="group capitalize relative cursor-pointer hover:font-medium transition-all duration-300 mx-3"
          >
            <Link to={item.url} smooth="true" duration={600}>
              {item.title}
            </Link>
            <div className="line absolute left-0 -bottom-[2px] w-[0%] h-[3px]  transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-400 rounded-full group-hover:w-[60%]"></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
