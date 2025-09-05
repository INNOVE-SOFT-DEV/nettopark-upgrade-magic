import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-professional">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-primary text-white px-4 py-2 rounded-lg font-bold text-xl">
              NettoPark
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#qui-sommes-nous" className="text-foreground hover:text-primary transition-colors">
              Qui sommes-nous ?
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0187662130" className="flex items-center text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              01 87 66 21 30
            </a>
            <Button className="btn-primary">
              Demande de devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#qui-sommes-nous" className="text-foreground hover:text-primary transition-colors">
                Qui sommes-nous ?
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <a href="tel:0187662130" className="flex items-center text-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  01 87 66 21 30
                </a>
                <Button className="btn-primary w-full">
                  Demande de devis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};