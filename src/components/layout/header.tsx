"use client";

import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
import { cn } from "@/lib/utils";
import { textStyles } from "@/typography/text-styles";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-300",
          scrolled ? "bg-background/70 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-auto py-3 max-w-7xl items-center justify-between px-6">
          <span className={cn(textStyles.h3, "text-foreground relative")}>
            Sahil Puniyani
            <div className="absolute -right-4 top-0 flex h-3 w-3 items-center justify-center rounded-full  font-sans text-[10px] border border-white">
              s
            </div>
          </span>

          <button
            onClick={() => setOpen(!open)}
            className="relative h-6 w-8 "
            aria-label="Menu"
          >
            <span
              className={cn(
                "absolute left-0 h-0.5 w-full bg-foreground transition-all",
                open ? "top-1/2 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0  h-0.5 shrink-0 top-1/2  w-full bg-foreground transition-all",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 shrink-0 w-full bg-foreground transition-all",
                open ? "top-1/2 -rotate-45" : "bottom-0"
              )}
            />
          </button>
            <span className={cn(textStyles.small, "text-foreground relative hidden md:block")}>
              Say hi &#8722; {" "}
              <span className="font text-foreground/80 text-[13px]">punyanisahil0001@gmail.com</span>
            </span>
          
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
