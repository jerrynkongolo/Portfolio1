import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectListItemProps {
  name: string;
  category: string;
  image: string;
  link: string;
}

export const ProjectListItem = ({ name, category, image, link }: ProjectListItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      className="group block border-b border-gray-900/90 dark:border-white/90 py-6 md:py-8 
                relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
        <div className="flex items-center gap-4">
          <ArrowRight 
            size={24}
            className="transform -translate-x-2 opacity-0 transition-all duration-300
                     group-hover:translate-x-0 group-hover:opacity-100
                     text-gray-900 dark:text-white/90"
          />
          <h2 className="font-display text-2xl md:text-3xl text-gray-900 dark:text-white/90
                       transform transition-transform duration-300 -translate-x-4
                       group-hover:translate-x-0">
            {name}
          </h2>
        </div>
        <span className="text-left md:text-right text-base md:text-lg text-gray-600 dark:text-white/70
                      transform transition-transform duration-300 translate-x-4 pl-10 md:pl-0
                      group-hover:translate-x-0">
          {category}
        </span>
      </div>

      {/* Thumbnail Preview - Hidden on mobile */}
      <div 
        className={`hidden md:block fixed left-0 top-36 w-[45vw] h-[60vh] pointer-events-none z-50
                   transition-opacity duration-300 ease-out rounded-tr-3xl
                   ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </a>
  );
};