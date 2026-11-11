"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { navigationData } from "@/data/navigation";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { trackDiscoveryEvent } from "@/lib/analytics";

const subscribeClientHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getClientHydrationServerSnapshot = () => false;

interface NavbarProps {
  onOpenDiscoveryModal?: (context?: string) => void;
  solidBackground?: boolean;
  transparentOnHero?: boolean;
}

export default function Navbar({
  solidBackground,
  transparentOnHero,
}: NavbarProps) {
  const mounted = useSyncExternalStore(
    subscribeClientHydration,
    getClientHydrationSnapshot,
    getClientHydrationServerSnapshot
  );
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState<"ai" | "cloud" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"ai" | "cloud" | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aiMenuRef = useRef<HTMLDivElement | null>(null);
  const cloudMenuRef = useRef<HTMLDivElement | null>(null);
  const aiChevronRef = useRef<HTMLButtonElement | null>(null);
  const cloudTriggerRef = useRef<HTMLButtonElement | null>(null);
  const suppressFocusOpenRef = useRef(false);
  const hoverOpenedRef = useRef<{ menu: "ai" | "cloud" | null; at: number }>({
    menu: null,
    at: 0,
  });
  const pathname = usePathname();

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
    const rafId = requestAnimationFrame(() => {
      setActiveMenu(null);
      setMobileMenuOpen(false);
      setMobileExpanded(null);
    });
    return () => cancelAnimationFrame(rafId);
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

  // Close open dropdown on Escape key or click outside
  useEffect(() => {
    if (!activeMenu) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const wasAiFocused = aiMenuRef.current?.contains(document.activeElement);
        const wasCloudFocused = cloudMenuRef.current?.contains(document.activeElement);
        setActiveMenu(null);
        if (wasAiFocused || wasCloudFocused) {
          suppressFocusOpenRef.current = true;
          requestAnimationFrame(() => {
            suppressFocusOpenRef.current = false;
          });
          if (wasAiFocused) {
            aiChevronRef.current?.focus();
          } else if (wasCloudFocused) {
            cloudTriggerRef.current?.focus();
          }
        }
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      const inAi = aiMenuRef.current?.contains(target);
      const inCloud = cloudMenuRef.current?.contains(target);
      if (!inAi && !inCloud) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [activeMenu]);

  const handleMouseEnter = (menu: "ai" | "cloud", fromHover: boolean = true) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    if (activeMenu !== menu && fromHover) {
      hoverOpenedRef.current = { menu, at: Date.now() };
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleBlurClose = (
    e: React.FocusEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement | null>,
    menu: "ai" | "cloud"
  ) => {
    const nextFocused = e.relatedTarget as Node | null;
    if (!nextFocused || !ref.current?.contains(nextFocused)) {
      if (activeMenu === menu) {
        setActiveMenu(null);
      }
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
          ? scrolled
            ? "bg-[#111312]/92 backdrop-blur-[14px] border-b border-white/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.28)]"
            : "bg-transparent border-b border-transparent shadow-none"
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
            <nav
              aria-label="Service offerings"
              className="hidden lg:flex items-center justify-end gap-7 xl:gap-8 flex-1 pr-7 xl:pr-9"
            >
              
              {/* 1. AI Transformation (Compact Enterprise Dropdown + Direct Parent Link) */}
              <div
                ref={aiMenuRef}
                className="relative flex items-center"
                onMouseEnter={() => handleMouseEnter("ai")}
                onMouseLeave={handleMouseLeave}
                onPointerDownCapture={() => {
                  suppressFocusOpenRef.current = true;
                  requestAnimationFrame(() => {
                    suppressFocusOpenRef.current = false;
                  });
                }}
                onFocusCapture={() => {
                  if (suppressFocusOpenRef.current) {
                    suppressFocusOpenRef.current = false;
                    return;
                  }
                  handleMouseEnter("ai", false);
                }}
                onBlurCapture={(e) => handleBlurClose(e, aiMenuRef, "ai")}
              >
                <div className="group flex items-center gap-0.5 py-1.5">
                  <Link
                    href="/ai-business-transformation"
                    onClick={() => setActiveMenu(null)}
                    className={cn(
                      "relative text-[13.5px] lg:text-[14px] font-sans tracking-[-0.01em] transition-colors focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4",
                      isOverDarkHero
                        ? (isAiActive || activeMenu === "ai"
                            ? "text-white font-semibold"
                            : "text-[#F0F3F1] hover:text-white font-medium")
                        : (isAiActive || activeMenu === "ai"
                            ? "text-[#0D1B2A] font-medium"
                            : "text-[#3B4A5A] hover:text-[#0D1B2A] font-normal")
                    )}
                  >
                    <span>AI Transformation</span>
                    {isAiActive && (
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 right-0 h-[1.5px]",
                          isOverDarkHero ? "bg-[#C9A45C]" : "bg-[#C9A35B]/85"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  <button
                    ref={aiChevronRef}
                    type="button"
                    onClick={() => {
                      if (activeMenu === "ai") {
                        // Avoid immediately closing on a fast pointer move+click that triggered hover just milliseconds prior
                        if (
                          hoverOpenedRef.current.menu === "ai" &&
                          Date.now() - hoverOpenedRef.current.at < 300
                        ) {
                          hoverOpenedRef.current = { menu: null, at: 0 };
                          return;
                        }
                        setActiveMenu(null);
                      } else {
                        hoverOpenedRef.current = { menu: null, at: 0 };
                        setActiveMenu("ai");
                      }
                    }}
                    aria-label="Toggle AI Transformation menu"
                    aria-expanded={activeMenu === "ai"}
                    aria-controls="ai-transformation-dropdown"
                    className={cn(
                      "inline-flex items-center justify-center p-1 -mr-1 rounded-[4px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]",
                      isOverDarkHero
                        ? "text-[#F0F3F1] hover:text-white"
                        : "text-[#3B4A5A]/70 hover:text-[#0D1B2A]"
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "w-2.5 h-2.5 transition-transform duration-200 stroke-[1.75]",
                        activeMenu === "ai" ? "rotate-180" : ""
                      )}
                    />
                  </button>
                </div>

                {/* Compact AI Transformation Dropdown (Zero hover gap via pt-2.5 bridge wrapper) */}
                <AnimatePresence>
                  {activeMenu === "ai" && (
                    <motion.div
                      id="ai-transformation-dropdown"
                      role="region"
                      aria-label="AI Transformation submenu"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 pt-2.5 w-[388px] z-50"
                      onMouseEnter={() => handleMouseEnter("ai")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-[12px] border border-[#D9DDDA] bg-[#F5F7F6] p-2.5 shadow-[0_10px_24px_-8px_rgba(13,17,23,0.08)]">
                        <div className="flex flex-col gap-1">
                          {navigationData.aiTransformation.items.map((item) => {
                            const isItemActive =
                              pathname === item.href || pathname.startsWith(`${item.href}/`);

                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isItemActive ? "page" : undefined}
                                onClick={() => setActiveMenu(null)}
                                className={cn(
                                  "group/item relative flex flex-col justify-center rounded-[8px] py-2.5 pr-3.5 pl-4 transition-colors duration-200 focus-visible:outline-none",
                                  isItemActive
                                    ? "bg-[#E8ECE9]"
                                    : "bg-transparent hover:bg-[#E8ECE9] focus-visible:bg-[#E8ECE9]"
                                )}
                              >
                                {/* Thin muted-gold left indicator (#C9A35B): persistent on active route, smooth reveal on hover/focus */}
                                <span
                                  aria-hidden="true"
                                  className={cn(
                                    "absolute left-1.5 top-2.5 bottom-2.5 w-[2px] rounded-full bg-[#C9A35B] transition-opacity duration-200",
                                    isItemActive
                                      ? "opacity-100"
                                      : "opacity-0 group-hover/item:opacity-100 group-focus-visible/item:opacity-100"
                                  )}
                                />

                                <span className="font-sans text-[15px] font-medium leading-[1.3] tracking-[-0.01em] text-[#0D1117]">
                                  {item.title}
                                </span>

                                {item.description && (
                                  <span
                                    className={cn(
                                      "font-sans text-[12.5px] leading-[1.35] mt-0.5",
                                      isItemActive ? "text-[#4D5760]" : "text-[#5E6871]"
                                    )}
                                  >
                                    {item.description}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. Cloud & Technology (Unified Enterprise Dropdown Styling) */}
              <div
                ref={cloudMenuRef}
                className="relative flex items-center"
                onMouseEnter={() => handleMouseEnter("cloud")}
                onMouseLeave={handleMouseLeave}
                onPointerDownCapture={() => {
                  suppressFocusOpenRef.current = true;
                  requestAnimationFrame(() => {
                    suppressFocusOpenRef.current = false;
                  });
                }}
                onFocusCapture={() => {
                  if (suppressFocusOpenRef.current) {
                    suppressFocusOpenRef.current = false;
                    return;
                  }
                  handleMouseEnter("cloud", false);
                }}
                onBlurCapture={(e) => handleBlurClose(e, cloudMenuRef, "cloud")}
              >
                <button
                  ref={cloudTriggerRef}
                  type="button"
                  onClick={() => {
                    if (activeMenu === "cloud") {
                      if (
                        hoverOpenedRef.current.menu === "cloud" &&
                        Date.now() - hoverOpenedRef.current.at < 300
                      ) {
                        hoverOpenedRef.current = { menu: null, at: 0 };
                        return;
                      }
                      setActiveMenu(null);
                    } else {
                      hoverOpenedRef.current = { menu: null, at: 0 };
                      setActiveMenu("cloud");
                    }
                  }}
                  aria-expanded={activeMenu === "cloud"}
                  aria-controls="cloud-technology-dropdown"
                  className={cn(
                    "group flex items-center gap-1.5 py-1.5 text-[13.5px] lg:text-[14px] font-sans tracking-[-0.01em] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B] rounded-[4px]",
                    isOverDarkHero
                      ? (isCloudActive || activeMenu === "cloud"
                          ? "text-white font-semibold"
                          : "text-[#F0F3F1] hover:text-white font-medium")
                      : (isCloudActive || activeMenu === "cloud"
                          ? "text-[#0D1B2A] font-medium"
                          : "text-[#3B4A5A] hover:text-[#0D1B2A] font-normal")
                  )}
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

                {/* Cloud & Technology Dropdown Menu (Overview Row + Two Grouped Columns) */}
                <AnimatePresence>
                  {activeMenu === "cloud" && (
                    <motion.div
                      id="cloud-technology-dropdown"
                      role="region"
                      aria-label="Cloud and Technology submenu"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-[45%] xl:-translate-x-1/2 pt-2.5 w-[696px] max-w-[calc(100vw-32px)] z-50"
                      onMouseEnter={() => handleMouseEnter("cloud")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-[12px] border border-[#D9DDDA] bg-[#F5F7F6] p-3 shadow-[0_10px_24px_-8px_rgba(13,17,23,0.08)]">
                        {/* Top Featured Overview Link */}
                        {navigationData.cloudTechnology.featured && (
                          <>
                            <Link
                              href={navigationData.cloudTechnology.featured.href}
                              aria-current={pathname === "/cloud-technology" ? "page" : undefined}
                              onClick={() => setActiveMenu(null)}
                              className={cn(
                                "group/item relative flex flex-col justify-center rounded-[8px] py-2.5 pr-4 pl-4 transition-colors duration-200 focus-visible:outline-none",
                                pathname === "/cloud-technology"
                                  ? "bg-[#E8ECE9]"
                                  : "bg-[#E8ECE9]/55 hover:bg-[#E8ECE9] focus-visible:bg-[#E8ECE9]"
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={cn(
                                  "absolute left-1.5 top-2.5 bottom-2.5 w-[2px] rounded-full bg-[#C9A35B] transition-opacity duration-200",
                                  pathname === "/cloud-technology"
                                    ? "opacity-100"
                                    : "opacity-0 group-hover/item:opacity-100 group-focus-visible/item:opacity-100"
                                )}
                              />
                              <span className="font-sans text-[15px] font-medium leading-[1.3] tracking-[-0.01em] text-[#0D1117]">
                                {navigationData.cloudTechnology.featured.title}
                              </span>
                              <span
                                className={cn(
                                  "font-sans text-[12.5px] leading-[1.35] mt-0.5",
                                  pathname === "/cloud-technology" ? "text-[#4D5760]" : "text-[#5E6871]"
                                )}
                              >
                                {navigationData.cloudTechnology.featured.description}
                              </span>
                            </Link>

                            <div className="my-2.5 border-t border-[#D9DDDA]/75" aria-hidden="true" />
                          </>
                        )}

                        {/* Two Grouped Service Columns */}
                        <div className="grid grid-cols-2 gap-x-6 px-0.5 py-0.5">
                          {navigationData.cloudTechnology.groups?.map((group) => (
                            <div key={group.label} className="flex flex-col">
                              <div className="px-3.5 pt-0.5 pb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.09em] text-[#8E6C2A]">
                                {group.label}
                              </div>

                              <div className="flex flex-col gap-0.5">
                                {group.items.map((item) => {
                                  const isItemActive =
                                    pathname === item.href || pathname.startsWith(`${item.href}/`);

                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      aria-current={isItemActive ? "page" : undefined}
                                      onClick={() => setActiveMenu(null)}
                                      className={cn(
                                        "group/item relative flex items-center rounded-[8px] py-2 pr-3.5 pl-4 transition-colors duration-200 focus-visible:outline-none",
                                        isItemActive
                                          ? "bg-[#E8ECE9]"
                                          : "bg-transparent hover:bg-[#E8ECE9] focus-visible:bg-[#E8ECE9]"
                                      )}
                                    >
                                      <span
                                        aria-hidden="true"
                                        className={cn(
                                          "absolute left-1.5 top-2 bottom-2 w-[2px] rounded-full bg-[#C9A35B] transition-opacity duration-200",
                                          isItemActive
                                            ? "opacity-100"
                                            : "opacity-0 group-hover/item:opacity-100 group-focus-visible/item:opacity-100"
                                        )}
                                      />
                                      <span className="font-sans text-[14.5px] font-medium leading-[1.35] tracking-[-0.01em] text-[#0D1117]">
                                        {item.title}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              <nav aria-label="Company navigation" className="flex items-center gap-7 xl:gap-8">
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
              <Link
                href="/contact"
                onClick={() =>
                  trackDiscoveryEvent({
                    event: "discovery_cta_click",
                    source_context: "Navbar Desktop",
                  })
                }
                className={cn(
                  "inline-flex items-center justify-center h-[44px] px-4 rounded-[8px] text-[13.5px] font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 shrink-0 shadow-xs whitespace-nowrap select-none",
                  isOverDarkHero
                    ? "bg-[#222824] text-white border border-white/[0.32] hover:border-[#C9A45C] hover:bg-[#2B332E] shadow-[0_2px_8px_rgba(0,0,0,0.4)] focus-visible:outline-[#C9A45C]"
                    : "bg-[#0D1117] text-[#F5F7F6] border border-transparent hover:border-[#D4A64A]/70 hover:bg-[#151B22] hover:-translate-y-px focus-visible:outline-[#D4A64A]"
                )}
              >
                <span>Book a Discovery Call</span>
              </Link>
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
          <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-[#0D1B2A]/[0.06]">
            
            {/* 1. AI Transformation (Accordion) */}
            <div className="py-1.5">
              <button
                type="button"
                onClick={() => setMobileExpanded((prev) => (prev === "ai" ? null : "ai"))}
                className="w-full min-h-[52px] py-3.5 flex items-center justify-between text-[20px] sm:text-[22px] font-sans font-medium text-[#0D1B2A] tracking-[-0.015em] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B] rounded-[6px]"
                aria-expanded={mobileExpanded === "ai"}
              >
                <span className={cn(isAiActive ? "text-[#0D1B2A]" : "")}>
                  AI Transformation
                </span>
                {mobileExpanded === "ai" ? (
                  <Minus className="w-5 h-5 text-[#C9A35B] transition-transform duration-200" />
                ) : (
                  <Plus className="w-5 h-5 text-[#3B4A5A] transition-transform duration-200" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {mobileExpanded === "ai" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 sm:pl-5 pr-1 pt-1 pb-3 flex flex-col space-y-0.5">
                      {navigationData.aiTransformation.items.map((item) => {
                        const isItemActive =
                          pathname === item.href || pathname.startsWith(`${item.href}/`);

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isItemActive ? "page" : undefined}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "relative min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans transition-colors duration-200 rounded-[8px] pl-4 pr-3 focus-visible:outline-none focus-visible:bg-[#E8ECE9]",
                              isItemActive
                                ? "font-medium text-[#0D1117] bg-[#E8ECE9]"
                                : "text-[#3B4A5A] hover:text-[#0D1B2A] hover:bg-[#E8ECE9]/70"
                            )}
                          >
                            {isItemActive && (
                              <span
                                aria-hidden="true"
                                className="absolute left-1.5 top-2.5 bottom-2.5 w-[2px] rounded-full bg-[#C9A35B]"
                              />
                            )}
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Cloud & Technology (Accordion) */}
            <div className="py-1.5">
              <button
                type="button"
                onClick={() => setMobileExpanded((prev) => (prev === "cloud" ? null : "cloud"))}
                className="w-full min-h-[52px] py-3.5 flex items-center justify-between text-[20px] sm:text-[22px] font-sans font-medium text-[#0D1B2A] tracking-[-0.015em] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B] rounded-[6px]"
                aria-expanded={mobileExpanded === "cloud"}
              >
                <span className={cn(isCloudActive ? "text-[#0D1B2A]" : "")}>
                  Cloud & Technology
                </span>
                {mobileExpanded === "cloud" ? (
                  <Minus className="w-5 h-5 text-[#C9A35B] transition-transform duration-200" />
                ) : (
                  <Plus className="w-5 h-5 text-[#3B4A5A] transition-transform duration-200" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {mobileExpanded === "cloud" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-3 sm:pl-4 pr-1 pt-1 pb-3 flex flex-col">
                      {/* Overview Link First */}
                      {navigationData.cloudTechnology.featured && (
                        <Link
                          href={navigationData.cloudTechnology.featured.href}
                          aria-current={pathname === "/cloud-technology" ? "page" : undefined}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "relative min-h-[48px] flex items-center text-[15px] sm:text-[16px] font-sans transition-colors duration-200 rounded-[8px] pl-4 pr-3 focus-visible:outline-none focus-visible:bg-[#E8ECE9]",
                            pathname === "/cloud-technology"
                              ? "font-medium text-[#0D1117] bg-[#E8ECE9]"
                              : "font-medium text-[#0D1B2A] bg-[#E8ECE9]/45 hover:bg-[#E8ECE9]/80"
                          )}
                        >
                          {pathname === "/cloud-technology" && (
                            <span
                              aria-hidden="true"
                              className="absolute left-1.5 top-2.5 bottom-2.5 w-[2px] rounded-full bg-[#C9A35B]"
                            />
                          )}
                          {navigationData.cloudTechnology.featured.title}
                        </Link>
                      )}

                      {/* Grouped Mobile Links */}
                      {navigationData.cloudTechnology.groups?.map((group) => (
                        <div key={group.label} className="mt-3.5 flex flex-col space-y-0.5">
                          <div className="pl-4 pr-2 pb-1 font-sans text-[11px] font-semibold uppercase tracking-[0.09em] text-[#8E6C2A]">
                            {group.label}
                          </div>
                          {group.items.map((item) => {
                            const isItemActive =
                              pathname === item.href || pathname.startsWith(`${item.href}/`);

                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isItemActive ? "page" : undefined}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                  "relative min-h-[46px] flex items-center text-[15px] sm:text-[16px] font-sans transition-colors duration-200 rounded-[8px] pl-4 pr-3 focus-visible:outline-none focus-visible:bg-[#E8ECE9]",
                                  isItemActive
                                    ? "font-medium text-[#0D1117] bg-[#E8ECE9]"
                                    : "text-[#3B4A5A] hover:text-[#0D1B2A] hover:bg-[#E8ECE9]/70"
                                )}
                              >
                                {isItemActive && (
                                  <span
                                    aria-hidden="true"
                                    className="absolute left-1.5 top-2.5 bottom-2.5 w-[2px] rounded-full bg-[#C9A35B]"
                                  />
                                )}
                                {item.title}
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
            <Link
              href="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
                trackDiscoveryEvent({
                  event: "discovery_cta_click",
                  source_context: "Navbar Mobile",
                });
              }}
              className="w-full min-h-[48px] h-12 sm:h-[50px] flex items-center justify-center rounded-[8px] bg-[#0D1117] text-[#F5F7F6] text-[15px] font-sans font-medium tracking-[0.01em] hover:bg-[#1C2C3E] active:scale-[0.99] transition-colors duration-200 cursor-pointer shadow-xs"
            >
              <span>Book a Discovery Call</span>
            </Link>
          </div>
        </div>
      </div>,
      document.body
    )}
  </>
);
}
