import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { PageHeader } from "../ui/page-header";
import { Container, Reveal } from "../ui/primitives";
import { legal } from "@/content/site";

type LegalDoc = {
  eyebrow: string;
  title: string;
  sections: { heading: string; paragraphs: string[] }[];
};

/**
 * Privacy and Terms share this body.
 *
 * When `sections` is empty the page says so plainly instead of rendering
 * generated boilerplate. Legal text that does not describe how this business
 * actually handles data is worse than none: it reads as a commitment the
 * business has not made, and it is the kind of thing a visitor may rely on.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  const hasText = doc.sections.length > 0;

  return (
    <>
      <PageHeader eyebrow={doc.eyebrow} title={doc.title} />

      <section className="bg-white py-16 lg:py-20">
        <Container>
          {hasText ? (
            <div className="mx-auto grid max-w-[760px] gap-10">
              {doc.sections.map((section, i) => (
                <Reveal key={section.heading} delay={Math.min(i, 6) * 60}>
                  <section>
                    <h2 className="font-display text-[17px] leading-snug font-bold text-ink-900">
                      {section.heading}
                    </h2>
                    <div className="mt-3 space-y-3.5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 24)}
                          className="text-[14px] leading-[1.8] text-ink-500"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mx-auto max-w-[560px] text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-ice-200 bg-ice-50 text-brand-500">
                <Icon name="lock" className="h-7 w-7" />
              </span>
              <h2 className="font-display mt-6 text-[19px] leading-snug font-extrabold text-ink-900">
                {legal.missingNotice.title}
              </h2>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-ink-500">
                {legal.missingNotice.body}
              </p>
              <div className="mt-7 flex justify-center">
                <Button href={legal.missingNotice.cta.href} size="lg">
                  {legal.missingNotice.cta.label}
                </Button>
              </div>
            </Reveal>
          )}
        </Container>
      </section>
    </>
  );
}
