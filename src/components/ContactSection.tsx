import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Contact
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Demandez votre devis gratuit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé 
            et découvrir comment nous pouvons améliorer la propreté de vos parkings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="card-professional fade-in-left">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Send className="w-6 h-6 text-primary" />
                Formulaire de contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Entreprise *
                </label>
                <Input placeholder="Nom de votre entreprise" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email *
                </label>
                <Input type="email" placeholder="votre.email@exemple.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Téléphone *
                </label>
                <Input type="tel" placeholder="01 23 45 67 89" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Type de parking
                </label>
                <Input placeholder="Ex: Parking souterrain résidentiel, commercial..." />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Surface approximative (m²)
                </label>
                <Input placeholder="Ex: 500 m²" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Décrivez vos besoins en détail..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="btn-primary w-full">
                <Send className="w-4 h-4 mr-2" />
                Envoyer ma demande
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * Champs obligatoires - Réponse sous 2h ouvrées
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 fade-in-right">
            {/* Contact Cards */}
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Appelez-nous</h3>
                    <p className="text-2xl font-bold text-primary">01 87 66 21 30</p>
                    <p className="text-sm text-muted-foreground">Disponible 24h/7j</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-lg font-medium text-primary">contact@nettopark.fr</p>
                    <p className="text-sm text-muted-foreground">Réponse sous 2h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Zone d'intervention</h3>
                    <p className="text-lg font-medium text-primary">Région Parisienne</p>
                    <p className="text-sm text-muted-foreground">Paris et Petite Couronne</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Horaires</h3>
                    <p className="text-lg font-medium text-primary">24h/24 - 7j/7</p>
                    <p className="text-sm text-muted-foreground">Intervention d'urgence</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <Card className="card-professional bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Nos garanties</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span>Devis gratuit sous 24h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span>Intervention rapide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span>Satisfaction garantie</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span>Assurance responsabilité civile</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};