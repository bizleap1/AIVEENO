"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — About Aiveeno
 * SECTION 03: OUR PERSPECTIVE (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Full-Width Editorial Statement Composition (NOT a two-column split):
 * - Large expansive full-width display statement carried by strong typography & negative space.
 * - Restrained offset supporting text block underneath with two concise paragraphs.
 * - Zero diagrams, zero boxed cards, zero hover effects.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function AboutPerspective() {
  return (
    <section
      id="our-perspective"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-16 sm:py-20 lg:py-28"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-16">
          {/* Full-Width Eyebrow & Commanding Display Statement */}
          <div className="max-w-[1040px] space-y-3 sm:space-y-4">
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
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.58, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[44px] lg:text-[54px] xl:text-[60px] text-[#111312] tracking-[-0.032em] leading-[1.06]"
              >
                The business problem comes before the technology.
              </motion.h2>
            </div>
          </div>

          {/* Restrained Architectural Hairline & Single Offset Supporting Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, ease: transitionEase, delay: 0.14 }}
            className="border-t border-[#0D1B2A]/[0.14] pt-8 sm:pt-10 lg:pl-[28%] xl:pl-[34%]"
          >
            <div className="max-w-[660px] space-y-5">
              <div className="w-9 h-[2px] bg-[#C9A35B]" aria-hidden="true" />

              <p className="font-sans text-[17.5px] sm:text-[18.5px] lg:text-[20px] text-[#111312] leading-[1.48] tracking-[-0.01em] font-normal">
                Meaningful transformation begins with understanding how an organization operates, where its challenges exist and what change should accomplish.
              </p>

              <p className="font-sans text-[16px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal">
                AI, cloud and software are enabling capabilities. Their value depends on how effectively they support business needs.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

