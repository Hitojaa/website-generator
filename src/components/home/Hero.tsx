import Link from 'next/link';
import { Phone, FileText, CheckCircle, Clock, Shield, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';

const reassurances = [
  { icon: Clock, text: 'Intervention en 1h' },
  { icon: FileText, text: 'Devis gratuit' },
  { icon: Shield, text: 'Artisan certifié' },
  { icon: Star, text: 'Travail garanti' },
];

export function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white overflow-hidden"
      aria-label="Section principale"
    >
      {/* Motif de fond décoratif */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Accent décoratif */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-brand-600/20 rounded-full translate-y-1/2 -translate-x-1/3"
        aria-hidden="true"
      />

      <div className="container-site relative py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Badge urgence */}
          <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/40 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" aria-hidden="true" />
            Disponible 24h/24 – 7j/7 pour les urgences
          </div>

          {/* Titre principal H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Plombier à{' '}
            <span className="text-accent-400">{siteConfig.mainCity}</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-white/90">
              Dépannage rapide et devis gratuit
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl text-brand-200 mb-8 max-w-2xl leading-relaxed">
            {siteConfig.company.name} intervient dans toutes les{' '}
            {siteConfig.mainArea} pour vos urgences de plomberie, fuites d&apos;eau,
            débouchages et travaux sanitaires. Artisan qualifié, ponctuel et rigoureux.
          </p>

          {/* CTA principaux */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-cta hover:shadow-none transition-all duration-200 hover:-translate-y-0.5"
              aria-label={`Appeler maintenant : ${siteConfig.contact.phone}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Appeler maintenant
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileText className="w-5 h-5" aria-hidden="true" />
              Demander un devis gratuit
            </Link>
          </div>

          {/* Éléments de réassurance */}
          <div className="flex flex-wrap gap-3 sm:gap-6">
            {reassurances.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-brand-200">
                <CheckCircle className="w-4 h-4 text-accent-400 shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carte téléphonique flottante sur desktop */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 bg-white rounded-2xl shadow-2xl p-6 w-72">
          <div className="text-center">
            <p className="text-sm text-gray-500 font-medium mb-1">Urgence plomberie</p>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="block text-2xl font-bold text-brand-900 hover:text-accent-500 transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
            <p className="text-xs text-green-600 font-semibold mt-1 flex items-center justify-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
              Disponible maintenant
            </p>
          </div>

          <div className="h-px bg-gray-100" role="separator" />

          <div className="space-y-2">
            {reassurances.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div className="p-1.5 bg-brand-50 rounded-md">
                  <Icon className="w-3.5 h-3.5 text-brand-700" aria-hidden="true" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{text}</span>
              </div>
            ))}
          </div>

          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-cta hover:shadow-none hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Appeler maintenant
          </a>

          <p className="text-xs text-center text-gray-400">Devis gratuit et sans engagement</p>
        </div>
      </div>

      {/* Vague de séparation */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40L60 34C120 28 240 16 360 12C480 8 600 12 720 18C840 24 960 32 1080 34C1200 36 1320 32 1380 30L1440 28V40H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
