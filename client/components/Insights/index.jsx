import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Insights() {
  const cards = [
    {
      category: "Supply Chain AI",
      image: "/images/insight_supply_chain_1790249490963.jpg",
      title: "How Data is Transforming India's Supply Chains",
      desc: "Exploring how predictive intelligence and IoT routing can eliminate freight delays and foster sustainable logistics corridors."
    },
    {
      category: "Sustainable Living",
      image: "/images/insight_construction_1790249505628.jpg",
      title: "Key Considerations Before Building Your Modern Home",
      desc: "A pragmatic guide to energy-efficient architecture, durable materials, and seamless site coordination."
    },
    {
      category: "Future Horizons",
      image: "/images/insight_sustainability_1790249518309.jpg",
      title: "Towards a More Sustainable, Prosperous Tomorrow",
      desc: "How technology, eco-friendly infrastructure and empowered local communities synergize for collective progress."
    }
  ];

  return (
    <section id="insights" className="py-20 md:py-32 bg-gradient-to-b from-transparent via-[#F7F4EA]/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087F5B]/10 text-xs font-bold tracking-[0.2em] text-[#087F5B] mb-4 uppercase">
              <Sparkles size={13} className="text-[#087F5B]" />
              <span>Thought Leadership</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#0B2942] mb-3 tracking-tight">
              Ideas, Insights and Real Impact
            </h2>
            <p className="text-[#65727D] text-base md:text-lg max-w-xl">
              Latest perspectives, analyses and stories from our engineering and construction frontiers.
            </p>
          </div>
          <button className="group text-[#087F5B] font-semibold flex items-center gap-2 hover:text-[#066347] transition-all pb-1 border-b-2 border-transparent hover:border-[#087F5B] cursor-pointer">
            <span>View All Insights</span> 
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-white rounded-[32px] overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-[#E5DED0]/80 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full text-[#0B2942] shadow-sm border border-white/40">
                    {card.category}
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-xl md:text-2xl text-[#0B2942] mb-3 leading-snug group-hover:text-[#087F5B] transition-colors line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-[#65727D] text-sm leading-relaxed mb-6 line-clamp-3">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                <button className="text-[#087F5B] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                  <span>Read Full Article</span> 
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
