import { Leaf, Users, Truck, ShieldCheck, TreePine, Globe } from "lucide-react";

export default function Statistics() {
  const stats = [
    { icon: <Leaf size={24} className="text-hm-green" />, value: "50+", label: "Projects Initiated" },
    { icon: <Users size={24} className="text-hm-green" />, value: "100+", label: "Happy Clients" },
    { icon: <Truck size={24} className="text-hm-green" />, value: "Smarter", label: "Supply Chains" },
    { icon: <ShieldCheck size={24} className="text-hm-green" />, value: "Stronger", label: "Communities" },
    { icon: <TreePine size={24} className="text-hm-green" />, value: "Sustainable", label: "Growth" },
    { icon: <Globe size={24} className="text-hm-green" />, value: "Pan-India", label: "Vision" },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-light-green/40 border border-light-border rounded-[32px] p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 divide-x-0 lg:divide-x divide-light-border/50">
            {stats.map((stat, i) => (
              <div key={i} className={`flex flex-col items-center text-center ${i !== 0 ? 'lg:pl-8' : ''}`}>
                <div className="mb-3">{stat.icon}</div>
                <div className="font-sans font-bold text-xl md:text-2xl text-deep-navy mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-muted-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
