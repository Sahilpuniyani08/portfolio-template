"use client";

import { fadeUpSoft, fadeUpStaggerChar } from "@/lib/motion/varients";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


export function SectionHeading({
  subheading,
  heading,
  className = "",
}: {
  subheading: React.ReactNode;
  heading: string;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(
        "mb-16 text-center px-5 max-w-4xl mx-auto",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Subheading */}
      {subheading && (
        <motion.p
          variants={fadeUpSoft}
          className="font-serif italic text-foreground/60"
        >
          {subheading}
        </motion.p>
      )}

      {/* Heading (per-letter animation) */}
      <h2
        className={cn(
          "mt-2 flex justify-center flex-wrap",
          "text-3xl font-sans md:text-5xl font-regular text-foreground"
        )}
      >
        {heading.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={fadeUpStaggerChar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block font-sans"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  );
}
