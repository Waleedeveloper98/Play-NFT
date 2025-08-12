import React from "react";
import Navbar from "./Navbar";
import { BsFillCameraVideoFill } from "react-icons/bs";
import BgBtn from "./BgBtn";
import BorderBtn from "./BorderBtn";
import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";

const Hero = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1724124419963-4ba797267047?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1681500920181-0aff411f8cab?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const stats = [
    { value: "27k +", label: "Art works" },
    { value: "20k +", label: "Auctions" },
    { value: "7k +", label: "Artists" },
  ];
  return (
    <div className="relative pb-40 overflow-x-hidden w-full min-h-screen">
      <Navbar />
      <div className="absolute -left-24 top-24 glow w-72 h-96 rounded-full bg-blue-400/60 blur-3xl"></div>
      <div className="absolute -right-24 bottom-0 md:-bottom-0 lg:-bottom-0 glow w-72 h-96 rounded-full bg-blue-400/60 blur-3xl"></div>

      <div className="flex flex-col md:flex-row w-full relative text-white px-6 md:px-20 pt-8 md:pt-14">
        <div className="left w-full lg:w-1/2 pt-4 flex flex-col gap-6 md:gap-10 md:w-full">
          <h1 className="text-4xl md:text-7xl lg:text-6xl font-bold leading-12 md:leading-20 lg:leading-16">
            Discover,Collect and Sell Dope Art and NFTs
          </h1>
          <p className="text-zinc-200 md:text-[1.1rem] md:pr-10">
            The world's largest digital marketplace for crypto collections and
            non fungible tokens (NFTs)
          </p>
          <div className="flex w-fit px-4 py-2 rounded-lg mx-auto md:mx-0 gap-8 md:gap-20 lg:gap-10 md:w-full">
            <BgBtn />
            <BorderBtn />
            <div className="hidden md:flex items-center gap-2">
              <BsFillCameraVideoFill className="" />
              <a className="text-xs underline" href="#">
                Watch a video
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-r w-full   from-purple-600 to-blue-400 rounded-lg md:px-6 md:py-4  lg:w-fit px-4 py-2 md:gap-18 flex items-center justify-between relative border-[1.5px] border-zinc-400">
            {stats.map((item, index) => (
              <div key={index}>
                <h5 className="text-xl md:text-4xl lg:text-3xl font-semibold">
                  {item.value}
                </h5>
                <h6 className="text-sm mt-1 md:text-lg md:mt-2 lg:mt-0 lg:text-base">
                  {item.label}
                </h6>
              </div>
            ))}
          </div>

          <div className="relative flex my-3 md:my-0">
            {avatars.map((avatar, index) => (
              <motion.div
                initial={{ zIndex: 0, scale: 1 }}
                whileHover={{ zIndex: 1, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`avatar w-14 h-14 rounded-full cursor-pointer
                absolute overflow-hidden border-[1.5px] border-purple-600`}
                style={{ left: `${index * 28}px` }}
              >
                <img
                  className="w-full h-full object-cover"
                  src={avatar}
                  alt={`Avatar No: ${index}`}
                />
              </motion.div>
            ))}
            <div className="absolute right-0 md:right-68 lg:right-40">
              <h4 className="text-3xl font-semibold">47k +</h4>
              <h5 className="text-zinc-300">Active Users</h5>
            </div>
          </div>
        </div>
        <div className="right md:hidden lg:block mt-28 md:mt-0 w-full md:w-1/2 flex items-center justify-center">
          <div className="img-box relative md:w-4/5 lg:w-4/5 lg:h-[100vh] lg:mx-auto rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover object-left"
              src="./public/hero.png"
              alt=""
            />
            <div className="label absolute w-full bottom-0 left-0 h-32 bg-gradient-to-r from-purple-600/60 to-blue-400/50 flex items-center justify-between px-6">
              <div className="left">
                <h3>Ending in:</h3>
                <CountdownTimer />
                <BgBtn />
              </div>
              <div className="right">
                <h3>Highest Bit</h3>
                <h2 className="font-medium text-lg mb-3 mt-1">32.4 ETH</h2>
                <button className="px-4 py-1 font-semibold rounded-md bg-zinc-400 text-sm">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
