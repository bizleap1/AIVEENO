"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showSubtitle?: boolean;
  onClick?: () => void;
}

export default function Logo({
  variant = "dark",
  className = "",
  showSubtitle = false,
  onClick,
}: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-90 select-none ${className}`}
      aria-label="Aiveeno Home"
    >
      <div className="relative flex items-center">
        <Image
          src="/logo.webp"
          alt="Aiveeno"
          width={130}
          height={34}
          priority
          className={`h-[26px] sm:h-[28px] w-auto object-contain transition-all ${
            variant === "dark" ? "brightness-0" : "brightness-0 invert"
          }`}
        />
      </div>
      {showSubtitle && (
        <span
          className="text-[10px] tracking-[0.2em] font-medium uppercase border-l border-[#D9DDDA] pl-2.5 py-0.5 text-[#6F7479]"
        >
          Consulting
        </span>
      )}
    </Link>
  );
}
