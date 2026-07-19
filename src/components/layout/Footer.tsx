import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line dark:border-line-dark bg-ink dark:bg-panel-dark text-canvas/80">
      <div className="container-px mx-auto max-w-container py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl text-canvas">
              Vision <span className="italic text-accent-light">Optics</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-canvas/60">
              A premium eyewear showroom in Wagholi, Pune — curating designer
              frames and clinical eye care since {siteConfig.since}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-accent hover:text-accent transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wide2 text-accent-light">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-canvas/70 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wide2 text-accent-light">Collections</h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.collections.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-canvas/70 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wide2 text-accent-light">Visit Us</h4>
            <ul className="mt-5 space-y-4 text-sm text-canvas/70">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-accent transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {siteConfig.hours.map((h) => (
                    <span key={h.label} className="block">
                      {h.label}: {h.opens} – {h.closes}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-lg border border-white/10">
          <iframe
            src={siteConfig.mapEmbedSrc}
            width="100%"
            height="260"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vision Optics location in Wagholi, Pune"
            className="grayscale-[40%] contrast-[1.05]"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-canvas/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Vision Optics, Wagholi. All rights reserved.</p>
          <p>Designed with care for every pair of eyes in Pune.</p>
        </div>
      </div>
    </footer>
  );
}
