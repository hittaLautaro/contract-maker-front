// components/CvForm.js
import { useCvForm } from "./hooks/useCvForm.js";
import PersonalInfoSection from "./PersonalInfoSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import ProjectsSection from "./ProjectSection.jsx";
import EducationSection from "./EducationSection.jsx";
import { NavLink } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const CvForm = ({ templateId = 1, templateName = "Professional Template" }) => {
  const {
    formData,
    updateField,
    // Languages
    addLanguage,
    removeLanguage,
    // Experiences
    addExperience,
    removeExperience,
    updateExperience,
    // Education
    addEducation,
    removeEducation,
    updateEducation,
    // Projects
    addProject,
    removeProject,
    updateProject,
    // Form submission
    handleSubmit,
    isLoading,
    error,
  } = useCvForm(templateId);

  return (
    <div className="max-w-6xl w-full mx-auto px-4 mt-5 pb-10">
      {/* Header */}
      <div className="flex flex-row items-center gap-4 my-10">
        <NavLink to="/templates">
          <RiArrowGoBackFill size={30} className="text-gray-800" />
        </NavLink>

        <h2 className="text-4xl font-bold text-gray-800">
          Fill the{" "}
          <span className="underline decoration-amber-400">template</span>
        </h2>
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
          onClick={handleSubmit}
          disabled={isLoading}
          className={`px-6 py-3 bg-amber-300 text-zinc-800 border-2 border-zinc-800 rounded-md hover:bg-amber-400 transition-colors font-medium ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Generating..." : "Generate CV"}
        </button>
      </div>
    </div>
  );
};

export default CvForm;
