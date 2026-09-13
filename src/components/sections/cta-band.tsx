import { ctaBand } from "@/content/site";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { Container, Reveal } from "../ui/primitives";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(100deg,#1450a8_0%,#1c74e0_55%,#2b86f0_100%)]">
      {/* soft highlight sweep */}
      <div className="pointer-events-none absolute -top-1/2 right-0 h-[200%] w-[45%] bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent)]" />

      <Container className="relative grid items-center gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)_auto] lg:gap-10">
        <Reveal className="flex items-center gap-5">
          <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white sm:flex">
            <Icon name="shield" className="h-7 w-7" />
          </span>
          <div className="min-w-0">
            <p className="text-[10.5px] font-bold tracking-[0.18em] text-white/75 uppercase">
              {ctaBand.eyebrow}
            </p>
            <h2 className="font-display mt-2 text-[clamp(1.2rem,2.2vw,1.55rem)] leading-tight font-extrabold tracking-[-0.02em] text-white text-balance">
              {ctaBand.title}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-[13px] leading-[1.7] text-white/80">
            {ctaBand.body}
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex flex-col items-start gap-2.5">
            <Button href={ctaBand.cta.href} variant="white" size="lg">
              {ctaBand.cta.label}
            </Button>
            <p className="max-w-[270px] text-[11px] leading-relaxed text-white/65">
              {ctaBand.note}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
