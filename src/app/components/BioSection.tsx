import { FadeIn } from "./FadeIn";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import p3 from "../../imports/p3.png";

export function BioSection() {
  return (
    <section id="bio" className="min-h-screen py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white text-[#0E3931]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="lg:w-1/2 flex flex-col">
          <FadeIn>
            <h2 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-normal mb-12">
              Francesca De Filippo
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="prose prose-lg text-[#0E3931] text-[17px] md:text-[20px] leading-[1.6] md:leading-[1.7] max-w-xl flex flex-col gap-6">
              <p>
                Francesca De Filippo is an independent art advisor with over a decade of experience across the art market and international business. She holds a Postgraduate Diploma and a Masters in Art History from the Courtauld Institute of Art in London, where she specialised in Alternative Art in Eastern Europe and Latin America during the Cold War. She also holds a degree in Business from EU Business School in Barcelona, where her dissertation "Is the Art World Immune to Globalisation? A Study of Cultural Gaps and Investment Practices" received the award of excellence for the best undergraduate thesis.
              </p>
              <p>
                Her professional background spans White Cube and Christie's in London and Nina Johnson in Miami, alongside commercial roles in the corporate sector, where she developed strategic alliances with leading corporations across EMEA, building a fluency across business environments that has informed every side of her practice.
              </p>
            </div>
          </FadeIn>
        </div>
        
        <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
          <FadeIn delay={0.2} className="w-full max-w-md">
            <div className="p-8 md:p-12 lg:p-16 border border-[#0E3931]/10 bg-gray-50/50 flex items-center justify-center shadow-none rounded-[2px]">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-[2px]">
                <ImageWithFallback 
                  src={p3} 
                  alt="Francesca De Filippo Portrait" 
                  className="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
