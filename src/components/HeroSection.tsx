import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-nettopark.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center pt-16 lg:pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-white fade-in-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Faites appel aux experts du nettoyage de parkings en région parisienne
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Une propreté éclatante qui crée une impression durable. Nos équipes sont 
              là pour répondre à vos besoins de nettoyage de parkings, que ce soit pour 
              des interventions ponctuelles ou des entretiens réguliers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/contact">
                  Demande Devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir NettoPark en action
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-4 text-blue-100">
              <a 
                href="tel:0187662130"
                className="flex items-center hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm">Appelez-nous</div>
                  <div className="font-semibold">01 87 66 21 30</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="fade-in-right">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Équipement professionnel de nettoyage de parkings NettoPark" 
                className="rounded-2xl shadow-glow w-full"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-professional-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">NettoPark</div>
                  <div className="text-sm text-muted-foreground">Expert en nettoyage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};