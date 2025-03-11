import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  function handleDonate() {
    navigate("/donate");
  }

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/assets/bg/news.jpg')",
      }}
    >
      {/* /assets/bg/news.jpg */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Educate India
        </motion.h2>

        {/* Animated Subheading */}
        <motion.p
          className="text-xl md:text-2xl mt-4 font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Arise, Awake, and Stop Not Till The Goal is Reached
        </motion.p>

        {/* <motion.p
          className="mt-6 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          One Touch means A touch for those who needed give him direction to
          help him out for a change for their life.
        </motion.p> */}

        {/* Buttons with Hover Effects */}
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button
            onClick={handleDonate}
            className="bg-green-800 px-6 py-3 rounded-lg hover:bg-green-600 hover:scale-105 transform transition-all duration-300"
          >
            Donate Now
          </button>
          {/* <button className="bg-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-600 hover:scale-105 transform transition-all duration-300">
            Gallery
          </button> */}
        </motion.div>
      </div>
    </div>
  );
}
