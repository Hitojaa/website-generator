import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Phone, ArrowRight, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Merci pour votre demande – ${siteConfig.company.name}`,
  description: 'Votre message a bien été envoyé. Nous vous recontactons rapidement.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-50 to-white min-h-[60vh] flex items-center">
      <div className="container-site">
        <div className="max-w-lg mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-100 rounded-full">
              <CheckCircle className="w-16 h-16 text-green-500" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-brand-900 mb-4">
            Merci pour votre demande !
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Votre message a bien été reçu. Nous allons l&apos;étudier et vous recontacter
            dans les meilleurs délais, généralement sous 2 heures en journée.
          </p>

          <div className="bg-white rounded-xl p-5 shadow-card border border-gray-100 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Clock className="w-5 h-5 text-brand-600 shrink-0" aria-hidden="true" />
              <p>
                <strong>Délai de réponse :</strong> En général 2h en journée (8h–19h).
                Pour une urgence, appelez directement.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-cta hover:shadow-none hover:-translate-y-0.5"
              aria-label={`Appeler le ${siteConfig.contact.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Urgence ? Appelez-nous
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-900 border border-gray-200 font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Retour à l&apos;accueil
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
