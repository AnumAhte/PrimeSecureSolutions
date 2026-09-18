import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/final-cta";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Button, TextLink } from "@/components/ui/button";
import { ArrowRight, Icon } from "@/components/ui/icon";
import { Media } from "@/components/ui/media";
import { Container, Eyebrow, Reveal } from "@/components/ui/primitives";
import { cta, servicePage, services, site } from "@/content/site";

type Params = { slug: string };

/** All four pages are known at build time, so they prerender as static HTML. */
export function generateStaticParams(): Params[] {
  return services.items.map((service) => ({ slug: service.slug }));
}

function findService(slug: string) {
  return services.items.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.body,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — ${site.name}`,
      description: service.body,
      url: `/services/${service.slug}`,
      images: [{ url: `/images/service-${service.slug}.jpg` }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = findService(slug);

  // Any slug not in site.ts is a 404 rather than an empty page.
  if (!service) notFound();

  const others = services.items.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 pt-[72px]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_72%_0%,#16345c_0%,#0a1c36_48%,#050e1d_100%)]" />
          <div className="tech-grid absolute inset-0 opacity-60" />
          <div className="absolute -top-1/3 left-[62%] h-[150%] w-[55%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(59,155,255,0.16),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,#050e1d,transparent)]" />
        </div>

        <Container className="py-14 lg:py-18">
          <nav aria-label="Breadcrumb">
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-300 transition-colors hover:text-brand-200"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
              {servicePage.backLabel}
            </Link>
          </nav>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-14">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-400/35 bg-brand-500/15 text-brand-300">
                <Icon name={service.icon} className="h-[22px] w-[22px]" />
              </span>
              <Eyebrow tone="dark" className="mt-5">
                {servicePage.eyebrow}
              </Eyebrow>
              <h1 className="font-display mt-3.5 text-[clamp(1.85rem,3.8vw,2.7rem)] leading-[1.13] font-extrabold tracking-[-0.025em] text-white text-balance">
                {service.title}
              </h1>
              <p className="mt-3 text-[15px] font-semibold text-brand-400">
                {service.kicker}
              </p>
              <p className="mt-5 max-w-[540px] text-[15.5px] leading-[1.75] text-white/70">
                {service.body}
              </p>
              {"intro" in service &&
                service.intro?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="mt-4 max-w-[540px] text-[14.5px] leading-[1.75] text-white/60"
                  >
                    {paragraph}
                  </p>
                ))}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button href={service.cta.href} size="lg">
                  {service.cta.label}
                </Button>
                <Button
                  href={cta.secondary.href}
                  variant="outline"
                  size="lg"
                  withArrow={false}
                >
                  {cta.secondary.label}
                </Button>
              </div>
            </div>

            <Reveal delay={100}>
              <Media
                src={`/images/service-${service.slug}.jpg`}
                alt=""
                className="relative aspect-[16/10] w-full rounded-2xl border border-white/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)]"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The service's own feature list — the approved copy, in full. */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-[560px]">
            <Eyebrow>{servicePage.featuresTitle}</Eyebrow>
            <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
              {service.title}
            </h2>
          </Reveal>

          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, i) => (
              <Reveal key={feature} delay={Math.min(i, 8) * 55}>
                <li className="flex items-start gap-3 rounded-xl border border-ice-200 bg-ice-50 px-4 py-3.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="m5 12.5 4.5 4.5L19 7" />
                    </svg>
                  </span>
                  <span className="text-[13.5px] leading-snug font-medium text-ink-700">
                    {feature}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Scope limit, where the service has one. */}
      {"note" in service && service.note && (
        <section className="bg-white pb-16 lg:pb-20">
          <Container>
            <Reveal>
              <p className="mx-auto max-w-[820px] rounded-xl border border-ice-200 bg-ice-50 px-5 py-4 text-[13px] leading-[1.75] text-ink-500">
                <span className="font-semibold text-ink-700">Note: </span>
                {service.note}
              </p>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Monitor -> Identify -> Verify -> Escalate -> Document */}
      {"process" in service && service.process && (
        <section className="relative isolate overflow-hidden bg-navy-950 py-16 lg:py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(110%_130%_at_50%_0%,#143059_0%,#0a1c36_50%,#050e1d_100%)]" />
          <div className="tech-grid absolute inset-0 -z-10 opacity-50" />
          <Container>
            <Reveal className="mx-auto max-w-[640px] text-center">
              <Eyebrow tone="dark">{servicePage.processEyebrow}</Eyebrow>
              <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-white text-balance">
                {service.process.title}
              </h2>
            </Reveal>

            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {service.process.steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 80}>
                  <li className="relative h-full rounded-xl border border-white/10 bg-white/[0.04] p-5">
                    {i < service.process.steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute top-1/2 -right-[13px] z-10 hidden -translate-y-1/2 text-brand-400/45 lg:block"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    )}
                    <span className="font-display text-[20px] leading-none font-extrabold text-brand-400/45">
                      {step.number}
                    </span>
                    <h3 className="font-display mt-2.5 text-[14px] font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-[1.7] text-white/55">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* Support levels, where the service offers them. */}
      {"packages" in service && service.packages && (
        <section className="bg-ice-50 py-16 lg:py-20">
          <Container>
            <Reveal className="mx-auto max-w-[640px] text-center">
              <Eyebrow>{servicePage.packagesEyebrow}</Eyebrow>
              <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
                {service.packages.title}
              </h2>
              <p className="mx-auto mt-4 max-w-[520px] text-[14.5px] leading-[1.7] text-ink-500">
                {service.packages.body}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {service.packages.options.map((option, i) => (
                <Reveal key={option.title} delay={i * 90}>
                  <article className="flex h-full flex-col rounded-xl border border-ice-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-26px_rgba(11,27,48,0.35)]">
                    <h3 className="font-display text-[15.5px] leading-snug font-bold text-ink-900">
                      {option.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[13px] leading-[1.75] text-ink-500">
                      {option.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-10 flex justify-center">
              <Button href={service.cta.href} size="lg">
                {service.cta.label}
              </Button>
            </Reveal>
          </Container>
        </section>
      )}

      <HowItWorks />

      {/* Cross-links, so a page is never a dead end. */}
      <section className="bg-ice-50 py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-[560px]">
            <Eyebrow>{servicePage.otherTitle}</Eyebrow>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ice-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-24px_rgba(11,27,48,0.35)]">
                  <div className="relative">
                    <Media
                      src={`/images/service-${other.slug}.jpg`}
                      alt=""
                      className="relative h-[132px] w-full"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      overlay="soft"
                    />
                    <span className="absolute -bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-brand-500 text-white shadow-[0_6px_16px_-6px_rgba(28,116,224,0.9)]">
                      <Icon name={other.icon} className="h-[18px] w-[18px]" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pt-8 pb-5">
                    <h3 className="font-display text-[15px] leading-snug font-bold text-ink-900">
                      {other.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[13px] leading-[1.7] text-ink-500">
                      {other.card}
                    </p>
                    <TextLink href={`/services/${other.slug}`} className="mt-4">
                      {other.cta.label}
                    </TextLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
