import { Clock, ThumbsUp, FileText, Award, MapPin, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

const advantages = [
  {
    icon: Clock,
    title: 'Intervention rapide',
    description:
      'Disponible 24h/24 et 7j/7 pour vos urgences. Nous nous déplaçons généralement en moins d\'une heure dans toute notre zone d\'intervention.',
    highlight: `En moins de ${siteConfig.stats.interventionTime}`,
  },
  {
    icon: FileText,
    title: 'Devis gratuit et transparent',
    description:
      'Devis détaillé, clair et gratuit avant toute intervention. Aucune mauvaise surprise sur la facture : ce qui est annoncé est ce qui est facturé.',
    highlight: 'Gratuit',
  },
  {
    icon: Award,
    title: 'Artisan qualifié et expérimenté',
    description: `${siteConfig.stats.yearsExperience} ans d'expérience dans la plomberie. Formations continues et maîtrise des techniques modernes d'installation et de réparation.`,
    highlight: `${siteConfig.stats.yearsExperience} ans d'expérience`,
  },
  {
    icon: ThumbsUp,
    title: 'Travail soigné et propre',
    description:
      'Nous protégeons vos sols et meubles avant chaque intervention. Le chantier est rendu propre et rangé à notre départ. Votre maison reste votre maison.',
    highlight: 'Propreté garantie',
  },
  {
    icon: MapPin,
    title: 'Artisan local',
    description: `Basé à ${siteConfig.mainCity}, nous connaissons parfaitement le tissu local et les contraintes techniques de la région. Réactivité et proximité assurées.`,
    highlight: `Basé à ${siteConfig.mainCity}`,
  },
  {
    icon: ShieldCheck,
    title: 'Travaux garantis',
    description:
      'Toutes nos interventions sont couvertes par notre assurance responsabilité civile professionnelle. Vous êtes protégé en cas de problème après notre passage.',
    highlight: 'Assurance RC Pro',
  },
];

export function WhyUs() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="why-us-title">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="badge mb-3">Pourquoi nous choisir</span>
          <h2 id="why-us-title" className="section-title">
            Le plombier de confiance à {siteConfig.mainCity}
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Depuis {siteConfig.stats.yearsExperience} ans, nous servons les habitants des{' '}
            {siteConfig.mainArea} avec sérieux, transparence et professionnalisme.
          </p>
        </div>

        {/* Chiffres clés */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { value: `${siteConfig.stats.yearsExperience}+`, label: 'Ans d\'expérience' },
            { value: `${siteConfig.stats.clientsServed}+`, label: 'Clients satisfaits' },
            { value: siteConfig.stats.interventionTime, label: 'Délai d\'intervention' },
            { value: `${siteConfig.stats.satisfaction}%`, label: 'Taux de satisfaction' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-white rounded-xl p-5 text-center shadow-card border border-gray-100"
            >
              <p className="text-3xl font-bold text-brand-900 mb-1">{value}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Grille avantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-50 rounded-xl shrink-0">
                  <Icon className="w-6 h-6 text-brand-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <span className="inline-block text-xs font-semibold text-accent-600 bg-accent-50 px-2 py-0.5 rounded-full mb-2">
                    {highlight}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
