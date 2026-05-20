'use client';

import { useState } from 'react';
import { ArrowLeft, Megaphone, AlertTriangle, Search, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ANNOUNCEMENTS } from '@/data/announcements';

const formatDate = (dateStr) => {
  try {
    return new Date(dateStr).toLocaleDateString('ml-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
};

export default function AnnouncementsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = ANNOUNCEMENTS.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          href="/"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-xl font-bold text-on-surface leading-tight">അറിയിപ്പുകൾ</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Announcements & Notices</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="sticky top-16 bg-surface/95 backdrop-blur-md z-30 py-3 -mx-4 px-4 border-b border-outline-variant/10">
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

      {/* Announcement Cards */}
      <div className="flex flex-col gap-3 mt-2">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`rounded-2xl p-5 border shadow-sm flex gap-3.5 items-start ${
                  item.isUrgent
                    ? 'bg-error-container/20 border-error/20'
                    : 'bg-surface-container-lowest border-outline-variant/20'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-inner mt-0.5 ${
                    item.isUrgent ? 'bg-error-container' : 'bg-secondary-container/50'
                  }`}
                >
                  {item.isUrgent ? (
                    <AlertTriangle className="w-5 h-5 text-error" />
                  ) : (
                    <Megaphone className="w-5 h-5 text-secondary" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className={`text-sm font-black leading-snug ${
                        item.isUrgent ? 'text-error' : 'text-on-surface'
                      }`}
                    >
                      {item.title}
                    </h3>
                    {item.isUrgent && (
                      <span className="text-[9px] font-black tracking-widest bg-error text-on-error px-2 py-0.5 rounded-full uppercase shrink-0">
                        URGENT
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                    {item.message}
                  </p>
                  {/* Date */}
                  <div className="flex items-center gap-1 mt-1.5 text-[10px] text-on-surface-variant/50 font-label font-medium">
                    <Calendar className="w-3 h-3 shrink-0" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center flex flex-col items-center gap-3">
              <Megaphone className="w-10 h-10 text-on-surface-variant/30" />
              <p className="text-sm font-bold text-on-surface">അറിയിപ്പുകൾ ഒന്നുമില്ല</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
