import { Target, Users, Combine, Leaf, Sun } from "lucide-react";

export default function FeatureStrip() {
  const features = [
    { icon: <Target className="text-[#087F5B] stroke-[1.5]" size={32} />, title: "Real Problems\nReal Solutions" },
    { icon: <Users className="text-[#087F5B] stroke-[1.5]" size={32} />, title: "Built for People\nand Communities" },
    { icon: <Combine className="text-[#087F5B] stroke-[1.5]" size={32} />, title: "Blending Tradition\nwith Technology" },
    { icon: <Leaf className="text-[#087F5B] stroke-[1.5]" size={32} />, title: "Sustainable\nGrowth" },
    { icon: <Sun className="text-[#087F5B] stroke-[1.5]" size={32} />, title: "A Better\nTomorrow" },
  ];

  return (
    <div className="relative z-20 w-full mt-4 lg:mt-0 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 md:gap-0 divide-x-0 md:divide-x md:divide-[#D5D2C1]/40 border-t border-[#D5D2C1]/40 pt-10">
          {features.map((feature, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center px-2">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-[14px] font-semibold text-[#0B2942] whitespace-pre-line leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
