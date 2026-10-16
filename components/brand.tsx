import Image from "next/image";

export function Logo() {
  return (
    <a href="#home" aria-label="LaslesVPN home" className="inline-flex">
      <Image
        src="/images/logo.svg"
        alt="LaslesVPN"
        width={149}
        height={37}
        className="h-9 w-auto"
      />
    </a>
  );
}

export function CheckCircle({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#2FAB73" />
      <path
        d="m8.2 12.3 2.6 2.6 5-5.2"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckSmall({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m5 12.5 4.5 4.5L19 7.5"
        stroke="#2FAB73"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 1.5 9.9 5.6l4.5.5-3.3 3.1.9 4.4L8 11.4l-4 2.2.9-4.4L1.6 6.1l4.5-.5L8 1.5Z"
        fill="#FEA250"
        stroke="#FEA250"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon({
  className = "h-7 w-7",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`${className} ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LocationPinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"
        fill="#F53838"
      />
      <circle cx="12" cy="10" r="2.6" fill="#fff" />
    </svg>
  );
}

export function UserIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.6" fill="#F53838" />
      <path
        d="M4.8 19.5c1.2-3.4 4-5 7.2-5s6 1.6 7.2 5c.4 1.1-.5 2-1.7 2H6.5c-1.2 0-2.1-.9-1.7-2Z"
        fill="#F53838"
      />
    </svg>
  );
}

export function ServerIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="3.5" width="16" height="7" rx="1.6" fill="#F53838" />
      <rect x="4" y="13.5" width="16" height="7" rx="1.6" fill="#F53838" />
      <circle cx="8" cy="7" r="1.1" fill="#fff" />
      <circle cx="8" cy="17" r="1.1" fill="#fff" />
    </svg>
  );
}

