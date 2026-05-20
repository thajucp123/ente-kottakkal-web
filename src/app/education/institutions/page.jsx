'use client';

import { useState } from 'react';
import { ArrowLeft, Search, Phone, MapPin, BookOpen, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { MOCK_INSTITUTIONS, EDUCATION_INSTITUTION_TYPES } from '@/data/education_mock';

export default function InstitutionsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubtype, setActiveSubtype] = useState('all');

  const filteredInstitutions = MOCK_INSTITUTIONS.filter(item => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.courses.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q);
    const matchesSubtype = activeSubtype === 'all' ? true : item.type === activeSubtype;
    return matchesSearch && matchesSubtype;
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
          <h2 className="text-xl font-bold text-on-surface leading-tight">സ്കൂളുകൾ & കോളേജുകൾ</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Institutions & Universities</p>
        </div>
      </div>

      {/* Search & Filter Sticky Bar */}
      <div className="sticky top-16 bg-surface/95 backdrop-blur-md z-30 py-3 flex flex-col gap-3 -mx-4 px-4 border-b border-outline-variant/10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="സ്ഥാപനങ്ങൾ, കോഴ്‌സുകൾ തിരയുക..." 
            className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border border-outline-variant/40 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
          />
        </div>

        {/* Institution types filters */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {EDUCATION_INSTITUTION_TYPES.map(type => (
            <button
              key={type.id}
              onClick={() => setActiveSubtype(type.id)}
              className={`px-4 py-1.5 whitespace-nowrap text-xs font-bold rounded-full border transition-all ${
                activeSubtype === type.id
                  ? 'bg-primary text-on-primary border-primary shadow-sm'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/20 hover:bg-surface-container-high'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-3.5 mt-2">
        <AnimatePresence mode="popLayout">
          {filteredInstitutions.length > 0 ? (
            filteredInstitutions.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex flex-col gap-3"
              >
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-base font-black text-on-surface leading-snug">{item.name}</h3>
                  <span className="text-[10px] font-black tracking-wide uppercase px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label shrink-0">
                    {item.type}
                  </span>
                </div>

                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  {item.description}
                </p>

                <div className="bg-surface-container-low/60 rounded-xl p-3 border border-outline-variant/10 flex flex-col gap-1.5 text-xs font-semibold text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-on-surface font-bold text-[11px] leading-tight">{item.courses}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="opacity-95 leading-none">{item.location}</span>
                  </div>
                </div>

                {/* Footer Contact Action */}
                <div className="flex justify-end border-t border-outline-variant/10 pt-2.5">
                  <a
                    href={`tel:${item.phone}`}
                    className="h-9 px-4 bg-surface-container border border-outline-variant/20 rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-95 text-on-surface font-bold text-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>വിളിക്കുക (Call)</span>
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3">
              <GraduationCap className="w-10 h-10 text-on-surface-variant/40" />
              <p className="text-sm font-bold text-on-surface">സ്ഥാപനങ്ങളൊന്നും കണ്ടെത്താനായില്ല</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
