"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Heart, X, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCartWishlist } from "@/components/providers/CartWishlistProvider";
import type { Product } from "@/components/ui/ProductCard";
import { useState } from "react";
import { cn } from "@/lib/utils";

const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    value
  );

export default function QuickViewModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { wishlist, toggleWishlist, addToCart } = useCartWishlist();
  const [added, setAdded] = useState(false);

  const isOpen = product !== null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-ink/50 backdrop-blur-sm data-[state=open]:animate-[fadeIn_0.25s_ease-out]" />
        {product && (
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed left-1/2 top-1/2 z-[91] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-canvas dark:bg-panel-dark shadow-card-hover data-[state=open]:animate-[dialogPopIn_0.3s_ease-out]"
          >
            <Dialog.Title className="sr-only">{product.name}</Dialog.Title>
            <Dialog.Close asChild>
              <button
                aria-label="Close quick view"
                className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/90 dark:bg-panel-dark/90 text-ink dark:text-ink-dark"
              >
                <X size={17} />
              </button>
            </Dialog.Close>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative aspect-square sm:aspect-auto">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="text-xs uppercase tracking-wide2 text-accent">{product.tag}</p>
                <h3 className="mt-3 font-display text-3xl text-ink dark:text-ink-dark">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted dark:text-muted-dark">{product.category}</p>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="text-2xl font-medium text-ink dark:text-ink-dark">
                    {formatINR(product.offerPrice)}
                  </span>
                  <span className="text-muted dark:text-muted-dark line-through">
                    {formatINR(product.price)}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  Anti-glare coated lenses, adjustable nose pads, and a
                  spring hinge for everyday comfort. Includes a
                  complimentary fitting with our optometrist.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    onClick={() => {
                      addToCart(product.id);
                      setAdded(true);
                      window.setTimeout(() => setAdded(false), 1800);
                    }}
                  >
                    {added ? (
                      <>
                        <Check size={16} /> Added
                      </>
                    ) : (
                      "Add to Cart"
                    )}
                  </Button>
                  <Button variant="outline" onClick={() => toggleWishlist(product.id)}>
                    <Heart
                      size={16}
                      className={cn(wishlist.has(product.id) && "fill-accent text-accent")}
                    />
                    Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </Dialog.Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
