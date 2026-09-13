import { BusinessSupport } from "@/components/sections/business-support";
import { CtaBand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Industries } from "@/components/sections/industries";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUs } from "@/components/sections/why-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <BusinessSupport />
      <Industries />
      <Testimonials />
      <CtaBand />
    </>
  );
}
