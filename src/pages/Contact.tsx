import React from 'react';
import { Navigation } from '../components/Navigation';
import { ArrowUpRight } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen p-8">
      <Navigation />
      
      <div className="max-w-7xl mx-auto pt-36">
        <div className="mb-24">
          <h1 className="font-display text-8xl font-bold mb-8
                       text-gray-900 dark:text-white/90 tracking-tighter">
            CONTACT
          </h1>
          <div className="w-full h-px bg-gray-900 dark:bg-white/90" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Email Section */}
          <div className="space-y-8">
            <h2 className="font-display text-xl uppercase tracking-wider 
                         text-gray-600 dark:text-white/70">
              E-mail
            </h2>
            <a 
              href="mailto:hello@itssharl.ee" 
              className="group flex items-center gap-2 text-2xl md:text-3xl 
                       text-gray-900 dark:text-white hover:text-gray-600 
                       dark:hover:text-white/70 transition-colors"
            >
              hello@itssharl.ee
              <ArrowUpRight 
                size={24} 
                className="transform group-hover:translate-x-1 
                         group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>

          {/* Social Media Section */}
          <div className="space-y-8">
            <h2 className="font-display text-xl uppercase tracking-wider 
                         text-gray-600 dark:text-white/70">
              Réseaux Sociaux
            </h2>
            <div className="space-y-6">
              <a 
                href="https://instagram.com" 
                className="group flex items-center gap-2 text-2xl md:text-3xl 
                         text-gray-900 dark:text-white hover:text-gray-600 
                         dark:hover:text-white/70 transition-colors"
              >
                Instagram
                <ArrowUpRight 
                  size={24} 
                  className="transform group-hover:translate-x-1 
                           group-hover:-translate-y-1 transition-transform"
                />
              </a>
              <a 
                href="https://behance.net" 
                className="group flex items-center gap-2 text-2xl md:text-3xl 
                         text-gray-900 dark:text-white hover:text-gray-600 
                         dark:hover:text-white/70 transition-colors"
              >
                Behance
                <ArrowUpRight 
                  size={24} 
                  className="transform group-hover:translate-x-1 
                           group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;