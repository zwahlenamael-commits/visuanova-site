import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { supabase } from "../lib/supabase";

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteRequestModal({ isOpen, onClose }: QuoteRequestModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setEmail("");
    setName("");
    setPhone("");
    setProject("");
    setServiceType("");
    setError(null);
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Try Supabase first
    if (supabase) {
      const { error: dbError } = await supabase.from("leads").insert({
        email,
        name: name || null,
        phone: phone || null,
        project_description: project,
        service_type: serviceType || null,
        source: "website",
      });

      if (dbError) {
        console.error("Supabase error:", dbError);
        setError("Une erreur est survenue. Votre demande va être envoyée par email.");
        // Fallback to mailto after a short delay
        setTimeout(() => {
          openMailto();
          setIsSubmitting(false);
        }, 2000);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        onClose();
        resetForm();
      }, 3000);
    } else {
      // No Supabase configured — use mailto fallback
      openMailto();
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        onClose();
        resetForm();
      }, 3000);
    }
  };

  const openMailto = () => {
    const subject = "Nouvelle demande de devis - VisuaNova";
    const body = [
      name ? `Nom: ${name}` : "",
      `Email: ${email}`,
      phone ? `Téléphone: ${phone}` : "",
      serviceType ? `Service: ${serviceType}` : "",
      "",
      `Description du projet:`,
      project,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:contact@visuanova.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const services = [
    "Design Réseaux Sociaux",
    "Création de Site Web",
    "Affiches Publicitaires",
    "Présentations & Pitch Decks",
    "SEO & Marketing",
    "Autre",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
          />
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-700/50 w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 rounded-2xl shadow-2xl pointer-events-auto relative"
            >
              {/* Background effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2ECC71]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1ABC9C]/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

              <button
                onClick={onClose}
                aria-label="Fermer"
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSuccess ? (
                <div className="relative">
                  <h2 id="quote-modal-title" className="text-3xl font-bold text-white mb-2">
                    Parlons de votre Projet
                  </h2>
                  <p className="text-slate-400 mb-8">
                    Remplissez ce formulaire pour recevoir une estimation personnalisée.
                  </p>

                  {error && (
                    <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6" role="alert">
                      <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                      <p className="text-sm text-amber-300">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="quote-name" className="block text-xs font-bold text-[#2ECC71] uppercase tracking-wider ml-1">
                        Votre Nom
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/50 focus:border-[#2ECC71] transition-all shadow-inner"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="quote-email" className="block text-xs font-bold text-[#2ECC71] uppercase tracking-wider ml-1">
                        Votre Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        aria-required="true"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/50 focus:border-[#2ECC71] transition-all shadow-inner"
                        placeholder="exemple@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="quote-phone" className="block text-xs font-bold text-[#2ECC71] uppercase tracking-wider ml-1">
                        Téléphone
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/50 focus:border-[#2ECC71] transition-all shadow-inner"
                        placeholder="+41 79 123 45 67"
                      />
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2">
                      <label htmlFor="quote-service" className="block text-xs font-bold text-[#2ECC71] uppercase tracking-wider ml-1">
                        Type de service
                      </label>
                      <select
                        id="quote-service"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/50 focus:border-[#2ECC71] transition-all shadow-inner appearance-none"
                      >
                        <option value="" className="bg-slate-800">Sélectionnez un service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-slate-800">{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Project description */}
                    <div className="space-y-2">
                      <label htmlFor="quote-project" className="block text-xs font-bold text-[#2ECC71] uppercase tracking-wider ml-1">
                        Détails du projet <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="quote-project"
                        required
                        aria-required="true"
                        rows={4}
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/50 focus:border-[#2ECC71] transition-all resize-none shadow-inner"
                        placeholder="Décrivez votre vision, vos objectifs et les délais souhaités..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-[#2ECC71] to-[#27AE60] hover:from-[#2ECC71] hover:to-[#2ECC71] text-white font-bold text-lg rounded-xl mt-4 transition-all shadow-lg shadow-[#2ECC71]/20 hover:shadow-[#2ECC71]/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          Envoyer ma demande <ArrowRight className="w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 bg-[#2ECC71]/20 rounded-full flex items-center justify-center mb-6 text-[#2ECC71] border border-[#2ECC71]/30 shadow-[0_0_30px_rgba(46,204,113,0.3)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Demande Envoyée !</h3>
                  <p className="text-slate-400 max-w-xs mx-auto mb-6">
                    Merci pour votre demande. Nous vous répondrons sous 24 heures avec une estimation personnalisée.
                  </p>
                  <div className="text-sm text-slate-500">Fermeture automatique...</div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
