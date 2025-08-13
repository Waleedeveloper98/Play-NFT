import React from "react";
import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";
import user7 from "../assets/user7.webp";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Card = () => {
  const cards = [
    {
      title: "Decadence",
      artist: "Anthony Gargasz",
      amount: 2.45,
      image: user1,
      likes: "15k",
    },
    {
      title: "Horizon",
      artist: "Alex Doe",
      amount: 3.12,
      image: user2,
      likes: "32k",
    },
    {
      title: "Cyber",
      artist: "Lia Tran",
      amount: 1.98,
      image: user3,
      likes: "48k",
    },
    {
      title: "Virtual",
      artist: "John K.",
      amount: 4.25,
      image: user4,
      likes: "54k",
    },
    {
      title: "Electric",
      artist: "Sophia Lee",
      amount: 2.77,
      image: user5,
      likes: "25k",
    },
    {
      title: "Dream",
      artist: "Max Young",
      amount: 3.89,
      image: user6,
      likes: "64k",
    },
    {
      title: "Holographic",
      artist: "Emma Ray",
      amount: 2.15,
      image: user7,
      likes: "39k",
    },
  ];

  return (
    <>
      {cards.map((user, idx) => (
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          key={idx}
          className="group w-68 relative h-80 shrink-0  bg-purple-700 rounded-xl cursor-pointer z-50"
        >
          <div className="w-full h-full overflow-hidden rounded-lg">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
              className="w-full h-full object-cover rounded-xl"
              src={user.image}
              alt={`Image No ${idx}`}
            />
          </div>
          <div className="details absolute pointer-events-none bottom-0 left-0 w-full h-24 bg-gradient-to-br from-purple-600/80 to-blue-400/80 flex items-center px-4 justify-between text-white rounded-b-xl">
            <div className="">
              <h3 className="text-xl font-bold">{user.title}</h3>
              <h4 className="text-zinc-200">{user.artist}</h4>
            </div>
            <div>
              <button className="text-xs px-3 py-[2px] mb-2 rounded-lg border-purple-300/80 border-2">
                {user.amount} ETH
              </button>
              <div className="flex items-center gap-1">
                <Heart className="outline-none border-none fill-purple-600 w-5 h-5" />
                <span className="text-lg font-medium">{user.likes}</span>
              </div>
            </div>
          </div>
          <div className="bg-glow absolute inset-0 w-full rounded-full h-full bg-gradient-to-br from-purple-600/90 to-blue-400/90 transition-all duration-300 group-hover:blur-3xl -z-10"></div>
        </motion.div>
      ))}
    </>
  );
};

export default Card;
