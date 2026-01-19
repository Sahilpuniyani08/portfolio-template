import { MagneticButton } from "../ui/button";
import ScrollEditorial from "./ScrollEditorial";
import { motion } from "framer-motion";
import {
  sectionReveal,
  accentEmphasis,
  fadeUp,
  topGlowReveal,
} from "@/lib/motion/varients";

export default function ContactCTA() {
  return (
    <section className="relative pb-28 pt-20 overflow-hidden">
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto max-w-5xl px-5 md:px-16 text-center"
      >
        {/* SUBHEADING */}
        <motion.p
          variants={fadeUp}
          className="font-serif italic text-foreground-subtle"
        >
          / Let’s work together
        </motion.p>

        {/* HEADING */}
        <motion.h2
          variants={fadeUp}
          className="mt-4 text-3xl md:text-5xl font-semibold uppercase text-foreground leading-tight"
        >
          <SplitHoverText
            text=" Let’s"
            colors={["#F6390D", "#ff8a5b", "#ffd1b8"]}
          />{" "}
          <SplitHoverText
            text="Build"
            colors={["#F6390D", "#ff8a5b", "#ffd1b8"]}
          />{" "}
          <SplitHoverText
            text="Something"
            colors={["#F6390D", "#ff8a5b", "#ffd1b8"]}
          />
          <br />
          <motion.span variants={accentEmphasis} className="inline-block">
            <SplitHoverText
              text="Extraordinary"
              className="font-semibold"
              colors={["#F6390D", "#ff8a5b", "#ffd1b8"]}
            />
          </motion.span>{" "}
          <SplitHoverText
            text="together"
            colors={["#F6390D", "#ff8a5b", "#ffd1b8"]}
          />
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed"
        >
          Whether you’re building a product, launching a brand, or refining an
          experience, I’m always open to meaningful collaborations and exciting
          challenges.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-12 flex justify-center">
          <MagneticButton 
href="https://www.linkedin.com/in/sahil-puniyani-0b9819221/"
label="Work With Me" />
        </motion.div>
      </motion.div>

      {/* Accent theatre-like light effect at the bottom */}
      <motion.div
        variants={topGlowReveal}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-10 w-[180vw] h-60 md:h-80 z-0 blur-xl"
        style={{
          background:
            "radial-gradient(ellipse at top center, var(--color-accent) 10%,  transparent 30%)",
        }}
      ></motion.div>

      <ScrollEditorial />
    </section>
  );
}

import { cn } from "@/lib/utils";

const DEFAULT_COLORS = ["#F6390D", "#ff7845", "#ffb089", "#F6390D"];

export function SplitHoverText({
  text,
  className,
  colors = DEFAULT_COLORS,
}: {
  text: string;
  className?: string;
  colors?: string[];
}) {
  return (
    <span className={cn("group inline-flex flex-wrap", className)}>
      {text.split("").map((char, i) => {
        const color = colors[i % colors.length];

        return (
          <span
            key={i}
            className={cn(
              "relative inline-block",
              "text-foreground",
              "transition-all duration-300 ease-out",
              "group-hover:-translate-y-0.5"
            )}
            style={{
              transitionDelay: `${i * 25}ms`,
              color: "inherit",
            }}
          >
            <span
              className="inline-block transition-colors duration-300 ease-out group-hover:text-transparent"
              style={{
                WebkitTextFillColor: "currentColor",
                backgroundImage: `linear-gradient(90deg, ${color}, ${color})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        );
      })}
    </span>
  );
}
