import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?:
    | "primary" // Dark section primary: White button / Black text
    | "primaryLight" // Light section primary: Black button / White text
    | "secondary" // Light section secondary
    | "secondaryDark" // Dark section secondary
    | "outline" // Clean monochrome outline
    | "textLink"; // Subtle text link
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: "arrow" | "upRight" | "none";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function CTAButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  icon = "upRight",
  type = "button",
  disabled = false,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium text-[13.5px] sm:text-[14px] transition-all rounded-[4px] tracking-[-0.01em] select-none focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] focus:ring-offset-2 focus:ring-offset-[#080808]";

  const variants = {
    // Dark section: White button, Black text
    primary:
      "bg-[#FFFFFF] text-[#080808] font-medium hover:bg-[#F5F5F2] active:scale-[0.98] px-5 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.3)]",
    // Light section: Black button, White text
    primaryLight:
      "bg-[#080808] text-[#FFFFFF] font-medium hover:bg-[#111111] active:scale-[0.98] px-5 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.1)]",
    // Light section secondary
    secondary:
      "bg-transparent border border-[#262626]/30 text-[#080808] hover:border-[#080808] hover:bg-[#FFFFFF] px-5 py-3",
    // Dark section secondary
    secondaryDark:
      "bg-transparent border border-[#262626] text-[#FFFFFF] hover:border-[#FFFFFF] hover:bg-[#111111] px-5 py-3",
    // Outline
    outline:
      "bg-transparent border border-[#262626] text-[#FFFFFF] hover:border-[#FFFFFF] px-5 py-3",
    // Text link
    textLink:
      "bg-transparent text-[#FFFFFF] hover:text-[#A1A1AA] p-0 font-medium inline-flex items-center gap-1.5 underline-offset-4 hover:underline",
  };

  const renderIcon = () => {
    return null;
  };

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], "group", className)}
      >
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], "group", disabled && "opacity-60 cursor-not-allowed", className)}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}

