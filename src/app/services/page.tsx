import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/sections/cta-band";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TextLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Media } from "@/components/ui/media";
import { Container, Eyebrow, Reveal } from "@/components/ui/primitives";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: services.body,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 pt-[72px]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_72%_0%,#16345c_0%,#0a1c36_48%,#050e1d_100%)]" />
          <div className="tech-grid absolute inset-0 opacity-60" />
          <div className="absolute -top-1/3 left-[62%] h-[150%] w-[55%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(59,155,255,0.16),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,#050e1d,transparent)]" />
        </div>

        <Container className="py-16 lg:py-20">
          <div className="max-w-[680px]">
            <Eyebrow tone="dark">{services.eyebrow}</Eyebrow>
            <h1 className="font-display mt-4 text-[clamp(1.9rem,4vw,2.85rem)] leading-[1.12] font-extrabold tracking-[-0.025em] text-white text-balance">
              {services.title}
            </h1>
            <p className="mt-5 max-w-[580px] text-[15.5px] leading-[1.75] text-white/70">
              {services.body}
            </p>
          </div>
        </Container>
      </section>

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
                    Learn More
                  </TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <HowItWorks />
      <CtaBand />
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
