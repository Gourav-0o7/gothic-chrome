import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/store/ProductImage";
import { SiteHeader } from "@/components/store/SiteHeader";
import { SiteFooter } from "@/components/store/SiteFooter";
import { useCart } from "@/context/CartContext";
import { CATEGORY_LABELS, formatPrice } from "@/lib/products";
import { ArrowRight, Minus, Plus, ShieldCheck, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function Cart() {
  const { items, subtotal, count, setQty, remove, clear, productFor, isHydrated } =
    useCart();
  const navigate = useNavigate();

  const shipping = subtotal > 0 ? 25 : 0;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid opacity-70" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <p className="text-[11px] uppercase tracking-gothic text-[#8fd8ff]">
              Your Reliquary
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
              <span className="text-chrome">THE CART</span>
            </h1>
            <div className="chrome-rule mt-5 w-40" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          {!isHydrated ? (
            <p className="py-20 text-center text-sm text-muted-foreground">…</p>
          ) : items.length === 0 ? (
            <div className="chrome-panel mx-auto max-w-lg rounded-lg p-12 text-center">
              <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">
                Nothing sealed yet
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                The reliquary stands empty. Return to the vault and claim your
                artifacts.
              </p>
              <Button
                asChild
                className="btn-chrome mt-8 px-8 text-xs font-bold uppercase tracking-[0.22em]"
              >
                <Link to="/shop">
                  Enter the Collection
                  <ArrowRight className="ml-3 size-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
              {/* Line items */}
              <div className="flex flex-col gap-4">
                {items.map((item) => {
                  const product = productFor(item.productId);
                  if (!product) return null;
                  return (
                    <div
                      key={item.productId}
                      className="chrome-panel flex gap-4 rounded-lg p-4"
                    >
                      <div className="hidden h-28 w-28 shrink-0 overflow-hidden rounded-md border border-border bg-[#06070a] sm:block">
                        <ProductImage
                          src={product.image}
                          alt={product.name}
                          category={product.category}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="truncate font-[family-name:var(--font-display)] text-base font-semibold text-foreground">
                              {product.name}
                            </h3>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                              {CATEGORY_LABELS[product.category]} ·{" "}
                              {product.materials}
                            </p>
                            {product.edition && (
                              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#ff5c72]">
                                {product.edition}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => remove(item.productId)}
                            className="shrink-0 text-muted-foreground transition-colors hover:text-destructive"
                            aria-label={`Remove ${product.name}`}
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center rounded-sm border border-border">
                            <button
                              className="px-2.5 py-1.5 text-muted-foreground hover:text-foreground"
                              onClick={() => setQty(item.productId, item.qty - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="size-3.5" />
                            </button>
                            <span className="min-w-8 text-center text-sm tabular-nums">
                              {item.qty}
                            </span>
                            <button
                              className="px-2.5 py-1.5 text-muted-foreground hover:text-foreground"
                              onClick={() => setQty(item.productId, item.qty + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="size-3.5" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">
                              {formatPrice(product.price)} each
                            </p>
                            <p className="text-lg font-semibold tabular-nums text-foreground">
                              {formatPrice(product.price * item.qty)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="flex items-center justify-between pt-2">
                  <Button
                    asChild
                    variant="ghost"
                    className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
                  >
                    <Link to="/shop">← Continue browsing</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={clear}
                    className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-destructive"
                  >
                    Empty the reliquary
                  </Button>
                </div>
              </div>

              {/* Summary */}
              <aside className="chrome-panel h-fit rounded-lg p-6 lg:sticky lg:top-28">
                <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                  Order Summary
                </h2>
                <div className="chrome-rule-soft my-5" />

                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      Artifacts ({count})
                    </dt>
                    <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      Insured courier
                    </dt>
                    <dd className="tabular-nums">
                      {shipping === 0 ? "—" : formatPrice(shipping)}
                    </dd>
                  </div>
                  <div className="flex justify-between border-t border-border pt-4 text-base">
                    <dt className="font-semibold">Total</dt>
                    <dd className="font-semibold tabular-nums">
                      {formatPrice(subtotal + shipping)}
                    </dd>
                  </div>
                </dl>

                <Button
                  className="btn-chrome mt-6 w-full py-6 text-xs font-bold uppercase tracking-[0.22em]"
                  onClick={() => navigate("/auth?returnTo=%2Fcart")}
                >
                  Sealed by Blood — Checkout
                </Button>
                <p className="mt-4 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <ShieldCheck className="size-4 text-[#8fd8ff]" />
                  Authenticity papers with every order
                </p>
              </aside>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
