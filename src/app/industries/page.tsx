import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/sections/final-cta";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TextLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Media } from "@/components/ui/media";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Eyebrow, Reveal } from "@/components/ui/primitives";
import { industries, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries",
  description: industries.body,
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow={industries.eyebrow}
        title={industries.title}
        body={industries.body}
      />

      {/* The six sectors, with more room than the homepage grid allows. */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="group flex h-full flex-col rounded-xl border border-ice-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-26px_rgba(11,27,48,0.35)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ice-100 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon name={item.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <h2 className="font-display mt-5 text-[16px] leading-snug font-bold text-ink-900">
                    {item.title}
                  </h2>
                  <p className="mt-2.5 text-[13.5px] leading-[1.7] text-ink-500">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The same four services back every sector above, so this section is the
          services copy verbatim rather than anything written per industry. */}
      <section className="bg-ice-50 py-16 lg:py-20">
        <Container>
          <Reveal className="mx-auto max-w-[680px] text-center">
            <Eyebrow>{services.eyebrow}</Eyebrow>
            <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
              {services.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[14.5px] leading-[1.7] text-ink-500">
              {services.body}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.items.map((service, i) => (
              <Reveal key={service.slug} delay={i * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ice-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-24px_rgba(11,27,48,0.35)]">
                  <Link
                    href={`/services/${service.slug}`}
                    /* Decorative image only — needs its own accessible name. */
                    aria-label={service.title}
                    className="relative block"
                  >
                    <Media
                      src={`/images/service-${service.slug}.jpg`}
                      alt=""
                      className="relative h-[132px] w-full"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      overlay="soft"
                    />
                    <span className="absolute -bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-brand-500 text-white shadow-[0_6px_16px_-6px_rgba(28,116,224,0.9)]">
                      <Icon name={service.icon} className="h-[18px] w-[18px]" />
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col px-5 pt-8 pb-5">
                    <h3 className="font-display text-[15px] leading-snug font-bold text-ink-900">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[13px] leading-[1.7] text-ink-500">
                      {service.card}
                    </p>
                    <TextLink href={`/services/${service.slug}`} className="mt-4">
                      {service.cta.label}
                    </TextLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <HowItWorks />
      <FinalCta />
    </>
  );
}
