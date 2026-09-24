import { Users, Shield, Lightbulb, Leaf, Target } from "lucide-react";

export default function Values() {
  const values = [
    { icon: <Users size={20} className="text-const-orange" />, title: "People First", desc: "Communities matter" },
    { icon: <Shield size={20} className="text-const-orange" />, title: "Integrity", desc: "We do what is right" },
    { icon: <Lightbulb size={20} className="text-const-orange" />, title: "Innovation", desc: "Always learning" },
    { icon: <Leaf size={20} className="text-const-orange" />, title: "Sustainability", desc: "Growth for future generations" },
    { icon: <Target size={20} className="text-const-orange" />, title: "Long-Term Impact", desc: "Building for a better tomorrow" },
  ];

  return (
    <div className="bg-soft-ivory border border-light-border rounded-[32px] p-8 md:p-10 shadow-sm h-full max-w-sm ml-auto">
      <h3 className="font-serif text-2xl text-deep-navy mb-8">Our Values</h3>
      <div className="space-y-6">
        {values.map((v, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
              {v.icon}
            </div>
            <div>
              <div className="font-sans font-bold text-deep-navy">{v.title}</div>
              <div className="text-sm text-muted-text mt-0.5">{v.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
