import { motion } from "framer-motion";
import { MapPin, Navigation, Car, UtensilsCrossed, Sparkles, Building } from "lucide-react";

const amenities = [
  { icon: Car, label: "Parking Available" },
  { icon: UtensilsCrossed, label: "Dining Facilities" },
  { icon: Sparkles, label: "Traditional Decor" },
  { icon: Building, label: "Spacious Hall" },
];

const VenueSection = () => (
  <section id="venue" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-[radial-gradient(circle_at_bottom,_#4a0404_0%,_#1a0101_100%)] snap-section">
    {/* BG Ornament */}
    <div className="absolute inset-0 bokeh-overlay opacity-15" />

    <div className="relative z-10 max-w-4xl mx-auto w-full">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-6xl gold-text-shimmer text-center mb-16"
      >
        Wedding Venue
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="ornate-border-strong rounded-3xl p-8 md:p-16 bg-white/5 backdrop-blur-md border-gold/20 text-center shadow-[0_0_100px_rgba(212,175,55,0.1)]"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <MapPin className="w-10 h-10 text-primary animate-bounce-slow" />
          <h3 className="font-display text-4xl md:text-6xl gold-text-shimmer">Sahu Marriage Garden</h3>
        </div>

        <div className="text-lg md:text-xl text-gold-light/90 space-y-2 mb-12 font-elegant tracking-wide">
          <p>In front of Deva Milk Dairy</p>
          <p>Mahroni Road, Madawara</p>
          <p>District Lalitpur, Uttar Pradesh</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {amenities.map(({ label }) => (
            <div key={label} className="flex flex-col items-center justify-center gap-3 text-sm text-gold-light/60 bg-white/5 rounded-2xl px-4 py-6 border border-gold/10 hover:border-gold/30 transition-all group">
              <span className="font-body uppercase tracking-widest text-[10px] md:text-xs text-center">{label}</span>
            </div>
          ))}
        </div>



      </motion.div>
    </div>
  </section>
);

export default VenueSection;
