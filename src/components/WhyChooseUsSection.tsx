import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import parkingImage from "@/assets/parking-cleaning-1.jpg";

export const WhyChooseUsSection = () => {
  const features = [
    "Une équipe hautement qualifiée",
    "Techniques efficaces et équipements spécialisés",  
    "Propreté globale de vos parkings",
    "Expertise qui assure votre satisfaction"
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="fade-in-left">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Pourquoi nous choisir ?
            </Badge>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Un nettoyage de parkings de haute qualité
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Une équipe hautement qualifiée, des techniques efficaces et des équipements 
              spécialisés pour une propreté globale de vos parkings. Notre expertise nous 
              permet d'assurer une propreté intégrale, répondant ainsi aux exigences de nos 
              clients et assurant leur satisfaction.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg">
              <Link to="/qui-sommes-nous">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right - Image */}
          <div className="fade-in-right">
            <div className="relative">
              <img 
                src={parkingImage} 
                alt="Nettoyage professionnel de parking avec autolaveuse" 
                className="rounded-2xl shadow-professional-xl w-full"
              />
              
              {/* Quality Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-professional">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">+10</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};