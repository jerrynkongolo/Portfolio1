import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link 
      to="/" 
      className="fixed top-8 left-8 z-50 hover:opacity-80 transition-opacity"
      aria-label="Home"
    >
      <img
        src="/logo/logo.png"
        alt="Logo"
        className="h-8 w-auto object-contain md:h-10"
      />
    </Link>
  );
};