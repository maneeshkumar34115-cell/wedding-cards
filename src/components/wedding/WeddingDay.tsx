import { motion } from "framer-motion";

const events = [
  {
    icon: "🪔",
    title: "Hastar Tika Ceremony",
    subtitle: "Traditional Blessing Ritual",
    time: "Morning",
    description: "The sacred tilak ceremony marks the formal beginning of wedding celebrations.",
  },
  {
    icon: "🙏",
    title: "Panigrahan Ritual",
    subtitle: "Sacred Wedding Ceremony",
    time: "Auspicious Muhurat",
    description: "The holy union under the wedding mandap with Vedic mantras and sacred fire.",
  },
  {
    icon: "🎉",
    title: "Reception",
    subtitle: "Grand Celebration",
    time: "Evening",
    description: "A joyous celebration with family and friends, feasting and blessings.",
  },
];

const WeddingDay = () => (
  <section id="wedding-day" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden bg-[radial-gradient(circle_at_top,_#4a0404_0%,_#1a0101_100%)] snap-section">
    {/* BG ornament */}
    <div className="absolute inset-0 bokeh-overlay opacity-10" />

    <div className="relative z-10 w-full max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-6xl gold-text-shimmer text-center mb-6"
      >
        Wedding Program
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mb-20"
      >
        <p className="font-elegant text-xl md:text-2xl text-gold-light tracking-[0.2em] uppercase">Tuesday, 21st April 2026</p>
        <div className="h-px w-24 bg-primary/30 mx-auto mt-4" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-primary via-primary/20 to-primary -translate-x-1/2 hidden md:block"
        />

        {events.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.25 }}
            className={`relative flex flex-col md:flex-row items-center mb-20 last:mb-0 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gold-royal border-4 border-maroon-night z-10 shadow-[0_0_20px_rgba(212,175,55,0.6)]" />

            <div className={`w-full md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
              <div className="ornate-border rounded-2xl p-8 md:p-10 bg-white/5 backdrop-blur-md border-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:bg-white/10 transition-all duration-300">
                <h3 className="font-display text-2xl md:text-3xl font-bold gold-text-shimmer">{ev.title}</h3>
                <p className="font-script text-xl text-primary mt-2">{ev.subtitle}</p>
                <div className={`h-px w-16 bg-primary/30 my-6 mx-auto ${i % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"}`} />
                <p className="text-sm text-gold-light/60 font-medium font-body mb-3 uppercase tracking-widest">{ev.time}</p>
                <p className="text-base text-gold-light/90 font-body leading-relaxed">{ev.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WeddingDay;
