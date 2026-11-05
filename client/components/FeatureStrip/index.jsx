import { Target, Users, Combine, Leaf, Sun } from "lucide-react";

export default function FeatureStrip() {
  const features = [
    { icon: Target, title: "Real Problems\nReal Solutions", desc: "Pragmatic Execution" },
    { icon: Users, title: "Built for People\nand Communities", desc: "Human Centric" },
    { icon: Combine, title: "Blending Tradition\nwith Technology", desc: "Modern & Grounded" },
    { icon: Leaf, title: "Sustainable\nGrowth", desc: "Long-term Future" },
    { icon: Sun, title: "A Better\nTomorrow", desc: "Pan-India Impact" },
  ];

  return (
    <div className="relative z-30 w-full mt-6 lg:mt-10 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[28px] md:rounded-[36px] border border-[#E5DED0]/80 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.09)] transition-shadow duration-300">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5DED0]/80">
            {features.map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={i} 
                  className="flex flex-col items-center text-center px-3 py-2 group cursor-default transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#087F5B]/10 flex items-center justify-center mb-3 group-hover:bg-[#087F5B] transition-all duration-300 shadow-xs">
                    <IconComponent 
                      size={28} 
                      strokeWidth={1.75} 
                      className="text-[#087F5B] group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform" 
                    />
                  </div>
                  <h3 className="text-[14px] md:text-[15px] font-bold text-[#0B2942] whitespace-pre-line leading-tight group-hover:text-[#087F5B] transition-colors mb-1">
                    {feature.title}
                  </h3>
                  <span className="text-[11px] text-[#65727D] font-medium hidden md:block">
                    {feature.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
