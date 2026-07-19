"use client";

import { Sparkle } from "lucide-react";

const sparkles = [
  { top: "12%", left: "8%", size: 14, delay: "0s", floatClass: "animate-float" },
  { top: "22%", left: "88%", size: 10, delay: "1.2s", floatClass: "animate-float-slow" },
  { top: "68%", left: "4%", size: 12, delay: "0.6s", floatClass: "animate-float-slow" },
  { top: "78%", left: "92%", size: 16, delay: "1.8s", floatClass: "animate-float" },
  { top: "45%", left: "95%", size: 8, delay: "0.3s", floatClass: "animate-float-slow" },
];

export default function FloatingSparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className={`absolute text-accent/60 ${s.floatClass}`}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          <span className="block animate-sparkle" style={{ animationDelay: s.delay }}>
            <Sparkle size={s.size} strokeWidth={1.25} fill="currentColor" />
          </span>
        </span>
      ))}
    </div>
  );
}
