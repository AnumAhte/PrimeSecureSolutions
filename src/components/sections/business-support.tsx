import Link from "next/link";
import { businessSupport } from "@/content/site";
import { Button } from "../ui/button";
import { ArrowRight, Icon } from "../ui/icon";
import { Media } from "../ui/media";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

/**
 * The three non-surveillance services. Surveillance has its own band above, so
 * this section deliberately covers only what comes after it.
 */
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

      <Container>
        <Reveal className="mx-auto max-w-[680px] text-center">
          <Eyebrow tone="dark">{businessSupport.eyebrow}</Eyebrow>
          <h2 className="font-display mt-3.5 text-[clamp(1.7rem,3.4vw,2.35rem)] leading-[1.18] font-extrabold tracking-[-0.022em] text-white text-balance">
            {businessSupport.titleLead}
            <br />
            <span className="text-brand-400">{businessSupport.titleAccent}</span>
          </h2>
          {businessSupport.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mx-auto mt-5 max-w-[620px] text-[14.5px] leading-[1.75] text-white/65"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {businessSupport.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/35 bg-brand-500/15 text-brand-300 transition-colors duration-300 group-hover:text-brand-200">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-[15px] leading-snug font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[13px] leading-[1.7] text-white/60">
                  {item.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-300 transition-colors group-hover:text-brand-200">
                  {item.title}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center">
          <Button href={businessSupport.cta.href} size="lg">
            {businessSupport.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
