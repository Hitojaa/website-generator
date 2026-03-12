import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { ContactForm } from '@/components/shared/ContactForm';

export const metadata: Metadata = {
  title: `Contact – ${siteConfig.company.name} – Plombier ${siteConfig.mainCity}`,
  description: `Contactez ${siteConfig.company.name}, plombier à ${siteConfig.mainCity}. Appelez le ${siteConfig.contact.phone} ou remplissez le formulaire. Devis gratuit et réponse rapide.`,
  alternates: {
    canonical: '/contact',
  },
};

const reassurances = [
  'Réponse sous 2h en journée',
  'Devis gratuit et sans engagement',
  'Intervention possible le jour même',
  'Urgences disponibles 24h/24',
];

export default function ContactPage() {
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
              Contactez-nous
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed">
              Urgence ou demande de devis ? Nous sommes à votre disposition.
              Appelez-nous directement ou envoyez-nous un message via le formulaire ci-dessous.
            </p>
          </div>
        </div>
      </section>

      {/* Corps page contact */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Colonne gauche — infos contact */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-brand-900 mb-6">
                  Informations de contact
                </h2>

                {/* Téléphone */}
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-start gap-4 p-5 bg-brand-50 rounded-xl hover:bg-brand-100 transition-colors group mb-4"
                  aria-label={`Appeler le ${siteConfig.contact.phone}`}
                >
                  <div className="p-3 bg-accent-500 rounded-lg shrink-0 group-hover:bg-accent-600 transition-colors">
                    <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Téléphone</p>
                    <p className="text-xl font-bold text-brand-900">{siteConfig.contact.phone}</p>
                    <p className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                      {siteConfig.hours.emergency}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors mb-4"
                  aria-label={`Envoyer un email à ${siteConfig.contact.email}`}
                >
                  <div className="p-3 bg-brand-900 rounded-lg shrink-0">
                    <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">E-mail</p>
                    <p className="font-semibold text-gray-900">{siteConfig.contact.email}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                {siteConfig.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 bg-green-50 rounded-xl hover:bg-green-100 transition-colors mb-4"
                    aria-label="Contacter par WhatsApp"
                  >
                    <div className="p-3 bg-green-500 rounded-lg shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">WhatsApp</p>
                      <p className="font-semibold text-gray-900">Envoyer un message</p>
                    </div>
                  </a>
                )}

                {/* Adresse */}
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl mb-4">
                  <div className="p-3 bg-brand-900 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Adresse</p>
                    <address className="not-italic font-medium text-gray-900">
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                    </address>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="p-3 bg-brand-900 rounded-lg shrink-0">
                    <Clock className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">Horaires</p>
                    <p className="text-sm text-gray-700">{siteConfig.hours.weekdays}</p>
                    <p className="text-sm text-gray-700">{siteConfig.hours.saturday}</p>
                    <p className="text-sm font-semibold text-accent-600 mt-1">{siteConfig.hours.emergency}</p>
                    <p className="text-xs text-gray-500 mt-1 italic">{siteConfig.hours.emergencyNote}</p>
                  </div>
                </div>
              </div>

              {/* Réassurances */}
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-900 mb-3">Nos engagements</h3>
                <ul className="space-y-2">
                  {reassurances.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-brand-900 mb-2">
                  Envoyer une demande
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Remplissez ce formulaire et nous vous rappelons dans les plus brefs délais.
                  Pour une urgence, préférez l&apos;appel direct.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed placeholder */}
      <section className="pb-16" aria-label="Carte de localisation">
        <div className="container-site">
          <h2 className="text-xl font-bold text-brand-900 mb-4">Notre zone d&apos;intervention</h2>
          <div className="w-full h-72 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex items-center justify-center text-gray-400">
            {/*
              Remplacez ce bloc par un vrai embed Google Maps :
              <iframe
                src="https://www.google.com/maps/embed?pb=...YOUR_EMBED_URL..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention de Dupont Plomberie"
              />
            */}
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 mx-auto mb-3 text-gray-300" aria-hidden="true" />
              <p className="font-medium">Carte Google Maps</p>
              <p className="text-sm">Remplacer par l&apos;intégration Google Maps</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
