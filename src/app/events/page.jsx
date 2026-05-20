'use client';

import { useState } from 'react';
import { Calendar, Search, MapPin, Clock, Tag, ArrowLeft, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { INITIAL_EVENTS, EVENT_CATEGORIES } from '@/data/events_mock';

export default function EventsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming', 'past'
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter events
  const filteredEvents = INITIAL_EVENTS.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = event.type === activeTab;
    const matchesCategory = activeCategory === 'all' ? true : event.category === activeCategory;

    return matchesSearch && matchesTab && matchesCategory;
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
          href="/"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-xl font-bold text-on-surface leading-tight">പ്രാദേശിക പരിപാടികൾ</h2>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">കോട്ടക്കലിലെ കലാ-കായിക, സാംസ്കാരിക പരിപാടികൾ</p>
        </div>
      </div>

      {/* Filter and Search Stickiness */}
      <div className="sticky top-16 bg-surface/95 backdrop-blur-md z-30 py-3 flex flex-col gap-3 -mx-4 px-4 border-b border-outline-variant/10">
        
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="പരിപാടികൾ, സ്ഥലങ്ങൾ തിരയുക..." 
            className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border border-outline-variant/40 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
          />
        </div>

        {/* Tab Toggle (Upcoming / Past) */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-surface-container rounded-xl border border-outline-variant/20 shadow-inner">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'upcoming' 
                ? 'bg-primary text-on-primary shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            വരാനിരിക്കുന്നവ (Upcoming)
          </button>
          <button 
            onClick={() => setActiveTab('past')}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'past' 
                ? 'bg-secondary text-on-secondary shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            കഴിഞ്ഞുപോയവ (Past)
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          {EVENT_CATEGORIES.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 whitespace-nowrap text-xs font-bold rounded-full border transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary-container text-on-primary-container border-primary/20 shadow-sm'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/20 hover:bg-surface-container-high'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Events timeline cards */}
      <div className="flex flex-col gap-4 mt-2">
        <AnimatePresence mode="popLayout">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => {
              const categoryLabel = EVENT_CATEGORIES.find(c => c.id === event.category)?.label || event.category;
              const dateObj = new Date(event.date);
              const day = dateObj.getDate();
              const month = dateObj.toLocaleDateString('ml-IN', { month: 'short' });
              const weekday = dateObj.toLocaleDateString('ml-IN', { weekday: 'short' });

              return (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex gap-4 items-start relative overflow-hidden"
                >
                  {/* Date badge */}
                  <div className="flex flex-col items-center justify-center shrink-0 w-14 h-16 bg-primary-container/40 border border-primary/10 rounded-xl font-label text-center p-1 text-primary">
                    <span className="text-[10px] uppercase font-bold tracking-wider leading-none opacity-85">{weekday}</span>
                    <span className="text-xl font-black leading-tight my-0.5">{day}</span>
                    <span className="text-[10px] font-bold leading-none opacity-85">{month}</span>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1 flex flex-col gap-2">
                    {/* Category Label */}
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] font-black tracking-wide uppercase px-2 py-0.5 rounded bg-surface-container border border-outline-variant/10 text-on-surface-variant flex items-center gap-1 font-label">
                        <Tag className="w-3 h-3 text-primary" />
                        {categoryLabel}
                      </span>
                      {event.isFeatured && (
                        <span className="text-[9px] font-black tracking-wide uppercase px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label">
                          FEATURED
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-base font-black text-on-surface leading-snug">{event.title}</h3>
                      <p className="text-xs text-on-surface-variant/90 leading-relaxed font-medium mt-1.5">
                        {event.description}
                      </p>
                    </div>

                    {/* Metadata details (time and venue) */}
                    <div className="flex flex-col gap-1 text-[11px] text-on-surface-variant font-medium mt-1">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span className="font-bold text-on-surface">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3"
            >
              <AlertCircle className="w-10 h-10 text-on-surface-variant/40" />
              <div>
                <p className="text-sm font-bold text-on-surface">പരിപാടികളൊന്നും കണ്ടെത്താനായില്ല</p>
                <p className="text-xs text-on-surface-variant mt-1">മറ്റൊരു കാറ്റഗറിയിലോ സെർച്ചിലോ തിരയുക.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
