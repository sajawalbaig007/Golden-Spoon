import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/menu"); // Menu page pe navigate
  };

  return (
   <section className="w-full pt-[100px] md:pt-[120px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 py-20 px-6 md:px-16">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Welcome to <br />
            <span className="text-red-700">Golden Spoon</span> Restaurant
          </h1>

          <p className="mt-6 text-black/80 text-lg leading-relaxed border-l-4 border-red-700 pl-4">
            Experience rich flavors, warm hospitality, and unforgettable meals.
            Every dish is crafted with passion to give you a dining experience
            beyond taste.
          </p>

          <button
            onClick={handleOrderNow}
            className="mt-8 bg-black text-yellow-400 px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-red-700 hover:text-white transition-all duration-300 shadow-xl"
          >
            Order Now
          </button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} // Mobile me thoda neeche
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:w-1/2 mt-8 md:mt-0" // Mobile me margin top
        >
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
            alt="Golden Spoon Dish"
            className="w-full h-[420px] object-cover rounded-3xl shadow-2xl border-4 border-white"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
