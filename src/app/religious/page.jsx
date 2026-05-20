'use client';

import { useState } from 'react';
import { Sparkles, Search, Phone, MapPin, Clock, Calendar, Bell, Shield, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { 
  RELIGIOUS_TABS, 
  FAITHS, 
  MOCK_PRAYER_TIMES, 
  MOCK_RELIGIOUS_PLACES, 
  MOCK_RELIGIOUS_ANNOUNCEMENTS 
} from '@/data/religious_mock';

export default function ReligiousScreen() {
  const [activeTab, setActiveTab] = useState('timings'); // 'timings', 'directory', 'announcements'
  const [activeFaith, setActiveFaith] = useState('all'); // 'all', 'hindu', 'muslim', 'christian'
  const [searchQuery, setSearchQuery] = useState('');

  // Handle filtering for Directory & Announcements
  const getFilteredDirectory = () => {
    const q = searchQuery.toLowerCase();
    return MOCK_RELIGIOUS_PLACES.filter(place => {
      const matchesSearch =
        place.name.toLowerCase().includes(q) ||
        place.location.toLowerCase().includes(q) ||
        place.description.toLowerCase().includes(q);
      const matchesFaith = activeFaith === 'all' ? true : place.faith === activeFaith;
      return matchesSearch && matchesFaith;
    });
  };

  const getFilteredAnnouncements = () => {
    const q = searchQuery.toLowerCase();
    return MOCK_RELIGIOUS_ANNOUNCEMENTS.filter(ann => {
      const matchesSearch =
        ann.title.toLowerCase().includes(q) ||
        ann.description.toLowerCase().includes(q);
      const matchesFaith = activeFaith === 'all' ? true : ann.faith === activeFaith;
      return matchesSearch && matchesFaith;
    });
  };

  const filteredDirectory = getFilteredDirectory();
  const filteredAnnouncements = getFilteredAnnouncements();

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
          <h2 className="text-xl font-bold text-on-surface leading-tight">ആരാധനാലയങ്ങൾ & വിവരങ്ങൾ</h2>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">ഹിന്ദു, മുസ്ലിം, ക്രിസ്ത്യൻ ആരാധനാലയങ്ങൾ, സമയക്രമങ്ങൾ</p>
        </div>
      </div>

      {/* Filter and Search Stickiness */}
      <div className="sticky top-16 bg-surface/95 backdrop-blur-md z-30 py-3 flex flex-col gap-3 -mx-4 px-4 border-b border-outline-variant/10">
        
        {/* Search input (only visible in directory & announcements tabs) */}
        {activeTab !== 'timings' && (
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ആരാധനാലയങ്ങൾ, വിശേഷങ്ങൾ തിരയുക..." 
              className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border border-outline-variant/40 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
            />
          </div>
        )}

        {/* Tab Toggle (Timings / Directory / Announcements) */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-surface-container rounded-xl border border-outline-variant/20 shadow-inner">
          {RELIGIOUS_TABS.map(tab => (
            <button 
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSearchQuery('');
              }}
              className={`py-2 text-[11px] font-bold rounded-lg transition-all ${
                activeTab === tab.id 
                  ? 'bg-secondary text-on-secondary shadow-sm' 
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Faith sub-filters (Directory / Announcements tabs only) */}
        {activeTab !== 'timings' && (
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {FAITHS.map(faith => (
              <button 
                key={faith.id}
                onClick={() => setActiveFaith(faith.id)}
                className={`px-4 py-1.5 whitespace-nowrap text-xs font-bold rounded-full border transition-all ${
                  activeFaith === faith.id
                    ? 'bg-secondary-container text-on-secondary-container border-secondary/20 shadow-sm'
                    : 'bg-surface-container-low text-on-surface-variant border-outline-variant/20 hover:bg-surface-container-high'
                }`}
              >
                {faith.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Screen body depending on selected Tab */}
      <div className="mt-2">
        <AnimatePresence mode="wait">
          {activeTab === 'timings' && (
            <motion.div
              key="timings-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-5"
            >
              {/* Islamic Prayer Timings card */}
              <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm">
                <div className="flex items-center gap-2 mb-3.5">
                  <span className="w-2.5 h-6 bg-secondary rounded-full"></span>
                  <h3 className="text-base font-black text-on-surface">ഇസ്‌ലാമിക നമസ്കാര സമയങ്ങൾ</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {MOCK_PRAYER_TIMES.muslim.map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-surface-container/45 rounded-xl px-4 py-3 border border-outline-variant/5">
                      <span className="text-sm font-bold text-on-surface">{p.name}</span>
                      <span className="text-xs font-bold font-label bg-secondary-container/50 px-3 py-1 rounded text-on-secondary-container">{p.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hindu Darshan Timings card */}
              <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm">
                <div className="flex items-center gap-2 mb-3.5">
                  <span className="w-2.5 h-6 bg-primary rounded-full"></span>
                  <h3 className="text-base font-black text-on-surface">ക്ഷേത്ര ദർശന സമയങ്ങൾ</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {MOCK_PRAYER_TIMES.hindu.map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-surface-container/45 rounded-xl px-4 py-3 border border-outline-variant/5">
                      <span className="text-sm font-bold text-on-surface">{p.name}</span>
                      <span className="text-xs font-bold font-label bg-primary-container/40 px-3 py-1 rounded text-on-primary-container">{p.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Christian Mass Timings card */}
              <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm">
                <div className="flex items-center gap-2 mb-3.5">
                  <span className="w-2.5 h-6 bg-outline rounded-full"></span>
                  <h3 className="text-base font-black text-on-surface">ക്രൈസ്തവ ആരാധന സമയങ്ങൾ</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {MOCK_PRAYER_TIMES.christian.map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-surface-container/45 rounded-xl px-4 py-3 border border-outline-variant/5">
                      <span className="text-sm font-bold text-on-surface">{p.name}</span>
                      <span className="text-xs font-bold font-label bg-surface-container px-3 py-1 rounded text-on-surface-variant border border-outline-variant/15">{p.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'directory' && (
            <motion.div
              key="directory-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-3.5"
            >
              {filteredDirectory.length > 0 ? (
                filteredDirectory.map(place => {
                  const faithColor = 
                    place.faith === 'hindu' ? 'bg-primary-container text-on-primary-container' : 
                    place.faith === 'muslim' ? 'bg-secondary-container text-on-secondary-container' :
                    'bg-surface-container-high text-on-surface-variant';
                  
                  const faithLabel = FAITHS.find(f => f.id === place.faith)?.label || place.faith;

                  return (
                    <motion.div
                      key={place.id}
                      layout
                      className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex flex-col gap-3"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-base font-black text-on-surface leading-snug">{place.name}</h3>
                        <span className={`text-[10px] font-black tracking-wide uppercase px-2 py-0.5 rounded font-label shrink-0 ${faithColor}`}>
                          {faithLabel.split(' ')[0]}
                        </span>
                      </div>

                      <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                        {place.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-on-surface-variant font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{place.location}</span>
                      </div>

                      <div className="flex justify-end border-t border-outline-variant/10 pt-2.5 mt-0.5">
                        <a
                          href={`tel:${place.phone}`}
                          className="h-9 px-4 bg-surface-container border border-outline-variant/20 rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-95 text-on-surface font-bold text-xs"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>ബന്ധപ്പെടുക</span>
                        </a>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3">
                  <MapPin className="w-10 h-10 text-on-surface-variant/40" />
                  <p className="text-sm font-bold text-on-surface">ആരാധനാലയങ്ങൾ ഒന്നും കാണാനില്ല</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'announcements' && (
            <motion.div
              key="announcements-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-3.5"
            >
              {filteredAnnouncements.length > 0 ? (
                filteredAnnouncements.map(ann => {
                  const faithColor = 
                    ann.faith === 'hindu' ? 'border-primary/30' : 
                    ann.faith === 'muslim' ? 'border-secondary/30' :
                    'border-outline-variant/30';

                  return (
                    <motion.div
                      key={ann.id}
                      layout
                      className={`bg-surface-container-lowest rounded-2xl p-5 border shadow-sm flex gap-3.5 ${faithColor}`}
                    >
                      <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center shrink-0 shadow-inner">
                        <Bell className="w-5 h-5 text-secondary" />
                      </div>

                      <div className="flex-1 flex flex-col gap-1.5">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="text-sm font-black text-on-surface leading-tight">{ann.title}</h3>
                          <span className="text-[10px] font-medium text-on-surface-variant/75 font-label shrink-0">{ann.date}</span>
                        </div>
                        <p className="text-xs text-on-surface-variant leading-relaxed font-medium">
                          {ann.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3">
                  <Bell className="w-10 h-10 text-on-surface-variant/40" />
                  <p className="text-sm font-bold text-on-surface">അറിയിപ്പുകൾ ഒന്നുമില്ല</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
