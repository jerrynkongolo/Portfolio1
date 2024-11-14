import React from 'react';
import { CircleButton } from '../components/CircleButton';
import { Navigation } from '../components/Navigation';

function Home() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <Navigation />
      
      <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white/90
                   bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white/70
                   animate-gradient bg-300% tracking-tight">
        Hi, I'm Jerryyyy from Raffiki Studio
      </h1>
      
      <p className="font-sans text-lg md:text-xl mb-8 text-gray-600 dark:text-white/70
                  font-light tracking-wide max-w-2xl">
        I'm a graphic designer, mobile and web front-end developer, UX/UI designer, traditional painter, and photographer. 
      </p>

      <div className="flex flex-wrap justify-center gap-12 mb-8">
        <CircleButton to="/projects">
          View Projects
        </CircleButton>
        <CircleButton to="/about">
          Learn More
        </CircleButton>
      </div>
    </main>
  );
}

export default Home;