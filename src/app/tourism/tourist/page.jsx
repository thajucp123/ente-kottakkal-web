'use client';

import { useState } from 'react';
import { ArrowLeft, Search, MapPin, Heart, Camera, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { MOCK_TOURISM_PLACES } from '@/data/tourism_mock';

export default function TouristSightseeingScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const places = MOCK_TOURISM_PLACES.filter(place => place.category === 'tourist' && (
    place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    place.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    place.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    place.highlights.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-4 pb-12"
    >
      {/* Header and Back Button */}
      <div className="flex items-center gap-3">
        <Link 
          href="/tourism"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-xl font-bold text-on-surface leading-tight">വിനോദസഞ്ചാരം</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Sightseeing & Attractions</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="sticky top-16 bg-surface/95 backdrop-blur-md z-30 py-3 flex flex-col gap-3 -mx-4 px-4 border-b border-outline-variant/10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="സ്ഥലങ്ങൾ തിരയുക..." 
            className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border border-outline-variant/40 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-4 mt-2">
        <AnimatePresence mode="popLayout">
          {places.length > 0 ? (
            places.map(place => (
              <motion.div
                key={place.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm flex flex-col overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="px-5 pt-5 pb-3 flex justify-between items-center">
                  <span className="text-[10px] font-black tracking-wide uppercase px-2.5 py-0.5 rounded bg-teal-100 text-teal-900 border border-teal-200/50 font-label">
                    വിനോദസഞ്ചാരം
                  </span>
                  <Heart className="w-4 h-4 text-on-surface-variant/40 hover:text-error hover:fill-current cursor-pointer transition-colors active:scale-75" />
                </div>

                <div className="px-5 pb-5 flex flex-col gap-3">
                  <div>
                    <h3 className="text-base font-black text-on-surface leading-snug group-hover:text-primary transition-colors">{place.name}</h3>
                    <div className="flex items-center gap-1 mt-1 text-xs text-on-surface-variant/80 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{place.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed font-medium">
                    {place.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {place.highlights.split(', ').map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[9px] font-bold bg-surface-container border border-outline-variant/10 text-on-surface-variant px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3">
              <Camera className="w-10 h-10 text-on-surface-variant/40" />
              <p className="text-sm font-bold text-on-surface">സ്ഥലങ്ങളൊന്നും കണ്ടെത്താനായില്ല</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
