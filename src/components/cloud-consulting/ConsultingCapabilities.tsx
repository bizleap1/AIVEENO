"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Consulting / Advisory
 * SECTION 04: CONSULTING CAPABILITIES (#111312 Dark Graphite Surface)
 *
 * Typography-Led Interactive Capability Explorer:
 * - Left: Five clearly readable strategic decision areas
 * - Right: Selected capability displayed in large editorial typography
 * - Switching uses smooth opacity/translate transition with zero blank intermediate frames
 * - Mobile (<1024px): Single-open accessible accordion (first capability open by default)
 * - Strictly avoids dashboard-style panels, comparison cards, and circular wipe effects
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface AdvisoryCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  focusLine: string;
}

const ADVISORY_CAPABILITIES: AdvisoryCapability[] = [
  {
    id: "cloud-strategy",
    number: "01",
    title: "Cloud Strategy",
    description:
      "Align cloud direction with business objectives and technology priorities.",
    focusLine:
      "Evaluates organizational readiness, operational trade-offs and long-term platform direction before committing capital or engineering effort.",
  },
  {
    id: "architecture-advisory",
    number: "02",
    title: "Architecture Advisory",
    description:
      "Evaluate architectural approaches, dependencies and technical requirements.",
    focusLine:
      "Examines application coupling, network boundaries, security posture and maintainability across existing and target environments.",
  },
  {
    id: "platform-evaluation",
    number: "03",
    title: "Platform Evaluation",
    description:
      "Assess the suitability of cloud platforms against workload and business requirements.",
    focusLine:
      "Applies objective workload, data, operational and governance criteria across candidate platforms rather than defaulting to a single vendor.",
  },
  {
    id: "adoption-planning",
    number: "04",
    title: "Adoption Planning",
    description:
      "Identify practical considerations for introducing cloud capabilities.",
    focusLine:
      "Defines operating responsibilities, foundational controls and realistic sequencing so new cloud environments remain manageable.",
  },
  {
    id: "modernization-planning",
    number: "05",
    title: "Modernization Planning",
    description:
      "Evaluate opportunities and priorities for improving existing environments.",
    focusLine:
      "Separates workloads that benefit from deeper re-architecture from systems best stabilized or transitioned incrementally.",
  },
];

