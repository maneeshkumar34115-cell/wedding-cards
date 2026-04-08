import { motion } from "framer-motion";
import Diya from "./Diya";

const Blessings = () => (
  <section id="blessings" className="py-20 px-4 indian-pattern-bg">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-display text-3xl md:text-5xl gold-text text-center mb-12"
    >
      Invitation
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto relative"
    >
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block"><Diya /></div>
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block"><Diya /></div>

      <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-xl text-center">
        <p className="font-elegant text-lg md:text-xl text-secondary leading-relaxed mb-6 italic">
          Stars are aligned, flowers are blooming
          <br />
          We await your presence at our brother's wedding...
        </p>

        <div className="h-px w-20 mx-auto bg-primary/30 my-6" />

        <div className="h-px w-20 mx-auto bg-primary/30 my-6" />

        <p className="font-body text-sm text-primary font-medium">
          Shivani, Nidhi, Diksha, Monika, Ananya Patel
        </p>
      </div>
    </motion.div>
  </section>
);

export default Blessings;
