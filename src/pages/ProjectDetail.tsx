import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "../components/project/ProjectCard";
import { projects } from "../types/project";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 pt-28 sm:pt-36">
      <div className="max-w-[90%] mx-auto">
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to projects
        </button>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h1 className="font-display text-5xl font-bold mb-4 text-gray-900 dark:text-white/90 capitalize">
              {project.name}
            </h1>

            <ProjectCard project={project} />
          </div>

          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
            layoutId={`project-image-${project.id}`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetail;
