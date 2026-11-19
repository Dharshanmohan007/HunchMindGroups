import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import EcosystemSection from "../components/sections/EcosystemSection";
import FocusAreas from "../components/sections/FocusAreas";
import ImpactSection from "../components/sections/ImpactSection";
import AboutSection from "../components/sections/AboutSection";
import LatestInsights from "../components/sections/LatestInsights";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-[#FAFAFA]">
        <HeroSection />
        <EcosystemSection />
        <FocusAreas />
        <ImpactSection />
        <AboutSection />
        <LatestInsights />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
