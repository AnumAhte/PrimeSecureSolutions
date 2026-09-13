import { industries } from "@/content/site";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

export function Industries() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[560px]">
              <Eyebrow>{industries.eyebrow}</Eyebrow>
              <h2 className="font-display mt-3.5 text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
                {industries.title}
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-ink-500">
                {industries.body}
              </p>
            </div>
            <Button href={industries.cta.href} variant="ghost">
              {industries.cta.label}
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="group flex h-full items-start gap-4 rounded-xl border border-ice-200 bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_44px_-24px_rgba(11,27,48,0.35)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ice-100 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[14px] font-bold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.7] text-ink-500">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
