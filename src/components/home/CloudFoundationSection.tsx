"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Section 08: CLOUD & TECHNOLOGY (LOCKED REFINED DARK SECTION)
 * 
 * Strategic Role:
 * - The primary dark visual "pause" on the homepage (#111312).
 * - Real enterprise infrastructure visual (matte server cabinets, console diagnostics).
 * - Integrated, connected capability band (Cloud, Data, DevOps, Security, Software).
 * - Strengthened supporting copy readability (#D2D6D3).
 * - Mobile stack: Text -> CTA -> Image -> 2-Column Capability Labels (Software single).
 */

interface CapabilityLink {
  name: string;
  href: string;
}

const capabilityLabels: CapabilityLink[] = [
  { name: "Cloud", href: "/cloud-consulting" },
  { name: "Data", href: "/data-engineering" },
  { name: "DevOps", href: "/devops-automation" },
  { name: "Security", href: "/cloud-security-governance" },
  { name: "Software", href: "/software-development" },
];

export default function CloudFoundationSection() {
  return (
    <section
      id="cloud-technology"
      className="relative w-full bg-[#111312] text-[#F5F5F1] select-none scroll-mt-[58px] lg:scroll-mt-[66px] py-12 sm:py-14 lg:py-12 xl:py-14 border-b border-[#0D1B2A]/[0.12] overflow-hidden"
    >
      <Container className="px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: EDITORIAL HEADLINE, SUPPORTING NARRATIVE & CTA               */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-6 lg:space-y-7 lg:pt-5 xl:pt-7">
            <div className="space-y-4 sm:space-y-5">
              {/* 1. Eyebrow Reveal */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Cloud & Technology</span>
              </motion.div>

              {/* 2. Headline Masked Reveal (H2 40-44px on mobile) */}
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                  className="font-sans font-medium text-[40px] sm:text-[44px] lg:text-[40px] xl:text-[46px] text-[#F5F5F1] tracking-[-0.035em] leading-[1.04] sm:leading-[1.05]"
                >
                  The technology foundation behind transformation.
                </motion.h2>
              </div>

              {/* 3. Body Fade (Brightened ~6-8% to #E0E3E1 for crisp contrast on dark background) */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
                className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#E0E3E1] leading-[1.55] font-normal max-w-[480px]"
              >
                Cloud, data, DevOps, security and software capabilities designed to support resilient, scalable transformation.
              </motion.p>
            </div>

            {/* 4. CTA Fade — Desktop Button */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
              className="pt-1 sm:pt-2 hidden lg:block"
            >
              <Link
                href="/cloud-technology"
                className="inline-flex items-center justify-center px-5 sm:px-5.5 py-2.5 rounded-[3px] bg-[#F5F5F1] text-[#111312] hover:bg-[#EAEAE5] border border-[#F5F5F1] hover:border-[#EAEAE5] text-[13px] sm:text-[13.5px] font-sans font-medium tracking-[0.01em] transition-colors duration-200 cursor-pointer shadow-xs w-fit"
                aria-label="Explore Cloud & Technology"
              >
                Explore Cloud & Technology
              </Link>
            </motion.div>

            {/* 4. CTA Fade — Mobile Button (Directly below narrative, before image) */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
              className="pt-2 block lg:hidden"
            >
              <Link
                href="/cloud-technology"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-[3px] bg-[#F5F5F1] text-[#111312] hover:bg-[#EAEAE5] border border-[#F5F5F1] hover:border-[#EAEAE5] text-[13.5px] font-sans font-medium tracking-[0.015em] transition-colors duration-200 text-center"
                aria-label="Explore Cloud & Technology"
              >
                Explore Cloud & Technology
              </Link>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: REAL EDITORIAL TECHNOLOGY IMAGE + CONNECTED CAPABILITY BAND */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unified Frame Housing Image + Directly Connected Hairline Baseline */}
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(5% 0% 0% 0%)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full rounded-[3px] overflow-hidden border border-white/[0.10] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] bg-[#161817]"
            >
              {/* 5. Image Soft Mask Reveal (Preserved Exact Crop: Engineer + Infrastructure Balance) */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-[#161817]">
                <Image
                  src="/images/cloud-infrastructure.jpg"
                  alt="Enterprise cloud infrastructure operations and systems engineering terminal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-[72%_center] scale-[1.07]"
                  priority
                />
              </div>

              {/* 6. Five Capability Labels Subtle Stagger (Connected to Image with Ultra-Light Hairline) */}
              <div className="border-t border-white/[0.08] bg-[#141615]">
                
                {/* Desktop: Connected Horizontal Strip Across the Visual Base */}
                <div className="hidden sm:flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
                  {capabilityLabels.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.40 + idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="group relative inline-flex flex-col items-center py-0.5 text-[13px] sm:text-[13.5px] lg:text-[14px] font-sans font-medium text-[#AEB3AF] hover:text-[#F5F5F1] transition-colors duration-200 focus:outline-none"
                        aria-label={`${item.name} Capability`}
                      >
                        <span>{item.name}</span>
                        <span
                          className="w-0 h-px bg-[#C9A35B] group-hover:w-full transition-all duration-200 mt-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile: 2-Column Clean Editorial Grid (Software Single on Row 3) */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 sm:hidden p-4 pt-3.5 pb-3">
                  {capabilityLabels.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.40 + idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="inline-block py-1 text-[13px] font-sans font-medium text-[#AEB3AF] active:text-[#F5F5F1] transition-colors duration-150 focus:outline-none"
                        aria-label={`${item.name} Capability`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}
