import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';

interface ProjectGridCardProps {
  project: Project;
}

export const ProjectGridCard: React.FC<ProjectGridCardProps> = ({ project }) => {
  return (
    <a className="card" href={`/work/${project.id}`}>
      <figure className="card__media">
        <img
          src={`/images/work/${project.id}-cover-900.webp`}
          alt={`${project.name} dashboard redesign`}
          width="900" height="560" loading="lazy" decoding="async"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          srcSet={`/images/work/${project.id}-cover-600.webp 600w,
                   /images/work/${project.id}-cover-900.webp 900w,
                   /images/work/${project.id}-cover-1200.webp 1200w`}
        />
      </figure>
      <div className="card__meta">
        <h3>{project.name}</h3>
        <p className="muted">Role: {project.role} • {project.year}</p>
      </div>
    </a>
  );
};
