import { cn } from "@/lib/utils";

export function SplitHoverText({
    text,
    className,
    colors,
    active = false,
  }: {
    text: string;
    className?: string;
    colors?: string[];
    active?: boolean;
  }) {
    return (
      <span className={cn("group inline-flex flex-wrap", className)}>
        {text.split("").map((char, i) => {
          const color = colors?.[i % colors.length];
  
          return (
            <span
              key={i}
              className={cn(
                "relative inline-block transition-all duration-300 ease-out",
                active && "text-transparent"
              )}
              style={{
                transitionDelay: `${i * 25}ms`,
              }}
            >
              <span
                className={cn(
                  "inline-block transition-colors duration-300 ease-out",
                  !active && "group-hover:text-transparent"
                )}
                style={{
                  backgroundImage: `linear-gradient(90deg, ${color}, ${color})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: active ? "transparent" : "currentColor",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          );
        })}
      </span>
    );
  }
  