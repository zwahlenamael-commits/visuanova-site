import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, BarChart3, Globe, Target, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    subtitle: "AGENCE SMMA",
    title: "Digital Growth",
    description: "Propulsez votre marque vers de nouveaux sommets.",
    icon: Globe,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-indigo-600",
    stats: "+150% Traffic"
  },
  {
    id: 2,
    subtitle: "STRATÉGIE",
    title: "Ciblage Précis",
    description: "Touchez votre audience idéale au bon moment.",
    icon: Target,
    color: "bg-emerald-500",
    gradient: "from-emerald-400 to-teal-500",
    stats: "3.5x ROI"
  },
  {
    id: 3,
    subtitle: "PERFORMANCE",
    title: "Scale & Profit",
    description: "Maximisez vos revenus grâce à l'automatisation.",
    icon: TrendingUp,
    color: "bg-rose-500",
    gradient: "from-rose-500 to-orange-500",
    stats: "+85% Leads"
  }
];

export function HeroPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto">
      {/* Main Container - Looking like a browser or presentation window */}
      <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/60 ring-1 ring-slate-900/5">
        
        {/* Window Header */}
        <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          <div className="ml-4 h-4 w-32 bg-slate-200/50 rounded-full" />
        </div>

        {/* Slide Content */}
        <div className="relative h-[calc(100%-2rem)] w-full overflow-hidden bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 p-8 flex flex-col justify-between"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} opacity-20`} />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white backdrop-blur-sm mb-4 border border-white/10"
                >
                  {slides[currentSlide].subtitle}
                </motion.span>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold text-white mb-3"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate-300 text-sm max-w-[80%] leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>

              {/* Graphic/Visual Middle */}
              <div className="relative flex-grow flex items-center justify-center my-4">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                  className={`w-24 h-24 rounded-2xl ${slides[currentSlide].gradient} flex items-center justify-center shadow-lg shadow-black/20`}
                >
                  {/* Icon */}
                  <div className="text-white">
                     {(() => {
                        const Icon = slides[currentSlide].icon;
                        return <Icon size={48} strokeWidth={1.5} />;
                     })()}
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute right-4 bottom-10 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-xs text-slate-400 mb-1">Impact</div>
                  <div className="text-lg font-bold text-white">{slides[currentSlide].stats}</div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-6">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <Users size={14} className="text-slate-300" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <BarChart3 size={14} className="text-slate-300" />
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors group">
                  En savoir plus
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls Overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          <button 
            onClick={prevSlide}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/10"
          >
            <ChevronLeft size={16} />
          </button>
          
          <div className="flex gap-1.5">
            {slides.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "w-6 bg-white" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/10"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Decorative Elements around the presentation */}
      <div className="absolute -z-10 -top-6 -right-6 w-full h-full rounded-2xl border-2 border-dashed border-slate-300/50" />
      <div className="absolute -z-20 -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl opacity-50" />
    </div>
  );
}
