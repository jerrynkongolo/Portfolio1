import React from "react";
import { projects } from "../types/project";
import { ProjectGridCard } from "../components/project/ProjectGridCard";

export default function Projects(){
  return (
    <main className="container">
      <header className="page-head">
        <h1>Case studies</h1>
        <p className="subhead">Deeper dives into how I design and ship—problem, approach, and results.</p>
      </header>
      <div className="work-grid">
        {projects.map((project) => (
          <ProjectGridCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
