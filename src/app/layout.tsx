import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site, siteUrl } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Surveillance, Virtual Assistants, Bookkeeping & Back Office`,
    template: `%s | ${site.name}`,
  },
  description:
    "From 24/7 surveillance and remote monitoring to virtual assistants, bookkeeping, and back-office support — we help businesses stay secure, organized, and focused on growth.",
  keywords: [
    "remote video monitoring",
    "CCTV monitoring services",
    "virtual assistants",
    "bookkeeping services",
    "back office support",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: `${site.name} — Your Business. Our All-In-One Support.`,
    description:
      "24/7 surveillance, virtual assistants, bookkeeping and back-office support from one trusted partner.",
    /* Derived from the approved hero artwork, padded to 1200x630 rather than
       centre-cropped so the camera and the operator both survive. Inherited by
       every page; service pages override it with their own card image. */
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Your Business. Our All-In-One Support.`,
    description:
      "24/7 surveillance, virtual assistants, bookkeeping and back-office support from one trusted partner.",
    images: ["/images/og-default.jpg"],
  },
  icons: {
    icon: "/brand/logo-badge-256.png",
    apple: "/brand/logo-badge-256.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050e1d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        {/* Scroll-reveal is a progressive enhancement — without JS the content
            must still be fully visible rather than stuck at opacity 0. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-900"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
