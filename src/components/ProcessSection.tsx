import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Calendar, 
  ClipboardCheck,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import rapportImage from "@/assets/rapport-intervention.png";
import parkingCleaning from "@/assets/parking-cleaning-1.jpg";
import parkingUnderground from "@/assets/parking-underground-1.jpg";

export const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: <FileText className="w-8 h-8" />,
      title: "Demande de devis, Conseils et estimation",
      description: "Demandez un devis gratuit et obtenez une estimation précise et des conseils d'experts pour le nettoyage de votre parking.",
      features: ["Devis gratuit sous 24h", "Conseils personnalisés", "Estimation précise"]
    },
    {
      number: "2", 
      icon: <Calendar className="w-8 h-8" />,
      title: "Planification de l'intervention",
      description: "Une planification personnalisée pour les copropriétés et les entreprises. Choisissez des moments de moindre affluence pour les nettoyages ponctuels.",
      features: ["Horaires flexibles", "Planification adaptée", "Respect des contraintes"]
    },
    {
      number: "3",
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Réalisation et rapport d'intervention",
      description: "Nos experts utilisent des autolaveuses et des techniques adaptées pour des parkings impeccables. Nous établissons un rapport détaillé.",
      features: ["Équipements professionnels", "Rapport détaillé", "Suivi qualité"]
    }
  ];

  const services = [
    {
      title: "Nettoyage haute pression",
      description: "Élimination complète des taches d'huile et salissures avec autolaveuses professionnelles",
      image: parkingCleaning,
      results: ["Élimination 100% des taches", "Surface impeccable", "Durée : 1 jour"]
    },
    {
      title: "Parkings souterrains",
      description: "Nettoyage spécialisé pour parkings résidentiels et commerciaux avec techniques adaptées",
      image: parkingUnderground,
      results: ["Propreté maintenue", "Valorisation du patrimoine", "Clients satisfaits"]
    }
  ];

  return (
    <section id="processus" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Notre processus
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Nos offres s'adaptent à vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Quelle que soit la taille de votre entreprise, nous apportons notre expertise en matière de nettoyage de parkings. 
            Nous adaptons notre offre en fonction de l'importance des missions.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="card-professional group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Showcase */}
        <div className="space-y-16 mb-20">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} fade-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="relative group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-2xl shadow-professional-xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} fade-in-${index % 2 === 0 ? 'right' : 'left'}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    {service.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up">
          <Card className="card-professional max-w-4xl mx-auto bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Prêt à commencer votre projet ?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et un devis personnalisé.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 p-4 bg-background/50 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-medium">01 87 66 21 30</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-background/50 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-medium">hello@nettopark.fr</span>
                </div>
              </div>
              
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">
                  <FileText className="w-4 h-4 mr-2" />
                  Demander un devis gratuit
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};