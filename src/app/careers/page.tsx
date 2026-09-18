import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Reveal } from "@/components/ui/primitives";
import { careers } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.body,
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const hasOpenings = careers.openings.length > 0;

  return (
    <>
      <PageHeader
        eyebrow={careers.eyebrow}
        title={careers.title}
        body={careers.body}
      />

      <section className="bg-white py-16 lg:py-20">
        <Container>
          {hasOpenings ? (
            <ul className="mx-auto grid max-w-[820px] gap-4">
              {careers.openings.map((role, i) => (
                <Reveal key={role.slug} delay={i * 80}>
                  <li className="group flex flex-wrap items-center justify-between gap-5 rounded-xl border border-ice-200 bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_20px_44px_-26px_rgba(11,27,48,0.35)]">
                    <div className="min-w-0">
                      <h2 className="font-display text-[15.5px] font-bold text-ink-900">
                        {role.title}
                      </h2>
                      <p className="mt-1.5 flex flex-wrap items-center gap-2 text-[12.5px] text-ink-400">
                        <span>{role.location}</span>
                        <span className="text-ink-400/50">·</span>
                        <span>{role.type}</span>
                      </p>
                      <p className="mt-2.5 max-w-[520px] text-[13px] leading-[1.7] text-ink-500">
                        {role.body}
                      </p>
                    </div>
                    <Button href="/contact" variant="ghost">
                      Apply
                    </Button>
                  </li>
                </Reveal>
              ))}
            </ul>
          ) : (
            /* No openings supplied. Rather than a bare "nothing here", the
               speculative route keeps a candidate's interest from being lost. */
            <Reveal className="mx-auto max-w-[560px] text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-ice-200 bg-ice-50 text-brand-500">
                <Icon name="users" className="h-7 w-7" />
              </span>
              <p className="mt-6 text-[14.5px] leading-[1.75] text-ink-500">
                {careers.emptyState}
              </p>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-ink-500">
                {careers.speculative.body}
              </p>
              <div className="mt-7 flex justify-center">
                <Button href={careers.speculative.cta.href} size="lg">
                  {careers.speculative.cta.label}
                </Button>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
