import { hero } from "@/content/site";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { Media } from "../ui/media";
import { Container } from "../ui/primitives";

/** 24px preview of the hero photo, inlined so the slot is never empty. */
const HERO_BLUR =
  "data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAKABgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIGAwT/xAAlEAABAwMDAwUAAAAAAAAAAAABAgMEAAURITFREmFxBhMUFTL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/AMbkn75DES2PMFtrVDeSk4570zdtmwpdvMlbRZaUG2wn9a86dqnbCopvUMpJB95AyPIq19QkpixykkH5A28GpgMuW73xEO4x20u9aDo6hIBxnbXntRT2JpuTEdMhCXSJCgC4OrGNt6KC03//2Q==";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-[72px]">
      {/* Background scene: photograph, then a cool wash to pull it onto the
          brand palette, then the left-to-right scrim the headline sits on. */}
      <Media
        src="/images/hero-surveillance.jpg"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full"
        imageClassName="object-[36%_center] lg:object-center"
        sizes="100vw"
        priority
        blurDataURL={HERO_BLUR}
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
