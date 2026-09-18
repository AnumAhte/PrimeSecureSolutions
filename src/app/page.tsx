import { BusinessSupport } from "@/components/sections/business-support";
import { Capabilities } from "@/components/sections/capabilities";
import { Faq, FaqJsonLd } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Industries } from "@/components/sections/industries";
import { Security } from "@/components/sections/security";
import { Services } from "@/components/sections/services";
import { SurveillanceFeature } from "@/components/sections/surveillance-feature";
import { WhyUs } from "@/components/sections/why-us";
import type { Metadata } from "next";

/* Title and description are inherited from the root layout; this only supplies
   the canonical, which every other page already declares. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Section order is the client's specified flow:
 * Hero → Capabilities → Services → Why PrimeSecure → Surveillance →
 * Business Support → How It Works → Industries → Security → FAQ → CTA.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Services />
      <WhyUs />
      <SurveillanceFeature />
      <BusinessSupport />
      <HowItWorks />
      <Industries />
      <Security />
      <Faq limit={5} showAllLink background="white" />
      <FinalCta />
      <FaqJsonLd />
    </>
  );
}
