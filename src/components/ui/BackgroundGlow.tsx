import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Subtle top spotlight */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] rounded-full opacity-[0.14] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 70%)',
        }}
      />
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      {/* Vignette fade at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
};
