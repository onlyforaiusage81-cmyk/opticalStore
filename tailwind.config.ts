import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FAF8F5",
          dark: "#15120E",
        },
        ink: {
          DEFAULT: "#222222",
          dark: "#F3EFE8",
        },
        muted: {
          DEFAULT: "#6F6F6F",
          dark: "#A79C8D",
        },
        accent: {
          DEFAULT: "#B88652",
          light: "#D2A876",
          dark: "#C9975F",
        },
        beige: {
          DEFAULT: "#EDE1CC",
          soft: "#F3EADB",
        },
        line: {
          DEFAULT: "rgba(34,34,34,0.08)",
          dark: "rgba(243,239,232,0.1)",
        },
        panel: {
          dark: "#1C1812",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "18px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        sm: "12px",
      },
      boxShadow: {
        subtle: "0 2px 24px rgba(34,34,34,0.06)",
        card: "0 8px 40px rgba(34,34,34,0.08)",
        "card-hover": "0 20px 60px rgba(34,34,34,0.14)",
        "subtle-dark": "0 8px 40px rgba(0,0,0,0.4)",
      },
      letterSpacing: {
        wide2: "0.12em",
        wide3: "0.2em",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        sparkle: "sparkle 3.2s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
