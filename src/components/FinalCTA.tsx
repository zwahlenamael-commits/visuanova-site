import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Mail, ArrowRight, Send, MapPin, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { ChatInterface } from "./ui/ChatInterface";
import { QuoteRequestModal } from "./QuoteRequestModal";

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const benefits = [
    { title: "Devis Gratuit Sous 24h", subtitle: "Réponse rapide et transparente", icon: Send },
    { title: "Accompagnement Personnalisé", subtitle: "Un suivi de A à Z", icon: CheckCircle2 },
    { title: "Satisfaction Garantie", subtitle: "2 révisions incluses", icon: CheckCircle2 },
  ];

  return (
    <section id="contact" className="relative bg-[#0F172A] overflow-hidden text-white min-h-[900px] flex items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#2ECC71]/20 to-[#1ABC9C]/20 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        {/* Animated Particles/Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left - Content - Enable pointer events since parent disables them */}
          <div className="space-y-10 py-24 pointer-events-auto max-w-xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
                <span className="text-sm font-medium text-white/90">Prêt à démarrer ?</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                Donnons Vie à <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C]">
                  Vos Projets
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
                Vous avez une vision, nous avons les compétences pour la réaliser. Discutons de votre projet et créons ensemble quelque chose d'unique.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#2ECC71]/50 group-hover:bg-[#2ECC71]/10 transition-all duration-300">
                      <benefit.icon className="w-6 h-6 text-[#2ECC71]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-[#2ECC71] transition-colors">{benefit.title}</h4>
                      <p className="text-sm text-slate-400">{benefit.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="h-14 px-8 text-lg bg-[#2ECC71] hover:bg-[#27AE60] text-white shadow-lg shadow-[#2ECC71]/25 hover:shadow-[#2ECC71]/40 transition-all duration-300 rounded-full group w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Demander un Devis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500 pt-6 border-t border-white/10">
                <div 
                  onClick={() => window.location.href = 'mailto:contact@visuanova.ch'}
                  className="flex items-center gap-2 hover:text-[#2ECC71] transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  contact@visuanova.ch
                </div>
                <div className="flex items-center gap-2 hover:text-[#2ECC71] transition-colors cursor-pointer">
                  <MapPin className="w-4 h-4" />
                  Suisse
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Right - Chat Interface (Breakout Layout) */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[55%] h-[85%] z-20 pl-12 rounded-l-3xl overflow-hidden pointer-events-auto shadow-[-20px_0_50px_rgba(0,0,0,0.3)]">
         <ScrollReveal direction="left" delay={0.2} className="h-full w-full">
          <div className="relative w-full h-full">
            {/* Background Shapes for the Chat */}
            <div className="absolute top-10 -right-10 w-full h-full bg-[#2ECC71] rounded-[2.5rem] opacity-5 transform rotate-2 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-[#1ABC9C] rounded-[2.5rem] opacity-5 transform -rotate-2 blur-2xl" />
            
            {/* Chat Component - Custom styled to fit the breakout container */}
            <div className="h-full w-full rounded-l-3xl rounded-r-none overflow-hidden bg-slate-900 border-l border-t border-b border-slate-700/50">
                <ChatInterface className="w-full h-full flex flex-col relative bg-transparent" />
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Mobile view of Chat Interface */}
      <div className="lg:hidden block px-4 pb-24 relative z-10 w-full h-[600px]">
         <ChatInterface />
      </div>

      {/* Modal */}
      <QuoteRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
