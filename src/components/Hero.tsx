import { Button } from "./ui/button";
import { Sparkles, ArrowRight, MousePointer2, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { HeroPresentation } from "./ui/HeroPresentation";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-br from-green-200/40 to-cyan-200/40 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-green-100"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="w-4 h-4 text-[#2ECC71]" />
              <span className="text-sm font-medium text-gray-700">VisuaNova Studio - Suisse 🇨🇭</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
              Transformez Votre <br/>
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C]">
                  Vision en Réalité
                </span>
                <motion.svg
                  className="absolute w-full h-3 -bottom-1 left-0 z-0 text-[#2ECC71]/20"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </motion.svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg">
              Expertise locale, impact global. Notre équipe conçoit des identités visuelles et des sites web qui captivent votre audience et convertissent vos visiteurs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="h-14 px-8 text-lg bg-[#2ECC71] hover:bg-[#27AE60] text-white shadow-lg shadow-[#2ECC71]/25 hover:shadow-xl hover:shadow-[#2ECC71]/40 transition-all duration-300 rounded-full group"
              >
                Lancer mon projet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-2 border-slate-200 hover:border-[#2ECC71] text-slate-700 hover:text-[#2ECC71] bg-transparent hover:bg-white transition-all duration-300 rounded-full"
              >
                Explorer le portfolio
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#2ECC71]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900">100%</span>
                  <span className="text-sm text-slate-500">Satisfaction</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <MousePointer2 className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900">50+</span>
                  <span className="text-sm text-slate-500">Projets Livrés</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Presentation Slider */}
          <motion.div 
            className="relative lg:h-[600px] flex items-center justify-center"
            style={{ y, opacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full transform rotate-1 transition-transform duration-500 hover:rotate-0">
               <HeroPresentation />
               
               {/* Background Decorative Blob */}
               <div className="absolute inset-0 bg-gradient-to-tr from-[#2ECC71] to-[#1ABC9C] rounded-full blur-3xl opacity-20 -z-10 transform scale-125" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
