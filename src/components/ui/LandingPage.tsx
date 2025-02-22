"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (index >= messages.length) {
      setTimeout(() => setIsVisible(false), 100);
      return;
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 350);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-10 bg-gray-950 text-white overflow-hidden"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.7, backdropFilter: `blur(20px)`, y: -1000 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute text-4xl md:text-8xl font-extrabold text-center text-glow animate-pulse"
          >
            {messages[index]}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
