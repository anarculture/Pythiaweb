import { FadeIn } from "./FadeIn";
export function ApproachSection() {
  const blocks = [
    {
      title: "Acquisitions and Sales",
      desc: "Pythia looks at what a client is drawn to, what they already own, and where they want to go. From this initial engagement, the process covers it all: from getting started, to research and sourcing, to logistics and installation. Sales, leases, and donations are handled with the same care, including guidance on timing, placement, and long-term impact."
    },
    {
      title: "Collection Strategy",
      desc: "Looking beyond individual works, Pythia helps establish and refine a collection's vision over time. This includes grounding its identity and thinking through questions of legacy: what it stands for now, and what will happen to it tomorrow."
    },
    {
      title: "Commissions and Placements",
      desc: "At times, the right work doesn't exist yet, or the context calls for a unique approach. Pythia facilitates these conversations with artists and galleries, and works closely with interior designers, developers, architecture studios, and corporate clients looking to integrate art into their spaces in a way that feels considered rather than decorative."
    }
  ];

  return (
    <section id="practice" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white text-[#0E3931]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24">
        
        <div className="max-w-4xl">
          <FadeIn>
            <h2 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-normal">
              Practice
            </h2>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-12 md:gap-16 pt-12 md:pt-16 border-t border-[#0E3931]/20">
          {blocks.map((block, i) => (
            <FadeIn key={i} delay={0.1 + (i * 0.1)} className="flex flex-col gap-6">
              <h3 className="text-[11px] md:text-xs uppercase tracking-[0.15em] font-medium text-[#0E3931]/70">
                {block.title}
              </h3>
              <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.4] md:leading-[1.5] font-normal tracking-[-0.01em] text-[#0E3931]/90">
                {block.desc}
              </p>
            </FadeIn>
          ))}
        </div>


      </div>
    </section>
  );
}
