import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-24 overflow-hidden border-t border-border bg-[oklch(0.14_0.005_260)] text-[oklch(0.98_0.02_90)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_300px_at_20%_0%,color-mix(in_oklab,var(--brand-orange)_35%,transparent),transparent_60%),radial-gradient(500px_300px_at_90%_10%,color-mix(in_oklab,var(--brand-gold)_25%,transparent),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Manekchowk Pizza Sandwich [Manekchowk Wala] Logo" className="h-10 w-auto object-contain" />
              <div>
                <p className="font-display text-base font-extrabold leading-tight">
                  Manekchowk Pizza Sandwich <br />
                  <span className="text-gradient-brand text-xs">[Manekchowk Wala]</span>
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">Since 2001</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm text-white/70">
              Ahmedabad's most loved sandwich experience. Fresh ingredients. Premium taste. Fast service.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition-all hover:bg-gradient-brand hover:border-transparent"
                  aria-label="Social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/80">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/menu", label: "Menu" },
                { to: "/story", label: "Our Story" },
                { to: "/franchise", label: "Franchise" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 transition hover:text-[color:var(--brand-gold)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/80">
              Branches
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {["KK Nagar Road", "Zydus Thaltej", "Ghatlodia", "Anand Nagar Road", "Vandematram", "Gota", "Science City", "New CG Road"].map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/80">
              Newsletter
            </h4>
            <p className="mt-5 text-sm text-white/70">
              Get new drops, offers and grand-opening invites in your inbox.
            </p>
            <form className="mt-5 flex overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                className="grid place-items-center bg-gradient-brand px-4 text-white"
                aria-label="Subscribe"
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Manekchowk Pizza Sandwich [Manekchowk Wala]. Crafted in Ahmedabad.</p>
          <p>Made with ♥ for sandwich lovers.</p>
        </div>
      </div>
    </motion.footer>
  );
}
