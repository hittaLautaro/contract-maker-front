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

  const templates = [
    { id: 1, displayName: "Template 1" },
    { id: 2, displayName: "Template 2" },
  ];
  const isLoading = false;
  const error = null;

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
    <div className="max-w-6xl w-full mx-auto bg-white rounded-xl flex flex-col">
      <h2 className="text-4xl font-bold text-gray-800 mb-5">
        Choose a{" "}
        <span className="underline decoration-amber-400">template</span>
      </h2>

      <div className="rounded-xl border-2 border-slate-800 p-3 flex-1 overflow-hidden">
        <div className="overflow-y-auto h-full p-3">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                onClick={() => handleTemplateSelect(template)}
                className="bg-white rounded-lg shadow-md duration-300 cursor-pointer p-3 border border-slate-800 min-h-64"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
