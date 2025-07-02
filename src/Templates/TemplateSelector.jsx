import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const TemplateSelector = () => {
  const navigate = useNavigate();

  const {
    data: templates = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["templates"],
    queryFn: () =>
      fetch("http://localhost:8080/api/templates", { method: "GET" }).then(
        (res) => res.json()
      ),
  });

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
    <div className="max-w-6xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Choose a Template
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => handleTemplateSelect(template)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-6 border-2 border-transparent border-gray-800 hover:border-amber-400"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {template.displayName}
              </h3>
              <p>{template.filename}</p>
            </div>
          ))}
        </div>
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
