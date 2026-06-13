import { Palette, Globe, Megaphone, ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ScrollReveal } from "./ui/ScrollReveal";

export function Services() {
  const services = [
    {
      icon: Palette,
      title: "Design Réseaux Sociaux",
      description: "Posts, carrousels, stories et visuels publicitaires optimisés pour l'engagement et les conversions sur tous vos réseaux sociaux",
      features: ["Tous réseaux sociaux", "Stories animées", "Formats optimisés"],
      color: "#E4405F",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Création de Sites Web",
      description: "Sites vitrines, portfolios et landing pages modernes, responsive et pensés pour convertir vos visiteurs en clients",
      features: ["Design moderne", "100% responsive", "Optimisé conversion"],
      color: "#2ECC71",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Megaphone,
      title: "Affiches Publicitaires",
      description: "Visuels percutants pour vos campagnes print et digital, de l'affiche événementielle aux bannières web",
      features: ["Print & Digital", "Haute résolution", "Formats sur mesure"],
      color: "#FF6B6B",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal width="100%" className="mb-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-6"
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-slate-700">Nos Services</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Des Solutions pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C]">Votre Croissance</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Une approche globale combinant design esthétique et stratégie performante pour propulser votre activité.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="relative h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group">
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />

                  <div className="p-8 h-full flex flex-col">
                    {/* Icon with animated background */}
                    <div className="mb-6 relative">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                      <service.icon
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 transition-all duration-300 group-hover:scale-110`}
                        style={{ color: service.color }}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#2ECC71] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={scrollToContact}
                      variant="ghost"
                      className="w-full justify-between group/btn hover:bg-slate-50 hover:text-[#2ECC71]"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
