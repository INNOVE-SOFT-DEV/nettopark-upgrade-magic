import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { RealizationsSection } from "@/components/RealizationsSection";
import { Footer } from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServicesSection />
      <RealizationsSection />
      <Footer />
    </div>
  );
};

export default Services;