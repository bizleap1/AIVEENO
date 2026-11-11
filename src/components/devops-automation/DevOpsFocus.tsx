"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — DevOps & Automation
 * SECTION 03: WHAT WE DO (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Connected Scope Composition:
 * - Left Anchor (~42%): Eyebrow, H2 ("Connect development with delivery."), editorial description.
 * - Right (~54%): Interlocking bridge layout uniting delivery pipelines & infrastructure ops:
 *   Top span: STREAMLINE DELIVERY
 *   Paired underneath: AUTOMATE INFRASTRUCTURE OPERATIONS | IMPROVE DELIVERY PRACTICES
 * - Zero generic 3-step timelines, zero boxed cards, zero hover effects.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function DevOpsFocus() {
  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Editorial Statement Anchor */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our DevOps Approach</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[500px]"
              >
                Connect development with delivery.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[16px] sm:text-[17px] lg:text-[18px] text-[#56616B] leading-[1.58] font-normal max-w-[470px] pt-1"
            >
              We help organizations evaluate software delivery practices and introduce automation where it can improve repeatability, coordination and operational consistency.
            </motion.p>
          </div>

          {/* Right Interlocking Development, Delivery & Infrastructure Focus Relationship */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col space-y-8 border-t border-[#0D1B2A]/[0.15] pt-7">
            {/* Upper Connecting Focus Band */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.08 }}
              className="space-y-2.5 pb-7 border-b border-[#0D1B2A]/[0.12]"
            >
              <div className="inline-flex items-center gap-2.5">
                <span className="w-4 h-[2px] bg-[#C9A35B]" aria-hidden="true" />
                <h3 className="font-sans text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  Streamline Delivery
                </h3>
              </div>

              <p className="font-sans text-[19px] sm:text-[21px] text-[#111312] leading-[1.42] tracking-[-0.015em] font-medium max-w-[560px]">
                Review development and release workflows to identify practical automation opportunities.
              </p>
            </motion.div>

            {/* Lower Paired Operations & Practice Disciplines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.15 }}
                className="space-y-2.5 border-l-2 border-[#C9A35B]/75 pl-4 sm:pl-5"
              >
                <h3 className="font-sans text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  Automate Infrastructure Operations
                </h3>
                <p className="font-sans text-[15.5px] sm:text-[16.5px] text-[#111312] leading-[1.52] font-normal">
                  Apply Infrastructure as Code and suitable automation practices to relevant infrastructure management activities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.22 }}
                className="space-y-2.5 border-l-2 border-[#0D1B2A]/[0.2] pl-4 sm:pl-5"
              >
                <h3 className="font-sans text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.13em] text-[#56616B]">
                  Improve Delivery Practices
                </h3>
                <p className="font-sans text-[15.5px] sm:text-[16.5px] text-[#111312] leading-[1.52] font-normal">
                  Support more consistent testing, deployment and ongoing workflow refinement.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

