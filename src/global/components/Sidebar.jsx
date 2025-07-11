import { NavLink } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import { SiReaddotcv } from "react-icons/si";
import { MdAccountCircle, MdSpaceDashboard } from "react-icons/md";
import { LogOutIcon } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";
import { FaWpforms } from "react-icons/fa";

const Sidebar = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <aside className="w-64 bg-white text-black p-8 sticky top-0 h-screen  border-r border-slate-800">
      <div className="flex space-x-8 items-center mb-8">
        <NavLink
          to={"/"}
          className="flex flex-row items-center  p-2 rounded gap-2 text-md"
        >
          <h1 className="text-4xl text-zinc-800 font-bold font-sans rounded transition-colors duration-300 underline decoration-white hover:decoration-amber-400">
            PerfCV
          </h1>
        </NavLink>
      </div>

      <ul className="space-y-2">
        <NavLink
          to={"/"}
          className="flex flex-row items-center hover:bg-amber-100 p-2 rounded gap-2 text-md"
        >
          <MdSpaceDashboard size={20} />
          <li className="">Dashboard</li>
        </NavLink>
        <NavLink
          to={"/templates"}
          className="flex flex-row items-center hover:bg-amber-100 p-2 rounded gap-2 text-md"
        >
          <SiReaddotcv size={20} />
          <li className="">Templates</li>
        </NavLink>
        <NavLink
          to="/resumes"
          className="flex flex-row items-center hover:bg-amber-100 p-2 rounded gap-2 text-md"
        >
          <AiOutlineForm size={20} />
          <li className="">Resumes</li>
        </NavLink>
        <NavLink
          to={"/form"}
          className="flex flex-row items-center hover:bg-amber-100 p-2 rounded gap-2 text-md"
        >
          <FaWpforms size={20} />
          <li className="">Autofill Form</li>
        </NavLink>
        <NavLink
          to={"/account"}
          className="flex flex-row items-center hover:bg-amber-100 p-2 rounded gap-2 text-md"
        >
          <MdAccountCircle size={20} />
          <li className=" ">Account</li>
        </NavLink>
        <button
          onClick={handleLogout}
          className="duration-150 w-full h-10  p-2 rounded-md transition-all hover:bg-red-200 text-md flex flex-row items-center gap-2"
        >
          <LogOutIcon size={20} />
          <li>Logout</li>
        </button>
      </ul>
    </aside>
  );
};

export default Sidebar;
