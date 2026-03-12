import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Wrench, Facebook, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white" aria-label="Pied de page">
      {/* Bande urgence */}
      <div className="bg-accent-500">
        <div className="container-site py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-semibold">
          <span>Urgence plomberie disponible 24h/24 – 7j/7</span>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            aria-label={`Appeler en urgence : ${siteConfig.contact.phone}`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>

      {/* Corps du footer */}
      <div className="container-site py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Colonne 1 — Identité */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <Wrench className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="block font-bold text-lg leading-none">{siteConfig.company.name}</span>
              <span className="block text-xs text-brand-300 mt-0.5">Plombier {siteConfig.mainCity}</span>
            </div>
          </div>
          <p className="text-brand-300 text-sm leading-relaxed">
            Artisan plombier qualifié à {siteConfig.mainCity} et dans les {siteConfig.mainArea}.
            Dépannage rapide, travaux soignés, devis gratuit.
          </p>
          {/* Réseaux sociaux */}
          {(siteConfig.social.facebook || siteConfig.social.instagram) && (
            <div className="flex gap-3 mt-4">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Nous suivre sur Facebook"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Nous suivre sur Instagram"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Colonne 2 — Navigation */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h3>
          <ul className="space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-brand-300 hover:text-white text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/mentions-legales" className="text-brand-300 hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/politique-confidentialite" className="text-brand-300 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 — Services */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
          <ul className="space-y-2">
            {siteConfig.services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-brand-300 hover:text-white text-sm transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 4 — Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
          <ul className="space-y-3 text-sm text-brand-300">
            <li>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-start gap-2 hover:text-white transition-colors"
                aria-label={`Téléphone : ${siteConfig.contact.phone}`}
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent-400" aria-hidden="true" />
                <span className="font-semibold text-white">{siteConfig.contact.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent-400" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-400" aria-hidden="true" />
              <address className="not-italic">
                {siteConfig.contact.address.street}<br />
                {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
              </address>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent-400" aria-hidden="true" />
              <div>
                <p>{siteConfig.hours.weekdays}</p>
                <p>{siteConfig.hours.saturday}</p>
                <p className="text-accent-400 font-medium mt-1">{siteConfig.hours.emergency}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-400">
          <p>© {currentYear} {siteConfig.company.name}. Tous droits réservés.</p>
          <p>SIRET : {siteConfig.company.siret} – RCS {siteConfig.company.rcs}</p>
        </div>
      </div>
    </footer>
  );
}
