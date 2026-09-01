import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { reasons } from "@/data/why-and-process";

export function WhyWorkWithMe() {
  return (
    <section className="border-b border-border bg-bg-subtle/40 py-24">
      <Container>
        <Reveal>
          <SectionHeading tag="why-me" title="Why clients keep working with me" />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="border-l-2 border-border pl-5">
              <h3 className="font-display text-base font-medium text-fg">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
