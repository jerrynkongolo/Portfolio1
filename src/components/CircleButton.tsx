import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CircleButtonProps {
  to: string;
  children: React.ReactNode;
}

export const CircleButton = ({ to, children }: CircleButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <Link to={to}>
      <div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        className="group relative inline-flex items-center justify-center px-6 py-2 
                   text-gray-900 dark:text-white/90 font-display text-lg tracking-wide
                   overflow-hidden cursor-pointer"
      >
        {/* Background circle that follows mouse position */}
        <span 
          className="absolute w-8 h-8 rounded-full bg-gray-900 dark:bg-white
                     group-hover:w-[2.5rem] group-hover:h-[2.5rem] 
                     transition-all duration-300 ease-out pointer-events-none
                     opacity-0 group-hover:opacity-100"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Arrow and Text container */}
        <span className="relative z-10 flex items-center gap-2 group-hover:text-white 
                       dark:group-hover:text-gray-900 transition-colors duration-200 ease-out px-1">
          <ArrowRight 
            size={20} 
            className="transform group-hover:translate-x-0 -translate-x-1
                     transition-all duration-300 ease-out
                     text-gray-900 dark:text-white/90
                     group-hover:text-white dark:group-hover:text-gray-900" 
          />
          {children}
        </span>

        {/* Underline effect */}
        <span className="absolute bottom-0 left-0 w-full h-px bg-gray-900 dark:bg-white/90
                       transform origin-left transition-transform duration-300
                       group-hover:scale-x-100 scale-x-0" />
      </div>
    </Link>
  );
};