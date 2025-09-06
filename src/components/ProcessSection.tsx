import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Calendar, 
  ClipboardCheck,
  ArrowRight
} from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      number: "1",
      title: "Demande de devis, Conseils et estimation",
      description: "Demandez un devis gratuit et obtenez une estimation précise et des conseils d'experts pour le nettoyage de votre parking, nous proposons des interventions ponctuelles ou des contrats d'entretien régulier."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "2", 
      title: "Planification de l'intervention",
      description: "Une planification personnalisée pour les copropriétés et les entreprises. Choisissez des moments de moindre affluence pour les nettoyages ponctuels et bénéficiez d'un calendrier d'entretien régulier flexible, adapté à vos préférences et à vos disponibilités."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      number: "3",
      title: "Réalisation et rapport d'intervention", 
      description: "Nos experts utilisent des auto-laveuses et des techniques adaptées pour des parkings impeccables. Nous établissons un rapport détaillé avec travaux réalisés, observations et recommandations pour l'entretien futur du parking."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Notre processus
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Nos offres s'adaptent à vous
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Quelle que soit la taille de votre entreprise, nous apportons notre expertise 
            en matière de nettoyage de parkings. Nous adaptons notre offre en fonction de 
            l'importance des missions, en utilisant des auto-laveuses et en mobilisant nos 
            équipes expérimentées, afin de répondre pleinement à vos besoins spécifiques.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Demander un devis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="card-professional relative group hover:shadow-professional-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};