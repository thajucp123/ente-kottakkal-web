'use client';

import { useState } from 'react';
import { ArrowLeft, Search, Phone, MapPin, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { MOCK_TUITIONS } from '@/data/education_mock';

export default function TuitionsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTuitions = MOCK_TUITIONS.filter(item => {
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.subject.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q)
    );
  });

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
          href="/education"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-xl font-bold text-on-surface leading-tight">ട്യൂഷൻ & കോച്ചിങ്</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Tuitions & Training Hubs</p>
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
            placeholder="ട്യൂഷൻ സെന്റർ, വിഷയം തിരയുക..." 
            className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border border-outline-variant/40 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-3.5 mt-2">
        <AnimatePresence mode="popLayout">
          {filteredTuitions.length > 0 ? (
            filteredTuitions.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex flex-col gap-3"
              >
                <div>
                  <h3 className="text-base font-black text-on-surface leading-snug">{item.name}</h3>
                  <p className="text-xs font-bold text-secondary font-label mt-1">{item.subject}</p>
                </div>

                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{item.location}</span>
                </div>

                <div className="flex justify-end border-t border-outline-variant/10 pt-2.5">
                  <a
                    href={`tel:${item.phone}`}
                    className="h-9 px-4 bg-surface-container border border-outline-variant/20 rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-95 text-on-surface font-bold text-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>ബന്ധപ്പെടുക</span>
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3">
              <GraduationCap className="w-10 h-10 text-on-surface-variant/40" />
              <p className="text-sm font-bold text-on-surface">ട്യൂഷൻ സെന്ററുകളൊന്നും കണ്ടെത്താനായില്ല</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
