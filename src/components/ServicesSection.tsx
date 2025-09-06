import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Play } from "lucide-react";
import autolaveusImage from "@/assets/autolaveuse-action.jpg";

export const ServicesSection = () => {
  const services = [
    "Dépoussiérage et lavage avec une balayeuse aspirante pour éliminer les impuretés",
    "Dégraissage et nettoyage en profondeur avec lavage haute pression pour éliminer les taches tenaces",
    "Finitions manuelles pour une attention aux détails impeccables dans les zones inaccessibles par les machines"
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Autolaveuse en action
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Découvrez nos services à travers nos réalisations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nous apportons notre expertise quelle que soit la taille de votre entreprise. 
            Selon l'importance des missions nous modulons notre offre pour satisfaire vos besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="fade-in-left">
            <div className="relative">
              <img 
                src={autolaveusImage} 
                alt="Autolaveuse professionnelle en action pour le nettoyage de parking" 
                className="rounded-2xl shadow-professional-xl w-full"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer group">
                  <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="fade-in-right">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Un nettoyage impeccable pour les Grandes Surfaces
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Découvrez notre équipe utilisant des autolaveuses performantes pour un nettoyage 
              impeccable des grandes surfaces, places de parking et espaces étendus. Grâce à 
              notre approche professionnelle et à l'expertise de notre équipe, nous éliminons 
              efficacement les saletés tout en préservant l'intégrité des revêtements de sol. 
              Nos résultats de haute qualité répondent aux exigences élevées de nos clients.
            </p>
          </div>
        </div>

        {/* Services Process */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="fade-in-left">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Expérience en action
            </Badge>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Propreté Parfaite, Même dans les Zones Difficiles
            </h3>
            
            {/* Services List */}
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg">
              <Link to="/services">
                Voir toutes nos prestations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right - Video Preview */}
          <div className="fade-in-right">
            <Card className="card-professional overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-gradient-subtle h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4 mx-auto hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Nos Prestations en Images
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Découvrez nos techniques de nettoyage professionnel
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};