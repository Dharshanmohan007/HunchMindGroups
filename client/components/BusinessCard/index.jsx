import Image from "next/image";
import { CheckCircle2, Factory, Home } from "lucide-react";

export default function BusinessCard({ type, badge, title, desc, bullets, btnText, imageSrc }) {
  const isIntelligence = type === "intelligence";
  
  return (
    <div className={`rounded-[32px] overflow-hidden flex flex-col h-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl relative group ${isIntelligence ? 'bg-[#062820] text-white' : 'bg-white text-deep-navy border border-light-border'}`}>
      
      {/* Content Top */}
      <div className="p-8 md:p-12 relative z-10 flex-grow">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 font-sans font-bold text-xl">
            {isIntelligence ? (
              <span className="text-white">
                <span className="text-bright-green italic pr-1 font-serif">H</span>unchMind <br className="hidden md:block lg:hidden"/>Intelligence
              </span>
            ) : (
              <span className="text-deep-navy">
                <span className="text-const-orange italic pr-1 font-serif">H</span>unchMind <br className="hidden md:block lg:hidden"/>Construction
              </span>
            )}
          </div>
          <div className={`text-[10px] tracking-widest px-3 py-1.5 rounded-full border font-semibold ${isIntelligence ? 'border-white/20 text-white/80' : 'border-deep-navy/20 text-deep-navy/70'}`}>
            {badge}
          </div>
        </div>

        <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-tight whitespace-pre-line">
          {title}
        </h3>
        <p className={`text-sm md:text-base mb-8 max-w-sm ${isIntelligence ? 'text-white/80' : 'text-muted-text'}`}>
          {desc}
        </p>

        <ul className="space-y-4 mb-10">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-medium">
              {isIntelligence ? (
                <CheckCircle2 className="text-bright-green mt-0.5 shrink-0" size={18} />
              ) : (
                <Home className="text-const-orange mt-0.5 shrink-0" size={18} />
              )}
              <span className={isIntelligence ? 'text-white/90' : 'text-deep-navy/90'}>{bullet}</span>
            </li>
          ))}
        </ul>

        <button className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all group-hover:px-7 ${isIntelligence ? 'bg-white text-deep-navy hover:bg-light-green' : 'bg-const-orange text-white hover:bg-warm-orange shadow-md'}`}>
          {btnText} <span>&rarr;</span>
        </button>
      </div>

      {/* Image Bottom */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
        <div className={`absolute inset-0 z-10 bg-gradient-to-t ${isIntelligence ? 'from-[#062820]/10 to-[#062820]' : 'from-white/10 to-white'}`}></div>
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {!isIntelligence && (
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 transform rotate-[-5deg]">
            <div className="font-hand text-3xl md:text-4xl text-const-orange leading-tight drop-shadow-md">
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
