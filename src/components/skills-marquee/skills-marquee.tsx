"use client";
import { skills } from "@/data/skills";
import { SkillMarqueeRow } from "../ui/skill-marquee-row";
import { textStyles } from "@/typography/text-styles";
import { cn } from "@/lib/utils";




export default function SkillsMarquee() {
  
  return (
    <section 
    className="relative overflow-hidden py-10 "
    id="skills"
    >
      <div className="absolute  top-15 md:top-14 left-1/2 -translate-x-1/2 ">
        <h1
          className={cn(
            "text-accent text-7xl md:text-9xl font-bold  md:tracking-[4rem] opacity-80"
          )}
        >
          SKILLS
        </h1>
      </div>
      <div className="flex flex-col gap-10 md:gap-18">
        <SkillMarqueeRow skills={skills} direction="left" />

        <SkillMarqueeRow skills={skills} direction="right" />
      </div>
    </section>
  );
}
