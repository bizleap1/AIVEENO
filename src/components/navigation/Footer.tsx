"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "motion/react";

/**
 * Aiveeno — Global Footer (COMPACT DARK GRAPHITE ENTERPRISE CALIBER)
 * 
 * Strategic Refinements:
 * - Desktop height: Compact ~430–480px (no viewport takeover).
 * - Vertical padding: 56–64px top (pt-14 sm:pt-16), 24–28px bottom (pb-6 sm:pb-7).
 * - Brand Column: "Book a Discovery Call" positioned ~28-32px directly below tagline.
 * - Cloud & Technology: Split into 2 sub-columns (4 items each) cutting vertical height in half.
 * - Bottom Row: Clean copyright statement only (no duplicate Privacy/Terms).
 * - Mobile: Brand -> CTA -> 4 Accordions (min 48px tap target) -> Copyright.
 * - Pure typography, restrained hairlines, zero AI visual clichés.
 */

interface NavItem {
  title: string;
  href: string;
}

const aiLinks: NavItem[] = [
  { title: "AI Business Transformation", href: "/ai-business-transformation" },
  { title: "Our Framework", href: "/framework" },
  { title: "AI Transformation Assessment", href: "/ai-transformation-assessment" },
  { title: "AI Solutions / Use Cases", href: "/ai-solutions" },
];

const cloudColumn1: NavItem[] = [
  { title: "Cloud Consulting", href: "/cloud-consulting" },
  { title: "Migration & Modernization", href: "/cloud-migration-modernization" },
  { title: "Managed Services", href: "/cloud-managed-services" },
  { title: "Security & Governance", href: "/cloud-security-governance" },
];

const cloudColumn2: NavItem[] = [
  { title: "Cloud Optimization", href: "/cloud-optimization" },
  { title: "DevOps & Automation", href: "/devops-automation" },
  { title: "Data Engineering", href: "/data-engineering" },
  { title: "Software Development", href: "/software-development" },
];

const allCloudLinks: NavItem[] = [...cloudColumn1, ...cloudColumn2];

const companyLinks: NavItem[] = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const legalLinks: NavItem[] = [
  { title: "Privacy", href: "/privacy" },
  { title: "Terms", href: "/terms" },
];

interface MobileSection {
  id: string;
  title: string;
  items: NavItem[];
}

