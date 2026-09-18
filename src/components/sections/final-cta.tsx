import { finalCta } from "@/content/site";
import { Button } from "../ui/button";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

/**
 * The approved copy's "FINAL CTA" block, which had no home on the site.
 * Distinct from `CtaBand`: that one is the narrow blue strip, this is the
 * full dark close used at the foot of the inner pages.
 */
export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-16 lg:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(110%_130%_at_50%_0%,#143059_0%,#0a1c36_50%,#050e1d_100%)]" />
        <div className="tech-grid absolute inset-0 opacity-50" />
      </div>

      <Container className="text-center">
        <Reveal className="mx-auto max-w-[640px]">
          <Eyebrow tone="dark">{finalCta.eyebrow}</Eyebrow>
          <h2 className="font-display mt-4 text-[clamp(1.8rem,3.6vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.025em] text-white text-balance">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[14.5px] leading-[1.75] text-white/70">
            {finalCta.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button href={finalCta.primaryCta.href} size="lg">
              {finalCta.primaryCta.label}
            </Button>
            <Button
              href={finalCta.secondaryCta.href}
              variant="outline"
              size="lg"
              withArrow={false}
            >
              {finalCta.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
