'use client';

import { useState } from 'react';
import { ArrowLeft, Search, Bell, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { MOCK_EDUCATIONAL_NOTICES } from '@/data/education_mock';

export default function NoticesScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotices = MOCK_EDUCATIONAL_NOTICES.filter(item => {
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
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
          <h2 className="text-xl font-bold text-on-surface leading-tight">അറിയിപ്പുകൾ (Notices)</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Educational Announcements</p>
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
            placeholder="അറിയിപ്പുകൾ തിരയുക..." 
            className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border border-outline-variant/40 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-3.5 mt-2">
        <AnimatePresence mode="popLayout">
          {filteredNotices.length > 0 ? (
            filteredNotices.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex gap-3.5"
              >
                <div className="w-10 h-10 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  <Bell className="w-5 h-5 text-primary" />
                </div>

                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-sm font-black text-on-surface leading-tight">{item.title}</h3>
                    <span className="text-[10px] font-medium text-on-surface-variant/75 font-label shrink-0">{item.date}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3">
              <HelpCircle className="w-10 h-10 text-on-surface-variant/40" />
              <p className="text-sm font-bold text-on-surface">അറിയിപ്പുകൾ ഒന്നും കണ്ടെത്താനായില്ല</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
