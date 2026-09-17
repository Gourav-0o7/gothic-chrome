import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/store/ProductCard";
import { SiteHeader } from "@/components/store/SiteHeader";
import { SiteFooter } from "@/components/store/SiteFooter";
import {
  CATEGORIES,
  CATEGORY_LABELS,
  PRODUCTS,
  type Category,
} from "@/lib/products";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Layers } from "lucide-react";
import { useMemo } from "react";
import { useSearchParams } from "react-router";

function isCategory(value: string | null): value is Category {
  return value !== null && CATEGORIES.includes(value as Category);
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get("category");

  const filtered = useMemo(
    () =>
      isCategory(active)
        ? PRODUCTS.filter((p) => p.category === active)
        : PRODUCTS,
    [active],
  );

  const select = (value: Category | "all") => {
    if (value === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", value);
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Page head */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid opacity-70" />
          <div className="absolute inset-0 bg-radial-glow" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <p className="text-[11px] uppercase tracking-gothic text-[#8fd8ff]">
              The Vault
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
              <span className="text-chrome">THE COLLECTION</span>
            </h1>
            <div className="chrome-rule mt-5 w-40" />
            <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Every piece is cast, burnished, and numbered by hand. Filter the
              vault by chamber — editions are final once closed.
            </p>
          </div>
        </section>

        {/* Filters + grid */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <FilterChip
              label="All Artifacts"
              active={active === null}
              onClick={() => select("all")}
              icon={<Layers className="size-3.5" />}
            />
            {CATEGORIES.map((cat) => (
              <FilterChip
                key={cat}
                label={CATEGORY_LABELS[cat]}
                active={active === cat}
                onClick={() => select(cat)}
              />
            ))}
            <span className="ml-auto hidden text-[11px] uppercase tracking-[0.24em] text-muted-foreground sm:block">
              {filtered.length} {filtered.length === 1 ? "artifact" : "artifacts"}
            </span>
          </div>

          <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-sm text-muted-foreground">
              This vault is sealed. Check back after the next casting.
            </p>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
  icon,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-sm border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all",
        active
          ? "border-transparent btn-chrome"
          : "border-border bg-[#0a0c11] text-muted-foreground hover:border-[#8fd8ff]/40 hover:text-foreground",
      )}
    >
      {icon ? <span className="mr-2 inline-block align-[-3px]">{icon}</span> : null}
      {label}
    </button>
  );
}
