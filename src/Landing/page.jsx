import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Header from "./components/Header";
import ProofSection from "./components/ProofSection";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Hero id="hero" isVisible={isVisible} />
      <ProofSection />

      <footer className=" w-full py-5 border-t border-zinc-700/50 bg-white text-center text-gray-500">
        <p className="text-xs max-w-screen-sm mx-auto px-4 break-words">
          © 2025 PerfCV
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
