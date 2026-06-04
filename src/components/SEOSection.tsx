import { Search, BarChart3, Target, Zap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { ScrollReveal } from "./ui/ScrollReveal";
import { cn } from "./ui/utils";

export function SEOSection() {
  const seoFeatures = [
    {
      icon: Search,
      title: "SEO Technique",
      description: "Optimisation de la structure, balises meta, vitesse de chargement et indexation pour un référencement optimal",
      color: "#2ECC71",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Analyse & Performance",
      description: "Suivi des performances, analyse des mots-clés et rapports réguliers pour mesurer vos résultats",
      color: "#3498DB",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "Stratégie de Contenu",
      description: "Création de contenu optimisé SEO qui attire votre audience cible et améliore votre visibilité",
      color: "#E74C3C",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Optimisation Conversion",
      description: "Design UX/UI pensé pour transformer vos visiteurs en clients avec des CTA stratégiques",
      color: "#F39C12",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-green-100/40 to-cyan-100/40 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal width="100%" className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 mb-6"
            >
              <Search className="w-4 h-4 text-[#2ECC71]" />
              <span className="text-sm font-medium text-slate-700">Ma Valeur Ajoutée</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Design + Marketing +{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] bg-clip-text text-transparent">
                  SEO
                </span>
                <motion.svg
                  className="absolute w-full h-3 -bottom-1 left-0 z-0 text-[#2ECC71]/20"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </motion.svg>
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ce qui me différencie ? Je ne fais pas que créer de beaux designs. J'optimise votre 
              visibilité en ligne et je vous aide à attirer plus de clients grâce au SEO et au marketing digital.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {seoFeatures.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1} className="h-full">
              <motion.div whileHover={{ y: -8 }} className="h-full">
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="p-8">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative"
                    >
                      <div className={`absolute inset-0 rounded-2xl opacity-10 bg-gradient-to-br ${feature.gradient}`} />
                      <feature.icon 
                        className="w-8 h-8 relative z-10" 
                        style={{ color: feature.color }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2ECC71] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Value Proposition */}
        <ScrollReveal width="100%">
          <div className="relative rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-[#1E293B] z-0" />
            
            {/* Animated Background Shapes */}
            <motion.div 
              className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2ECC71]/10 rounded-full blur-[80px]"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1ABC9C]/10 rounded-full blur-[60px]"
              animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0] }}
              transition={{ duration: 15, repeat: Infinity, delay: 2 }}
            />

            <div className="relative z-10 p-8 sm:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Des Visuels Qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C]">Augmentent l'Engagement</span>
              </h3>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
                Mes designs ne sont pas créés au hasard. Chaque élément est pensé stratégiquement 
                pour capter l'attention, engager votre audience et maximiser vos conversions.
              </p>

              <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { value: "+150%", label: "Engagement moyen", delay: 0 },
                  { value: "+80%", label: "Trafic organique", delay: 0.2 },
                  { value: "+200%", label: "Conversions", delay: 0.4 }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay, duration: 0.5 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                    <div className="text-slate-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
