import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/store/ProductImage";
import { useCart } from "@/context/CartContext";
import { CATEGORY_LABELS, formatPrice, type Product } from "@/lib/products";
import { Check, Flame, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article
      className="chrome-panel shine group relative flex flex-col overflow-hidden rounded-lg"
    >
      {product.edition ? (
        <span className="absolute left-3 top-3 z-10 rounded-sm border border-[#ff3b57]/50 bg-[#06070a]/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff5c72]">
          {product.edition}
        </span>
      ) : null}
      {product.stockLeft ? (
        <span className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-sm border border-[#ff3b57]/50 bg-[#06070a]/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff5c72]">
          <Flame className="size-3" /> {product.stockLeft} Left
        </span>
      ) : null}

      <div className="relative aspect-square overflow-hidden bg-[#06070a]">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          <ProductImage
            src={product.image}
            alt={product.name}
            category={product.category}
          />
        </div>
        <div className="scanlines pointer-events-none absolute inset-0 opacity-15" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-[family-name:var(--font-display)] text-base font-semibold leading-tight text-foreground">
            {product.name}
          </h3>
          <div className="shrink-0 text-right">
            <span
              className={cn(
                "text-sm font-semibold tabular-nums",
                product.compareAt
                  ? "text-[#ff5c72]"
                  : "text-foreground",
              )}
            >
              {formatPrice(product.price)}
            </span>
            {product.compareAt && (
              <span className="ml-2 text-xs tabular-nums text-muted-foreground line-through">
                {formatPrice(product.compareAt)}
              </span>
            )}
          </div>
        </div>
        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {CATEGORY_LABELS[product.category]}
          {product.compareAt && (
            <span className="ml-2 text-[#ff5c72]">Sale</span>
          )}
        </p>
        <p className="mt-2.5 line-clamp-2 text-[13px] leading-5 text-muted-foreground">
          {product.description}
        </p>

        <Button
          onClick={handleAdd}
          className={cn(
            "mt-4 w-full font-semibold uppercase tracking-[0.18em]",
            added
              ? "border border-[#8fd8ff]/60 bg-[#0f1720] text-[#8fd8ff]"
              : "btn-chrome",
          )}
        >
          {added ? (
            <>
              <Check className="mr-2 size-4" /> Sealed
            </>
          ) : (
            <>
              <Plus className="mr-2 size-4" /> Claim
            </>
          )}
        </Button>
      </div>
    </article>
  );
}
