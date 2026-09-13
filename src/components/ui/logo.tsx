import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * Horizontal lockup: the client's circular badge plus the wordmark.
 * `tone="light"` uses the reversed (white) badge for dark backgrounds.
 */
export function Logo({
  tone = "light",
  showTagline = false,
  size = 40,
  className = "",
}: {
  tone?: "light" | "dark";
  showTagline?: boolean;
  size?: number;
  className?: string;
}) {
  const light = tone === "light";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group flex items-center gap-2.5 ${className}`}
    >
      <Image
        src={light ? "/brand/logo-badge-light.png" : "/brand/logo-badge.png"}
        alt=""
        width={size}
        height={size}
        priority
        className="shrink-0 transition-transform duration-300 group-hover:scale-[1.04]"
        style={{ width: size, height: size }}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-extrabold tracking-[-0.01em] ${
            light ? "text-white" : "text-ink-900"
          }`}
        >
          {site.nameParts.first}
          <span className={light ? "text-brand-400" : "text-brand-500"}>
            {site.nameParts.second}
          </span>
        </span>
        <span
          className={`mt-[3px] text-[8.5px] font-semibold uppercase tracking-[0.34em] ${
            light ? "text-white/70" : "text-ink-500"
          }`}
        >
          Solutions
        </span>
      </span>

      {showTagline && (
        <span
          className={`ml-3 hidden border-l pl-3 text-[10.5px] leading-[1.45] whitespace-pre-line xl:block ${
            light ? "border-white/15 text-white/55" : "border-ice-200 text-ink-500"
          }`}
        >
          {site.tagline}
        </span>
      )}
    </Link>
  );
}
