"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Managed Services
 * SECTION 07: TECHNOLOGY ECOSYSTEM (#F5F7F6 Light Editorial Surface)
 *
 * Compact Top Editorial Masthead + Balanced Three-Platform Strip:
 * - Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)
 * - Clean neutral framing with vertical hairline separators on desktop
 * - Zero vendor logos, zero integration guarantees, zero unsupported certifications
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CloudPlatformContext {
  name: string;
  operationalNote: string;
}

const CLOUD_PLATFORMS: CloudPlatformContext[] = [
  {
    name: "Amazon Web Services (AWS)",
    operationalNote:
      "Supported where workloads, infrastructure services and access governance operate within AWS environments.",
  },
  {
    name: "Microsoft Azure",
    operationalNote:
      "Supported where enterprise identity estates, hybrid connections and application workloads run across Azure.",
  },
  {
    name: "Google Cloud Platform (GCP)",
    operationalNote:
      "Supported where containerized applications, data workloads and cloud services operate on GCP.",
  },
];

export default function ManagedEcosystem() {
  return (
    <section
      id="technology-ecosystem"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-20"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12">
          {/* Masthead Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
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
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
              >
                Management aligned with your cloud environment.
              </motion.h2>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[490px]"
              >
                Operational requirements depend on the platforms, workloads, architecture and technologies an organization uses.
              </motion.p>
            </div>
          </div>

          {/* Neutral Three-Platform Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#0D1B2A]/[0.12]">
            {CLOUD_PLATFORMS.map((platform, idx) => (
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
                className={`py-7 sm:py-8 space-y-2.5 ${
                  idx > 0
                    ? "border-t md:border-t-0 md:border-l border-[#0D1B2A]/[0.09] md:pl-8 lg:pl-10"
                    : "md:pr-8 lg:pr-10"
                } ${idx === 1 ? "md:pr-8 lg:pr-10" : ""}`}
              >
                <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#8E6C2A]">
                  Platform Context
                </span>

                <h3 className="font-sans font-medium text-[20px] sm:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.26]">
                  {platform.name}
                </h3>

                <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58] font-normal max-w-[360px]">
                  {platform.operationalNote}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Technology-Neutral Framing Qualifier */}
          <div className="pt-3 border-t border-[#0D1B2A]/[0.08]">
            <p className="font-sans text-[13.5px] sm:text-[14px] text-[#56616B] leading-[1.55]">
              Operational practices adapt to the client&apos;s existing cloud footprint, architecture and agreed responsibilities without proprietary tooling mandates.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

