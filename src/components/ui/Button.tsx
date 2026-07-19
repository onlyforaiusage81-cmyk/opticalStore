"use client";

import { ButtonHTMLAttributes, forwardRef, MouseEvent, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonStyles = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 rounded font-body font-medium tracking-wide transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-canvas dark:bg-canvas-dark dark:text-ink-dark hover:bg-accent hover:text-canvas shadow-subtle hover:shadow-card-hover",
        outline:
          "border border-ink/20 dark:border-ink-dark/20 text-ink dark:text-ink-dark hover:bg-beige hover:border-beige",
        ghost: "text-ink dark:text-ink-dark hover:bg-ink/5 dark:hover:bg-white/5",
        accent: "bg-accent text-canvas hover:bg-beige hover:text-ink",
      },
      size: {
        sm: "text-xs px-4 py-2",
        md: "text-sm px-6 py-3.5",
        lg: "text-sm px-8 py-4.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, onClick, ...props }, ref) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const ripple: Ripple = {
        x: e.clientX - rect.left - size / 2,
        y: e.clientY - rect.top - size / 2,
        size,
        id: Date.now(),
      };
      setRipples((prev) => [...prev, ripple]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 650);
      onClick?.(e);
    };

    const content = (
      <>
        {children}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="pointer-events-none absolute rounded-full bg-white/30 animate-[ripple_0.65s_ease-out]"
            style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          />
        ))}
        <style jsx>{`
          @keyframes ripple {
            from {
              transform: scale(0);
              opacity: 0.55;
            }
            to {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}</style>
      </>
    );

    if (href) {
      return (
        <Link href={href} className={cn(buttonStyles({ variant, size }), className)}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size }), className)}
        onClick={handleClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonStyles };
