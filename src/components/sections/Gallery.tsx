"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="section-py">
      <div className="container-px mx-auto max-w-container">
        <SectionHeading
          eyebrow="Gallery"
          title="From our showroom floor"
          description="A closer look at the frames, fittings, and moments that fill our Wagholi store."
        />

        <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative mb-4 overflow-hidden rounded-lg ${
                img.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt="Vision Optics eyewear photography"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-400 group-hover:bg-ink/30 group-hover:opacity-100">
                <ZoomIn size={22} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://instagram.com/visionoptics.wagholi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink dark:text-ink-dark hover:text-accent transition-colors"
          >
            <Instagram size={16} /> Follow @visionoptics.wagholi
          </a>
        </div>
      </div>
    </section>
  );
}
