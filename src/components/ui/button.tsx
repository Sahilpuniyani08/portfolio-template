"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type MagneticButtonProps = {
  label: string;
  href?: string;
  className?: string;
};

export function MagneticButton({ label, href, className }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.25);
    y.set(offsetY * 0.25);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={cn(
        "group flex items-center justify-start gap-2 md:gap-3 font-medium transition-colors",
        "bg-border/10 inset-shadow-sm inset-shadow-accent/40 hover:inset-shadow-accent",
        "rounded-full w-fit pl-3 pr-5 py-2",
        className
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          "shadow-2xl shadow-border text-shadow-2xs bg-white text-accent",
          "transition-transform duration-300",
          "group-hover:-rotate-45"
        )}
      >
        <ArrowRight size={16} />
      </span>

      <span className="tracking-wide text-shadow-2xs">{label}</span>
    </motion.a>
  );
}
