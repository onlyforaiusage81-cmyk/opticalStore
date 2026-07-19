"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LensMotif from "@/components/ui/LensMotif";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-canvas dark:bg-canvas-dark"
        >
          <div className="relative flex h-24 w-24 items-center justify-center">
            <LensMotif className="absolute h-24 w-24 text-accent" spin="slow" />
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display text-sm tracking-wide2 text-ink dark:text-ink-dark"
            >
              VO
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
