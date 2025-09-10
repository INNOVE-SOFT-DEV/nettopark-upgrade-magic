import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import YoutubeModal from "@/components/ui/youtube-modal";
import { CheckCircle, ArrowRight, Play, Sparkles, Zap, Target } from "lucide-react";
import parkingCleaning from "@/assets/parking-cleaning-1.jpg";
import parkingUnderground from "@/assets/parking-underground-1.jpg";
import parkingMaintenance from "@/assets/parking-maintenance.jpg";
import parkingCommercial from "/lovable-uploads/9c6196a6-2396-4aaf-b5a1-e422eae304dc.png";
import { CircularTrigger } from "./ui/circular-trigger";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Dépoussiérage et lavage",
      description: "Balayeuse aspirante pour éliminer les impuretés"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Dégraissage haute CircularTriggerion",
      description: "Nettoyage en profondeur pour éliminer les taches tenaces"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Finitions manuelles",
      description: "Attention aux détails dans les zones inaccessibles"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 fade-in-up">
          <Badge className="mb-6 bg-gradient-primary text-primary-foreground border-0 px-6 py-3 text-sm font-semibold pulse-glow">
            🚀 Autolaveuse en action
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8">
            Découvrez nos services à travers
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              nos réalisations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nous apportons notre expertise quelle que soit la taille de votre entreprise. 
            Selon l'importance des missions nous modulons notre offre pour satisfaire vos besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image */}
          <div className="fade-in-left">
            <div className="relative float-animation">
              <img 
                src={parkingCleaning} 
                alt="Autolaveuse professionnelle en action pour le nettoyage de parking" 
                className="rounded-3xl shadow-premium w-full h-96 object-cover pulse-glow hover:scale-105 transition-transform duration-500"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                  <YoutubeModal videoUrl="https://www.youtube.com/watch?v=IAIxDaS83gI&t" TriggerComponent={<CircularTrigger/>} />
              </div>

              {/* Quality Badge */}
              <div className="absolute top-6 right-6 card-premium p-4 rounded-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">100%</div>
                  <div className="text-xs text-muted-foreground font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="fade-in-right">
            <Badge className="mb-6 bg-gradient-gold text-accent-foreground border-0 px-4 py-2 text-sm font-semibold">
              ⚡ Performance maximale
            </Badge>
            
            <h3 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
              Un nettoyage impeccable pour les
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Grandes Surfaces
              </span>
            </h3>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Découvrez notre équipe utilisant des autolaveuses performantes pour un nettoyage 
              impeccable des grandes surfaces, places de parking et espaces étendus. Grâce à 
              notre approche professionnelle et à l'expertise de notre équipe, nous éliminons 
              efficacement les saletés tout en préservant l'intégrité des revêtements de sol.
            </p>

            <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
              <Link to="/services">
                Découvrir tous nos services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Services Process */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="fade-in-left">
            <Badge className="mb-6 bg-gradient-premium text-primary-foreground border-0 px-4 py-2 text-sm font-semibold">
              🎯 Expérience en action
            </Badge>
            
            <h3 className="text-3xl lg:text-5xl font-bold text-foreground mb-10">
              Propreté Parfaite,
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Même dans les Zones Difficiles
              </span>
            </h3>
            
            {/* Services List */}
            <div className="space-y-6 mb-12">
              {services.map((service, index) => (
                <div key={index} className="card-premium p-6 rounded-2xl fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{service.title}</h4>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="btn-outline text-lg px-8 py-4">
              <Link to="/services">
                Voir toutes nos prestations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right - Video Preview */}
          <div className="fade-in-right">
            <Card className="card-premium overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-gradient-hero h-80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <YoutubeModal videoUrl="https://www.youtube.com/watch?v=IAIxDaS83gI&t" TriggerComponent={<CircularTrigger />} />
                    <h4 className="text-2xl font-bold mb-4">
                      Nos Prestations en Images
                    </h4>
                    <p className="text-blue-100 text-lg max-w-xs mx-auto">
                      Découvrez nos techniques de nettoyage professionnel en action
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