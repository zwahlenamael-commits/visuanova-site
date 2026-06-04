# Fiche de Route -- Lancement Prospection VisuaNova Studio
**Date :** 2026-06-04
**Objectif :** Etre pret a envoyer les premiers mails de prospection
**Responsable :** Trevor (coordination) + Amael (decisions + actions manuelles)

---

## Etat des lieux actuel

| Element | Statut |
|---|---|
| Site web | Fait en local, PAS deploye |
| Domaine visuanova.ch | PAS achete |
| Email contact@visuanova.ch | PAS configure |
| Portfolio | Maquettes/demos uniquement |
| Reseaux sociaux | RIEN (pas de comptes) |
| Entreprise | Enregistree en Suisse sous un autre nom |
| Template email prospection | Fait |
| Template facture/devis | Fait |

---

## PHASE 1 -- Infrastructure (BLOQUANT)
**Priorite : CRITIQUE -- Sans ca, impossible de prospecter**
**Duree estimee : 1-2 jours**

### 1.1 Acheter le domaine visuanova.ch
- **Qui :** Amael (action manuelle)
- **Ou :** Infomaniak (recommande, suisse), Hostpoint, ou Swizzonic
- **Budget :** ~15-20 CHF/an pour un .ch
- **Alternative :** Si visuanova.ch n'est pas disponible, verifier visuanova.studio, visuanova-studio.ch
- **Note :** Verifier la disponibilite MAINTENANT sur nic.ch

### 1.2 Configurer l'hebergement + deployer le site
- **Qui :** Trevor/Aboubakar
- **Options :**
  - **Vercel** (recommande) : gratuit, deploiement automatique depuis GitHub, SSL inclus, CDN global
  - **Netlify** : alternative similaire
  - **Infomaniak** : si tu veux tout chez le meme fournisseur suisse
- **Actions :**
  - Pusher le code sur GitHub (repo prive)
  - Connecter Vercel au repo
  - Configurer le domaine custom (DNS)
  - Verifier que le SSL (https) est actif
  - Tester le site en production (performance, liens, formulaire)

### 1.3 Configurer l'email professionnel
- **Qui :** Amael (action manuelle)
- **Options :**
  - **Infomaniak Mail** (~5 CHF/mois) : suisse, inclus avec hebergement
  - **Google Workspace** (~5.75 CHF/mois) : Gmail pro avec ton domaine
  - **Zoho Mail** : gratuit pour 1 utilisateur (plan lite)
- **Adresses a creer :**
  - contact@visuanova.ch (prospection + clients)
  - amael@visuanova.ch (optionnel, pour signer les mails perso)
- **IMPORTANT :** Configurer SPF, DKIM et DMARC pour eviter que tes mails tombent en spam

### 1.4 Configurer le formulaire de contact du site
- **Qui :** Trevor/Aboubakar
- **Actions :**
  - Connecter le formulaire de devis a l'email contact@visuanova.ch
  - Verifier que les soumissions arrivent bien
  - Ajouter une notification (email ou Slack)

**Checkpoint Phase 1 :** Le site est en ligne, l'email fonctionne, le formulaire envoie des notifications.

---

## PHASE 2 -- Credibilite visuelle (IMPORTANT)
**Priorite : HAUTE -- Les prospects vont checker avant de repondre**
**Duree estimee : 2-3 jours**

### 2.1 Renforcer le portfolio
- **Qui :** Trevor/Babakam
- **Probleme actuel :** Tout le portfolio est des demos/maquettes. C'est pas redhibitoire MAIS il faut que ca ait l'air professionnel et credible.
- **Actions :**
  - S'assurer que chaque projet demo est complet et carre (pas de "lorem ipsum" ou trucs inacheves)
  - Ajouter des descriptions realistes (pas "Start-up Tech" generique, mais des noms/secteurs credibles)
  - Verifier que les liens Figma fonctionnent pour les sites web
  - Si possible : ajouter 1-2 vrais projets (meme petits, meme gratuits faits pour des potes/famille)
- **Objectif :** Un prospect qui clique sur le portfolio doit se dire "ils savent faire"

