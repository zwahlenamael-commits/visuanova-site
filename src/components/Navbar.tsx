import { Mail, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
    <nav aria-label="Navigation principale">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8" />
            <span className="text-lg md:text-xl text-[#0F172A] font-semibold">VisuaNova Studio</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-[#2ECC71] transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#2ECC71] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-[#2ECC71] transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#2ECC71] transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#2ECC71] transition-colors">
              Contact
            </button>
          </div>

          {/* CTA Desktop & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] hover:from-[#27AE60] hover:to-[#16A085] text-white text-sm md:text-base shadow-md"
              size="sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Devis Gratuit
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#2ECC71]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" role="menu" className="md:hidden pt-4 pb-3 border-t border-gray-200 mt-3">
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left py-2 text-gray-700 hover:text-[#2ECC71] transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left py-2 text-gray-700 hover:text-[#2ECC71] transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-left py-2 text-gray-700 hover:text-[#2ECC71] transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left py-2 text-gray-700 hover:text-[#2ECC71] transition-colors"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left py-2 text-gray-700 hover:text-[#2ECC71] transition-colors"
              >
                Contact
              </button>
              <Button 
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] hover:from-[#27AE60] hover:to-[#16A085] text-white mt-2"
              >
                <Mail className="w-4 h-4 mr-2" />
                Demander un Devis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </header>
  );
}