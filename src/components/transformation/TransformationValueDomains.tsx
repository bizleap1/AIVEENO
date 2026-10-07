"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 04
 * WHERE AI CREATES VALUE (#EEF1F0)
 * 
 * Accenture-Inspired Expandable Editorial Service Explorer:
 * - Replaces static 3x3 or 2x2 grid with an interactive editorial accordion list.
 * - One enterprise business domain open at a time.
 * - Desktop: Full-width expandable rows with a 2-column split (Left: Headline, explanation, workloads | Right: Real editorial consulting photography).
 * - Mobile: Clean full-width accordions where editorial photo stacks smoothly below copy.
 * - Restrained enterprise styling: Zero generic AI graphics, zero glows, zero card lift.
 * - Interactive hover: Title strengthens, muted gold micro-indicator appears.
 * - Exact easing: cubic-bezier(0.22, 1, 0.36, 1).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DomainItem {
  id: string;
  number: string;
  title: string;
  category: string;
  headline: string;
  explanation: string;
  workloads: string[];
  image: string;
  imageAlt: string;
}

const domains: DomainItem[] = [
  {
    id: "operations",
    number: "01",
    title: "Operations & Supply Workflows",
    category: "Process Orchestration",
    headline: "Automating cross-system workflow coordination and operational triage.",
    explanation:
      "We eliminate high-friction manual data movement between ERPs, logistics platforms, and internal backends. Intelligent exception routing and autonomous triage ensure operational bottlenecks are resolved before causing downstream delays.",
    workloads: [
      "Cross-system workflow coordination across ERP, WMS, and legacy backends",
      "Automated operational exception routing and intelligent triage protocols",
      "Predictive demand forecasting and automated inventory rebalancing",
    ],
    image: "/images/value-operations.jpg",
    imageAlt: "Enterprise operations leadership and consultants analyzing business process architecture on glass whiteboard in modern headquarters",
  },
  {
    id: "customer-experience",
    number: "02",
    title: "Customer & Frontline Experience",
    category: "Customer Experience",
    headline: "Multimodal resolution engines embedded inside transactional software.",
    explanation:
      "Deploy context-aware resolution systems that solve complex Tier-1 and Tier-2 inquiries directly inside backend transaction databases and CRM records—avoiding generic chatbot frustration in favor of verifiable customer outcomes.",
    workloads: [
      "Autonomous Tier-1 and Tier-2 case resolution with verified transaction access",
      "Real-time customer journey sentiment analysis and proactive escalation",
      "Automated inquiry summarization and bidirectional CRM synchronization",
    ],
    image: "/images/assessment-strategy-session.jpg",
    imageAlt: "Executive consulting strategy dialogue reviewing stakeholder journeys and customer service architecture",
  },
  {
    id: "commercial-sales",
    number: "03",
    title: "Commercial & Sales Engineering",
    category: "Commercial Strategy",
    headline: "Account synthesis, automated technical proposals, and deal intelligence.",
    explanation:
      "Empower enterprise sales teams with real-time account buying committee synthesis, automated technical RFP response generation, and dynamic contract terms intelligence that protects margins and accelerates sales cycles.",
    workloads: [
      "Automated RFP, technical response, and security questionnaire generation",
      "Multi-signal account intent synthesis and buying committee mapping",
      "Contract clause intelligence and dynamic margin recommendation engines",
    ],
    image: "/images/value-commercial.jpg",
    imageAlt: "Senior executive commercial board meeting reviewing strategic enterprise proposals and revenue roadmaps",
  },
  {
    id: "finance-controls",
    number: "04",
    title: "Finance & Corporate Controls",
    category: "Finance & Risk",
    headline: "Continuous multi-ledger reconciliation and immutable transaction auditability.",
    explanation:
      "Modernize corporate finance with continuous multi-entity ledger matching, structured invoice intelligence, and compliance screening that satisfies the strictest regulatory standards and eliminates manual spreadsheet reconciliation.",
    workloads: [
      "Multi-entity ledger, invoice, and payment matching automation",
      "Structured financial document extraction and compliance screening",
      "Continuous transaction auditability and immutable regulatory lineage",
    ],
    image: "/images/assessment-workshop.jpg",
    imageAlt: "Finance executives and strategic advisors reviewing corporate controls, audit lineage, and ledger automation",
  },
  {
    id: "knowledge-governance",
    number: "05",
    title: "Enterprise Knowledge & Governance",
    category: "Knowledge & Policy",
    headline: "Governed institutional intelligence with verified source attribution.",
    explanation:
      "Transform scattered corporate archives, policy manuals, and technical repositories into queryable, source-attributed intelligence. Strict role-based access control and zero-trust data masking ensure sensitive intellectual property remains completely protected.",
    workloads: [
      "Regulatory & internal policy intelligence with verified document citations",
      "Institutional memory discovery and synthesis across corporate archives",
      "Zero-trust role-based access control and automatic document masking",
    ],
    image: "/images/cloud-infrastructure.jpg",
    imageAlt: "Modern enterprise infrastructure and data governance architecture session",
  },
];

interface TransformationValueDomainsProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function TransformationValueDomains({
  onOpenDiscoveryModal,
}: TransformationValueDomainsProps) {
  // Start with the first domain expanded (Operations)
  const [activeId, setActiveId] = useState<string>("operations");

  const toggleDomain = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  const handleCtaClick = (title: string) => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal(`AI Business Transformation Domain Explorer: ${title}`);
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section id="what-we-do" className="relative z-10 w-full scroll-mt-[115px] bg-[#F5F7F6] text-[#0E1C2A] py-16 sm:py-20 lg:py-24 border-b border-[#DADFDB]">
      <Container className="px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: ACCENTURE EDITORIAL RESTRAINT                             */}
        {/* ========================================================================= */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: transitionEase, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
          >
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>Where AI Creates Value</span>
          </motion.div>

          <div className="overflow-hidden pb-[0.12em]">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: transitionEase, delay: 0.16 }}
              className="font-sans font-medium text-[32px] min-[390px]:text-[36px] sm:text-[40px] lg:text-[44px] text-[#0E1C2A] tracking-[-0.03em] leading-[1.08]"
            >
              High-leverage enterprise domains.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: transitionEase, delay: 0.26 }}
            className="text-[15.5px] sm:text-[16.5px] text-[#56616B] leading-[1.6] font-normal"
          >
            Explore functional business areas where workflow redesign, modern data architecture, and intelligent systems produce measurable operational return.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* ACCENTURE-STYLE EDITORIAL ACCORDION LIST                                  */}
        {/* ========================================================================= */}
        <div className="border-t border-[#DADFDB] divide-y divide-[#DADFDB]">
          {domains.map((domain, idx) => {
            const isOpen = activeId === domain.id;

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.15 + idx * 0.05 }}
                className="group"
              >
                {/* ----------------------------------------------------------------- */}
                {/* ACCORDION ROW TRIGGER HEADER                                      */}
                {/* ----------------------------------------------------------------- */}
                <button
                  type="button"
                  onClick={() => toggleDomain(domain.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-6 sm:py-7 lg:py-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 min-w-0">
                    {/* Index Number */}
                    <span className="font-mono text-[12px] sm:text-[13px] font-semibold tracking-wider text-[#C9A35B] shrink-0">
                      {domain.number}
                    </span>

                    {/* Business Function Name with Hover Indicator */}
                    <div className="relative">
                      <h3
                        className={`font-sans font-medium text-[20px] sm:text-[24px] lg:text-[28px] tracking-[-0.025em] leading-snug transition-colors duration-200 ${
                          isOpen
                            ? "text-[#0E1C2A]"
                            : "text-[#0E1C2A]/80 group-hover:text-[#0E1C2A]"
                        }`}
                      >
                        {domain.title}
                      </h3>
                      {/* Muted Gold Micro-line on Hover */}
                      <span
                        className={`absolute left-0 -bottom-1 h-px bg-[#C9A35B] transition-all duration-300 ${
                          isOpen ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Functional Category Tag (Hidden on small mobile) */}
                    <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-[2px] bg-[#0E1C2A]/[0.05] text-[10.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#56616B] shrink-0">
                      {domain.category}
                    </span>
                  </div>

                  {/* Restrained Editorial Toggle Indicator (+ / −) */}
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[#DADFDB] group-hover:border-[#0E1C2A]/40 transition-colors duration-200 text-[#0E1C2A]">
                    <span
                      className={`font-mono text-[16px] leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#C9A35B]" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span className="sr-only">
                      {isOpen ? "Collapse domain details" : "Expand domain details"}
                    </span>
                  </div>
                </button>

                {/* ----------------------------------------------------------------- */}
                {/* EXPANDED EDITORIAL DETAIL PANEL (Left Story | Right Image)         */}
                {/* ----------------------------------------------------------------- */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`domain-content-${domain.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.42, ease: transitionEase }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-8 sm:pb-10 lg:pb-12 border-t border-[#DADFDB]/60">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
                          
                          {/* Left Column: Headline, Explanation & Capabilities (~56%) */}
                          <div className="lg:col-span-7 flex flex-col justify-start space-y-5">
                            
                            {/* Domain Focused Headline */}
                            <h4 className="font-sans font-medium text-[19px] sm:text-[21px] lg:text-[22px] text-[#0E1C2A] tracking-[-0.02em] leading-snug">
                              {domain.headline}
                            </h4>

                            {/* Short Concise Explanation */}
                            <p className="text-[14.5px] sm:text-[15.5px] text-[#56616B] leading-[1.65] font-normal">
                              {domain.explanation}
                            </p>

                            {/* Key System Capabilities List */}
                            <div className="pt-3 border-t border-[#DADFDB] space-y-3">
                              <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.12em] text-[#0E1C2A]">
                                Key System Capabilities
                              </div>
                              <ul className="space-y-2.5">
                                {domain.workloads.map((workload, i) => (
                                  <li
                                    key={i}
                                    className="text-[13.5px] sm:text-[14px] text-[#56616B] flex items-start gap-2.5 leading-snug"
                                  >
                                    <span
                                      className="w-1.5 h-1.5 rounded-full bg-[#C9A35B] shrink-0 mt-1.5"
                                      aria-hidden="true"
                                    />
                                    <span>{workload}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Contextual Action Link (Restrained, no arrows, no lift) */}
                            <div className="pt-3">
                              <button
                                type="button"
                                onClick={() => handleCtaClick(domain.title)}
                                className="inline-flex items-center text-[13px] font-sans font-medium text-[#0E1C2A] hover:text-[#C9A35B] transition-colors duration-200 cursor-pointer focus:outline-none"
                              >
                                <span className="underline underline-offset-4 decoration-[#C9A35B]">
                                  Discuss {domain.title} with an advisor
                                </span>
                              </button>
                            </div>

                          </div>

                          {/* Right Column: Real Editorial Consulting Photograph (~44%) */}
                          <div className="lg:col-span-5 flex flex-col justify-start">
                            <motion.div
                              initial={{ opacity: 0, clipPath: "inset(5% 0% 0% 0%)" }}
                              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                              transition={{ duration: 0.6, ease: transitionEase, delay: 0.1 }}
                              className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[4px] overflow-hidden border border-[#DADFDB] shadow-[0_6px_24px_-8px_rgba(14,28,42,0.08)] bg-[#E8ECEB]"
                            >
                              <Image
                                src={domain.image}
                                alt={domain.imageAlt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                className="object-cover object-center"
                              />
                            </motion.div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
