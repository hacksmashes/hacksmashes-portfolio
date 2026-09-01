import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-bg-subtle/40 py-24">
      <Container>
        <Reveal>
          <SectionHeading tag="experience" title="Where I've worked" />
        </Reveal>

        <ol className="mt-12 flex flex-col">
          {experience.map((role, i) => (
            <li key={`${role.org}-${role.period}`} className="relative flex gap-6 pb-12 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-accent bg-bg" />
                {i < experience.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
                )}
              </div>

              <Reveal delay={Math.min(i, 3) * 0.05} className="flex-1 pb-2">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-display text-lg font-medium text-fg">
                    {role.role} <span className="text-fg-muted">— {role.org}</span>
                  </h3>
                  <p className="font-mono text-xs text-fg-faint">{role.period}</p>
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted text-pretty">
                  {role.summary}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {role.highlights.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-fg-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-faint" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-xs text-fg-faint">
                  {role.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
