import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AmbientCanvas } from "@/components/ambient-canvas";
import { GsapProvider } from "@/components/gsap-provider";
import { LayoutShell } from "@/components/layout-shell";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";
import {
  siteUrl,
  defaultOgImage,
  sharedKeywords,
  organizationJsonLd,
  websiteJsonLd,
  localBusinessJsonLd,
} from "@/lib/seo";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: sharedKeywords,
  icons: {
    icon: "/Favicon.webp",
    apple: "/Favicon.webp",
    shortcut: "/Favicon.webp",
  },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "en_IN",
    siteName: "ACRED",
    url: siteUrl,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: "ACRED" }],
  creator: "ACRED",
  publisher: "ACRED",
  category: "Architecture & Interior Design",
};

export const viewport: Viewport = {
  themeColor: "#F8F5EF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = [
    organizationJsonLd(),
    websiteJsonLd(),
    localBusinessJsonLd(),
  ];

  return (
    <html
      lang="en"
      className={cn(serif.variable, mono.variable, "font-sans", sans.variable)}
    >
      <head>
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="grain min-h-screen flex flex-col">
        <GsapProvider>
          <AmbientCanvas />
          <LayoutShell>{children}</LayoutShell>
        </GsapProvider>
      </body>
    </html>
  );
}
