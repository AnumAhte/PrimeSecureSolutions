import { capabilities, trust } from "@/content/site";
import { Icon } from "../ui/icon";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

/**
 * Sits directly under the hero. Kept to a single divided strip plus one
 * paragraph — it is a summary band, not a section that should compete with
 * Services below it.
 */
export function Capabilities() {
  return (
    <section className="border-b border-ice-200 bg-white py-14 lg:py-16">
      <Container>
        <Reveal className="mx-auto max-w-[680px] text-center">
          <Eyebrow>{capabilities.eyebrow}</Eyebrow>
          <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
            {capabilities.title}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ice-200 bg-ice-200 lg:grid-cols-4">
            {capabilities.pillars.map((pillar) => (
              <li
                key={pillar.label}
                className="group flex items-center justify-center gap-3 bg-white px-4 py-6 transition-colors duration-300 hover:bg-ice-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={pillar.icon} className="h-[19px] w-[19px]" />
                </span>
                <span className="font-display text-[13.5px] leading-tight font-bold text-ink-900">
                  {pillar.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-[720px] text-center text-[14.5px] leading-[1.75] text-ink-500">
            {capabilities.body}
          </p>
        </Reveal>

        {/* Trust line. Deliberately understated — a quiet figure reads as more
            credible than a large badge, and it sits inside this section rather
            than as a new band so the approved homepage order is unchanged. */}
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center">
            <p className="flex items-baseline gap-2">
              <span className="font-display text-[22px] leading-none font-extrabold text-brand-500">
                {trust.customers.value}
              </span>
              <span className="text-[13px] font-semibold text-ink-700">
                {trust.customers.label}
              </span>
            </p>
            <span aria-hidden="true" className="hidden h-4 w-px bg-ice-200 sm:block" />
            <p className="text-[13px] text-ink-500">{trust.references}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
