import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { legal } from "@/content/site";

export const metadata: Metadata = {
  title: legal.terms.title,
  alternates: { canonical: "/terms" },
  /* Unpublished: keep it out of search results until the real text is in. */
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return <LegalPage doc={legal.terms} />;
}
