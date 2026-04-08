import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const PETAL_COLORS = [
  "hsl(350 70% 75%)",
  "hsl(340 60% 70%)",
  "hsl(30 80% 70%)",
  "hsl(43 60% 60%)",
  "hsl(0 50% 65%)",
];

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 14,
        duration: 10 + Math.random() * 15,
        delay: Math.random() * 12,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50% 0 50% 50%",
            backgroundColor: p.color,
            opacity: 0.5,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
