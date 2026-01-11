import type { Variants } from "framer-motion";
import { exit } from "process";

export const menuOverlay: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: "0%",
    transition: {
      duration: 0.55,
      ease: [0.76, 0, 0.24, 1], // ✔ premium cubic-bezier
    },
  },
  exit:{
    x: "100%",
    transition: {
        duration: 0.55,
        ease: [0.76, 0, 0.24, 1], // ✔ premium cubic-bezier
      },
  }
};

export const menuContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

export const menuItem: Variants = {
  hidden: {
    opacity: 0,
    x: 12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1], // ✔ replaces "easeOut"
    },
  }
};
