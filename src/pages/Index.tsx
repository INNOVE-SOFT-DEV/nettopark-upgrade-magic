import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ClientLogos } from "@/components/ClientLogos";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { VideoSection } from "@/components/VideoSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { RealizationsSection } from "@/components/RealizationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ClientLogos />
      <ProcessSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <VideoSection />
      <RealizationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
