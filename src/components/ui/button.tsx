import Link from "next/link";
import { ArrowRight } from "./icon";

type Variant = "primary" | "outline" | "ghost" | "white";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[0_6px_20px_-6px_rgba(28,116,224,0.75)] hover:bg-brand-600 hover:shadow-[0_10px_28px_-8px_rgba(28,116,224,0.85)] hover:-translate-y-px active:translate-y-0",
  outline:
    "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10",
  ghost:
    "border border-ice-200 bg-white text-ink-900 hover:border-brand-300 hover:text-brand-600 hover:shadow-[0_6px_20px_-10px_rgba(11,27,48,0.4)]",
  white:
    "bg-white text-brand-600 shadow-[0_6px_20px_-8px_rgba(0,0,0,0.45)] hover:bg-ice-50 hover:-translate-y-px active:translate-y-0",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-[13.5px]",
  lg: "h-12 px-7 text-[15px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

/** Understated text link with the sliding arrow used on the service cards. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-500 transition-colors hover:text-brand-700 ${className}`}
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
