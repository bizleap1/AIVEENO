"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Security & Governance
 * SECTION 07: TECHNOLOGY ECOSYSTEM (#F5F7F6 Light Editorial Surface)
 *
 * Compact Left Editorial Anchor + Right Neutral Cloud Platform Register:
 * - Mentions AWS, Microsoft Azure, Google Cloud Platform neutrally
 * - Zero vendor logos, zero partnership claims, zero security certifications,
 *   zero platform authorization endorsements
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CloudPlatformSecurityContext {
  name: string;
  context: string;
}

const PLATFORM_CONTEXTS: CloudPlatformSecurityContext[] = [
  {
    name: "Amazon Web Services (AWS)",
    context:
      "Considered where identity boundaries, account structures, configuration controls and operational monitoring operate across AWS environments.",
  },
  {
    name: "Microsoft Azure",
    context:
      "Considered where enterprise identity integration, subscription governance and network segmentation shape security controls on Azure.",
  },
  {
    name: "Google Cloud Platform (GCP)",
    context:
      "Considered where organization policies, resource hierarchy, workload isolation and monitoring requirements guide GCP security practices.",
  },
];

export default function SecurityEcosystem() {
  return (
    <section
      id="technology-ecosystem"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Neutral Framing */}
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
              Security shaped by your cloud environment.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[480px] pt-1"
            >
              Security architecture and governance requirements depend on the platforms, systems and operational practices within each organization.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.48, ease: transitionEase, delay: 0.2 }}
              className="font-sans text-[13.5px] sm:text-[14px] text-[#56616B] leading-[1.55] pt-3 border-t border-[#0D1B2A]/[0.09] max-w-[460px]"
            >
              Security and governance considerations follow your existing cloud footprint and organizational policies without vendor preference.
            </motion.p>
          </div>

          {/* Right Column: Clean Minimal Platform List */}
          <div className="lg:col-span-6 lg:col-start-7 border-t border-[#0D1B2A]/[0.14] divide-y divide-[#0D1B2A]/[0.09]">
            {PLATFORM_CONTEXTS.map((platform, idx) => (
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
                className="py-6 sm:py-7 space-y-2"
              >
                <h3 className="font-sans font-medium text-[20px] sm:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.26]">
                  {platform.name}
                </h3>

                <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58] font-normal max-w-[540px]">
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

