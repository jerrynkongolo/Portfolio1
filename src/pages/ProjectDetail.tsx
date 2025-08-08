import React, { MouseEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "../components/project/ProjectCard";
import { projects } from "../types/project";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % images.length);

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
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-lg order-1"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={images[activeIndex]}
              alt={`${project.name} ${activeIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between p-3">
                <button
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="px-3 py-2 rounded-md bg-black/30 text-white text-sm hover:bg-black/40"
                >
                  Prev
                </button>
                <button
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="px-3 py-2 rounded-md bg-black/30 text-white text-sm hover:bg-black/40"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Text second on mobile */}
          <div className="order-2">
            <h1 className="font-display text-5xl font-bold mb-4 text-gray-900 dark:text-white/90 capitalize">
              {project.name}
            </h1>

            <ProjectCard project={project} />
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-md bg-white/10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {images.length > 1 && (
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4">
                <button
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}

            <img
              src={images[activeIndex]}
              alt={`${project.name} full ${activeIndex + 1}`}
              className="max-w-[95vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
