import { Megaphone, Globe, ShoppingCart, Palette } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "./ui/ScrollReveal";

export function PlatformsProof() {
  const platforms = [
    { icon: Palette, name: "Réseaux Sociaux", color: "#E4405F", gradient: "from-pink-500 to-rose-500" },
    { icon: Megaphone, name: "Publicités", color: "#1877F2", gradient: "from-blue-600 to-indigo-600" },
    { icon: ShoppingCart, name: "E-commerce", color: "#2ECC71", gradient: "from-green-500 to-emerald-500" },
    { icon: Globe, name: "Sites Web", color: "#1ABC9C", gradient: "from-teal-400 to-cyan-400" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100 relative overflow-hidden">
       {/* Subtle background pattern */}
       <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
       
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal width="100%" className="mb-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Des Visuels Qui Performent Sur <br className="sm:hidden"/>
              <span className="bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] bg-clip-text text-transparent">
                Toutes les Plateformes
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Une présence cohérente et impactante sur chaque canal de communication.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <ScrollReveal key={platform.name} delay={index * 0.1} className="h-full">
              <motion.div
                className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Background Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10"
                  style={{ 
                    background: `linear-gradient(135deg, ${platform.color}15, ${platform.color}25)`,
                  }}
                >
                  <platform.icon 
                    className="w-8 h-8 transition-colors duration-300" 
                    style={{ color: platform.color }}
                  />
                </div>
                
                <span className="text-base font-semibold text-slate-700 group-hover:text-slate-900 transition-colors relative z-10">
                  {platform.name}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
