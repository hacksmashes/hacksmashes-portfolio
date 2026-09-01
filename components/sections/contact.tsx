"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-b border-border py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              tag="contact"
              title="Have a project in mind?"
              description="Let's build something fast, reliable, and scalable. Tell me a bit about it and I'll reply within a couple of days."
            />

            <div className="mt-8 flex flex-col gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-fg-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.mobile}`}
                className="text-sm text-fg-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg"
              >
                {siteConfig.mobile}
              </a>
              {/* <div className="mt-2 flex gap-4 font-mono text-xs text-fg-faint">
                <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-fg-muted">
                  LinkedIn
                </a>
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer noopener" className="hover:text-fg-muted">
                  GitHub
                </a>
              </div> */}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            {status === "success" ? (
              <div
                role="status"
                className="rounded-lg border border-border bg-bg-subtle p-8 text-sm leading-relaxed text-fg-muted"
              >
                Thanks - your message is on its way. I&rsquo;ll get back to you within a couple
                of days.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:border-accent"
                      placeholder="Jordan Lee"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:border-accent"
                      placeholder="jordan@company.com"
                    />
                  </Field>
                </div>

                <Field label="Budget (optional)" htmlFor="budget">
                    <input
                      id="budget"
                      name="budget"
                      required
                      className="w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg focus:border-accent"
                      placeholder="Enter in $"
                    />
                  {/* <select
                    id="budget"
                    name="budget"
                    className="w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg focus:border-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="<5k">Under $5k</option>
                    <option value="5-15k">$5k – $15k</option>
                    <option value="15-40k">$15k – $40k</option>
                    <option value="40k+">$40k+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select> */}
                </Field>

                <Field label="Project details" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:border-accent"
                    placeholder="What are you building, and what would help most right now?"
                  />
                </Field>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "submitting"}
                  className="mt-2 w-full sm:w-auto"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </Button>

                {status === "error" && (
                  <p role="alert" className="text-sm text-fg-muted">
                    Something went wrong sending that. Try emailing {siteConfig.email} directly.
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-xs font-medium text-fg-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
