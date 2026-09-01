import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Services />
      {/* <WhyWorkWithMe /> */}
      <Process />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
