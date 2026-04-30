import { FadeIn } from "./FadeIn";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white text-[#0E3931]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24">
        
        <div className="max-w-4xl">
          <FadeIn>
            <h2 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-normal mb-12">
              About
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-[24px] md:text-[28px] lg:text-[32px] leading-[1.3] md:leading-[1.4] font-normal tracking-[-0.01em] text-[#0E3931]/90">
              Pythia is a collection building practice. It works with private clients by helping them find, acquire, and craft a collection that feels true to them in the long term.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 md:pt-16 border-t border-[#0E3931]/20">
          <FadeIn delay={0.2} className="flex flex-col gap-6">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium text-[#0E3931]/50">
              Intimacy & Vision
            </span>
            <p className="text-base md:text-[17px] leading-[1.6] text-[#0E3931]/90">
              The work is personal by design. Pythia is born from a recognition that collecting is an intimate act: it narrates a story about who we are, what we value, and how we see the world. Every relationship is built around understanding not just individual acquisitions, but the vision at large.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3} className="flex flex-col gap-6">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium text-[#0E3931]/50">
              Evolution & Legacy
            </span>
            <p className="text-base md:text-[17px] leading-[1.6] text-[#0E3931]/90">
              And because life changes, so do the things we want to say with what we collect. Questions of legacy, revision, and where a collection goes after you, these are some of the conversations Pythia is built for.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex flex-col gap-6">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium text-[#0E3931]/50">
              Global Presence
            </span>
            <p className="text-base md:text-[17px] leading-[1.6] text-[#0E3931]/90">
              The practice works across Miami, Caracas, and Madrid, with trusted partners extending through Europe, Latin America, and the United States.
            </p>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}
