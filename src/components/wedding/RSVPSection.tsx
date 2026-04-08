import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, PartyPopper } from "lucide-react";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "1",
    attending: "yes",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("wedding-rsvp") || "[]");
    existing.push({ ...form, timestamp: new Date().toISOString() });
    localStorage.setItem("wedding-rsvp", JSON.stringify(existing));
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl gold-text text-center mb-12"
      >
        RSVP
      </motion.h2>

      <div className="max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border-2 border-primary/30 rounded-2xl p-10 shadow-xl text-center"
            >
              <PartyPopper className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="font-display text-2xl text-secondary font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Your response has been recorded. We look forward to celebrating with you!</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onSubmit={handleSubmit}
              className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/40 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                <input
                  type="tel"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/40 outline-none"
                  placeholder="10-digit number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Number of Guests</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/40 outline-none"
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1)}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <fieldset>
                <legend className="block text-sm font-medium text-foreground mb-2">Will you attend?</legend>
                <div className="flex gap-4">
                  {["yes", "no", "maybe"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value={opt}
                        checked={form.attending === opt}
                        onChange={() => setForm({ ...form, attending: opt })}
                        className="accent-primary"
                      />
                      <span className="capitalize text-sm text-foreground">{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message / Wishes</label>
                <textarea
                  maxLength={500}
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/40 outline-none resize-none"
                  placeholder="Your blessings..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full gold-gradient text-primary-foreground font-semibold py-3 rounded-full flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                Send Your Blessings
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVPSection;
