"use client";

import { useState } from "react";
import { testimonials } from "@/content/site";
import { Media } from "../ui/media";
import { Container, Eyebrow, Reveal } from "../ui/primitives";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.items.length;
  const active = testimonials.items[index];

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total);

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-18 lg:py-20">
      <Media
        // src="/images/testimonial-office.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050e1d_0%,rgba(5,14,29,0.92)_55%,rgba(10,28,54,0.85)_100%)]" />

      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <Eyebrow tone="dark">{testimonials.eyebrow}</Eyebrow>
          <h2 className="font-display mt-3.5 text-[clamp(1.4rem,2.6vw,1.8rem)] leading-[1.25] font-extrabold tracking-[-0.02em] text-white text-balance">
            {testimonials.title}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <figure className="relative">
            <span
              aria-hidden="true"
              className="font-display absolute -top-6 -left-1 text-[64px] leading-none text-brand-400/25"
            >
              &ldquo;
            </span>

            <blockquote
              key={index}
              className="relative pl-8 text-[15px] leading-[1.8] text-white/85 italic"
            >
              {active.quote}
            </blockquote>

            <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-4 pl-8">
              <span className="text-[12.5px] text-white/55">
                <span className="font-semibold text-white/85">
                  {active.author}
                </span>
                <span className="mx-2 text-white/25">/</span>
                {active.role}
              </span>

              <span className="flex items-center gap-2">
                {/* Dots double as direct navigation */}
                <span className="mr-2 flex items-center gap-1.5">
                  {testimonials.items.map((item, i) => (
                    <button
                      key={item.author + i}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Show testimonial ${i + 1} of ${total}`}
                      aria-current={i === index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-5 bg-brand-400"
                          : "w-1.5 bg-white/25 hover:bg-white/45"
                      }`}
                    />
                  ))}
                </span>

                <NavButton label="Previous testimonial" onClick={() => go(-1)}>
                  <path d="m15 6-6 6 6 6" />
                </NavButton>
                <NavButton label="Next testimonial" onClick={() => go(1)}>
                  <path d="m9 6 6 6-6 6" />
                </NavButton>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}

function NavButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:border-brand-400/60 hover:bg-white/5 hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        {children}
      </svg>
    </button>
  );
}
