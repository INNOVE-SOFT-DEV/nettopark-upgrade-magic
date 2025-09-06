import { Badge } from "@/components/ui/badge";
import logoPichet from "@/assets/logo-pichet.svg";
import logoNexity from "@/assets/logo-nexity.svg";
import logoIcade from "@/assets/logo-icade.svg";
import logoAltarea from "@/assets/logo-altarea.svg";

export const ClientLogos = () => {
  const clients = [
    { 
      name: "Pichet", 
      logo: logoPichet,
      alt: "Logo Pichet - Promoteur immobilier client de NettoPark"
    },
    { 
      name: "Nexity", 
      logo: logoNexity,
      alt: "Logo Nexity - Promoteur immobilier client de NettoPark"
    },
    { 
      name: "Icade", 
      logo: logoIcade,
      alt: "Logo Icade - Foncière immobilière cliente de NettoPark"
    },
    { 
      name: "Altarea Cogedim", 
      logo: logoAltarea,
      alt: "Logo Altarea Cogedim - Promoteur immobilier client de NettoPark"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-subtle border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 fade-in-up">
          <Badge variant="outline" className="mb-4 text-muted-foreground border-muted-foreground/30">
            Ils nous ont fait confiance
          </Badge>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={client.logo} 
                alt={client.alt}
                className="h-8 lg:h-12 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 fade-in-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+1200</div>
            <div className="text-muted-foreground">Missions accomplies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction des clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+10</div>
            <div className="text-muted-foreground">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24h/7j</div>
            <div className="text-muted-foreground">Disponibilité</div>
          </div>
        </div>
      </div>
    </section>
  );
};