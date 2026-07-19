"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X, Moon, Sun } from "lucide-react";
import { navLinks, megaMenu, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { useCartWishlist } from "@/components/providers/CartWishlistProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import SearchModal from "./SearchModal";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { wishlistCount, cartCount } = useCartWishlist();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || activeMega !== null;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "bg-canvas/90 dark:bg-canvas-dark/90 backdrop-blur-md shadow-subtle"
            : "bg-transparent"
        )}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="container-px mx-auto flex max-w-container items-center justify-between py-5">
          <Link href="#home" className="flex items-center gap-2.5 shrink-0">
            <span
              className={cn(
                "font-display text-2xl tracking-wide transition-colors",
                solid ? "text-ink dark:text-ink-dark" : "text-ink dark:text-white"
              )}
            >
              Vision <span className="text-accent italic">Optics</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveMega(link.mega ?? null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm tracking-wide transition-colors hover:text-accent",
                    solid ? "text-ink dark:text-ink-dark" : "text-ink dark:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className={cn(
                "hidden sm:flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-accent",
                solid ? "text-ink dark:text-ink-dark" : "text-ink dark:text-white"
              )}
            >
              <Search size={19} />
            </button>
            <button
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className={cn(
                "hidden sm:flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-accent",
                solid ? "text-ink dark:text-ink-dark" : "text-ink dark:text-white"
              )}
            >
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <Link
              href="#wishlist"
              aria-label="Wishlist"
              className={cn(
                "relative hidden sm:flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-accent",
                solid ? "text-ink dark:text-ink-dark" : "text-ink dark:text-white"
              )}
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-canvas">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              href="#cart"
              aria-label="Cart"
              className={cn(
                "relative hidden sm:flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-accent",
                solid ? "text-ink dark:text-ink-dark" : "text-ink dark:text-white"
              )}
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-canvas">
                  {cartCount}
                </span>
              )}
            </Link>

            <Button href="#appointment" size="sm" className="hidden md:inline-flex">
              Book Eye Test
            </Button>

            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full lg:hidden",
                solid ? "text-ink dark:text-ink-dark" : "text-ink dark:text-white"
              )}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <AnimatePresence>
          {activeMega && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block border-t border-line dark:border-line-dark bg-canvas/95 dark:bg-canvas-dark/95 backdrop-blur-md"
            >
              <div className="container-px mx-auto grid max-w-container grid-cols-3 gap-10 py-10">
                {megaMenu[activeMega as keyof typeof megaMenu].columns.map((col) => (
                  <div key={col.heading}>
                    <p className="eyebrow mb-4">{col.heading}</p>
                    <ul className="space-y-3">
                      {col.links.map((l) => (
                        <li key={l}>
                          <Link
                            href="#collections"
                            className="font-display text-lg text-ink dark:text-ink-dark hover:text-accent transition-colors"
                          >
                            {l}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="relative overflow-hidden rounded-lg">
                  <div className="relative h-full min-h-[200px]">
                    <Image
                      src={megaMenu[activeMega as keyof typeof megaMenu].image}
                      alt={megaMenu[activeMega as keyof typeof megaMenu].imageCaption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="absolute bottom-3 left-4 text-sm text-white drop-shadow">
                    {megaMenu[activeMega as keyof typeof megaMenu].imageCaption}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-ink/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-canvas dark:bg-canvas-dark p-8 shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl text-ink dark:text-ink-dark">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="text-ink dark:text-ink-dark"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-2xl text-ink dark:text-ink-dark hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-10 flex items-center gap-4 text-ink dark:text-ink-dark">
                <Heart size={20} />
                <span className="text-sm">{wishlistCount} in wishlist</span>
              </div>
              <div className="mt-3 flex items-center gap-4 text-ink dark:text-ink-dark">
                <ShoppingBag size={20} />
                <span className="text-sm">{cartCount} in cart</span>
              </div>
              <Button href="#appointment" className="mt-10 w-full" onClick={() => setMobileOpen(false)}>
                Book Eye Test
              </Button>
              <p className="mt-6 text-sm text-muted dark:text-muted-dark">{siteConfig.phoneDisplay}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
