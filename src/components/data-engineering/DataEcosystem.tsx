"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Data Engineering
 * SECTION 07: TECHNOLOGY ECOSYSTEM (#F5F7F6 Light Editorial Surface)
 *
 * Architectural Category Register:
 * - Left Column (~42%): Environment-neutral framing + neutral reference to AWS, Azure & GCP.
 * - Right Column (~54%): Five generic technology categories without unverified vendor claims,
 *   logos, certifications, or specific unverified stacks (e.g., no Snowflake, Databricks, Kafka,
 *   Flink, Iceberg, Delta, or vector DB bragging).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface EcosystemCategory {
  title: string;
  description: string;
}

const DATA_TECHNOLOGY_CATEGORIES: EcosystemCategory[] = [
  {
    title: "Data Integration & Pipeline Tools",
    description:
      "Supporting structured movement and connectivity across operational applications, databases and source systems.",
  },
  {
    title: "ETL/ELT Processing",
    description:
      "Organizing extraction, transformation and loading workflows aligned with downstream reporting and analytical needs.",
  },
  {
    title: "Data Warehouses",
    description:
      "Establishing structured storage foundations designed for consistent business intelligence and analytical workloads.",
  },
  {
    title: "Data Lakes",
    description:
      "Supporting organized storage approaches across varied forms of structured and semi-structured business information.",
  },
  {
    title: "Cloud Data Platforms",
    description:
      "Aligning platform architecture neutrally across Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) and existing environments.",
  },
];

export default function DataEcosystem() {
  return (
    <section
      id="technology-ecosystem"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Framing Column */}
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
              The right data architecture depends on the environment.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.12 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[470px] pt-1"
            >
              Technology choices should reflect data sources, processing requirements, storage needs, analytical workloads and the existing technology landscape.
            </motion.p>
          </div>

          {/* Right Open Generic Technology Categories Index */}
          <div className="lg:col-span-6 lg:col-start-7 border-t border-b border-[#0D1B2A]/[0.14] divide-y divide-[#0D1B2A]/[0.10]">
            {DATA_TECHNOLOGY_CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  ease: transitionEase,
                  delay: 0.05 + idx * 0.05,
                }}
                className="py-5 sm:py-6 space-y-1.5"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-px bg-[#C9A35B] shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-sans font-medium text-[18px] sm:text-[19px] text-[#111312] tracking-[-0.015em] leading-[1.3]">
                    {category.title}
                  </h3>
                </div>

                <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#56616B] leading-[1.58] font-normal pl-5 max-w-[540px]">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

