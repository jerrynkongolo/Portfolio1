import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link 
      to="/" 
      className="fixed top-8 left-8 z-50 font-display text-2xl font-bold 
                 text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
    >
      <span className="tracking-tighter">RS</span>
    </Link>
  );
};