import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Mentions légales – ${siteConfig.company.name}`,
  description: `Mentions légales de ${siteConfig.company.name}, plombier à ${siteConfig.mainCity}.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-800 text-sm mb-8 transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>

          <h1 className="text-3xl font-bold text-brand-900 mb-8">Mentions légales</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">1. Éditeur du site</h2>
              <div className="text-gray-700 space-y-1">
                <p><strong>Raison sociale :</strong> {siteConfig.company.name}</p>
                <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                <p><strong>SIRET :</strong> {siteConfig.company.siret}</p>
                <p><strong>RCS :</strong> {siteConfig.company.rcs}</p>
                <p>
                  <strong>Adresse :</strong>{' '}
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode}{' '}
                  {siteConfig.contact.address.city}
                </p>
                <p><strong>Téléphone :</strong> {siteConfig.contact.phone}</p>
                <p>
                  <strong>E-mail :</strong>{' '}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-brand-600 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">2. Directeur de la publication</h2>
              <p className="text-gray-700">
                Le directeur de la publication est le représentant légal de {siteConfig.company.name}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">3. Hébergement</h2>
              <p className="text-gray-700">
                Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 900, San Francisco, CA 94104, États-Unis.
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">www.vercel.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">4. Propriété intellectuelle</h2>
              <p className="text-gray-700">
                L&apos;ensemble des contenus présents sur ce site (textes, images, logos, graphiques) est la propriété
                exclusive de {siteConfig.company.name}, sauf mention contraire. Toute reproduction, représentation,
                diffusion ou rediffusion de tout ou partie du contenu de ce site est interdite sans autorisation
                préalable et écrite de {siteConfig.company.name}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">5. Responsabilité</h2>
              <p className="text-gray-700">
                {siteConfig.company.name} s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
                diffusées sur ce site. Toutefois, {siteConfig.company.name} ne peut garantir l&apos;exactitude, la
                précision ou l&apos;exhaustivité des informations mises à disposition sur ce site. En conséquence,
                {siteConfig.company.name} décline toute responsabilité pour toute imprécision, inexactitude ou
                omission portant sur des informations disponibles sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">6. Liens hypertextes</h2>
              <p className="text-gray-700">
                Ce site peut contenir des liens vers d&apos;autres sites internet. {siteConfig.company.name} n&apos;est
                pas responsable du contenu des sites tiers vers lesquels ce site pointerait.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">7. Données personnelles</h2>
              <p className="text-gray-700">
                Pour en savoir plus sur la gestion de vos données personnelles, consultez notre{' '}
                <Link href="/politique-confidentialite" className="text-brand-600 hover:underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">8. Droit applicable</h2>
              <p className="text-gray-700">
                Le présent site est soumis au droit français. En cas de litige, les tribunaux français
                seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
