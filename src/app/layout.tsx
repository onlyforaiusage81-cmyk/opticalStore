import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import { CartWishlistProvider } from "@/components/providers/CartWishlistProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BackToTop from "@/components/layout/BackToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.visionoptics.in"),
  title: {
    default: `${siteConfig.name} | Premium Eyewear in Wagholi, Pune`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Vision Optics is a premium eyewear showroom in Wagholi, Pune, offering designer frames, sunglasses, contact lenses, free eye testing, and expert optometry for professionals, students, families, and kids.",
  keywords: [
    "optical shop Wagholi",
    "eyewear store Pune",
    "premium spectacles Wagholi",
    "eye test Wagholi Pune",
    "designer sunglasses Pune",
    "Vision Optics",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.visionoptics.in",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Premium Eyewear in Wagholi, Pune`,
    description:
      "Designer frames, sunglasses & expert eye care curated for every face, every lifestyle, and every personality. Visit our Wagholi showroom today.",
    images: [
      {
        url: "/images/hero-portrait.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Eyewear in Wagholi, Pune`,
    description:
      "Designer frames, sunglasses & expert eye care in Wagholi, Pune.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Optician", "LocalBusiness"],
      "@id": "https://www.visionoptics.in/#business",
      name: siteConfig.name,
      image: "https://www.visionoptics.in/images/hero-portrait.jpg",
      description:
        "Premium eyewear showroom offering designer frames, sunglasses, contact lenses, and free eye testing in Wagholi, Pune.",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.line1,
        addressLocality: "Wagholi, Pune",
        addressRegion: "Maharashtra",
        postalCode: siteConfig.address.pincode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.5793,
        longitude: 73.9808,
      },
      telephone: siteConfig.phoneDisplay,
      priceRange: "₹₹",
      url: "https://www.visionoptics.in",
      openingHoursSpecification: siteConfig.hours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "482",
      },
      sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-canvas dark:bg-canvas-dark text-ink dark:text-ink-dark overflow-x-hidden">
        <ThemeProvider>
          <CartWishlistProvider>
            <CustomCursor />
            {children}
            <WhatsAppButton />
            <BackToTop />
          </CartWishlistProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
