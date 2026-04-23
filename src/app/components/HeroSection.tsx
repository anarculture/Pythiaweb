import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

export function HeroSection() {
  return (
    <section id="about" className="min-h-[100svh] relative flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-[#0E3931] text-white overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto mt-24">
        <FadeIn className="max-w-4xl">
          <h1 className="lg:text-[4.5rem] leading-[1.1] md:leading-[1.1] font-normal tracking-[-0.02em] mb-12 lg:mb-20 text-[48px]">
            Pythia is an independent art advisory working with private collectors and corporations on acquisitions, sales, commissions, and long-term collection strategy.
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2} className="max-w-lg md:max-w-xl">
          <p className="text-base md:text-lg lg:text-xl leading-[1.4] text-white/80 font-normal">
            Pythia is for those who sense that collecting is about more than ownership. If something in you already knows that, this practice is likely for you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
