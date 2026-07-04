import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp, Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919825000001"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-[#25D366]/40"
      >
        <MessageCircle className="size-6" />
        <span className="absolute right-full mr-4 hidden w-max rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 md:block">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919825000001"
        aria-label="Call Now"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[color:var(--brand-orange)] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-[color:var(--brand-orange)]/40"
      >
        <Phone className="size-5" />
        <span className="absolute right-full mr-4 hidden w-max rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Call Now
        </span>
      </a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group relative flex size-12 items-center justify-center rounded-full bg-card border border-border shadow-lg transition-transform hover:scale-110 hover:bg-muted"
          >
            <ArrowUp className="size-5 text-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
