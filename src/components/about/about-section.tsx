"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { fadeUp, fadeUpSoft, stagger } from "@/lib/motion/varients";
import { SectionHeading } from "../common/section-heading";
import { posterImg } from "@/assets/images";
import { SocialIcon } from "../common/social-icon";
import { socialMediaData } from "@/data/social-media";
import { experienceData } from "@/data/experience";


export default function AboutSection() {
  return (
    <section 
    className="relative pb-28"
    id="about"
    >
      <SectionHeading
        subheading="/ Who Am I"
        heading="Pushing Boundaries Since 2023"
      />

      {/* CONTENT */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className={cn(
          "grid gap-12 px-5 max-w-4xl mx-auto",
          "grid-cols-1 md:grid-cols-2 items-start"
        )}
      >
        {/* LEFT COLUMN */}
        <div className="space-y-11">
          {/* IMAGE WRAPPER */}
          <motion.div
            variants={fadeUp}
            className={cn(
              "relative aspect-4/3 w-full",
              " rounded-[16px] bg-border/10 overflow-hidden",
              "border border-border  backdrop-blur-sm rounded-3xl",
              "inset-shadow-xs inset-shadow-border-soft shadow-2xs",
              "rotate-[-4deg] scale-105 mt-7"
            )}
          >
            <div className="p-2 h-full w-full rounded-[16px] overflow-hidden">
              <div className="bg-linear-to-b from-white to-background-accent relative h-full w-full rounded-[16px] overflow-hidden  ">
                <Image
                  src={posterImg}
                  alt="Sahil Punyani"
                  fill
                  className={cn(
                    "object-cover rounded-[16px]",
                    "rotate-10 md:scale-110 drop-shadow-xl"
                  )}
                />
              </div>
            </div>
          </motion.div>

          {/* SOCIAL + NAME */}
          <div className="flex items-center justify-between gap-6">

            <motion.div variants={stagger} className="flex items-center gap-4">
              {socialMediaData.map((item, idx) => (
                <SocialIcon
                  key={idx}
                  href={item.href}
                  icon={item.icon}
                />
              ))}

            </motion.div>

            {/* NAME */}
            <motion.div variants={fadeUpSoft} className="text-right">
              <p className=" text-sm text-foreground">Sahil Punyani</p>
              <p className="text-xs text-foreground-subtle">
                Full Stack Developer
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-between gap-8 h-full">
          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUpSoft}
            className="w-full  tracking-tight text-foreground-muted  text-sm leading-snug"
          >
            I’m a full stack developer focused on building scalable, elegant,
            and user-centric web applications. I enjoy transforming complex
            ideas into refined digital experiences that feel intuitive,
            performant, and purposeful.
            <br />
            <br />
            With a strong foundation in modern JavaScript ecosystems, I
            collaborate closely with design and product teams to deliver
            solutions that balance aesthetics and engineering precision.
          </motion.p>

          {/* EXPERIENCE LIST */}
          <motion.div variants={stagger} className="space-y-4 ">
            {
              experienceData.map((experience, idx) =>{
                return  <ExperienceItem
                key={idx}
                role={experience.role}
                company={experience.company}
                period={experience.period}
              />
              })
            }
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


function ExperienceItem({
  role,
  company,
  period,
}: {
  role: string;
  company: string;
  period: string;
}) {
  return (
    <motion.div
      variants={fadeUpSoft}
      className={cn(
        "flex flex-wrap items-center gap-2 text-xs",
        "border-b border-border pb-3"
      )}
    >
      <span className="text-foreground">{role}</span>
      <span className="text-foreground-subtle">—</span>
      <span className="text-foreground-muted">{company}</span>
      <span className="ml-auto text-foreground">{period}</span>
    </motion.div>
  );
}
