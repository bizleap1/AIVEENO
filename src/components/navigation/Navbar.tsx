"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { navigationData } from "@/data/navigation";
import { ChevronDown, ArrowRight, Menu, X, ArrowUpRight, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenDiscoveryModal?: (context?: string) => void;
  solidBackground?: boolean;
  transparentOnHero?: boolean;
}

export default function Navbar({
  onOpenDiscoveryModal,
  solidBackground,
  transparentOnHero,
}: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState<"ai" | "cloud" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"ai" | "cloud" | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menu: "ai" | "cloud") => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleDiscoveryClick = (context: string = "Navbar: Book a Discovery Call") => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal(context);
    } else {
      window.location.href = "/contact";
    }
  };

  // Active route helpers
  const isAiActive =
    pathname.startsWith("/ai-") ||
    pathname.startsWith("/framework");

  const isCloudActive =
    pathname.startsWith("/cloud-") ||
    pathname.startsWith("/devops-") ||
    pathname.startsWith("/data-engineering") ||
    pathname.startsWith("/software-development");

  const isAboutActive = pathname === "/about";
  const isContactActive = pathname === "/contact";
  
  const isDarkHeroPage = transparentOnHero || pathname === "/ai-business-transformation";
  // The dark hero section is approx ~640px tall. While inside the hero, the navbar is transparent over dark.
  const isOverDarkHero = isDarkHeroPage && scrollY < 520;

  return (
    <>
      <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1.5",
        isOverDarkHero
          ? "bg-transparent border-b border-transparent shadow-none"
          : solidBackground || scrolled
          ? "bg-[#F5F7F6]/95 backdrop-blur-[16px] border-b border-[#D9DDDA]/50 shadow-[0_1px_2px_rgba(13,17,23,0.015)]"
          : "bg-[#F5F7F6]/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b border-[#0D1B2A]/[0.06] lg:border-transparent"
      )}
    >
      <div
        className={cn(
          "flex items-center transition-all duration-300 ease-out",
          scrolled ? "h-[58px]" : "h-[62px] lg:h-[66px]"
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* LEFT SECTION: AI Transformation | Cloud & Technology (Aligned towards Logo) */}
            <nav className="hidden lg:flex items-center justify-end gap-7 xl:gap-8 flex-1 pr-7 xl:pr-9">
              
              {/* 1. AI Transformation (Dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("ai")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setActiveMenu(activeMenu === "ai" ? null : "ai")}
                  className={cn(
                    "group flex items-center gap-1.5 py-1 text-[13.5px] lg:text-[14px] font-sans tracking-[-0.01em] transition-colors cursor-pointer focus:outline-none",
                    isOverDarkHero
                      ? (isAiActive || activeMenu === "ai"
                          ? "text-white font-semibold"
                          : "text-[#F0F3F1] hover:text-white font-medium")
                      : (isAiActive || activeMenu === "ai"
                          ? "text-[#0D1B2A] font-medium"
                          : "text-[#3B4A5A] hover:text-[#0D1B2A] font-normal")
                  )}
                  aria-expanded={activeMenu === "ai"}
                >
                  <span className="relative">
                    AI Transformation
                    {isAiActive && (
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 right-0 h-[1.5px]",
                          isOverDarkHero ? "bg-[#C9A45C]" : "bg-[#C9A35B]/85"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-2.5 h-2.5 transition-transform duration-200 stroke-[1.75]",
                      isOverDarkHero
                        ? "text-[#F0F3F1] group-hover:text-white"
                        : "text-[#3B4A5A]/60 group-hover:text-[#0D1B2A]",
                      activeMenu === "ai" ? "rotate-180" : ""
                    )}
                  />
                </button>

                {/* AI Dropdown Menu */}
                {activeMenu === "ai" && (
                  <div
                    className="absolute top-full left-0 mt-2.5 w-[520px] rounded-[14px] border border-[#E8EDEB] bg-[#F5F7F6]/98 backdrop-blur-xl p-5 shadow-[0_16px_36px_-6px_rgba(13,17,23,0.08)] animate-in fade-in zoom-in-95 duration-150 z-50"
                    onMouseEnter={() => handleMouseEnter("ai")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E8EDEB]">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A]" />
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F7479] font-medium">
                          AI Transformation Architecture
                        </span>
                      </div>
                      <Link
                        href="/ai-business-transformation"
                        onClick={() => setActiveMenu(null)}
                        className="text-[12px] font-mono text-[#0D1117] hover:text-[#D4A64A] flex items-center gap-1 transition-colors"
                      >
                        <span>Overview</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {navigationData.aiTransformation.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group p-3 rounded-[10px] hover:bg-[#EAEFED]/70 transition-all border border-transparent hover:border-[#E8EDEB]/60 flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-[13.5px] font-medium text-[#0D1117] group-hover:text-[#0D1117] flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D4A64A]" />
                            </div>
                            <p className="text-[12px] text-[#6F7479] mt-1 leading-snug line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Featured Strip in Menu */}
                    <div className="mt-3 pt-3 border-t border-[#E8EDEB] flex items-center justify-between bg-[#EAEFED]/40 rounded-[10px] p-2.5 px-3.5">
                      <div className="text-[12px] text-[#6F7479]">
                        <span className="font-medium text-[#0D1117]">1-Week Engagement:</span> AI Transformation Assessment
                      </div>
                      <Link
                        href="/ai-transformation-assessment"
                        onClick={() => setActiveMenu(null)}
                        className="text-[12px] font-mono font-medium text-[#0D1117] hover:text-[#D4A64A] flex items-center transition-colors"
                      >
                        <span>Explore</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Cloud & Technology (Mega Dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("cloud")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setActiveMenu(activeMenu === "cloud" ? null : "cloud")}
                  className={cn(
                    "group flex items-center gap-1.5 py-1 text-[13.5px] lg:text-[14px] font-sans tracking-[-0.01em] transition-colors cursor-pointer focus:outline-none",
                    isOverDarkHero
                      ? (isCloudActive || activeMenu === "cloud"
                          ? "text-white font-semibold"
                          : "text-[#F0F3F1] hover:text-white font-medium")
                      : (isCloudActive || activeMenu === "cloud"
                          ? "text-[#0D1B2A] font-medium"
                          : "text-[#3B4A5A] hover:text-[#0D1B2A] font-normal")
                  )}
                  aria-expanded={activeMenu === "cloud"}
                >
                  <span className="relative">
                    Cloud & Technology
                    {isCloudActive && (
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 right-0 h-[1.5px]",
                          isOverDarkHero ? "bg-[#C9A45C]" : "bg-[#C9A35B]/85"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-2.5 h-2.5 transition-transform duration-200 stroke-[1.75]",
                      isOverDarkHero
                        ? "text-[#F0F3F1] group-hover:text-white"
                        : "text-[#3B4A5A]/60 group-hover:text-[#0D1B2A]",
                      activeMenu === "cloud" ? "rotate-180" : ""
                    )}
                  />
                </button>

                {/* Cloud & Technology Dropdown Menu */}
                {activeMenu === "cloud" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[660px] max-w-[calc(100vw-32px)] rounded-[14px] border border-[#E8EDEB] bg-[#F5F7F6]/98 backdrop-blur-xl p-5 shadow-[0_16px_36px_-6px_rgba(13,17,23,0.08)] animate-in fade-in zoom-in-95 duration-150 z-50"
                    onMouseEnter={() => handleMouseEnter("cloud")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E8EDEB]">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A]" />
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F7479] font-medium">
                          Cloud & Engineering Capabilities
                        </span>
                      </div>
                      <Link
                        href="/cloud-technology"
                        onClick={() => setActiveMenu(null)}
                        className="text-[12px] font-mono text-[#0D1117] hover:text-[#D4A64A] flex items-center gap-1 transition-colors"
                      >
                        <span>All Capabilities</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {navigationData.cloudTechnology.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group p-2.5 rounded-[10px] hover:bg-[#EAEFED]/70 transition-all border border-transparent hover:border-[#E8EDEB]/60 flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-[13px] font-medium text-[#0D1117] flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D4A64A]" />
                            </div>
                            <p className="text-[11.5px] text-[#6F7479] mt-0.5 leading-snug line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* LOGO: Left on mobile, Center on desktop */}
            <div className="flex items-center justify-start lg:justify-center shrink-0">
              <Logo
                variant={isOverDarkHero ? "light" : "dark"}
                className={isOverDarkHero ? "drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]" : ""}
              />
            </div>

            {/* RIGHT SECTION: About | Contact (Aligned towards Logo) + Book a Discovery Call (pinned right) */}
            <div className="hidden lg:flex items-center justify-between flex-1 pl-7 xl:pl-9">
              <nav className="flex items-center gap-7 xl:gap-8">
                {/* About */}
                <div className="relative flex flex-col items-center">
                  <Link
                    href="/about"
                    className={cn(
                      "relative text-[13.5px] lg:text-[14px] font-sans tracking-[-0.01em] transition-colors py-1",
                      isOverDarkHero
                        ? (isAboutActive
                            ? "text-white font-semibold"
                            : "text-[#F0F3F1] hover:text-white font-medium")
                        : (isAboutActive
                            ? "text-[#0D1B2A] font-medium"
                            : "text-[#3B4A5A] hover:text-[#0D1B2A] font-normal")
                    )}
                  >
                    <span>About</span>
                    {isAboutActive && (
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 right-0 h-[1.5px]",
                          isOverDarkHero ? "bg-[#C9A45C]" : "bg-[#D4A64A]"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </div>

                {/* Contact */}
                <div className="relative flex flex-col items-center">
                  <Link
                    href="/contact"
                    className={cn(
                      "relative text-[13.5px] lg:text-[14px] font-sans tracking-[-0.01em] transition-colors py-1",
                      isOverDarkHero
                        ? (isContactActive
                            ? "text-white font-semibold"
                            : "text-[#F0F3F1] hover:text-white font-medium")
                        : (isContactActive
                            ? "text-[#0D1B2A] font-medium"
                            : "text-[#3B4A5A] hover:text-[#0D1B2A] font-normal")
                    )}
                  >
                    <span>Contact</span>
                    {isContactActive && (
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 right-0 h-[1.5px]",
                          isOverDarkHero ? "bg-[#C9A45C]" : "bg-[#D4A64A]"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </div>
              </nav>

              {/* Primary CTA: Book a Discovery Call */}
              <button
                type="button"
                onClick={() => handleDiscoveryClick("Navbar: Book a Discovery Call")}
                className={cn(
                  "inline-flex items-center justify-center h-[44px] px-4 rounded-[8px] text-[13.5px] font-medium transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 shrink-0 shadow-xs",
                  isOverDarkHero
                    ? "bg-[#222824] text-white border border-white/[0.32] hover:border-[#C9A45C] hover:bg-[#2B332E] shadow-[0_2px_8px_rgba(0,0,0,0.4)] focus-visible:outline-[#C9A45C]"
                    : "bg-[#0D1117] text-[#F5F7F6] border border-transparent hover:border-[#D4A64A]/70 hover:bg-[#151B22] hover:-translate-y-px focus-visible:outline-[#D4A64A]"
                )}
              >
                <span>Book a Discovery Call</span>
              </button>
            </div>

            {/* Tablet / Mobile Controls: Clean 24px Hamburger Icon on Far Right */}
            <div className="flex lg:hidden items-center ml-auto">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-[6px] transition-colors focus:outline-none cursor-pointer",
                  isOverDarkHero
                    ? "text-white hover:bg-white/[0.12]"
                    : "text-[#0D1B2A] hover:bg-[#EAEFED]"
                )}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6 stroke-[1.75]" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>

    {/* ========================================================================= */}
    {/* MOBILE FULL-SCREEN NAVIGATION PANEL (Rendered at Body Level via Portal)   */}
    {/* ========================================================================= */}
    {mounted && mobileMenuOpen && createPortal(
      <div
        className="lg:hidden fixed inset-0 z-[99999] bg-[#F5F7F6] flex flex-col h-[100dvh] max-h-[100dvh] w-screen overflow-hidden animate-in fade-in duration-200"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100dvh",
          zIndex: 99999,
          backgroundColor: "#F5F7F6",
        }}
      >
        {/* Top Bar: Aiveeno Logo Left + Close '✕' Right (Height: 64–68px, Padding: 20–24px) */}
        <div className="flex items-center justify-between h-[64px] sm:h-[68px] px-5 sm:px-6 border-b border-[#0D1B2A]/[0.08] shrink-0 bg-[#F5F7F6]">
          <Logo variant="dark" onClick={() => setMobileMenuOpen(false)} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-[#0D1B2A] hover:bg-[#EAEFED] rounded-[6px] transition-colors cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6 stroke-[1.75]" />
          </button>
        </div>

        {/* Scrollable Menu Items Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-6 py-5 flex flex-col justify-between">
          <nav className="flex flex-col divide-y divide-[#0D1B2A]/[0.06]">
            
            {/* 1. AI Transformation (Accordion) */}
            <div className="py-1.5">
              <button
                type="button"
                onClick={() => setMobileExpanded((prev) => (prev === "ai" ? null : "ai"))}
                className="w-full min-h-[52px] py-3.5 flex items-center justify-between text-[20px] sm:text-[22px] font-sans font-medium text-[#0D1B2A] tracking-[-0.015em] cursor-pointer"
                aria-expanded={mobileExpanded === "ai"}
              >
                <span className={cn(isAiActive ? "text-[#0D1B2A]" : "")}>
                  AI Transformation
                </span>
                {mobileExpanded === "ai" ? (
                  <Minus className="w-5 h-5 text-[#D4A64A] transition-transform duration-200" />
                ) : (
                  <Plus className="w-5 h-5 text-[#3B4A5A] transition-transform duration-200" />
                )}
              </button>

              {mobileExpanded === "ai" && (
                <div className="pl-4 sm:pl-5 pr-1 pt-1 pb-3 flex flex-col space-y-0.5 animate-in fade-in duration-250">
                  <Link
                    href="/ai-business-transformation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/ai-business-transformation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    AI Business Transformation
                  </Link>
                  <Link
                    href="/framework"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    Our Framework
                  </Link>
                  <Link
                    href="/ai-transformation-assessment"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    AI Transformation Assessment
                  </Link>
                  <Link
                    href="/ai-solutions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    AI Solutions
                  </Link>
                </div>
              )}
            </div>

            {/* 2. Cloud & Technology (Accordion) */}
            <div className="py-1.5">
              <button
                type="button"
                onClick={() => setMobileExpanded((prev) => (prev === "cloud" ? null : "cloud"))}
                className="w-full min-h-[52px] py-3.5 flex items-center justify-between text-[20px] sm:text-[22px] font-sans font-medium text-[#0D1B2A] tracking-[-0.015em] cursor-pointer"
                aria-expanded={mobileExpanded === "cloud"}
              >
                <span className={cn(isCloudActive ? "text-[#0D1B2A]" : "")}>
                  Cloud & Technology
                </span>
                {mobileExpanded === "cloud" ? (
                  <Minus className="w-5 h-5 text-[#D4A64A] transition-transform duration-200" />
                ) : (
                  <Plus className="w-5 h-5 text-[#3B4A5A] transition-transform duration-200" />
                )}
              </button>

              {mobileExpanded === "cloud" && (
                <div className="pl-4 sm:pl-5 pr-1 pt-1 pb-3 flex flex-col space-y-0.5 animate-in fade-in duration-250">
                  <Link
                    href="/cloud-technology"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/cloud-consulting"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    Cloud Consulting
                  </Link>
                  <Link
                    href="/cloud-migration-modernization"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    Migration & Modernization
                  </Link>
                  <Link
                    href="/cloud-managed-services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    Managed Services
                  </Link>
                  <Link
                    href="/cloud-security-governance"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    Security & Governance
                  </Link>
                  <Link
                    href="/devops-automation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    DevOps & Automation
                  </Link>
                  <Link
                    href="/data-engineering"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    Data Engineering
                  </Link>
                  <Link
                    href="/software-development"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans text-[#3B4A5A] hover:text-[#0D1B2A] transition-colors"
                  >
                    Software Development
                  </Link>
                </div>
              )}
            </div>

            {/* 3. About */}
            <div className="py-1.5">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[52px] flex items-center text-[20px] sm:text-[22px] font-sans font-medium text-[#0D1B2A] tracking-[-0.015em] transition-colors hover:text-[#D4A64A]"
              >
                About
              </Link>
            </div>

            {/* 4. Contact */}
            <div className="py-1.5">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[52px] flex items-center text-[20px] sm:text-[22px] font-sans font-medium text-[#0D1B2A] tracking-[-0.015em] transition-colors hover:text-[#D4A64A]"
              >
                Contact
              </Link>
            </div>

          </nav>

          {/* Bottom CTA Section */}
          <div className="pt-8 pb-6 mt-auto shrink-0">
            <div className="h-px bg-[#0D1B2A]/[0.08] mb-6" />
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleDiscoveryClick("Mobile Menu: Book a Discovery Call");
              }}
              className="w-full min-h-[48px] h-12 sm:h-[50px] flex items-center justify-center rounded-[8px] bg-[#0D1117] text-[#F5F7F6] text-[15px] font-sans font-medium tracking-[0.01em] hover:bg-[#1C2C3E] active:scale-[0.99] transition-colors duration-200 cursor-pointer shadow-xs"
            >
              <span>Book a Discovery Call</span>
            </button>
          </div>
        </div>
      </div>,
      document.body
    )}
  </>
);
}
