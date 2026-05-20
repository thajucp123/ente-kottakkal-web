'use client';

import { Compass, Home, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center"
    >
      {/* Visual Indicator Container */}
      <div className="relative mb-6">
        {/* Glowing Background Blur */}
        <div className="absolute inset-0 bg-secondary/10 rounded-full blur-2xl -z-10 scale-150"></div>

        {/* Animated Compass Icon */}
        <motion.div
          animate={{ 
            rotate: [0, 15, -15, 0],
            y: [0, -6, 6, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6, 
            ease: "easeInOut" 
          }}
          className="relative w-28 h-28 mx-auto flex items-center justify-center rounded-3xl bg-secondary-container/30 text-secondary border border-secondary/10 shadow-lg"
        >
          <Compass className="w-16 h-16 stroke-[1.25]" />
          
          {/* Pulsing indicator light */}
          <span className="absolute top-3 right-3 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-error"></span>
          </span>
        </motion.div>
      </div>

      {/* 404 Badge */}
      <span className="bg-secondary-container text-on-secondary-container text-xs font-black tracking-widest px-3.5 py-1 rounded-full shadow-sm mb-4">
        404 - NOT FOUND
      </span>

      {/* Headings */}
      <h2 className="text-2xl font-black text-on-surface leading-tight mb-1">
        ഈ പേജ് നിലവിലില്ല
      </h2>
      <p className="text-xs font-bold text-on-surface-variant font-label tracking-wide mb-6 uppercase">
        Page Not Found
      </p>

      {/* Message Card */}
      <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm max-w-sm w-full mb-8">
        <p className="text-sm text-on-surface leading-relaxed font-semibold mb-3">
          നിങ്ങൾ തിരയുന്ന പേജ് നീക്കം ചെയ്യപ്പെടുകയോ ലിങ്കിൽ തെറ്റ് സംഭവിക്കുകയോ ചെയ്തിരിക്കാം. 
        </p>
        <div className="w-full border-t border-outline-variant/10 my-3"></div>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          The page you are looking for doesn't exist. It might have been moved or the URL is incorrect.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <Link 
          href="/"
          className="flex items-center justify-center gap-2.5 bg-primary text-on-primary font-bold text-sm px-6 py-3.5 rounded-xl shadow-md active:scale-95 hover:bg-primary-container hover:text-on-primary-container transition-all"
        >
          <Home className="w-4 h-4" />
          <span>ഹോമിലേക്ക് മടങ്ങുക (Go to Home)</span>
        </Link>

        <Link 
          href="/feedback"
          className="flex items-center justify-center gap-2.5 border border-outline-variant/30 text-on-surface bg-surface-container-low font-bold text-sm px-6 py-3.5 rounded-xl active:scale-95 hover:bg-surface-container-high transition-all"
        >
          <MessageSquare className="w-4 h-4 text-on-surface-variant" />
          <span>സഹായം ആവശ്യമുണ്ടോ? (Need Help?)</span>
        </Link>
      </div>
    </motion.div>
  );
}
