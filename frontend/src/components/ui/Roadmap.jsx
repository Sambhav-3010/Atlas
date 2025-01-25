import React from "react";
import { motion } from "framer-motion";

const Roadmap = () => {
const roadmapData = [
    {
        id: 1,
        title: "Search your destination",
        description: "Go to the Home page and search for the destination you want to explore.",
        color: "bg-[#6114d3]",
    },
    {
        id: 2,
        title: "Find the perfect place",
        description:
            "Choose a destination that entices you the most or one that you are planning to visit.",
        color: "bg-[#754fde]",
    },
    {
        id: 3,
        title: "What do you like?",
        description: "Enter all your interests and preferences to get personalized suggestions.",
        color: "bg-[#9d5dfe]",
    },
    {
        id: 4,
        title: "Let us know about you",
        description: "Fill in some additional fields about yourself and click enter.",
        color: "bg-[#9f49dc]",
    },
    {
        id: 5,
        title: "Get your destination planned", 
        description: "Sit back and wait a few seconds while Mira gives you an awesome plan to seize the day!",
        color: "bg-[#9e39bf]",
    },
];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-10 text-white">How to Use</h1>
      <div className="relative flex flex-col items-center w-full max-w-4xl">
        {roadmapData.map((item, index) => (
          <motion.div
            key={item.id}
            className={`flex items-center w-full mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className={`rounded-2xl relative p-6 shadow-md text-left ${item.color} text-white cursor-pointer mx-10 `}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
