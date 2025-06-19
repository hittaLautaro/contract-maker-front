import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = ({ isVisible }) => {
  return (
    <section className="min-h-[calc(90vh)] bg-white flex items-center justify-center">
      <div
        className={`transition-all justify-items-center duration-1000 mb-10${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-sans text-zinc-800 font-extrabold rounded text-balance">
          <span className="underline decoration-amber-400">Firma</span> y
          gestiona
          <br />
          tus documentos facilmente.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-700 text-center font-normal mt-5">
          Crea, firma y comparte documentos en minutos, sin complicaciones.
        </p>
        <button
          className="
    bg-slate-800 text-white
    text-xl px-6 py-4 rounded-xl mt-10
    font-semibold font-mono
    hover:bg-amber-400 hover:text-black border border-slate-800 hover:border-zinc-900
    transition-color duration-500
  "
        >
          {" "}
          Comienza ahora!
        </button>
      </div>
    </section>
  );
};

export default Hero;
