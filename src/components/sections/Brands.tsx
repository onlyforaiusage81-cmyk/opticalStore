"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { brands } from "@/lib/data";

export default function Brands() {
  return (
    <section id="brands" className="section-py">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          eyebrow="Popular Brands"
          title="The names we trust on our shelves"
          description="Authorised retailer for every brand below — genuine frames, full manufacturer warranty."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-28 items-center justify-center rounded-lg border border-line dark:border-line-dark bg-white px-8 shadow-subtle"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                loading="lazy"
                className="max-h-14 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
