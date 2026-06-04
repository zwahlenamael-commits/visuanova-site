import { Sparkles, Target, Heart, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { cn } from "./ui/utils";

export function WhyMe() {
  const reasons = [
    {
      icon: Sparkles,
      title: "Créativité & Tendances",
      description: "Nous restons à l'affût des dernières tendances design et marketing pour créer des visuels modernes qui captent l'attention",
      color: "#2ECC71",
      bg: "bg-green-50"
    },
    {
      icon: Target,
      title: "Vision Stratégique",
      description: "Chaque design est pensé stratégiquement pour attirer votre audience cible et maximiser votre visibilité en ligne",
      color: "#1ABC9C",
      bg: "bg-teal-50"
    },
    {
      icon: Heart,
      title: "Approche Humaine",
      description: "Nous prenons le temps de comprendre votre projet, vos besoins et votre vision pour créer quelque chose d'unique",
      color: "#E74C3C",
      bg: "bg-red-50"
    },
    {
      icon: TrendingUp,
      title: "Résultats Concrets",
      description: "Nos designs ne sont pas que beaux, ils sont conçus pour générer de l'engagement, des clics et des ventes",
      color: "#3498DB",
      bg: "bg-blue-50"
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-green-50 to-blue-50 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-4">
        <ScrollReveal width="100%" className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-6"
            >
              <CheckCircle className="w-4 h-4 text-[#2ECC71]" />
              <span className="text-sm font-medium text-slate-700">Pourquoi Nous ?</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Plus qu'une Agence, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C]">Un Partenaire de Confiance</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Notre approche combine créativité, stratégie et écoute pour vous offrir des résultats concrets et durables.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                className={cn(
                  "h-full p-8 rounded-3xl border border-transparent transition-all duration-300",
                  "bg-white hover:bg-white hover:shadow-xl hover:border-slate-100",
                  "flex flex-col items-center text-center group"
                )}
              >
                <div
                  className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                    reason.bg
                  )}
                >
                  <reason.icon
                    className="w-10 h-10 transition-colors duration-300"
                    style={{ color: reason.color }}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2ECC71] transition-colors">
                  {reason.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
