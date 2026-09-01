export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  impact: string[];
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

// Update the fields below any time you ship a new project. The shape
// (Project interface above) stays the same, so the UI keeps working.
export const projects: Project[] = [
  {
    slug: "ironforge-fitness",
    name: "IronForge Fitness",
    category: "Fitness / Gym Brand Site",
    description:
      "A dark, high-energy marketing site for a premium gym, built to convert visitors into free-trial sign-ups and members.",
    problem:
      "The gym needed a site that matched the intensity of the training experience itself and gave prospective members a clear, low-friction path to book a trial or join.",
    solution:
      "Designed a bold, image-led homepage with a strong hero headline, a persistent availability indicator, and two tiers of CTA (\"Join Now\" and \"Book Free Trial\") repeated at key decision points down the page.",
    contribution:
      "Built the full frontend: layout, responsive behavior, and the content structure for programs, trainers, pricing, and contact.",
    impact: [
      "Clear conversion path from hero straight through to trial booking",
      "Consistent dark, editorial visual identity across every section",
      "Fully responsive across mobile, tablet, and desktop",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: null,
    liveUrl: "https://ironforge-fitness-brand-site.vercel.app/",
  },
  {
    slug: "tastebite-restaurant",
    name: "TasteBite",
    category: "Restaurant / Fine Dining Site",
    description:
      "An elegant, image-forward website for a fine-dining restaurant, built to set the tone before a guest ever walks through the door.",
    problem:
      "The restaurant needed a digital presence as polished as its plating — one that communicated a premium dining experience and made booking a table effortless.",
    solution:
      "Built a warm, editorial layout around full-bleed food photography, serif display type for an upscale feel, and prominent \"View Menu\" and \"Book a Table\" actions in the hero and navigation.",
    contribution:
      "Built the full frontend, including the hero, menu presentation, and reservation-focused navigation and CTAs.",
    impact: [
      "Reservation and menu actions surfaced within the first screen",
      "Typography and imagery tuned to feel premium, not templated",
      "Fully responsive across mobile, tablet, and desktop",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: null,
    liveUrl: "https://tastebite-premium-web.vercel.app/",
  },
  {
    slug: "glowup-salon",
    name: "GlowUp Salon & Spa",
    category: "Beauty & Wellness Site",
    description:
      "A soft, luxury-toned site for a salon and spa, designed to showcase services and turn browsers into booked appointments.",
    problem:
      "The salon needed a site that felt as calming and premium as the in-salon experience, while still making it fast to book an appointment or browse services.",
    solution:
      "Built a light, gradient-accented design with a warm color palette, trust-building stats (years of experience, clients served, stylists), and a two-action hero (\"Book Appointment\" / \"View Services\").",
    contribution:
      "Built the full frontend, including the hero, services layout, and booking-focused navigation and CTAs.",
    impact: [
      "Trust indicators placed directly in the hero for immediate credibility",
      "Soft, cohesive color system distinct from typical salon templates",
      "Fully responsive across mobile, tablet, and desktop",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: null,
    liveUrl: "https://glowup-salon-website.vercel.app/",
  },
];
