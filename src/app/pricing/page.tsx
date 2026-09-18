import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { Faq } from "@/components/sections/faq";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Button, TextLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Eyebrow, Reveal } from "@/components/ui/primitives";
import { pricing, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: pricing.body,
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const hasPlans = pricing.plans.length > 0;

  return (
    <>
      <PageHeader
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        body={pricing.body}
      >
        <Button href={pricing.cta.href} size="lg">
          {pricing.cta.label}
        </Button>
      </PageHeader>

      {/* Published plans, if any exist. Until then the quote panel below is
          shown instead — no invented rates. */}
      {hasPlans && (
        <section className="bg-white py-16 lg:py-20">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pricing.plans.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 90}>
                  <article
                    className={`flex h-full flex-col rounded-2xl border p-6 ${
                      plan.featured
                        ? "border-brand-300 bg-white shadow-[0_28px_60px_-34px_rgba(28,116,224,0.55)]"
                        : "border-ice-200 bg-white"
                    }`}
                  >
                    <h2 className="font-display text-[16px] font-bold text-ink-900">
                      {plan.name}
                    </h2>
                    <p className="mt-4 flex items-baseline gap-1.5">
                      <span className="font-display text-[30px] leading-none font-extrabold text-ink-900">
                        {plan.price}
                      </span>
                      <span className="text-[12.5px] text-ink-400">
                        {plan.period}
                      </span>
                    </p>
                    <p className="mt-4 text-[13px] leading-[1.7] text-ink-500">
                      {plan.body}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-700"
                        >
                          <Tick />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href={pricing.cta.href}
                      variant={plan.featured ? "primary" : "ghost"}
                      className="mt-6 w-full"
                    >
                      {pricing.cta.label}
                    </Button>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* What a quote depends on. */}
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-14">
          <Reveal>
            <Eyebrow>What shapes a quote</Eyebrow>
            <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
              Three things decide the number.
            </h2>

            <ul className="mt-8 grid gap-6">
              {pricing.factors.map((factor, i) => (
                <Reveal key={factor.title} delay={i * 80}>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-500/10 text-brand-500">
                      <Icon name={factor.icon} className="h-[21px] w-[21px]" />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="font-display text-[14.5px] font-bold text-ink-900">
                        {factor.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-[1.7] text-ink-500">
                        {factor.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          {!hasPlans && (
            <Reveal delay={120}>
              <div className="rounded-2xl border border-ice-200 bg-ice-50 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
                  <Icon name="dollar" className="h-[22px] w-[22px]" />
                </span>
                <h2 className="font-display mt-5 text-[18px] leading-snug font-extrabold text-ink-900">
                  Tell us what you need and we&apos;ll price it.
                </h2>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-ink-500">
                  Support is scoped to your requirements rather than sold as a
                  fixed package, so the quickest route to a number is a short
                  conversation about your operation.
                </p>
                <Button href={pricing.cta.href} size="lg" className="mt-6 w-full">
                  {pricing.cta.label}
                </Button>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {/* The services being priced. */}
      <section className="bg-ice-50 py-16 lg:py-20">
        <Container>
          <Reveal className="mx-auto max-w-[640px] text-center">
            <Eyebrow>{services.eyebrow}</Eyebrow>
            <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
              {services.title}
            </h2>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.items.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <li className="flex h-full flex-col rounded-xl border border-ice-200 bg-white p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-brand-500/10 text-brand-500">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-4 text-[14.5px] leading-snug font-bold text-ink-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[12.5px] leading-[1.7] text-ink-500">
                    {service.card}
                  </p>
                  <TextLink href={`/services/${service.slug}`} className="mt-4">
                    {service.cta.label}
                  </TextLink>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <HowItWorks />
      <Faq limit={4} showAllLink background="white" />
      <FinalCta />
    </>
  );
}

function Tick() {
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
