export interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  images?: string[];
  link: string;
  description?: string;
  technologies?: string[];
  year?: string;
  client?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'mike',
    category: 'Album Cover',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60',
    link: '#',
    description: 'A minimalist album cover design for Mike\'s debut EP. The design captures the essence of contemporary pop while maintaining a timeless appeal.',
    technologies: ['Photoshop', 'Illustrator'],
    year: '2024',
    client: 'Mike Music'
  },
  {
    id: 2,
    name: 'act responsable',
    category: 'Développement Web',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
    link: '#',
    description: 'A responsive web platform promoting environmental responsibility and sustainable practices.',
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    year: '2023',
    client: 'Act Responsable'
  },
  {
    id: 3,
    name: 'Sandas LT',
    category: 'Design Refresh',
    image: '/sandas/integrationpage.png',
    images: ['/sandas/integrationpage.png', '/sandas/pricepage.png'],
    link: '#',
    description: 'A clean, modern redesign focusing on clarity, consistent typography, and subtle motion. The refresh improves hierarchy, spacing, and navigation for a smoother browsing experience across pages.',
    technologies: ['Figma', 'React', 'Tailwind CSS'],
    year: '2024',
    client: 'Sandas LT'
  },
  // ... rest of the projects remain unchanged
];