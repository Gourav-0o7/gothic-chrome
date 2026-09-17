import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Emblem } from "@/components/store/Emblem";
import { CartDrawer } from "@/components/store/CartDrawer";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router";

const NAV = [
  { to: "/shop", label: "Collection" },
  { to: "/shop?category=eyewear", label: "Eyewear" },
  { to: "/cart", label: "Cart" },
];

export function SiteHeader() {
  const { count, isHydrated } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40">
      <div className="chrome-bar h-[3px]" />
      <div className="border-b border-border bg-[#06070a]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <Emblem className="h-8 w-8" />
            <span className="font-[family-name:var(--font-display)] text-base font-bold tracking-[0.28em] text-foreground">
              BLACKNOIR
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground",
                  location.pathname === item.to && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-muted-foreground hover:text-foreground"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag className="size-5" />
              {isHydrated && count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-[#ff3b57] text-[10px] font-bold text-white">
                  {count > 9 ? "9+" : count}
                </span>
              )}
            </Button>
            <Button
              asChild
              className="btn-chrome hidden h-9 px-4 text-[11px] font-bold uppercase tracking-[0.22em] sm:inline-flex"
            >
              <Link to="/auth?returnTo=%2Fshop">Member Access</Link>
            </Button>
          </div>
        </div>
      </div>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
}
