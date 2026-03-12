import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Zap, Droplets, Wrench, Flame, Bath, CheckCircle, Phone, ArrowRight
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Services de plomberie à ${siteConfig.mainCity}`,
  description: `Découvrez tous nos services de plomberie à ${siteConfig.mainCity} : dépannage urgence, recherche de fuite, débouchage, chauffe-eau, rénovation salle de bain. Devis gratuit.`,
  alternates: {
    canonical: '/services',
  },
};

const services = [
  {
    id: 'depannage-urgence',
    icon: Zap,
    title: 'Dépannage d\'urgence',
    subtitle: 'Intervention rapide 24h/24',
    description: `Une urgence plomberie peut survenir à n'importe quel moment et transformer votre quotidien en cauchemar. ${siteConfig.company.name} intervient 24 heures sur 24, 7 jours sur 7 pour tous les problèmes urgents de plomberie à ${siteConfig.mainCity} et dans les ${siteConfig.mainArea}.`,
    benefits: [
      'Intervention en moins d\'1 heure dans la zone',
      'Disponible les week-ends et jours fériés',
      'Diagnostic rapide et précis sur place',
      'Devis immédiat avant intervention',
      'Matériel professionnel embarqué',
      'Prise en charge des urgences graves',
    ],
    note: 'En cas d\'urgence, appelez directement — ne passez pas par le formulaire.',
    color: 'bg-red-50 border-red-100',
    iconColor: 'bg-red-100 text-red-600',
  },
  {
    id: 'recherche-fuite',
    icon: Droplets,
    title: 'Recherche et réparation de fuite',
    subtitle: 'Détection professionnelle',
    description: `Les fuites d'eau, visibles ou cachées, peuvent causer des dégâts considérables si elles ne sont pas traitées rapidement. Nous disposons de matériel de détection de fuite sans destruction pour localiser précisément le problème.`,
    benefits: [
      'Détection de fuites apparentes et cachées',
      'Matériel de détection non invasif',
      'Localisation sans démolition quand possible',
      'Réparation rapide et durable',
      'Rapport d\'intervention pour assurance',
      'Conseils préventifs pour l\'avenir',
    ],
    note: 'Conservez bien notre rapport d\'intervention pour votre déclaration d\'assurance.',
    color: 'bg-blue-50 border-blue-100',
    iconColor: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'debouchage',
    icon: Wrench,
    title: 'Débouchage canalisation',
    subtitle: 'Toilettes, éviers, douches',
    description: `Un évier bouché, des toilettes qui débordent ou une douche qui ne s'écoule plus ? Ces problèmes courants ont souvent une solution rapide. Notre équipement de débouchage professionnel (furet électrique, pompe haute pression) vient à bout de tous les bouchons.`,
    benefits: [
      'Débouchage de WC, lavabo, évier, douche, baignoire',
      'Furet électrique et pompe haute pression',
      'Inspection caméra des canalisations',
      'Résultats durables et non ponctuels',
      'Conseils entretien préventif',
      'Intervention propre, sans salissures',
    ],
    note: 'Évitez les produits chimiques agressifs qui endommagent vos canalisations.',
    color: 'bg-teal-50 border-teal-100',
    iconColor: 'bg-teal-100 text-teal-600',
  },
  {
    id: 'chauffe-eau',
    icon: Flame,
    title: 'Chauffe-eau',
    subtitle: 'Installation, remplacement, entretien',
    description: `Plus d'eau chaude ? Chauffe-eau en panne ? Nous intervenons pour le dépannage, le remplacement ou l'installation de chauffe-eau électriques, thermodynamiques ou à gaz. Nous travaillons avec les grandes marques et vous conseillons le modèle adapté à votre situation.`,
    benefits: [
      'Remplacement de chauffe-eau électrique et gaz',
      'Installation de chauffe-eau thermodynamique',
      'Entretien et détartrage',
      'Toutes les grandes marques',
      'Aide aux démarches de subvention (MaPrimeRénov\')',
      'Délai d\'intervention rapide en cas de panne',
    ],
    note: 'L\'entretien annuel prolonge la durée de vie de votre équipement de plusieurs années.',
    color: 'bg-orange-50 border-orange-100',
    iconColor: 'bg-orange-100 text-orange-600',
  },
  {
    id: 'renovation-salle-de-bain',
    icon: Bath,
    title: 'Rénovation salle de bain',
    subtitle: 'Rénovation complète ou partielle',
    description: `Votre salle de bain mérite d'être à votre image. Nous prenons en charge votre projet de rénovation de A à Z : dépose de l'existant, nouvelle plomberie, pose de carrelage si besoin, installation des sanitaires et finitions soignées. Résultat garanti dans les délais et le budget convenus.`,
    benefits: [
      'Étude et devis gratuits à domicile',
      'Prise en charge complète ou partielle',
      'Pose de douche, baignoire, lavabo, WC',
      'Installation PMR / senior possible',
      'Carrelage et finitions sur demande',
      'Délais respectés et budget maîtrisé',
    ],
    note: 'Chaque devis de rénovation est établi après visite sur place pour une estimation précise.',
    color: 'bg-purple-50 border-purple-100',
    iconColor: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'robinetterie-sanitaires',
    icon: Wrench,
    title: 'Robinetterie et sanitaires',
    subtitle: 'Remplacement et installation',
    description: `Un robinet qui fuit, un WC qui coule en permanence, un mitigeur à remplacer ? Ces petits problèmes font perdre beaucoup d'eau et coûtent cher sur la facture. Nous intervenons rapidement pour remplacer et installer tout type de robinetterie et sanitaire.`,
    benefits: [
      'Remplacement de robinet, mitigeur, bonde, siphon',
      'Installation de WC, lavabo, bidet',
      'Pose de lave-mains, vasque sur meuble',
      'Remplacement de joints et cartouches',
      'Toutes marques et gammes de prix',
      'Conseil sur le choix des équipements',
    ],
    note: 'Un robinet qui goutte consomme en moyenne 35 litres d\'eau par jour — faites-le réparer vite.',
    color: 'bg-brand-50 border-brand-100',
    iconColor: 'bg-brand-100 text-brand-700',
  },
  {
    id: 'entretien',
    icon: CheckCircle,
    title: 'Entretien préventif',
    subtitle: 'Contrat d\'entretien annuel',
    description: `La meilleure façon d'éviter les pannes coûteuses est l'entretien préventif régulier. Nous proposons un contrat d'entretien annuel pour inspecter l'ensemble de votre installation de plomberie, détecter les anomalies avant qu'elles ne deviennent des problèmes et vous assurer une tranquillité d'esprit toute l'année.`,
    benefits: [
      'Visite annuelle complète de votre installation',
      'Contrôle de la pression, des joints, des robinets',
      'Détartrage du chauffe-eau inclus',
      'Rapport d\'inspection détaillé',
      'Tarifs préférentiels pour les urgences',
      'Priorité d\'intervention en cas de panne',
    ],
    note: 'Nos clients en contrat bénéficient d\'une priorité d\'intervention et de tarifs réduits.',
    color: 'bg-green-50 border-green-100',
    iconColor: 'bg-green-100 text-green-600',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero page services */}
      <section className="bg-brand-900 text-white py-16 lg:py-20">
        <div className="container-site">
          <div className="max-w-2xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-brand-300 hover:text-white text-sm mb-6 transition-colors"
            >
              ← Retour à l&apos;accueil
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Nos services de plomberie à {siteConfig.mainCity}
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed mb-6">
              De l&apos;urgence 24h/24 à la rénovation complète, {siteConfig.company.name} couvre
              l&apos;ensemble de vos besoins en plomberie dans les {siteConfig.mainArea}.
            </p>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-cta hover:shadow-none"
              aria-label={`Appeler le ${siteConfig.contact.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Liste des services */}
      <section className="py-16" aria-label="Détail des services">
        <div className="container-site space-y-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <article
                key={service.id}
                id={service.id}
                className={`rounded-2xl border p-6 sm:p-8 lg:p-10 ${service.color}`}
              >
                <div className={`flex flex-col lg:flex-row gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl ${service.iconColor}`}>
                        <Icon className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                        <p className="text-sm text-gray-500 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                    {service.note && (
                      <div className="p-3 bg-white/60 rounded-lg border border-white text-sm text-gray-600 italic">
                        💡 {service.note}
                      </div>
                    )}
                    <div className="flex gap-3 mt-6 flex-wrap">
                      <a
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-cta hover:shadow-none"
                      >
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        Appeler maintenant
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-900 border border-gray-200 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200"
                      >
                        Demander un devis
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-xl p-6 shadow-card">
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                        Ce que comprend ce service
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <CheckCircle
                              className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="bg-brand-900 text-white py-14">
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold mb-4">Vous avez besoin d&apos;un plombier ?</h2>
          <p className="text-brand-200 text-lg mb-8 max-w-xl mx-auto">
            Appelez-nous maintenant ou demandez un devis gratuit. Nous intervenons rapidement dans toutes les {siteConfig.mainArea}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-cta hover:shadow-none transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
