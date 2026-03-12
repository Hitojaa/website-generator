import { Quote } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { StarRating } from '@/components/shared/StarRating';

export function Testimonials() {
  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-title">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="badge mb-3">Avis clients</span>
          <h2 id="testimonials-title" className="section-title">
            Ce que disent nos clients
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Des centaines de clients satisfaits dans les {siteConfig.mainArea}.
            Lisez leurs témoignages et jugez par vous-même.
          </p>
        </div>

        {/* Note globale */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-brand-50 border border-brand-100 rounded-2xl p-6 mb-10 max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-5xl font-bold text-brand-900">5.0</p>
            <StarRating rating={5} />
            <p className="text-sm text-gray-500 mt-1">{siteConfig.testimonials.length} avis vérifiés</p>
          </div>
          <div className="h-px sm:h-12 w-full sm:w-px bg-brand-200" role="separator" />
          <div className="text-center sm:text-left">
            <p className="font-bold text-brand-900 text-lg">Excellente note</p>
            <p className="text-sm text-gray-600">
              {siteConfig.stats.satisfaction}% de clients satisfaits<br />
              sur {siteConfig.stats.clientsServed}+ interventions
            </p>
          </div>
        </div>

        {/* Grille des avis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col gap-4 hover:shadow-card transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <StarRating rating={t.rating} size="sm" />
                <Quote className="w-6 h-6 text-brand-200" aria-hidden="true" />
              </div>
              <blockquote>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
                <div
                  className="w-9 h-9 rounded-full bg-brand-900 text-white flex items-center justify-center text-sm font-bold shrink-0"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.city}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
