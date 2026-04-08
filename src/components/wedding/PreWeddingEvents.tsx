import { motion } from "framer-motion";

const preEvents = [
  {
    date: "Sunday, 19th April 2026",
    events: [
      { icon: "🙏", title: "Shri Ganesh Pujan", time: "Morning", desc: "Sacred prayers to Lord Ganesha for blessings and an auspicious start." },
      { icon: "🪔", title: "Tel Ceremony", time: "Afternoon", desc: "Traditional oil ceremony symbolizing purification and good fortune." },
    ],
  },
  {
    date: "Monday, 20th April 2026",
    events: [
      { icon: "🎶", title: "Mehendi & Sangeet", time: "Evening", desc: "A joyous evening of music, dance and beautiful henna designs." },
      { icon: "🏛️", title: "Mandap Ceremony", time: "Evening", desc: "The sacred wedding canopy is decorated and blessed for the ceremony." },
    ],
  },
];

const PreWeddingEvents = () => (
  <section id="pre-wedding" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-[radial-gradient(circle_at_bottom,_#4a0404_0%,_#1a0101_100%)] snap-section">
    {/* BG ornament */}
    <div className="absolute inset-0 bokeh-overlay opacity-15" />

    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-4xl md:text-6xl gold-text-shimmer text-center mb-16"
    >
      Pre-Wedding Ceremonies
    </motion.h2>

    <div className="max-w-5xl mx-auto w-full space-y-16">
      {preEvents.map((day, di) => (
        <motion.div
          key={di}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: di * 0.2 }}
        >
          {/* Date header */}
          <div className="flex items-center gap-6 mb-10">
            <div className="h-px flex-1 bg-primary/30" />
            <span className="font-display text-lg md:text-xl text-gold-light tracking-[0.3em] font-bold uppercase">{day.date}</span>
            <div className="h-px flex-1 bg-primary/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {day.events.map((ev, ei) => (
              <motion.div
                key={ei}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: di * 0.2 + ei * 0.15 }}
                className="ornate-border rounded-2xl p-8 bg-white/5 backdrop-blur-md border-gold/10 hover:border-gold/30 transition-all duration-300 group shadow-[0_0_20px_rgba(212,175,55,0.05)]"
              >
                <h4 className="font-display text-xl md:text-2xl font-bold gold-text">{ev.title}</h4>
                <p className="text-xs text-gold-light/60 font-medium font-body mt-2 mb-4 uppercase tracking-[0.2em]">{ev.time}</p>
                <div className="h-px w-10 bg-primary/20 mb-4" />
                <p className="text-base text-gold-light/90 font-body leading-relaxed">{ev.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PreWeddingEvents;
