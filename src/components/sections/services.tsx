import { services } from "@/content/site";
import { TextLink } from "../ui/button";
import { Icon } from "../ui/icon";
import { Media } from "../ui/media";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <Container>
        <Reveal className="mx-auto max-w-[720px] text-center">
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <h2 className="font-display mt-3.5 text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
            {services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[14.5px] leading-[1.7] text-ink-500">
            {services.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.items.map((service, i) => (
            <Reveal key={service.slug} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ice-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-24px_rgba(11,27,48,0.35)]">
                <div className="relative">
                  <Media
                    // src={`/images/service-${service.slug}.jpg`}
                    alt=""
                    icon={service.icon}
                    className="h-[148px] w-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    overlay="soft"
                  />
                  {/* Icon chip straddling the image edge, as in the design */}
                  <span className="absolute -bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-brand-500 text-white shadow-[0_6px_16px_-6px_rgba(28,116,224,0.9)]">
                    <Icon name={service.icon} className="h-[18px] w-[18px]" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 pt-8 pb-5">
                  <h3 className="font-display text-[15px] leading-snug font-bold text-ink-900">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[13px] leading-[1.7] text-ink-500">
                    {service.card}
                  </p>
                  <TextLink
                    href={`/services/${service.slug}`}
                    className="mt-4"
                  >
                    Learn More
                  </TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
