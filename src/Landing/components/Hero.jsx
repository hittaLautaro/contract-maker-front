import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = ({ isVisible }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 to-black -z-10"></div>

      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-28 max-w-6xl mx-auto mb-14 lg:max-w-4xl xl:max-w-6xl">
          <div className="flex-1 text-center">
            <div className="mb-6">
              <div>
                <span className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
                  <span className="font-mono text-amber-700 font-bold rounded">
                    Firmalo!
                  </span>
                </span>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-black max-w-2xl text-center">
                  The only app that allows you to create contracts fast and free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