### 2.2 Creer les comptes reseaux sociaux
- **Qui :** Amael (creation) + Trevor/Amanda (contenu)
- **Comptes a creer :**
  - **Instagram** @visuanova.studio (PRIORITAIRE -- c'est la que tes clients vont regarder)
  - **LinkedIn** page entreprise VisuaNova Studio (IMPORTANT pour la prospection B2B)
  - **Facebook** page VisuaNova Studio (secondaire mais utile)
- **Contenu minimum avant de prospecter (par plateforme) :**
  - Instagram : 9-12 posts (grille coherente), bio complete, lien vers le site
  - LinkedIn : page complete (logo, banniere, description, 3-5 posts)
  - Facebook : page complete (infos, photo, 2-3 posts)

### 2.3 Creer le contenu initial pour les reseaux
- **Qui :** Trevor/Babakam + Amanda
- **Types de posts a preparer :**
  - 3x showcases portfolio (avant/apres ou presentation de projet)
  - 2x tips design/marketing (valeur ajoutee, montre l'expertise)
  - 2x behind the scenes / processus creatif
  - 1x post "qui sommes-nous" / presentation de l'agence
  - 1x carrousel "nos services"
- **Style visuel :** Coherent avec le site (vert #2ECC71, fond sombre, clean)
- **Note :** PAS besoin de poster tous les jours. 2-3 posts/semaine suffisent au debut.

### 2.4 Photo professionnelle (About)
- **Qui :** Amael
- **Probleme actuel :** L'image du About est une photo Unsplash generique
- **Options :**
  - Photo pro de toi (fondateur) -- RECOMMANDE pour l'approche "agence avec fondateur"
  - Photo de workspace reel
  - A defaut, garder l'image actuelle (moins impactant mais pas bloquant)

**Checkpoint Phase 2 :** Le portfolio est solide, les reseaux existent avec du contenu, le site a l'air credible.

---

## PHASE 3 -- Preparation prospection (NECESSAIRE)
**Priorite : HAUTE -- La qualite de la preparation determine les resultats**
**Duree estimee : 2-3 jours**

### 3.1 Constituer la liste de prospects
- **Qui :** Amael + Trevor
- **Ou trouver des leads :**
  - **Google Maps** : chercher par secteur + ville (ex: "restaurant Lausanne", "coiffeur Geneve")
  - **LinkedIn** : chercher des gerants/proprietaires d'entreprises locales
  - **local.ch / search.ch** : annuaire suisse
  - **Instagram** : entreprises locales avec peu de followers / contenu de faible qualite
  - **Groupes Facebook** : groupes d'entrepreneurs locaux
- **Criteres de ciblage :**
  - Entreprise avec un site web moche/inexistant OU pas de presence sur les reseaux
  - Entreprise qui a clairement besoin de visibilite (nouveau commerce, lancement produit)
  - Eviter les grosses boites (elles ont deja des agences)
- **Objectif :** Liste de 100-200 prospects avec nom, email, site web, secteur
- **Format :** Fichier Excel/Google Sheets avec colonnes : Nom entreprise | Contact | Email | Site web | Secteur | Notes | Statut

### 3.2 Configurer l'outil d'envoi
- **Qui :** Amael (choix + config) + Trevor/Tatiana (technique)
- **Options :**
  - **Brevo (ex-Sendinblue)** : gratuit jusqu'a 300 mails/jour, plan gratuit genereux, francais
  - **Lemlist** : specialise cold email, tracking ouvertures/clics (~59$/mois)
  - **Instantly** : envoi en masse avec warmup integre (~30$/mois)
  - **Gmail + GMass** : solution simple si budget serre
- **IMPORTANT :** Avant d'envoyer en masse, faire un "warmup" du domaine pendant 1-2 semaines (envoyer quelques mails normaux, repondre, etc.) pour que les serveurs de Google/Outlook ne te flag pas comme spam
- **Regle d'or :** Maximum 30-50 mails/jour par adresse au debut

### 3.3 Preparer le devis-type
- **Qui :** Trevor
- **On a deja :** Le template facture VisuaNova (skill /facture)
- **A faire :** Preparer 3 grilles tarifaires de reference (PAS a envoyer aux prospects, juste pour toi) :
  - Pack Reseaux Sociaux (ex: 10 posts/mois)
  - Pack Site Web (site vitrine, landing page)
  - Pack Publicite (affiches, bannieres)
- **But :** Quand un prospect repond, tu peux faire un devis en 10 minutes, pas en 2 heures

### 3.4 Preparer les reponses types
- **Qui :** Trevor/Amanda
- **Templates a preparer :**
  - Reponse quand un prospect est interesse ("super, voici comment on procede...")
  - Reponse quand il demande les tarifs ("ca depend du projet, voici un apercu...")
  - Reponse quand il hesite ("je comprends, voici ce qu'on peut faire pour commencer petit...")
  - Relance si pas de reponse apres 3 jours
  - Relance finale apres 7 jours

**Checkpoint Phase 3 :** Tu as une liste de prospects, un outil d'envoi configure, et tu es pret a repondre rapidement.

---

## PHASE 4 -- Lancement prospection (GO TIME)
**Priorite : C'est le but final**
**Duree : Continue**

### 4.1 Envoyer la premiere vague
- **Volume :** 20-30 mails pour tester
- **Mesurer :**
  - Taux d'ouverture (objectif : >40%)
  - Taux de reponse (objectif : >5%)
  - Taux de conversion en appel/devis (objectif : >2%)
- **Si les taux sont bas :** Ajuster l'objet, le contenu, ou la cible AVANT d'envoyer plus

### 4.2 Iterer et optimiser
- **Apres chaque vague de 50 mails :**
  - Analyser les resultats
  - Tester un nouvel objet d'email (A/B test)
  - Affiner la liste de prospects (quels secteurs repondent le mieux ?)
  - Ameliorer le contenu si besoin

### 4.3 Gerer les reponses
- **Regle :** Repondre dans les 2h max pendant les heures de bureau
- **Processus :** Reponse -> Appel/visio de decouverte -> Devis -> Signature -> Lancement projet
- **Suivi :** Mettre a jour le fichier Excel avec le statut de chaque prospect

### 4.4 Poster regulierement sur les reseaux
- **Rythme :** 2-3 posts/semaine minimum
- **Pourquoi :** Les prospects qui recoivent ton mail vont checker ton Instagram/LinkedIn. S'ils voient un compte actif, ca rassure. S'ils voient un compte mort, ca tue la confiance.

---

## PHASE 5 -- Croissance (APRES les premiers clients)
**Priorite : MOYENNE -- A lancer une fois que la machine tourne**

### 5.1 Collecter des temoignages clients
- **Des que tu livres un projet :** Demander un avis/temoignage ecrit
- **Les ajouter sur :** Le site (section temoignages) + Google Business + LinkedIn

### 5.2 Creer des etudes de cas
- **Format :** Probleme du client -> Solution proposee -> Resultats obtenus
- **Publier sur :** Le site + LinkedIn (excellent pour la credibilite B2B)

### 5.3 Passer en semi-personnalise
- **Quand :** Apres 100-200 mails en masse, tu auras des donnees sur ce qui marche
- **Comment :** Adapter le mail a chaque prospect (mentionner leur entreprise, leur site, un point specifique)
- **Impact :** x2 a x3 sur le taux de reponse

### 5.4 Lancer Google Business
- **Creer une fiche** Google Business Profile pour VisuaNova Studio
- **Pourquoi :** Visibilite locale gratuite + avis clients + credibilite

### 5.5 Considerer la publicite
- **Quand :** Quand tu as 3-5 projets termines avec temoignages
- **Quoi :** Instagram Ads / Facebook Ads ciblant les entrepreneurs locaux
- **Budget :** 5-10 CHF/jour pour commencer

---

## Calendrier resume -- Sprint 1 semaine

| Jour | Phase | Actions cles |
|---|---|---|
| **Jour 1 (Lundi)** | Phase 1 | Acheter domaine, deployer site sur Vercel, configurer DNS |
| **Jour 1 (Lundi)** | Phase 1 | Configurer email pro + SPF/DKIM, connecter formulaire contact |
| **Jour 2 (Mardi)** | Phase 2 | Nettoyer portfolio (descriptions credibles, liens OK), photo About |
| **Jour 2 (Mardi)** | Phase 2 | Creer comptes Instagram + LinkedIn + Facebook, remplir bios |
| **Jour 3 (Mercredi)** | Phase 2 | Creer et publier 9-12 posts Instagram + 3-5 posts LinkedIn |
| **Jour 4 (Jeudi)** | Phase 3 | Constituer liste de 100 prospects (Google Maps, local.ch, LinkedIn) |
| **Jour 4 (Jeudi)** | Phase 3 | Configurer outil d'envoi (Brevo), preparer devis-types + reponses-types |
| **Jour 5 (Vendredi)** | Phase 4 | Envoyer premiere vague (20-30 mails), mesurer |
| **Semaine suivante** | Phase 4-5 | Monter en volume, ajuster, collecter temoignages des premiers clients |

---

## Budget estime (minimum pour demarrer)

| Element | Cout | Frequence |
|---|---|---|
| Domaine .ch | ~15-20 CHF | /an |
| Hebergement (Vercel) | Gratuit | - |
| Email pro (Infomaniak/Zoho) | 0-5 CHF | /mois |
| Outil emailing (Brevo gratuit) | Gratuit | - |
| **Total minimum** | **~20-25 CHF** | pour demarrer |

---

## Question en suspens : Nom commercial

**Situation :** Amael a une entreprise enregistree en Suisse sous un nom different de "VisuaNova Studio".
**Options :**
1. **Utiliser VisuaNova Studio comme nom commercial** de l'entreprise existante (souvent possible sans re-enregistrement, c'est un "nom d'enseigne")
2. **Modifier la raison sociale** pour inclure VisuaNova (si raison individuelle, c'est simple au RC)
3. **Ne rien changer** et utiliser VisuaNova Studio comme marque/branding uniquement

**Recommandation Trevor :** L'option 1 ou 3 suffit pour commencer. Ne perds pas de temps sur l'admin avant d'avoir des clients. Tu pourras regulariser plus tard si ca decolle.

---

*Fiche de route preparee par Trevor -- Chef de Projet VisuaNova Studio*
*Derniere mise a jour : 2026-06-04*
