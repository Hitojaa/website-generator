import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Page introuvable – ${siteConfig.company.name}`,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-50 to-white min-h-[60vh] flex items-center">
      <div className="container-site text-center">
        <p className="text-8xl font-bold text-brand-200 mb-4">404</p>
        <h1 className="text-3xl font-bold text-brand-900 mb-4">Page introuvable</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
          Revenez à l&apos;accueil ou contactez-nous directement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-cta hover:shadow-none hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
