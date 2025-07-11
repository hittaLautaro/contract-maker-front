import { useQuery } from "@tanstack/react-query";
import { FaListCheck } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

const DraftSelector = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const templates = [];

  // const {
  //   data: templates = [],
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["templates"],
  //   queryFn: () =>
  //     fetch("http://localhost:8080/api/templates", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     }).then((res) => res.json()),
  // });

  const handleTemplateSelect = (template) => {
    navigate(`/templates/${template.id}/fill?template=${template.displayName}`);
  };

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen  flex items-center justify-center">
  //       <div className="text-xl text-gray-600">Loading templates...</div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-screen  flex items-center justify-center">
  //       <div className="text-xl text-red-600">
  //         Error loading templates. Please try again.
  //       </div>
  //     </div>
  //   );
  // }

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
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleTemplateSelect(template)}
            className="bg-white rounded-lg shadow-md hover:shadow-lg  duration-300 cursor-pointer p-3 border border-gray-800 hover:scale-105 transition-transform min-h-64"
          >
            <p className="text-md font-bold text-gray-800 mt-1">
              {template.displayName}
            </p>
          </div>
        ))}
      </div>

      {templates.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            No saved resumes.
          </h2>
        </div>
      )}
    </div>
  );
};

export default DraftSelector;
