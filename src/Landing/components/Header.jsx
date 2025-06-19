import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-400 backdrop-blur-md z-50 border-b border-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => {
            scrollToSection("hero");
          }}
          className="text-xl text-amber-700 font-bold bg-clip-text text-transparent font-mono transition-transform duration-300 hover:scale-105"
        >
          Firmalo!
        </button>

        <div className="hidden md:flex space-x-8 font-mono font-normal text-black ">
          <button className="hover:text-amber-700 transition-colors duration-150">
            PDF
          </button>
          <button className="hover:text-amber-700 transition-colors duration-150">
            LOGIN
          </button>
          <button className="hover:text-amber-700 transition-colors duration-150">
            SIGN IN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
