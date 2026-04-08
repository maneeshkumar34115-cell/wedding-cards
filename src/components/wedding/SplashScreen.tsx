import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Mandala from "./Mandala";

const SplashScreen = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden cinematic-bg cinematic-vignette snap-section">
      {/* Rotating mandala bg */}
      <Mandala className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] text-primary opacity-[0.04] animate-spin-slow" />
      <Mandala className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] text-primary opacity-[0.03] animate-spin-reverse-slow" />

      {/* Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_60%_52%_/_0.08)_0%,_transparent_60%)]" />

      {/* Om Symbol */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="text-7xl md:text-9xl text-primary animate-glow-pulse glow-gold-strong mb-6 font-devanagari"
      >
        ॐ
      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "120px", opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-6"
      />

      {/* Family welcome text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-primary/80 mb-3"
      >
        The Niranjan Family
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="font-script text-2xl md:text-4xl text-primary mb-3"
      >
        warmly welcomes you
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="font-body text-sm md:text-base text-primary/60 tracking-wider mb-4"
      >
        to the wedding celebration of
      </motion.p>

      {/* Couple names */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 4 }}
        className="text-center mb-8"
      >
        <p className="font-script text-4xl md:text-6xl lg:text-7xl gold-text-shimmer">
          Shailendra
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 4.5 }}
          className="my-2"
        >
          <span className="text-accent text-2xl md:text-3xl animate-heartbeat inline-block">♥</span>
        </motion.div>
        <p className="font-script text-4xl md:text-6xl lg:text-7xl gold-text-shimmer">
          Nikita
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs tracking-[0.2em] uppercase text-primary/50 font-body">Scroll to begin</span>
        <ChevronDown className="w-6 h-6 text-primary/50 animate-bounce-gentle" />
      </motion.div>
    </section>
  );
};

export default SplashScreen;
