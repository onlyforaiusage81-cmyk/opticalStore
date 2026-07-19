import { cn } from "@/lib/utils";

interface LensMotifProps {
  className?: string;
  spin?: "slow" | "slower" | "none";
}

/**
 * Signature decorative motif: a thin aperture / phoropter-dial ring with
 * tick marks, echoing the optometrist's lens wheel. Used throughout as the
 * brand's recurring visual signature instead of generic blob shapes.
 */
export default function LensMotif({ className, spin = "slow" }: LensMotifProps) {
  const spinClass =
    spin === "slow" ? "animate-spin-slow" : spin === "slower" ? "animate-spin-slower" : "";

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={cn(spinClass, className)}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 360) / 36;
        const isMajor = i % 3 === 0;
        const outer = 98;
        const inner = isMajor ? 88 : 93;
        const rad = (angle * Math.PI) / 180;
        const round = (n: number) => Math.round(n * 100) / 100;
        const x1 = round(100 + outer * Math.cos(rad));
        const y1 = round(100 + outer * Math.sin(rad));
        const x2 = round(100 + inner * Math.cos(rad));
        const y2 = round(100 + inner * Math.sin(rad));
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={isMajor ? 1.1 : 0.6}
            opacity={isMajor ? 0.7 : 0.4}
          />
        );
      })}
      <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
