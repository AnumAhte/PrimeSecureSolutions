import Link from "next/link";
import { footer, site } from "@/content/site";
import { Logo } from "./ui/logo";
import { Container } from "./ui/primitives";

const socials = [
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95C21.4 8.75 22 11.1 22 14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z",
  },
  {
    label: "Facebook",
    href: site.social.facebook,
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.54-1.5h1.66V3.63A22 22 0 0 0 14.3 3.5c-2.4 0-4.05 1.47-4.05 4.17V9.9H7.5V13h2.75v8h3.25Z",
  },
  {
    label: "X",
    href: site.social.twitter,
    path: "M17.2 3.5h3.1l-6.77 7.74 7.97 10.26h-6.25l-4.9-6.4-5.6 6.4H1.64l7.25-8.28L1.25 3.5h6.4l4.43 5.86L17.2 3.5Zm-1.1 16.2h1.72L7.98 5.23H6.14L16.1 19.7Z",
  },
  {
    label: "YouTube",
    href: site.social.youtube,
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z",
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8 text-white/60">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Logo tone="light" size={42} />
            <p className="mt-5 max-w-[260px] text-[12.5px] leading-[1.75]">
              {footer.blurb}
            </p>
            <ul className="mt-6 flex items-center gap-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/55 transition-all duration-200 hover:border-brand-400/60 hover:bg-brand-500/12 hover:text-brand-300"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1.15fr_0.85fr_1.15fr]">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[11px] font-bold tracking-[0.16em] text-white uppercase">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[12.5px] leading-relaxed transition-colors hover:text-brand-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-[11px] font-bold tracking-[0.16em] text-white uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-[12.5px] leading-relaxed">
                <li>
                  <a
                    href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                    className="transition-colors hover:text-brand-300"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all transition-colors hover:text-brand-300"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-6 text-[11.5px]">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-3">
            <Link href="/privacy" className="transition-colors hover:text-brand-300">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="transition-colors hover:text-brand-300">
              Terms of Service
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
