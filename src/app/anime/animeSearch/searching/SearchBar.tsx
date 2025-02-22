"use client";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
export default function SearchBar() {
  return (
    <motion.div
      initial={{ width: "50px" }}
      animate={{ width: "400px" }}
      transition={{ duration: 0.7 }}
      className="flex bg-gray-300/40 rounded-md p-2 px-4 w-full"
      style={{ borderRadius: "6px" }}
    >
      <input
        placeholder="Search for your favorite anime"
        type="text"
        className="bg-transparent text-white w-full focus:outline-none"
        style={{ borderRadius: "6px" }}
      />

      <FaSearch
        className="text-3xl font-bold text-white/50 hover:text-white transition-colors duration-300 cursor-pointer"
      />
    </motion.div>
  );
}
