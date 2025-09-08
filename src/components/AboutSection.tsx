import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  CheckCircle,
  Calendar,
  MapPin,
  TrendingUp
} from "lucide-react";
import teamPhoto from "@/assets/walid-team.jpg";

export const AboutSection = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque intervention pour garantir votre satisfaction."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Engagement",
      description: "Notre engagement envers nos clients se traduit par un service de qualité irréprochable."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Équipe experté",
      description: "Une équipe formée et certifiée pour répondre à tous vos besoins de nettoyage."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Innovation",
      description: "Nous utilisons les dernières technologies et techniques pour des résultats optimaux."
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Création de NettoPark",
      description: "Lancement de l'entreprise avec une vision claire : révolutionner le nettoyage de parkings"
    },
    {
      year: "2012",
      title: "Expansion régionale",
      description: "Extension de nos services à toute la région parisienne"
    },
    {
      year: "2016",
      title: "Certification ISO 9001",
      description: "Obtention de la certification qualité ISO 9001"
    },
    {
      year: "2020",
      title: "200+ clients fidèles",
      description: "Atteinte de 200 clients réguliers et développement de l'équipe"
    },
    {
      year: "2024",
      title: "Leader du secteur",
      description: "Reconnaissance comme leader du nettoyage de parkings en Île-de-France"
    }
  ];

  return (
    <section id="qui-sommes-nous" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Qui sommes-nous ?
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            15 ans d'expertise au service de la propreté
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depuis 2009, NettoPark s'impose comme le spécialiste du nettoyage de parkings 
            en région parisienne. Notre mission : transformer vos espaces de stationnement 
            en environnements propres et accueillants.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Company Story */}
          <div className="fade-in-left">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Notre histoire, votre satisfaction
            </h3>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">NettoPark</strong> est née de la vision d'offrir 
                un service de nettoyage professionnel spécialement adapté aux parkings et espaces 
                souterrains. Fondée en 2009, notre entreprise familiale a grandi grâce à notre 
                engagement envers l'excellence et la satisfaction client.
              </p>
              
              <p>
                Avec plus de <strong className="text-primary">15 ans d'expérience</strong>, nous avons 
                développé une expertise unique dans le traitement des défis spécifiques aux parkings : 
                taches d'huile persistantes, accumulation de poussière, nettoyage en profondeur des 
                surfaces béton, et bien plus encore.
              </p>
              
              <p>
                Aujourd'hui, notre équipe de <strong className="text-primary">25 professionnels</strong> 
                intervient quotidiennement dans toute la région parisienne, équipée des technologies 
                les plus avancées pour garantir des résultats exceptionnels.
              </p>
            </div>

            {/* Key Numbers */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gradient-subtle rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">200+</div>
                <div className="text-sm text-muted-foreground">Clients actifs</div>
              </div>
              <div className="text-center p-4 bg-gradient-subtle rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Interventions réalisées</div>
              </div>
            </div>
          </div>

          {/* Right - Team Photo */}
          <div className="fade-in-right">
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Équipe NettoPark - Professionnels du nettoyage" 
                className="rounded-2xl shadow-professional-xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              
              {/* Quality Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-professional">
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-bold text-foreground">ISO 9001</div>
                  <div className="text-xs text-muted-foreground">Certifié Qualité</div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-4 left-4 bg-gradient-primary text-white rounded-lg p-4 shadow-professional">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Ans d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 fade-in-up">
            Nos valeurs fondamentales
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="card-professional text-center group hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="fade-in-up">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Notre parcours vers l'excellence
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <Card className={`w-full max-w-md card-professional ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-primary border-primary">
                          {milestone.year}
                        </Badge>
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 fade-in-up">
          <Card className="card-professional bg-gradient-primary text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Rejoignez nos 200+ clients satisfaits
              </h3>
              <p className="text-blue-100 mb-6">
                Découvrez pourquoi les plus grandes entreprises de la région nous font confiance 
                pour l'entretien de leurs parkings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    <Calendar className="w-4 h-4 mr-2" />
                    Planifier une visite
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/services">
                    <MapPin className="w-4 h-4 mr-2" />
                    Voir nos réalisations
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};