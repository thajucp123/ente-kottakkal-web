'use client';

import { MessageSquare, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function FeedbackScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" />
          അഭിപ്രായങ്ങൾ
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">നിങ്ങളുടെ വിലയേറിയ അഭിപ്രായങ്ങളും നിർദ്ദേശങ്ങളും ഞങ്ങളെ അറിയിക്കുക.</p>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">പേര് (Name)</label>
          <input 
            type="text" 
            placeholder="നിങ്ങളുടെ പേര് നൽകുക" 
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">ഇമെയിൽ / ഫോൺ (Contact)</label>
          <input 
            type="text" 
            placeholder="ബന്ധപ്പെടാനുള്ള നമ്പർ/ഇമെയിൽ" 
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">നിർദ്ദേശങ്ങൾ (Feedback)</label>
          <textarea 
            rows="5"
            placeholder="നിങ്ങളുടെ അഭിപ്രായങ്ങൾ ഇവിടെ രേഖപ്പെടുത്തുക..." 
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          ></textarea>
        </div>

        <button className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform mt-2">
          <Send className="w-4 h-4 fill-current" /> 
          സമർപ്പിക്കുക
        </button>
      </div>
    </motion.div>
  );
}
