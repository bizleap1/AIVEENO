"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { navigationData } from "@/data/navigation";
import { ChevronDown, ArrowRight, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function Navbar({ onOpenDiscoveryModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"ai" | "cloud" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"ai" | "cloud" | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out",
        scrolled
          ? "bg-[#F5F7F6]/92 backdrop-blur-[16px] border-b border-[#D9DDDA]/30 shadow-[0_1px_2px_rgba(13,17,23,0.015)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div
        className={cn(
          "flex items-center transition-all duration-300 ease-out",
          scrolled ? "h-[64px]" : "h-[64px] lg:h-[74px]"
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between">
            {/* LEFT SECTION: AI Transformation | Cloud & Technology (Aligned towards Logo) */}
            <nav className="hidden lg:flex items-center justify-end gap-6 xl:gap-8 flex-1 pr-6 xl:pr-8">
              
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
                    isAiActive || activeMenu === "ai"
                      ? "text-[#0D1B2A] font-medium"
                      : "text-[#6F7479] hover:text-[#0D1B2A] font-normal"
                  )}
                  aria-expanded={activeMenu === "ai"}
                >
                  <span className="relative">
                    AI Transformation
                    {isAiActive && (
                      <span
                        className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-[#D4A64A]"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 transition-transform duration-200 text-[#6F7479]/80 group-hover:text-[#0D1B2A] stroke-[1.75]",
                      activeMenu === "ai" ? "rotate-180 text-[#0D1B2A]" : ""
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
                    isCloudActive || activeMenu === "cloud"
                      ? "text-[#0D1B2A] font-medium"
                      : "text-[#6F7479] hover:text-[#0D1B2A] font-normal"
                  )}
                  aria-expanded={activeMenu === "cloud"}
                >
                  <span className="relative">
                    Cloud & Technology
                    {isCloudActive && (
                      <span
                        className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-[#D4A64A]"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 transition-transform duration-200 text-[#6F7479]/80 group-hover:text-[#0D1B2A] stroke-[1.75]",
                      activeMenu === "cloud" ? "rotate-180 text-[#0D1B2A]" : ""
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
              <Logo variant="dark" />
            </div>

            {/* RIGHT SECTION: About | Contact (Aligned towards Logo) + Book a Discovery Call (pinned right) */}
            <div className="hidden lg:flex items-center justify-between flex-1 pl-6 xl:pl-8">
              <nav className="flex items-center gap-6 xl:gap-8">
                {/* About */}
                <div className="relative flex flex-col items-center">
                  <Link
                    href="/about"
                    className={cn(
                      "relative text-[13.5px] lg:text-[14px] font-sans tracking-[-0.01em] transition-colors py-1",
                      isAboutActive
                        ? "text-[#0D1B2A] font-medium"
                        : "text-[#6F7479] hover:text-[#0D1B2A] font-normal"
                    )}
                  >
                    <span>About</span>
                    {isAboutActive && (
                      <span
                        className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-[#D4A64A]"
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
                      isContactActive
                        ? "text-[#0D1B2A] font-medium"
                        : "text-[#6F7479] hover:text-[#0D1B2A] font-normal"
                    )}
                  >
                    <span>Contact</span>
                    {isContactActive && (
                      <span
                        className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-[#D4A64A]"
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
                className="inline-flex items-center justify-center h-[38px] px-[18px] rounded-[8px] bg-[#0D1117] text-[#F5F7F6] text-[13.5px] font-medium border border-transparent hover:border-[#D4A64A]/70 hover:bg-[#151B22] hover:-translate-y-px transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A64A] shrink-0"
              >
                <span>Book a Discovery Call</span>
              </button>
            </div>

            {/* Tablet / Mobile Controls: Compact Discovery Call + Hamburger */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-2.5 ml-auto">
              <button
                type="button"
                onClick={() => handleDiscoveryClick("Mobile Header")}
                className="inline-flex items-center justify-center h-[34px] px-3 sm:px-3.5 rounded-[8px] bg-[#0D1117] text-[#F5F7F6] text-[12px] font-medium border border-transparent hover:border-[#D4A64A]/70 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Discovery Call</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-[8px] text-[#0D1117] hover:bg-[#EAEFED] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile & Tablet Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#F5F7F6]/98 backdrop-blur-2xl border-t border-[#E8EDEB] px-6 py-6 flex flex-col justify-between z-50 animate-in fade-in duration-200 overflow-y-auto">
          <div className="space-y-3">
            
            {/* AI Transformation Section (Accordion) */}
            <div className="border-b border-[#E8EDEB] pb-3">
              <button
                type="button"
                onClick={() => setMobileExpanded(mobileExpanded === "ai" ? null : "ai")}
                className="w-full flex items-center justify-between py-2 text-[16px] font-sans font-medium text-[#0D1117]"
              >
                <span className="relative">
                  <span>AI Transformation</span>
                  {isAiActive && <span className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-[#D4A64A]" aria-hidden="true" />}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-[#6F7479] transition-transform duration-200",
                    mobileExpanded === "ai" ? "rotate-180" : ""
                  )}
                />
              </button>

              {mobileExpanded === "ai" && (
                <div className="pl-3 pr-1 pt-2 pb-1 space-y-2 animate-in fade-in duration-150">
                  {navigationData.aiTransformation.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 text-[14px] text-[#6F7479] hover:text-[#0D1B2A] transition-colors"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4A64A]" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cloud & Technology Section (Accordion) */}
            <div className="border-b border-[#E8EDEB] pb-3">
              <button
                type="button"
                onClick={() => setMobileExpanded(mobileExpanded === "cloud" ? null : "cloud")}
                className="w-full flex items-center justify-between py-2 text-[16px] font-sans font-medium text-[#0D1B2A]"
              >
                <span className="relative">
                  <span>Cloud & Technology</span>
                  {isCloudActive && <span className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-[#D4A64A]" aria-hidden="true" />}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-[#6F7479] transition-transform duration-200",
                    mobileExpanded === "cloud" ? "rotate-180" : ""
                  )}
                />
              </button>

              {mobileExpanded === "cloud" && (
                <div className="pl-3 pr-1 pt-2 pb-1 space-y-2 animate-in fade-in duration-150 max-h-[260px] overflow-y-auto">
                  {navigationData.cloudTechnology.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 text-[14px] text-[#6F7479] hover:text-[#0D1B2A] transition-colors"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4A64A]" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between py-3 text-[16px] font-sans border-b border-[#E8EDEB] transition-colors",
                isAboutActive ? "text-[#0D1B2A] font-medium" : "text-[#6F7479]"
              )}
            >
              <span className="relative">
                <span>About</span>
                {isAboutActive && <span className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-[#D4A64A]" aria-hidden="true" />}
              </span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between py-3 text-[16px] font-sans border-b border-[#E8EDEB] transition-colors",
                isContactActive ? "text-[#0D1B2A] font-medium" : "text-[#6F7479]"
              )}
            >
              <span className="relative">
                <span>Contact</span>
                {isContactActive && <span className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-[#D4A64A]" aria-hidden="true" />}
              </span>
            </Link>

          </div>

          {/* Bottom Action */}
          <div className="pt-6 pb-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleDiscoveryClick("Mobile Nav");
              }}
              className="w-full h-12 flex items-center justify-center bg-[#0D1117] text-[#F5F7F6] rounded-[10px] text-[15px] font-medium border border-transparent hover:border-[#D4A64A]/70 transition-all shadow-sm"
            >
              <span>Book a Discovery Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
