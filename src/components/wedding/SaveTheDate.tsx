import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-04-21T00:00:00");

const SaveTheDate = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

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
    <section id="save-the-date" className="py-20 px-4 indian-pattern-bg">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-5xl gold-text mb-8">Save The Date</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border-2 border-primary/30 rounded-xl p-6 shadow-lg"
            >
              <span className="block font-display text-4xl md:text-5xl text-secondary font-bold">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="block text-sm text-primary font-medium mt-1">{u.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="font-elegant text-xl md:text-2xl text-foreground">Tuesday, 21st April 2026</p>
      </motion.div>
    </section>
  );
};

export default SaveTheDate;
