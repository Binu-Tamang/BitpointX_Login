import React from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className=" p-4 mt-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left side: Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="" />
        </a>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-6 mx-auto">
          <li>
            <a href="/Solutions" className="font-bold text-base hover:text-gray-300">
              Solutions
            </a>
          </li>
          <li>
            <a href="/How it Works" className="font-bold text-base hover:text-gray-300">
              How it Works
            </a>
          </li>
          <li>
            <a href="/AI Automation" className="font-bold text-base hover:text-gray-300">
              AI Automation
            </a>
          </li>
          <li>
            <a href="/Pricing" className="font-bold text-base hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="/Contact" className="font-bold text-base hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Right side: Request button */}
        <button className="text-base bg-gradient-to-b from-[#785CF5] via-[#7290F4] to-[#6CBCF4] text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600">
          Request a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
