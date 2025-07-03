// components/ExperienceItem.js
import { Trash2 } from "lucide-react";
import TagInput from "./TagInput";

const ExperienceItem = ({
  experience,
  index,
  updateExperience,
  removeExperience,
}) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-zinc-800 relative">
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
            Company
          </label>
          <input
            type="text"
            value={experience.company}
            onChange={(e) => updateExperience(index, "company", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <input
            type="text"
            value={experience.title}
            onChange={(e) => updateExperience(index, "title", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            value={experience.location}
            onChange={(e) =>
              updateExperience(index, "location", e.target.value)
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
              value={experience.startDate}
              onChange={(e) =>
                updateExperience(index, "startDate", e.target.value)
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
              value={experience.endDate}
              onChange={(e) =>
                updateExperience(index, "endDate", e.target.value)
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
          value={experience.description}
          onChange={(e) =>
            updateExperience(index, "description", e.target.value)
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
          tags={experience.technologies}
          onAdd={(newTag) =>
            updateExperience(index, "technologies", [
              ...experience.technologies,
              newTag,
            ])
          }
          onRemove={(tagToRemove) =>
            updateExperience(
              index,
              "technologies",
              experience.technologies.filter((tag) => tag !== tagToRemove)
            )
          }
        />
      </div>
    </div>
  );
};

export default ExperienceItem;
