"use client";
import AboutSection from "@/components/about/about-section";
import ContactCTA from "@/components/contact/contact-cta";
import Hero from "@/components/hero/hero";
import Footer from "@/components/layout/footer";
import ProjectsSection from "@/components/projects/projects-section";
import SkillsMarquee from "@/components/skills-marquee/skills-marquee";


export default function Home() {
  return (
    <main className="h-screen w-full noise pt-12">
      <Hero />
      <SkillsMarquee />
      <ProjectsSection />
      <AboutSection />
      <ContactCTA />
     <Footer />
    </main>
  );
}
