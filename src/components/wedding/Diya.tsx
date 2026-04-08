const Diya = ({ className = "" }: { className?: string }) => (
  <div className={`animate-flicker ${className}`}>
    <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flame */}
      <ellipse cx="20" cy="12" rx="5" ry="10" fill="#FFD700" opacity="0.9" />
      <ellipse cx="20" cy="14" rx="3" ry="7" fill="#FF6B35" opacity="0.8" />
      <ellipse cx="20" cy="15" rx="1.5" ry="4" fill="#FFF5E6" />
      {/* Lamp body */}
      <ellipse cx="20" cy="35" rx="12" ry="6" fill="#B8860B" />
      <ellipse cx="20" cy="33" rx="10" ry="5" fill="#D4A017" />
      {/* Wick */}
      <line x1="20" y1="22" x2="20" y2="30" stroke="#4A0404" strokeWidth="1.5" />
    </svg>
  </div>
);

export default Diya;
