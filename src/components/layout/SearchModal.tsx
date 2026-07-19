"use client";

import { useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, X } from "lucide-react";
import { products } from "@/lib/data";
import Image from "next/image";

export default function SearchModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-ink/40 backdrop-blur-sm data-[state=open]:animate-[fadeIn_0.25s_ease-out]" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed left-1/2 top-24 z-[91] w-[92vw] max-w-2xl -translate-x-1/2 rounded-xl bg-canvas dark:bg-panel-dark shadow-card-hover data-[state=open]:animate-[dialogIn_0.25s_ease-out]"
        >
          <Dialog.Title className="sr-only">Search Vision Optics</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-line dark:border-line-dark px-6 py-5">
            <Search size={18} className="text-muted dark:text-muted-dark" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search frames, sunglasses, collections…"
              className="flex-1 bg-transparent font-body text-base text-ink dark:text-ink-dark placeholder:text-muted dark:placeholder:text-muted-dark outline-none"
            />
            <Dialog.Close asChild>
              <button
                aria-label="Close search"
                className="text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>
          <div className="max-h-[60vh] overflow-y-auto p-3">
            {query.trim() === "" && (
              <p className="px-3 py-8 text-center text-sm text-muted dark:text-muted-dark">
                Try “cat-eye”, “sunglasses”, or “titanium”.
              </p>
            )}
            {query.trim() !== "" && results.length === 0 && (
              <p className="px-3 py-8 text-center text-sm text-muted dark:text-muted-dark">
                No frames matched “{query}”. Try a different search.
              </p>
            )}
            {results.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 rounded-lg p-3 hover:bg-ink/[0.03] dark:hover:bg-white/[0.05] transition-colors"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-beige-soft dark:bg-white/5">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-display text-ink dark:text-ink-dark">{product.name}</p>
                  <p className="text-xs uppercase tracking-wide2 text-muted dark:text-muted-dark">
                    {product.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
