'use client';

import { Code, GitBranch, Mail, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function DeveloperScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
          <Code className="w-6 h-6 text-primary" />
          ഡെവലപ്പർ
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">ഈ ആപ്ലിക്കേഷന് പിന്നിൽ പ്രവർത്തിച്ചവർ.</p>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/30 shadow-md">
        <div className="h-24 bg-linear-to-r from-primary to-primary-container relative">
          <div className="absolute -bottom-10 left-6 w-20 h-20 bg-surface rounded-2xl p-1 shadow-lg">
            <div className="w-full h-full bg-secondary-container rounded-xl flex items-center justify-center text-on-secondary-container">
              <Code className="w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="pt-14 pb-6 px-6">
          <h3 className="text-xl font-bold text-on-surface">Kottakkal Digital Team</h3>
          <p className="text-sm text-secondary font-bold mt-1">ഓപ്പൺ സോഴ്സ് പ്രോജക്ട്</p>
          
          <p className="text-sm text-on-surface-variant mt-4 leading-relaxed font-medium">
            കോട്ടയ്ക്കൽ നിവാസികൾക്ക് സാങ്കേതികവിദ്യയുടെ ഗുണങ്ങൾ ലഭ്യമാക്കുക എന്ന ലക്ഷ്യത്തോടെയാണ് ഈ ആപ്പ് വികസിപ്പിച്ചിരിക്കുന്നത്.
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors text-on-surface-variant font-bold text-sm border border-outline-variant/10 shadow-sm">
              <GitBranch className="w-5 h-5 text-on-surface" />
              GitHub Repository
            </a>
            <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors text-on-surface-variant font-bold text-sm border border-outline-variant/10 shadow-sm">
              <Mail className="w-5 h-5 text-on-surface" />
              ബന്ധപ്പെടാൻ (Contact)
            </a>
            <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors text-on-surface-variant font-bold text-sm border border-outline-variant/10 shadow-sm">
              <Globe className="w-5 h-5 text-on-surface" />
              വെബ്സൈറ്റ്
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
