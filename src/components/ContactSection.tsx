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
import { useRef, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import toast from 'react-hot-toast';
import FileUpload from "./ui/file-upload";

export const ContactSection = () => {
  const [status, setStatus] = useState("");
  const [phone, setPhone] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const email = formData.get("email");
    const emailStr = typeof email === "string" ? email : "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailStr)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }
    if (!isValidPhoneNumber(phone)) {
      alert("Numéro de téléphone invalide !");
      return;
    }

    // Convert files to base64
    const filePromises = uploadedFiles.map(
      (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve({
              name: file.name,
              content: (reader.result as string).split(",")[1],
            });
          };
          reader.onerror = reject;
          reader.readAsDataURL(file.file);
        })
    );

    const base64Files = await Promise.all(filePromises);

    const data = {
      company: formData.get("company"),
      email: emailStr,
      phone: phone,
      parkingType: formData.get("parkingType"),
      surface: formData.get("surface"),
      message: formData.get("message"),
      attachments: base64Files,
    };

    sendCoords(data);
  };



  const sendCoords = async (data) => {
    try {
      const res = await axios.post(
        import.meta.env.VITE_APP_BACKEND_URL + "api/send-coords",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200) {
        toast.success("Message envoyé avec succès !");
      } else {
        toast.error("Échec de l'envoi du message. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Échec de l'envoi du message. Veuillez réessayer.");
    }
  };



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
            <form ref={formRef} onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Entreprise *
                  </label>
                  <Input name="company" placeholder="Nom de votre entreprise" required />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input type="email" name="email" placeholder="votre.email@exemple.com" required />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Téléphone *
                  </label>
                  <PhoneInput
                    placeholder="Entrez votre numéro de téléphone"
                    value={phone}
                    onChange={setPhone}
                    defaultCountry="FR"
                    international={true}
                    countryCallingCodeEditable={true}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Type de parking
                  </label>
                  <Input name="parkingType" placeholder="Ex: Parking souterrain résidentiel, commercial..." />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Surface approximative (m²)
                  </label>
                  <Input type="number" min={0} name="surface" placeholder="Ex: 500 m²" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Décrivez vos besoins en détail..."
                    className="min-h-[120px]"
                  />
                </div>

                <div>
                  <FileUpload onFilesChange={setUploadedFiles} />
                </div>

                <Button type="submit" className="btn-primary w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer ma demande
                </Button>


                {status && (
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    {status}
                  </p>
                )}

                <p className="text-sm text-muted-foreground text-center">
                  * Champs obligatoires - Réponse sous 2h ouvrées
                </p>
              </CardContent>
            </form>
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