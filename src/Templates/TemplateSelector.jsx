import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const TemplateSelector = () => {
  const navigate = useNavigate();

  // const {
  //   data: templates = [],
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["templates"],
  //   queryFn: () =>
  //     fetch("http://localhost:8080/api/templates", { method: "GET" }).then(
  //       (res) => res.json()
  //     ),
  // });

  const isLoading = false;
  const error = null;

  const templates = [
    { id: 1, displayName: "Professional Template" },
    { id: 2, displayName: "Creative Portfolio" },
    { id: 3, displayName: "Minimalist Design" },
    { id: 4, displayName: "Modern Resume" },
    { id: 5, displayName: "Elegant CV" },
    { id: 6, displayName: "Technical Profile" },
    { id: 7, displayName: "Startup Style" },
    { id: 8, displayName: "Classic Layout" },
    { id: 9, displayName: "Freelancer Template" },
    { id: 10, displayName: "Compact Resume" },
  ];

  const handleTemplateSelect = (template) => {
    navigate(`/templates/${template.id}/fill?template=${template.displayName}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading templates...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-xl text-red-600">
          Error loading templates. Please try again.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl w-full mx-auto px-4 mt-5 pb-10">
      <h2 className="text-4xl font-bold text-gray-800 my-10 text-">
        Choose a{" "}
        <span className="underline decoration-amber-400">template</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pb-10">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleTemplateSelect(template)}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-3 border-2 border-gray-800 hover:border-amber-400"
          >
            <div className="bg-black h-80 w-full"></div>
            <p className="text-md font-bold text-gray-800 mt-1">
              {template.displayName}
            </p>
          </div>
        ))}
      </div>

      {templates.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            No Templates Available
          </h2>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
