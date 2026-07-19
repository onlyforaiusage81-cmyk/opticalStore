"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";
import { iconMap } from "@/lib/icon-map";

export default function FeatureStrip() {
  return (
    <section id="features" className="relative -mt-1 border-y border-line dark:border-line-dark bg-beige-soft/40 dark:bg-white/[0.02]">
      <div className="container-px mx-auto grid max-w-container grid-cols-2 gap-6 py-12 sm:py-14 lg:grid-cols-4 lg:gap-10">
        {features.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-start gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 text-accent">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base sm:text-lg text-ink dark:text-ink-dark">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted dark:text-muted-dark">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
