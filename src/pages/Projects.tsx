import React from "react";
import { projects } from "../types/project";
import { ProjectGridCard } from "../components/project/ProjectGridCard";

function Projects() {
  return (
    <section id="work" className="work container">
      <h2>Selected work</h2>
      <div className="work-grid">
        {projects.map((project) => (
          <ProjectGridCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
