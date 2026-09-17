import { Emblem } from "@/components/store/Emblem";
import { Link } from "react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[#08090d]">
      <div className="chrome-rule-soft" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Emblem className="h-8 w-8" />
            <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.28em] text-foreground">
              BLACKNOIR
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
            Gothic artifacts cast in silver and chrome. Hand-finished in limited
            editions since 1988.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-foreground">
            Collection
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" to="/shop?category=belts">Belts</Link></li>
            <li><Link className="hover:text-foreground" to="/shop?category=wallets">Wallets</Link></li>
            <li><Link className="hover:text-foreground" to="/shop?category=necklaces">Necklaces</Link></li>
            <li><Link className="hover:text-foreground" to="/shop?category=hats">Hats</Link></li>
            <li><Link className="hover:text-foreground" to="/shop?category=eyewear">Eyewear</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-foreground">
            House
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" to="/shop">The Collection</Link></li>
            <li><Link className="hover:text-foreground" to="/cart">Your Reliquary</Link></li>
            <li><Link className="hover:text-foreground" to="/auth?returnTo=%2Fshop">Member Access</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-foreground">
            Commissions
          </p>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Private orders and one-off casts. Written request only, reviewed at
            the bench.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        © 1988–2026 Black Noir Atelier · All rites reserved
      </div>
    </footer>
  );
}
