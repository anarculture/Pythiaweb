import { FadeIn } from "./FadeIn";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white text-[#0E3931] flex flex-col justify-between min-h-[70vh]">
      <div className="max-w-[1440px] w-full mx-auto flex-grow flex flex-col justify-center">
        <FadeIn className="max-w-3xl flex flex-col gap-12">
          <h2 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-normal">
            Contact
          </h2>
          
          <div className="text-[20px] md:text-[24px] lg:text-[28px] leading-[1.4] md:leading-[1.4] font-normal tracking-[-0.01em] flex flex-col gap-8">
            <p>
              For inquiries, please write to{" "}
              <a href="mailto:info@pythia.com" className="hover:opacity-60 transition-opacity border-b border-[#0E3931]/30 pb-1">
                info@pythia.com
              </a>{" "}
              or call <span className="whitespace-nowrap">+1 (000) 000-0000</span>.
            </p>
            <p className="text-base md:text-lg text-[#0E3931]/70">
              All correspondence is treated with complete discretion.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="max-w-[1440px] w-full mx-auto mt-24">
        <FadeIn delay={0.2} className="w-full">
          <div className="w-full h-[1px] bg-[#0E3931]/20 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#0E3931]/80">
            <p>Pythia · Miami · Madrid · Caracas</p>
            <p>© 2026 Pythia Art Advisory</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
