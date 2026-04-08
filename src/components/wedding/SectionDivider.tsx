const SectionDivider = () => (
  <div className="flex items-center justify-center py-12 gap-6 opacity-60">
    <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent via-primary to-transparent" />
    <div className="relative">
      <div className="absolute inset-0 blur-md bg-primary/20 rounded-full" />
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary relative z-10">
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" fillOpacity="0.8" />
      </svg>
    </div>
    <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent via-primary to-transparent" />
  </div>
);

export default SectionDivider;
