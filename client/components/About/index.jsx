import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Text */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087F5B]/10 text-xs font-bold tracking-[0.2em] text-[#087F5B] mb-6 uppercase">
            <Sparkles size={13} className="text-[#087F5B]" />
            <span>About HunchMind</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-[#0B2942] mb-8 leading-[1.15] tracking-tight">
            Building a More<br />
            <span className="bg-gradient-to-r from-[#087F5B] to-[#159A6A] bg-clip-text text-transparent">
              Connected, Prosperous India.
            </span>
          </h2>
          
          <div className="space-y-6 text-base md:text-lg text-[#65727D] mb-10 leading-relaxed">
            <p>
              HunchMind is a growing ecosystem of businesses built on a singular conviction — solving real-world challenges with artificial intelligence, authentic craftsmanship, and disciplined execution.
            </p>
            <p>
              From machine-learning powered supply chains optimizing national transport arteries to constructing sustainable residential spaces, we build for enduring positive impact.
            </p>
          </div>
          
          <a
            href="#businesses"
            className="group inline-flex items-center gap-3 bg-[#087F5B] hover:bg-[#066347] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-[0_10px_25px_rgba(8,127,91,0.25)] hover:shadow-[0_14px_35px_rgba(8,127,91,0.35)] hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Our Journey</span> 
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right Map Image with Gentle Float Animation */}
        <div className="relative h-[340px] md:h-[480px] w-full flex items-center justify-center">
          <div className="relative w-full h-full max-w-[400px] aspect-square drop-shadow-2xl animate-float-gentle">
            <Image 
              src="/images/india_map_1790249463030.jpg" 
              alt="Illustrated Map of India" 
              fill 
              className="object-contain"
            />
            
            {/* Annotation with Caveat anchored cleanly to the map image */}
            <div className="absolute -bottom-3 right-0 md:-bottom-2 md:right-1 z-30 transform -rotate-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/80 shadow-xl">
              <div className="font-hand text-xl md:text-2xl text-[#C85A24] leading-tight text-right select-none whitespace-nowrap" style={{ fontFamily: "'Caveat', cursive" }}>
                Across India<br />
                <span className="text-[#087F5B] whitespace-nowrap">For a Brighter Tomorrow</span>
              </div>
              <div className="mt-1 h-1 w-24 ml-auto rounded-full bg-gradient-to-r from-[#087F5B] via-white to-[#C85A24] shadow-xs"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
