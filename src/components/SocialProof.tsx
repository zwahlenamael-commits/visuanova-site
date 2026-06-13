import { Facebook, Palette, Video, ShoppingBag } from "lucide-react";

export function SocialProof() {
  const platforms = [
    { name: "Meta", icon: Facebook },
    { name: "Réseaux Sociaux", icon: Palette },
    { name: "TikTok", icon: Video },
    { name: "Shopify", icon: ShoppingBag }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8">
          Des visuels optimisés pour toutes les plateformes modernes
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <platform.icon className="w-10 h-10 text-gray-700" />
              <span className="text-sm text-gray-600">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}