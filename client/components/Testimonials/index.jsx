import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Their AI insights helped us optimize our logistics operations and reduce costs significantly.",
      name: "Business Partner",
      role: "Logistics Company"
    },
    {
      text: "Professional, reliable and committed. Our home was completed with great quality and on time.",
      name: "Home Owner",
      role: "Coimbatore"
    },
    {
      text: "A forward-thinking team with a clear vision for India's future.",
      name: "Collaborator",
      role: "Supply Chain Expert"
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-muted-text mb-4 uppercase">
              What People Say
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-deep-navy">
              Trusted by Clients and Communities
            </h2>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-light-border flex items-center justify-center hover:bg-light-green transition-colors text-deep-navy">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full border border-light-border flex items-center justify-center hover:bg-light-green transition-colors text-deep-navy">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-light-border shadow-sm flex flex-col justify-between h-full">
              <div>
                <Quote className="text-hm-green/30 mb-6" size={40} />
                <p className="text-deep-navy font-serif text-lg leading-relaxed mb-8">
                  &quot;{t.text}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-light-cream overflow-hidden flex items-center justify-center text-muted-text">
                  <Image 
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${t.name}&backgroundColor=087a59`} 
                    alt={t.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <div className="font-sans font-bold text-deep-navy">{t.name}</div>
                  <div className="text-xs text-muted-text mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
