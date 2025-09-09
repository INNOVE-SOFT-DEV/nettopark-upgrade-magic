import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import clientPhoto from "@/assets/client-karim.jpg";

export const TestimonialsSection = () => {
  const testimonial = {
    quote: "NettoPark a dépassé mes attentes en tant que prestataire de nettoyage de parkings. Leur équipe professionnelle a parfaitement répondu à nos exigences",
    author: "Karim",
    role: "Maitre d'oeuvre, cabinet de Alexandris Pour le compte de COGEDIM",
    rating: 5
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Testimonial */}
          <div className="fade-in-left">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              TÉMOIGNAGES
            </Badge>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Ce que disent nos clients de nous
            </h2>
            
            <Card className="card-professional bg-gradient-card relative overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-20 h-20" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote */}
                <h3 className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
                  "Je les recommande vivement !"
                </h3>
                
                <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Image */}
          <div className="fade-in-right">
            <div className="relative">
              <img 
                src={clientPhoto} 
                alt="Client satisfait de nos services de nettoyage" 
                className="rounded-2xl shadow-professional-xl w-full"
              />
              
              {/* Satisfaction Badge */}
              <div className="absolute bottom-4 left-4 bg-gradient-primary text-white rounded-lg p-4 shadow-professional">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Découvrez ce que nos clients ont à dire sur leur expérience avec NettoPark.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Nos réalisations</Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};