"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Software Development
 * SECTION 07: TECHNOLOGY ECOSYSTEM (#F5F7F6 Light Editorial Surface)
 *
 * Minimal Editorial 3x2 Technology Category Index:
 * - Six architectural technology areas tailored around operational needs:
 *   1. Application Frameworks
 *   2. Backend & API Development
 *   3. Database Technologies
 *   4. Cloud Infrastructure
 *   5. Integration Technologies
 *   6. Development & Delivery Tooling
 * - Strictly excludes unapproved vendor/framework mentions, logo walls, and implied
 *   official partnerships or certifications.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface TechArea {
  title: string;
  description: string;
}

const SOFTWARE_TECH_AREAS: TechArea[] = [
  {
    title: "Application Frameworks",
    description:
      "Selected to align user workflows, interface complexity and long-term maintainability with team capabilities.",
  },
  {
    title: "Backend & API Development",
    description:
      "Structured server logic and interface layers designed for clear business rules, reliability and system interoperability.",
  },
  {
    title: "Database Technologies",
    description:
      "Chosen according to data structure, consistency needs, operational patterns and reporting demands.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Matched neutrally to existing cloud environments, security policies and evolving scalability requirements.",
  },
  {
    title: "Integration Technologies",
    description:
      "Enabling reliable exchange across business systems, legacy applications and internal services.",
  },
  {
    title: "Development & Delivery Tooling",
    description:
      "Supporting clean code practices, quality checks and sustainable software evolution over time.",
  },
];

export default function SoftwareEcosystem() {
  return (
    <section
      id="technology-ecosystem"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12">
          {/* Minimal Editorial Masthead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
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
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[540px]"
              >
                Technology chosen for the requirements.
              </motion.h2>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.12 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[500px]"
              >
                Software technologies should be selected based on architecture, integration, performance, operational needs and long-term maintainability.
              </motion.p>
            </div>
          </div>

          {/* 3-Column x 2-Row Neutral Technology Area Index */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-12 gap-y-8 sm:gap-y-10 border-t border-b border-[#0D1B2A]/[0.14] py-8 sm:py-10">
            {SOFTWARE_TECH_AREAS.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  ease: transitionEase,
                  delay: 0.05 + idx * 0.04,
                }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-px bg-[#C9A35B] shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-sans font-medium text-[18.5px] sm:text-[19.5px] text-[#111312] tracking-[-0.015em] leading-[1.28]">
                    {area.title}
                  </h3>
                </div>

                <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#56616B] leading-[1.58] font-normal pl-5 max-w-[360px]">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

