# Developer Portfolio

A premium, freelance-client-facing developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom design tokens for light/dark mode)
- **Framer Motion** (used sparingly — one hero entrance sequence, restrained scroll reveals)
- **next-themes** (dark/light mode with system preference detection)
- **@fontsource-variable** (self-hosted Space Grotesk, Inter, and JetBrains Mono — no runtime dependency on Google Fonts)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm run dev      # start the dev server
npm run build    # production build (also runs type-checking + linting)
npm run start    # run the production build locally
npm run lint     # run ESLint
```

## Project structure

```
app/                  routes, layout, metadata, robots.ts, sitemap.ts, OG image, favicon
  layout.tsx           root layout: fonts, metadata, ThemeProvider, Navbar/Footer
  page.tsx             homepage — assembles all sections
  globals.css          design tokens (CSS variables) for light/dark mode
components/
  ui/                  small reusable primitives (Button, Badge, Container, SectionHeading, Reveal)
  layout/              Navbar, Footer, ThemeToggle
  sections/            one file per homepage section (Hero, About, Skills, Projects, ...)
data/                  all editable content, separate from UI components
lib/                   utils (cn helper) and the theme provider
public/                static assets
```

Content lives in `data/*.ts`, separate from the components that render it — edit the data files to update copy without touching JSX.

## Content you should replace before launch

Everything below is marked with a `// TODO` comment in the code:

- `data/site.ts` — your name, email, social links, production URL
- `data/projects.ts` — real project names, descriptions, links, and results (current entries are realistic placeholders — no invented client names or fabricated metrics)
- `data/experience.ts` — your real employers and dates
- `components/sections/contact.tsx` — the form currently just simulates a submit; wire it to a real backend (see comments in the file for options: a Next.js Route Handler + email provider like Resend, or a form service like Formspree)
- `components/sections/testimonials.tsx` — currently an honest placeholder; add real testimonials once you have them

## Environment variables

None are required to run the site as-is. If you wire up the contact form to an email service (see TODO in `components/sections/contact.tsx`), you'll typically add something like:

```bash
# .env.local
RESEND_API_KEY=your_key_here
CONTACT_TO_EMAIL=you@example.com
```

Add a `.env.local` file (already git-ignored) and read the values in a new `app/api/contact/route.ts` Route Handler.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: Next.js (auto-detected). No build settings need to change.
4. Add any environment variables from above under **Project Settings → Environment Variables**.
5. Deploy. Every push to your main branch redeploys automatically.

After deploying, update `siteConfig.url` in `data/site.ts` to your real domain and redeploy so metadata, the sitemap, and Open Graph tags point to the right place.

## Notes on design decisions

- **Motion is deliberate, not decorative.** The hero has one orchestrated entrance sequence; other sections use a single, subtle fade-up on scroll rather than staggered animation on every card. Everything respects `prefers-reduced-motion`.
- **The "code editor" panel in the hero and the `// tag` labels above section headings** are the one recurring signature element, standing in for the generic gradient-hero/stat-card default.
- **Numbered steps only appear in the Process section**, because that's the one section where the content is genuinely sequential.
- **No fake testimonials, client logos, or metrics** — placeholders are honest about being placeholders.
