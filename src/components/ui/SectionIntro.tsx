import React from "react";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  tag?: "h1" | "h2" | "h3";
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
  tag = "h2",
}: SectionIntroProps) {
  const HeadingTag = tag;

  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.15em] uppercase font-medium",
            theme === "dark" ? "text-[#A1A1AA]" : "text-[#71717A]",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-1 w-1 rounded-none bg-current opacity-60" />
          <span>{eyebrow}</span>
        </div>
      )}

      <HeadingTag
        className={cn(
          "font-sans tracking-[-0.03em] leading-[1.08]",
          tag === "h1"
            ? "text-4xl sm:text-6xl lg:text-[76px] font-medium"
            : "text-3xl sm:text-4xl lg:text-[46px] font-medium",
          theme === "dark" ? "text-[#FFFFFF]" : "text-[#080808]"
        )}
      >
        {title}
      </HeadingTag>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-normal",
            theme === "dark" ? "text-[#A1A1AA]" : "text-[#71717A]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

