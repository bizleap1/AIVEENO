"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Consulting / Advisory
 * SECTION 07: TECHNOLOGY ECOSYSTEM (#F5F7F6 Light Editorial Surface)
 *
 * Minimal Technology-Neutral Platform Consideration Register:
 * - Lists AWS, Microsoft Azure, and Google Cloud Platform neutrally
 * - Zero vendor logos, zero official partnership claims, zero certifications
 * - Pure open typography + restrained top rules + simple fade reveals
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CloudPlatformExample {
  name: string;
  evaluationContext: string;
}

const PLATFORM_EXAMPLES: CloudPlatformExample[] = [
  {
    name: "Amazon Web Services (AWS)",
    evaluationContext:
      "Evaluated against compute breadth, network isolation requirements and existing operational tooling.",
  },
  {
    name: "Microsoft Azure",
    evaluationContext:
      "Evaluated alongside enterprise identity directories, hybrid estates and application integration needs.",
  },
  {
    name: "Google Cloud Platform (GCP)",
    evaluationContext:
      "Evaluated for data engineering workloads, analytics pipelines and containerized platform architectures.",
  },
];

export default function ConsultingEcosystem() {
  return (
    <section
      id="technology-ecosystem"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-20"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="max-w-[780px] space-y-2.5 sm:space-y-3">
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
              className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06]"
            >
              The right platform for the right requirement.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[660px]"
            >
              Platform decisions depend on architecture, workload needs, existing technology, security considerations and business priorities.
            </motion.p>
          </div>

          {/* Neutral Three-Platform Register */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 border-t border-[#0D1B2A]/[0.12] pt-8 sm:pt-9">
            {PLATFORM_EXAMPLES.map((platform, idx) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.08 + idx * 0.08,
                }}
                className="space-y-2.5 border-b md:border-b-0 border-[#0D1B2A]/[0.08] pb-6 md:pb-0 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-[#8E6C2A]">
                  <span>Platform Option</span>
                </div>

                <h3 className="font-sans font-medium text-[20px] sm:text-[22px] lg:text-[23px] text-[#111312] tracking-[-0.02em] leading-[1.25]">
                  {platform.name}
                </h3>

                <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#56616B] leading-[1.56] font-normal max-w-[360px]">
                  {platform.evaluationContext}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Technology-Neutral Framing Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: transitionEase, delay: 0.18 }}
            className="pt-2 border-t border-[#0D1B2A]/[0.08]"
          >
            <p className="font-sans text-[13.5px] sm:text-[14px] text-[#56616B] leading-[1.55]">
              Recommendations remain objective and independent — shaped by architecture suitability, governance requirements and operational maintainability.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

