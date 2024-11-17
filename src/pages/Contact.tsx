import React from 'react';
import { Navigation } from '../components/Navigation';
import { ArrowUpRight } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen p-8">
      <Navigation />
      
      <div className="max-w-6xl mx-auto pt-36">
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white/90 tracking-tight">
            CONTACT
          </h1>
          <div className="w-full h-[1px] md:h-[2px] bg-gray-900 dark:bg-white/90" />
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-32">
          {/* Email Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-lg uppercase tracking-wider text-gray-600 dark:text-white/70">
              E-mail
            </h2>
            <a 
              href="mailto:jerrynkongolo@icloud.com" 
              className="group flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white/70 transition-colors"
            >
              <ArrowUpRight 
                size={18} 
                className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
              jerrynkongolo@icloud.com
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-lg uppercase tracking-wider text-gray-600 dark:text-white/70">
              Social Medias
            </h2>
            <div className="flex flex-col gap-4">
              <a 
                href="https://instagram.com" 
                className="group flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white/70 transition-colors"
              >
                <ArrowUpRight 
                  size={18} 
                  className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
                Instagram
              </a>
              <a 
                href="https://behance.net" 
                className="group flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white/70 transition-colors"
              >
                <ArrowUpRight 
                  size={18} 
                  className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
                Behance
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;