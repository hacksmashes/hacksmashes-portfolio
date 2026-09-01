"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? undefined : container;
  const itemVariants = shouldReduceMotion ? undefined : item;

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-dot-grid bg-dot-grid-fade opacity-[0.35]" />

      <Container className="relative grid gap-14 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
        <motion.div variants={variants} initial="hidden" animate="show">
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle px-3 py-1.5 text-xs text-fg-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {siteConfig.availability}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-display-xl font-medium text-fg text-balance"
          >
            Building fast, scalable and modern web experiences.
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-lg text-lg leading-relaxed text-fg-muted text-pretty">
            I&rsquo;m a full stack developer who builds production-ready web applications with
            React, Next.js, and Node.js — from the database to the pixels on screen.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary">
              View my work
            </Button>
            <Button href="#contact" variant="secondary">
              Let&rsquo;s work together
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-lg border border-border bg-bg-subtle shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
              <span className="ml-3 font-mono text-xs text-fg-faint">profile.ts</span>
            </div>
            <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-relaxed text-fg-muted">
              <code>
                <span className="text-fg-faint">1</span>{"  "}
                <span className="text-accent">export const</span> developer = {"{"}
                {"\n"}
                <span className="text-fg-faint">2</span>{"  "}
                {"  "}experience: <span className="text-accent">&quot;5 years&quot;</span>,
                {"\n"}
                <span className="text-fg-faint">3</span>{"  "}
                {"  "}stack: [<span className="text-accent">&quot;React&quot;</span>, <span className="text-accent">&quot;Next.js&quot;</span>, <span className="text-accent">&quot;Node.js&quot;</span>],
                {"\n"}
                <span className="text-fg-faint">4</span>{"  "}
                {"  "}focus: [<span className="text-accent">&quot;performance&quot;</span>, <span className="text-accent">&quot;a11y&quot;</span>],
                {"\n"}
                <span className="text-fg-faint">5</span>{"  "}
                {"  "}status: <span className="text-accent">&quot;shipping&quot;</span>,
                {"\n"}
                <span className="text-fg-faint">6</span> {"}"};
                <span className="ml-1 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-fg-faint motion-reduce:animate-none" />
              </code>
            </pre>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
