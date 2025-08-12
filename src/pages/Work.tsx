import React from "react";
import { projects } from "../types/project";
import { ProjectGridCard } from "../components/project/ProjectGridCard";

export default function Work(){
  return (
    <main className="container">
      <header className="page-head">
        <h1>Work</h1>
        <p className="subhead">Selected product, UI/UX, and brand projects.</p>
      </header>
      <div className="work-grid">
        {projects.map((project) => (
          <ProjectGridCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
