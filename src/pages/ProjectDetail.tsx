import React, { MouseEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "../components/project/ProjectCard";
import { projects } from "../types/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image first on mobile */}
          <div className="relative order-1">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image}
                        alt={`${project.name} ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Text second on mobile */}
          <div className="order-2">
            <h1 className="font-display text-3xl font-bold mb-4 text-gray-900 dark:text-white/90 capitalize">
              {project.name}
            </h1>

            <ProjectCard project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
