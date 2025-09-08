import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-premium rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="text-white fade-in-left">
            <Badge className="mb-6 bg-gradient-gold text-accent-foreground border-0 px-4 py-2 text-sm font-semibold pulse-glow">
              🎬 Découvrez NettoPark en action
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Voir nos
              <span className="block text-gradient bg-gradient-gold bg-clip-text text-transparent">
                techniques de nettoyage
              </span>
              en vidéo
            </h2>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed">
              Découvrez comment nos équipes utilisent des autolaveuses professionnelles 
              pour transformer vos parkings. Une démonstration complète de notre savoir-faire 
              et de nos techniques de nettoyage haute performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => window.open('https://youtu.be/rB_hcVQcHPQ', '_blank')}
              >
                <Play className="w-5 h-5 mr-2" />
                Regarder la vidéo
              </Button>
              
              <Button size="lg" className="btn-outline-light text-lg px-8 py-4">
                <ArrowRight className="w-5 h-5 mr-2" />
                Demander un devis
              </Button>
            </div>
          </div>

          {/* Right - Video Preview */}
          <div className="fade-in-right">
            <Card className="card-premium overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50 h-96 flex items-center justify-center backdrop-blur-sm">
                  {/* Video Preview Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 gap-2 h-full p-4">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="bg-white rounded animate-pulse" 
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Play Button and Content */}
                  <div className="text-center text-white relative z-10">
                    <div 
                      className="w-24 h-24 bg-gradient-premium rounded-full flex items-center justify-center text-white mb-6 mx-auto hover:scale-125 transition-all duration-500 cursor-pointer pulse-glow shadow-glow"
                      onClick={() => window.open('https://youtu.be/rB_hcVQcHPQ', '_blank')}
                    >
                      <Play className="w-12 h-12 ml-1" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Nettoyage de Parking
                    </h3>
                    <p className="text-blue-100 text-lg max-w-sm mx-auto mb-6">
                      Découvrez nos autolaveuses en action et nos techniques professionnelles
                    </p>
                    
                    {/* Video Stats */}
                    <div className="flex justify-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-white">3:45</div>
                        <div className="text-blue-200">Durée</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-white">HD</div>
                        <div className="text-blue-200">Qualité</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-white">2024</div>
                        <div className="text-blue-200">Récent</div>
                      </div>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-gold text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    🏆 Expertise
                  </div>
                </div>
              </CardContent>
            </Card>
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
              <p className="text-blue-100 text-sm">Voir chaque étape du processus de nettoyage</p>
            </CardContent>
          </Card>

          <Card className="card-professional bg-white/10 border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Techniques professionnelles</h4>
              <p className="text-blue-100 text-sm">Découvrez nos méthodes éprouvées</p>
            </CardContent>
          </Card>

          <Card className="card-professional bg-white/10 border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Résultats garantis</h4>
              <p className="text-blue-100 text-sm">Constatez par vous-même la qualité</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};