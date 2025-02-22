"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const messages = [
  "We",
  "Provide",
  "You",
  "The",
  "Best",
  "Anime",
  "Search",
  "Engine",
];

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= messages.length - 1) return; // Stop incrementing when last message is shown

    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 300);

    return () => clearInterval(interval);
  }, [index]); // Add index as dependency to stop updates when max reached

  return (
    <div
      className={`w-screen max-w-screen min-h-screen max-h-screen fixed top-0 flex items-center justify-center bg-black text-white overflow-hidden transition-opacity duration-1000 ${
        index === messages.length - 1 ? "opacity-0 -z-10" : "opacity-100 z-10"
      }`}
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="absolute text-3xl md:text-8xl font-bold text-center"
      >
        {messages[index]}
      </motion.div>
    </div>
  );
}