const mobileSections: MobileSection[] = [
  { id: "ai", title: "AI Transformation", items: aiLinks },
  { id: "cloud", title: "Cloud & Technology", items: allCloudLinks },
  { id: "company", title: "Company", items: companyLinks },
  { id: "legal", title: "Legal", items: legalLinks },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <footer className="w-full bg-[#111312] text-[#F5F5F1] select-none border-t border-white/[0.08] pt-14 sm:pt-16 pb-6 sm:pb-7 overflow-hidden">
      <Container className="px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* DESKTOP FOOTER GRID (12 COLS: BRAND 3 | AI 2 | CLOUD 5 | COMPANY+LEGAL 2)  */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-10 pb-10 sm:pb-12 border-b border-white/[0.08]">
          
          {/* Column 1: Brand & Tagline + Tight CTA (Cols 1-3) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="col-span-3 pr-2 xl:pr-4"
          >
            <Logo variant="light" />
            
            <p className="text-[13px] sm:text-[13.5px] text-[#9FA5A1] font-sans font-medium mt-3.5 tracking-[0.01em] leading-snug">
              Enterprise AI Transformation <br />
              <span className="text-[#9FA5A1]/80">+ Cloud & Technology</span>
            </p>

            {/* Book a Discovery Call CTA directly below positioning line (~28-32px spacing) */}
            <div className="mt-7 sm:mt-8">
              <Link
                href="/contact"
                className="group relative inline-flex flex-col py-0.5 text-[13.5px] font-sans font-medium text-[#F5F5F1] hover:text-white transition-colors duration-200 focus:outline-none"
              >
                <span>Book a Discovery Call</span>
                <span className="w-0 h-px bg-[#C9A35B] group-hover:w-full transition-all duration-200 mt-0.5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Column 2: AI Transformation (Cols 4-5) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
            className="col-span-2 space-y-6"
          >
            <div className="text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#9FA5A1]">
              AI Transformation
            </div>
            <ul className="space-y-3.5 text-[14px]">
              {aiLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-flex flex-col py-0.5 text-[#9FA5A1] hover:text-[#F5F5F1] transition-colors duration-200 focus:outline-none"
                  >
                    <span>{item.title}</span>
                    <span className="w-0 h-px bg-[#C9A35B] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Cloud & Technology — 2 Compact Sub-columns (Cols 6-10) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            className="col-span-5 space-y-6"
          >
            <div className="text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#9FA5A1]">
              Cloud & Technology
            </div>
            
            <div className="grid grid-cols-2 gap-x-6 lg:gap-x-8">
              {/* Sub-column 1 */}
              <ul className="space-y-3.5 text-[14px]">
                {cloudColumn1.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group relative inline-flex flex-col py-0.5 text-[#9FA5A1] hover:text-[#F5F5F1] transition-colors duration-200 focus:outline-none"
                    >
                      <span>{item.title}</span>
                      <span className="w-0 h-px bg-[#C9A35B] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Sub-column 2 */}
              <ul className="space-y-3.5 text-[14px]">
                {cloudColumn2.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group relative inline-flex flex-col py-0.5 text-[#9FA5A1] hover:text-[#F5F5F1] transition-colors duration-200 focus:outline-none"
                    >
                      <span>{item.title}</span>
                      <span className="w-0 h-px bg-[#C9A35B] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 4: Company & Legal (Cols 11-12) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
            className="col-span-2 grid grid-cols-2 gap-x-6"
          >
            {/* Company */}
            <div className="space-y-6">
              <div className="text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#9FA5A1]">
                Company
              </div>
              <ul className="space-y-3.5 text-[14px]">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group relative inline-flex flex-col py-0.5 text-[#9FA5A1] hover:text-[#F5F5F1] transition-colors duration-200 focus:outline-none"
                    >
                      <span>{item.title}</span>
                      <span className="w-0 h-px bg-[#C9A35B] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <div className="text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#9FA5A1]">
                Legal
              </div>
              <ul className="space-y-3.5 text-[14px]">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group relative inline-flex flex-col py-0.5 text-[#9FA5A1] hover:text-[#F5F5F1] transition-colors duration-200 focus:outline-none"
                    >
                      <span>{item.title}</span>
                      <span className="w-0 h-px bg-[#C9A35B] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE FOOTER (BRAND -> CTA -> ACCORDIONS -> COPYRIGHT)                    */}
        {/* ========================================================================= */}
        <div className="block lg:hidden space-y-6 pb-8 border-b border-white/[0.08]">
          {/* Mobile Brand Top */}
          <div className="space-y-2">
            <Logo variant="light" />
            <p className="text-[13px] text-[#9FA5A1] font-sans font-medium leading-snug">
              Enterprise AI Transformation + Cloud & Technology
            </p>
          </div>

          {/* Mobile Book Discovery Text Link (Above accordions, tightly coupled) */}
          <div className="pt-1 pb-2">
            <Link
              href="/contact"
              className="inline-block text-[13.5px] font-sans font-medium text-[#F5F5F1] hover:text-white transition-colors duration-200"
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Accordion Groups */}
          <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
            {mobileSections.map((section) => {
              const isOpen = openSection === section.id;
              return (
                <div key={section.id} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between min-h-[48px] py-3 text-[12px] font-sans font-medium uppercase tracking-[0.14em] text-[#F5F5F1] focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{section.title}</span>
                    <span className="text-[16px] text-[#9FA5A1] w-6 text-right font-normal">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="pb-4 pt-1 space-y-3 text-[14px]">
                          {section.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block py-1 text-[#9FA5A1] hover:text-[#F5F5F1] transition-colors duration-150"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM COPYRIGHT & SUBTLE ATTRIBUTION ROW                                 */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="pt-6 sm:pt-6.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 text-[12px] text-[#9FA5A1] font-sans"
        >
          <div>
            © {currentYear} Aiveeno. All rights reserved.
          </div>

          <div className="text-[#8E9490]">
            Developed &amp; Managed by{" "}
            <a
              href="https://bizleap.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4D8D5] hover:text-[#F5F5F1] transition-colors duration-200 underline-offset-4 hover:underline focus:outline-none"
            >
              BIZLEAP
            </a>
          </div>
        </motion.div>

      </Container>
    </footer>
  );
}
