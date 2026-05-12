'use client';

import { Info, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-24 h-24 rounded-3xl shadow-lg rotate-3 mb-6 bg-surface p-1 border border-outline-variant/20">
          <img src="/logo.png" alt="Ente Kottakkal Logo" className="w-full h-full object-cover rounded-2xl -rotate-3" />
        </div>
        <h2 className="text-3xl font-bold text-on-surface">എന്റെ കോട്ടയ്ക്കൽ</h2>
        <p className="text-sm text-on-surface-variant font-label mt-2">v1.0.0 (Beta)</p>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-primary flex items-center gap-2">
          <Info className="w-5 h-5" />
          ആപ്പിനെക്കുറിച്ച്
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
          കോട്ടയ്ക്കൽ ഗ്രാമപഞ്ചായത്തിലെ വിവരങ്ങളും സേവനങ്ങളും ജനങ്ങളിലേക്ക് വേഗത്തിൽ എത്തിക്കുക എന്നതാണ് ഈ ആപ്ലിക്കേഷന്റെ പ്രധാന ലക്ഷ്യം. 
          &quot;ഡിജിറ്റൽ ഗ്രാമസഭയുടെ പുതിയ മുഖം&quot; എന്ന ആശയത്തിൽ അധിഷ്ഠിതമായാണ് ഇത് പ്രവർത്തിക്കുന്നത്.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-secondary-container/30 rounded-2xl p-5 border border-outline-variant/10 shadow-sm flex flex-col items-center text-center gap-2">
          <ShieldCheck className="w-8 h-8 text-secondary" />
          <span className="text-xs font-bold text-on-surface">സുരക്ഷിതം</span>
        </div>
        <div className="bg-error-container/30 rounded-2xl p-5 border border-outline-variant/10 shadow-sm flex flex-col items-center text-center gap-2">
          <Heart className="w-8 h-8 text-error" />
          <span className="text-xs font-bold text-on-surface">സേവനം</span>
        </div>
      </div>
    </motion.div>
  );
}
