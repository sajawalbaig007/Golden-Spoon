import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Menu", "Contact"];

  return (
    <header className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 border-b border-black/10 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between h-[90px] px-6 md:px-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-4xl">🍴</span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest text-black">
            GOLDEN <span className="text-red-700">SPOON</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
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

        {/* Desktop Order Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/menu"
            className="bg-black text-yellow-400 px-6 py-2.5 rounded-full font-semibold tracking-wide hover:bg-red-700 hover:text-white transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <FaShoppingCart className="w-5 h-5" />
            Order Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-yellow-100 w-full shadow-lg">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-black font-medium text-lg hover:text-red-700 ${
                    isActive ? "text-red-700 font-bold" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
            <Link
              to="/menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 bg-black text-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-red-700 hover:text-white flex items-center gap-2 transition"
            >
              <FaShoppingCart className="w-5 h-5" />
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
