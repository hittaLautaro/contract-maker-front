import React from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = ({ isVisible }) => {
  return (
    <section className="min-h-[calc(93vh)] bg-white flex items-center justify-center">
      <div
        className={`transition-all justify-items-center duration-1000 mb-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-sans text-zinc-800 font-extrabold rounded text-balance">
          Create the{" "}
          <span className="underline decoration-amber-400">Perfect CV</span> to
          land a job
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-700 text-center font-normal mt-5">
          Use our templates to build a ATS proof resume
        </p>
        <NavLink
          to={"/templates"}
          className="block bg-slate-800 text-white text-xl mt-10 px-6 py-4 rounded-xl font-semibold font-mono border border-slate-800 hover:bg-amber-400 hover:text-black hover:border-zinc-900 transition-colors duration-500"
        >
          {" "}
          Start now!
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;
