// components/ProjectItem.js
import { Trash2 } from "lucide-react";
import TagInput from "./TagInput";

const ProjectItem = ({ project, index, updateProject, removeProject }) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-zinc-800 relative">
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
            onChange={(e) => updateProject(index, "name", e.target.value)}
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
            onChange={(e) => updateProject(index, "github", e.target.value)}
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
            onChange={(e) => updateProject(index, "since", e.target.value)}
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
            onChange={(e) => updateProject(index, "till", e.target.value)}
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
          onChange={(e) => updateProject(index, "description", e.target.value)}
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
              project.technologies.filter((tag) => tag !== tagToRemove)
            )
          }
        />
      </div>
    </div>
  );
};

export default ProjectItem;
