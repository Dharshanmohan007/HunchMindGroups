import { Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[750px] w-full overflow-hidden bg-warm-cream flex items-center">
      
      {/* Decorative Leaves (approximated with simple shapes) */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-hm-green/10 rounded-br-[100%] z-0"></div>
      <div className="absolute bottom-20 -left-10 w-40 h-40 bg-hm-green/10 rounded-tr-[100%] rounded-br-[100%] z-0 transform rotate-12"></div>
      
      {/* 
        Background Image Construction 
        Using layered divs with large border-radius to create the organic sweeping curves
      */}
      
      {/* Main Image Container */}
      <div 
        className="absolute top-0 right-0 w-[90%] lg:w-[75%] h-[80%] lg:h-[95%] z-0 overflow-hidden"
        style={{ borderBottomLeftRadius: '60% 100%' }}
      >
        <Image
          src="/images/hero_landscape_1790249276559.jpg"
          alt="Indian landscape with city and mountains"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-cream/40 to-transparent"></div>
      </div>

      {/* Bottom Right Cutout (creates the curve on the right) */}
      <div 
        className="absolute bottom-0 right-0 w-[60%] lg:w-[35%] h-[35%] lg:h-[45%] bg-warm-cream z-10 flex items-center justify-center pt-10 pl-10"
        style={{ borderTopLeftRadius: '100% 100%' }}
      >
        <div className="transform rotate-[-8deg] translate-y-4 lg:translate-y-8">
          <div className="font-hand text-3xl md:text-4xl lg:text-5xl text-hm-green leading-tight text-center drop-shadow-sm">
            Solutions<br />
            for a Smarter<br />
            India
          </div>
          {/* Tricolor brush stroke approximation */}
          <div className="mt-3 h-1.5 w-32 mx-auto rounded-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] shadow-sm"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-20 flex flex-col lg:flex-row">
        
        {/* Left Column Content */}
        <div className="w-full lg:w-1/2 pt-10 pb-20 lg:py-0">
          <div className="text-xs font-bold tracking-[0.25em] text-muted-text mb-6 uppercase">
            HunchMind Group
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[72px] leading-[1.05] text-deep-navy mb-6">
            Ideas into<br />
            a Brighter<br />
            <span className="text-hm-green">Tomorrow</span>
          </h1>
          <p className="text-lg md:text-xl text-deep-navy/80 mb-10 leading-relaxed max-w-[420px] font-medium">
            A portfolio of businesses built to solve real-world problems through technology, craftsmanship and practical solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-hm-green text-white px-7 py-3.5 rounded-full font-medium flex items-center gap-3 hover:bg-forest-green transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Explore Our Businesses <span className="text-xl leading-none">&rarr;</span>
            </button>
            <button className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-light-border flex items-center justify-center group-hover:border-hm-green transition-colors bg-white shadow-sm">
                <Play size={18} className="text-deep-navy group-hover:text-hm-green fill-current ml-1" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-deep-navy">Watch Our Story</div>
                <div className="text-xs text-muted-text">2 min</div>
              </div>
            </button>
          </div>
        </div>

        {/* Floating Annotations over Image */}
        <div className="hidden lg:block absolute top-10 right-[15%] z-20 transform rotate-[-10deg]">
          <div className="font-hand text-4xl xl:text-5xl text-[#C85A24] leading-tight text-right drop-shadow-md">
            Progress<br />
            Together<br />
            <span className="text-hm-green">For a Better</span><br />
            Tomorrow
          </div>
        </div>

        {/* Vertical Text on the far right */}
        <div className="hidden xl:flex absolute top-1/4 right-0 z-20 flex-col gap-6 text-[10px] tracking-[0.25em] text-deep-navy uppercase font-bold items-center">
          <div className="border-l-2 border-hm-green/30 pl-4 py-8 flex flex-col gap-8">
            <span style={{ writingMode: 'vertical-rl' }}>People</span>
            <span style={{ writingMode: 'vertical-rl' }}>Ideas</span>
            <span style={{ writingMode: 'vertical-rl' }}>Skills</span>
            <span style={{ writingMode: 'vertical-rl' }}>Opportunities</span>
            <span style={{ writingMode: 'vertical-rl' }}>Growth</span>
          </div>
        </div>

      </div>
    </section>
  );
}
