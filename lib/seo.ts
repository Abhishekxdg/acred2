import type { Metadata } from "next";

export const siteUrl = "https://acred.in";

export const defaultOgImage = {
  url: `${siteUrl}/A_real_photograph_202604261852.webp`,
  width: 1200,
  height: 630,
  alt: "ACRED — Imagined with art. Engineered with truth.",
};

export const sharedKeywords = [
  "ACRED",
  "interior design",
  "architecture",
  "construction",
  "real estate",
  "engineering",
  "Bengaluru",
  "Bangalore",
  "home interiors",
  "modular kitchen",
  "living room design",
  "bedroom design",
  "bathroom interiors",
  "wardrobe design",
  "pooja room",
  "foyer design",
  "turnkey construction",
  "residential construction",
  "interior designer Bangalore",
  "architecture firm Bangalore",
  "construction company Bangalore",
];

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const image = ogImage ? { url: ogImage, width: 1200, height: 630, alt: title } : defaultOgImage;

  return {
    title,
    description,
    keywords: [...sharedKeywords, ...keywords],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title,
      description,
      url,
      siteName: "ACRED",
      locale: "en_IN",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ACRED",
    alternateName: "ACRED Interiors",
    url: siteUrl,
    logo: `${siteUrl}/black_text_logo.webp`,
    description:
      "ACRED is an integrated studio spanning architecture, construction, real estate, engineering, and development.",
    sameAs: [
      "https://instagram.com/acred.studio",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-63618-89281",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ACRED",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/projects?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ACRED",
    image: `${siteUrl}/A_real_photograph_202604261852.webp`,
    url: siteUrl,
    telephone: "+91-63618-89281",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    sameAs: ["https://instagram.com/acred.studio"],
  };
}
