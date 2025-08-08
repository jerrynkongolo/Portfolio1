import React from "react";
import { Mail } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center px-6 sm:px-10 py-10">
      <div className="w-full max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
          <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200 dark:bg-white/10 border border-gray-200/80 dark:border-white/10 shadow-sm">
            <img
              src="/workspace.jpg"
              alt="Profile placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm p-8 sm:p-10 shadow-sm">
            <h1 className="font-display text-5xl font-bold text-gray-900 dark:text-white/90 tracking-tight">
              Contact
            </h1>
            <p className="mt-3 text-gray-600 dark:text-white/70">
              I’m available for collaborations, inquiries, or just to say hello.
            </p>

            <div className="mt-8 space-y-2">
              <div className="font-display text-2xl text-gray-900 dark:text-white/90">
                Jerry Nkongolo
              </div>
              <a
                href="mailto:jerrynkongolo@icloud.com"
                className="inline-flex items-center gap-2 text-lg text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white/70 transition-colors"
              >
                <Mail className="w-5 h-5" />
                jerrynkongolo@icloud.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
