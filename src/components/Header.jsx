import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-[90px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 flex items-center justify-between px-6 md:px-16 border-b border-black/10">
      
      <div className="flex items-center gap-3">
        <span className="text-4xl">🍴</span>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest text-black">
          GOLDEN <span className="text-red-700">SPOON</span>
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-12">
        {["Home", "About", "Menu", "Contact"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `text-black font-medium text-[16px] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-700 hover:after:w-full after:transition-all after:duration-300 ${
                isActive ? "text-red-700 font-bold" : ""
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link
          to="/menu" 
          className="bg-black text-yellow-400 px-6 py-2.5 rounded-full font-semibold tracking-wide hover:bg-red-700 hover:text-white transition-all duration-300 shadow-lg flex items-center gap-2"
        >
          <FaShoppingCart className="w-5 h-5" />
          Order Now
        </Link>
      </div>

    </header>
  );
}

export default Header;
