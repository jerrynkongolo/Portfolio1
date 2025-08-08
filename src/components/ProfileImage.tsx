import React from 'react';

export const ProfileImage = () => {
  return (
    <div className="w-48 h-48 rounded-full overflow-hidden mb-12 border-4 border-gray-900 dark:border-white/90">
      <img 
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
        alt="Jerry Nkongolo"
        className="w-full h-full object-cover"
      />
    </div>
  );
};