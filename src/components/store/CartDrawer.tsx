import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ProductArt } from "@/components/store/ProductArt";
import { useCart } from "@/context/CartContext";
import { CATEGORY_LABELS, formatPrice } from "@/lib/products";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";

export function CartDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { items, subtotal, count, setQty, remove, productFor, isHydrated } = useCart();
  const navigate = useNavigate();

  const goCart = () => {
    onOpenChange(false);
    navigate("/cart");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full flex-col border-l border-border bg-[#0b0d12] p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle className="font-[family-name:var(--font-display)] tracking-[0.2em] text-sm uppercase text-foreground">
            Reliquary · {count} {count === 1 ? "item" : "items"}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {!isHydrated ? (
            <p className="mt-10 text-center text-sm text-muted-foreground">…</p>
          ) : items.length === 0 ? (
            <div className="mt-16 text-center">
              <p className="font-[family-name:var(--font-display)] text-lg text-foreground">
                The reliquary is empty
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Add artifacts from the collection.
              </p>
              <Button
                className="btn-chrome mt-6 font-semibold"
                onClick={() => {
                  onOpenChange(false);
                  navigate("/shop");
                }}
              >
                Browse the collection
              </Button>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => {
                const product = productFor(item.productId);
                if (!product) return null;
                return (
                  <li
                    key={item.productId}
                    className="chrome-panel flex gap-3 rounded-md p-3"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border bg-[#06070a]">
                      <ProductArt category={product.category} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="truncate text-sm font-semibold text-foreground">
                          {product.name}
                        </p>
                        <button
                          onClick={() => remove(item.productId)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                          aria-label={`Remove ${product.name}`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {CATEGORY_LABELS[product.category]}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center rounded-sm border border-border">
                          <button
                            className="px-2 py-1 text-muted-foreground hover:text-foreground"
                            onClick={() => setQty(item.productId, item.qty - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="min-w-6 text-center text-xs tabular-nums">
                            {item.qty}
                          </span>
                          <button
                            className="px-2 py-1 text-muted-foreground hover:text-foreground"
                            onClick={() => setQty(item.productId, item.qty + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold tabular-nums text-foreground">
                          {formatPrice(product.price * item.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {isHydrated && items.length > 0 && (
          <div className="border-t border-border px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="uppercase tracking-[0.2em] text-muted-foreground">
                Subtotal
              </span>
              <span className="text-lg font-semibold tabular-nums text-foreground">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Button
              className="btn-chrome mt-4 w-full font-semibold tracking-[0.12em]"
              onClick={goCart}
            >
              View full cart
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
