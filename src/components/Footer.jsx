import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-5 md:px-10 border-t border-red-600/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-yellow-300 text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm">
            Golden Spoon Restaurant brings you the best culinary experience with passion, style, and flavor. Join us to taste the extraordinary.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-300 text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-300 text-sm flex flex-col gap-2">
            <li><a href="/" className="hover:text-red-600 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-600 transition">About</a></li>
            <li><a href="/menu" className="hover:text-red-600 transition">Menu</a></li>
            <li><a href="/contact" className="hover:text-red-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-300 text-xl font-bold mb-4">Services</h3>
          <ul className="text-gray-300 text-sm flex flex-col gap-2">
            <li>Dine-In</li>
            <li>Takeaway</li>
            <li>Online Delivery</li>
            <li>Event Catering</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-yellow-300 text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-300">
            <a href="#" className="hover:text-red-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-600 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-red-600 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
      GoldenSpoon Restaurant. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
