"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import LensMotif from "@/components/ui/LensMotif";
import FloatingSparkles from "@/components/ui/FloatingSparkles";
import { siteConfig } from "@/lib/data";

const tickerItems = [
  "Free Eye Testing",
  "Same Day Delivery",
  "30+ Premium Brands",
  "Blue Light Protection",
  "Home Eye Checkup",
  "2,000+ Frames In-Store",
];

function SpinningBadge() {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current text-[8.5px] uppercase">
          {/* textLength = circle circumference (2π·37) so the text ring closes
              exactly on itself — no clipped words, no gap */}
          <textPath href="#badge-circle" textLength="232" lengthAdjust="spacingAndGlyphs">
            Vision Optics · Since {siteConfig.since} · Wagholi, Pune ·{" "}
          </textPath>
        </text>
      </svg>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-canvas sm:h-16 sm:w-16">
        <span className="font-display text-lg italic">VO</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Full-bleed portrait, blended into the canvas — no card, no frame */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-y-0 right-0 w-full lg:w-[58%]"
      >
        <div
          className="relative h-full w-full"
          style={{
            // Fade only the left edge to transparent — the photo itself stays
            // at full contrast, no colour wash over the subject.
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 32%, black 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 32%, black 100%)",
          }}
        >
          <Image
            src="/images/hero-portrait.jpg"
            alt="Portrait wearing a modern optical frame from Vision Optics"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-top opacity-25 lg:opacity-100"
          />
          {/* Soft ground fade so the portrait sits into the ticker strip */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-canvas to-transparent dark:from-canvas-dark" />
        </div>
      </motion.div>

      <FloatingSparkles />
      <LensMotif
        className="pointer-events-none absolute -right-28 top-16 hidden h-[380px] w-[380px] text-accent/20 lg:block"
        spin="slower"
      />

      {/* Spinning badge — sits on the seam between text and image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.9, duration: 0.7, type: "spring", stiffness: 120 }}
        className="absolute right-6 top-24 z-20 text-ink dark:text-ink-dark sm:right-14 sm:top-28 lg:left-[52%] lg:right-auto lg:top-[18%]"
      >
        <SpinningBadge />
      </motion.div>

      {/* Editorial copy — oversized, overlapping the portrait */}
      <div className="container-px relative z-10 mx-auto flex w-full max-w-container flex-1 items-center pt-32 pb-20 lg:pt-24">
        <motion.div style={{ y: textY, opacity }} className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="eyebrow mb-6"
          >
            Premium Eyewear · Wagholi, Pune
          </motion.p>

          <h1 className="heading-display font-medium leading-[0.98]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="block text-[13.5vw] sm:text-8xl lg:text-[7.5rem]"
            >
              See the
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="block text-[13.5vw] sm:text-8xl lg:text-[7.5rem]"
            >
              World{" "}
              <em className="text-accent">In Style.</em>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 max-w-md text-base sm:text-lg leading-relaxed text-muted dark:text-muted-dark"
          >
            Premium eyewear curated for every face, every lifestyle, and every
            personality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#collections" size="lg">
              Explore Collection
            </Button>
            <Button href="#appointment" size="lg" variant="outline">
              Book Eye Test
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 flex items-center gap-10"
          >
            <div>
              <p className="font-display text-3xl text-ink dark:text-ink-dark">2,000+</p>
              <p className="mt-1 text-xs uppercase tracking-wide2 text-muted dark:text-muted-dark">
                Frames in-store
              </p>
            </div>
            <div className="h-10 w-px bg-ink/15 dark:bg-white/15" />
            <div>
              <p className="font-display text-3xl text-ink dark:text-ink-dark">4.9 ★</p>
              <p className="mt-1 text-xs uppercase tracking-wide2 text-muted dark:text-muted-dark">
                482 Google reviews
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling ticker strip */}
      <div className="relative z-10 border-y border-line dark:border-line-dark bg-canvas/80 dark:bg-canvas-dark/80 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-0">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {tickerItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-6 pr-6 text-xs uppercase tracking-wide3 text-muted dark:text-muted-dark whitespace-nowrap"
                >
                  {item}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
