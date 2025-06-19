import React, { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Header from "./components/Header";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <Hero id="hero" isVisible={isVisible} />

      <footer className="border-t border-zinc-700/50 py-8 text-center  text-gray-500">
        <div className="text-xs">
          © 2025 Lautaro Hitta - My Contract Maker Mock
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
