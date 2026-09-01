import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/why-and-process";

export function Process() {
  return (
    <section className="border-b border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading
            tag="process"
            title="How a project runs"
            description="The same seven stages whether it's a two-week feature or a full build."
          />
        </Reveal>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="border-t border-border pt-4">
              <span className="font-mono text-xs text-fg-faint">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-base font-medium text-fg">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
