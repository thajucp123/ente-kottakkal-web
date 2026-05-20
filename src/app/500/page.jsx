'use client';

import { ServerCrash, RefreshCw, Home } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function ServerError() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center"
    >
      {/* Visual Indicator Container */}
      <div className="relative mb-6">
        {/* Soft Red/Orange Glow */}
        <div className="absolute inset-0 bg-error/10 rounded-full blur-2xl -z-10 scale-150 animate-pulse"></div>

        {/* Animated Server Icon with blinking LED lights */}
        <motion.div
          animate={{ 
            y: [0, -4, 4, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5, 
            ease: "easeInOut" 
          }}
          className="relative w-28 h-28 mx-auto flex flex-col items-center justify-center rounded-3xl bg-surface-container-high border border-outline-variant/30 shadow-lg text-on-surface-variant p-4"
        >
          <ServerCrash className="w-14 h-14 stroke-[1.25] text-error mb-2" />
          
          {/* LED indicator strip */}
          <div className="flex gap-1.5 mt-1">
            <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-error"></span>
            <span className="w-2-half h-2 bg-neutral-400 rounded-full"></span>
          </div>
        </motion.div>
      </div>

      {/* 500 Badge */}
      <span className="bg-error-container text-on-error-container text-xs font-black tracking-widest px-3.5 py-1 rounded-full shadow-sm mb-4">
        500 - SERVER ERROR
      </span>

      {/* Headings */}
      <h2 className="text-2xl font-black text-on-surface leading-tight mb-1">
        സെർവർ തകരാർ നേരിട്ടു
      </h2>
      <p className="text-xs font-bold text-on-surface-variant font-label tracking-wide mb-6 uppercase">
        Internal Server Error
      </p>

      {/* Message Card */}
      <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm max-w-sm w-full mb-8">
        <p className="text-sm text-on-surface leading-relaxed font-semibold mb-3">
          ആപ്ലിക്കേഷൻ സെർവറുമായി ബന്ധപ്പെടാൻ സാധിക്കുന്നില്ല അല്ലെങ്കിൽ സാങ്കേതിക തകരാർ നേരിട്ടിരിക്കുന്നു. ദയവായി അല്പം കഴിഞ്ഞ് വീണ്ടും ശ്രമിക്കുക.
        </p>
        <div className="w-full border-t border-outline-variant/10 my-3"></div>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          The server encountered an internal error or is currently unreachable. Please wait a few moments and try reloading.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <button 
          onClick={handleReload}
          className="flex items-center justify-center gap-2.5 bg-primary text-on-primary font-bold text-sm px-6 py-3.5 rounded-xl shadow-md active:scale-95 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>വീണ്ടും ശ്രമിക്കുക (Try Again)</span>
        </button>

        <Link 
          href="/"
          className="flex items-center justify-center gap-2.5 border border-outline-variant/30 text-on-surface bg-surface-container-low font-bold text-sm px-6 py-3.5 rounded-xl active:scale-95 hover:bg-surface-container-high transition-all"
        >
          <Home className="w-4 h-4 text-on-surface-variant" />
          <span>ഹോമിലേക്ക് മടങ്ങുക (Go to Home)</span>
        </Link>
      </div>
    </motion.div>
  );
}
