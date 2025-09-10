import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import YoutubeModal from "./ui/youtube-modal";
import { PressCircular } from "./ui/press-circular";

export const VideoSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-premium rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center text-white mb-16 fade-in-up">
          <Badge className="mb-6 bg-gradient-gold text-accent-foreground border-0 px-4 py-2 text-sm font-semibold pulse-glow">
            🎬 Découvrez NettoPark en action
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
            Nos
            <span className="block text-gradient bg-gradient-gold bg-clip-text text-transparent">
              techniques de nettoyage
            </span>
            en vidéo
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto">
            Découvrez comment nos équipes utilisent des autolaveuses professionnelles 
            pour transformer vos parkings. Une démonstration complète de notre savoir-faire.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Video 1 - Main Demo */}
          <div className="fade-in-left">
            <Card className="card-premium overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 bg-cover bg-center" style={{backgroundImage: 'url("/lovable-uploads/561b718b-28b0-4548-a355-2d3d1dcf02f6.png")'}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <YoutubeModal videoUrl="https://www.youtube.com/watch?v=rB_hcVQcHPQ" TriggerComponent={<PressCircular/>} />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Autolaveuse en Action</h3>
                    <p className="text-blue-100 mb-4">Découvrez nos équipements professionnels à l'œuvre</p>
                    
                    <div className="flex justify-between text-sm">
                      <span className="bg-gradient-gold text-accent-foreground px-3 py-1 rounded-full font-semibold">
                        🎬 Démonstration
                      </span>
                      <span className="text-blue-200">3:45 min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video 2 - Results */}
          <div className="fade-in-right">
            <Card className="card-premium overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 bg-cover bg-center" style={{backgroundImage: 'url("/lovable-uploads/c73ab08b-d45d-43ea-a197-5efec4f829f2.png")'}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <YoutubeModal videoUrl="https://www.youtube.com/watch?v=cdmjuwIRcoc" TriggerComponent={<PressCircular/>} />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Résultats Spectaculaires</h3>
                    <p className="text-blue-100 mb-4">Avant/après de nos interventions de nettoyage</p>
                    
                    <div className="flex justify-between text-sm">
                      <span className="bg-gradient-gold text-accent-foreground px-3 py-1 rounded-full font-semibold">
                        🏆 Résultats
                      </span>
                      <span className="text-blue-200">2:30 min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center fade-in-up">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              size="lg" 
              className="btn-secondary text-lg px-8 py-4"
            >
              <a href="https://www.youtube.com/watch?v=rB_hcVQcHPQ" target="_blank" rel="noopener noreferrer">
                <Play className="w-5 h-5 mr-2" />
                Voir toutes nos vidéos
              </a>
            </Button>
            
            <Button size="lg" className="btn-outline-light text-lg px-8 py-4">
              <ArrowRight className="w-5 h-5 mr-2" />
              Demander un devis gratuit
            </Button>
          </div>
        </div>

        {/* Features Row */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 fade-in-up">
          <Card className="card-professional bg-white/10 border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Démonstration complète</h4>
              <p className="text-blue-100 text-sm">Voir chaque étape du processus de nettoyage professionnel</p>
            </CardContent>
          </Card>

          <Card className="card-professional bg-white/10 border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Techniques avancées</h4>
              <p className="text-blue-100 text-sm">Découvrez nos méthodes et équipements de pointe</p>
            </CardContent>
          </Card>

          <Card className="card-professional bg-white/10 border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Résultats garantis</h4>
              <p className="text-blue-100 text-sm">Constatez par vous-même la transformation</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};