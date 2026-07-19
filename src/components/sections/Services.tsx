"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import { iconMap } from "@/lib/icon-map";

export default function Services() {
  return (
    <section id="services" className="section-py">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          eyebrow="Our Services"
          title="Beyond the perfect pair"
          description="A full-service optical practice — testing, fitting, and repair, under one roof."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-xl border border-line dark:border-line-dark bg-white/50 dark:bg-white/[0.02] p-8 shadow-subtle transition-shadow hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-canvas transition-colors group-hover:bg-accent">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink dark:text-ink-dark">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
