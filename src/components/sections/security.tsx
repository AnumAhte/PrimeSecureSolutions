import { security } from "@/content/site";
import { Icon } from "../ui/icon";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

/**
 * Describes the approach to confidentiality, not the mechanisms.
 *
 * `security.measures` is empty on purpose: the brief was that specific
 * technical measures go here only once the client confirms they are actually
 * in use. Claiming encryption standards or certifications a business does not
 * hold is the kind of statement a customer may rely on. Fill the array and the
 * list appears.
 */
export function Security() {
  const hasMeasures = security.measures.length > 0;

  return (
    <section className="bg-ice-50 py-20 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-200 bg-brand-500/10 text-brand-500">
            <Icon name="lock" className="h-[22px] w-[22px]" />
          </span>
          <Eyebrow className="mt-5">{security.eyebrow}</Eyebrow>
          <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
            {security.title}
          </h2>
          <div className="mt-5 space-y-3.5">
            {security.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-[420px] text-[14.5px] leading-[1.75] text-ink-500"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          {hasMeasures ? (
            <ul className="grid gap-4 sm:grid-cols-2">
              {security.measures.map((measure) => (
                <li
                  key={measure.title}
                  className="rounded-xl border border-ice-200 bg-white p-5"
                >
                  <h3 className="font-display text-[14.5px] font-bold text-ink-900">
                    {measure.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-ink-500">
                    {measure.body}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2">
              {security.pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 70}>
                  <li className="group flex h-full items-center gap-4 rounded-xl border border-ice-200 bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ice-100 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                      <Icon name={pillar.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-[14px] leading-snug font-bold text-ink-900">
                      {pillar.title}
                    </h3>
                  </li>
                </Reveal>
              ))}
            </ul>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
