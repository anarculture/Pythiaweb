import { FadeIn } from "./FadeIn";

export function HeroSection() {
  return (
    <section id="top" className="min-h-[100svh] relative flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-[#0E3931] text-white overflow-hidden py-32">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 mt-16">
        <div className="lg:w-1/2 ml-auto">
          <FadeIn>
            <h1 className="lg:text-[4.5rem] leading-[1.15] md:leading-[1.1] tracking-[-0.02em] text-[24px] p-[0px] m-[0px] font-normal text-right">
              Pythia is a collection building practice.
            </h1>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
