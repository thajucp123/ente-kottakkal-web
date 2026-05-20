'use client';

import { Landmark, Camera, Music, Utensils, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function TourismMenuScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex flex-col gap-6 pb-12"
    >
      {/* Header Banner */}
      <div className="flex items-center gap-3">
        <Link 
          href="/"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-on-surface leading-tight">ടൂറിസം & സംസ്കാരം (Tourism)</h2>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">ചരിത്ര സ്മാരകങ്ങൾ, കാഴ്ചകൾ, പ്രാദേശിക രുചികൾ കാണാം.</p>
        </div>
      </div>

      {/* Grid Menu Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Historical Spots */}
        <Link 
          href="/tourism/historical"
          className="bg-amber-100/90 text-amber-950 rounded-2xl p-6 flex flex-col items-center justify-center gap-3.5 shadow-md hover:scale-[1.02] active:scale-95 transition-transform border border-amber-200/60 min-h-[160px] text-center"
        >
          <div className="w-14 h-14 bg-surface-bright flex items-center justify-center shadow-inner rounded-full">
            <Landmark className="w-8 h-8 text-amber-700" />
          </div>
          <p className="text-sm font-bold font-label leading-tight">ചരിത്രം (History)</p>
        </Link>

        {/* Tourist Spots */}
        <Link 
          href="/tourism/tourist"
          className="bg-teal-100/90 text-teal-950 rounded-2xl p-6 flex flex-col items-center justify-center gap-3.5 shadow-md hover:scale-[1.02] active:scale-95 transition-transform border border-teal-200/60 min-h-[160px] text-center"
        >
          <div className="w-14 h-14 bg-surface-bright flex items-center justify-center shadow-inner rounded-full">
            <Camera className="w-8 h-8 text-teal-700" />
          </div>
          <p className="text-sm font-bold font-label leading-tight">വിനോദസഞ്ചാരം (Sightseeing)</p>
        </Link>

        {/* Cultural Spots */}
        <Link 
          href="/tourism/culture"
          className="bg-purple-100/90 text-purple-950 rounded-2xl p-6 flex flex-col items-center justify-center gap-3.5 shadow-md hover:scale-[1.02] active:scale-95 transition-transform border border-purple-200/60 min-h-[160px] text-center"
        >
          <div className="w-14 h-14 bg-surface-bright flex items-center justify-center shadow-inner rounded-full">
            <Music className="w-8 h-8 text-purple-700" />
          </div>
          <p className="text-sm font-bold font-label leading-tight">സാംസ്കാരികം (Culture)</p>
        </Link>

        {/* Local Food Spots */}
        <Link 
          href="/tourism/food"
          className="bg-orange-100/90 text-orange-950 rounded-2xl p-6 flex flex-col items-center justify-center gap-3.5 shadow-md hover:scale-[1.02] active:scale-95 transition-transform border border-orange-200/60 min-h-[160px] text-center"
        >
          <div className="w-14 h-14 bg-surface-bright flex items-center justify-center shadow-inner rounded-full">
            <Utensils className="w-8 h-8 text-orange-700" />
          </div>
          <p className="text-sm font-bold font-label leading-tight">രുചിയിടങ്ങൾ (Food Spots)</p>
        </Link>
      </div>
    </motion.div>
  );
}
