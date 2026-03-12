import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Zones d'intervention – Plombier ${siteConfig.mainCity} et ${siteConfig.mainArea}`,
  description: `${siteConfig.company.name} intervient dans toutes les ${siteConfig.mainArea} : ${siteConfig.zones.map((z) => z.name).join(', ')}. Dépannage rapide, devis gratuit.`,
  alternates: {
    canonical: '/zones-intervention',
  },
};

export default function ZonesPage() {
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
          <div className="flex items-start gap-4 mb-4">
            <MapPin className="w-10 h-10 text-accent-400 shrink-0 mt-1" aria-hidden="true" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              Zones d&apos;intervention
            </h1>
          </div>
          <p className="text-brand-200 text-lg leading-relaxed max-w-2xl">
            {siteConfig.company.name} intervient dans l&apos;ensemble des {siteConfig.mainArea} (département {siteConfig.department}).
            Que vous soyez à {siteConfig.zones[0]?.name}, {siteConfig.zones[1]?.name} ou dans une commune
            voisine, nous serons chez vous rapidement.
          </p>
        </div>
      </section>

      {/* Intro zone */}
      <section className="py-12 bg-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">
              Votre plombier de proximité dans les {siteConfig.mainArea}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous sommes basés à {siteConfig.mainCity} et couvrons un rayon d&apos;environ 40 km autour
              de la ville. Notre connaissance du terrain local nous permet d&apos;intervenir vite et efficacement,
              quelle que soit votre commune.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pour les urgences, nous nous engageons à intervenir en moins d&apos;une heure dans notre
              zone principale. Pour les travaux programmés, nous nous déplaçons sur l&apos;ensemble des
              {siteConfig.mainArea}.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Clock, text: 'Intervention en 1h (zone principale)' },
                { icon: MapPin, text: `Couverture ${siteConfig.mainArea}` },
                { icon: CheckCircle, text: 'Devis gratuit sur place' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zones détaillées */}
      <section className="pb-16" aria-label="Liste des zones d'intervention">
        <div className="container-site space-y-8">
          {siteConfig.zones.map((zone, index) => (
            <article
              key={zone.slug}
              id={zone.slug}
              className="bg-white border border-gray-100 rounded-2xl shadow-card overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Numéro + nom de ville */}
                <div className="bg-brand-900 text-white p-6 sm:w-48 lg:w-56 flex flex-col items-center justify-center text-center shrink-0">
                  <span className="text-5xl font-bold text-white/20 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <MapPin className="w-6 h-6 text-accent-400 mb-2" aria-hidden="true" />
                  <h2 className="text-xl font-bold">{zone.name}</h2>
                </div>

                {/* Contenu */}
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-bold text-brand-900 mb-3">
                    Plombier à {zone.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{zone.description}</p>
                  <p className="text-gray-600 text-sm mb-5">
                    Vous avez une urgence plomberie à {zone.name} ? Une fuite d&apos;eau, un débouchage
                    urgent, un chauffe-eau en panne ? {siteConfig.company.name} intervient rapidement dans
                    toute la commune et les alentours.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors shadow-cta hover:shadow-none"
                      aria-label={`Appeler pour une intervention à ${zone.name}`}
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      Appeler pour {zone.name}
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-900 border border-gray-200 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      Devis gratuit
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Hors zone */}
      <section className="py-10 bg-gray-50">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-brand-900 mb-3">
              Vous êtes hors de notre zone ?
            </h2>
            <p className="text-gray-600 mb-6">
              Appelez-nous directement et nous évaluerons si nous pouvons nous déplacer jusqu&apos;à vous.
              Pour les travaux importants, nous étudions toutes les demandes dans les {siteConfig.mainArea}.
            </p>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-cta hover:shadow-none hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
