import { motion } from "framer-motion";

const CoupleCard = ({
  name,
  role,
  parents,
  village,
  direction,
  image,
}: {
  name: string;
  role: string;
  parents: string[];
  village: string;
  direction: "left" | "right";
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: direction === "left" ? -100 : 100, rotateY: direction === "left" ? -15 : 15 }}
    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="flex-1 w-full max-w-lg"
  >
    <div className="ornate-border-strong rounded-3xl p-8 md:p-12 bg-white/5 backdrop-blur-md border-gold/20 text-center shadow-[0_0_50px_rgba(212,175,55,0.1)] hover:bg-white/10 transition-all duration-300">
      {/* Profile Image */}
      <div className="relative mb-8 flex justify-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <div className="absolute inset-0 rounded-full border-2 border-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full h-full rounded-full overflow-hidden border-2 border-gold/20"
          >
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3 font-body font-bold">{role}</p>

      <h3 className="font-script text-4xl md:text-6xl gold-text-shimmer mb-4">{name}</h3>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 my-6">
        <div className="h-px w-12 bg-primary/30" />
        <span className="text-primary/60 text-lg">✦</span>
        <div className="h-px w-12 bg-primary/30" />
      </div>

      <div className="space-y-2 mb-6">
        {parents.map((p, i) => (
          <p key={i} className="text-base text-gold-light/90 leading-relaxed font-body">{p}</p>
        ))}
      </div>
      
      <div className="h-px w-8 bg-primary/20 mx-auto mb-4" />
      <p className="text-sm text-gold-light font-medium font-body italic tracking-wide">{village}</p>
    </div>
  </motion.div>
);

const CoupleSection = () => (
  <section id="couple" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-[radial-gradient(circle_at_center,_#4a0404_0%,_#1a0101_100%)] snap-section">
    {/* BG Ornament */}
    <div className="absolute inset-0 bokeh-overlay opacity-20" />

    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="font-display text-4xl md:text-7xl gold-text-shimmer text-center mb-6"
    >
      The Couple
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="font-script text-2xl md:text-3xl text-gold-light mb-16"
    >
      Together with their families
    </motion.p>

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8 w-full">
      <CoupleCard
        name="Shailendra Singh"
        role="The Groom"
        direction="left"
        image="/images/groom_illus.png"
        parents={[
          "Son of Mrs. Rekha Devi",
          "and Mr. Kubarlal Niranjan",
        ]}
        village="Dhurwara, District Lalitpur (U.P.)"
      />

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: 0.5, duration: 1 }}
        className="flex flex-col items-center gap-4 py-8"
      >
        <div className="relative">
          <span className="text-6xl md:text-8xl animate-heartbeat inline-block text-accent drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]">♥</span>
          <div className="absolute inset-0 blur-2xl bg-accent/20 rounded-full" />
        </div>
        <span className="font-script text-4xl text-primary">&</span>
      </motion.div>

      <CoupleCard
        name="Nikita"
        role="The Bride"
        direction="right"
        image="/images/bride_illus.png"
        parents={[
          "Daughter of Mrs. Kaushalya Devi",
          "and Mr. Rajendra Singh",
        ]}
        village="Budni (Madawara), District Lalitpur (U.P.)"
      />
    </div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="font-elegant text-lg md:text-2xl text-gold-light/80 mt-20 italic text-center tracking-widest border-y border-primary/10 py-6"
    >
      Request the honor of your presence
    </motion.p>
  </section>
);

export default CoupleSection;
