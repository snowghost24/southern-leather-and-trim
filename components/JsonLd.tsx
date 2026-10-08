import { detailPackages, site, siteUrl } from "@/lib/site";

/** Structured data so Google can show the shop's address, phone and services. */
export function JsonLd() {
  const sameAs = Object.values(site.social).filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${siteUrl}/#business`,
    name: site.name,
    description: site.description,
    url: siteUrl,
    telephone: site.phone.href.replace("tel:", ""),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: site.serviceArea.map((name) => ({ "@type": "City", name })),
    ...(sameAs.length ? { sameAs } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Katzkin leather interior installation",
          },
        },
        ...detailPackages.map((p) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: p.name },
        })),
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
