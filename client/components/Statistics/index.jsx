import { Leaf, Users, Truck, ShieldCheck, TreePine, Globe } from "lucide-react";

export default function Statistics() {
  const stats = [
    { icon: Leaf, value: "50+", label: "Projects Initiated" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Truck, value: "Smarter", label: "Supply Chains" },
    { icon: ShieldCheck, value: "Stronger", label: "Communities" },
    { icon: TreePine, value: "Sustainable", label: "Growth" },
    { icon: Globe, value: "Pan\u2011India", label: "Vision" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-[#EAF4EC]/70 via-white to-[#EAF4EC]/70 border border-[#087F5B]/20 rounded-[32px] p-6 md:p-10 shadow-[0_15px_40px_rgba(8,127,91,0.06)] backdrop-blur-xs">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-6 lg:gap-2 xl:gap-4 divide-y md:divide-y-0 lg:divide-x divide-[#087F5B]/15">
            {stats.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={i} 
                  className={`flex flex-col items-center text-center group cursor-default transition-all duration-300 hover:-translate-y-1 ${
                    i !== 0 ? 'lg:pl-2 xl:pl-4' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#087F5B]/10 flex items-center justify-center mb-3 group-hover:bg-[#087F5B] transition-all duration-300 shadow-xs">
                    <IconComponent 
                      size={22} 
                      strokeWidth={1.75} 
                      className="text-[#087F5B] group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform" 
                    />
                  </div>
                  <div className="font-sans font-bold text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[20px] text-[#0B2942] mb-1 group-hover:text-[#087F5B] transition-colors whitespace-nowrap tracking-tight">
                    <span className="whitespace-nowrap inline-block">{stat.value}</span>
                  </div>
                  <div className="text-xs md:text-sm font-medium text-[#65727D] whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
