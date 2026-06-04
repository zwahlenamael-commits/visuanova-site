import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "motion/react";
import { IntroAnimation } from "./components/IntroAnimation";

// Lazy load all main content — only loaded after intro animation
const Navbar = lazy(() => import("./components/Navbar").then(m => ({ default: m.Navbar })));
const Hero = lazy(() => import("./components/Hero").then(m => ({ default: m.Hero })));
const PlatformsProof = lazy(() => import("./components/PlatformsProof").then(m => ({ default: m.PlatformsProof })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const AdvancedPortfolio = lazy(() => import("./components/AdvancedPortfolio").then(m => ({ default: m.AdvancedPortfolio })));
const WhyMe = lazy(() => import("./components/WhyMe").then(m => ({ default: m.WhyMe })));
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const FAQ = lazy(() => import("./components/FAQ").then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import("./components/FinalCTA").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  // Transition from intro to main content
  useEffect(() => {
    if (!showIntro && !showMainContent) {
      const timer = setTimeout(() => {
        setShowMainContent(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showIntro, showMainContent]);

  const handleScrollDown = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip to content link for keyboard/screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#2ECC71] focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:text-lg focus:font-medium focus:shadow-lg"
      >
        Aller au contenu principal
      </a>

      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroAnimation key="intro" onScrollDown={handleScrollDown} />
        )}
      </AnimatePresence>

      {showMainContent && (
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-slate-50" role="status" aria-label="Chargement du contenu">
            <div className="w-8 h-8 border-4 border-[#2ECC71] border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Navbar />
          <main id="main-content">
            <Hero />
            <PlatformsProof />
            <Services />
            <AdvancedPortfolio />
            <WhyMe />
            <About />
            <FAQ />
            <FinalCTA />
          </main>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}