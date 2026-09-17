import { cn } from "@/lib/utils";

/** Brand emblem: beveled chrome cross + dagger motif. */
export function Emblem({
  className,
  accent = true,
}: {
  className?: string;
  accent?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
    >
      <defs>
        <linearGradient id="emblem-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#c3cdd9" />
          <stop offset="52%" stopColor="#5f6a79" />
          <stop offset="64%" stopColor="#e8eef5" />
          <stop offset="100%" stopColor="#93a1b1" />
        </linearGradient>
        <linearGradient id="emblem-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff5c72" />
          <stop offset="100%" stopColor="#8f0f22" />
        </linearGradient>
      </defs>
      {/* beveled square plate */}
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="8"
        stroke="url(#emblem-chrome)"
        strokeWidth="2"
        fill="rgba(11,13,18,0.7)"
      />
      {/* cross */}
      <path
        d="M32 14 v28 M22 24 h20"
        stroke="url(#emblem-chrome)"
        strokeWidth="5"
        strokeLinecap="square"
      />
      {/* dagger drop point */}
      <path
        d="M32 42 l5 8 -5 8 -5 -8 z"
        fill={accent ? "url(#emblem-red)" : "url(#emblem-chrome)"}
        stroke="none"
      />
    </svg>
  );
}
