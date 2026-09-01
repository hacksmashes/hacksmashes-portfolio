import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="border-b border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading
            tag="services"
            title="How I can help"
            description="Freelance engagements, from a single feature to owning the full build."
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-bg p-6">
              <h3 className="font-display text-base font-medium text-fg">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
