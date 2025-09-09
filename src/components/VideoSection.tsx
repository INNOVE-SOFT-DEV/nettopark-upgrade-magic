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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Video 1 - Équipements */}
          <Card className="card-premium overflow-hidden group hover:scale-105 transition-all duration-500">
            <CardContent className="p-0">
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <a 
                  href="https://youtu.be/IAIxDaS83gI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform pulse-glow">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                </a>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="font-bold text-foreground text-sm mb-1">Équipements Professionnels</h3>
                    <p className="text-xs text-muted-foreground">Découvrez nos autolaveuses</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video 2 - Démonstration */}
          <Card className="card-premium overflow-hidden group hover:scale-105 transition-all duration-500">
            <CardContent className="p-0">
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <a 
                  href="https://youtu.be/rB_hcVQcHPQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform pulse-glow">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                </a>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="font-bold text-foreground text-sm mb-1">Nettoyage en Action</h3>
                    <p className="text-xs text-muted-foreground">Techniques professionnelles</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video 3 - Résultats */}
          <Card className="card-premium overflow-hidden group hover:scale-105 transition-all duration-500 md:col-span-2 lg:col-span-1">
            <CardContent className="p-0">
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <a 
                  href="https://youtu.be/cdmjuwIRcoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform pulse-glow">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                </a>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="font-bold text-foreground text-sm mb-1">Résultats Spectaculaires</h3>
                    <p className="text-xs text-muted-foreground">Avant/après transformations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center fade-in-up">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              size="lg" 
              className="btn-secondary text-lg px-8 py-4"
            >
              <a href="https://youtu.be/IAIxDaS83gI" target="_blank" rel="noopener noreferrer">
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