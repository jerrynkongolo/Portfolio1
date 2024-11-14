import React from 'react';
import { Download } from 'lucide-react';
import { Navigation } from '../components/Navigation';

function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-[90%] mx-auto pt-36">
        <div className="max-w-2xl">
          <h1 className="font-display text-8xl font-bold mb-12 text-gray-900 dark:text-white/90 tracking-tight">
            ABOUT
          </h1>
          
          <div className="relative">
            <div className="absolute left-0 right-[30%] h-px bg-gray-900 dark:bg-white/90 mb-12" />
          </div>
          
          <div className="mt-24 space-y-8">
            <p className="text-xl text-gray-800 dark:text-white/80 leading-relaxed">
              Hey, I'm Jerry Nkongolo, known as Sharlee on social media. I'm a multidisciplinary creative combining photography, front-end development, UI/UX design, and traditional painting. Passionate about pop music, I love creating portraits and universes inspired by what I listen to, and I'm always curious to learn more about new technologies and creative coding.
            </p>

            <a 
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 
                       text-gray-900 dark:text-white/90
                       font-display text-lg tracking-wide
                       hover:text-gray-600 dark:hover:text-white/70 
                       transition-colors duration-200
                       group"
            >
              <Download 
                size={20} 
                className="transform group-hover:-translate-y-1 transition-transform duration-200"
              />
              curriculum vitae
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="fixed top-0 right-0 w-1/2 h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60')`
          }}
        />
      </div>
    </div>
  );
}

export default About;