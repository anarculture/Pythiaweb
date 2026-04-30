import image_b3c8bff50d82f4d069e16505822248369b7f2bc4 from 'figma:asset/b3c8bff50d82f4d069e16505822248369b7f2bc4.png'
import { FadeIn } from "./FadeIn";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ApproachSection() {
  const blocks = [
    {
      title: "Acquisitions and Sales",
      desc: "Pythia looks at what a client is drawn to, what they already own, and where they want to go. From this initial engagement, the process covers it all: from research and sourcing to logistics and installation. Sales, leases, and donations are handled with the same care, including guidance on timing, placement, and long-term impact."
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
    <section id="practice" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0E3931] text-white">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24">
        
        <div className="max-w-4xl">
          <FadeIn>
            <h2 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-normal">
              Practice
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 pt-12 md:pt-16 border-t border-white/20">
          {blocks.map((block, i) => (
            <FadeIn key={i} delay={0.1 + (i * 0.1)} className="flex flex-col gap-6">
              <h3 className="text-[11px] md:text-xs uppercase tracking-[0.15em] font-medium text-white/70">
                {block.title}
              </h3>
              <p className="text-base md:text-[17px] leading-[1.6] text-white/90">
                {block.desc}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="pt-24 md:pt-40 flex justify-center">
          <div className="w-full max-w-5xl p-6 md:p-12 lg:p-16 border border-white/10 bg-black/10 rounded-[2px]">
             <div className="w-full aspect-[21/9] overflow-hidden rounded-[2px]">
               <ImageWithFallback 
                 src={image_b3c8bff50d82f4d069e16505822248369b7f2bc4} 
                 alt="Landscape Visual Pause" 
                 className="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-[2s] ease-out"
               />
             </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
