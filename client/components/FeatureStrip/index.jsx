import { Target, Users, Combine, Leaf, Sun } from "lucide-react";

export default function FeatureStrip() {
  const features = [
    { icon: <Target className="text-hm-green stroke-[1.5]" size={28} />, title: "Real Problems\nReal Solutions" },
    { icon: <Users className="text-hm-green stroke-[1.5]" size={28} />, title: "Built for People\nand Communities" },
    { icon: <Combine className="text-hm-green stroke-[1.5]" size={28} />, title: "Blending Tradition\nwith Technology" },
    { icon: <Leaf className="text-hm-green stroke-[1.5]" size={28} />, title: "Sustainable\nGrowth" },
    { icon: <Sun className="text-hm-green stroke-[1.5]" size={28} />, title: "A Better\nTomorrow" },
  ];

  return (
    <section className="bg-soft-ivory border-y border-light-border relative z-20 shadow-sm mt-8 md:mt-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 divide-x-0 md:divide-x divide-light-border">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div className="mb-4 p-3 bg-light-green/30 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-sm font-semibold text-deep-navy whitespace-pre-line leading-snug">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
