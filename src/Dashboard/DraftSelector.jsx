import { useQuery } from "@tanstack/react-query";
import { Loader, Loader2 } from "lucide-react";
import { BiError } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";

const DraftSelector = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const {
    data: drafts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["drafts"],
    queryFn: () =>
      fetch("http://localhost:8080/api/drafts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
  });

  const handleDraftSelect = (template) => {
    navigate(`/resumes/${template.id}/edit`);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl w-full mx-auto p-5 border border-gray-800 rounded-xl shadow-lg shadow-gray-300 bg-white">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-800 ">
            {" "}
            Saved{" "}
            <span className="underline decoration-amber-400">resumes</span>
          </h2>
          <NavLink
            to={"/resumes"}
            className=" border-gray-800 px-3 py-2 border rounded font-medium bg-amber-300"
          >
            View all
          </NavLink>
        </div>
        <div className="text-xl text-gray-600 min-h-64 text-center flex items-center justify-center">
          <Loader2 className="animate-spin w-8 h-8" />
        </div>
      </div>
    );
  }

  if (!isLoading && error) {
    return (
      <div className="max-w-7xl w-full mx-auto p-5 border border-gray-800 rounded-xl shadow-lg shadow-gray-300 bg-white">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-800 ">
            {" "}
            Saved{" "}
            <span className="underline decoration-amber-400">resumes</span>
          </h2>
          <NavLink
            to={"/resumes"}
            className=" border-gray-800 px-3 py-2 border rounded font-medium bg-amber-300"
          >
            View all
          </NavLink>
        </div>
        <div className="text-lg font-semibold text-red-600 min-h-64 text-center flex items-center justify-center">
          <BiError size={25} className="mr-2" />
          Error! Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl w-full mx-auto p-5 border border-gray-800 rounded-xl shadow-lg shadow-gray-300 bg-white">
      <div className="flex flex-row justify-between mb-2">
        <h2 className="text-2xl font-bold text-gray-800 ">
          {" "}
          Saved <span className="underline decoration-amber-400">resumes</span>
        </h2>
        <NavLink
          to={"/resumes"}
          className=" border-gray-800 px-3 py-2 border rounded font-medium bg-amber-300"
        >
          View all
        </NavLink>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {drafts.map((draft) => (
          <div
            key={draft.id}
            onClick={() => handleDraftSelect(draft)}
            className="bg-white rounded-lg shadow-md hover:shadow-lg  duration-300 cursor-pointer p-3 border border-gray-800 hover:scale-105 transition-transform min-h-64"
          >
            <p className="text-md font-bold text-gray-800 mt-1">
              {draft.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraftSelector;
