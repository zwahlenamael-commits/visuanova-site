import { useState } from "react";
import { Instagram, Globe, Megaphone, ExternalLink, ArrowLeft, ArrowRight, Sparkles, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { cn } from "./ui/utils";

type Category = "instagram" | "web" | "ads";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  link?: string;
  color?: string;
}

export function AdvancedPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{src: string, title: string} | null>(null);

  const categories = [
    { 
      id: "instagram" as Category, 
      label: "Instagram", 
      icon: Instagram,
      description: "Posts, stories et carrousels pour réseaux sociaux",
      color: "from-pink-500 to-purple-600",
      accent: "text-pink-500",
      bgHover: "hover:shadow-pink-500/20"
    },
    { 
      id: "web" as Category, 
      label: "Sites Web", 
      icon: Globe,
      description: "Sites vitrines, portfolios et landing pages",
      color: "from-blue-500 to-cyan-600",
      accent: "text-cyan-500",
      bgHover: "hover:shadow-cyan-500/20"
    },
    {
      id: "ads" as Category,
      label: "Publicités",
      icon: Megaphone,
      description: "Visuels publicitaires et campagnes marketing",
      color: "from-orange-500 to-red-600",
      accent: "text-orange-500",
      bgHover: "hover:shadow-orange-500/20"
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Campagne Instagram - Marque Mode",
      category: "instagram",
      image: "https://images.unsplash.com/photo-1695634621121-691d54259d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwbW9ja3VwJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2NjkzNzU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Création de posts et stories pour une marque de mode suisse",
      color: "text-pink-500"
    },
    {
      id: 2,
      title: "Posts Instagram - Coach Sportif",
      category: "instagram",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description: "Carrousels et stories pour augmenter l'engagement",
      color: "text-pink-500"
    },
    {
      id: 3,
      title: "Site Web - Centre de Basketball",
      category: "web",
      image: "https://images.unsplash.com/photo-1762860798875-415e25cf8a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBpbmRvb3IlMjBzcG9ydHN8ZW58MXx8fHwxNzY2OTM5ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Site vitrine complet pour un centre de basketball avec système de réservation",
      link: "https://blob-wad-73674050.figma.site",
      color: "text-cyan-500"
    },
    {
      id: 5,
      title: "ReviewPilot - Campagne Produit",
      category: "ads",
      image: "/portfolio/reviewpilot-reputation.png",
      description: "Affiches publicitaires pour une plateforme SaaS de gestion d'avis Google avec cartes NFC",
      color: "text-orange-500"
    },
    {
      id: 9,
      title: "ReviewPilot - Carte NFC",
      category: "ads",
      image: "/portfolio/reviewpilot-carte-nfc.png",
      description: "Visuel de lancement pour la carte NFC intelligente qui booste la réputation en ligne",
      color: "text-orange-500"
    },
    {
      id: 10,
      title: "ReviewPilot - IA & Automatisation",
      category: "ads",
      image: "/portfolio/reviewpilot-ia-robot.png",
      description: "Affiche mettant en avant l'IA de réponse automatique aux avis Google, disponible 24/7",
      color: "text-orange-500"
    },
    {
      id: 11,
      title: "ReviewPilot - Plateforme SaaS",
      category: "ads",
      image: "/portfolio/reviewpilot-saas-complet.png",
      description: "Visuel complet présentant la plateforme : carte NFC, dashboard intelligent et réponses IA automatiques",
      color: "text-orange-500"
    },
    {
      id: 12,
      title: "ReviewPilot - Réponses IA",
      category: "ads",
      image: "/portfolio/reviewpilot-ia-reponses.png",
      description: "Affiche feature mettant en avant les réponses instantanées et intelligentes aux avis Google",
      color: "text-orange-500"
    },
    {
      id: 13,
      title: "ReviewPilot - LIA Assistant",
      category: "ads",
      image: "/portfolio/reviewpilot-lia-produit.png",
      description: "Présentation complète du produit avec l'assistant IA LIA, cartes NFC et gestion de la e-réputation",
      color: "text-orange-500"
    },
    {
      id: 6,
      title: "MouthTape - Santé & Bien-être",
      category: "web",
      image: "https://images.unsplash.com/photo-1598719830738-32b91fa649be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc2xlZXAlMjB3ZWxsbmVzcyUyMGJyZWF0aGluZyUyMG1vdXRoJTIwdGFwZXxlbnwxfHx8fDE3NzE0NTMwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Site e-commerce spécialisé dans les bandelettes pour favoriser la respiration nasale et améliorer le sommeil",
      link: "https://excel-guide-86031543.figma.site",
      color: "text-green-500"
    },
    {
      id: 7,
      title: "Froth - Restaurant Gastronomique",
      category: "web",
      image: "https://images.unsplash.com/photo-1681256671407-98443d5c998b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2QlMjBwbGF0aW5nJTIwY3VsaW5hcnklMjBhcnQlMjBkYXJrJTIwbHV4dXJ5fGVufDF8fHx8MTc3MTQ1Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Site vitrine élégant pour une expérience culinaire d'exception et réservation en ligne",
      link: "https://froth-wad-78005759.figma.site",
      color: "text-amber-500"
    },
    {
      id: 8,
      title: "Serenity Spa - Massage & Détente",
      category: "web",
      image: "https://images.unsplash.com/photo-1736580602029-78afd910cbf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXNzYWdlJTIwc3BhJTIwc2Fsb24lMjBpbnRlcmlvciUyMHJlbGF4fGVufDF8fHx8MTc3MTQ1ODM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Site vitrine apaisant pour un salon de massage offrant une gamme complète de soins relaxants",
      link: "https://line-side-60715197.figma.site",
      color: "text-violet-500"
    }
  ];

  const filteredProjects = selectedCategory 
    ? projects.filter(project => project.category === selectedCategory)
    : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[40%] -right-[10%] w-[30%] h-[30%] bg-green-100 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            // Categories View
            <motion.div
              key="categories"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <motion.div 
                className="text-center mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-[#2ECC71]" />
                  <span className="text-sm font-medium bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] bg-clip-text text-transparent">
                    Expertise & Réalisations
                  </span>
                </motion.div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 tracking-tight">
                  Portfolio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C]">Projets</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Explorez nos créations par catégorie et découvrez comment nous donnons vie aux idées de nos clients.
                </p>
              </motion.div>

              {/* Category Cards */}
              <motion.div 
                className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {categories.map((category) => (
                  <motion.div
                    key={category.id}
                    variants={itemVariants}
                    className={cn(
                      "group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer h-full flex flex-col",
                      category.bgHover,
                      "transition-shadow duration-500"
                    )}
                    whileHover={{ y: -12, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {/* Icon Background */}
                    <div className={`relative h-56 lg:h-64 overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      {/* Animated Background Shapes */}
                      <motion.div 
                        className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-inner border border-white/30"
                        >
                          <category.icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-grow flex flex-col justify-between relative bg-white">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2ECC71] transition-colors">
                          {category.label}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      
                      <div className={`mt-6 flex items-center font-medium ${category.accent} opacity-80 group-hover:opacity-100 transition-all group-hover:translate-x-2`}>
                        <span className="mr-2">Explorer</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            // Projects View
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              {/* Navigation Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                <Button
                  onClick={() => setSelectedCategory(null)}
                  variant="ghost"
                  className="self-start group pl-0 hover:bg-transparent text-gray-600 hover:text-[#2ECC71]"
                >
                  <div className="bg-white p-2 rounded-full shadow-sm border border-gray-200 mr-3 group-hover:border-[#2ECC71] transition-colors">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </div>
                  <span className="text-lg">Retour aux catégories</span>
                </Button>

                <div className="text-right">
                  <h2 className="text-3xl font-bold text-[#0F172A]">
                    {categories.find(c => c.id === selectedCategory)?.label}
                  </h2>
                  <p className="text-gray-500">
                    {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} réalisé{filteredProjects.length > 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Projects Grid */}
              {filteredProjects.length > 0 ? (
                <motion.div 
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
                      whileHover={{ y: -10 }}
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                      onClick={() => {
                        if (project.link) {
                          window.open(project.link, '_blank');
                        } else {
                          setLightboxImage({ src: project.image, title: project.title });
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Image Container */}
                      <div className="relative h-72 overflow-hidden bg-gray-100">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                        
                        {/* Floating Icon */}
                        <motion.div
                          className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                        >
                          {project.link ? <ExternalLink className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                        </motion.div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20 mb-3`}>
                            {categories.find(c => c.id === project.category)?.label}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                            {project.title}
                          </h3>
                          <motion.p 
                            className="text-gray-200 text-sm line-clamp-2"
                            animate={{ height: hoveredProject === project.id ? "auto" : 0, opacity: hoveredProject === project.id ? 1 : 0 }}
                            initial={{ height: 0, opacity: 0 }}
                          >
                            {project.description}
                          </motion.p>
                        </div>
                      </div>
                      
                      {/* Bottom strip for mobile/touch feedback */}
                      <div className={`h-1.5 w-full bg-gradient-to-r ${categories.find(c => c.id === project.category)?.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="bg-gray-50 p-6 rounded-full mb-4">
                    <Sparkles className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bientôt disponible</h3>
                  <p className="text-gray-500 text-center max-w-md">
                    De nouveaux projets pour cette catégorie sont en cours de finalisation. Revenez bientôt !
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-8 sm:p-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="relative z-10 rounded-2xl shadow-2xl"
              style={{ maxHeight: '75vh', maxWidth: '75vw', objectFit: 'contain' }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
