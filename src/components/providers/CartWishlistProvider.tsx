"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface CartWishlistContextValue {
  wishlist: Set<string>;
  cart: Record<string, number>;
  toggleWishlist: (id: string) => void;
  addToCart: (id: string) => void;
  wishlistCount: number;
  cartCount: number;
}

const CartWishlistContext = createContext<CartWishlistContextValue | undefined>(undefined);

export function CartWishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<Record<string, number>>({});

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const addToCart = useCallback((id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }, []);

  const wishlistCount = wishlist.size;
  const cartCount = useMemo(
    () => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
    [cart]
  );

  return (
    <CartWishlistContext.Provider
      value={{ wishlist, cart, toggleWishlist, addToCart, wishlistCount, cartCount }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
}

export function useCartWishlist() {
  const ctx = useContext(CartWishlistContext);
  if (!ctx) throw new Error("useCartWishlist must be used within CartWishlistProvider");
  return ctx;
}
