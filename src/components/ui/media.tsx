import Image from "next/image";
import type { IconName } from "@/content/site";
import { Icon } from "./icon";

/**
 * Image slot with a designed fallback.
 *
 * Drop a real photo into /public/images and pass `src` — the placeholder
 * disappears and nothing else about the layout changes.
 *
 * The root is deliberately unpositioned: `className` must supply the
 * positioning (`relative` for an in-flow slot, `absolute inset-0` for a
 * backdrop). Baking `relative` in here silently beat callers' `absolute`
 * and collapsed the element to zero height.
 */
export function Media({
  src,
  alt = "",
  icon,
  label,
  className = "",
  imageClassName = "object-center",
  sizes = "100vw",
  priority = false,
  overlay = "none",
  blurDataURL,
}: {
  src?: string;
  alt?: string;
  icon?: IconName;
  label?: string;
  className?: string;
  /** Focal point / object-fit tweaks, e.g. "object-[38%_center] sm:object-center". */
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: "none" | "soft" | "strong";
  /** Tiny inline preview so the slot is never empty while the photo downloads. */
  blurDataURL?: string;
}) {
  const overlayClass =
    overlay === "strong"
      ? "bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/55"
      : overlay === "soft"
        ? "bg-gradient-to-t from-navy-950/70 to-transparent"
        : "";

  return (
    <div className={`overflow-hidden bg-navy-900 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          {...(blurDataURL
            ? ({ placeholder: "blur", blurDataURL } as const)
            : {})}
          className={`object-cover ${imageClassName}`}
        />
      ) : (
        <Placeholder icon={icon} label={label} />
      )}
      {overlayClass && (
        <div className={`pointer-events-none absolute inset-0 ${overlayClass}`} />
      )}
    </div>
  );
}

function Placeholder({ icon, label }: { icon?: IconName; label?: string }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_70%_0%,#16345c_0%,#0a1c36_45%,#050e1d_100%)]" />
      <div className="tech-grid absolute inset-0 opacity-70" />
      {/* soft light bloom, echoing the monitor glow in the approved design */}
      <div className="absolute -top-1/4 left-1/2 h-[150%] w-[70%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(59,155,255,0.20),transparent)]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-300/35">
        {icon && <Icon name={icon} className="h-12 w-12" />}
        {label && (
          <span className="px-4 text-center text-[10px] font-semibold uppercase tracking-[0.24em]">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
