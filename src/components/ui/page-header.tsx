import { Container, Eyebrow } from "./primitives";

/**
 * The dark band every page below the homepage opens with.
 *
 * Extracted because it is identical on all of them — same gradient, grid, bloom
 * and bottom fade as the homepage hero's ground, so the pages read as one site.
 * `pt-[72px]` clears the fixed header, exactly as the hero does.
 */
export function PageHeader({
  eyebrow,
  title,
  titleAccent,
  body,
  note,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Rendered in brand blue on a second line, as in the hero headline. */
  titleAccent?: string;
  body?: string | string[];
  note?: string;
  /** Buttons or anything else that sits under the copy. */
  children?: React.ReactNode;
}) {
  const paragraphs = typeof body === "string" ? [body] : (body ?? []);

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-[72px]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_72%_0%,#16345c_0%,#0a1c36_48%,#050e1d_100%)]" />
        <div className="tech-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-1/3 left-[62%] h-[150%] w-[55%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(59,155,255,0.16),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,#050e1d,transparent)]" />
      </div>

      <Container className="py-16 lg:py-20">
        <div className="max-w-[680px]">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="font-display mt-4 text-[clamp(1.9rem,4vw,2.85rem)] leading-[1.12] font-extrabold tracking-[-0.025em] text-white text-balance">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-brand-400">{titleAccent}</span>
              </>
            )}
          </h1>

          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-5 max-w-[580px] text-[15.5px] leading-[1.75] text-white/70"
            >
              {paragraph}
            </p>
          ))}

          {note && (
            <p className="mt-3 max-w-[520px] text-[13.5px] leading-[1.7] text-white/50">
              {note}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
