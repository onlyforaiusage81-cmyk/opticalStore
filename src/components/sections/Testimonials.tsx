"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials, siteConfig } from "@/lib/data";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" className="section-py bg-beige-soft/30 dark:bg-white/[0.015]">
      <div className="container-px mx-auto max-w-container">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-0">
          <SectionHeading
            align="left"
            eyebrow="Testimonials"
            title="What Wagholi says about us"
            className="sm:max-w-lg"
          />
          <div className="flex items-center gap-2 rounded-full border border-line dark:border-line-dark bg-white/60 dark:bg-white/[0.03] px-5 py-3">
            <span className="font-display text-lg text-ink dark:text-ink-dark">4.9</span>
            <div className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-xs text-muted dark:text-muted-dark">482 Google reviews</span>
          </div>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="flex h-full flex-col rounded-xl border border-line dark:border-line-dark bg-white/60 dark:bg-white/[0.03] p-7 shadow-subtle"
                >
                  <Quote size={26} className="text-accent/50" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/85 dark:text-ink-dark/85">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-display text-sm text-ink dark:text-ink-dark">{t.name}</p>
                      <p className="text-xs text-muted dark:text-muted-dark">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={scrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:bg-accent hover:text-canvas hover:border-accent transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === selectedIndex ? "w-6 bg-accent" : "w-1.5 bg-ink/20 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={scrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:bg-accent hover:text-canvas hover:border-accent transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-muted dark:text-muted-dark">
          <a href={siteConfig.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            Leave us a Google review →
          </a>
        </p>
      </div>
    </section>
  );
}
