"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard, { type Product } from "@/components/ui/ProductCard";
import QuickViewModal from "@/components/ui/QuickViewModal";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/data";

export default function FeaturedCollection() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <section id="collections" className="section-py bg-beige-soft/30 dark:bg-white/[0.015]">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          eyebrow="Featured Collection"
          title="This season's edit"
          description="A tightly curated grid — the frames our optometrists reach for first."
        />

        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onQuickView={setActiveProduct}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button variant="outline" size="lg" href="#collections">
            View Full Collection
          </Button>
        </div>
      </div>

      <QuickViewModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </section>
  );
}
