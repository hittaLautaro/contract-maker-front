// components/ExperienceSection.js
import { Plus } from "lucide-react";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = ({
  experiences,
  addExperience,
  updateExperience,
  removeExperience,
}) => {
  return (
    <section className="bg-white border-2 border-gray-800 rounded-lg">
      <div className="flex justify-between px-5 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Experience</h2>
        <button
          type="button"
          onClick={addExperience}
          className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-800 text-white text-sm rounded-md font-semibold transition-colors"
        >
          <Plus size={16} />
          Add Experience
        </button>
      </div>

      {experiences.length > 0 && (
        <div className="space-y-6 m-5">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              experience={exp}
              index={index}
              updateExperience={updateExperience}
              removeExperience={removeExperience}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
