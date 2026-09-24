import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureStrip from "../components/FeatureStrip";
import Businesses from "../components/Businesses";
import Statistics from "../components/Statistics";
import About from "../components/About";
import Values from "../components/Values";
import Insights from "../components/Insights";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeatureStrip />
        <Businesses />
        <Statistics />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row gap-8 lg:items-center">
          <div className="flex-grow w-full">
            <About />
          </div>
          <div className="lg:w-1/3 shrink-0 mb-20 lg:mb-0">
            <Values />
          </div>
        </div>
        <Insights />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
