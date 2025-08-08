import React from "react";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../types/project";

interface ProjectGridCardProps {
  project: Project;
}

export const ProjectGridCard: React.FC<ProjectGridCardProps> = ({
  project,
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/projects/${project.id}`)}
      className="group w-full text-left rounded-xl overflow-hidden bg-white/70 dark:bg:white/5 backdrop-blur-sm border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={(project.images && project.images[0]) || project.image}
          alt={project.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70" />
      </div>

      <div className="p-5">
        <div className="mb-2">
          <h3 className="font-display text-2xl font-semibold text-gray-900 dark:text-white/90">
            {project.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-white/50 mt-1">
            {project.category}
          </p>
        </div>

        {project.description && (
          <p className="text-gray-700 dark:text-white/70 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </button>
  );
};
