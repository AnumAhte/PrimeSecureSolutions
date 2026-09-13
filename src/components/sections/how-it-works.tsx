import { howItWorks } from "@/content/site";
import { ArrowRight } from "../ui/icon";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

export function HowItWorks() {
  return (
    <section className="bg-ice-50 py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-14">
          <Reveal>
            <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
            <h2 className="font-display mt-3.5 text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
              {howItWorks.title}
            </h2>
          </Reveal>

          <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
            {howItWorks.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <li className="group relative list-none">
                  {/* Connector arrow between steps on wide screens */}
                  {i < howItWorks.steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-2.5 -right-6 hidden text-ice-200 xl:block"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}

                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-[26px] leading-none font-extrabold text-brand-200 transition-colors duration-300 group-hover:text-brand-400">
                      {step.number}
                    </span>
                    <h3 className="font-display text-[14px] leading-snug font-bold text-ink-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.7] text-ink-500">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
