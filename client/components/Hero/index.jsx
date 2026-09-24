import { Play } from "lucide-react";
import Image from "next/image";
import Navbar from "../Navbar";
import FeatureStrip from "../FeatureStrip";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F7F4EA] flex flex-col overflow-hidden font-sans">
      
      {/* Decorative Organic Shapes */}
      {/* Top Left Leaf */}
      <div className="absolute top-0 left-0 w-32 h-64 z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7BA633]/20 rounded-full blur-2xl"></div>
        <svg viewBox="0 0 100 200" className="absolute top-0 left-0 w-full h-full text-[#7BA633] opacity-30" fill="currentColor">
          <path d="M0,0 C50,0 100,50 100,100 C100,150 50,200 0,200 Z" />
        </svg>
      </div>

      {/* Bottom Left Leaf */}
      <div className="absolute bottom-20 left-0 w-48 h-80 z-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 150 300" className="absolute bottom-0 left-0 w-full h-full text-[#7BA633]" fill="currentColor">
          <path d="M0,100 C80,100 150,150 150,250 C150,300 0,300 0,300 Z" />
        </svg>
      </div>
      
      {/* Right Edge Decoration */}
      <div className="absolute top-1/2 right-0 w-16 h-48 -translate-y-1/2 z-10 pointer-events-none overflow-hidden">
         <svg viewBox="0 0 50 150" className="absolute top-0 right-0 w-full h-full text-[#7BA633]" fill="currentColor">
          <path d="M50,0 C20,30 0,70 0,100 C0,130 20,150 50,150 Z" />
        </svg>
      </div>

      <Navbar />

      <div className="relative flex-grow flex flex-col lg:flex-row min-h-[650px] lg:min-h-[720px] w-full">
        
        {/* Right Side Scenic Image & Composition */}
        {/* We use a large div that takes up the right area, with a custom border radius and fade */}
        <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full z-0 overflow-hidden"
             style={{ borderBottomLeftRadius: '40% 60%' }}>
          
          <Image
            src="/images/hero_landscape_1790249276559.jpg"
            alt="Indian landscape with city, mountains, and road"
            fill
            className="object-cover object-center"
            priority
          />
          
          {/* Gradient to blend image into the left cream background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EA] via-[#F7F4EA]/80 to-transparent w-[60%] lg:w-[40%]"></div>
          
          {/* Top fade to blend with navbar if necessary */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F7F4EA]/60 to-transparent"></div>

          {/* First Handwritten Quote over Image */}
          <div className="absolute top-[15%] left-[45%] md:left-[55%] z-20 transform -rotate-6">
            <div className="font-hand text-4xl lg:text-5xl text-[#5E3219] leading-tight text-center drop-shadow-md" style={{ fontFamily: "'Dancing Script', 'Caveat', cursive" }}>
              Progress<br />
              Together<br />
              <span className="text-[#087F5B]">For a Better</span><br />
              <span className="text-[#087F5B]">Tomorrow</span>
            </div>
            {/* Brush stroke accent */}
            <div className="mt-2 h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-[#F26522] via-white to-[#087F5B] shadow-sm"></div>
          </div>

          {/* Vertical Words on Right */}
          <div className="hidden lg:flex absolute top-[20%] right-8 z-20 flex-col gap-6 text-[11px] tracking-[0.2em] text-[#0B2942] uppercase font-bold items-center border-l border-[#0B2942]/30 pl-3 py-6">
            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>People</span>
            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Ideas</span>
            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Skills</span>
            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Opportunities</span>
            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Growth</span>
          </div>

        </div>

        {/* Bottom Right Curved Section for "Solutions for a Smarter India" */}
        <div className="absolute bottom-0 right-0 w-[80%] lg:w-[45%] h-[40%] lg:h-[45%] z-10 flex items-center justify-center pt-8 pr-12"
             style={{ 
               backgroundColor: '#F7F4EA',
               borderTopLeftRadius: '100% 150%',
             }}>
          <div className="transform -rotate-6 translate-y-4 lg:translate-y-6 lg:translate-x-12">
            <div className="font-hand text-3xl lg:text-[42px] text-[#087F5B] leading-tight text-center drop-shadow-sm" style={{ fontFamily: "'Dancing Script', 'Caveat', cursive" }}>
              Solutions<br />
              for a Smarter<br />
              India
            </div>
            <div className="mt-2 h-1.5 w-28 mx-auto rounded-full bg-gradient-to-r from-[#F26522] via-white to-[#087F5B] shadow-sm"></div>
          </div>
        </div>

        {/* Main Left Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-12 w-full relative z-20 flex flex-col justify-center h-full pt-12 pb-24 lg:py-0">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <div className="text-[11px] font-bold tracking-[0.3em] text-[#53616B] mb-5 uppercase">
              HunchMind Group
            </div>
            
            {/* Main Heading */}
            <h1 className="font-serif text-[52px] md:text-[64px] lg:text-[76px] leading-[1.05] text-[#0B2942] mb-6 font-semibold" style={{ fontFamily: "'Playfair Display', 'DM Serif Display', serif" }}>
              Ideas into<br />
              a Brighter<br />
              <span className="text-[#087F5B]">Tomorrow</span>
            </h1>
            
            <p className="text-[#53616B] text-lg lg:text-[19px] mb-10 leading-relaxed max-w-[440px]">
              A portfolio of businesses built to solve real-world
              problems through technology, craftsmanship
              and practical solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="bg-[#087F5B] text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:bg-[#066347] transition-all shadow-md">
                Explore Our Businesses 
                <span className="text-xl leading-none font-light ml-1">&rarr;</span>
              </button>
              
              <button className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border-2 border-[#E2DFD3] flex items-center justify-center group-hover:border-[#087F5B] transition-colors bg-white shadow-sm">
                  <Play size={18} className="text-[#0B2942] group-hover:text-[#087F5B] fill-current ml-1" />
                </div>
                <div className="text-left">
                  <div className="text-[15px] font-bold text-[#0B2942]">Watch Our Story</div>
                  <div className="text-[13px] text-[#53616B]">2 min</div>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>

      <FeatureStrip />
    </section>
  );
}

