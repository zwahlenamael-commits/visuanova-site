import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Send } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedTheme?: string;
}

export function ContactDialog({ open, onOpenChange, selectedTheme = "" }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    theme: "",
    message: ""
  });

  // Update theme when selectedTheme prop changes
  useEffect(() => {
    if (selectedTheme) {
      setFormData(prev => ({ ...prev, theme: selectedTheme }));
    }
  }, [selectedTheme]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le corps de l'email
    const emailBody = `Bonjour VisuaNova Studio,

Nom: ${formData.name}
Email: ${formData.email}
Thème demandé: ${formData.theme}

Message:
${formData.message}

---
Cet email a été envoyé depuis le formulaire de contact du site VisuaNova Studio.`;

    const emailSubject = `Demande de création: ${formData.theme}`;
    
    // Encoder pour mailto
    const mailtoLink = `mailto:contact@visuanova-studio.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    // Réinitialiser et fermer
    setFormData({
      name: "",
      email: "",
      theme: "",
      message: ""
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#10b981]" />
            Demander une Création
          </DialogTitle>
          <DialogDescription>
            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Votre Nom *</Label>
            <Input
              id="name"
              placeholder="Jean Dupont"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-gray-300 focus:border-[#10b981] focus:ring-[#10b981]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Votre Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="jean.dupont@exemple.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-gray-300 focus:border-[#10b981] focus:ring-[#10b981]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="theme">Thème / Service *</Label>
            <Input
              id="theme"
              placeholder="Ex: Flyers, Posts réseaux sociaux..."
              value={formData.theme}
              onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
              required
              className="border-gray-300 focus:border-[#10b981] focus:ring-[#10b981]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Votre Message *</Label>
            <Textarea
              id="message"
              placeholder="Décrivez votre projet, vos besoins, vos délais..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="border-gray-300 focus:border-[#10b981] focus:ring-[#10b981] resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#10b981] hover:bg-[#059669] text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              Envoyer
            </Button>
          </div>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          * Tous les champs sont obligatoires
        </p>
      </DialogContent>
    </Dialog>
  );
}