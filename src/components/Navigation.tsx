import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { number: "01", text: "HOME", path: "/" },
    { number: "02", text: "PROJECTS", path: "/projects" },
    { number: "03", text: "ABOUT", path: "/about" },
    { number: "04", text: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <Logo />
      <div className="fixed top-8 right-8 z-50 flex items-center gap-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-gray-900 dark:text-white" />
          ) : (
            <Menu size={24} className="text-gray-900 dark:text-white" />
          )}
        </button>
        <ThemeToggle />
      </div>

      <div
        className={`fixed inset-0 bg-white dark:bg-[#1a1a1a] z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center">
          <nav className="space-y-8">
            {menuItems.map((item) => (
              <Link
                key={item.number}
                to={item.path}
                className="flex items-center gap-6 group"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-gray-400 dark:text-white/50 font-display text-lg">
                  {item.number}
                </span>
                <span className="font-display text-6xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white/70 transition-colors">
                  {item.text}
                </span>
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-12 flex gap-8">
            <a
              href="https://www.instagram.com/rafikki.studio?igsh=MXRyeGh4aDI5dGFncg%3D%3D&utm_source=qr"
              className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors text-lg"
              target="_blank"
              rel="noreferrer noopener"
            >
              @rafikki.studio
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors text-lg"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
