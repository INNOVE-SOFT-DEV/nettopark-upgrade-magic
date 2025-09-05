export const ClientLogos = () => {
  const clients = [
    { name: "Pichet", logo: "https://uploads-ssl.webflow.com/64887bbcdfc81f3eb028460c/6492f9a40f571d5937cc72a2_logo-pichet%202.svg" },
    { name: "Pitch", logo: "https://uploads-ssl.webflow.com/64887bbcdfc81f3eb028460c/6492f9a36a247d530bf2d3bf_logo_pitch%202.svg" },
    { name: "Client 3", logo: "https://uploads-ssl.webflow.com/64887bbcdfc81f3eb028460c/6492f9a44e41c2d6d7aa5383_Frame%20136.svg" },
    { name: "Client 4", logo: "https://uploads-ssl.webflow.com/64887bbcdfc81f3eb028460c/6492f9a54d49417a2f397e5c_logo_pitch%206.svg" },
    { name: "Altarea Cogedim", logo: "https://uploads-ssl.webflow.com/64887bbcdfc81f3eb028460c/64c9308b8482f752b90a8c5e_altarea-cogedim-logo-vector.svg" },
    { name: "Client 6", logo: "https://uploads-ssl.webflow.com/64887bbcdfc81f3eb028460c/6492f9a57f093e3ab80ce0fc_logo_pitch%204.svg" },
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Ils nous ont fait confiance
          </h2>
          <p className="text-muted-foreground">
            Plus de 200 entreprises nous font confiance pour l'entretien de leurs parkings
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-professional transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={client.logo} 
                alt={`Logo ${client.name}`}
                className="max-w-full h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 fade-in-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24h/7j</div>
            <div className="text-muted-foreground">Disponibilité</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15 ans</div>
            <div className="text-muted-foreground">D'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};