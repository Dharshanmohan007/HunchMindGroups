import BusinessCard from "../BusinessCard";

export default function Businesses() {
  return (
    <section id="businesses" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-[0.2em] text-muted-text mb-4 uppercase">
            Our Businesses
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-deep-navy mb-4">
            Two Strengths. One Purpose.
          </h2>
          <p className="text-lg text-muted-text max-w-2xl mx-auto">
            Different domains. A common mission — to build a better tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <BusinessCard 
            type="intelligence"
            badge="AI | DATA | DECISIONS"
            title="AI for a\nSmarter Tomorrow."
            desc="We build AI-powered solutions to solve real-world challenges in supply chains, business operations and decision making."
            bullets={[
              "HMI Nexus – Supply Chain Intelligence",
              "Data Analytics & AI Solutions",
              "Predictive Insights & Decision Systems",
              "Research & Consulting"
            ]}
            btnText="Explore Intelligence"
            imageSrc="/images/intelligence_supply_chain_1790249293961.jpg"
          />
          
          <BusinessCard 
            type="construction"
            badge="DESIGN | BUILD | DELIVER"
            title="Turning Designs\ninto Real Structures."
            desc="We bring building plans to life through skilled execution, quality workmanship and on-time delivery."
            bullets={[
              "Residential House Construction",
              "Masonry & Structural Work",
              "Renovations & Extensions",
              "Site Execution & Project Coordination"
            ]}
            btnText="Explore Construction"
            imageSrc="/images/construction_house_1790249443900.jpg"
          />
        </div>
      </div>
    </section>
  );
}
