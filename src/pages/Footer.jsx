import React from "react";
import JoinBanner from "../components/JoinBanner";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { BsDiscord } from "react-icons/bs";
import Logo from "../components/Logo";

const Footer = () => {
  const footerItems = [
    {
      title: "Explore",
      items: ["Art", "Photography", "Music", "Games"],
    },
    {
      title: "My Account",
      items: [
        "My Profile",
        "My Collections",
        "My Favorites",
        "My Account Settings",
      ],
    },
    {
      title: "Resources",
      items: ["Help Center", "Partners", "Suggestions", "NewsLetters"],
    },
    {
      title: "Company",
      items: ["About", "Careers", "Ranking", "Activity"],
    },
  ];
  return (
    <div className="w-full h-screen pt-20 flex flex-col justify-between sm:justify-end sm:gap-24 sm:h-fit">
      <JoinBanner />
      <footer className="flex flex-col md:flex-row  gap-20 md:gap-0 w-full text-white px-3 md:px-12 py-10 sm:justify-between">
        <div className="left sm:w-2/5 md:w-1/2 flex flex-col items-center justify-center text-center sm:text-start sm:justify-start sm:items-start">
          <Logo />
          <p className="text-neutral-300 text-xs md:text-sm w-4/5 my-5">
            The World's Largest Digital Marketplace for crypto collections and
            non fungible tokens (NFTs) buy, sell and discover exclusive digital
            assets
          </p>
          <div className="icons flex items-center gap-5">
            {[Twitter, Instagram, Facebook, BsDiscord].map((Icon, idx) => (
              <Icon key={idx} />
            ))}
          </div>
        </div>
        <div className="right md:w-4/5 flex flex-col md:flex-row gap-10 md:gap-0 justify-between sm:gap-20">
          {footerItems.map((box, index) => (
            <div className="w-full flex flex-col items-center justify-center text-center sm:text-start sm:justify-start sm:items-start" key={index}>
              <h4 className="text-lg shrink-0 bg-gradient-to-l from-purple-600 to-blue-400 text-clip bg-clip-text text-transparent font-medium mb-2 sm:text-base">
                {box.title}
              </h4>
              <ul className="text-sm flex flex-col gap-2 sm:text-xs">
                {box.items.map((listItem, index) => (
                  <li key={index}>
                    <a href="#">{listItem}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
