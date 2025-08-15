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
    id: 3,
    name: "Sandas LT",
    category: "Design Refresh",
    image: "/sandas/integrationpage.png",
    images: ["/sandas/integrationpage.png", "/sandas/pricepage.png"],
    link: "#",
    description:
      "A clean, modern redesign focusing on clarity, consistent typography, and subtle motion. The refresh improves hierarchy, spacing, and navigation for a smoother browsing experience across pages.",
    technologies: ["Figma", "React", "Tailwind CSS"],
    year: "2025",
    client: "Sandas LT",
  },
];
