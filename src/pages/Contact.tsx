import React from 'react';
import { Navigation } from '../components/Navigation';

function Contact() {
  return (
    <div className="min-h-screen p-8 pt-36">
      <Navigation />
      
      <div className="max-w-[90%] mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-display text-8xl font-bold mb-12 text-gray-900 dark:text-white/90 tracking-tight">
            CONTACT
          </h1>
          
          <div className="relative">
            <div className="absolute left-0 right-[30%] h-px bg-gray-900 dark:bg-white/90 mb-12" />
          </div>
          
          <div className="mt-24 space-y-8 max-w-2xl">
            <p className="text-xl text-gray-800 dark:text-white/80 leading-relaxed">
              Get in touch with me for collaborations, inquiries, or just to say hello.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:contact@example.com"
                className="block text-2xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white/70 transition-colors"
              >
                contact@example.com
              </a>
              <a 
                href="tel:+1234567890"
                className="block text-2xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white/70 transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;