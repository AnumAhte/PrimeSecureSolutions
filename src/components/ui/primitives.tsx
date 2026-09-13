"use client";

import { useEffect, useRef, useState } from "react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

/** Small uppercase label that opens nearly every section in the design. */
export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
        tone === "light" ? "text-brand-500" : "text-brand-300"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/**
 * Fades content up the first time it enters the viewport.
 * Styling lives in globals.css so the reduced-motion override applies cleanly.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety net for environments without IntersectionObserver: reveal the
    // node directly rather than re-rendering, so content is never left hidden.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("reveal-in");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
