import { motion } from "framer-motion";

const events = [
  {
    icon: "🪔",
    title: "Tilak Ceremony",
    date: "Friday, 19th April 2026",
    time: "Evening",
    venue: "Family Residence",
  },
  {
    icon: "🎶",
    title: "Mehendi & Sangeet",
    date: "Sunday, 20th April 2026",
    time: "Evening",
    venue: "Family Residence",
  },
  {
    icon: "💒",
    title: "Wedding Ceremony",
    date: "Tuesday, 21st April 2026",
    time: "Auspicious Muhurat",
    venue: "Sahu Marriage Garden, Deva Dura Dairy ke Samne (Mathroni Road), Madawara, Lalitpur (U.P.)",
  },
];

const EventsTimeline = () => (
  <section id="events" className="py-20 px-4 indian-pattern-bg">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-display text-3xl md:text-5xl gold-text text-center mb-14"
    >
      Wedding Events
    </motion.h2>

    <div className="max-w-3xl mx-auto relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />

      {events.map((ev, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className={`relative flex flex-col md:flex-row items-center mb-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-card z-10" />

          <div className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-lg">
              <span className="text-4xl block mb-3">{ev.icon}</span>
              <h3 className="font-elegant text-xl font-bold text-secondary">{ev.title}</h3>
              <div className="h-px w-12 bg-primary/30 my-3 mx-auto md:mx-0" style={{ marginLeft: i % 2 === 0 ? "auto" : undefined }} />
              <p className="text-sm font-body text-foreground">{ev.date}</p>
              <p className="text-xs text-accent font-medium mt-1">⏰ {ev.time}</p>
              <p className="text-xs text-muted-foreground mt-2 font-body">{ev.venue}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EventsTimeline;
