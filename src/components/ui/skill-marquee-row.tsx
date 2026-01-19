"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { marqueeVariants } from "@/lib/motion/varients";
import { textStyles } from "@/typography/text-styles";

type Skill = {
  name: string;
  icon: React.ElementType;
};

type SkillMarqueeRowProps = {
  skills: Skill[];
  direction?: "left" | "right";
  className?: string;
};

export function SkillMarqueeRow({
  skills,
  direction = "left",
  className,
}: SkillMarqueeRowProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
      style={{ transform: "translate3d(0,0,0)" }}
        className="flex w-max gap-4 will-change-transform translate-z-0"
        variants={marqueeVariants[direction]}
        animate="animate"
      >
        {[...skills, ...skills].map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className={cn(
                "flex items-center gap-3 rounded-full",
                " backdrop-blur-sm inset-shadow-border inset-shadow-xs",
                " px-4 py-2 md:px-5 md:py-3",
                "text-sm text-foreground",
                "transition-all duration-200 hover:inset-shadow-accent-soft/70 "
              )}
            >
              <Icon className=" h-6 w-6 md:h-6 md:w-6 opacity-80" />
              <span className={cn(textStyles.body, "whitespace-nowrap")}>
                {skill.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
