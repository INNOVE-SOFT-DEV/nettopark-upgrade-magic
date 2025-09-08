import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ClientLogos } from "@/components/ClientLogos";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  console.log("Index component is rendering");
  
  return (
    <div className="min-h-screen bg-background">
      <div style={{padding: '20px', background: 'red', color: 'white'}}>
        TEST - If you see this, React is working
      </div>
      <Header />
      <HeroSection />
      <ClientLogos />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
