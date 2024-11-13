import React, { useState } from 'react';
import { ProjectListItem } from '../components/ProjectListItem';
import { Navigation } from '../components/Navigation';

interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'sharlee',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    id: 2,
    name: 'act responsable',
    category: 'Développement Web',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    id: 3,
    name: 'dualipa',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    id: 4,
    name: 'cocolyze',
    category: 'Design UX/UI',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    id: 5,
    name: 'les indécis',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    id: 6,
    name: 'le jeu de l\'oie',
    category: 'Game Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    id: 7,
    name: 'l\'équipe explore',
    category: 'Illustration',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    id: 8,
    name: 'silhouette',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    id: 9,
    name: 'portraits',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
];

function Projects() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen">
      <Navigation />
      
      {/* Project List - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 min-h-screen md:ml-auto p-4 md:p-8 lg:p-16 pt-24 md:pt-36">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white/90">
              PROJETS
            </h1>
            <span className="text-2xl md:text-4xl font-display text-gray-900 dark:text-white/90">
              {projects.length}
            </span>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectListItem
                key={project.id}
                name={project.name}
                category={project.category}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;