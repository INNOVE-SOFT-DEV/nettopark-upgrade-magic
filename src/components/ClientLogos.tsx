import { Badge } from "@/components/ui/badge";
import logoPichet from "@/assets/logo-pichet.svg";
import logoNexity from "@/assets/logo-nexity.svg";
import logoIcade from "@/assets/logo-icade.svg";
import logoAltarea from "@/assets/logo-altarea.svg";

export const ClientLogos = () => {
  const clients = [
    { name: "Pichet", logo: logoPichet },
    { name: "Nexity", logo: logoNexity },
    { name: "Icade", logo: logoIcade },
    { name: "Altarea", logo: logoAltarea },
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-mesh"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Badge className="mb-6 bg-gradient-primary text-primary-foreground border-0 px-4 py-2 text-sm font-semibold pulse-glow">
            🏆 Ils nous font confiance
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Des partenaires de prestige
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les plus grands noms de l'immobilier nous confient leurs parkings. 
            Rejoignez notre cercle de clients satisfaits.
          </p>
        </div>

        {/* Animated Logo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className="fade-in-up card-premium p-8 lg:p-12 rounded-2xl group hover:scale-110 transition-all duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img 
                src={client.logo}
                alt={`Logo ${client.name} - Promoteur immobilier client de NettoPark`}
                className="w-full h-12 lg:h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 fade-in-up">
          <div className="text-center card-premium p-8 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">100+</div>
            <div className="text-sm text-muted-foreground font-medium">Clients fidèles</div>
          </div>
          <div className="text-center card-premium p-8 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-sm text-muted-foreground font-medium">Parkings nettoyés</div>
          </div>
          <div className="text-center card-premium p-8 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10+</div>
            <div className="text-sm text-muted-foreground font-medium">Années d'expérience</div>
          </div>
          <div className="text-center card-premium p-8 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">24h</div>
            <div className="text-sm text-muted-foreground font-medium">Temps de réponse</div>
          </div>
        </div>
      </div>
    </section>
  );
};