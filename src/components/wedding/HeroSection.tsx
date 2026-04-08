import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Mandala from "./Mandala";
import Diya from "./Diya";
import prayingHands from "@/assets/praying-hands.png";
import shivaParvati from "@/assets/shiva-parvati.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden indian-pattern-bg">
      {/* Background Mandala */}
      <Mandala className="absolute w-[500px] h-[500px] text-primary opacity-10 md:w-[700px] md:h-[700px]" />

      {/* Diyas */}
      <div className="absolute top-10 left-6 md:left-16"><Diya /></div>
      <div className="absolute top-10 right-6 md:right-16"><Diya /></div>

      {/* Om Symbol */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-6xl md:text-8xl text-primary animate-glow-pulse glow-gold mb-4 font-devanagari"
      >
        ॐ
      </motion.div>

      {/* Praying Hands Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mb-2"
      >
        <img src={prayingHands} alt="Praying Hands" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-primary font-display text-lg md:text-xl mb-2 tracking-wider"
      >
        || Salutations to Lord Ganesha ||
      </motion.p>

      {/* Lord Shiva & Parvati */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.7 }}
        className="mb-4"
      >
        <img src={shivaParvati} alt="Lord Shiva and Goddess Parvati" width={800} height={600} className="w-48 h-36 md:w-64 md:h-48 object-contain drop-shadow-lg" />
      </motion.div>

      {/* Shubh Vivah */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold gold-text mb-2 text-center"
      >
        Auspicious Wedding
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.3 }}
        className="font-display text-xl md:text-2xl text-primary tracking-[0.3em] uppercase mb-8"
      >
        Wedding Invitation
      </motion.p>

      {/* Names */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="text-center mb-8"
      >
        <p className="font-elegant text-3xl md:text-5xl lg:text-6xl text-secondary font-bold italic">
          Shailendra Singh
        </p>
        <div className="flex items-center justify-center gap-3 my-3">
          <div className="h-px w-12 bg-primary" />
          <span className="text-accent text-3xl">❤</span>
          <div className="h-px w-12 bg-primary" />
        </div>
        <p className="font-elegant text-3xl md:text-5xl lg:text-6xl text-secondary font-bold italic">
          Nikita
        </p>
      </motion.div>

      {/* Date */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.3 }}
        className="flex items-center gap-2 text-muted-foreground text-lg md:text-xl font-body"
      >
        <span>📅</span>
        <span>Tuesday, 21st April 2026</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.8 }}
        className="absolute bottom-8 animate-bounce-gentle cursor-pointer"
        onClick={() => document.getElementById("save-the-date")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
