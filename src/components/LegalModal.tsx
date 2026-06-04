import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "mentions" | "privacy";
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="legal-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between z-10">
                <h2 id="legal-modal-title" className="text-2xl font-bold text-slate-900">
                  {type === "mentions" ? "Mentions Légales" : "Politique de Confidentialité"}
                </h2>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-900 transition-colors bg-slate-100 hover:bg-slate-200 p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-8 py-6 overflow-y-auto max-h-[calc(80vh-80px)] prose prose-slate prose-sm">
                {type === "mentions" ? <MentionsLegales /> : <PolitiqueConfidentialite />}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function MentionsLegales() {
  return (
    <div className="space-y-6 text-slate-600">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Informations Générales</h3>
        <p>
          <strong>Raison sociale :</strong> VisuaNova Studio<br />
          <strong>Forme juridique :</strong> Entreprise individuelle<br />
          <strong>Siège social :</strong> Suisse Romande, Suisse<br />
          <strong>Email :</strong> contact@visuanova.ch
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Activité</h3>
        <p>
          VisuaNova Studio est une agence de design graphique et création web spécialisée dans la conception
          de sites web, visuels pour réseaux sociaux, présentations professionnelles et supports publicitaires.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Hébergement</h3>
        <p>
          Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Propriété Intellectuelle</h3>
        <p>
          L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété
          exclusive de VisuaNova Studio, sauf mention contraire. Toute reproduction, représentation ou
          diffusion, en tout ou partie, du contenu de ce site est interdite sans autorisation préalable.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">5. Responsabilité</h3>
        <p>
          VisuaNova Studio s'efforce d'assurer l'exactitude des informations diffusées sur ce site.
          Toutefois, nous ne pouvons garantir l'exactitude, la complétude et l'actualité des informations
          mises à disposition. VisuaNova Studio décline toute responsabilité pour tout dommage résultant
          de l'utilisation de ce site.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">6. Droit Applicable</h3>
        <p>
          Le présent site est soumis au droit suisse. Tout litige sera de la compétence exclusive
          des tribunaux du canton de domicile de VisuaNova Studio.
        </p>
      </div>
    </div>
  );
}

function PolitiqueConfidentialite() {
  return (
    <div className="space-y-6 text-slate-600">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Introduction</h3>
        <p>
          VisuaNova Studio accorde une grande importance à la protection de vos données personnelles.
          Cette politique décrit quelles données nous collectons et comment nous les utilisons,
          conformément à la Loi fédérale suisse sur la protection des données (LPD) et au RGPD.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Données Collectées</h3>
        <p>Nous pouvons collecter les données suivantes :</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Adresse email (via le formulaire de contact)</li>
          <li>Description de votre projet (via le formulaire de devis)</li>
          <li>Données de navigation anonymisées (cookies techniques)</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Utilisation des Données</h3>
        <p>Vos données sont utilisées exclusivement pour :</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Répondre à vos demandes de devis et de contact</li>
          <li>Améliorer l'expérience utilisateur du site</li>
          <li>Assurer le bon fonctionnement technique du site</li>
        </ul>
        <p className="mt-2">
          Vos données ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Durée de Conservation</h3>
        <p>
          Les données collectées via le formulaire de contact sont conservées le temps nécessaire
          au traitement de votre demande, puis supprimées dans un délai maximum de 12 mois.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">5. Vos Droits</h3>
        <p>Conformément à la LPD et au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Droit d'accès à vos données personnelles</li>
          <li>Droit de rectification de vos données</li>
          <li>Droit à l'effacement de vos données</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit d'opposition au traitement</li>
        </ul>
        <p className="mt-2">
          Pour exercer ces droits, contactez-nous à : <strong>contact@visuanova.ch</strong>
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">6. Cookies</h3>
        <p>
          Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement.
          Aucun cookie de tracking ou publicitaire n'est utilisé.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">7. Contact</h3>
        <p>
          Pour toute question relative à cette politique, contactez-nous à : <strong>contact@visuanova.ch</strong>
        </p>
      </div>
    </div>
  );
}
