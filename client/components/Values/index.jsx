import { Users, Shield, Lightbulb, Leaf, Target, Award } from "lucide-react";

export default function Values() {
  const values = [
    { icon: <Users size={20} className="text-[#C85A24]" />, title: "People First", desc: "Communities and human progress matter most" },
    { icon: <Shield size={20} className="text-[#C85A24]" />, title: "Integrity", desc: "We honor commitments and do what is right" },
    { icon: <Lightbulb size={20} className="text-[#C85A24]" />, title: "Innovation", desc: "Continuous learning and pragmatic AI application" },
    { icon: <Leaf size={20} className="text-[#C85A24]" />, title: "Sustainability", desc: "Enduring growth for generations to come" },
    { icon: <Target size={20} className="text-[#C85A24]" />, title: "Long-Term Impact", desc: "Building lasting foundations across India" },
  ];

  return (
    <div className="bg-white/90 backdrop-blur-md border border-[#E5DED0] rounded-[36px] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.05)] h-full max-w-sm ml-auto">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F0EBE1]">
        <h3 className="font-serif text-2xl text-[#0B2942] tracking-tight">Our Core Values</h3>
        <span className="w-2.5 h-2.5 rounded-full bg-[#C85A24]"></span>
      </div>
      
      <div className="space-y-6">
        {values.map((v, i) => (
          <div key={i} className="flex gap-4 group cursor-default transition-transform duration-300 hover:translate-x-1.5">
            <div className="w-11 h-11 rounded-2xl bg-[#C85A24]/10 border border-[#C85A24]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C85A24] transition-colors duration-300 shadow-xs">
              <div className="group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
                {v.icon}
              </div>
            </div>
            <div>
              <div className="font-sans font-bold text-[#0B2942] group-hover:text-[#C85A24] transition-colors">
                {v.title}
              </div>
              <div className="text-xs text-[#65727D] mt-0.5 leading-snug">
                {v.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
