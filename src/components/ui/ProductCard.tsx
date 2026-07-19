"use client";

import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useCartWishlist } from "@/components/providers/CartWishlistProvider";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  offerPrice: number;
  image: string;
  tag: string;
}

interface ProductCardProps {
  product: Product;
  index?: number;
  onQuickView: (product: Product) => void;
}

const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    value
  );

export default function ProductCard({ product, index = 0, onQuickView }: ProductCardProps) {
  const { wishlist, toggleWishlist } = useCartWishlist();
  const isWishlisted = wishlist.has(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-xl bg-white/60 dark:bg-panel-dark/60 shadow-subtle hover:shadow-card-hover transition-shadow duration-500 overflow-hidden border border-ink/[0.04] dark:border-white/[0.06]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl bg-beige-soft dark:bg-white/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-canvas/90 dark:bg-panel-dark/90 px-3 py-1 text-[11px] tracking-wide uppercase text-ink dark:text-ink-dark">
          {product.tag}
        </span>
        <button
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggleWishlist(product.id)}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/90 dark:bg-panel-dark/90 text-ink dark:text-ink-dark transition-transform hover:scale-110"
        >
          <Heart
            size={16}
            className={cn(isWishlisted && "fill-accent text-accent")}
          />
        </button>
        <div className="absolute inset-x-4 bottom-4 flex translate-y-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={() => onQuickView(product)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-ink/90 dark:bg-canvas/90 text-canvas dark:text-ink py-2.5 text-xs uppercase tracking-wide2 hover:bg-accent hover:text-canvas transition-colors"
          >
            <Eye size={14} /> Quick View
          </button>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide2 text-muted dark:text-muted-dark">
          {product.category}
        </p>
        <h3 className="mt-1.5 font-display text-lg text-ink dark:text-ink-dark">
          {product.name}
        </h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-ink dark:text-ink-dark font-medium">
            {formatINR(product.offerPrice)}
          </span>
          <span className="text-muted dark:text-muted-dark text-sm line-through">
            {formatINR(product.price)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
