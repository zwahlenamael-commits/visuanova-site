import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Award, Coffee, Users } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { useRef } from "react";

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="about" ref={containerRef} className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-green-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-40 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            style={{ y }}
            className="relative order-2 lg:order-1"
          >
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71] to-[#1ABC9C] rounded-[2.5rem] blur-xl opacity-20 transform group-hover:scale-105 transition-transform duration-700" />
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1625050372299-7529e55ae481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZSUyMHN3aXR6ZXJsYW5kfGVufDF8fHx8MTc2NjkzNzU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="VisuaNova Studio - Agence créative en Suisse"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-slate-100 z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center">
                      <Award className="w-7 h-7 text-[#2ECC71]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500">Basé en</div>
                      <div className="text-xl font-bold text-slate-900">Suisse 🇨🇭</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                <Users className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">À Propos de Nous</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Une Agence Créative, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C]">Guidée par l'Impact</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Fondée en Suisse, <strong className="text-slate-900">VisuaNova Studio</strong> est une agence créative spécialisée dans le design graphique et la création web. Notre conviction : le design doit être plus qu'esthétique — <strong className="text-slate-900">il doit être fonctionnel et stratégique.</strong>
                </p>
                <p>
                  Notre mission est d'aider les entreprises à se démarquer dans un marché saturé. Nous combinons créativité visuelle et expertise technique pour créer des marques fortes et des sites web performants.
                </p>
                <div className="pl-6 border-l-4 border-[#2ECC71]">
                  <p className="italic text-slate-500">
                    "Chaque pixel compte, chaque couleur a un sens. Notre travail est de traduire votre vision en une expérience visuelle mémorable."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#2ECC71]">
                    <Coffee className="w-5 h-5" />
                    <span className="text-sm font-medium">Expérience</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900">3+</div>
                  <div className="text-sm text-slate-500">Années</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#1ABC9C]">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-medium">Projets</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-500">Réalisés</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-red-500">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-medium">Localisation</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900">CH</div>
                  <div className="text-sm text-slate-500">Suisse</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
