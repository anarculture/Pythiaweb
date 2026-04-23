import { FadeIn } from "./FadeIn";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
            <div className="prose prose-lg text-[#0E3931] text-[17px] md:text-[20px] leading-[1.6] md:leading-[1.7] max-w-xl">
              <p className="mb-6">
                Francesca trained at the Courtauld Institute in London, where she completed an MA with a dissertation, awarded Distinction, on countercultures in Eastern Europe and Latin America. Her career has moved between the commercial and curatorial edges of the art world — with formative roles at White Cube, Christie's, and Nina Johnson in Miami — alongside a decade building commercial strategy for international businesses across Europe and the Americas.
              </p>
              <p>
                She works between Miami, Madrid, and Caracas, and maintains active relationships with artists, galleries, and institutions across Europe, Latin America, and the United States.
              </p>
            </div>
          </FadeIn>
        </div>
        
        <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
          <FadeIn delay={0.2} className="w-full max-w-md">
            <div className="p-8 md:p-12 lg:p-16 border border-[#0E3931]/10 bg-gray-50/50 flex items-center justify-center shadow-none rounded-[2px]">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-[2px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1635098996189-6edad727a0f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcG9ydHJhaXQlMjB3b21hbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzc2OTc2NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Portrait Placeholder" 
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
