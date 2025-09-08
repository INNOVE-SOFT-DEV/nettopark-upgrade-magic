import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Star, 
  Quote, 
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Award,
  Eye,
  CheckCircle
} from "lucide-react";
import realization1 from "@/assets/realisation-parking-1.jpg";
import realization2 from "@/assets/realisation-parking-2.jpg";
import realization3 from "@/assets/realisation-parking-3.jpg";
import realization4 from "@/assets/realisation-parking-4.jpg";

export const RealizationsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Parking Souterrain Résidentiel",
      category: "Résidentiel",
      surface: "2 500 m²",
      duration: "3 jours",
      image: realization1,
      description: "Nettoyage complet d'un parking souterrain résidentiel avec autolaveuses professionnelles.",
      results: ["Élimination 100% des taches d'huile", "Amélioration de la propreté", "Satisfaction client : 5/5"],
      testimonial: {
        text: "Un travail remarquable ! Le parking n'avait jamais été aussi propre. L'équipe NettoPark est très professionnelle.",
        author: "Marie Dubois",
        position: "Syndic de copropriété"
      }
    },
    {
      id: 2,
      title: "Centre Commercial - Grande Surface",
      category: "Commercial",
      surface: "8 000 m²",
      duration: "1 semaine",
      image: realization2,
      description: "Entretien régulier et nettoyage haute pression pour un parking commercial à forte fréquentation.",
      results: ["Réduction de 90% des temps d'arrêt", "Amélioration de l'image du centre", "Contrat renouvelé 3 ans"],
      testimonial: {
        text: "NettoPark nous accompagne depuis 5 ans. Leur réactivité et professionnalisme sont exemplaires.",
        author: "Jean-Pierre Martin",
        position: "Directeur technique"
      }
    },
    {
      id: 3,
      title: "Parking d'Entreprise - Bureaux",
      category: "Professionnel",
      surface: "3 200 m²", 
      duration: "4 jours",
      image: realization3,
      description: "Nettoyage approfondi d'un parking d'entreprise avec techniques spécialisées.",
      results: ["Transformation spectaculaire", "Valorisation du patrimoine", "ROI immédiat constaté"],
      testimonial: {
        text: "Incroyable transformation ! On ne reconnaît plus notre parking. Un investissement qui en valait la peine.",
        author: "Sophie Laurent",
        position: "Gestionnaire immobilier"
      }
    },
    {
      id: 4,
      title: "Copropriété - Maintenance Régulière",
      category: "Résidentiel",
      surface: "1 800 m²", 
      duration: "2 jours",
      image: realization4,
      description: "Entretien régulier avec contrat de maintenance pour une copropriété parisienne.",
      results: ["Propreté maintenue toute l'année", "Réduction des coûts à long terme", "Résidents satisfaits"],
      testimonial: {
        text: "Avec NettoPark, notre parking reste impeccable toute l'année. Service irréprochable.",
        author: "Pierre Lefebvre",
        position: "Président de copropriété"
      }
    }
  ];

  const stats = [
    { number: "200+", label: "Projets réalisés", icon: <Award className="w-5 h-5" /> },
    { number: "95%", label: "Clients fidèles", icon: <Users className="w-5 h-5" /> },
    { number: "24h", label: "Délai d'intervention", icon: <Calendar className="w-5 h-5" /> },
    { number: "100%", label: "Satisfaction garantie", icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <section id="realisations" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Nos Réalisations
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Découvrez nos succès et transformations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chaque projet est unique. Découvrez comment nous avons transformé des parkings 
            ordinaires en espaces exceptionnels qui reflètent l'image de nos clients.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 fade-in-up">
          {stats.map((stat, index) => (
            <Card key={index} className="card-professional text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} fade-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-2xl shadow-professional-xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-gradient-primary text-white border-0">
                    {project.category}
                  </Badge>
                  
                  {/* View Details Button */}
                  <div className="absolute inset-0 bg-primary/80 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="lg" className="bg-white text-primary">
                      <Eye className="w-4 h-4 mr-2" />
                      Voir en détail
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} fade-in-${index % 2 === 0 ? 'right' : 'left'}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Surface: {project.surface}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Durée: {project.duration}</span>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Résultats obtenus :</h4>
                    <div className="space-y-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <Card className="card-professional bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Quote className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-muted-foreground italic mb-3">
                            "{project.testimonial.text}"
                          </p>
                          <div>
                            <div className="font-semibold text-foreground">
                              {project.testimonial.author}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {project.testimonial.position}
                            </div>
                          </div>
                          <div className="flex gap-1 mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA Button */}
                  <Button asChild className="btn-primary">
                    <Link to="/contact">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Projet similaire ? Contactez-nous
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 fade-in-up">
          <Card className="card-professional max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Votre projet mérite le même niveau d'excellence
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Chaque parking est unique, chaque défi nous motive. Parlons de votre projet 
                et découvrons ensemble comment nous pouvons transformer votre espace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/contact">
                    <Calendar className="w-4 h-4 mr-2" />
                    Planifier une évaluation gratuite
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-outline">
                  <Link to="/services">
                    <Eye className="w-4 h-4 mr-2" />
                    Voir plus de réalisations
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