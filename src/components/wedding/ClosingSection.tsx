import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Share2, Copy, Send, PartyPopper, X, Link2 } from "lucide-react";
import Diya from "./Diya";

const ClosingSection = () => {
  const [showRSVP, setShowRSVP] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "1",
    attending: "yes",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("wedding-rsvp") || "[]");
    existing.push({ ...form, timestamp: new Date().toISOString() });
    localStorage.setItem("wedding-rsvp", JSON.stringify(existing));
    setSubmitted(true);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      "You're invited to the wedding of Shailendra Singh & Nikita! 💒\n📅 Tuesday, 21st April 2026\n📍 Sahu Marriage Garden, Madawara, Lalitpur\n\nJoin us for this celebration!"
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="closing" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-[radial-gradient(circle_at_bottom,_#4a0404_0%,_#1a0101_100%)] snap-section">
      <div className="absolute inset-0 bokeh-overlay opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-3xl md:text-5xl text-gold-light mb-8"
        >
          We look forward to your gracious presence
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12"
        />

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <p className="font-script text-5xl md:text-8xl gold-text-shimmer drop-shadow-lg">Shailendra</p>
          <span className="text-accent text-4xl md:text-5xl animate-heartbeat inline-block my-4">♥</span>
          <p className="font-script text-5xl md:text-8xl gold-text-shimmer drop-shadow-lg">Nikita</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="font-display text-base md:text-xl text-primary tracking-[0.4em] uppercase mb-12"
        >
          21st April 2026
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="font-display text-3xl md:text-5xl gold-text-shimmer mb-12"
        >
          Thank You
        </motion.h3>

        {/* Blessing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <p className="font-elegant text-lg md:text-2xl text-gold-light/90 leading-relaxed italic border-y border-primary/10 py-8">
            "Two hearts are about to unite in celebration,
            <br />we will be waiting for you,
            <br />it is the occasion of a wedding!"
          </p>
        </motion.div>



        {/* Footnotes */}
        <div className="h-px w-full bg-primary/10 mb-8" />
        <p className="font-elegant text-lg text-gold-light font-bold mb-3 tracking-wider">
          Hearty Invitation from the Niranjan Family
        </p>
        <p className="text-xs text-gold-light/40 font-body tracking-[0.2em] uppercase">
          © 2026 Shailendra & Nikita Wedding
        </p>
      </div>

      {/* RSVP Modal */}
      <AnimatePresence>
        {showRSVP && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowRSVP(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="ornate-border-strong rounded-2xl p-6 md:p-10 bg-[#2d0101]/95 border-gold/30 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-[0_0_100px_rgba(212,175,55,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl gold-text-shimmer">RSVP</h3>
                <button onClick={() => setShowRSVP(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <PartyPopper className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h4 className="font-display text-xl text-secondary font-bold mb-2">Thank You!</h4>
                    <p className="text-sm text-muted-foreground font-body">Your response has been recorded. We look forward to celebrating with you!</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-medium text-gold-light/60 mb-2 font-body uppercase tracking-widest">Full Name *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-black/20 text-gold-light text-sm focus:ring-2 focus:ring-primary/40 outline-none font-body transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gold-light/60 mb-2 font-body uppercase tracking-widest">Phone *</label>
                      <input required type="tel" maxLength={10} pattern="[0-9]{10}" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                        className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-black/20 text-gold-light text-sm focus:ring-2 focus:ring-primary/40 outline-none font-body transition-all" placeholder="10-digit number" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gold-light/60 mb-2 font-body uppercase tracking-widest">Guests</label>
                        <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-black/20 text-gold-light text-sm focus:ring-2 focus:ring-primary/40 outline-none font-body appearance-none">
                          {Array.from({ length: 10 }, (_, i) => <option key={i + 1} value={String(i + 1)} className="bg-maroon-night">{i + 1}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gold-light/60 mb-2 font-body uppercase tracking-widest">Attending?</label>
                        <select value={form.attending} onChange={(e) => setForm({ ...form, attending: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-black/20 text-gold-light text-sm focus:ring-2 focus:ring-primary/40 outline-none font-body appearance-none">
                          <option value="yes" className="bg-maroon-night">Yes</option>
                          <option value="no" className="bg-maroon-night">No</option>
                          <option value="maybe" className="bg-maroon-night">Maybe</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gold-light/60 mb-2 font-body uppercase tracking-widest">Message</label>
                      <textarea maxLength={200} rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-black/20 text-gold-light text-sm focus:ring-2 focus:ring-primary/40 outline-none resize-none font-body transition-all" placeholder="Your blessings..." />
                    </div>
                    <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full bg-gold-royal text-maroon-night font-bold py-4 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] text-sm">
                      <Send className="w-4 h-4" /> Send Your Blessings
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClosingSection;
