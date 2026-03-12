import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Clock, Heart, Shield, Wrench, Users, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `À propos – ${siteConfig.company.name}`,
  description: `Découvrez ${siteConfig.company.name}, artisan plombier à ${siteConfig.mainCity} depuis ${siteConfig.stats.yearsExperience} ans. Professionnalisme, réactivité et travail soigné sont nos valeurs.`,
  alternates: {
    canonical: '/a-propos',
  },
};

const values = [
  {
    icon: Clock,
    title: 'Réactivité',
    description:
      'Nous savons qu\'une urgence plomberie ne peut pas attendre. C\'est pourquoi nous sommes disponibles 24h/24 et nous nous engageons à intervenir en moins d\'une heure dans notre zone principale.',
  },
  {
    icon: Heart,
    title: 'Respect du client',
    description:
      'Votre maison est votre espace de vie. Nous la respectons : protection du sol avant toute intervention, nettoyage systématique après notre passage, et communication claire à chaque étape.',
  },
  {
    icon: Shield,
    title: 'Transparence',
    description:
      'Aucune mauvaise surprise sur la facture. Nous établissons un devis détaillé avant chaque intervention et nous respectons scrupuleusement ce qui a été convenu.',
  },
  {
    icon: Award,
    title: 'Qualité',
    description:
      'Nous n\'utilisons que des matériaux certifiés et des techniques éprouvées. Chaque intervention est réalisée dans les règles de l\'art pour vous garantir durabilité et fiabilité.',
  },
];

const milestones = [
  { year: '2009', event: `Création de ${siteConfig.company.name} à ${siteConfig.mainCity}` },
  { year: '2012', event: 'Extension de la zone d\'intervention aux communes voisines' },
  { year: '2016', event: 'Certification pour l\'installation de chauffe-eau thermodynamiques' },
  { year: '2019', event: `${siteConfig.stats.clientsServed / 2}+ clients accompagnés dans la région` },
  { year: '2022', event: 'Investissement en matériel de détection de fuite non invasif' },
  { year: '2024', event: `Plus de ${siteConfig.stats.clientsServed} clients satisfaits sur ${siteConfig.mainArea}` },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 lg:py-20">
        <div className="container-site">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-brand-300 hover:text-white text-sm mb-6 transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              À propos de {siteConfig.company.name}
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed">
              Artisan plombier indépendant basé à {siteConfig.mainCity}, nous mettons notre
              savoir-faire et notre passion du métier au service des habitants des {siteConfig.mainArea}
              depuis {siteConfig.stats.yearsExperience} ans.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">Notre histoire</span>
              <h2 className="section-title mb-6">
                Un artisan local, humain et expérimenté
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {siteConfig.company.name} est né d&apos;une conviction simple : les habitants de{' '}
                  {siteConfig.mainCity} et des {siteConfig.mainArea} méritent un plombier fiable,
                  accessible et honnête. Un artisan qui arrive à l&apos;heure, qui explique ce qu&apos;il fait,
                  qui facture ce qu&apos;il a annoncé.
                </p>
                <p>
                  Depuis {siteConfig.stats.yearsExperience} ans, c&apos;est exactement ce que nous faisons.
                  Que ce soit pour une fuite à 22h un vendredi soir, un chauffe-eau à remplacer en urgence
                  ou une rénovation complète de salle de bain, nous apportons le même soin et la même
                  rigueur à chaque intervention.
                </p>
                <p>
                  Notre équipe connaît parfaitement le tissu local, les types d&apos;installations fréquents
                  dans la région, les problèmes courants liés à la qualité de l&apos;eau et aux conditions
                  climatiques. Cette connaissance terrain nous permet d&apos;intervenir vite, bien et de
                  vous conseiller efficacement.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: `${siteConfig.stats.yearsExperience} ans`, label: 'D\'expérience' },
                  { value: `${siteConfig.stats.clientsServed}+`, label: 'Clients satisfaits' },
                  { value: `${siteConfig.stats.interventionTime}`, label: 'Délai moyen' },
                  { value: `${siteConfig.stats.satisfaction}%`, label: 'Satisfaction' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-brand-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-brand-900">{value}</p>
                    <p className="text-sm text-gray-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder image artisan */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-brand-400 p-8">
                  <Wrench className="w-24 h-24 mx-auto mb-4 opacity-50" aria-hidden="true" />
                  <p className="font-semibold text-brand-500">Photo de l&apos;artisan</p>
                  <p className="text-sm text-brand-400 mt-1">À remplacer par une vraie photo</p>
                </div>
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card-hover p-4 flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Assuré RC Pro</p>
                  <p className="text-xs text-gray-500">Travaux garantis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-gray-50" aria-labelledby="values-title">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="badge mb-3">Nos engagements</span>
            <h2 id="values-title" className="section-title">Ce qui nous guide</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-50 rounded-xl shrink-0">
                    <Icon className="w-6 h-6 text-brand-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode de travail */}
      <section className="section-padding bg-white" aria-labelledby="method-title">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge mb-3">Notre méthode</span>
              <h2 id="method-title" className="section-title">Comment nous travaillons</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Premier contact',
                  desc: 'Vous appelez ou remplissez le formulaire. Nous répondons rapidement, évaluons votre situation et convenons d\'un créneau d\'intervention adapté à votre urgence.',
                },
                {
                  step: '02',
                  title: 'Diagnostic sur place',
                  desc: 'À notre arrivée, nous protégeons votre espace puis effectuons un diagnostic précis du problème. Nous vous expliquons clairement ce que nous avons trouvé.',
                },
                {
                  step: '03',
                  title: 'Devis et validation',
                  desc: 'Avant toute intervention, nous vous soumettons un devis détaillé. Aucun travail n\'est commencé sans votre accord exprès sur le prix et la solution proposée.',
                },
                {
                  step: '04',
                  title: 'Intervention soignée',
                  desc: 'Nous réalisons les travaux avec soin, en utilisant des matériaux de qualité. Nous vous informons à chaque étape si des imprévus surviennent.',
                },
                {
                  step: '05',
                  title: 'Vérification et nettoyage',
                  desc: 'Avant de partir, nous testons systématiquement notre intervention. Nous nettoyons et rangeons l\'espace de travail. Le chantier est rendu propre.',
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-brand-900 text-white flex items-center justify-center font-bold text-sm">
                    {step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-brand-50" aria-labelledby="history-title">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="badge mb-3">Notre parcours</span>
            <h2 id="history-title" className="section-title">Nos étapes clés</h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-200" aria-hidden="true" />
            <div className="space-y-6">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 relative">
                  <div className="shrink-0 w-12 h-12 bg-brand-900 text-white rounded-full flex items-center justify-center text-xs font-bold relative z-10">
                    {year}
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-card flex-1">
                    <p className="text-gray-700 font-medium">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 text-white py-14">
        <div className="container-site text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-brand-300" aria-hidden="true" />
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez nos {siteConfig.stats.clientsServed}+ clients satisfaits
          </h2>
          <p className="text-brand-200 text-lg mb-8 max-w-xl mx-auto">
            Un problème de plomberie ? Faites confiance à l&apos;artisan de confiance de {siteConfig.mainCity}.
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
              Demander un devis
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
