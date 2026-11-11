"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Optimization
 * SECTION 09: RELATED CAPABILITIES (#EEF1F0 Alternate Light Editorial Surface)
 * (Directly follows Section 07 while Section 08 Verified Proof is omitted)
 *
 * Valid Verified Service Destinations:
 * - Cloud Managed Services -> /cloud-managed-services
 * - Cloud Consulting / Advisory -> /cloud-consulting
 * - Cloud Migration & Modernization -> /cloud-migration-modernization
 * - Zero oversized cards, zero generic icons, zero decorative arrows
 * - Subtle 180–220ms underline and contrast transition
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

const RELATED_SERVICES: RelatedService[] = [
  {
    title: "Cloud Managed Services",
    description:
      "Support ongoing operations, performance and cloud environment management.",
    href: "/cloud-managed-services",
  },
  {
    title: "Cloud Consulting / Advisory",
    description:
      "Align cloud architecture and strategy with business priorities.",
    href: "/cloud-consulting",
  },
  {
    title: "Cloud Migration & Modernization",
    description:
      "Consider modernization opportunities alongside infrastructure transitions.",
    href: "/cloud-migration-modernization",
  },
];

export default function OptimizationRelated() {
  return (
    <section
      id="related-capabilities"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-20"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12">
          {/* Header */}
          <div className="max-w-[740px] space-y-2.5 sm:space-y-3">
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
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06]"
              >
                Optimization works best with the right foundations.
              </motion.h2>
            </div>
          </div>

          {/* Three Spacious Editorial Navigation Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 border-t border-[#0D1B2A]/[0.14] pt-8 sm:pt-9">
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
                className="flex flex-col justify-between space-y-4 border-b md:border-b-0 border-[#0D1B2A]/[0.08] pb-7 md:pb-0 last:border-b-0 last:pb-0"
              >
                <div className="space-y-2.5">
                  <div className="w-4 h-px bg-[#C9A35B]" aria-hidden="true" />

                  <h3 className="font-sans font-medium text-[20px] sm:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.28] pt-0.5">
                    {service.title}
                  </h3>

                  <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.56] font-normal max-w-[340px]">
                    {service.description}
                  </p>
                </div>

                <div>
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

