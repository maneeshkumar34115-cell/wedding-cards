import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-04-21T00:00:00");

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-24 px-4 overflow-hidden bg-[radial-gradient(circle_at_top,_#4a0404_0%,_#1a0101_100%)] snap-section">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl gold-text-shimmer mb-6"
        >
          Save The Date
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-elegant text-xl md:text-2xl text-gold-light/90 mb-12 tracking-[0.2em]"
        >
          Tuesday, 21st April 2026
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="ornate-border rounded-2xl p-8 md:p-10 bg-white/5 backdrop-blur-md border-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 group-hover:bg-white/10 group-hover:border-gold/40 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                <span className="block font-display text-5xl md:text-7xl gold-text font-bold">
                  {String(u.value).padStart(2, "0")}
                </span>
                <span className="block text-xs md:text-sm text-gold-light/60 font-medium mt-4 uppercase tracking-[0.3em] font-body">
                  {u.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
