import { motion } from "framer-motion";
import Mandala from "./Mandala";
import Diya from "./Diya";
import prayingHands from "@/assets/praying-hands.png";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const InvitationSlide = () => (
  <section id="invitation" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden bg-[radial-gradient(circle_at_center,_#4a0404_0%,_#1a0101_100%)] snap-section">
    {/* Background mandala */}
    <Mandala className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] text-primary opacity-[0.08] animate-spin-reverse-slow" />

    {/* Diyas */}
    <div className="absolute top-20 left-6 md:left-20"><Diya /></div>
    <div className="absolute top-20 right-6 md:right-20"><Diya /></div>
    <div className="absolute bottom-20 left-10 md:left-24"><Diya /></div>
    <div className="absolute bottom-20 right-10 md:right-24"><Diya /></div>

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="relative z-10 text-center max-w-3xl mx-auto"
    >
      {/* Praying hands */}
      <motion.div variants={fadeUp} className="mb-8">
        <img src={prayingHands} alt="Praying Hands" className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
      </motion.div>

      <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl gold-text-shimmer mb-6">
        Wedding Ceremony
      </motion.h2>

      {/* Decorative line */}
      <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent to-primary" />
        <span className="text-primary text-xl">✦</span>
        <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent to-primary" />
      </motion.div>

      <motion.p variants={fadeUp} className="font-body text-sm md:text-lg text-gold-light/60 mb-3 tracking-[0.2em] uppercase">
        With the blessings of
      </motion.p>

      <motion.p variants={fadeUp} className="font-display text-2xl md:text-4xl text-primary glow-gold-strong mb-8">
        Lord Ganesha
      </motion.p>

      <motion.p variants={fadeUp} className="font-body text-sm md:text-lg text-gold-light/60 mb-3 tracking-[0.1em]">
        We cordially invite you to celebrate
      </motion.p>

      <motion.p variants={fadeUp} className="font-script text-4xl md:text-6xl text-gold-light mb-10">
        the wedding of
      </motion.p>

      {/* Couple names large */}
      <motion.div variants={fadeUp} className="mb-10">
        <p className="font-script text-5xl md:text-8xl gold-text-shimmer mb-4">Shailendra Singh</p>
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-px w-16 bg-primary/40" />
          <span className="text-accent text-3xl animate-heartbeat inline-block">♥</span>
          <div className="h-px w-16 bg-primary/40" />
        </div>
        <p className="font-script text-5xl md:text-8xl gold-text-shimmer">Nikita</p>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 text-gold-light/80 text-lg md:text-xl font-body">
        <span className="tracking-[0.3em] font-display uppercase border-y border-primary/20 py-2">Tuesday, 21st April 2026</span>
      </motion.div>
    </motion.div>
  </section>
);

export default InvitationSlide;
