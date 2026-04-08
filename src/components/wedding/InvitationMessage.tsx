import { motion } from "framer-motion";
import Diya from "./Diya";

const InvitationMessage = () => (
  <section id="invitation-message" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-[radial-gradient(circle_at_center,_#4a0404_0%,_#1a0101_100%)] snap-section">
    {/* BG ornament */}
    <div className="absolute inset-0 bokeh-overlay opacity-15" />
    
    <div className="relative z-10 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="ornate-border-strong rounded-3xl p-10 md:p-20 bg-white/5 backdrop-blur-md border-gold/20 text-center relative overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.1)]">
          {/* Corner decorations */}
          <div className="absolute top-6 left-6 text-primary/40 text-3xl">✦</div>
          <div className="absolute top-6 right-6 text-primary/40 text-3xl">✦</div>
          <div className="absolute bottom-6 left-6 text-primary/40 text-3xl">✦</div>
          <div className="absolute bottom-6 right-6 text-primary/40 text-3xl">✦</div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-display text-2xl md:text-3xl text-gold-light mb-6 tracking-widest uppercase"
          >
            The Niranjan Family
          </motion.h3>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="font-script text-4xl md:text-6xl text-gold-light mb-10"
          >
            warmly invites you
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="text-primary/40 text-4xl mb-10"
          >
            ❀
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="space-y-4"
          >
            <p className="font-elegant text-xl md:text-2xl text-gold-light/90">
              Your presence will make
            </p>
            <p className="font-elegant text-2xl md:text-3xl text-gold-light italic tracking-wide">
              this occasion even more special
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, type: "spring" }}
            className="mt-10"
          >
            <span className="text-accent text-4xl animate-heartbeat inline-block drop-shadow-[0_0_15px_rgba(255,0,0,0.3)]">♥</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="mt-8 border-t border-primary/10 pt-8"
          >
            <p className="text-xs text-gold-light/40 font-body uppercase tracking-[0.3em] mb-4">With Love</p>
            <p className="font-elegant text-lg md:text-xl text-gold-light/70 tracking-wide">
              Shivani, Nidhi, Diksha, Monika, Anabh Patel
            </p>
          </motion.div>

          {/* Bottom diyas */}
          <div className="flex justify-between mt-12 px-4">
            <Diya />
            <Diya />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default InvitationMessage;
