"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud & Technology Overview Page: Section 03
 * CLOUD & TECHNOLOGY SERVICES (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Main Service Discovery Directory:
 * - Two clean editorial groups:
 *   Group A — CLOUD SERVICES (5 services)
 *   Group B — ENGINEERING & DEVELOPMENT (3 services)
 * - Pure typographic hairline rows linked directly to verified service routes
 * - Hover: Subtle title contrast, soft neutral row emphasis & muted-gold left hairline
 * - Zero boxed cards, zero repetitive icons, zero arrows, zero scaling or glow
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CloudServiceEntry {
  title: string;
  description: string;
  href: string;
}

interface CloudServiceGroup {
  id: string;
  groupCode: string;
  groupLabel: string;
  groupSummary: string;
  services: CloudServiceEntry[];
}

const SERVICE_GROUPS: CloudServiceGroup[] = [
  {
    id: "cloud-services",
    groupCode: "Group A",
    groupLabel: "Cloud Services",
    groupSummary: "Strategy, migration, security and ongoing operations across cloud environments.",
    services: [
      {
        title: "Cloud Consulting / Advisory",
        description: "Assess environments, define technology strategy and plan cloud adoption.",
        href: "/cloud-consulting",
      },
      {
        title: "Cloud Migration & Modernization",
        description:
          "Move and modernize workloads with attention to continuity, security and performance.",
        href: "/cloud-migration-modernization",
      },
      {
        title: "Cloud Managed Services",
        description: "Support availability, performance and ongoing cloud operations.",
        href: "/cloud-managed-services",
      },
      {
        title: "Cloud Security & Governance",
        description: "Strengthen architecture, controls, monitoring and governance.",
        href: "/cloud-security-governance",
      },
      {
        title: "Cloud Optimization",
        description:
          "Improve cloud utilization, architecture, performance and cost efficiency.",
        href: "/cloud-optimization",
      },
    ],
  },
  {
    id: "engineering-development",
    groupCode: "Group B",
    groupLabel: "Engineering & Development",
    groupSummary: "Automation pipelines, reliable data architecture and custom software engineering.",
    services: [
      {
        title: "DevOps & Automation",
        description:
          "Improve software delivery and infrastructure operations through automation.",
        href: "/devops-automation",
      },
      {
        title: "Data Engineering",
        description: "Build reliable data pipelines and foundations for analytics and AI.",
        href: "/data-engineering",
      },
      {
        title: "Software Development",
        description: "Design, build and modernize applications around business requirements.",
        href: "/software-development",
      },
    ],
  },
];

export default function CloudServicesDirectory() {
  return (
    <section
      id="cloud-technology-services"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-20 xl:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Section Masthead */}
          <div className="max-w-[800px] space-y-2.5 sm:space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our Capabilities</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06]"
              >
                Capabilities that work together.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[660px]"
            >
              Strategic advice, engineering and ongoing operational support across modern technology environments.
            </motion.p>
          </div>

          {/* Two Editorial Service Groups */}
          <div className="flex flex-col space-y-12 sm:space-y-14 lg:space-y-16">
            {SERVICE_GROUPS.map((group) => (
              <div
                key={group.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-start pt-2"
              >
                {/* Left Column: Editorial Group Label */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: transitionEase }}
                  className="lg:col-span-4 space-y-2.5 lg:pt-4"
                >
                  <div className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.12em] text-[#8E6C2A]">
                    <span>{group.groupCode}</span>
                  </div>

                  <h3 className="font-sans font-medium text-[22px] sm:text-[24px] lg:text-[26px] text-[#111312] tracking-[-0.02em] leading-[1.2]">
                    {group.groupLabel}
                  </h3>

                  <p className="font-sans text-[14.5px] sm:text-[15px] text-[#56616B] leading-[1.55] max-w-[320px]">
                    {group.groupSummary}
                  </p>
                </motion.div>

                {/* Right Column: Hairline Editorial Directory Rows */}
                <div className="lg:col-span-8 border-t border-[#0D1B2A]/[0.12]">
                  {group.services.map((service, idx) => (
                    <motion.div
                      key={service.href}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.08 }}
                      transition={{
                        duration: 0.45,
                        ease: transitionEase,
                        delay: 0.05 + idx * 0.04,
                      }}
                      className="border-b border-[#0D1B2A]/[0.08]"
                    >
                      <Link
                        href={service.href}
                        className="group relative flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 sm:gap-8 min-h-[44px] py-4 sm:py-5 pl-3.5 pr-3 sm:pl-4 sm:pr-4 rounded-[6px] transition-colors duration-200 hover:bg-[#E5E9E7] focus-visible:outline-none focus-visible:bg-[#E5E9E7]"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-1 top-3.5 bottom-3.5 w-[2px] rounded-full bg-[#C9A35B] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200"
                        />

                        <h4 className="sm:w-[44%] font-sans font-medium text-[18px] sm:text-[19px] lg:text-[20px] text-[#111312] group-hover:text-[#0B0D0C] tracking-[-0.015em] leading-[1.3] transition-colors duration-200">
                          {service.title}
                        </h4>

                        <p className="sm:w-[54%] font-sans text-[14.5px] sm:text-[15px] lg:text-[15.5px] text-[#56616B] group-hover:text-[#3A434A] leading-[1.52] font-normal transition-colors duration-200">
                          {service.description}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

