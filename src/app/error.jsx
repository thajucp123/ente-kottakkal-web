'use client';

import { useEffect, useState } from 'react';
import { AlertTriangle, RefreshCw, Home, ChevronDown, ChevronUp, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }) {
  const [showDetails, setShowDetails] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('App crashed with error:', error);

    // Redirect to custom 500 page for connection issues or explicit server errors
    const errMsg = (error?.message || '').toUpperCase();
    if (
      errMsg.includes('FETCH_FAILED') || 
      errMsg.includes('500') || 
      errMsg.includes('INTERNAL_SERVER_ERROR') || 
      errMsg.includes('ECONNREFUSED')
    ) {
      router.replace('/500');
    }
  }, [error, router]);

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
        <div className="absolute inset-0 bg-error/15 rounded-full blur-2xl -z-10 scale-150"></div>

        {/* Animated Error/Alert Icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 3, -3, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4, 
            ease: "easeInOut" 
          }}
          className="relative w-28 h-28 mx-auto flex items-center justify-center rounded-3xl bg-error-container text-on-error-container border border-error/15 shadow-lg"
        >
          <AlertTriangle className="w-16 h-16 stroke-[1.25] text-error" />
        </motion.div>
      </div>

      {/* Error Badge */}
      <span className="bg-error-container text-on-error-container text-xs font-black tracking-widest px-3.5 py-1 rounded-full shadow-sm mb-4">
        APP CRASHED
      </span>

      {/* Headings */}
      <h2 className="text-2xl font-black text-on-surface leading-tight mb-1">
        എന്തോ തകരാർ സംഭവിച്ചു!
      </h2>
      <p className="text-xs font-bold text-on-surface-variant font-label tracking-wide mb-6 uppercase">
        Something went wrong
      </p>

      {/* Message Card */}
      <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm max-w-sm w-full mb-5">
        <p className="text-sm text-on-surface leading-relaxed font-semibold mb-3">
          ആപ്ലിക്കേഷൻ്റെ പ്രവർത്തനത്തിൽ അപ്രതീക്ഷിതമായ ഒരു തടസ്സം നേരിട്ടു. താഴെയുള്ള ബട്ടൺ ക്ലിക്ക് ചെയ്ത് വീണ്ടും ശ്രമിക്കാവുന്നതാണ്.
        </p>
        <div className="w-full border-t border-outline-variant/10 my-3"></div>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          An unexpected error occurred in the application. Please try again or go back to the home screen.
        </p>
      </div>

      {/* Technical Details Accordion */}
      <div className="w-full max-w-sm mb-8">
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center justify-between w-full px-4 py-3 bg-surface-container-low hover:bg-surface-container text-on-surface-variant rounded-xl text-xs font-bold transition-all border border-outline-variant/10 shadow-inner"
        >
          <span className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-on-surface-variant/80" />
            <span>സാങ്കേതിക വിവരങ്ങൾ (Technical Details)</span>
          </span>
          {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        <AnimatePresence>
          {showDetails && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-2 bg-black/5 dark:bg-black/15 p-4 rounded-xl text-left overflow-x-auto text-[11px] font-mono text-error font-medium border border-error/5 max-h-36 select-all leading-normal">
                {error.message || 'Unknown Error'}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <button 
          onClick={() => reset()}
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
