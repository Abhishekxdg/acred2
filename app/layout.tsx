import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AmbientCanvas } from "@/components/ambient-canvas";
import { GsapProvider } from "@/components/gsap-provider";
import { LayoutShell } from "@/components/layout-shell";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

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
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/Favicon.webp",
    apple: "/Favicon.webp",
  },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F5EF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(serif.variable, mono.variable, "font-sans", sans.variable)}
    >
      <body className="grain min-h-screen flex flex-col">
        <GsapProvider>
          <AmbientCanvas />
          <LayoutShell>{children}</LayoutShell>
        </GsapProvider>
      </body>
    </html>
  );
}
