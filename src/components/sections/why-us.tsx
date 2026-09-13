import { whyUs } from "@/content/site";
import { Icon } from "../ui/icon";
import { Media } from "../ui/media";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

export function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 lg:py-24">
      <Media
        // src="/images/why-us-facility.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,#050e1d_0%,rgba(5,14,29,0.95)_45%,rgba(10,28,54,0.82)_100%)]" />

      <Container className="grid gap-12 lg:grid-cols-[minmax(0,455px)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <Eyebrow tone="dark">{whyUs.eyebrow}</Eyebrow>
          <h2 className="font-display mt-3.5 text-[clamp(1.6rem,2.9vw,2.05rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-white">
            {whyUs.titleLead}
            <br />
            {whyUs.titleAccentLead}
            <span className="text-brand-400">{whyUs.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-[430px] text-[14.5px] leading-[1.75] text-white/65">
            {whyUs.body}
          </p>
        </Reveal>

        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {whyUs.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-400/30 bg-brand-500/12 text-brand-300 transition-all duration-300 group-hover:border-brand-400/70 group-hover:bg-brand-500/20 group-hover:text-brand-200">
                  <Icon name={item.icon} className="h-[21px] w-[21px]" />
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-display text-[14.5px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-white/60">
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
