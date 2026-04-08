import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  blur: number;
}

const GoldParticles = ({ count = 60 }: { count?: number }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        duration: 4 + Math.random() * 8,
        delay: Math.random() * 10,
        drift: -30 + Math.random() * 60,
        blur: Math.random() > 0.6 ? 1 + Math.random() * 2 : 0,
      }))
    );
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="gold-particle"
          style={{
            left: `${p.left}%`,
            bottom: `-${p.size}px`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            filter: p.blur ? `blur(${p.blur}px)` : undefined,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

export default GoldParticles;
