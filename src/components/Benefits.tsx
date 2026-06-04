import { Button } from "./ui/button";
import { Palette, Zap, Users } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Palette,
      title: "Une créativité jeune & authentique",
      description: "Nous apportons un regard frais et moderne, inspiré par les tendances actuelles et l'esthétique digitale."
    },
    {
      icon: Zap,
      title: "Des visuels modernes qui se démarquent",
      description: "Nos designs captent l'attention et reflètent les codes visuels qui performent sur les réseaux sociaux."
    },
    {
      icon: Users,
      title: "Un travail humain, sur mesure & accessible",
      description: "Nous prenons le temps de comprendre votre projet et créons des visuels adaptés à votre identité et vos objectifs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#10b981]/5 to-[#f59e0b]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Pourquoi Nous Choisir ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous combinons passion, créativité et expertise pour donner vie à vos projets visuels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const gradients = [
              'from-[#10b981] to-[#06b6d4]',
              'from-[#f59e0b] to-[#ec4899]',
              'from-[#8b5cf6] to-[#ec4899]'
            ];
            return (
              <div key={index} className="bg-white rounded-2xl p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => window.location.href = 'mailto:contact@visuanova-studio.com?subject=Discussion de Projet'}
            size="lg"
            className="bg-[#10b981] hover:bg-[#059669] text-white"
          >
            Discuter de Votre Projet (E-mail)
          </Button>
        </div>
      </div>
    </section>
  );
}
