import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const Header = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="sticky top-0 w-full bg-white backdrop-blur-md z-50 border-b-2 border-zinc-800">
      <div className="w-full px-10 py-4 flex justify-between items-center">
        <div className="flex space-x-8 items-center">
          <h1 className="text-4xl  text-zinc-800 font-bold font-sans rounded transition-colors duration-300 underline decoration-white hover:decoration-amber-400">
            PerfCV
          </h1>
        </div>

        <div className="flex space-x-8 font-normal text-black">
          <button
            onClick={handleLogout}
            className="duration-150 border border-zinc-900 bg-amber-300 px-3 py-2 rounded-md  transition-all hover:bg-amber-400 text-sm"
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
