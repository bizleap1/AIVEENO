"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Optimization
 * SECTION 07: TECHNOLOGY ECOSYSTEM (#F5F7F6 Light Editorial Surface)
 *
 * Top Minimal Platform-Neutral Framing + Horizontal Three-Column Platform Register:
 * - Distinct from SecurityEcosystem (5/7 stacked split)
 * - Lists Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) neutrally
 * - Zero large platform cards, zero unverified partnerships, zero certifications or logos
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CloudOptimizationPlatform {
  name: string;
  context: string;
}

const PLATFORMS: CloudOptimizationPlatform[] = [
  {
    name: "Amazon Web Services (AWS)",
    context:
      "Optimization reflects existing AWS workloads, compute sizing, storage usage and account structure.",
  },
  {
    name: "Microsoft Azure",
    context:
      "Optimization considers Azure resource allocation, application architecture and operational requirements.",
  },
  {
    name: "Google Cloud Platform (GCP)",
    context:
      "Optimization aligns GCP infrastructure choices, utilization patterns and service performance with business needs.",
  },
];

export default function OptimizationEcosystem() {
  return (
    <section
      id="technology-ecosystem"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12">
          {/* Minimal Neutral Framing Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Technology Ecosystem</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[540px]"
              >
                Optimization depends on your environment.
              </motion.h2>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[490px]"
              >
                The appropriate optimization approach depends on the cloud platform, workloads, architecture and operating requirements.
              </motion.p>
            </div>
          </div>

          {/* Horizontal Three-Column Minimal Typographic Platform Baseline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 border-t border-[#0D1B2A]/[0.14] pt-8 sm:pt-9">
            {PLATFORMS.map((platform, idx) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.48,
                  ease: transitionEase,
                  delay: 0.06 + idx * 0.07,
                }}
                className="space-y-2 border-b md:border-b-0 border-[#0D1B2A]/[0.08] pb-6 md:pb-0 last:border-b-0 last:pb-0"
              >
                <h3 className="font-sans font-medium text-[20px] sm:text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.28]">
                  {platform.name}
                </h3>

                <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58] font-normal max-w-[360px]">
                  {platform.context}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

