import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ScrollReveal } from "./ui/ScrollReveal";

export function FAQ() {
  const faqs = [
    {
      question: "Quels types de services proposez-vous ?",
      answer: "VisuaNova Studio propose trois services principaux : la création de visuels pour les réseaux sociaux, la conception de sites web modernes et performants, et la création d'affiches publicitaires print et digital. Chaque projet est pensé sur mesure pour répondre à vos objectifs."
    },
    {
      question: "Combien coûte un projet ?",
      answer: "Chaque projet est unique et mérite une estimation personnalisée. Nous n'avons pas de grille tarifaire fixe car les prix varient selon la complexité, le nombre de livrables, les délais et vos besoins spécifiques. Contactez-nous pour un devis gratuit sur mesure — c'est sans engagement."
    },
    {
      question: "Quel est le délai de réalisation ?",
      answer: "Pour des visuels réseaux sociaux : 2-5 jours. Pour un site web : 2-4 semaines. Les délais urgents sont possibles avec un supplément. Nous nous engageons à respecter les deadlines convenues ensemble."
    },
    {
      question: "Comment se déroule une collaboration avec votre agence ?",
      answer: "1) Prise de contact et brief du projet, 2) Proposition de devis gratuit, 3) Création et présentation des premières maquettes, 4) Révisions selon vos retours (2 incluses), 5) Livraison des fichiers finaux dans tous les formats nécessaires. Nous restons disponibles tout au long du processus."
    },
    {
      question: "Qu'est-ce qui vous différencie des autres agences ?",
      answer: "Notre force, c'est la combinaison entre un design premium et une vraie réflexion stratégique. Nous ne créons pas juste de beaux visuels — nous concevons des outils de communication qui génèrent des résultats concrets : plus de visibilité, plus d'engagement, plus de clients pour votre entreprise."
    },
    {
      question: "Travaillez-vous avec des entreprises de toute taille ?",
      answer: "Absolument. Que vous soyez une startup, une PME ou un commerce local, nous adaptons notre approche à votre réalité et votre budget. Nos solutions sont pensées pour avoir un impact réel, quelle que soit la taille de votre structure. Basés en Suisse, nous collaborons aussi avec des clients internationaux."
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-50 to-blue-50 rounded-full blur-[100px] opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal width="100%" className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C]">Fréquentes</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tout ce que vous devez savoir avant de démarrer votre projet avec VisuaNova Studio.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05} width="100%">
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-[#2ECC71]/50 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-slate-900 px-6 py-5 group-hover:text-[#2ECC71] transition-colors [&[data-state=open]]:text-[#2ECC71] [&[data-state=open]]:bg-slate-50/50">
                    <span className="flex-1 pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 px-6 pb-6 pt-2 leading-relaxed bg-slate-50/30">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