export default function ConsultingCapabilities() {
  const [activeId, setActiveId] = useState<string>(ADVISORY_CAPABILITIES[0].id);

  const activeCapability =
    ADVISORY_CAPABILITIES.find((item) => item.id === activeId) ||
    ADVISORY_CAPABILITIES[0];
  const desktopSelectedId = activeCapability.id;

  const handleMobileToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="consulting-capabilities"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#111312] text-[#F5F7F6] py-14 sm:py-16 lg:py-22 border-t border-b border-white/[0.08]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Editorial Section Masthead */}
          <div className="max-w-[780px] space-y-2.5 sm:space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Cloud Advisory Capabilities</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.06]"
              >
                The decisions that shape your cloud direction.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[660px]"
            >
              Our advisory work helps organizations evaluate the choices that influence their cloud architecture, adoption and long-term operations.
            </motion.p>
          </div>

          {/* DESKTOP (>= 1024px): Interactive Typography-Led Decision Explorer */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-10 xl:gap-16 items-stretch">
            {/* Left Column: Five Readable Capability Names */}
            <div
              role="tablist"
              aria-label="Cloud Advisory Capabilities"
              className="lg:col-span-5 flex flex-col border-t border-white/[0.10]"
            >
              {ADVISORY_CAPABILITIES.map((cap) => {
                const isSelected = desktopSelectedId === cap.id;

                return (
                  <button
                    key={cap.id}
                    type="button"
                    role="tab"
                    id={`tab-${cap.id}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-${cap.id}`}
                    onClick={() => setActiveId(cap.id)}
                    className={`group relative w-full text-left py-4 xl:py-4.5 pl-4 pr-3 border-b border-white/[0.08] flex items-baseline gap-4 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:bg-white/[0.03] ${
                      isSelected
                        ? "text-[#F5F7F6] bg-white/[0.025]"
                        : "text-[#8A928E] hover:text-[#DDE2DF]"
                    }`}
                  >
                    {/* Minimal Muted-Gold Active Hairline Indicator */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-3.5 bottom-3.5 w-[2px] bg-[#C9A35B] transition-opacity duration-200 ${
                        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-35"
                      }`}
                    />

                    <span
                      className={`font-sans text-[12px] font-medium tracking-[0.14em] shrink-0 transition-colors duration-200 ${
                        isSelected
                          ? "text-[#C9A35B]"
                          : "text-[#636B67] group-hover:text-[#9FA5A1]"
                      }`}
                    >
                      {cap.number}
                    </span>

                    <span className="font-sans font-medium text-[20px] xl:text-[22px] tracking-[-0.02em] leading-[1.25]">
                      {cap.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Large Editorial Explanation (Never Blank During Switch) */}
            <div className="lg:col-span-7 lg:border-l lg:border-white/[0.10] lg:pl-12 xl:pl-16 flex flex-col justify-center min-h-[290px]">
              <motion.div
                key={activeCapability.id}
                role="tabpanel"
                id={`panel-${activeCapability.id}`}
                aria-labelledby={`tab-${activeCapability.id}`}
                initial={{ opacity: 0.4, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: transitionEase }}
                className="space-y-5 xl:space-y-6 max-w-[660px]"
              >
                <div className="inline-flex items-center gap-2.5 text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#C9A35B]">
                  <span>
                    {activeCapability.number} &mdash; {activeCapability.title}
                  </span>
                </div>

                <h3 className="font-sans font-medium text-[28px] xl:text-[34px] text-[#F5F7F6] tracking-[-0.025em] leading-[1.22]">
                  {activeCapability.description}
                </h3>

                <div className="pt-4 border-t border-white/[0.08]">
                  <p className="font-sans text-[16.5px] xl:text-[17.5px] text-[#AEB3AF] leading-[1.6] font-normal max-w-[580px]">
                    {activeCapability.focusLine}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* MOBILE (< 1024px): Single-Open Accessible Editorial Accordion */}
          <div className="block lg:hidden border-t border-white/[0.10] divide-y divide-white/[0.08]">
            {ADVISORY_CAPABILITIES.map((cap) => {
              const isOpen = activeId === cap.id;

              return (
                <div key={cap.id}>
                  <button
                    type="button"
                    onClick={() => handleMobileToggle(cap.id)}
                    aria-expanded={isOpen}
                    aria-controls={`mobile-panel-${cap.id}`}
                    className="w-full min-h-[52px] text-left py-4 px-1 flex items-center justify-between gap-4 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]"
                  >
                    <div className="flex items-baseline gap-3.5 min-w-0">
                      <span
                        className={`font-sans text-[11.5px] font-medium tracking-[0.12em] shrink-0 transition-colors duration-200 ${
                          isOpen ? "text-[#C9A35B]" : "text-[#6D7570]"
                        }`}
                      >
                        {cap.number}
                      </span>
                      <h3
                        className={`font-sans font-medium text-[18px] sm:text-[19px] tracking-[-0.015em] leading-snug transition-colors duration-200 ${
                          isOpen ? "text-[#F5F7F6]" : "text-[#A7AFAA]"
                        }`}
                      >
                        {cap.title}
                      </h3>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`font-sans text-[18px] leading-none shrink-0 transition-colors duration-200 ${
                        isOpen ? "text-[#C9A35B]" : "text-[#8A928E]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <motion.div
                      id={`mobile-panel-${cap.id}`}
                      initial={{ opacity: 0.5, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, ease: transitionEase }}
                      className="pl-7 pr-2 pb-5 pt-1 space-y-2.5"
                    >
                      <p className="font-sans font-medium text-[17px] sm:text-[18px] text-[#F5F7F6] leading-[1.4] tracking-[-0.01em]">
                        {cap.description}
                      </p>
                      <p className="font-sans text-[14.5px] sm:text-[15px] text-[#AEB3AF] leading-[1.58]">
                        {cap.focusLine}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
