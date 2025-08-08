import React from 'react';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, category, year, technologies } = project;
  
  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-600 dark:text-white/70">
        {project.description}
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-white/50 mb-2">Category</h2>
          <p className="text-gray-900 dark:text-white">{category}</p>
        </div>

        {project.client && (
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-white/50 mb-2">Client</h2>
            <p className="text-gray-900 dark:text-white">{project.client}</p>
          </div>
        )}

        {year && (
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-white/50 mb-2">Year</h2>
            <p className="text-gray-900 dark:text-white">{year}</p>
          </div>
        )}

        {technologies && (
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-white/50 mb-2">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-sm text-gray-700 dark:text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};