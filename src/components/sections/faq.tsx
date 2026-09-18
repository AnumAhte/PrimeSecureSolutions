import { faqs } from "@/content/site";
import { TextLink } from "../ui/button";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

/**
 * Native <details>/<summary> rather than a JS accordion: it opens without
 * hydration, is keyboard-operable for free, and the answers sit in the HTML
 * whether or not scripts run.
 */
export function Faq({
  /** Homepage shows a subset; /faqs shows everything. */
  limit,
  showAllLink = false,
  background = "white",
}: {
  limit?: number;
  showAllLink?: boolean;
  background?: "white" | "ice";
}) {
  const items = limit ? faqs.items.slice(0, limit) : faqs.items;

  return (
    <section
      className={`py-20 lg:py-24 ${background === "ice" ? "bg-ice-50" : "bg-white"}`}
    >
      <Container>
        <Reveal className="mx-auto max-w-[680px] text-center">
          <Eyebrow>{faqs.eyebrow}</Eyebrow>
          <h2 className="font-display mt-3.5 text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-extrabold tracking-[-0.022em] text-ink-900 text-balance">
            {faqs.title}
          </h2>
        </Reveal>

        <ul className="mx-auto mt-12 grid max-w-[820px] gap-3">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 6) * 55}>
              <li>
                <details className="group rounded-xl border border-ice-200 bg-white transition-colors duration-200 open:border-brand-200 hover:border-brand-200">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-[14.5px] leading-snug font-bold text-ink-900">
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ice-200 text-brand-500 transition-all duration-200 group-open:rotate-45 group-open:border-brand-300 group-open:bg-brand-500 group-open:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        strokeLinecap="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-[13.5px] leading-[1.8] text-ink-500">
                    {item.a}
                  </p>
                </details>
              </li>
            </Reveal>
          ))}
        </ul>

        {showAllLink && faqs.items.length > items.length && (
          <Reveal delay={120} className="mt-8 flex justify-center">
            <TextLink href="/faqs">{faqs.seeAllLabel}</TextLink>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

/** The same questions, machine-readable, generated from one source. */
export function FaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      }}
    />
  );
}
