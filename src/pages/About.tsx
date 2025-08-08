import React from "react";
import { Download } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen p-4 sm:p-8 pt-28 sm:pt-36">
      <div className="max-w-[90%] mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-bold mb-8 text-gray-900 dark:text-white/90 tracking-tight leading-tight">
            ABOUT
          </h1>

          <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8 max-w-2xl">
            <p className="text-lg sm:text-xl text-gray-800 dark:text-white/80 leading-relaxed sm:leading-relaxed">
              I’m Jerry Nkongolo — a multidisciplinary creative working across
              photography, front‑end development, UI/UX, and traditional
              painting. My work blends design, craft, and technology to build
              thoughtful visuals and interfaces.
            </p>

            <p className="text-lg sm:text-xl text-gray-800 dark:text-white/80 leading-relaxed sm:leading-relaxed">
              I specialize in UI/UX, mobile front‑end, and web applications, and
              I’m passionate about brand identity and logo design. I like to
              keep things simple, intentional, and human.
            </p>

            <div className="pt-2">
              <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-white/50 mb-3">
                Skills & Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "UI/UX",
                  "Mobile Front‑end",
                  "Web Applications",
                  "Brand Identity",
                  "Logo Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-sm text-gray-700 dark:text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 
                       text-gray-900 dark:text-white/90
                       font-display text-base sm:text-lg tracking-wide
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
    </div>
  );
}

export default About;
