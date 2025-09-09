import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Phone, Star, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-nettopark-main.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-premium rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 lg:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left - Content */}
          <div className="text-white fade-in-left">
            {/* Premium Badge */}
            <Badge className="mb-6 bg-gradient-gold text-accent-foreground border-0 px-4 py-2 text-sm font-semibold pulse-glow">
              ⭐ Experts du nettoyage de parkings
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Faites appel aux experts du  
              <span className="block text-gradient bg-gradient-gold bg-clip-text text-transparent">
                nettoyage de parkings
              </span>
              en région parisienne
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
              Une propreté éclatante qui crée une impression durable. Nos équipes sont 
              là pour répondre à vos besoins de nettoyage de parkings, que ce soit pour 
              des interventions ponctuelles ou des entretiens réguliers.
            </p>

            {/* Features Row */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-blue-100">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Certifié & Assuré</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Satisfaction garantie</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">100+ clients satisfaits</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4 relative z-10">
                <Link to="/contact">
                  Demande de Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => window.open('https://www.youtube.com/watch?v=IAIxDaS83gI&t=2s', '_blank')}
              >
                <Play className="w-5 h-5 mr-2" />
                Voir NettoPark en action
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6 text-blue-100 card-professional p-6 rounded-2xl bg-white/10">
              <a 
                href="tel:0187662130"
                className="flex items-center hover:text-white transition-colors group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform pulse-glow">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-sm font-medium">Appelez-nous maintenant</div>
                  <div className="text-2xl font-bold text-white">01 87 66 21 30</div>
                  <div className="text-xs text-blue-200">Réponse immédiate</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="fade-in-right">
            <div className="relative float-animation lg:ml-8 xl:ml-12">
              <img 
                src="/lovable-uploads/6851bb44-a7e8-4fdb-b007-67c1c9787679.png"
                alt="Trois autolaveuses Tennant professionnelles avec équipe NettoPark pour nettoyage parkings région parisienne" 
                className="rounded-3xl shadow-premium w-full max-w-none lg:scale-125 xl:scale-150 pulse-glow"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-16 left-8 lg:left-12 card-premium p-6 rounded-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Parkings nettoyés</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 card-premium p-6 rounded-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">24h</div>
                  <div className="text-sm text-muted-foreground">Intervention rapide</div>
                </div>
              </div>

              {/* Main Badge */}
              <div className="absolute bottom-8 left-8 card-premium p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">NettoPark</div>
                  <div className="text-sm text-muted-foreground font-medium">Expert en nettoyage</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-background">
          <path d="M0,120 C150,100 350,0 600,20 C850,40 1050,100 1200,80 L1200,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};