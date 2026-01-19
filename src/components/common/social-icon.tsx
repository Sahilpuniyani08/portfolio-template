"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeUpSoft } from "@/lib/motion/varients";
import type { LucideIcon } from "lucide-react";

type SocialIconProps = {
  href: string;
  icon: LucideIcon;
  className?: string;
};

export function SocialIcon({ href, icon: Icon, className }: SocialIconProps) {
  return (
    <motion.div
      variants={fadeUpSoft}
      whileHover={{ scale: 1.15, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        target="_blank"
        className={cn(
          "group flex items-center justify-center",
          "h-10 w-10 rounded-full",
          "bg-border/10 backdrop-blur-sm",
          "inset-shadow-border inset-shadow-xs",
          "text-foreground-muted",
          "hover:text-foreground hover:shadow-xs hover:inset-shadow-accent/80",
          className
        )}
      >
        <Icon size={18} />
      </Link>
    </motion.div>
  );
}
