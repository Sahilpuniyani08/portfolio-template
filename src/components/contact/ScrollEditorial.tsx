"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { AsteriskIcon } from "@/assets/icons/AsteriskIcon";

function ScrollContent() {
  return (
    <div className="flex items-center gap-12 pr-12">
      <span className="text-3xl md:text-4xl font-light tracking-wide text-foreground/80">
        Creative Collaboration Is The Key To Meaningful Design
      </span>

      <AsteriskIcon />
    </div>
  );
}

function ScrollRow({ style, className }: { style: any; className?: string }) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <motion.div style={style} className="flex items-center ">
        <ScrollContent />
        <ScrollContent />
      </motion.div>
    </div>
  );
}

export default function ScrollEditorial() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress of THIS section only
  const { scrollYProgress  } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  // Map vertical scroll → horizontal movement
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-20 mask-l-from-70% mask-r-from-70% "
    >
      <ScrollRow style={{ x: xLeft }} />
      <ScrollRow style={{ x: xRight }} className="mt-10 " />
    </section>
  );
}
