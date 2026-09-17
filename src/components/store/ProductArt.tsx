import { useId } from "react";
import type { Category } from "@/lib/products";
import { cn } from "@/lib/utils";

type Props = {
  category: Category;
  className?: string;
};

/** Gothic chrome line-art, one motif per category. Deterministic and self-contained. */
export function ProductArt({ category, className }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id={`chrome-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="38%" stopColor="#c3cdd9" />
          <stop offset="52%" stopColor="#5f6a79" />
          <stop offset="66%" stopColor="#e8eef5" />
          <stop offset="100%" stopColor="#8b96a4" />
        </linearGradient>
        <linearGradient id={`red-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff5c72" />
          <stop offset="100%" stopColor="#8f0f22" />
        </linearGradient>
        <radialGradient id={`halo-${uid}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="rgba(140,200,255,0.16)" />
          <stop offset="100%" stopColor="rgba(140,200,255,0)" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill={`url(#halo-${uid})`} />
      <circle
        cx="100"
        cy="100"
        r="78"
        stroke="rgba(214,226,238,0.14)"
        strokeWidth="1"
        strokeDasharray="3 6"
      />

      {category === "belts" && (
        <g stroke={`url(#chrome-${uid})`} strokeWidth="3.5" strokeLinejoin="round">
          <path d="M14 82 h120 a14 14 0 0 1 14 14 v8 a14 14 0 0 1 -14 14 H14" fill="rgba(11,13,18,0.6)" />
          <path d="M14 82 v36" strokeWidth="3" />
          <rect x="140" y="70" width="34" height="60" rx="8" fill="rgba(11,13,18,0.75)" />
          <path d="M157 86 l8 12 -8 12 -8 -12 z" fill="none" stroke={`url(#red-${uid})`} strokeWidth="2.5" />
          <path d="M150 100 h14" strokeWidth="2" />
          <path d="M40 92 h14 M70 92 h14 M100 92 h14" strokeWidth="2" opacity="0.65" />
          <circle cx="180" cy="100" r="4" fill="#e8eef5" stroke="none" />
        </g>
      )}

      {category === "wallets" && (
        <g stroke={`url(#chrome-${uid})`} strokeWidth="3.5" strokeLinejoin="round">
          <rect x="46" y="62" width="108" height="78" rx="10" fill="rgba(11,13,18,0.6)" />
          <path d="M46 88 h108" strokeWidth="2.5" />
          <rect x="118" y="80" width="24" height="16" rx="4" fill="rgba(11,13,18,0.85)" />
          <path
            d="M130 106 l4 7 8 1 -6 6 2 8 -8 -4 -8 4 2 -8 -6 -6 8 -1 z"
            stroke={`url(#red-${uid})`}
            strokeWidth="2.5"
            fill="none"
          />
          <circle cx="130" cy="52" r="5" strokeWidth="2.5" />
          <path d="M130 47 v-8 M127 42 l3 -5 3 5" strokeWidth="2.5" />
        </g>
      )}

      {category === "necklaces" && (
        <g stroke={`url(#chrome-${uid})`} strokeWidth="3.5" strokeLinejoin="round">
          <path d="M56 44 c0 40 20 62 44 62 s44 -22 44 -62" fill="none" strokeDasharray="1 7" strokeWidth="4" strokeLinecap="round" />
          <path
            d="M100 96 l10 16 18 3 -13 13 3 18 -18 -9 -18 9 3 -18 -13 -13 18 -3 z"
            fill="rgba(11,13,18,0.7)"
            stroke={`url(#red-${uid})`}
            strokeWidth="3"
          />
          <circle cx="100" cy="118" r="4" fill="#e8eef5" stroke="none" />
        </g>
      )}

      {category === "hats" && (
        <g stroke={`url(#chrome-${uid})`} strokeWidth="3.5" strokeLinejoin="round">
          <path d="M28 128 c20 -14 44 -20 72 -20 s52 6 72 20" fill="none" />
          <path d="M64 116 c0 -34 14 -54 36 -54 s36 20 36 54" fill="rgba(11,13,18,0.6)" />
          <path d="M64 106 c10 6 22 9 36 9 s26 -3 36 -9" fill="none" strokeWidth="4" stroke={`url(#red-${uid})`} />
          <circle cx="100" cy="104" r="4.5" fill="#e8eef5" stroke="none" />
        </g>
      )}

      {category === "eyewear" && (
        <g stroke={`url(#chrome-${uid})`} strokeWidth="3.5" strokeLinejoin="round">
          <path d="M36 88 h128" strokeWidth="3" />
          <rect x="40" y="86" width="50" height="34" rx="12" fill="rgba(143,216,255,0.14)" />
          <rect x="110" y="86" width="50" height="34" rx="12" fill="rgba(143,216,255,0.14)" />
          <path d="M90 96 c4 -5 16 -5 20 0" strokeWidth="2.5" />
          <path d="M40 90 l-12 -8 M160 90 l12 -8" strokeWidth="3" />
          <path d="M120 40 l6 10 -6 10 -6 -10 z" fill="none" stroke={`url(#red-${uid})`} strokeWidth="2.5" transform="translate(0 4)" />
        </g>
      )}
    </svg>
  );
}
