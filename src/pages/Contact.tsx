import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact & Devis Gratuit | NettoPark - Nettoyage Parkings Région Parisienne";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contactez NettoPark pour un devis gratuit de nettoyage de parking. Réponse sous 2h, intervention 24h/7j en région parisienne. ☎ 01 87 66 21 30');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;