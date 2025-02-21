"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypeWriter() {
  const text = "We bring you the best anime quotes, character insights, and discussions. Whether you’re a casual watcher or a hardcore otaku, our platform is designed to fuel your anime passion.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-2xl font-mono max-w-[800px] leading-relaxed text-left mt-12 text-white font-semibold" 
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.div>
  );
}