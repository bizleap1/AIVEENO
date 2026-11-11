"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Managed Services
 * SECTION 09: RELATED CAPABILITIES (#EEF1F0 Alternate Light Editorial Surface)
 * (Follows Section 07 directly while verified Section 08 Proof is omitted)
 *
 * Left Headline Anchor + Right Stacked Hairline Directory:
 * - Distinct from ConsultingRelated (3 columns) and MigrationRelated (full-width table rows)
 * - Links strictly to verified service routes:
 *   1. Cloud Security & Governance -> /cloud-security-governance
 *   2. Cloud Optimization -> /cloud-optimization
 *   3. DevOps & Automation -> /devops-automation
 * - Zero icons, zero decorative CTA arrows, subtle underline & contrast transition
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface RelatedCapability {
  title: string;
  description: string;
  href: string;
}

const RELATED_SERVICES: RelatedCapability[] = [
  {
    title: "Cloud Security & Governance",
    description:
      "Address cloud security architecture, controls and governance requirements.",
    href: "/cloud-security-governance",
  },
  {
    title: "Cloud Optimization",
    description:
      "Explore improvements in cloud utilization, performance and cost efficiency.",
    href: "/cloud-optimization",
  },
  {
    title: "DevOps & Automation",
    description:
      "Improve delivery and infrastructure operations through automation.",
    href: "/devops-automation",
  },
];

export default function ManagedRelated() {
  return (
    <section
      id="related-capabilities"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-20"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Header */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Related Expertise</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[50px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[480px]"
              >
                Connected expertise for your cloud environment.
              </motion.h2>
            </div>
          </div>

          {/* Right Column: Three Stacked Editorial Destinations */}
          <div className="lg:col-span-6 lg:col-start-7 border-t border-[#0D1B2A]/[0.14] divide-y divide-[#0D1B2A]/[0.09]">
            {RELATED_SERVICES.map((service, idx) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.48,
                  ease: transitionEase,
                  delay: 0.06 + idx * 0.07,
                }}
                className="py-6 sm:py-7 space-y-2.5"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="w-3.5 h-px bg-[#C9A35B] shrink-0 mt-[13px]"
                    aria-hidden="true"
                  />
                  <h3 className="font-sans font-medium text-[20px] sm:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.26]">
                    {service.title}
                  </h3>
                </div>

                <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.56] font-normal pl-6.5 max-w-[500px]">
                  {service.description}
                </p>

                <div className="pl-6.5 pt-0.5">
                  <Link
                    href={service.href}
                    className="inline-flex min-h-[44px] items-center font-sans text-[14.5px] font-medium text-[#111312] hover:text-[#8E6C2A] underline underline-offset-4 decoration-[#0D1B2A]/25 hover:decoration-[#C9A35B] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]"
                  >
                    <span>Explore {service.title}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

