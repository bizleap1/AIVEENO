"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — About Aiveeno
 * SECTION 02: WHO WE ARE (#F5F7F6 Primary Light Editorial Surface)
 *
 * Asymmetric Editorial Identity Split:
 * - Left (~42%): Eyebrow + Display H2 ("Connecting business ambition with technology execution.")
 * - Right (~50%, offset col-start-7): One subtle top rule + two concise positioning paragraphs
 * - Pure typography, zero cards, zero icons, zero fabricated company history.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function AboutWhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Eyebrow & Editorial Headline */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3.5">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Who We Are</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[540px]"
              >
                Connecting business ambition with technology execution.
              </motion.h2>
            </div>
          </div>

          {/* Right Column: Restrained Top Divider + Two Editorial Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.52, ease: transitionEase, delay: 0.12 }}
            className="lg:col-span-6 lg:col-start-7 border-t border-[#0D1B2A]/[0.14] pt-6 sm:pt-7 lg:pt-8 space-y-5 sm:space-y-6"
          >
            <p className="font-sans text-[18px] sm:text-[19.5px] lg:text-[21px] text-[#111312] leading-[1.46] tracking-[-0.01em] font-normal max-w-[580px]">
              Aiveeno brings together business-first AI transformation and the cloud, data and engineering capabilities needed to support it.
            </p>

            <p className="font-sans text-[16px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[580px]">
              Our focus is on understanding operational needs, identifying relevant opportunities and shaping practical technology solutions.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

