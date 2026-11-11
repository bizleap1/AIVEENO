"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud & Technology Overview Page: Section 02
 * OUR PERSPECTIVE (#F5F7F6 Primary Light Editorial Surface)
 *
 * Compact asymmetric editorial split:
 * - Left: Eyebrow with muted-gold dash + Display H2 (48–54px desktop / 34–38px mobile)
 * - Right: Restraint-led two-paragraph business perspective anchored by one clean divider
 * - Zero cards, zero icons, zero decorative graphics
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function CloudPerspective() {
  return (
    <section
      id="our-perspective"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-12 sm:py-14 lg:py-16 xl:py-18"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
          {/* Left Column: Eyebrow & Editorial Headline */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3.5">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our Perspective</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[600px]"
              >
                Technology decisions should start with business priorities.
              </motion.h2>
            </div>
          </div>

          {/* Right Column: Concise Explanation with Single Restrained Divider */}
          <div className="lg:col-span-6 border-t border-[#0D1B2A]/[0.10] pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-10 xl:pl-14">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="space-y-4 sm:space-y-4.5 max-w-[560px]"
            >
              <p className="font-sans text-[17px] sm:text-[18px] lg:text-[19.5px] xl:text-[20px] text-[#111312] leading-[1.48] tracking-[-0.01em] font-normal">
                Cloud and engineering investments should support how an organization operates, scales and adapts.
              </p>

              <p className="font-sans text-[15.5px] sm:text-[16px] lg:text-[17px] text-[#56616B] leading-[1.6] font-normal">
                The right approach considers architecture, security, performance and long-term operational needs together.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

