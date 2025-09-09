import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Qui sommes-nous | NettoPark - Experts Nettoyage Parkings Région Parisienne";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez NettoPark, experts en nettoyage de parkings en région parisienne depuis 2020. Équipe qualifiée, autolaveuses professionnelles, satisfaction garantie.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;