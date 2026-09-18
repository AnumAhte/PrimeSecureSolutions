import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Security } from "@/components/sections/security";
import { Icon } from "@/components/ui/icon";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Eyebrow, Reveal } from "@/components/ui/primitives";
import { about, services, whyUs } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: about.body[0],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={about.eyebrow}
        title={about.titleLead}
        titleAccent={about.titleAccent}
        body={about.body}
      />

      {/* Who We Are / What We Do / How We Work / Our Approach. */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {about.sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 80}>
                <article className="group flex h-full flex-col rounded-xl border border-ice-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-26px_rgba(11,27,48,0.35)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ice-100 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon name={section.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <h2 className="font-display mt-5 text-[16px] leading-snug font-bold text-ink-900">
                    {section.title}
                  </h2>
                  <p className="mt-2.5 text-[13.5px] leading-[1.75] text-ink-500">
                    {section.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team and operations detail, once the client supplies it. */}
      {about.team.paragraphs.length > 0 && (
        <section className="bg-ice-50 py-16 lg:py-20">
          <Container>
            <Reveal className="max-w-[720px]">
              <Eyebrow>{about.team.title}</Eyebrow>
              <div className="mt-5 space-y-4">
                {about.team.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-[15px] leading-[1.8] text-ink-500"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* What the business offers — approved "Why Choose Us" copy. */}
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <Eyebrow>{whyUs.eyebrow}</Eyebrow>
            <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
              {whyUs.titleLead}{" "}
              <span className="text-brand-500">{whyUs.titleAccent}</span>
            </h2>
            <p className="mt-5 max-w-[400px] text-[14.5px] leading-[1.75] text-ink-500">
              {whyUs.body}
            </p>
          </Reveal>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {whyUs.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-500/10 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon name={item.icon} className="h-[21px] w-[21px]" />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-display text-[14.5px] font-bold text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.7] text-ink-500">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The four services, as a summary rather than the full cards. */}
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
                  <p className="mt-2 text-[12.5px] leading-[1.7] text-ink-500">
                    {service.kicker}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <HowItWorks />
      <Security />
      <FinalCta />
    </>
  );
}
