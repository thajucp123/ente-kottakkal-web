'use client';

import { Store, Search, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { SHOPS } from '@/data/shops';

export default function ShopsScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col"
    >
      <div className="bg-surface-container-low rounded-xl p-6 mb-6 relative overflow-hidden shadow-sm">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <Store className="w-7 h-7 text-primary" />
            കടകൾ
          </h2>
          <p className="text-sm text-on-surface-variant mt-2 max-w-[240px]">
            കോട്ടക്കലിലെയും പരിസരത്തെയും വിവിധ വ്യാപാര സ്ഥാപനങ്ങളുടെ വിവരങ്ങൾ ഇവിടെ ലഭ്യമാണ്.
          </p>
        </div>
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl"></div>
      </div>

      <div className="sticky top-16 bg-surface/95 backdrop-blur-md z-30 py-4 mb-2 flex flex-col gap-4 -mx-4 px-4 border-b border-outline-variant/10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input 
            type="text" 
            placeholder="കടകളെ തിരയുക (പേര്, വിഭാഗം)..." 
            className="w-full pl-12 pr-4 py-3.5 bg-surface-container-highest border border-outline-variant/50 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          <button className="px-5 py-2 bg-secondary text-on-secondary rounded-full text-xs font-bold shadow-md">എല്ലാം</button>
          {['സൂപ്പർമാർക്കറ്റ്', 'ടെക്സ്റ്റൈൽസ്', 'ഹാർഡ്‌വെയർ'].map(cat => (
            <button key={cat} className="px-5 py-2 whitespace-nowrap bg-surface-container-high text-on-surface-variant border border-outline-variant/30 rounded-full text-xs font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-sm">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {SHOPS.map(shop => (
          <div key={shop.id} className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-secondary-container/20 rounded-full flex items-center justify-center group-hover:bg-secondary-container transition-colors">
              {shop.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-on-surface truncate">{shop.name}</h3>
              <p className="text-xs text-on-surface-variant font-label mt-0.5">{shop.category} • {shop.location}</p>
            </div>
            <button className="w-11 h-11 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform">
              <Phone className="w-5 h-5 fill-current" />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
