"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Section 07: AI CAPABILITIES (EDITORIAL TYPOGRAPHIC BANDS)
 * 
 * Refined Editorial Structure:
 * - Pure typography and generous whitespace (Accenture / McKinsey editorial benchmark).
 * - Warm off-white background (#F5F7F6) directly preceding the dark Cloud & Technology section.
 * - Removed technical report numbering (01-07) and filler copy.
 * - Rows 1–3: 3 balanced 2-column pairs with whisper-light center divider.
 * - Row 4: Final "Custom Software" spans the full width across both columns (max-w ~600px),
 *   creating an intentional, balanced conclusion rather than an awkward leftover cell.
 * - Body copy contrast strengthened (+5–8% darker: #3E4A56).
 * - Text CTA with animated underline (strictly no arrow/icon).
 */

interface CapabilityItem {
  title: string;
  description: string;
  href?: string;
}

const capabilities: CapabilityItem[] = [
  {
    title: "Workflow Automation",
    description: "Process orchestration and automated handoffs across business systems.",
    href: "/ai-solutions",
  },
  {
    title: "AI Systems & Agents",
    description: "Practical task execution, workflow agents, and specialized assistants.",
    href: "/ai-solutions",
  },
  {
    title: "Intelligent Knowledge",
    description: "Internal search, document intelligence, and organized business knowledge.",
    href: "/ai-solutions",
  },
  {
    title: "Integrations",
    description: "Clean connections between modern AI, legacy platforms, and core databases.",
    href: "/cloud-technology",
  },
  {
    title: "Data Pipelines",
    description: "Reliable data ingestion, cleansing, and preparation for analytics and AI.",
    href: "/data-engineering",
  },
  {
    title: "Decision Support",
    description: "Analytical models and tools to evaluate scenarios and guide decisions.",
    href: "/ai-solutions",
  },
  {
    title: "Custom Software",
    description: "Tailored internal applications built around your specific business logic.",
    href: "/software-development",
  },
];

// First 6 capabilities grouped into 3 2-column pairs
const pairedCapabilities: [CapabilityItem, CapabilityItem][] = [
  [capabilities[0], capabilities[1]],
  [capabilities[2], capabilities[3]],
  [capabilities[4], capabilities[5]],
];

// 7th capability spans full-width
const fullWidthCapability = capabilities[6];

export default function TransformationScopeSection() {
  return (
    <section
      id="ai-capabilities"
      className="relative w-full bg-[#F5F7F6] text-[#0D1B2A] select-none scroll-mt-[58px] lg:scroll-mt-[66px] lg:min-h-[calc(100svh-66px)] lg:flex lg:flex-col lg:justify-center py-12 sm:py-16 lg:py-8 xl:py-12 border-b border-[#0D1B2A]/[0.08] overflow-hidden"
    >
      <Container className="px-5 sm:px-6 lg:px-12">
        {/* ========================================================================= */}
        {/* 01 — SECTION HEADER (Editorial Split Layout)                               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] lg:gap-12 items-end justify-between pb-8 lg:pb-10">
          <div>
            {/* Standardized Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A] mb-3.5 sm:mb-4"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>AI Capabilities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-sans font-medium text-[36px] min-[390px]:text-[40px] sm:text-[44px] lg:text-[42px] xl:text-[46px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.04]"
            >
              From opportunity to systems that work across the business.
            </motion.h2>
          </div>

          {/* Right Narrative Paragraph (Simplified & Grounded) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 sm:mt-5 lg:mt-0 flex flex-col justify-end"
          >
            <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#3E4A56] leading-[1.55] font-normal max-w-[500px]">
              We design and build the systems, automations, integrations, data foundations and software needed to turn transformation opportunities into working business solutions.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 02 — DESKTOP: 2-COLUMN REFINED EDITORIAL BANDS + FULL-WIDTH ANCHOR ROW    */}
        {/* ========================================================================= */}
        <div className="hidden lg:block border-t border-[#0D1B2A]/[0.08]">
          {/* Pairs 1–3: 2-Column Bands with Whisper-Light Center Divider */}
          {pairedCapabilities.map((pair, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 + rowIndex * 0.07 }}
              className="grid grid-cols-2 border-b border-[#0D1B2A]/[0.08]"
            >
              {/* Left Column Item */}
              <div className="group py-7 xl:py-8.5 pr-12 xl:pr-16 border-r border-[#0D1B2A]/[0.035] transition-colors duration-200">
                <Link
                  href={pair[0].href || "/ai-business-transformation"}
                  className="block focus:outline-none"
                  aria-label={pair[0].title}
                >
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-medium text-[25px] xl:text-[27px] text-[#0D1B2A] tracking-[-0.025em] leading-[1.15] group-hover:text-[#000000] transition-colors duration-200 flex items-center gap-2.5">
                      <span
                        className="w-0 h-[1.5px] bg-[#C9A35B] opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-200 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{pair[0].title}</span>
                    </h3>
                    <p className="text-[14px] xl:text-[14.5px] text-[#3E4A56] group-hover:text-[#0D1B2A] leading-[1.5] transition-colors duration-200 max-w-[460px]">
                      {pair[0].description}
                    </p>
                  </div>
                </Link>
              </div>

              {/* Right Column Item */}
              <div className="group py-7 xl:py-8.5 pl-12 xl:pr-6 pl-12 xl:pl-16 transition-colors duration-200">
                <Link
                  href={pair[1].href || "/ai-business-transformation"}
                  className="block focus:outline-none"
                  aria-label={pair[1].title}
                >
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-medium text-[25px] xl:text-[27px] text-[#0D1B2A] tracking-[-0.025em] leading-[1.15] group-hover:text-[#000000] transition-colors duration-200 flex items-center gap-2.5">
                      <span
                        className="w-0 h-[1.5px] bg-[#C9A35B] opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-200 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{pair[1].title}</span>
                    </h3>
                    <p className="text-[14px] xl:text-[14.5px] text-[#3E4A56] group-hover:text-[#0D1B2A] leading-[1.5] transition-colors duration-200 max-w-[460px]">
                      {pair[1].description}
                    </p>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Row 4: Left = Custom Software | Right = Explore AI Transformation CTA (Filling the spacing) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.33 }}
            className="grid grid-cols-2 border-b border-[#0D1B2A]/[0.08]"
          >
            {/* Left Column Item: Custom Software */}
            <div className="group py-7 xl:py-8.5 pr-12 xl:pr-16 border-r border-[#0D1B2A]/[0.035] transition-colors duration-200">
              <Link
                href={fullWidthCapability.href || "/software-development"}
                className="block focus:outline-none"
                aria-label={fullWidthCapability.title}
              >
                <div className="space-y-1.5">
                  <h3 className="font-sans font-medium text-[25px] xl:text-[27px] text-[#0D1B2A] tracking-[-0.025em] leading-[1.15] group-hover:text-[#000000] transition-colors duration-200 flex items-center gap-2.5">
                    <span
                      className="w-0 h-[1.5px] bg-[#C9A35B] opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-200 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{fullWidthCapability.title}</span>
                  </h3>
                  <p className="text-[14px] xl:text-[14.5px] text-[#3E4A56] group-hover:text-[#0D1B2A] leading-[1.5] transition-colors duration-200 max-w-[460px]">
                    {fullWidthCapability.description}
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Column: Integrated Explore AI Transformation CTA */}
            <div className="py-7 xl:py-8.5 pl-12 xl:pl-16 flex items-end justify-end pb-8">
              <Link
                href="/ai-business-transformation"
                className="group inline-flex items-center text-[14.5px] sm:text-[15px] font-sans font-medium text-[#0D1B2A] transition-colors duration-200 relative py-1"
                aria-label="Explore AI Transformation"
              >
                <span className="relative">
                  Explore AI Transformation
                  <span className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-[#0D1B2A]/25 transition-all duration-200 group-hover:bg-[#0D1B2A]" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 03 — MOBILE: SINGLE-COLUMN VERTICAL EDITORIAL LIST                        */}
        {/* ========================================================================= */}
        <div className="block lg:hidden border-t border-[#0D1B2A]/[0.08]">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 + idx * 0.05 }}
              className="py-6 sm:py-7 border-b border-[#0D1B2A]/[0.08]"
            >
              <Link
                href={item.href || "/ai-business-transformation"}
                className="block active:opacity-75 transition-opacity"
              >
                <div className="space-y-1">
                  <h3 className="font-sans font-medium text-[22px] sm:text-[24px] text-[#0D1B2A] tracking-[-0.02em] leading-[1.15]">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] sm:text-[15px] text-[#3E4A56] leading-[1.5] font-normal">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Mobile CTA: Placed after the final capability item, left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="pt-7 sm:pt-8 flex items-center justify-start"
          >
            <Link
              href="/ai-business-transformation"
              className="group inline-flex items-center min-h-[44px] text-[14.5px] sm:text-[15px] font-sans font-medium text-[#0D1B2A] transition-colors duration-200 relative py-1"
              aria-label="Explore AI Transformation"
            >
              <span className="relative">
                Explore AI Transformation
                <span className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-[#0D1B2A]/25 transition-all duration-200 group-hover:bg-[#0D1B2A]" />
              </span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
