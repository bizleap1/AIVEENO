"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud & Technology Overview Page: Section 04
 * CONNECTED TECHNOLOGY FOUNDATIONS (#111312 Dark Graphite Editorial Surface)
 *
 * Conceptual Architecture Composition:
 * - Left Column (~42%): Eyebrow with muted-gold dash + H2 + concise narrative
 * - Right Column (~58%): Bespoke five-domain conceptual architecture diagram
 *   showing vertical layer dependencies (Applications -> Data -> Cloud) coupled
 *   side-by-side with cross-cutting Security & Governance and DevOps & Operations.
 * - Restrained geometry, crisp hairlines, muted-gold datum rules (#C9A35B)
 * - Progressive 600–800ms entrance reveal; zero endless looping animations,
 *   zero cloud vendor logos, zero fake telemetry, zero server clip-art.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CoreLayer {
  code: string;
  title: string;
  role: string;
  accent?: boolean;
}

const ARCHITECTURAL_LAYERS: CoreLayer[] = [
  {
    code: "01",
    title: "Business Applications & Systems",
    role: "Operational workflows, business interfaces & enterprise software",
  },
  {
    code: "02",
    title: "Data Foundations",
    role: "Structured pipelines, accessible stores & analytics readiness",
    accent: true,
  },
  {
    code: "03",
    title: "Cloud Infrastructure",
    role: "Scalable compute, network boundaries & resilient hosting environment",
  },
];

interface CrossCuttingDiscipline {
  title: string;
  scope: string;
  accent?: boolean;
}

const CROSS_CUTTING_DISCIPLINES: CrossCuttingDiscipline[] = [
  {
    title: "Security & Governance",
    scope: "Controls, access management & oversight across every layer",
    accent: true,
  },
  {
    title: "DevOps & Operations",
    scope: "Delivery automation, monitoring & operational continuity",
  },
];

export default function CloudFoundations() {
  return (
    <section
      id="connected-foundations"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#111312] text-[#F5F7F6] py-14 sm:py-16 lg:py-20 xl:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Editorial Headline & Concise Explanation */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Connected Foundations</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.08 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[50px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.08] max-w-[500px]"
              >
                Strong foundations make transformation possible.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.16 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#AEB3AF] leading-[1.6] font-normal max-w-[460px] pt-1"
            >
              Cloud platforms, data, applications, security and engineering practices need to work together rather than operate as isolated investments.
            </motion.p>
          </div>

          {/* Right Column: Bespoke Conceptual Architecture Exhibit */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: transitionEase, delay: 0.1 }}
              className="rounded-[10px] border border-white/[0.11] bg-[#161918] p-4 sm:p-6 lg:p-7"
            >
              {/* Conceptual Frame Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/[0.08]">
                <span className="font-sans text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.13em] text-[#9FA5A1]">
                  Conceptual Capability Alignment
                </span>
                <span className="font-sans text-[11px] text-[#C9A35B] tracking-[0.04em]">
                  Integrated Technology Environment
                </span>
              </div>

              {/* Architectural Composition Grid: Stacked Core Layers Left + Spanning Enablers Right */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-stretch">
                {/* Core Horizontal Architectural Layers */}
                <div className="md:col-span-8 flex flex-col">
                  {ARCHITECTURAL_LAYERS.map((layer, idx) => (
                    <div key={layer.code} className="flex flex-col">
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                          duration: 0.6,
                          ease: transitionEase,
                          delay: 0.16 + idx * 0.12,
                        }}
                        className={`rounded-[6px] border px-4 py-3.5 sm:px-5 sm:py-4 ${
                          layer.accent
                            ? "border-[#C9A35B]/45 bg-[#1B1F1D]"
                            : "border-white/[0.12] bg-[#191C1B]"
                        }`}
                      >
                        <div className="flex items-start sm:items-center gap-2.5">
                          <span
                            className={`mt-[3px] sm:mt-0 shrink-0 font-sans text-[10.5px] font-medium tracking-[0.14em] ${
                              layer.accent ? "text-[#C9A35B]" : "text-[#9FA5A1]"
                            }`}
                          >
                            {layer.code}
                          </span>
                          <span
                            className="mt-[10px] sm:mt-0 h-px w-3 shrink-0 bg-white/[0.18]"
                            aria-hidden="true"
                          />
                          <span className="font-sans text-[15px] sm:text-[16px] font-medium text-[#F5F7F6] tracking-[-0.01em] leading-snug">
                            {layer.title}
                          </span>
                        </div>

                        <p className="font-sans text-[13px] sm:text-[13.5px] text-[#9FA5A1] leading-[1.48] mt-1">
                          {layer.role}
                        </p>
                      </motion.div>

                      {/* Restrained Vertical Coupling Lines Between Stack Tiers */}
                      {idx < ARCHITECTURAL_LAYERS.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0.4 }}
                          whileInView={{ opacity: 1, scaleY: 1 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{
                            duration: 0.5,
                            ease: transitionEase,
                            delay: 0.28 + idx * 0.12,
                          }}
                          className="flex items-center justify-around px-10 py-1 origin-top"
                          aria-hidden="true"
                        >
                          <span className="w-px h-3.5 bg-[#C9A35B]/55" />
                          <span className="w-px h-3.5 bg-white/[0.18]" />
                          <span className="w-px h-3.5 bg-[#C9A35B]/55" />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Cross-Cutting Disciplines Spanning All Layers */}
                <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3.5">
                  {CROSS_CUTTING_DISCIPLINES.map((discipline, idx) => (
                    <motion.div
                      key={discipline.title}
                      initial={{ opacity: 0, x: 6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.65,
                        ease: transitionEase,
                        delay: 0.34 + idx * 0.14,
                      }}
                      className={`relative rounded-[6px] border p-4 flex flex-col justify-between ${
                        discipline.accent
                          ? "border-[#C9A35B]/35 bg-[#1B1F1D]"
                          : "border-white/[0.12] bg-[#191C1B]"
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-3 rounded-full shrink-0 ${
                              discipline.accent ? "bg-[#C9A35B]" : "bg-[#9FA5A1]/60"
                            }`}
                            aria-hidden="true"
                          />
                          <span className="font-sans text-[14.5px] sm:text-[15px] font-medium text-[#F5F7F6] tracking-[-0.01em] leading-snug">
                            {discipline.title}
                          </span>
                        </div>

                        <p className="font-sans text-[12.5px] sm:text-[13px] text-[#9FA5A1] leading-[1.48] pl-3.5">
                          {discipline.scope}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-white/[0.06] pl-3.5">
                        <span className="font-sans text-[10.5px] uppercase tracking-[0.11em] text-[#AEB3AF]/80">
                          Cross-Layer Discipline
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Architectural Caption Footer */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px] text-[#9FA5A1]">
                <span>Illustrative relationship across platform, data and operational layers.</span>
                <span className="text-[#C9A35B]/90">Business-aligned fit</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
