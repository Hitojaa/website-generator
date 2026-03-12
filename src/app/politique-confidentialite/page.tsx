import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Politique de confidentialité – ${siteConfig.company.name}`,
  description: `Politique de confidentialité et gestion des données personnelles de ${siteConfig.company.name}.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolitiqueConfidentialitePage() {
  const lastUpdated = '15 janvier 2025';

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

          <h1 className="text-3xl font-bold text-brand-900 mb-2">
            Politique de confidentialité
          </h1>
          <p className="text-sm text-gray-400 mb-8">Dernière mise à jour : {lastUpdated}</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">1. Responsable du traitement</h2>
              <p>
                {siteConfig.company.name} – {siteConfig.contact.address.street},{' '}
                {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}<br />
                E-mail :{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-600 hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">
                2. Données collectées et finalités
              </h2>
              <p className="mb-3">
                Nous collectons des données personnelles uniquement via notre formulaire de contact.
                Les données recueillies sont :
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Nom et prénom</li>
                <li>Numéro de téléphone</li>
                <li>Adresse e-mail</li>
                <li>Ville</li>
                <li>Contenu du message</li>
              </ul>
              <p>
                Ces données sont collectées dans le seul but de répondre à votre demande de
                contact ou de devis. Elles ne sont pas utilisées à des fins commerciales tierces.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">
                3. Base légale du traitement
              </h2>
              <p>
                Le traitement est fondé sur votre consentement (article 6.1.a du RGPD) lorsque
                vous soumettez volontairement le formulaire de contact, ainsi que sur l&apos;intérêt
                légitime de {siteConfig.company.name} à répondre aux demandes entrantes (article 6.1.f).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">4. Destinataires des données</h2>
              <p>
                Vos données sont destinées exclusivement à {siteConfig.company.name} et ne sont
                jamais transmises, vendues ni louées à des tiers. Elles peuvent être accessibles
                à notre prestataire d&apos;hébergement (Vercel) dans le cadre des services techniques
                nécessaires au fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">
                5. Durée de conservation
              </h2>
              <p>
                Vos données de contact sont conservées le temps nécessaire au traitement de votre
                demande, et au maximum 3 ans à compter du dernier contact, conformément aux
                recommandations de la CNIL.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">6. Vos droits</h2>
              <p className="mb-3">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (&ldquo;droit à l&apos;oubli&rdquo;)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d&apos;opposition</li>
                <li>Droit à la portabilité</li>
                <li>Droit de retirer votre consentement</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous par e-mail à{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-600 hover:underline">
                  {siteConfig.contact.email}
                </a>{' '}
                ou par courrier postal. Vous pouvez également introduire une réclamation auprès de
                la CNIL (www.cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">7. Cookies</h2>
              <p>
                Ce site utilise des cookies strictement nécessaires au fonctionnement technique
                (mémorisation des préférences de session). Aucun cookie de traçage publicitaire
                ou analytique tiers n&apos;est utilisé sans votre consentement explicite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">8. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour
                protéger vos données contre tout accès non autorisé, divulgation ou destruction.
                Le site utilise le protocole HTTPS pour le chiffrement des données en transit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-900 mb-3">9. Modifications</h2>
              <p>
                Cette politique de confidentialité peut être mise à jour à tout moment. La date
                de la dernière modification est indiquée en haut de cette page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
