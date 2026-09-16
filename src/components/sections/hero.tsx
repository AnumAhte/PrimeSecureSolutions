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
