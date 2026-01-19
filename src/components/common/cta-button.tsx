import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  label: string;
  className?: string;
  textSize?: string;
  textColor?: string;
  iconSize?: number;
};

export function CtaButton({
  href,
  label,
  className = "pl-1 py-1 pr-5",
  textSize = "text-sm md:text-base",
  textColor = "text-white",
  iconSize = 20,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center justify-start  gap-2 md:gap-3 font-medium transition-colors bg-background inset-shadow-sm inset-shadow-accent-soft rounded-full w-fit ",
        textSize,
        textColor,
        className
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center rounded-full border border-current bg-white text-background ",
          "h-9 w-9 ",
          "transition-transform duration-300 group-hover:-rotate-45"
        )}
      >
        <ArrowRight size={iconSize} />
      </span>

      <span
        className={cn(
          "transition-transform duration-300 font-extralight capitalize",
          "group-hover:translate-x-1"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
