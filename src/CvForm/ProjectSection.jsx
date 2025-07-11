// components/ProjectsSection.js
import { Plus } from "lucide-react";
import ProjectItem from "./ProjectItem";

const ProjectsSection = ({
  projects,
  addProject,
  updateProject,
  removeProject,
}) => {
  return (
    <section className="bg-white border border-gray-800 rounded-lg shadow-lg shadow-gray-300">
      <div className="flex justify-between px-5 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
        <button
          type="button"
          onClick={addProject}
          className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-800 text-white text-sm rounded-md font-semibold transition-colors"
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {projects.length > 0 && (
        <div className="space-y-6 m-5">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              index={index}
              updateProject={updateProject}
              removeProject={removeProject}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
