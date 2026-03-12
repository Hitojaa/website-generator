import { siteConfig } from '@/config/site';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': siteConfig.seo.siteUrl,
    name: siteConfig.company.name,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    description: siteConfig.seo.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.7101728',
      longitude: '7.261953200000001',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Espèces, Chèque, Virement bancaire, Carte bancaire',
    areaServed: siteConfig.zones.map((z) => ({
      '@type': 'City',
      name: z.name,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de plomberie',
      itemListElement: siteConfig.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.shortDesc,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(siteConfig.googleRating.score),
      reviewCount: siteConfig.googleRating.count,
      bestRating: '5',
      worstRating: '1',
    },
    review: siteConfig.testimonials.map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: '5',
      },
      reviewBody: t.text,
      datePublished: t.date,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
