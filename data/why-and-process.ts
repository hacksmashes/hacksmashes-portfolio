export interface Reason {
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    title: "Built for production, not just demos",
    description:
      "5 years shipping features that had to hold up under real traffic and real edge cases, not just look good in a walkthrough.",
  },
  {
    title: "Code you can hand off",
    description:
      "Clear structure, sensible naming, and comments where they earn their place, so another developer — or future you — isn't lost in the codebase.",
  },
  {
    title: "Performance as a default, not an afterthought",
    description:
      "Images, bundles, and data fetching are considered from the start, so you're not paying down a performance debt later.",
  },
  {
    title: "You'll always know where things stand",
    description:
      "Regular updates, clear estimates, and honest answers when something is going to take longer than planned.",
  },
  {
    title: "Accessibility considered from the start",
    description:
      "Semantic markup, keyboard support, and color contrast are part of the build, not a checklist bolted on at the end.",
  },
  {
    title: "Architecture that can grow",
    description:
      "Decisions are made with the next six months in mind, so adding a feature later doesn't mean rebuilding the foundation.",
  },
];

export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description: "Understand your goals, users, and constraints before any code gets written.",
  },
  {
    title: "Plan",
    description: "Define scope, architecture, and a realistic timeline you can plan around.",
  },
  {
    title: "Design",
    description: "Work through UI and technical design decisions, with room for your feedback.",
  },
  {
    title: "Develop",
    description: "Build in focused increments, with working software to review along the way.",
  },
  {
    title: "Test",
    description: "Check functionality, performance, and accessibility before anything ships.",
  },
  {
    title: "Deploy",
    description: "Release to production with monitoring in place, not just a one-time push.",
  },
  {
    title: "Support",
    description: "Stay available for fixes, questions, and the next round of improvements.",
  },
];
