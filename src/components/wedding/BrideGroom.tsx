import { motion } from "framer-motion";

const PersonCard = ({
  name,
  role,
  parents,
  village,
  direction,
}: {
  name: string;
  role: string;
  parents: string[];
  village: string;
  direction: "left" | "right";
}) => (
  <motion.div
    initial={{ opacity: 0, x: direction === "left" ? -80 : 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-xl flex-1 text-center"
  >
    <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-primary/40 flex items-center justify-center bg-muted">
      <span className="text-5xl">{direction === "left" ? "🤵" : "👰"}</span>
    </div>
    <p className="text-xs uppercase tracking-widest text-primary mb-2 font-body">{role}</p>
    <h3 className="font-elegant text-2xl md:text-3xl text-secondary font-bold">{name}</h3>
    <div className="h-px w-16 mx-auto bg-primary/30 my-4" />
    {parents.map((p, i) => (
      <p key={i} className="text-sm text-muted-foreground leading-relaxed font-body">{p}</p>
    ))}
    <p className="text-sm text-foreground mt-3 font-medium font-body">{village}</p>
  </motion.div>
);

const BrideGroom = () => {
  return (
    <section id="couple" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl gold-text text-center mb-12"
      >
        The Couple
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <PersonCard
          name="Shailendra Singh"
          role="The Groom"
          direction="left"
          parents={[
            "Son of Sri Rajadhar Patel (Ex-Pradhan)",
            "Sri Sundarlal Patel",
            "Sri Balchandra Patel",
          ]}
          village="Village Dhurwara, District Lalitpur (U.P.)"
        />

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.4 }}
          className="flex flex-col items-center gap-2 py-4"
        >
          <span className="text-4xl md:text-5xl">💕</span>
          <span className="text-xl text-primary font-bold">+</span>
          <div className="text-2xl animate-float">🌸</div>
        </motion.div>

        <PersonCard
          name="Nikita"
          role="The Bride"
          direction="right"
          parents={[
            "Daughter of Smt. Homli",
            "Sri Rajendra Singh",
          ]}
          village="Village Turki (Mujaha), District Lalitpur (U.P.)"
        />
      </div>
    </section>
  );
};

export default BrideGroom;
