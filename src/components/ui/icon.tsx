import type { IconName } from "@/content/site";

/**
 * One stroked icon set for the whole site so every section reads as one system.
 * 24x24 grid, 1.6 stroke, round caps — matches the approved design's line weight.
 */
const paths: Record<IconName, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3 4.8 6v5.4c0 4.2 3 8 7.2 9.3 4.2-1.3 7.2-5.1 7.2-9.3V6L12 3Z" />
      <path d="m9.3 12 1.9 1.9 3.6-3.6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.2" r="3.4" />
      <path d="M5.4 19.6a6.9 6.9 0 0 1 13.2 0" />
    </>
  ),
  dollar: (
    <>
      <path d="M12 3.6v16.8" />
      <path d="M15.8 7.6H10.4a2.6 2.6 0 0 0 0 5.2h3.2a2.6 2.6 0 0 1 0 5.2H8" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4.6H7.6A1.6 1.6 0 0 0 6 6.2v13.2a1.6 1.6 0 0 0 1.6 1.6h8.8a1.6 1.6 0 0 0 1.6-1.6V6.2a1.6 1.6 0 0 0-1.6-1.6H15" />
      <rect x="9" y="2.8" width="6" height="3.6" rx="1.2" />
      <path d="M9.4 11.4h5.2M9.4 15.2h5.2" />
    </>
  ),
  lock: (
    <>
      <rect x="4.6" y="10.4" width="14.8" height="9.8" rx="2.2" />
      <path d="M8.4 10.4V7.8a3.6 3.6 0 0 1 7.2 0v2.6" />
      <path d="M12 14.2v2.4" />
    </>
  ),
  users: (
    <>
      <circle cx="9.4" cy="8.6" r="3" />
      <path d="M3.8 19.4a5.6 5.6 0 0 1 11.2 0" />
      <path d="M16 6.1a3 3 0 0 1 0 5.9M17.2 14.4a5.6 5.6 0 0 1 3 5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19.4h16" />
      <path d="m5.6 15.4 4-4.4 3.2 2.8 5.6-6.2" />
      <path d="M14.6 7.6h3.8v3.8" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.1" />
      <path d="M19.2 14.4a1.5 1.5 0 0 0 .3 1.6l.1.1a1.8 1.8 0 1 1-2.5 2.5l-.1-.1a1.5 1.5 0 0 0-2.5 1v.2a1.8 1.8 0 1 1-3.6 0v-.1a1.5 1.5 0 0 0-2.6-1l-.1.1a1.8 1.8 0 1 1-2.5-2.5l.1-.1a1.5 1.5 0 0 0-1-2.5h-.2a1.8 1.8 0 1 1 0-3.6h.1a1.5 1.5 0 0 0 1-2.6l-.1-.1a1.8 1.8 0 1 1 2.5-2.5l.1.1a1.5 1.5 0 0 0 1.6.3h.1a1.5 1.5 0 0 0 .9-1.4v-.2a1.8 1.8 0 1 1 3.6 0v.1a1.5 1.5 0 0 0 2.5 1l.1-.1a1.8 1.8 0 1 1 2.5 2.5l-.1.1a1.5 1.5 0 0 0-.3 1.6v.1a1.5 1.5 0 0 0 1.4.9h.2a1.8 1.8 0 1 1 0 3.6h-.1a1.5 1.5 0 0 0-1.4.9Z" />
    </>
  ),
  car: (
    <>
      <path d="M4.4 15.4v2.8a.8.8 0 0 0 .8.8h1.6a.8.8 0 0 0 .8-.8v-1.4M19.6 15.4v2.8a.8.8 0 0 1-.8.8h-1.6a.8.8 0 0 1-.8-.8v-1.4" />
      <path d="M3.6 16.8h16.8v-4.2l-1.6-4a1.8 1.8 0 0 0-1.7-1.2H6.9a1.8 1.8 0 0 0-1.7 1.2l-1.6 4v4.2Z" />
      <path d="M7 13.2h1.4M15.6 13.2H17" />
    </>
  ),
  store: (
    <>
      <path d="M4.4 10.2v8.6a.8.8 0 0 0 .8.8h13.6a.8.8 0 0 0 .8-.8v-8.6" />
      <path d="M3.2 10.2 5 5.2a.8.8 0 0 1 .8-.6h12.4a.8.8 0 0 1 .8.6l1.8 5a2.6 2.6 0 0 1-4.8 1.4 2.6 2.6 0 0 1-4.2 0 2.6 2.6 0 0 1-4.2 0 2.6 2.6 0 0 1-4.4-1.4Z" />
      <path d="M9.6 19.6v-4.8h4.8v4.8" />
    </>
  ),
  warehouse: (
    <>
      <path d="M3.4 19.6V9.4L12 5.2l8.6 4.2v10.2" />
      <path d="M3.4 19.6h17.2" />
      <rect x="8" y="12.6" width="8" height="7" />
      <path d="M8 15.6h8" />
    </>
  ),
  building: (
    <>
      <path d="M5 19.8V6.6a1.4 1.4 0 0 1 1.4-1.4h7.2A1.4 1.4 0 0 1 15 6.6v13.2" />
      <path d="M15 10.6h3a1.4 1.4 0 0 1 1.4 1.4v7.8" />
      <path d="M3.6 19.8h16.8" />
      <path d="M8.2 8.8h3.6M8.2 12.4h3.6M8.2 16h3.6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.4" y="7.6" width="17.2" height="12" rx="2" />
      <path d="M8.8 7.6V6a1.6 1.6 0 0 1 1.6-1.6h3.2A1.6 1.6 0 0 1 15.2 6v1.6" />
      <path d="M3.4 12.4h17.2" />
      <path d="M10.6 12.4h2.8" />
    </>
  ),
  growth: (
    <>
      <path d="M4 19.6h16" />
      <rect x="5.2" y="12.4" width="3.6" height="5.4" rx="0.8" />
      <rect x="10.2" y="9" width="3.6" height="8.8" rx="0.8" />
      <rect x="15.2" y="5.4" width="3.6" height="12.4" rx="0.8" />
    </>
  ),
  phone: (
    <>
      <path d="M8.2 3.6H5.8A1.8 1.8 0 0 0 4 5.5c0 8.3 6.2 14.5 14.5 14.5a1.8 1.8 0 0 0 1.9-1.8v-2.4l-4-1.6-1.9 2.3a13.4 13.4 0 0 1-6.5-6.5l2.3-1.9-1.6-4Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3.2" y="5.4" width="17.6" height="13.2" rx="2" />
      <path d="m3.8 7 7.2 5.2a1.7 1.7 0 0 0 2 0L20.2 7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.2s6.6-5.6 6.6-10.4a6.6 6.6 0 1 0-13.2 0C5.4 15.6 12 21.2 12 21.2Z" />
      <circle cx="12" cy="10.6" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 1.9" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDown({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
