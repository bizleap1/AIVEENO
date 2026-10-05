import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "white" | "dark" | "charcoal" | "softBlue";
  id?: string;
}

export function Section({
  children,
  className,
  variant = "light",
  id,
  ...props
}: SectionProps) {
  const variantStyles = {
    light: "bg-[#F7F8FA] text-[#111827] border-b border-[#D9DEE7]",
    white: "bg-[#FFFFFF] text-[#111827] border-b border-[#D9DEE7]",
    dark: "bg-[#0B1020] text-[#FFFFFF] border-b border-[#1E293B]",
    charcoal: "bg-[#111827] text-[#FFFFFF] border-b border-[#1E293B]",
    softBlue: "bg-[#E9EEFF] text-[#111827] border-b border-[#D9DEE7]",
  };

  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 relative", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}
