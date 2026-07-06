import React, { Children } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { posterImg } from "@/assets/images";

export const SkillsSvgContainer = () => {
  return (
    <section className="relative w-full h-full bg-linear-to-br from-accent via-background/50 overflow-hidden">
      <SkillsSvg />
      <div
        className="h-28 w-28 md:h-38 md:w-38  absolute mx-auto inset-x-0 bottom-42  rounded-md z-21
        flex items-center justify-center  border transition  border-foreground text-black inset-shadow-none bg-white hover:bg-foreground hover:text-accent hover:transition-all hover:ease-in hover:duration-150 hover:border-none hover:inset-shadow-xs hover:shadow-2xl hover:shadow-background-elevated hover:inset-shadow-foreground-muted
        p-1
        overflow-hidden
        "
      >
        <div className="inset-0 bg-accent h-full w-full rounded-sm overflow-hidden relative">
          <Image src={posterImg} alt="poster-img"  height={100} width={100} className= "absolute inset-0 h-full w-full object-cover "/>
           </div>
      </div>
    </section>
  );
};

export const SkillsSvg = () => {
  const PATHS = [
    {
      d: "M 295 81 L 295 0 L 0 0",
      transform: "translate(0 221)",
      dim: 20,
    },
    {
      d: "M 0 404.609 L 0 0",
      transform: "translate(370 0)",
    },
    {
      d: "M 155 206 L 155 84.826 C 114.632 53.417 93.572 34.834 56.317 0 L 0 0",
      transform: "translate(181.152 110)",
      dim: 20,
    },
    {
      d: "M 0 205 L 0 83.557 L 98.814 0 L 164 0",
      transform: "translate(400 110)",
      dim: 20,
    },
    {
      d: "M 0 79 L 0 0 L 296 0",
      transform: "translate(438 221)",
      dim: 20,
    },
  ] as const;

  const MOBILE_PATHS = [
    {
      d: "M 295 181 L 295 0 L 0 0",
      transform: "translate(0 221)",
      dim: 20,
    },
    {
      d: "M 0 504.609 L 0 0",
      transform: "translate(370 0)",
    },
    {
      d: "M 155 306 L 155 84.826 C 114.632 53.417 93.572 34.834 56.317 0 L 0 0",
      transform: "translate(181.152 110)",
      dim: 20,
    },
    {
      d: "M 0 305 L 0 83.557 L 98.814 0 L 164 0",
      transform: "translate(400 110)",
      dim: 20,
    },
    {
      d: "M 0 180 L 0 0 L 296 0",
      transform: "translate(438 221)",
      dim: 20,
    },
  ] as const;

  const SKILLS = [
    { label: "React js", className: "top-0 inset-x-0 mx-auto" },
    {
      label: "Next js",
      className: "top-10 md:top-22 left-6  md:-left-4  ",
    },
    {
      label: "Node js",
      className: " top-10 md:top-22 right-6 md:-right-4  sm:-right-2",
    },
    {
      label: "MongoDB",
      className: " top-30 md:top-50 right-0 md:-right-4  sm:-right-2",
    },
    {
      label: "Postgres",
      className: "top-30 md:top-50 left-0 md:-left-20  sm:-left-12",
    },
  ];

  return (
    <div className="absolute w-full mx-auto inset-x-0  top-28 md:top-24 z-20 pointer-events-none  max-w-184 ">
      {SKILLS.map((skill, idx) => (
        <Tag key={idx} className={skill.className}>
          {skill.label}
        </Tag>
      ))}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 734 405"
        className="w-full h-auto hidden md:block"
        fill="none"
      >
        {PATHS.map((path, idx) => (
          <AnimateLine key={idx} {...path} />
        ))}
      </svg>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 734 805"
        className="w-full h-auto block md:hidden"
        fill="none"
      >
        {MOBILE_PATHS.map((path, idx) => (
          <AnimateLine key={idx} {...path} />
        ))}
      </svg>
    </div>
  );
};

export const Tag = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "absolute  px-4 py-2 border border-white bg-linear-tr from-white/80 text-center to-transparent backdrop-blur-sm text-neutral-100  uppercase font-sans font-light w-fit md:w-72 ",
        className,
      )}
    >
      {children}
    </div>
  );
};

const SEGMENT = 0.1;
const GAP = 1 - SEGMENT;
export const AnimateLine = ({
  d,
  transform,
}: {
  d: string;
  transform: string;
}) => {
  return (
    <g transform={transform} strokeLinecap="round" strokeLinejoin="round">
      <path
        d={d}
        stroke="color-mix(in srgb, var(--color-white) 30%, transparent"
        strokeWidth={3}
      />
      <motion.path
        d={d}
        strokeWidth={1.5}
        stroke="var(--color-white)"
        strokeDasharray={`${SEGMENT} ${GAP}`}
        pathLength={1}
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: SEGMENT + GAP }}
        transition={{
          duration: 2.5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.5,
        }}
      />
    </g>
  );
};
