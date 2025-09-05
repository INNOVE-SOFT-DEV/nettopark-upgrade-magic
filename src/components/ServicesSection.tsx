import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Clock, 
  Shield, 
  Sparkles, 
  Settings, 
  CheckCircle,
  Phone,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-cleaning.jpg";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Nettoyage haute pression",
      description: "Élimination complète des taches d'huile, de carburant et autres salissures tenaces",
      features: ["Équipement professionnel", "Produits écologiques", "Résultats garantis"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Entretien régulier",
      description: "Programmes d'entretien personnalisés pour maintenir la propreté de vos parkings",
      features: ["Planning flexible", "Équipe dédiée", "Suivi qualité"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Maintenance préventive",
      description: "Inspection et maintenance pour prévenir les problèmes et prolonger la durée de vie",
      features: ["Diagnostic complet", "Conseils personnalisés", "Rapport détaillé"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Intervention d'urgence",
      description: "Service d'urgence 24h/24 pour vos besoins de nettoyage imprévus",
      features: ["Disponibilité 24h/7j", "Intervention rapide", "Équipe mobile"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Nos Services
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Des solutions complètes pour tous vos besoins
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous proposons une gamme complète de services de nettoyage professionnel 
            adaptés à tous types de parkings et d'espaces souterrains.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-professional hover:border-primary/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Notre Processus
            </Badge>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Une approche méthodique pour des résultats exceptionnels
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Évaluation initiale</h4>
                  <p className="text-muted-foreground">Diagnostic complet de l'état du parking et identification des zones à traiter</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Préparation et protection</h4>
                  <p className="text-muted-foreground">Mise en sécurité de la zone et protection des équipements sensibles</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Nettoyage professionnel</h4>
                  <p className="text-muted-foreground">Application des techniques et produits adaptés selon les besoins</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contrôle qualité</h4>
                  <p className="text-muted-foreground">Vérification des résultats et remise en état des lieux</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button className="btn-primary">
                <Calendar className="w-4 h-4 mr-2" />
                Planifier une intervention
              </Button>
              <Button variant="outline" className="btn-outline">
                <Phone className="w-4 h-4 mr-2" />
                01 87 66 21 30
              </Button>
            </div>
          </div>

          <div className="fade-in-right">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Équipe NettoPark en action" 
                className="rounded-2xl shadow-professional-xl w-full"
              />
              
              {/* Quality Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-professional">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">Certifié Qualité</div>
                    <div className="text-xs text-muted-foreground">ISO 9001</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};