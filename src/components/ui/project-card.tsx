"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion/varients";

type ProjectCardProps = {
  title: string;
  image?: string;
  href: string;
  active: boolean;
  tech: string[];
};

export function ProjectCard({ title, image, tech, active, href }: ProjectCardProps) {

  const CardContent = (
    <>

      <div
        className={cn(
          "relative aspect-4/3 w-full",
          "border border-border bg-black/10 backdrop-blur-sm rounded-3xl",
          "inset-shadow-xs inset-shadow-border-soft shadow-2xs"
        )}
      >

        <span
          className={cn(
            "absolute right-4 top-4 z-20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide",
            active == true
              ? "bg-accent/80 text-white"
              : "bg-border/70 text-foreground-muted"
          )}
        >
          {active ? "Live" : "Not Live"}
        </span>

        <div className="p-2 h-full w-full rounded-[16px] overflow-hidden">
          <div className="bg-border relative h-full w-full rounded-[16px] overflow-hidden ">
            <Image
              src={image || "/fallback.png"}
              alt={title}
              fill
              className={cn(
                "object-cover h-full w-full transition-transform duration-500 rounded-[16px]",
                "group-hover:scale-105"
              )}
              style={{ borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>


      <div className="flex items-start justify-between gap-4 p-5">

        <h3 className="font-sans whitespace-nowrap text-md leading-tight text-white ">
          {title}
        </h3>


        <div className="flex flex-wrap justify-end gap-2 max-w-[60%]">
          {tech.map((item) => (
            <span
              key={item}
              className={cn(
                "bg-border/10",
                "rounded-full border border-white/15",
                "backdrop-blur-sm inset-shadow-border inset-shadow-xs",
                "px-3 py-1 text-[10px] text-foreground",
                "truncate whitespace-nowrap max-w-27.5"
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <motion.article
      variants={fadeUp}
      className={cn("group relative", "transition-colors hover:border-white/20")}
    >
      {active ? (
        <Link href={href} target="_blank" className="block ">
          {CardContent}
        </Link>
      ) : (
        <div className="block pointer-events-none opacity-80 ">{CardContent}</div>
      )}
    </motion.article>
  );
}
