import type { Metadata } from "next";
import { Faq, FaqJsonLd } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Common questions about PrimeSecure Solutions' surveillance, virtual assistant, bookkeeping and back-office support.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <PageHeader eyebrow={faqs.eyebrow} title={faqs.title} />
      <Faq />
      <FaqJsonLd />
      <FinalCta />
    </>
  );
}
