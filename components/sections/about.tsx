import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const facts = [
  { label: "Experience", value: "5 years" },
  { label: "Focus", value: "Full stack, React-first" },
  { label: "Works well on", value: "Enterprise & CMS platforms" },
];

export function About() {
  return (
    <section id="about" className="border-b border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading tag="about" title="A full stack developer who cares how it runs in production" />
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          <Reveal delay={0.05}>
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-fg-muted text-pretty">
              <p>
                I&rsquo;m a full stack developer with 5 years of experience building
                production web applications — from enterprise platforms to content-driven
                sites. My work spans the frontend and backend: React and Next.js interfaces
                backed by Node.js and Express APIs, running on MongoDB or PostgreSQL.
              </p>
              <p>
                Most of my recent work has involved enterprise applications in the insurance
                space, e-learning platforms, and CMS-based sites built on Strapi and
                WordPress — including modernizing legacy codebases and improving frontend
                performance and accessibility along the way.
              </p>
              <p>
                I&rsquo;m most interested in projects where the details matter: clean data
                models, APIs that make sense to work with, and interfaces that stay fast and
                usable as the product grows.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-1 gap-6 sm:w-64">
              {facts.map((fact) => (
                <div key={fact.label} className="border-l-2 border-border pl-4">
                  <dt className="text-xs text-fg-faint">{fact.label}</dt>
                  <dd className="mt-1 font-display text-lg text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
