import React from "react";
import PdfDropdown from "./PdfDropdown";

const Header = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-white backdrop-blur-md z-50 ">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center  mt-5">
          <div className="flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-4xl pb-1 text-zinc-800 font-bold font-sans rounded transition-colors duration-300 underline decoration-white hover:decoration-amber-400"
            >
              Firmalo!
            </button>
          </div>

          <div className="flex space-x-8 font-normal text-black pb-1">
            <button className=" duration-150 border border-zinc-900 bg-amber-300 px-4 py-2 rounded-md hover:scale-105 transition-all hover:bg-amber-400">
              Iniciar sesión
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
