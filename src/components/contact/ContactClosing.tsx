"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Contact / Book a Discovery Call (/contact)
 * SECTION 04: CLOSING STATEMENT (#F5F7F6 Light Editorial -> Dark Graphite Footer)
 *
 * Compact reassurance block without a duplicate form, competing CTA, or
 * unverified contact details.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function ContactClosing() {
  return (
    <section
      id="contact-closing"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-12 sm:py-16 lg:py-20"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: transitionEase }}
          className="max-w-[780px] border-l border-[#0D1B2A]/[0.16] pl-5 sm:pl-8 space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2.5 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]">
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>Deliberate Engagement</span>
          </div>

          <h2 className="font-sans font-medium text-[26px] min-[390px]:text-[28px] sm:text-[34px] lg:text-[38px] text-[#111312] tracking-[-0.025em] leading-[1.12]">
            The right next step starts with understanding.
          </h2>

          <p className="font-sans text-[15.5px] sm:text-[16.5px] text-[#56616B] leading-[1.6] font-normal max-w-[620px]">
            Whether you are evaluating AI opportunities or planning cloud and technology change, a focused conversation helps establish clarity before commitment.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

