"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Migration & Modernization
 * SECTION 07: TECHNOLOGY ECOSYSTEM (#F5F7F6 Light Editorial Surface)
 *
 * Asymmetric Left-Header + Right Stacked Platform Ledger:
 * - Distinct from ConsultingEcosystem's 3-column horizontal grid below header
 * - Neutral platform evaluation across AWS, Microsoft Azure, and Google Cloud Platform
 * - Zero vendor logos, zero partnership claims, zero certifications, zero vendor preferences
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CloudEnvironmentOption {
  name: string;
  migrationContext: string;
}

const CLOUD_ENVIRONMENTS: CloudEnvironmentOption[] = [
  {
    name: "Amazon Web Services (AWS)",
    migrationContext:
      "Considered where workload architectures, network topologies and existing operational tooling align with AWS compute, storage and application environments.",
  },
  {
    name: "Microsoft Azure",
    migrationContext:
      "Considered where enterprise directory alignment, hybrid infrastructure requirements and existing Microsoft application estates shape the transition.",
  },
  {
    name: "Google Cloud Platform (GCP)",
    migrationContext:
      "Considered where containerized application modernization, data pipelines and platform engineering workflows define target architecture priorities.",
  },
];

export default function MigrationEcosystem() {
  return (
    <section
      id="technology-ecosystem"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Technology-Neutral Editorial Context */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
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
              className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[520px]"
            >
              Migration choices depend on the environment.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[480px] pt-1"
            >
              Migration and modernization decisions are shaped by existing infrastructure, application architecture, security requirements and target cloud capabilities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.48, ease: transitionEase, delay: 0.2 }}
              className="font-sans text-[13.5px] sm:text-[14px] text-[#56616B] leading-[1.55] pt-3 border-t border-[#0D1B2A]/[0.09] max-w-[460px]"
            >
              Architecture decisions remain vendor-neutral and driven by workload fit, security posture and operational sustainability.
            </motion.p>
          </div>

          {/* Right Column: Clean Neutral Platform Ledger */}
          <div className="lg:col-span-6 lg:col-start-7 border-t border-[#0D1B2A]/[0.12]">
            {CLOUD_ENVIRONMENTS.map((env, idx) => (
              <motion.div
                key={env.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.08 + idx * 0.08,
                }}
                className="py-6 sm:py-7 border-b border-[#0D1B2A]/[0.09] space-y-2"
              >
                <div className="flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-[#8E6C2A]">
                  <span>Cloud Environment</span>
                </div>

                <h3 className="font-sans font-medium text-[20px] sm:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.26]">
                  {env.name}
                </h3>

                <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58] font-normal max-w-[540px]">
                  {env.migrationContext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

