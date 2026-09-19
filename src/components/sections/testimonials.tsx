import { testimonials } from "@/content/site";
import { Media } from "../ui/media";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

/**
 * Anonymised client testimonials.
 *
 * Renders nothing while `testimonials.items` is empty, so the homepage is
 * unaffected until real quotes are supplied. Attribution is role + sector
 * rather than a company name, which is the format the client's agency permits.
 *
 * Do not populate this with example copy to "preview the design" — an invented
 * quote attributed to a customer is a false statement, and placeholder
 * testimonials have already had to be removed from this site once.
 */
export function Testimonials() {
  if (testimonials.items.length === 0) return null;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-18 lg:py-20">
      <Media
        src="/images/testimonial-office.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050e1d_0%,rgba(5,14,29,0.92)_55%,rgba(10,28,54,0.85)_100%)]" />

      <Container>
        <Reveal className="mx-auto max-w-[640px] text-center">
          <Eyebrow tone="dark">{testimonials.eyebrow}</Eyebrow>
          <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.02em] text-white text-balance">
            {testimonials.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <Reveal key={item.quote.slice(0, 32)} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <span
                  aria-hidden="true"
                  className="font-display text-[40px] leading-none text-brand-400/30"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-[14px] leading-[1.8] text-white/85 italic">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4 text-[12.5px] text-white/55">
                  <span className="font-semibold text-white/85">{item.role}</span>
                  <span className="mx-2 text-white/25">/</span>
                  {item.sector}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
