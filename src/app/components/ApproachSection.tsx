import { FadeIn } from "./FadeIn";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ApproachSection() {
  const blocks = [
    {
      title: "Acquisitions & Sales",
      desc: "Private access to primary and secondary market opportunities, negotiated with discretion. Due diligence, provenance review, and condition reporting are handled end to end."
    },
    {
      title: "Collection Strategy",
      desc: "Long-term guidance on building, refining, and stewarding a collection — whether personal, institutional, or corporate. Includes valuation reviews, insurance coordination, and legacy planning."
    },
    {
      title: "Commissions & Placement",
      desc: "Direct work with artists and studios on commissioned pieces, site-specific installations, and the curation of works within private residences and corporate environments."
    }
  ];

  return (
    <section id="approach" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0E3931] text-white">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-24">
        
        <div className="max-w-4xl">
          <FadeIn>
            <h2 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-normal mb-12">
              Approach
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-[20px] md:text-[24px] lg:text-[28px] leading-[1.4] md:leading-[1.4] font-normal tracking-[-0.01em] text-white/90 max-w-3xl">
              Pythia is built on long relationships and considered judgment. Every engagement begins with listening — to the collector, the context, and the work itself — before anything is proposed, acquired, or placed.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 pt-12 md:pt-24 border-t border-white/20">
          {blocks.map((block, i) => (
            <FadeIn key={i} delay={0.2 + (i * 0.1)} className="flex flex-col gap-6">
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
                 src="https://images.unsplash.com/photo-1733565823568-b9cf42f95308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbGFuZHNjYXBlJTIwcGhvdG9ncmFwaHklMjBtdXRlZHxlbnwxfHx8fDE3NzY5NzY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
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
