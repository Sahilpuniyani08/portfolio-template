"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectCard } from "../ui/project-card";
import {  moveVarients, stagger } from "@/lib/motion/varients";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "../common/section-heading";

export default function ProjectsSection() {
  return (
    <section
     className="relative pb-28  pt-20 overflow-hidden mask-t-from-90% to-80%"
     id="projects"
     >
      {/* Decorative Absolute Divs with bg-accent */}
      <div className="pointer-events-none" aria-hidden="true">
        <motion.div
          variants={moveVarients["leftToRight"]}
          animate="animate"
          className="absolute -z-10 blur-3xl opacity-30 bg-accent rounded-full w-80 h-80 left-80 top-56"
        />
        <motion.div
          variants={moveVarients["leftToRight"]}
          animate="animate"
          className="absolute -z-10 blur-2xl opacity-20 bg-accent rounded-full w-40 h-125 -right-25 top-55"
        />
        <motion.div
          variants={moveVarients["rightToLeft"]}
          animate="animate"
          className="absolute -z-10 blur-[80px] opacity-25 bg-accent rounded-full w-125 h-20 left-[70%] bottom-40"
        />
        <motion.div
          variants={moveVarients["leftToRight"]}
          animate="animate"
          className="absolute -z-10 blur-[80px] opacity-25 bg-accent rounded-full w-1/2 h-25 left-7 bottom-110"
        />
      </div>

   
      <SectionHeading
        subheading="/ best projects"
        heading="Selected Projects"
      />
     

      {/* GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className={cn(
          "grid gap-8",
          "grid-cols-1 md:grid-cols-2",
          "px-5 max-w-4xl mx-auto"
        )}
      >
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image.src}
            tech={project.tech}
            active={project.active}
            href={project.href}
          />
        ))}
      </motion.div>
    </section>
  );
}
