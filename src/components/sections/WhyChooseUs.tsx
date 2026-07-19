"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import LensMotif from "@/components/ui/LensMotif";
import { whyChooseUs } from "@/lib/data";
import { iconMap } from "@/lib/icon-map";

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-py bg-beige-soft/30 dark:bg-white/[0.015]">
      <div className="container-px mx-auto grid max-w-container grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-lg overflow-hidden rounded-2xl shadow-card-hover">
            <Image
              src="/images/about-optometrist.jpg"
              alt="Vision Optics optometrist during a consultation"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <LensMotif
            className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 text-accent/40"
            spin="slower"
          />
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title="Care that goes beyond the counter"
            description="Fifteen years in Wagholi taught us that eyewear is a clinical decision first, a style decision second."
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-lg border border-line dark:border-line-dark bg-white/50 dark:bg-white/[0.02] p-6 shadow-subtle"
                >
                  <Icon size={22} strokeWidth={1.5} className="text-accent" />
                  <h3 className="mt-4 font-display text-lg text-ink dark:text-ink-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
