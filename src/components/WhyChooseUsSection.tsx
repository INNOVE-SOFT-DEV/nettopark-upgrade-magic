import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Shield, Award, Star, Users } from "lucide-react";
import parkingImage from "@/assets/parking-cleaning-1.jpg";

export const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Une équipe hautement qualifiée",
      description: "Professionnels expérimentés et certifiés"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Techniques efficaces et équipements spécialisés",
      description: "Matériel de pointe pour des résultats optimaux"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Propreté globale de vos parkings",
      description: "Service complet et solutions personnalisées"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expertise qui assure votre satisfaction",
      description: "Garantie de qualité sur tous nos services"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-premium rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="fade-in-left">
            <Badge className="mb-6 bg-gradient-gold text-accent-foreground border-0 px-4 py-2 text-sm font-semibold">
              💎 Pourquoi nous choisir ?
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8">
              Un nettoyage de parkings
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                de haute qualité
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Une équipe hautement qualifiée, des techniques efficaces et des équipements 
              spécialisés pour une propreté globale de vos parkings. Notre expertise nous 
              permet d'assurer une propreté intégrale, répondant ainsi aux exigences de nos 
              clients et assurant leur satisfaction.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="card-premium p-6 rounded-2xl fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
              <Link to="/qui-sommes-nous">
                En savoir plus sur nous
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right - Image */}
          <div className="fade-in-right">
            <div className="relative float-animation">
              <img 
                src={parkingImage} 
                alt="Nettoyage professionnel de parking avec autolaveuse" 
                className="rounded-3xl shadow-premium w-full pulse-glow"
              />
              
              {/* Experience Badge */}
              <div className="absolute top-6 right-6 card-premium p-6 rounded-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">+10</div>
                  <div className="text-sm text-muted-foreground font-medium">Années</div>
                  <div className="text-xs text-muted-foreground">d'expérience</div>
                </div>
              </div>

              {/* Success Rate Badge */}
              <div className="absolute bottom-6 left-6 card-premium p-6 rounded-2xl">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">100%</div>
                  <div className="text-xs text-muted-foreground font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};