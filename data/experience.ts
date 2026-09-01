export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

// TODO: Replace with your real roles, companies, and dates.
export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    org: "Company Name", // TODO
    period: "2023 — Present", // TODO
    summary:
      "Built and maintained enterprise-grade applications for insurance and internal tooling clients, working across the full stack from database schema to UI.",
    highlights: [
      "Designed and shipped REST and GraphQL APIs consumed by multiple frontend clients",
      "Rebuilt core workflows in React and Next.js, replacing legacy multi-page forms",
      "Introduced consistent accessibility and performance standards across the codebase",
      "Collaborated directly with product and design to scope and estimate new features",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    role: "Frontend Developer",
    org: "Company Name", // TODO
    period: "2021 — 2023", // TODO
    summary:
      "Focused on frontend architecture and CMS integrations for content-heavy websites, including a headless Strapi migration.",
    highlights: [
      "Migrated a WordPress site to a headless architecture with Strapi and Next.js",
      "Built a reusable component library adopted across three internal products",
      "Improved page load performance through code splitting and image optimization",
    ],
    technologies: ["React", "Next.js", "Strapi", "WordPress", "Tailwind CSS"],
  },
  {
    role: "Web Developer",
    org: "Company Name", // TODO
    period: "2020 — 2021", // TODO
    summary:
      "Started as a full stack web developer building CMS-based websites and small internal tools.",
    highlights: [
      "Built and maintained WordPress sites for multiple clients",
      "Developed small Node.js services for internal automation",
      "Learned production practices for Git workflows, code review, and deployment",
    ],
    technologies: ["JavaScript", "Node.js", "WordPress", "HTML5", "CSS3"],
  },
];
