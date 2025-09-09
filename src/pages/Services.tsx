import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { RealizationsSection } from "@/components/RealizationsSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = "Services & Réalisations | NettoPark - Nettoyage Professionnel Parkings Paris";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez nos services de nettoyage professionnel pour parkings : souterrains, commerciaux, résidentiels. Autolaveuses, entretien régulier, interventions ponctuelles.');
    }
  }, []);

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