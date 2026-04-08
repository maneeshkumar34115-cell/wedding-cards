const Mandala = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`animate-spin-slow ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {[0, 30, 60, 90, 120, 150].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 100 100)`}>
        <ellipse cx="100" cy="40" rx="18" ry="35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <ellipse cx="100" cy="45" rx="10" ry="25" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      </g>
    ))}
    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.1" />
  </svg>
);

export default Mandala;
