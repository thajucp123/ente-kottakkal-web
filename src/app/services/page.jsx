'use client';

import { Search, Home, ShieldCheck, Megaphone, Stethoscope, Bus, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BUS_ROUTES } from '@/data/routes';

export default function ServicesScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="flex flex-col"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-on-surface">സേവനങ്ങളും ബന്ധങ്ങളും</h2>
        <p className="text-sm text-on-surface-variant mt-1">കോട്ടയ്ക്കൽ ഗ്രാമപഞ്ചായത്തിലെ പ്രധാന വിവരങ്ങൾ</p>
      </div>

      <section className="mt-4">
        <h3 className="text-lg font-bold text-on-surface mb-4">അടിയന്തര നമ്പറുകൾ</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-surface-container rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:bg-surface-container-high cursor-pointer transition-colors border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface">പഞ്ചായത്ത്</p>
              <p className="text-[12px] text-on-surface-variant mt-1 font-label font-medium opacity-80 underline underline-offset-4 decoration-primary/20">0483 2742200</p>
            </div>
          </div>
          <div className="bg-surface-container rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:bg-surface-container-high cursor-pointer transition-colors border border-outline-variant/10">
            <div className="w-12 h-12 bg-error-container/20 text-error rounded-full flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface">പോലീസ്</p>
              <p className="text-[12px] text-on-surface-variant mt-1 font-label font-medium opacity-80 decoration-error/20">100</p>
            </div>
          </div>
          <div className="bg-surface-container rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:bg-surface-container-high cursor-pointer transition-colors border border-outline-variant/10">
            <div className="w-12 h-12 bg-secondary-container/20 text-secondary rounded-full flex items-center justify-center">
              <Megaphone className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface">ഫയർ ഫോഴ്സ്</p>
              <p className="text-[12px] text-on-surface-variant mt-1 font-label font-medium opacity-80">101</p>
            </div>
          </div>

          <div className="bg-surface-container rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:bg-surface-container-high cursor-pointer transition-colors border border-outline-variant/10">
            <div className="w-12 h-12 bg-tertiary-container/10 text-tertiary rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface">ആശുപത്രികൾ</p>
              <p className="text-[12px] text-on-surface-variant mt-1 font-label font-medium opacity-80">108</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bus Timing Section */}
      <section className="mt-10 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-md">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-inner">
              <Bus className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-xl font-bold text-on-surface">ബസ് സമയം</h3>
          </div>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 w-4 h-4" />
            <input 
              type="text" 
              placeholder="റൂട്ട് അന്വേഷിക്കുക..." 
              className="w-full sm:w-56 pl-10 pr-4 py-2 bg-surface border border-outline-variant/40 rounded-full font-label text-sm focus:ring-1 focus:ring-primary outline-none transition-shadow placeholder:opacity-50"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar pb-1">
          <button className="px-5 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold shadow-sm">എല്ലാ റൂട്ടുകളും</button>
          {['മലപ്പുറം', 'തിരൂർ', 'കോഴിക്കോട്'].map(route => (
            <button key={route} className="px-5 py-2 bg-surface text-on-surface-variant border border-outline-variant/30 rounded-full text-xs font-bold hover:bg-surface-container-low transition-colors shadow-sm">
              {route}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {BUS_ROUTES.map(route => (
            <div key={route.id} className="p-4 bg-surface rounded-xl border border-outline-variant/20 hover:border-outline-variant/50 cursor-pointer group transition-all shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center justify-center py-2 px-3 bg-surface-container-high rounded-xl group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors shadow-inner">
                  <span className="text-xl font-bold leading-none">{route.time}</span>
                  <span className="text-[10px] font-bold font-label mt-1.5 opacity-70 group-hover:opacity-100">{route.ampm}</span>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-bold text-on-surface flex items-center gap-2">
                    {route.from} <ArrowRight className="w-3.5 h-3.5 text-on-surface-variant opacity-50" /> {route.to}
                  </div>
                  <p className="text-[11px] text-on-surface-variant font-label font-semibold mt-1 opacity-70">{route.type}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant/30 group-hover:text-primary transition-colors" />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
