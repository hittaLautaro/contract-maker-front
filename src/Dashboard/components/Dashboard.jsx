import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

const Dashboard = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);

  // Fetch templates
  const {
    data: templates = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["templates"],
    queryFn: () =>
      fetch("http://localhost:8080/api/cv/templates", { method: "GET" }).then(
        (res) => res.json()
      ),
  });

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    // Parse schema and initialize form data
    try {
      const schema = JSON.parse(template.schemaJson);
      const initialData = {};
      schema.forEach((field) => {
        initialData[field.fieldName] = field.defaultValue || "";
      });
      setFormData(initialData);
    } catch (error) {
      console.error("Error parsing template schema:", error);
      setFormData({});
    }
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
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {!selectedTemplate && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Choose a Template
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => handleTemplateSelect(template)}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-6 border-2 border-transparent hover:border-amber-400"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {template.description || "No description available"}
                  </p>
                  <div className="text-sm text-amber-600 font-medium">
                    Click to select →
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {templates.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              No Templates Available
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
