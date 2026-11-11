"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud & Technology Overview Page: Section 07
 * FINAL CTA (#F5F7F6 Primary Light Surface -> Dark Graphite Global Footer #111312)
 *
 * Compact Asymmetric Editorial Split:
 * - Left Column (~56%): Eyebrow with muted-gold dash ("LET'S TALK TECHNOLOGY") + H2
 * - Desktop Vertical Hairline Divider
 * - Right Column (~38%): Description + primary CTA ("Discuss Your Cloud Strategy")
 * - Subtle tonal transition on hover; zero CTA arrows, zero scaling/glow
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CloudCtaProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function CloudCta({ onOpenDiscoveryModal }: CloudCtaProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("Cloud & Technology Overview Final CTA");
    } else {
      router.push("/contact");
    }
  };

  return (
    <section
      id="cloud-cta"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-12 sm:py-14 lg:py-16 xl:py-18"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8 xl:gap-12">
          {/* Left Column: Eyebrow & Headline */}
          <div className="lg:w-[56%] pb-5 lg:pb-0 border-b lg:border-b-0 border-[#0D1B2A]/[0.08] space-y-2.5 sm:space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[10.5px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Let&apos;s Talk Technology</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.08] max-w-[620px]"
              >
                Let&apos;s discuss your technology priorities.
              </motion.h2>
            </div>
          </div>

          {/* Vertical Divider on Desktop */}
          <div
            className="hidden lg:block w-px self-stretch bg-[#0D1B2A]/[0.10] min-h-[140px] my-1 shrink-0"
            aria-hidden="true"
          />

          {/* Right Column: Supporting Copy & CTA */}
          <div className="lg:w-[38%] flex flex-col justify-center space-y-4 sm:space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[16px] sm:text-[16.5px] lg:text-[17px] text-[#56616B] leading-[1.58] font-normal max-w-[440px]"
            >
              Explore how cloud, data and engineering capabilities could support your organization&apos;s next stage of growth and modernization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase, delay: 0.2 }}
            >
              <button
                type="button"
                onClick={handleCtaClick}
                className="inline-flex h-[50px] sm:h-[52px] w-full sm:w-auto items-center justify-center rounded-[4px] bg-[#111312] px-8 text-[14.5px] font-sans font-medium text-[#F5F7F6] border border-[#111312] hover:bg-[#222624] hover:border-[#222624] transition-colors duration-200 cursor-pointer text-center select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]"
                aria-label="Discuss Your Cloud Strategy"
              >
                Discuss Your Cloud Strategy
              </button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

