// components/EducationItem.js
import { Trash2 } from "lucide-react";

const EducationItem = ({
  education,
  index,
  updateEducation,
  removeEducation,
}) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-zinc-800 relative">
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
            value={education.universityName}
            onChange={(e) =>
              updateEducation(index, "universityName", e.target.value)
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
            value={education.graduationDate}
            onChange={(e) =>
              updateEducation(index, "graduationDate", e.target.value)
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
            value={education.degree}
            onChange={(e) => updateEducation(index, "degree", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Major
          </label>
          <input
            type="text"
            value={education.major}
            onChange={(e) => updateEducation(index, "major", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            value={education.city}
            onChange={(e) => updateEducation(index, "city", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
