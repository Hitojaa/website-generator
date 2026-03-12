/**
 * FICHIER DE CONFIGURATION CENTRALE DU SITE
 * ==========================================
 * Modifiez ce fichier pour adapter le site à un nouveau plombier.
 * Toutes les informations clés sont centralisées ici.
 */

export const siteConfig = {
  // ─── Identité de l'entreprise ─────────────────────────────────────────────
  company: {
    name: 'HD Plomberie',
    shortName: 'HD Plomberie',
    slogan: 'Votre plombier de confiance à Cagnes-sur-Mer',
    siret: '',
    rcs: 'Antibes',
  },

  // ─── Coordonnées ──────────────────────────────────────────────────────────
  contact: {
    phone: '06 62 48 46 85',
    phoneRaw: '+33662484685',          // Format international pour les liens tel:
    whatsapp: '+33662484685',          // Laisser vide '' pour désactiver
    email: 'contact@hd-plomberie.fr',
    address: {
      street: '2 Av. Cyrille Besset',
      city: 'Cagnes-sur-Mer',
      postalCode: '06800',
      country: 'France',
    },
  },

  // ─── Horaires ─────────────────────────────────────────────────────────────
  hours: {
    weekdays: 'Lundi – Vendredi : Ouvert 24h/24',
    saturday: 'Samedi : Ouvert 24h/24',
    sunday: 'Dimanche : Ouvert 24h/24',
    emergency: 'Disponible 24h/24 – 7j/7',
    emergencyNote: 'Nous sommes disponibles à toute heure, 7 jours sur 7, pour vos urgences plomberie.',
  },

  // ─── Zone géographique principale ─────────────────────────────────────────
  mainCity: 'Cagnes-sur-Mer',
  mainArea: 'Alpes-Maritimes',
  department: '06',

  // ─── Zones d'intervention ─────────────────────────────────────────────────
  zones: [
    {
      name: 'Cagnes-sur-Mer',
      slug: 'cagnes-sur-mer',
      description:
        'Basés à Cagnes-sur-Mer, nous intervenons dans toute la ville et ses quartiers : Haut-de-Cagnes, Cros-de-Cagnes, Val-de-Cagnes. Dépannage rapide 24h/24.',
    },
    {
      name: 'Nice',
      slug: 'nice',
      description:
        'Nous intervenons dans toute la ville de Nice et ses quartiers : Vieux-Nice, Cimiez, Libération, Madeleine, Musiciens, etc. Dépannage rapide, souvent en moins d\'une heure.',
    },
    {
      name: 'Antibes',
      slug: 'antibes',
      description:
        'Plombier à Antibes et Juan-les-Pins. Interventions rapides pour dépannage, fuites, débouchage et installation sanitaire dans tout Antibes.',
    },
    {
      name: 'Villeneuve-Loubet',
      slug: 'villeneuve-loubet',
      description:
        'Interventions à Villeneuve-Loubet et Villeneuve-Loubet-Plage. Dépannage et travaux de plomberie pour particuliers et copropriétés.',
    },
    {
      name: 'Cannes',
      slug: 'cannes',
      description:
        'Dépannage plomberie à Cannes et La Bocca. Artisan disponible pour urgences, réparations et travaux dans toute la ville de Cannes.',
    },
    {
      name: 'Sophia Antipolis',
      slug: 'sophia-antipolis',
      description:
        'Interventions à Sophia Antipolis et Valbonne. Prise en charge rapide pour entreprises et résidences dans le secteur technopolitain.',
    },
  ],

  // ─── Services proposés ────────────────────────────────────────────────────
  services: [
    {
      id: 'urgence',
      title: 'Dépannage d\'urgence',
      shortDesc: 'Intervention rapide 24h/24 pour toute urgence plomberie.',
      slug: 'depannage-urgence',
      icon: 'zap',
    },
    {
      id: 'fuite',
      title: 'Recherche de fuite',
      shortDesc: 'Détection et réparation de fuites visibles et cachées.',
      slug: 'recherche-fuite',
      icon: 'droplets',
    },
    {
      id: 'debouchage',
      title: 'Débouchage canalisation',
      shortDesc: 'Toilettes, éviers, douches : débouchage rapide et efficace.',
      slug: 'debouchage',
      icon: 'funnel',
    },
    {
      id: 'chauffe-eau',
      title: 'Chauffe-eau',
      shortDesc: 'Remplacement, installation et entretien de chauffe-eau.',
      slug: 'chauffe-eau',
      icon: 'flame',
    },
    {
      id: 'salle-de-bain',
      title: 'Rénovation salle de bain',
      shortDesc: 'Rénovation complète ou partielle de votre salle de bain.',
      slug: 'renovation-salle-de-bain',
      icon: 'bath',
    },
    {
      id: 'robinetterie',
      title: 'Robinetterie & sanitaires',
      shortDesc: 'Remplacement et installation de robinets, WC, lavabos.',
      slug: 'robinetterie-sanitaires',
      icon: 'wrench',
    },
  ],

  // ─── Avis clients ─────────────────────────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: 'Marie L.',
      city: 'Cagnes-sur-Mer',
      rating: 5,
      text: 'Intervention ultra rapide suite à une fuite d\'eau importante. Arrivée en moins d\'une heure, réparation propre et soignée. Tarif honnête et devis respecté. Je recommande vivement !',
      date: '2024-11-15',
    },
    {
      id: 2,
      name: 'Thierry M.',
      city: 'Nice',
      rating: 5,
      text: 'Mon chauffe-eau a rendu l\'âme un vendredi soir. HD Plomberie a répondu immédiatement et installé un nouveau modèle le lendemain matin. Professionnel, ponctuel et très soigné.',
      date: '2024-10-28',
    },
    {
      id: 3,
      name: 'Sophie R.',
      city: 'Antibes',
      rating: 5,
      text: 'Débouchage de canalisation réalisé en moins de 30 minutes. Artisan très professionnel, travail impeccable, aucun dégât. Je garde les coordonnées précieusement !',
      date: '2024-09-12',
    },
    {
      id: 4,
      name: 'Jean-Pierre B.',
      city: 'Cagnes-sur-Mer',
      rating: 5,
      text: 'Rénovation complète de notre salle de bain réalisée en 5 jours. Résultat magnifique, tout a été fait dans les délais et le budget prévu. Vraiment très satisfait.',
      date: '2024-08-03',
    },
    {
      id: 5,
      name: 'Isabelle D.',
      city: 'Villeneuve-Loubet',
      rating: 5,
      text: 'Recherche de fuite invisible depuis plusieurs semaines. Détection précise, réparation rapide et sans destruction excessive. Enfin un professionnel sérieux et compétent.',
      date: '2024-07-19',
    },
  ],

  // ─── Note Google ──────────────────────────────────────────────────────────
  googleRating: {
    score: 4.8,
    count: 38,
  },

  // ─── Chiffres clés ────────────────────────────────────────────────────────
  stats: {
    yearsExperience: 10,
    clientsServed: 500,
    interventionTime: '1h',
    satisfaction: 98,
  },

  // ─── SEO ──────────────────────────────────────────────────────────────────
  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hd-plomberie.fr',
    defaultTitle: 'HD Plomberie – Plombier à Cagnes-sur-Mer | Disponible 24h/24 7j/7',
    titleTemplate: '%s | HD Plomberie – Plombier Cagnes-sur-Mer',
    defaultDescription:
      'Plombier professionnel à Cagnes-sur-Mer et dans les Alpes-Maritimes. Disponible 24h/24 7j/7 pour dépannage urgence, recherche de fuite, débouchage, chauffe-eau, rénovation salle de bain. Devis gratuit.',
    keywords:
      'plombier Cagnes-sur-Mer, dépannage plomberie Cagnes-sur-Mer, fuite eau Cagnes-sur-Mer, débouchage Cagnes-sur-Mer, chauffe-eau Cagnes-sur-Mer, plombier urgence Nice, plombier 06800',
    ogImage: '/og-image.jpg',
    twitterHandle: '',
    locale: 'fr_FR',
  },

  // ─── Réseaux sociaux ──────────────────────────────────────────────────────
  social: {
    facebook: 'https://facebook.com/',
    instagram: '',
    google: '',
  },

  // ─── Navigation ───────────────────────────────────────────────────────────
  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Zones', href: '/zones-intervention' },
    { label: 'Contact', href: '/contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
