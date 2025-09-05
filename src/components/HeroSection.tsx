import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-parking.jpg";

export const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="60" height="60" className="w-full h-full" style={{ backgroundRepeat: 'repeat' }}>
          <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="2" fill="white" fillOpacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Faites appel aux{" "}
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                experts du nettoyage
              </span>{" "}
              de parkings
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Une propreté éclatante qui crée une impression durable. Nos équipes 
              spécialisées interviennent en région parisienne pour tous vos besoins 
              de nettoyage de parkings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                <ArrowRight className="w-5 h-5 mr-2" />
                Demande de devis
              </Button>
              <Button variant="ghost" size="lg" className="btn-secondary text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Voir NettoPark en action
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Disponible 24h/7j</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Équipement professionnel</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="fade-in-right">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Parking professionnel nettoyé par NettoPark" 
                className="rounded-2xl shadow-professional-xl w-full h-auto"
              />
              
              {/* Floating Contact Card */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-professional">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-primary text-white p-2 rounded-lg">
                    <Play className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">NettoPark</div>
                    <div className="text-sm text-muted-foreground">01 87 66 21 30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};