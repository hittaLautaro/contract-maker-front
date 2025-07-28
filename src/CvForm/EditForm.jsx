import { useCvForm } from "./hooks/useCvForm.js";
import PersonalInfoSection from "./PersonalInfoSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import ProjectsSection from "./ProjectSection.jsx";
import EducationSection from "./EducationSection.jsx";
import { RiArrowGoBackFill, RiFilePdf2Fill } from "react-icons/ri";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const EditForm = () => {
  const {
    formData,
    updateField,
    addLanguage,
    removeLanguage,
    addExperience,
    removeExperience,
    updateExperience,
    addEducation,
    removeEducation,
    updateEducation,
    addProject,
    removeProject,
    updateProject,
    updateForm,
    isLoading,
    error,
  } = useCvForm(1);
  const navigate = useNavigate();

  const handleSave = async () => {
    console.log("saved form");
  };

  return (
    <div className="max-w-6xl w-full mx-auto px-4 mt-5 pb-10">
      {/* Header */}
      <div className="flex flex-col  my-10">
        <div className="flex gap-4">
          <button onClick={() => navigate(-1)} className="p-1">
            <RiArrowGoBackFill size={30} className="text-gray-800" />
          </button>
          <h2 className="text-4xl font-bold text-gray-800">
            Your <span className="underline decoration-amber-400">form</span>
          </h2>
        </div>
        <p className="text-xl mt-2 text-gray-900">
          This form will automatically complete the fields in any template you
          choose to fill.
        </p>
      </div>

      <div className="space-y-5">
        <PersonalInfoSection
          formData={formData}
          updateField={updateField}
          addLanguage={addLanguage}
          removeLanguage={removeLanguage}
        />

        <ExperienceSection
          experiences={formData.experiences}
          addExperience={addExperience}
          updateExperience={updateExperience}
          removeExperience={removeExperience}
        />

        <ProjectsSection
          projects={formData.projects}
          addProject={addProject}
          updateProject={updateProject}
          removeProject={removeProject}
        />

        <EducationSection
          educationList={formData.educationList}
          addEducation={addEducation}
          updateEducation={updateEducation}
          removeEducation={removeEducation}
        />
      </div>

      <div className="flex justify-end mt-5">
        {error && (
          <div className="px-4 py-3 bg-red-100 border border-red-400 text-red-700 rounded mr-2">
            Error: {error.message}
          </div>
        )}
        <button
          type="button"
          onClick={handleSave}
          disabled={isLoading}
          className={`px-6 py-3 bg-amber-300 text-zinc-800 border border-zinc-800 rounded-md hover:bg-amber-400 transition-colors font-medium ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default EditForm;
