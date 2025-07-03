// components/EducationSection.js
import { Plus } from "lucide-react";
import EducationItem from "./EducationItem";

const EducationSection = ({
  educationList,
  addEducation,
  updateEducation,
  removeEducation,
}) => {
  return (
    <section className="bg-white border-2 border-gray-800 rounded-lg">
      <div className="flex justify-between px-5 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Education</h2>
        <button
          type="button"
          onClick={addEducation}
          className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-800 text-white text-sm rounded-md font-semibold transition-colors"
        >
          <Plus size={16} />
          Add Education
        </button>
      </div>

      {educationList.length > 0 && (
        <div className="space-y-6 m-5">
          {educationList.map((edu, index) => (
            <EducationItem
              key={index}
              education={edu}
              index={index}
              updateEducation={updateEducation}
              removeEducation={removeEducation}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default EducationSection;
