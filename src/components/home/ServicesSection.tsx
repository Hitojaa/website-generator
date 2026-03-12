import Link from 'next/link';
import { Zap, Droplets, Flame, Wrench, Bath, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  droplets: Droplets,
  funnel: Wrench,
  flame: Flame,
  bath: Bath,
  wrench: Wrench,
};

const serviceColors = [
  'from-red-50 to-orange-50 border-orange-100',
  'from-blue-50 to-cyan-50 border-blue-100',
  'from-teal-50 to-emerald-50 border-teal-100',
  'from-orange-50 to-amber-50 border-orange-100',
  'from-purple-50 to-indigo-50 border-purple-100',
  'from-brand-50 to-blue-50 border-brand-100',
];

const iconColors = [
  'bg-red-100 text-red-600',
  'bg-blue-100 text-blue-600',
  'bg-teal-100 text-teal-600',
  'bg-orange-100 text-orange-600',
  'bg-purple-100 text-purple-600',
  'bg-brand-100 text-brand-700',
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="services-title">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="badge mb-3">Nos prestations</span>
          <h2 id="services-title" className="section-title">
            Tous les services de plomberie
          </h2>
          <p className="section-subtitle mx-auto text-center">
            De l&apos;urgence à la rénovation complète, nous intervenons sur toutes les problématiques
            de plomberie dans les {siteConfig.mainArea}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            return (
              <article
                key={service.id}
                className={cn(
                  'group relative flex flex-col p-6 rounded-xl border bg-gradient-to-br',
                  'hover:shadow-card-hover transition-all duration-300',
                  serviceColors[index % serviceColors.length]
                )}
              >
                <div className={cn('p-3 rounded-xl w-fit mb-4', iconColors[index % iconColors.length])}>
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.shortDesc}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 mt-4 group-hover:gap-2 transition-all"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Voir tous nos services
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
