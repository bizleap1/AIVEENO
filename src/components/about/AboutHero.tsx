"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — About Aiveeno (/about)
 * SECTION 01: HERO (#111312 Dark Graphite Editorial Surface)
 *
 * Pure Asymmetric Typography-First Executive Identity:
 * - Zero technical diagrams, zero office stock imagery, zero floating geometry.
 * - Left ~60% (7 cols): Commanding Display Headline (58–64px desktop / 36–40px mobile).
 * - Right ~40% (5 cols): Restrained architectural hairline rule + positioning description + CTA.
 * - Fits comfortably above the fold at 100% browser zoom without forced 100vh.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface AboutHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function AboutHero({ onOpenDiscoveryModal }: AboutHeroProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("About Aiveeno Hero");
    } else {
      router.push("/contact");
    }
  };

  return (
    <div className="relative w-full bg-[#111312] text-[#F5F7F6] pt-[62px] lg:pt-[66px]">
      <section className="relative w-full pt-10 sm:pt-14 lg:pt-20 xl:pt-24 pb-24 sm:pb-24 lg:pb-28 xl:pb-32 border-b border-white/[0.08] overflow-hidden">
        <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0.9, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, ease: transitionEase, delay: 0.05 }}
              className="inline-flex items-center gap-2.5 text-[12px] sm:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
            >
              <span className="w-4 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>About Aiveeno</span>
            </motion.div>

            {/* Asymmetric Typography-First Grid (Headline ~60% Left / Support & CTA ~40% Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-9 lg:gap-12 xl:gap-16 items-end">
              {/* Left (~60%): Large Editorial Headline */}
              <div className="lg:col-span-7">
                <motion.h1
                  initial={{ opacity: 0.88, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.56, ease: transitionEase, delay: 0.12 }}
                  className="font-sans font-medium text-[36px] min-[390px]:text-[38px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] text-[#F5F7F6] tracking-[-0.035em] leading-[1.04] max-w-[760px]"
                >
                  Business-first thinking. Technology built for change.
                </motion.h1>
              </div>

              {/* Right (~40%): Restrained Gold Datum + Description + CTA */}
              <div className="lg:col-span-5 lg:border-l lg:border-white/[0.12] lg:pl-10 xl:pl-12 flex flex-col space-y-5 sm:space-y-6">
                <div
                  className="w-8 h-px bg-[#C9A35B]/85 hidden lg:block"
                  aria-hidden="true"
                />

                <motion.p
                  initial={{ opacity: 0.9, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.46, ease: transitionEase, delay: 0.24 }}
                  className="font-sans text-[16px] sm:text-[17px] lg:text-[18.5px] xl:text-[19px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[500px]"
                >
                  We connect AI-led business transformation with cloud, data and engineering capabilities to help organizations approach technology change with clarity and purpose.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0.9, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: transitionEase, delay: 0.34 }}
                  className="pt-1"
                >
                  <button
                    type="button"
                    onClick={handleCtaClick}
                    className="inline-flex min-h-[50px] sm:min-h-[52px] py-2.5 items-center justify-center rounded-[4px] bg-[#202522] hover:bg-[#28302A] border border-white/[0.28] hover:border-[#C9A35B]/80 text-[#F5F7F6] px-6 sm:px-9 text-[14.5px] sm:text-[15.5px] font-sans font-medium tracking-[0.01em] transition-colors duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.35)] w-full sm:w-auto text-center select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]"
                    aria-label="Book a Discovery Call"
                  >
                    Book a Discovery Call
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

