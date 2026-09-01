import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading
            tag="work"
            title="Concept Projects"
            description="A sample of recent work. Names and metrics are placeholders where the original details are confidential — ask for specifics."
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i, 3) * 0.04}>
              <article className="group rounded-lg border border-border p-6 transition-colors duration-300 ease-editorial hover:border-border-strong md:p-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="gutter-mark">{project.category}</p>
                    <h3 className="mt-2 font-display text-xl font-medium text-fg">{project.name}</h3>
                  </div>
                  <div className="flex shrink-0 gap-3 font-mono text-xs">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-fg-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg"
                      >
                        source
                      </a>
                    ) : (
                      <span className="text-fg-faint" aria-label="Source not publicly available">
                        source — private
                      </span>
                    )}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-fg-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg"
                      >
                        live demo
                      </a>
                    ) : (
                      <span className="text-fg-faint" aria-label="Live demo not available">
                        live demo — n/a
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg-muted text-pretty">
                  {project.description}
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium text-fg-faint">Problem</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-fg-faint">Solution</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-medium text-fg-faint">My contribution</p>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-fg-muted">
                    {project.contribution}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-medium text-fg-faint">Impact</p>
                  <ul className="mt-2 space-y-1.5">
                    {project.impact.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-fg-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-faint" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
