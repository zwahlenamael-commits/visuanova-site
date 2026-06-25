import { motion } from "motion/react";
import { Logo } from "./Logo";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onScrollDown: () => void;
}

export function IntroAnimation({ onScrollDown }: IntroAnimationProps) {
  const [isExiting, setIsExiting] = useState(false);

  // Trigger exit animation before calling onScrollDown
  const handleScrollDown = () => {
    setIsExiting(true);
    setTimeout(() => {
      onScrollDown();
    }, 600); // Match exit duration
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 20) {
          handleScrollDown();
        }
      }, 100);
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 30) {
        handleScrollDown();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      const startY = touch.clientY;
      
      const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        const deltaY = startY - touch.clientY;
        
        if (deltaY > 50) {
          handleScrollDown();
          window.removeEventListener('touchmove', handleTouchMove);
        }
      };
      
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      
      const handleTouchEnd = () => {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
      
      window.addEventListener('touchend', handleTouchEnd, { once: true });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      animate={isExiting ? { opacity: 0, y: -100 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1758876203323-a62498d5eef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3b3JraW5nJTIwb2ZmaWNlJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY2Njk2MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Équipe créative VisuaNova Studio au travail"
          className="w-full h-full object-cover filter brightness-50"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-green-500/20 blur-[100px]"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/20 blur-[100px]"
        animate={{
          x: [0, -70, 70, 0],
          y: [0, 70, -70, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        <motion.div
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="mb-8 p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl"
        >
          <Logo className="w-24 h-24 sm:w-32 sm:h-32 text-white" />
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            role="heading"
            aria-level={2}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            VisuaNova <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C]">Studio</span>
          </motion.div>
        </div>

        <motion.p
          className="text-lg sm:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Design suisse de précision. <strong className="text-white font-medium">Impact global.</strong>
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 cursor-pointer z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={handleScrollDown}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm font-medium tracking-widest uppercase text-white/70">Découvrir</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-1.5 bg-[#2ECC71] rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
