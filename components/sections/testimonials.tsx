import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <section className="border-b border-border bg-bg-subtle/40 py-24">
      <Container>
        <Reveal>
          <SectionHeading tag="testimonials" title="What clients say" />
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          {/* TODO: Replace this placeholder with 2-4 real client testimonials once available.
              Suggested shape for each: { quote, name, role, company } */}
          <div className="rounded-lg border border-dashed border-border-strong p-10 text-center">
            <p className="max-w-md mx-auto text-sm leading-relaxed text-fg-muted">
              Client testimonials will go here as projects wrap up. In the meantime, reach out
              directly and I&rsquo;m happy to share references from recent work.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
