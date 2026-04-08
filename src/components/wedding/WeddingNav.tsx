import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#invitation", label: "Invitation" },
  { href: "#couple", label: "Couple" },
  { href: "#countdown", label: "Date" },
  { href: "#pre-wedding", label: "Events" },
  { href: "#venue", label: "Venue" },
  { href: "#closing", label: "RSVP" },
];

const WeddingNav = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-primary/20">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="font-display text-xl gold-text-shimmer tracking-widest font-bold">SHAILENDRA & NIKITA</span>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="text-xs text-gold-light/70 hover:text-gold-light transition-colors font-body uppercase tracking-[0.2em] font-medium">
              {l.label}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#1a0101]/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
          >
            {links.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="block w-full text-center px-6 py-5 text-sm text-gold-light/80 hover:bg-white/5 transition-colors font-body uppercase tracking-widest">
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default WeddingNav;
