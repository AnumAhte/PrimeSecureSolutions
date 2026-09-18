import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/sections/final-cta";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TextLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Media } from "@/components/ui/media";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Reveal } from "@/components/ui/primitives";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: services.body,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow={services.eyebrow}
        title={services.title}
        body={services.body}
      />

      {/* One row per service, alternating sides — more room than the homepage
          cards, so each service's own copy and feature list can be shown. */}
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-14 lg:gap-20">
          {services.items.map((service, i) => (
            <Reveal key={service.slug}>
              <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative block overflow-hidden rounded-2xl border border-ice-200 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Media
                    src={`/images/service-${service.slug}.jpg`}
                    alt=""
                    className="relative aspect-[16/9] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    overlay="soft"
                  />
                </Link>

                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-200 bg-brand-500/10 text-brand-500">
                    <Icon name={service.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <h2 className="font-display mt-5 text-[clamp(1.35rem,2.4vw,1.75rem)] leading-[1.2] font-extrabold tracking-[-0.02em] text-ink-900">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-[13px] font-semibold text-brand-500">
                    {service.kicker}
                  </p>
                  <p className="mt-4 max-w-[520px] text-[14.5px] leading-[1.75] text-ink-500">
                    {service.body}
                  </p>

                  <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {service.features.slice(0, 6).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[13px] leading-snug text-ink-700"
                      >
                        <Check />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <TextLink href={`/services/${service.slug}`} className="mt-6">
                    {service.cta.label}
                  </TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <HowItWorks />
      <FinalCta />
    </>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[3px] h-3.5 w-3.5 shrink-0 text-brand-500"
      aria-hidden="true"
    >
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}
