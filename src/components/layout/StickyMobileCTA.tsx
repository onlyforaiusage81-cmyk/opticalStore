"use client";

import { Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex sm:hidden border-t border-line dark:border-line-dark bg-canvas/95 dark:bg-canvas-dark/95 backdrop-blur-md">
      <a
        href={`tel:${siteConfig.phoneHref}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm text-ink dark:text-ink-dark border-r border-line dark:border-line-dark"
      >
        <Phone size={16} /> Call Now
      </a>
      <a
        href="#appointment"
        className="flex flex-1 items-center justify-center gap-2 bg-ink dark:bg-canvas text-canvas dark:text-ink py-3.5 text-sm"
      >
        <CalendarCheck size={16} /> Book Eye Test
      </a>
    </div>
  );
}
