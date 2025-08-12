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
        <img src={(project.images && project.images[0]) || project.image} alt={`${project.name} dashboard redesign`} loading="lazy" />
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
