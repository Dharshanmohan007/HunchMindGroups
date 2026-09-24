import Image from "next/image";

export default function Insights() {
  const cards = [
    {
      category: "Supply Chain",
      image: "/images/insight_supply_chain_1790249490963.jpg",
      title: "How Data is Transforming India's Supply Chains",
      desc: "Exploring how AI and data analytics can create a more efficient and sustainable supply chain ecosystem."
    },
    {
      category: "Construction",
      image: "/images/insight_construction_1790249505628.jpg",
      title: "Key Things to Consider Before Building Your Dream Home",
      desc: "A simple guide to help you plan better and build with confidence."
    },
    {
      category: "Sustainability",
      image: "/images/insight_sustainability_1790249518309.jpg",
      title: "Towards a More Sustainable Tomorrow",
      desc: "How technology, infrastructure and communities can work together for a better future."
    }
  ];

  return (
    <section id="insights" className="py-20 md:py-32 bg-light-cream/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-muted-text mb-4 uppercase">
              Insights
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-deep-navy mb-3">
              Ideas, Insights and Real Impact
            </h2>
            <p className="text-muted-text">
              Latest updates, stories and perspectives from across our businesses.
            </p>
          </div>
          <button className="text-hm-green font-medium flex items-center gap-2 hover:text-forest-green transition-colors pb-1 border-b border-transparent hover:border-forest-green">
            View All Insights <span>&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-light-border/50">
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full text-deep-navy">
                  {card.category}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl text-deep-navy mb-3 leading-snug group-hover:text-hm-green transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-text text-sm mb-6 line-clamp-3">
                  {card.desc}
                </p>
                <button className="text-hm-green font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
