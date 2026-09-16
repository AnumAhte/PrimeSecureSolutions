import { hero } from "@/content/site";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { Media } from "../ui/media";
import { Container } from "../ui/primitives";

/** 160px preview of the hero photo, inlined so the slot is never empty. */
const HERO_BLUR =
  "data:image/jpeg;base64,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";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-[72px]">
      {/* Background scene: photograph, then a cool wash to pull it onto the
          brand palette, then the left-to-right scrim the headline sits on. */}
      <Media
        src="/images/hero-surveillance.jpg"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full"
        imageClassName="object-[20%_center] lg:object-center"
        sizes="100vw"
        priority
        blurDataURL={HERO_BLUR}
        previewClassName="bg-[20%_center] lg:bg-center"
      />
      <div className="absolute inset-0 -z-10">
        {/* light cool cast, so the photo sits on the brand palette */}
        <div className="absolute inset-0 bg-[#0e2a52] opacity-16 mix-blend-color" />
        {/* Scrim: solid behind the headline, then clear — the photograph is
            meant to read at close to full brightness past the copy. */}
        {/* Narrow screens crop deep into the photo, so it falls back to a dark
            textured ground; the horizontal scrim takes over from lg up. */}
        <div className="absolute inset-0 bg-navy-950/72 lg:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#050e1d_0%,#050e1d_20%,rgba(5,14,29,0.90)_32%,rgba(5,14,29,0.52)_43%,rgba(5,14,29,0.18)_54%,transparent_66%)] lg:block" />
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(5,14,29,0.85),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,#050e1d,transparent)]" />
      </div>

      {/* The hero is above the fold, so nothing here is gated on hydration:
          no Reveal, no opacity:0 initial state. The copy and the panel are in
          the server-rendered HTML and paint with the photograph, rather than
          appearing a beat after it. */}
      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_368px] lg:gap-12 lg:py-20 xl:py-24">
        <div className="max-w-[680px]">
          <p className="text-[11px] font-bold tracking-[0.24em] text-brand-300 uppercase">
            {hero.eyebrow}
          </p>

          <h1 className="font-display mt-5 text-[clamp(1.95rem,4.3vw,3.05rem)] leading-[1.1] font-extrabold tracking-[-0.025em] text-white">
            {hero.titleLead}
            <br />
            {hero.titleRestBefore}
            <span className="text-brand-400">{hero.titleAccent}</span>
            {hero.titleRestAfter}
          </h1>

          <p className="mt-6 max-w-[540px] text-[15.5px] leading-[1.75] text-white/70">
            {hero.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="outline"
              size="lg"
              withArrow={false}
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Panel listing the four service pillars.
            No backdrop-filter: it paints a frame late, which flashed the sharp
            photo through on load. The photo behind it is already soft, so a
            solid tint does the same job. */}
        <div>
          <ul className="flex flex-col gap-1.5 rounded-2xl border border-white/12 bg-navy-950/82 p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] sm:p-4">
            {hero.highlights.map((item) => (
              <li key={item.title}>
                <div className="group flex items-center gap-3.5 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-white/[0.06]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-400/35 bg-brand-500/15 text-brand-300 transition-colors duration-200 group-hover:border-brand-400/70 group-hover:text-brand-200">
                    <Icon name={item.icon} className="h-[21px] w-[21px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14px] leading-tight font-semibold text-white">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[12.5px] leading-tight text-white/55">
                      {item.body}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
