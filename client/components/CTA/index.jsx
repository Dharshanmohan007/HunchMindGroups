import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-36 overflow-hidden rounded-t-[40px] md:rounded-t-[80px]">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/cta_landscape_1790249965954.jpg" 
          alt="Indian landscape at dusk" 
          fill 
          className="object-cover scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-[#08243D]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#08243D] via-[#08243D]/60 to-transparent"></div>
        {/* Subtle decorative glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#087F5B]/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-[0.2em] text-[#159A6A] mb-6 uppercase shadow-sm">
          <Sparkles size={14} className="text-[#159A6A] animate-pulse" />
          <span>Let&apos;s Work Together</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight leading-[1.1]">
          Let&apos;s Build <span className="italic font-light text-[#EAF4EC]">What&apos;s Next</span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Have a project, partnership or idea? We&apos;d love to hear from you and build lasting solutions together.
        </p>
        
        <div className="flex items-center justify-center">
          <a
            href="mailto:contact@hunchmind.com"
            className="group relative inline-flex items-center justify-center gap-3 bg-[#087F5B] hover:bg-[#066347] text-white text-base md:text-lg font-semibold px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(8,127,91,0.35)] hover:shadow-[0_15px_40px_rgba(8,127,91,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            <span>Contact Us</span>
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
