import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-bg-subtle/40 py-24">
      <Container>
        <Reveal>
          <SectionHeading
            tag="stack"
            title="The tools I reach for"
            description="Grouped by where they sit in the stack, not a wall of logos."
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={Math.min(i, 3) * 0.05} className="bg-bg">
              <div className="h-full p-6">
                <h3 className="font-display text-base font-medium text-fg">{group.category}</h3>
                <p className="mt-1.5 text-sm text-fg-muted">{group.note}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-fg-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
