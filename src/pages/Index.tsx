import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ClientLogos } from "@/components/ClientLogos";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { RealizationsSection } from "@/components/RealizationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <ServicesSection />
      <RealizationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
