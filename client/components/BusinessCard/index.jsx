import Image from "next/image";
import { CheckCircle2, ArrowRight, Home, Activity } from "lucide-react";

export default function BusinessCard({ type, badge, title, desc, bullets, btnText, imageSrc }) {
  const isIntelligence = type === "intelligence";
  
  return (
    <div className={`rounded-[36px] overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-2 relative group ${
      isIntelligence 
        ? 'bg-[#05241C] text-white shadow-[0_20px_50px_rgba(5,36,28,0.3)] hover:shadow-[0_25px_60px_rgba(8,127,91,0.35)] border border-[#087F5B]/30' 
        : 'bg-white text-[#0B2942] shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(200,90,36,0.18)] border border-[#E5DED0]'
    }`}>
      
      {/* Subtle background ambient light */}
      <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-700 ${
        isIntelligence ? 'bg-[#087F5B]' : 'bg-[#C85A24]/20'
      }`}></div>

      {/* Content Top */}
      <div className="p-8 md:p-12 relative z-10 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 font-sans font-bold text-xl">
              {isIntelligence ? (
                <span className="text-white flex items-center gap-1.5">
                  <span className="text-[#159A6A] italic font-serif text-2xl">H</span>
                  <span>HunchMind Intelligence</span>
                </span>
              ) : (
                <span className="text-[#0B2942] flex items-center gap-1.5">
                  <span className="text-[#C85A24] italic font-serif text-2xl">H</span>
                  <span>HunchMind Construction</span>
                </span>
              )}
            </div>
            
            <div className={`text-[10px] tracking-widest px-3.5 py-1.5 rounded-full border font-bold flex items-center gap-1.5 ${
              isIntelligence 
                ? 'border-[#087F5B]/50 bg-[#087F5B]/20 text-[#159A6A]' 
                : 'border-[#C85A24]/30 bg-[#C85A24]/10 text-[#C85A24]'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isIntelligence ? 'bg-[#159A6A] animate-pulse' : 'bg-[#C85A24]'}`}></span>
              {badge}
            </div>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-[1.15] whitespace-pre-line tracking-tight">
            {title}
          </h3>
          <p className={`text-sm md:text-base mb-8 max-w-sm leading-relaxed ${isIntelligence ? 'text-white/80' : 'text-[#65727D]'}`}>
            {desc}
          </p>

          <ul className="space-y-3.5 mb-10">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-medium">
                {isIntelligence ? (
                  <CheckCircle2 className="text-[#159A6A] mt-0.5 shrink-0" size={18} />
                ) : (
                  <Home className="text-[#C85A24] mt-0.5 shrink-0" size={18} />
                )}
                <span className={isIntelligence ? 'text-white/90' : 'text-[#0B2942]/90'}>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className={`group/btn px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2.5 transition-all duration-300 shadow-md ${
            isIntelligence 
              ? 'bg-white text-[#0B2942] hover:bg-[#EAF4EC] hover:shadow-lg' 
              : 'bg-[#C85A24] text-white hover:bg-[#b04d1d] hover:shadow-lg'
          }`}>
            <span>{btnText}</span>
            <ArrowRight size={17} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Image Bottom */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
        <div className={`absolute inset-0 z-10 bg-gradient-to-t ${
          isIntelligence 
            ? 'from-[#05241C] via-[#05241C]/40 to-transparent' 
            : 'from-white via-white/30 to-transparent'
        }`}></div>
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        
        {isIntelligence ? (
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-medium text-white shadow-lg">
              <Activity size={14} className="text-[#159A6A] animate-pulse" />
              <span>AI Nexus Platform · Live Telematics</span>
            </div>
          </div>
        ) : (
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 transform -rotate-6">
            <div className="font-hand text-3xl md:text-4xl text-[#C85A24] leading-tight drop-shadow-md select-none" style={{ fontFamily: "'Caveat', cursive" }}>
              Stronger<br />
              Homes<br />
              Happier<br />
              Communities
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
}
