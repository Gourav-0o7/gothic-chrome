import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PRODUCTS, type Product } from "@/lib/products";

export type CartItem = {
  productId: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (productId: string) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  productFor: (productId: string) => Product | undefined;
  isHydrated: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "gothic-chrome-cart-v1";

function loadInitial(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (it): it is CartItem =>
          typeof it === "object" &&
          it !== null &&
          typeof (it as CartItem).productId === "string" &&
          typeof (it as CartItem).qty === "number" &&
          PRODUCTS.some((p) => p.id === (it as CartItem).productId),
      )
      .map((it) => ({
        productId: it.productId,
        qty: Math.min(Math.max(1, Math.floor(it.qty)), 9),
      }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  // Client-only SPA: hydrate once via lazy initializer instead of an effect,
  // so the persisted cart is available on first render without a cascade.
  const [items, setItems] = useState<CartItem[]>(loadInitial);
  const isHydrated = true;

  // Persist to localStorage on change (external-system sync).
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable — cart stays in memory
    }
  }, [items]);

  const add = useCallback((productId: string) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.productId === productId);
      if (existing) {
        return prev.map((it) =>
          it.productId === productId
            ? { ...it, qty: Math.min(it.qty + 1, 9) }
            : it,
        );
      }
      return [...prev, { productId, qty: 1 }];
    });
  }, []);

  const remove = useCallback((productId: string) => {
    setItems((prev) => prev.filter((it) => it.productId !== productId));
  }, []);

  const setQty = useCallback((productId: string, qty: number) => {
    setItems((prev) => {
      if (qty <= 0) {
        return prev.filter((it) => it.productId !== productId);
      }
      return prev.map((it) =>
        it.productId === productId
          ? { ...it, qty: Math.min(Math.floor(qty), 9) }
          : it,
      );
    });
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const productFor = useCallback(
    (productId: string) => PRODUCTS.find((p) => p.id === productId),
    [],
  );

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, it) => sum + it.qty, 0);
    const subtotal = items.reduce((sum, it) => {
      const product = PRODUCTS.find((p) => p.id === it.productId);
      return product ? sum + product.price * it.qty : sum;
    }, 0);
    return {
      items,
      count,
      subtotal,
      add,
      remove,
      setQty,
      clear,
      productFor,
      isHydrated,
    };
  }, [items, isHydrated, add, remove, setQty, clear, productFor]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
