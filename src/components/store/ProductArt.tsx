import { useId } from "react";
import type { Category } from "@/lib/products";
import { cn } from "@/lib/utils";

type Props = {
  category: Category;
  className?: string;
};

/** Gothic chrome line-art fallback motif per category. */
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
        </g>
      )}

      {category === "caps" && (
        <g stroke={`url(#chrome-${uid})`} strokeWidth="3.5" strokeLinejoin="round">
          <path d="M52 112 c0 -36 20 -54 48 -54 s48 18 48 54" fill="rgba(11,13,18,0.6)" />
          <path d="M148 112 c22 0 34 8 34 16 s-14 10 -34 10" fill="none" />
          <path d="M60 112 c0 -26 16 -44 40 -44" strokeWidth="2" opacity="0.7" />
          <circle cx="100" cy="58" r="4" fill="#e8eef5" stroke="none" />
          <path d="M84 88 l8 12 -8 12 -8 -12 z" fill="none" stroke={`url(#red-${uid})`} strokeWidth="2.5" />
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

      {category === "rings" && (
        <g stroke={`url(#chrome-${uid})`} strokeWidth="3.5" strokeLinejoin="round">
          <ellipse cx="100" cy="118" rx="34" ry="26" fill="rgba(11,13,18,0.6)" />
          <ellipse cx="100" cy="118" rx="34" ry="26" strokeWidth="2" opacity="0.6" transform="translate(0 6)" />
          <path d="M100 44 l10 16 18 3 -13 13 3 18 -18 -9 -18 9 3 -18 -13 -13 18 -3 z" fill="rgba(11,13,18,0.7)" stroke={`url(#red-${uid})`} strokeWidth="3" />
        </g>
      )}

      {category === "keychains" && (
        <g stroke={`url(#chrome-${uid})`} strokeWidth="3.5" strokeLinejoin="round">
          <circle cx="100" cy="56" r="16" fill="none" />
          <circle cx="100" cy="56" r="16" strokeWidth="2" opacity="0.5" transform="translate(4 -3)" />
          <path d="M100 72 v14" strokeWidth="3" />
          <path
            d="M100 86 c-22 0 -32 14 -32 32 c0 22 14 38 32 38 c18 0 32 -16 32 -38 c0 -18 -10 -32 -32 -32 z"
            fill="rgba(11,13,18,0.6)"
          />
          <path d="M88 108 l6 6 -6 6 M112 108 l-6 6 6 6" strokeWidth="2.5" stroke={`url(#red-${uid})`} />
        </g>
      )}

      {category === "bracelets" && (
        <g stroke={`url(#chrome-${uid})`} strokeWidth="3.5" strokeLinejoin="round">
          <ellipse cx="100" cy="104" rx="56" ry="34" fill="rgba(11,13,18,0.55)" />
          <ellipse cx="100" cy="104" rx="56" ry="34" strokeWidth="2" opacity="0.55" transform="translate(0 8)" />
          <circle cx="100" cy="70" r="6" fill="#e8eef5" stroke="none" />
          <path d="M64 122 l6 8 -6 8 M136 122 l-6 8 6 8" strokeWidth="2.5" stroke={`url(#red-${uid})`} />
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

      {category === "limited" && (
        <g stroke={`url(#chrome-${uid})`} strokeWidth="3.5" strokeLinejoin="round">
          <rect x="42" y="78" width="116" height="52" rx="12" fill="rgba(11,13,18,0.65)" />
          <path d="M42 104 h116" strokeWidth="2" opacity="0.6" />
          <path d="M100 58 v20 M88 68 h24" strokeWidth="4" />
          <path d="M100 130 l6 10 -6 10 -6 -10 z" fill={`url(#red-${uid})`} stroke="none" />
          <circle cx="60" cy="91" r="3" fill="#e8eef5" stroke="none" />
          <circle cx="140" cy="91" r="3" fill="#e8eef5" stroke="none" />
        </g>
      )}
    </svg>
  );
}
