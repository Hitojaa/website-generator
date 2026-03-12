import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ZonesSection() {
  return (
    <section className="section-padding bg-brand-900 text-white" aria-labelledby="zones-title">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold bg-white/10 text-brand-200 px-3 py-1 rounded-full mb-3">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Zones d&apos;intervention
          </span>
          <h2 id="zones-title" className="section-title text-white">
            Votre plombier dans toutes les {siteConfig.mainArea}
          </h2>
          <p className="text-brand-300 mt-3 max-w-2xl mx-auto">
            Nous intervenons dans toute la région. Que vous soyez à {siteConfig.zones[0]?.name},{' '}
            {siteConfig.zones[1]?.name} ou {siteConfig.zones[2]?.name}, nous sommes à votre service rapidement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {siteConfig.zones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zones-intervention#${zone.slug}`}
              className="group flex items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-all duration-200"
            >
              <MapPin
                className="w-5 h-5 text-accent-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-white mb-1">
                  Plombier à {zone.name}
                </h3>
                <p className="text-brand-300 text-sm line-clamp-2">{zone.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/zones-intervention"
            className="inline-flex items-center gap-2 bg-white text-brand-900 hover:bg-brand-50 font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Voir toutes les zones d&apos;intervention
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
