import React from "react";
import { motion } from "framer-motion";
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
    <motion.button
      onClick={() => navigate(`/projects/${project.id}`)}
      className="group w-full text-left rounded-xl overflow-hidden bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative aspect-[4/3] overflow-hidden"
        layoutId={`project-image-${project.id}`}
      >
        <img
          src={(project.images && project.images[0]) || project.image}
          alt={project.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70" />
      </motion.div>

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
    </motion.button>
  );
};
