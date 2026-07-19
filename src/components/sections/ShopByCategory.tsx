"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ShopByCategory() {
  return (
    <section className="section-py">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Frames for every chapter"
          description="From boardroom to campus to nap time — a collection tailored to how each face actually lives."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={cat.href}
                className="group relative block h-[440px] overflow-hidden rounded-xl shadow-subtle"
              >
                <Image
                  src={cat.image}
                  alt={`${cat.title} eyewear collection`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/80" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="font-display text-3xl text-white">{cat.title}</p>
                  <p className="mt-1.5 text-sm text-white/75">{cat.subtitle}</p>
                  <div className="mt-5 flex translate-y-4 items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-xs uppercase tracking-wide2 text-ink opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    Shop {cat.title}
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
