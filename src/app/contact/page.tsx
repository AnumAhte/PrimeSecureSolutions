import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Icon } from "@/components/ui/icon";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Reveal } from "@/components/ui/primitives";
import { contact, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to PrimeSecure Solutions about surveillance, virtual assistants, bookkeeping and back-office support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Header band. pt accounts for the fixed 72px header, as on the home hero. */}
      <PageHeader
        eyebrow={contact.eyebrow}
        title={contact.title}
        body={contact.body}
        note={contact.note}
      />

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
                <Icon name={contact.hours.icon} className="h-[21px] w-[21px]" />
              </span>
              <span>
                <span className="block text-[11px] font-bold tracking-[0.14em] text-ink-400 uppercase">
                  {contact.hours.label}
                </span>
                <span className="mt-1 block text-[13.5px] leading-snug text-ink-700">
                  {contact.hours.value}
                </span>
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <HowItWorks />

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
