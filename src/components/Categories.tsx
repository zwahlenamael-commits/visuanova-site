import { ContactDialog } from "./ContactDialog";
import { useState } from "react";

export function Categories() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Flyers",
    "Stories Instagram",
    "Posts Publicitaires",
    "Carrousels",
    "Bannières Site",
    "Mini-Branding",
    "Annonces Promo",
    "Visuels TikTok"
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setDialogOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Types de Designs</h2>
          <p className="text-xl text-gray-600">
            Une large gamme de créations pour tous vos besoins visuels
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((category, index) => {
            const colors = ['#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4'];
            const color = colors[index % colors.length];
            
            return (
              <div 
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#10b981] hover:bg-[#10b981] transition-all duration-300 cursor-pointer"
                style={{
                  ['--hover-color' as any]: color
                }}
                onClick={() => handleCategoryClick(category)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.backgroundColor = color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.backgroundColor = '';
                }}
              >
                <span className="text-gray-700 group-hover:text-white transition-colors">
                  {category}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <ContactDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen}
        selectedTheme={selectedCategory}
      />
    </section>
  );
}