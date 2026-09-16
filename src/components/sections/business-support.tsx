import { businessSupport } from "@/content/site";
import { Button } from "../ui/button";
import { ArrowRight, Icon } from "../ui/icon";
import { Media } from "../ui/media";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

export function BusinessSupport() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 lg:py-24">
      <Media
        src="/images/office-operations.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050e1d_0%,rgba(5,14,29,0.93)_50%,rgba(10,28,54,0.86)_100%)]" />

      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <Eyebrow tone="dark">{businessSupport.eyebrow}</Eyebrow>
          <h2 className="font-display mt-3.5 text-[clamp(1.7rem,3.4vw,2.35rem)] leading-[1.18] font-extrabold tracking-[-0.022em] text-white text-balance">
            {businessSupport.titleLead}
            <br />
            <span className="text-brand-400">{businessSupport.titleAccent}</span>
          </h2>
          <div className="mt-5 space-y-3.5">
            {businessSupport.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-[500px] text-[14.5px] leading-[1.75] text-white/65"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col gap-8">
            {/* Four pillars as a connected flow */}
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {businessSupport.chips.map((chip, i) => (
                <li
                  key={chip.label}
                  className="group relative flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07]"
                >
                  {/* flow arrow linking the four pillars, as in the design */}
                  {i < businessSupport.chips.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 -right-[15px] z-10 hidden -translate-y-1/2 text-brand-400/50 sm:block"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/35 bg-brand-500/15 text-brand-300 transition-colors duration-300 group-hover:text-brand-200">
                    <Icon name={chip.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-[10.5px] font-bold tracking-[0.1em] text-white/80 uppercase">
                    {chip.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex lg:justify-end">
              <Button href={businessSupport.cta.href} size="lg">
                {businessSupport.cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
