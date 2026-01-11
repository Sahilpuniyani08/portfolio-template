"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { menuContainer, menuItem, menuOverlay } from "@/lib/motion/varients";

const LINKS = ["Home", "About", "Projects", "Experience", "Contact"];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-3xl will-change-transform"
          variants={menuOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.nav
            className="flex h-full flex-col pt-28"
            variants={menuContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {LINKS.map((link) => (
              <motion.a
                key={link}
                href="#"
                onClick={onClose}
                variants={menuItem}
                className={cn(
                  "group flex flex-1 items-center justify-between  px-8",
                  "transition-all duration-300 relative overflow-hidden"
                )}
              >
                <div className="h-full w-32 my-auto rounded-full absolute -right-10 top-0 bottom-0 bg-accent/90 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out " />
                <div className="h-full w-12 my-auto rounded-full absolute -left-10 top-0 bottom-0 bg-accent/90 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out " />
                {/* Text */}
                <span className="text-4xl group-hover:text-accent transition-all duration-300 group-hover:translate-x-3">
                  {link}
                </span>

                {/* Arrow */}
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center",
                    "rounded-full border border-foreground",
                    "transition-all duration-300",
                    "group-hover:rotate-[-45deg] group-hover:-translate-x-3"
                  )}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
