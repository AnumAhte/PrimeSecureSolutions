import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { Icon } from "@/components/ui/icon";
import { Container, Eyebrow, Reveal } from "@/components/ui/primitives";
import { contact, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to PrimeSecure Solutions about surveillance, virtual assistants, bookkeeping and back-office support. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Header band. pt accounts for the fixed 72px header, as on the home hero. */}
      <section className="relative isolate overflow-hidden bg-navy-950 pt-[72px]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_72%_0%,#16345c_0%,#0a1c36_48%,#050e1d_100%)]" />
          <div className="tech-grid absolute inset-0 opacity-60" />
          <div className="absolute -top-1/3 left-[62%] h-[150%] w-[55%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(59,155,255,0.16),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,#050e1d,transparent)]" />
        </div>

        <Container className="py-16 lg:py-20">
          <div className="max-w-[680px]">
            <Eyebrow tone="dark">{contact.eyebrow}</Eyebrow>
            <h1 className="font-display mt-4 text-[clamp(1.9rem,4vw,2.85rem)] leading-[1.12] font-extrabold tracking-[-0.025em] text-white text-balance">
              {contact.title}
            </h1>
            <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.75] text-white/70">
              {contact.body}
            </p>
          </div>
        </Container>
      </section>

      {/* Form + the ways to reach a person directly. */}
      <section className="bg-ice-50 py-16 lg:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-12">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="lg:sticky lg:top-24">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contact.methods.map((method) => {
                const body = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-500/10 text-brand-500 transition-colors duration-200 group-hover:border-brand-400 group-hover:bg-brand-500/15">
                      <Icon name={method.icon} className="h-[21px] w-[21px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-bold tracking-[0.14em] text-ink-400 uppercase">
                        {method.label}
                      </span>
                      <span className="mt-1 block text-[14.5px] leading-snug font-semibold break-words text-ink-900">
                        {method.value}
                      </span>
                      <span className="mt-1 block text-[12.5px] leading-snug text-ink-500">
                        {method.note}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={method.label}>
                    {"href" in method && method.href ? (
                      <a
                        href={method.href}
                        className="group flex h-full items-start gap-4 rounded-xl border border-ice-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_18px_40px_-28px_rgba(11,27,48,0.5)]"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="group flex h-full items-start gap-4 rounded-xl border border-ice-200 bg-white p-5">
                        {body}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 flex items-start gap-4 rounded-xl border border-ice-200 bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-500/10 text-brand-500">
                <Icon name="clock" className="h-[21px] w-[21px]" />
              </span>
              <span>
                <span className="block text-[11px] font-bold tracking-[0.14em] text-ink-400 uppercase">
                  Monitoring
                </span>
                <span className="mt-1 block text-[14.5px] leading-snug font-semibold text-ink-900">
                  Running 24/7
                </span>
                <span className="mt-1 block text-[12.5px] leading-snug text-ink-500">
                  Our office hours are for new enquiries. Live monitoring for
                  existing clients does not stop.
                </span>
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* What happens after they hit send. */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-[560px]">
            <Eyebrow>{contact.next.eyebrow}</Eyebrow>
            <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
              No complicated process.
            </h2>
          </Reveal>

          <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {contact.next.items.map((item, i) => (
              <Reveal key={item.step} delay={i * 90}>
                <li className="relative">
                  <span
                    aria-hidden="true"
                    className="font-display text-[26px] leading-none font-extrabold text-brand-500/25"
                  >
                    {item.step}
                  </span>
                  <h3 className="font-display mt-3 text-[15px] font-bold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[320px] text-[13px] leading-[1.7] text-ink-500">
                    {item.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Machine-readable business details, so search engines can surface the
          phone number and address directly. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: site.name,
            telephone: site.phone,
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.line1,
              addressLocality: site.address.line2,
            },
          }),
        }}
      />
    </>
  );
}
