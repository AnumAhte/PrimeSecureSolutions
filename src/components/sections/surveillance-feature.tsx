import { services, surveillanceFeature } from "@/content/site";
import { Button } from "../ui/button";
import { ArrowRight, Icon } from "../ui/icon";
import { Media } from "../ui/media";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

const surveillance = services.items[0];

/**
 * Surveillance gets a full dark band of its own, unlike the other three
 * services, which stay as cards. That asymmetry is the point — it is the
 * established core service and the homepage should read that way.
 */
export function SurveillanceFeature() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 lg:py-24">
      <Media
        src="/images/service-surveillance.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,#050e1d_0%,rgba(5,14,29,0.95)_46%,rgba(10,28,54,0.88)_100%)]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-16">
          <Reveal>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-400/35 bg-brand-500/15 text-brand-300">
              <Icon name="shield" className="h-[22px] w-[22px]" />
            </span>
            <Eyebrow tone="dark" className="mt-5">
              {surveillanceFeature.eyebrow}
            </Eyebrow>
            <h2 className="font-display mt-3.5 text-[clamp(1.7rem,3.4vw,2.35rem)] leading-[1.18] font-extrabold tracking-[-0.022em] text-white text-balance">
              {surveillanceFeature.title}
            </h2>
            <p className="mt-4 max-w-[520px] text-[15.5px] leading-[1.7] font-semibold text-brand-300">
              {surveillanceFeature.lead}
            </p>
            <p className="mt-4 max-w-[520px] text-[14.5px] leading-[1.75] text-white/65">
              {surveillanceFeature.body}
            </p>

            <div className="mt-8">
              <Button href={surveillanceFeature.cta.href} size="lg">
                {surveillanceFeature.cta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
              {surveillanceFeature.capabilitiesTitle}
            </h3>
            <ul className="mt-5 grid gap-2.5">
              {surveillance.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="m5 12.5 4.5 4.5L19 7" />
                    </svg>
                  </span>
                  <span className="text-[13.5px] leading-snug font-medium text-white/85">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Monitor → Identify → Verify → Escalate → Document */}
        {surveillance.process && (
          <Reveal delay={180}>
            <div className="mt-14 border-t border-white/10 pt-12">
              <h3 className="font-display text-[11px] font-bold tracking-[0.18em] text-brand-300 uppercase">
                {surveillance.process.title}
              </h3>

              <ol className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                {surveillance.process.steps.map((step, i) => (
                  <li key={step.number} className="relative">
                    {/* Flow arrow between steps, as on the pillars band. */}
                    {i < surveillance.process.steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute top-2 -right-3 hidden text-brand-400/40 lg:block"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    )}
                    <span className="font-display text-[20px] leading-none font-extrabold text-brand-400/45">
                      {step.number}
                    </span>
                    <h4 className="font-display mt-2.5 text-[14px] font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-[12.5px] leading-[1.7] text-white/55">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
