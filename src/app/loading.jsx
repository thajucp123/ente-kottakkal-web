'use client';

import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] p-6 text-center">
      {/* Spinner Container */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Soft Glow Background */}
        <div className="absolute w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse -z-10"></div>
        
        {/* Animated Spin Track */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-16 h-16 rounded-full border-4 border-primary/15 border-t-primary shadow-sm"
        />

        {/* Pulsing Core Dot */}
        <motion.div
          animate={{ scale: [0.8, 1.1, 0.8] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="absolute w-5 h-5 bg-primary rounded-full shadow-md shadow-primary/20"
        />
      </div>
      
      {/* Malayalam text */}
      <h3 className="text-base font-black text-primary animate-pulse tracking-wide mb-1">
        ലോഡ് ചെയ്യുന്നു..
      </h3>
      {/* English subtitle */}
      <p className="text-[10px] text-on-surface-variant font-bold tracking-wider uppercase font-label opacity-75">
        Loading App
      </p>
    </div>
  );
}
