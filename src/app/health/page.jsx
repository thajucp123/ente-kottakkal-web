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
        <h2 className="text-2xl font-bold text-on-surface">ആരോഗ്യം</h2>
        <p className="text-sm text-on-surface-variant mt-1">കോട്ടക്കൽ ഗ്രാമത്തിലെ ആരോഗ്യ വിവരങ്ങൾ</p>
      </div>

      <section className="mt-4">
  <h3 className="text-lg font-bold text-on-surface mb-4">ആരോഗ്യ സേവനങ്ങള്‍</h3>
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
    {/* Hospital */}
    <div className="bg-primary-container text-on-primary-container rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer border border-outline-variant/10">
      <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
        <Home className="w-8 h-8" />
      </div>
      <p className="text-sm font-semibold">ആശുപത്രികൾ</p>
    </div>
    {/* Clinics */}
    <div className="bg-secondary-container text-on-secondary-container rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer border border-outline-variant/10">
      <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center">
        <Search className="w-8 h-8" />
      </div>
      <p className="text-sm font-semibold">ക്ലിനിക്കുകൾ</p>
    </div>
    {/* Laboratory */}
    <div className="bg-tertiary-container text-on-tertiary-container rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer border border-outline-variant/10">
      <div className="w-14 h-14 bg-tertiary/20 rounded-full flex items-center justify-center">
        <Megaphone className="w-8 h-8" />
      </div>
      <p className="text-sm font-semibold">ലാബോറട്ടറി</p>
    </div>
    {/* Doctors */}
    <div className="bg-error-container text-on-error-container rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer border border-outline-variant/10">
      <div className="w-14 h-14 bg-error/20 rounded-full flex items-center justify-center">
        <ShieldCheck className="w-8 h-8" />
      </div>
      <p className="text-sm font-semibold">ഡോക്ടർമാർ</p>
    </div>
    {/* Pharmacy */}
    <div className="bg-surface-container rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer border border-outline-variant/10">
      <div className="w-14 h-14 bg-primary-container/20 rounded-full flex items-center justify-center">
        <Bus className="w-8 h-8" />
      </div>
      <p className="text-sm font-semibold">ഫാർമസി</p>
    </div>
    {/* Ambulance */}
    <div className="bg-secondary-container text-on-secondary-container rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer border border-outline-variant/10">
      <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center">
        <Stethoscope className="w-8 h-8" />
      </div>
      <p className="text-sm font-semibold">ആംബുലൻസ്</p>
    </div>
  </div>
</section>

    </motion.div>
  );
}
