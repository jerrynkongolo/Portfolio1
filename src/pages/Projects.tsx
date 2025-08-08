import React from "react";
import { projects } from "../types/project";
import { ProjectGridCard } from "../components/project/ProjectGridCard";

function Projects() {
  return (
    <div className="min-h-screen page-section">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <h1 className="font-display text-5xl font-bold text-gray-900 dark:text-white/90">
              Projects
            </h1>
            <p className="text-gray-600 dark:text-white/70 mt-2">
              A selection of recent works with brief descriptions.
            </p>
          </div>
          <span className="text-xl md:text-2xl font-display text-gray-900 dark:text-white/90">
            {projects.length}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectGridCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
