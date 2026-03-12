# Site vitrine Plombier — Next.js + TypeScript + Tailwind CSS

Site vitrine professionnel pour artisan plombier local, orienté conversion, SEO local et performance. Conçu pour être facilement réutilisé pour différents plombiers en modifiant un seul fichier de configuration.

---

## Sommaire

- [Lancer le projet](#lancer-le-projet)
- [Modifier les informations du plombier](#modifier-les-informations-du-plombier)
- [Structure du projet](#structure-du-projet)
- [Configurer le formulaire de contact](#configurer-le-formulaire-de-contact)
- [Déployer sur Vercel](#déployer-sur-vercel)
- [Mesures de sécurité](#mesures-de-sécurité)
- [SEO local](#seo-local)
- [Personnalisation du design](#personnalisation-du-design)

---

## Lancer le projet

### Prérequis

- Node.js 18+
- npm, yarn ou pnpm

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-org/votre-repo.git
cd votre-repo

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local
# Editez .env.local avec vos valeurs réelles

# Lancer en développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

### Autres commandes

```bash
npm run build    # Build de production
npm run start    # Démarrer le serveur de production
npm run lint     # Vérifier le code avec ESLint
```

---

## Modifier les informations du plombier

**Tout est centralisé dans un seul fichier :**

```
src/config/site.ts
```

Ce fichier contient toutes les données configurables :

| Section | Ce que vous pouvez modifier |
|---|---|
| `company` | Nom, slogan, SIRET, RCS |
| `contact` | Téléphone, email, WhatsApp, adresse |
| `hours` | Horaires d'ouverture, urgences |
| `mainCity` | Ville principale |
| `mainArea` | Département / région |
| `zones` | Villes et communes desservies |
| `services` | Liste et description des services |
| `testimonials` | Avis clients |
| `stats` | Chiffres clés (expérience, clients…) |
| `seo` | Titres, descriptions, URL du site |
| `social` | Liens réseaux sociaux |
| `nav` | Navigation principale |

### Exemple rapide — changer de ville

```typescript
// src/config/site.ts

mainCity: 'Marseille',  // ← Changer ici
mainArea: 'Bouches-du-Rhône',
department: '13',

contact: {
  phone: '04 91 00 12 34',
  phoneRaw: '+33491001234',
  // ...
},
```

---

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx                    # Layout racine + métadonnées globales
│   ├── page.tsx                      # Page d'accueil
│   ├── globals.css                   # Styles globaux Tailwind
│   ├── not-found.tsx                 # Page 404
│   ├── services/page.tsx             # Page services
│   ├── a-propos/page.tsx             # Page à propos
│   ├── zones-intervention/page.tsx   # Page zones
│   ├── contact/page.tsx              # Page contact
│   ├── merci/page.tsx                # Page remerciement
│   ├── mentions-legales/page.tsx     # Mentions légales
│   ├── politique-confidentialite/    # RGPD
│   │   └── page.tsx
│   └── api/
│       └── contact/route.ts          # API formulaire de contact
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # En-tête sticky avec navigation
│   │   ├── Footer.tsx                # Pied de page complet
│   │   └── MobileCallButton.tsx      # Bouton appel sticky mobile
│   ├── home/
│   │   ├── Hero.tsx                  # Section héro
│   │   ├── ServicesSection.tsx       # Grille des services
│   │   ├── WhyUs.tsx                 # Pourquoi nous choisir
│   │   ├── ZonesSection.tsx          # Zones d'intervention
│   │   ├── Testimonials.tsx          # Avis clients
│   │   └── CallToAction.tsx          # CTA final avec formulaire
│   ├── shared/
│   │   ├── Button.tsx                # Composant bouton flexible
│   │   ├── ContactForm.tsx           # Formulaire sécurisé
│   │   └── StarRating.tsx            # Affichage des étoiles
│   └── seo/
│       └── LocalBusinessSchema.tsx   # Schema.org JSON-LD
├── config/
│   └── site.ts                       # ⚡ FICHIER PRINCIPAL DE CONFIGURATION
└── lib/
    └── utils.ts                      # Utilitaires (cn, formatPhone)
```

---

## Configurer le formulaire de contact

Le formulaire de contact est prêt côté front. Il vous reste à configurer l'envoi d'e-mail côté serveur dans :

```
src/app/api/contact/route.ts
```

### Option recommandée : Resend

```bash
npm install resend
```

Dans `.env.local` :
```env
EMAIL_API_KEY=re_xxxxxxxxxx
CONTACT_EMAIL=vous@domaine.fr
```

Dans `src/app/api/contact/route.ts`, décommentez et adaptez :
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.EMAIL_API_KEY);

await resend.emails.send({
  from: 'noreply@votre-domaine.fr',
  to: process.env.CONTACT_EMAIL!,
  subject: `Nouvelle demande de ${name}`,
  html: `<p><b>Nom :</b> ${name}</p><p><b>Tél :</b> ${phone}</p>...`,
});
```

### Sécurité du formulaire (déjà en place)

- Validation stricte côté client (Zod + React Hook Form)
- Validation stricte côté serveur (Zod — indépendante du front)
- Champ honeypot anti-spam
- Rate limiting par IP (5 tentatives / 15 min)
- Aucune exposition de données sensibles

---

## Déployer sur Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# En production
vercel --prod
```

### Variables d'environnement à configurer sur Vercel

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL complète du site (ex: `https://www.domaine.fr`) |
| `CONTACT_EMAIL` | Email de réception des formulaires |
| `EMAIL_API_KEY` | Clé API de votre service d'envoi (Resend, SendGrid…) |

---

## Mesures de sécurité

### Headers de sécurité (configurés dans `next.config.ts`)

| Header | Valeur |
|---|---|
| `X-Frame-Options` | `SAMEORIGIN` — empêche le clickjacking |
| `X-Content-Type-Options` | `nosniff` — empêche le MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Désactive caméra, microphone |
| `Content-Security-Policy` | Politique restrictive par défaut |
| `Strict-Transport-Security` | Force HTTPS (HSTS) |

### Code

- Aucun `dangerouslySetInnerHTML` avec données utilisateur
- Validation Zod côté client ET serveur (deux couches indépendantes)
- Honeypot anti-spam dans le formulaire
- Rate limiting IP en mémoire
- Aucune clé ou secret dans le code source (variables `.env`)
- `poweredByHeader: false` — masque la technologie utilisée

### Intégrité du site en production

> ⚠️ **Important à comprendre :** Un utilisateur final peut toujours modifier l'affichage d'un site dans **son propre navigateur** (DevTools, extensions). Ce comportement est inhérent au Web et **ne peut pas être empêché côté serveur**.
>
> Ce qui **peut** et **doit** être protégé, c'est le code en production :
>
> - Utilisez un **pipeline CI/CD** (GitHub Actions + Vercel) — seul le code validé est déployé
> - **Aucun accès FTP direct** au serveur — déployez uniquement via le pipeline
> - **Aucun éditeur tiers** n'a accès au dépôt en écriture
> - Le build Next.js produit du code **minifié** sans commentaires inutiles
> - **Pas de CMS** avec injection directe — le contenu vient d'un fichier TypeScript versionné

---

## SEO local

Le site est optimisé pour les recherches locales de type :

- `plombier [ville]`
- `dépannage plomberie [ville]`
- `fuite eau [ville]`
- `débouchage canalisation [ville]`
- `chauffe-eau [ville]`

### Éléments SEO en place

- **Schema.org** `Plumber` avec toutes les propriétés NAP (Name, Address, Phone)
- **Metadata** Next.js (title, description, OpenGraph, Twitter Card)
- **Balises H1/H2/H3** propres et hiérarchisées sur chaque page
- **URLs propres** (`/services`, `/zones-intervention`, etc.)
- **Maillage interne** entre les pages
- **Page zones** avec contenu unique par ville
- **Données structurées** : avis, horaires, zone de service

### Améliorer le SEO

1. Ajoutez une vraie image `og-image.jpg` (1200×630) dans `/public`
2. Ajoutez `favicon.ico` et `apple-touch-icon.png` dans `/public`
3. Créez un fichier `public/site.webmanifest`
4. Configurez Google Search Console après déploiement
5. Créez une fiche Google Business Profile (crucial pour le local)

---

## Personnalisation du design

### Palette de couleurs

Modifiez `tailwind.config.ts` pour changer la palette :

```typescript
colors: {
  brand: {
    // Bleu profond — couleur principale
    900: '#1e3a8a',
    600: '#2563eb',
    // ...
  },
  accent: {
    // Orange — CTA, urgence, accent
    500: '#f97316',
    600: '#ea580c',
  },
},
```

### Ajouter de vraies photos

1. Placez vos images dans `/public/images/`
2. Utilisez `<Image>` de Next.js pour l'optimisation automatique
3. Remplacez les blocs placeholder dans `a-propos/page.tsx`

---

## Licence

Projet propriétaire — usage commercial réservé. Ne pas redistribuer sans autorisation.
