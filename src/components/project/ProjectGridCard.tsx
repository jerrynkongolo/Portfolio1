import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';

interface ProjectGridCardProps {
  project: Project;
}

export const ProjectGridCard: React.FC<ProjectGridCardProps> = ({ project }) => {
  return (
    <Link className="card" to={`/projects/${project.id}`}>
      <figure className="card__media">
        <img
          src="/images/cover-900.webp"
          alt="Project cover"
          width="900" height="560"
          loading="lazy" decoding="async"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          srcSet="/images/cover-600.webp 600w, /images/cover-900.webp 900w, /images/cover-1200.webp 1200w"
        />
      </figure>
      <div className="card__meta">
        <span className="card__logo">{project.name.toUpperCase()}</span>
        <div className="card__text">
          <h3>{project.name}</h3>
          <p>Role: {project.role} • {project.year}</p>
        </div>
      </div>
    </Link>
  );
};
