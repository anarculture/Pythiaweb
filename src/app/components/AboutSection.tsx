import { FadeIn } from "./FadeIn";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import prisma from "../../imports/prisma.svg";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0E3931] text-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 md:gap-24">
        
        <div className="lg:w-1/2 hidden lg:flex items-center justify-center">
          <FadeIn delay={0.2} className="w-full max-w-sm">
            <ImageWithFallback src={prisma} alt="Prisma" className="w-full h-auto opacity-90" />
          </FadeIn>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-8 md:gap-12 ml-auto">
          <FadeIn>
            <h2 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-normal mb-4">
              About
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.4] md:leading-[1.5] font-normal tracking-[-0.01em] text-white/90">
              Pythia is a collection building practice. It works with private clients by helping them find, acquire, and craft a collection that feels true to them in the long term.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.4] md:leading-[1.5] font-normal tracking-[-0.01em] text-white/80">
              The work is personal by design. Pythia is born from a recognition that collecting is an intimate act: it narrates a story about who we are, what we value, and how we see the world. Every relationship is built around understanding not just individual acquisitions, but the vision at large.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.4] md:leading-[1.5] font-normal tracking-[-0.01em] text-white/80">
              And because life changes, so do the things we want to say with what we collect. Questions of legacy, revision, and where a collection goes after you, these are some of the conversations Pythia is built for.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.4] md:leading-[1.5] font-normal tracking-[-0.01em] text-white/80">
              The practice works across Miami, Caracas, and Madrid, with trusted partners extending through Europe, Latin America, and the United States.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.4] md:leading-[1.5] font-normal tracking-[-0.01em] text-white/80">
              Pythia is for those who sense that collecting is about more than ownership. If that resonates, this is the right place for you.
            </p>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}
