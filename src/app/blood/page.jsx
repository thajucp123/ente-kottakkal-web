'use client';

import { Search, Heart, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { DONORS } from '@/data/donors';

export default function BloodBankScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">ബ്ലഡ് ബാങ്ക്</h2>
        <p className="text-sm text-on-surface-variant mt-1">അടിയന്തര സാഹചര്യങ്ങളിൽ രക്തം ലഭ്യമാക്കാൻ സഹായിക്കുക.</p>
      </div>

      <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30 shadow-sm mb-8">
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input 
            type="text" 
            placeholder="രക്ത ഗ്രൂപ്പ് തിരയുക (ഉദാ: O+, A-)" 
            className="w-full pl-12 pr-4 py-3.5 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-1 focus:ring-primary shadow-sm"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          <button className="px-5 py-2 bg-secondary text-on-secondary rounded-full text-xs font-bold shadow-md">എല്ലാം</button>
          {['O+', 'A+', 'B+', 'AB+', 'O-', 'A-'].map(group => (
            <button key={group} className="px-5 py-2 bg-surface text-on-surface border border-outline-variant/40 rounded-full text-xs font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-sm">
              {group}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {DONORS.map(donor => (
          <div key={donor.id} className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-error-container text-on-error-container rounded-full flex items-center justify-center text-lg font-bold shadow-sm group-hover:scale-105 transition-transform">
              {donor.group}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-on-surface">{donor.name}</h3>
              <p className="text-[12px] text-on-surface-variant font-label mt-0.5 opacity-80">{donor.location}</p>
            </div>
            <button className="w-11 h-11 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform">
              <Phone className="w-5 h-5 fill-current" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-primary-container text-on-primary-container p-8 rounded-2xl text-center space-y-4 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-white/10 p-4 rounded-full mb-4">
            <Heart className="w-10 h-10 fill-on-primary-container text-on-primary-container" />
          </div>
          <h3 className="text-xl font-bold">നിങ്ങൾക്കൊരു ജീവൻ രക്ഷിക്കാനാകും</h3>
          <p className="text-sm opacity-90 max-w-xs mx-auto leading-relaxed">
            രക്തദാന സേനയിൽ അംഗമാകൂ, അടിയന്തര ഘട്ടങ്ങളിൽ സഹായമാകൂ. 
          </p>
          <button className="mt-2 bg-surface text-primary px-8 py-3.5 rounded-full text-sm font-bold shadow-lg hover:bg-surface-container-low transition-colors ring-4 ring-primary-container/30">
            രജിസ്റ്റർ ചെയ്യുക
          </button>
        </div>
      </div>
    </motion.div>
  );
}
