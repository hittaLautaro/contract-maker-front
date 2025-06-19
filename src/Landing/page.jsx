import React, { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Header from "./components/Header";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <Hero id="hero" isVisible={isVisible} />

      <footer className="border-t border-zinc-700/50 py-5 text-center  text-gray-500">
        <div className="text-xs">© 2025 Lautaro Hitta - Firmalo!</div>
      </footer>
    </div>
  );
};

export default LandingPage;
