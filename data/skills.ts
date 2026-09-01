export interface SkillGroup {
  category: string;
  note: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    note: "Interfaces that feel fast and hold up under real use",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    note: "APIs and services that scale past the demo",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    note: "Data modeling for correctness and query performance",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "CMS",
    note: "Content platforms editors can actually use",
    skills: ["Strapi", "WordPress"],
  },
  {
    category: "DevOps / Tools",
    note: "Shipping, containerizing, and keeping deploys boring",
    skills: ["Git", "GitHub", "Docker", "AWS"],
  },
];
