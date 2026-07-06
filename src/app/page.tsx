"use client";
import AboutSection from "@/components/about/about-section";
import ContactCTA from "@/components/contact/contact-cta";
import Hero from "@/components/hero/hero";
import Footer from "@/components/layout/footer";
import ProjectsSection from "@/components/projects/projects-section";
import SkillsMarquee from "@/components/skills-marquee/skills-marquee";
import { SkillsSvgContainer } from "@/components/svg-animation/skills-svg";
import TextHoverAnimation from "@/components/text-hover-animation/text-hover-animation";
import TextPathContainer from "@/components/text-hover-animation/text-path";
import ProgressiveBlur from "@/components/ui/progressive-blur";


export default function Home() {
  return (
    <main className=" h-screen w-full pt-12 noise">
      <Hero />
      <SkillsMarquee />
      <ProjectsSection />
      <AboutSection />
      {/* <SkillsSvgContainer /> */}
      {/* <TextPathContainer /> */}
      <ContactCTA />
     <Footer />
       <div className="fixed bottom-0 left-0 w-full h-22 z-50 pointer-events-none">
        <ProgressiveBlur />
      </div>
    </main>
  );
}
