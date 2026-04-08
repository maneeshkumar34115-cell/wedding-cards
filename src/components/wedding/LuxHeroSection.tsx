import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";

const LuxHeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  const handleStartInteraction = () => {
    if (isMuted && audioRef.current) {
      audioRef.current.play().catch(console.error);
      setIsMuted(false);
    }
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#4a0404_0%,_#2d0101_100%)]"
      onClick={handleStartInteraction}
    >
      {/* Audio Element */}
      <audio 
        ref={audioRef}
        loop 
        src="https://weddinginvites.org/wp-content/uploads/2021/04/Shehnai-Classical-Wedding-Music.mp3" 
      />

      {/* Audio Toggle */}
      <button 
        onClick={toggleAudio}
        className="fixed top-8 right-8 z-[100] w-12 h-12 rounded-full border border-gold bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/30 transition-all"
      >
        {isMuted ? <VolumeX /> : <Volume2 />}
      </button>

      {/* Rotating Mandala Background */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute w-[150%] h-[150%] opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="%23d4af37" stroke-width="0.5" stroke-dasharray="2,2"/><circle cx="50" cy="50" r="35" fill="none" stroke="%23d4af37" stroke-width="0.3"/><circle cx="50" cy="50" r="25" fill="none" stroke="%23d4af37" stroke-width="0.2"/></svg>')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Floating Petals */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * 100 + "vw", rotate: 0, opacity: 0 }}
            animate={{ 
              y: "110vh", 
              x: (Math.random() - 0.5) * 200 + "px",
              rotate: 360,
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              delay: Math.random() * 15,
              ease: "linear"
            }}
            className="absolute rounded-[150%_0_150%_0] bg-pink-100/40 w-3 h-4"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-6xl md:text-8xl text-gold mb-8 drop-shadow-[0_0_20px_rgba(212,175,55,0.8)] font-devanagari"
        >
          ॐ
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="font-display text-gold tracking-[0.3em] uppercase text-sm md:text-lg mb-2">
            The Niranjan Family
          </h2>
          <p className="font-display italic text-text-light/80 text-lg mb-8">
            warmly welcomes you
          </p>
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-text-light/60 mb-8">
            to the wedding celebration of
          </p>

          <div className="flex flex-col items-center gap-2">
            <span className="font-elegant text-5xl md:text-8xl text-gold-light drop-shadow-lg">
              Shailendra
            </span>
            <span className="font-display text-2xl md:text-3xl text-gold my-4">&</span>
            <span className="font-elegant text-5xl md:text-8xl text-gold-light drop-shadow-lg">
              Nikita
            </span>
          </div>
        </motion.div>
      </div>

      {/* Diyas */}
      <div className="absolute bottom-10 left-10 hidden md:block z-30">
        <DiyaFlame />
        <div className="w-16 h-10 bg-[#5d4037] rounded-b-full border-t-4 border-[#3e2723]" />
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block z-30">
        <DiyaFlame />
        <div className="w-16 h-10 bg-[#5d4037] rounded-b-full border-t-4 border-[#3e2723]" />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <span className="text-[10px] uppercase tracking-[4px] text-white/40">Scroll to Begin</span>
        <ChevronDown className="text-gold w-6 h-6" />
      </motion.div>
    </section>
  );
};

const DiyaFlame = () => (
  <motion.div
    animate={{ 
      scale: [1, 1.1, 1],
      rotate: [-1, 1, -1],
      opacity: [0.9, 1, 0.9]
    }}
    transition={{ duration: 0.1, repeat: Infinity }}
    className="w-4 h-6 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-200 rounded-[50%_50%_20%_20%/_80%_80%_20%_20%] mx-auto shadow-[0_0_20px_#ff9800]"
  />
);

export default LuxHeroSection;
