import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b-2 border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center mt-2 ">
        <div className="flex space-x-8 items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-4xl pb-1 text-zinc-800 font-bold font-sans rounded transition-colors duration-300 underline decoration-white hover:decoration-amber-400"
          >
            PerfCV
          </button>
        </div>

        <div className="flex space-x-3 pb-1">
          <NavLink
            to={"/auth/login"}
            className="duration-150 text-md border border-slate-800 bg-slate-800 px-5 py-2 rounded-xl font-medium font-sans text-white hover:bg-slate-900"
          >
            Log in
          </NavLink>
          <NavLink
            to={"/auth/signup"}
            className="duration-150 text-md border border-zinc-900 bg-amber-300 px-5 py-2 rounded-xl font-medium font-sans text-black hover:bg-amber-400"
          >
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
