import { Facebook, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { ScrollReveal } from "./ui/ScrollReveal";
import { LegalModal } from "./LegalModal";

export function Footer() {
  const [legalModal, setLegalModal] = useState<"mentions" | "privacy" | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2ECC71]/30 to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] right-[10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Column 1 - Brand */}
          <ScrollReveal delay={0}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 group cursor-pointer">
                <Logo className="w-12 h-12 text-white transition-transform duration-500 group-hover:rotate-180" />
                <span className="text-xl font-bold tracking-tight">VisuaNova Studio</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Agence de design graphique et création web suisse. Nous transformons votre vision en réalité digitale impactante.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Facebook, href: "https://facebook.com/visuanovastudio", label: "Facebook" },
                  { icon: Linkedin, href: "https://linkedin.com/company/visuanova-studio", label: "LinkedIn" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Suivez-nous sur ${social.label}`}
                    className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-[#2ECC71] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <social.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2 - Navigation */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
              <ul className="space-y-4">
                {['Accueil', 'Services', 'Portfolio', 'À propos', 'Contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase() === 'accueil' ? 'hero' : item.toLowerCase().replace(' ', '-'))}
                      className="text-slate-400 hover:text-[#2ECC71] transition-all duration-300 text-sm flex items-center gap-2 group w-full text-left"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Column 3 - Services */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Expertise</h4>
              <ul className="space-y-4">
                {[
                  'Design Réseaux Sociaux',
                  'Création Sites Web',
                  'Affiches Publicitaires'
                ].map((service) => (
                  <li key={service} className="text-sm text-slate-400 hover:text-white transition-colors cursor-default">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Column 4 - Contact */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
              <ul className="space-y-6">
                <li className="group">
                  <a href="mailto:contact@visuanova.ch" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center shrink-0 group-hover:bg-[#2ECC71]/20 transition-colors">
                      <Mail className="w-5 h-5 text-[#2ECC71]" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 mb-1">Email</span>
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">contact@visuanova.ch</span>
                    </div>
                  </a>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center shrink-0 group-hover:bg-[#2ECC71]/20 transition-colors">
                      <MapPin className="w-5 h-5 text-[#2ECC71]" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 mb-1">Localisation</span>
                      <span className="text-sm text-slate-300">Suisse Romande, CH</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal delay={0.4}>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © {currentYear} VisuaNova Studio. <span className="hidden sm:inline">|</span> Fièrement conçu en Suisse 🇨🇭
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <button
                onClick={() => setLegalModal("mentions")}
                className="hover:text-[#2ECC71] transition-colors flex items-center gap-1 group"
              >
                Mentions Légales
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => setLegalModal("privacy")}
                className="hover:text-[#2ECC71] transition-colors flex items-center gap-1 group"
              >
                Politique de Confidentialité
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {legalModal && (
        <LegalModal
          isOpen={true}
          onClose={() => setLegalModal(null)}
          type={legalModal}
        />
      )}
    </footer>
  );
}
