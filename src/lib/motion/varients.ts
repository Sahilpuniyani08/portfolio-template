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
  exit: {
    x: "100%",
    transition: {
      duration: 0.55,
      ease: [0.76, 0, 0.24, 1], // ✔ premium cubic-bezier
    },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 20,
      mass: 0.9,
    },
  },
};

export const marqueeVariants = {
  left: {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 30,
      },
    },
  },
  right: {
    animate: {
      x: ["-50%", "0%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 30,
      },
    },
  },
} satisfies Record<string, Variants>;

export const moveVarients = {
  leftToRight: {
    animate: {
      x: [0, 100, 0],
      y: [0, 100, 0],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  rightToLeft: {
    animate: {
      x: [0, -100, 0],
      y: [0, -100, 0],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
} satisfies Record<string, Variants>;

export const scrollRotate: Variants = {
  hidden: {
    rotate: 0,
    opacity: 0,
  },
  visible: {
    rotate: 180,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeUpSoft: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    },
  },
};

export const fadeUpStaggerChar: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 22,
      mass: 0.6,
      delay: i * 0.025,
    },
  }),
};

export const sectionReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

export const accentEmphasis: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 22,
      mass: 0.6,
      delay: 0.2,
    },
  },
};

export const topGlowReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    y: -100,
  },
  visible: {
    opacity: 0.5,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const floatYLoop: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};
