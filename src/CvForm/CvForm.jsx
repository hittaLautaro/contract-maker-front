import { useState } from "react";
import { Plus, Trash2, X } from "lucide-react";
import TagInput from "./TagInput";
import { useMutation } from "@tanstack/react-query";

const generatePdf = async (formData) => {
  const res = await fetch("http://localhost:8080/api/cv/generate-pdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error("Failed to generate PDF");

  const blob = await res.blob();

  const url = URL.createObjectURL(blob);
  window.open(url);

  return blob;
};

const CvForm = ({ templateId = 1, templateName = "Professional Template" }) => {
  const [formData, setFormData] = useState({
    selectedTemplateId: templateId,
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    languages: [],
    technologies: [],
    linkedin: "",
    github: "",
    experiences: [],
    educationList: [],
    projects: [],
  });

  const mutation = useMutation({
    mutationFn: generatePdf,
    onSuccess: (data) => {
      console.log("PDF generated", data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = () => {
    mutation.mutate(formData); // trigger the mutation manually
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateLanguages = (languages) => {
    setFormData((prev) => ({ ...prev, languages }));
  };

  const addExperience = () => {
    const newExperience = {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      technologies: [],
    };
    setFormData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExperience],
    }));
  };

  const removeExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  const updateExperience = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const addEducation = () => {
    const newEducation = {
      universityName: "",
      graduationDate: "",
      degree: "",
      major: "",
      city: "",
    };
    setFormData((prev) => ({
      ...prev,
      educationList: [...prev.educationList, newEducation],
    }));
  };

  const removeEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      educationList: prev.educationList.filter((_, i) => i !== index),
    }));
  };

  const updateEducation = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      educationList: prev.educationList.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const addProject = () => {
    const newProject = {
      name: "",
      since: "",
      till: "",
      description: "",
      technologies: [],
      github: "",
    };
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  };

  const removeProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  const updateProject = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj, i) =>
        i === index ? { ...proj, [field]: value } : proj
      ),
    }));
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="pt-20 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {templateName}
            </h1>
            <p className="text-gray-600">Template ID: {templateId}</p>
          </div>

          <div className="space-y-8">
            {/* Personal Information */}
            <section className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => updateField("linkedin", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    GitHub
                  </label>
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => updateField("github", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Languages
                </label>
                <TagInput
                  tags={formData.languages}
                  onAdd={(newTag) =>
                    updateLanguages([...formData.languages, newTag])
                  }
                  onRemove={(tagToRemove) =>
                    updateLanguages(
                      formData.languages.filter((tag) => tag !== tagToRemove)
                    )
                  }
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Summary
                </label>
                <textarea
                  value={formData.summary}
                  onChange={(e) => updateField("summary", e.target.value)}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </section>

            {/* Experience Section */}
            <section className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Experience
                </h2>
                <button
                  type="button"
                  onClick={addExperience}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus size={16} />
                  Add Experience
                </button>
              </div>

              {formData.experiences.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No experiences added yet.</p>
                  <button
                    type="button"
                    onClick={addExperience}
                    className="mt-2 text-blue-600 hover:text-blue-800"
                  >
                    Add your first experience
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {formData.experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg border border-gray-200 relative"
                    >
                      <button
                        type="button"
                        onClick={() => removeExperience(index)}
                        className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Job Title
                          </label>
                          <input
                            type="text"
                            value={exp.title}
                            onChange={(e) =>
                              updateExperience(index, "title", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company
                          </label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) =>
                              updateExperience(index, "company", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            value={exp.location}
                            onChange={(e) =>
                              updateExperience(
                                index,
                                "location",
                                e.target.value
                              )
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Start Date
                            </label>
                            <input
                              type="month"
                              value={exp.startDate}
                              onChange={(e) =>
                                updateExperience(
                                  index,
                                  "startDate",
                                  e.target.value
                                )
                              }
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              End Date
                            </label>
                            <input
                              type="month"
                              value={exp.endDate}
                              onChange={(e) =>
                                updateExperience(
                                  index,
                                  "endDate",
                                  e.target.value
                                )
                              }
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          value={exp.description}
                          onChange={(e) =>
                            updateExperience(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          rows={3}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Technologies
                        </label>
                        <TagInput
                          tags={exp.technologies}
                          onAdd={(newTag) =>
                            updateExperience(index, "technologies", [
                              ...exp.technologies,
                              newTag,
                            ])
                          }
                          onRemove={(tagToRemove) =>
                            updateExperience(
                              index,
                              "technologies",
                              exp.technologies.filter(
                                (tag) => tag !== tagToRemove
                              )
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Projects Section */}
            <section className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Projects
                </h2>
                <button
                  type="button"
                  onClick={addProject}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus size={16} />
                  Add Project
                </button>
              </div>

              {formData.projects.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No projects added yet.</p>
                  <button
                    type="button"
                    onClick={addProject}
                    className="mt-2 text-blue-600 hover:text-blue-800"
                  >
                    Add your first project
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {formData.projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg border border-gray-200 relative"
                    >
                      <button
                        type="button"
                        onClick={() => removeProject(index)}
                        className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Project Name
                          </label>
                          <input
                            type="text"
                            value={project.name}
                            onChange={(e) =>
                              updateProject(index, "name", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            GitHub URL
                          </label>
                          <input
                            type="url"
                            value={project.github}
                            onChange={(e) =>
                              updateProject(index, "github", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Start Date
                          </label>
                          <input
                            type="month"
                            value={project.since}
                            onChange={(e) =>
                              updateProject(index, "since", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            End Date
                          </label>
                          <input
                            type="text"
                            value={project.till}
                            onChange={(e) =>
                              updateProject(index, "till", e.target.value)
                            }
                            placeholder="Present or YYYY-MM"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          value={project.description}
                          onChange={(e) =>
                            updateProject(index, "description", e.target.value)
                          }
                          rows={3}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Technologies
                        </label>
                        <TagInput
                          tags={project.technologies}
                          onAdd={(newTag) =>
                            updateProject(index, "technologies", [
                              ...project.technologies,
                              newTag,
                            ])
                          }
                          onRemove={(tagToRemove) =>
                            updateProject(
                              index,
                              "technologies",
                              project.technologies.filter(
                                (tag) => tag !== tagToRemove
                              )
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Education Section */}
            <section className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Education
                </h2>
                <button
                  type="button"
                  onClick={addEducation}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus size={16} />
                  Add Education
                </button>
              </div>

              {formData.educationList.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No education added yet.</p>
                  <button
                    type="button"
                    onClick={addEducation}
                    className="mt-2 text-blue-600 hover:text-blue-800"
                  >
                    Add your first education
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {formData.educationList.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg border border-gray-200 relative"
                    >
                      <button
                        type="button"
                        onClick={() => removeEducation(index)}
                        className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            University Name
                          </label>
                          <input
                            type="text"
                            value={edu.universityName}
                            onChange={(e) =>
                              updateEducation(
                                index,
                                "universityName",
                                e.target.value
                              )
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Graduation Date
                          </label>
                          <input
                            type="month"
                            value={edu.graduationDate}
                            onChange={(e) =>
                              updateEducation(
                                index,
                                "graduationDate",
                                e.target.value
                              )
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Degree
                          </label>
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) =>
                              updateEducation(index, "degree", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Major
                          </label>
                          <input
                            type="text"
                            value={edu.major}
                            onChange={(e) =>
                              updateEducation(index, "major", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            value={edu.city}
                            onChange={(e) =>
                              updateEducation(index, "city", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
              >
                Generate CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvForm;
