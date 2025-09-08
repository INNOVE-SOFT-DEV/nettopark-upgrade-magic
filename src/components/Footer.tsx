import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin,
  Clock,
  Shield
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="bg-gradient-primary text-white px-4 py-2 rounded-lg font-bold text-xl w-fit">
              NettoPark
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experts du nettoyage de parkings en région parisienne. 
              Une propreté éclatante qui crée une impression durable.
            </p>
            
            {/* Certifications */}
            <div className="space-y-2">
              <Badge variant="outline" className="border-primary text-primary">
                <Shield className="w-3 h-3 mr-1" />
                Certifié ISO 9001
              </Badge>
              <div className="text-sm text-gray-400">
                Assurance responsabilité civile professionnelle
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Nos Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Nettoyage haute pression
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Entretien régulier
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Maintenance préventive
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Intervention d'urgence
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Dégraissage industriel
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">01 87 66 21 30</div>
                  <div className="text-sm text-gray-400">Disponible 24h/7j</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">contact@nettopark.fr</div>
                  <div className="text-sm text-gray-400">Réponse sous 2h</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">Région Parisienne</div>
                  <div className="text-sm text-gray-400">Paris et Petite Couronne</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Disponibilité</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">24h/24 - 7j/7</div>
                  <div className="text-sm text-gray-400">Intervention d'urgence</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold">Suivez-nous</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/company/91605198" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 NettoPark. Tous droits réservés.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/contact" className="hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};