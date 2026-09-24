import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Text */}
        <div className="max-w-xl">
          <div className="text-xs font-bold tracking-[0.2em] text-muted-text mb-6 uppercase">
            About HunchMind
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-deep-navy mb-8 leading-tight">
            Building a More<br />
            Connected, Prosperous India.
          </h2>
          <div className="space-y-6 text-base md:text-lg text-muted-text mb-10 leading-relaxed">
            <p>
              HunchMind is a growing ecosystem of businesses built on a simple idea — to solve real-world problems with intelligence, craftsmanship and execution.
            </p>
            <p>
              From AI-driven supply chain solutions to constructing homes and building communities, we work towards a future that is more connected, sustainable and prosperous for everyone.
            </p>
          </div>
          
          <button className="bg-hm-green text-white px-7 py-3 rounded-full font-medium flex items-center gap-3 hover:bg-forest-green transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Our Story <span>&rarr;</span>
          </button>
        </div>

        {/* Right Map Image */}
        <div className="relative h-[300px] md:h-[500px] w-full flex items-center justify-center">
          <div className="relative w-full h-full max-w-[400px] aspect-square drop-shadow-2xl">
            <Image 
              src="/images/india_map_1790249463030.jpg" 
              alt="Illustrated Map of India" 
              fill 
              className="object-contain"
            />
          </div>
          
          {/* Annotation */}
          <div className="absolute bottom-4 right-4 md:bottom-10 md:-right-10 z-20 transform rotate-[-8deg]">
            <div className="font-hand text-xl md:text-2xl text-const-orange leading-tight text-right">
              Across India<br />
              <span className="text-hm-green">For a Brighter Tomorrow</span>
            </div>
            <div className="mt-1 h-1 w-16 ml-auto rounded-full bg-gradient-to-r from-hm-green to-const-orange"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
