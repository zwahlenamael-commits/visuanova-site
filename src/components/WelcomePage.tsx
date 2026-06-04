import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowDown, Sparkles, Palette, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect } from "react";

interface WelcomePageProps {
  onEnter: () => void;
}

export function WelcomePage({ onEnter }: WelcomePageProps) {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Set a timeout to trigger transition after scrolling down
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 100) {
          onEnter();
        }
      }, 150);
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 50) {
        onEnter();
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: true });

    // Cleanup
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [onEnter]);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-white via-emerald-50/40 to-white relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#10b981]/20 to-[#059669]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#f59e0b]/15 to-[#ec4899]/15 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#8b5cf6]/10 to-[#06b6d4]/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col">
        {/* Top section with logo/brand */}
        <motion.div
          className="pt-8 sm:pt-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-[#10b981]/20">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981]" />
            <span className="text-sm sm:text-base text-gray-700">Bienvenue chez VisuaNova Studio</span>
          </div>
        </motion.div>

        {/* Center hero section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl w-full">
            {/* Left side - Text content */}
            <motion.div
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight">
                    Des visuels qui{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-[#10b981] via-[#f59e0b] to-[#ec4899] bg-clip-text text-transparent">
                        marquent
                      </span>
                      <motion.span
                        className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-[#10b981]/30 via-[#f59e0b]/30 to-[#ec4899]/30 -z-0"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                      />
                    </span>
                  </h1>
                </motion.div>

                <motion.p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  Studio de jeunes créateurs spécialisés dans le design visuel moderne et percutant
                </motion.p>

                {/* Feature pills */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-200">
                    <Palette className="w-4 h-4 text-[#10b981]" />
                    <span className="text-sm text-gray-700">Design Graphique</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-200">
                    <Zap className="w-4 h-4 text-[#f59e0b]" />
                    <span className="text-sm text-gray-700">Visuels Web</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-200">
                    <Sparkles className="w-4 h-4 text-[#ec4899]" />
                    <span className="text-sm text-gray-700">Identité Visuelle</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <Button
                  onClick={onEnter}
                  size="lg"
                  className="bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white shadow-xl shadow-[#10b981]/25 group"
                >
                  Découvrir nos services
                  <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => window.location.href = 'mailto:contact@visuanova-studio.com'}
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:border-[#10b981] hover:text-[#10b981] hover:bg-[#10b981]/5 shadow-lg"
                >
                  Nous contacter
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl text-[#10b981]">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl text-[#f59e0b]">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl text-[#ec4899]">24h</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Temps de réponse</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                {/* Decorative background */}
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-br from-[#10b981]/20 via-[#f59e0b]/10 to-[#ec4899]/20 rounded-3xl blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY4MDQyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="VisuaNova Studio - Espace créatif"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Qualité Pro</div>
                      <div className="text-2xl text-gray-900">Garantie</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-full p-4 shadow-xl"
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-white text-center">
                    <div className="text-2xl">✨</div>
                    <div className="text-xs mt-1">Studio</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          className="pb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          <motion.div
            className="inline-flex flex-col items-center cursor-pointer"
            onClick={onEnter}
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm text-gray-500 mb-2">Défiler pour explorer</span>
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center">
              <ArrowDown className="w-5 h-5 text-[#10b981]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}