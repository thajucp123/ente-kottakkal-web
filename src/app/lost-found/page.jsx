'use client';

import { useState, useEffect } from 'react';
import { Compass, Search, Phone, Plus, MapPin, Calendar, Tag, AlertCircle, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { INITIAL_LOST_FOUND, LOST_FOUND_CATEGORIES } from '@/data/lost_found_mock';

export default function LostFoundScreen() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'lost', 'found'
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Load from localStorage + Initial Mock Data
    const stored = localStorage.getItem('ente_kottakkal_lost_found');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setItems([...parsed, ...INITIAL_LOST_FOUND]);
      } catch (e) {
        setItems(INITIAL_LOST_FOUND);
      }
    } else {
      setItems(INITIAL_LOST_FOUND);
    }
  }, []);

  // Filter logic
  const filteredItems = items.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = activeTab === 'all' ? true : item.type === activeTab;
    const matchesCategory = activeCategory === 'all' ? true : item.category === activeCategory;

    return matchesSearch && matchesTab && matchesCategory;
  });

  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('ml-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch (e) {
      return dateStr;
    }
  };

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
          <h2 className="text-xl font-bold text-on-surface leading-tight flex items-center gap-2">
            നഷ്ടപ്പെട്ടവ & ലഭിച്ചവ
          </h2>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">വഴിയിൽ നിന്നും ലഭിച്ചതോ നഷ്ടപ്പെട്ടതോ ആയവ</p>
        </div>
      </div>

      {/* Sticky Filter & Actions Controls */}
      <div className="sticky top-16 bg-surface/95 backdrop-blur-md z-30 py-3 flex flex-col gap-3 -mx-4 px-4 border-b border-outline-variant/10">
        
        {/* Search Input and Add Button */}
        <div className="flex gap-2 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="തിരയുക (പേര്, സ്ഥലം)..." 
              className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border border-outline-variant/40 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
            />
          </div>
          
          <Link 
            href="/lost-found/create" 
            className="h-11 px-4 bg-primary text-on-primary font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>കൂട്ടിച്ചേർക്കുക</span>
          </Link>
        </div>

        {/* Lost/Found Toggles */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-surface-container rounded-xl border border-outline-variant/20 shadow-inner">
          <button 
            onClick={() => setActiveTab('all')}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'all' 
                ? 'bg-secondary text-on-secondary shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            എല്ലാം (All)
          </button>
          <button 
            onClick={() => setActiveTab('lost')}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'lost' 
                ? 'bg-error text-on-error shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            നഷ്ടപ്പെട്ടവ (Lost)
          </button>
          <button 
            onClick={() => setActiveTab('found')}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'found' 
                ? 'bg-primary text-on-primary shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            ലഭിച്ചവ (Found)
          </button>
        </div>

        {/* Categories Chips */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 whitespace-nowrap text-xs font-bold rounded-full border transition-all ${
              activeCategory === 'all'
                ? 'bg-secondary-container text-on-secondary-container border-secondary/20 shadow-sm'
                : 'bg-surface-container-low text-on-surface-variant border-outline-variant/20 hover:bg-surface-container-high'
            }`}
          >
            എല്ലാ വിഭാഗങ്ങളും
          </button>
          {LOST_FOUND_CATEGORIES.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 whitespace-nowrap text-xs font-bold rounded-full border transition-all ${
                activeCategory === cat.id
                  ? 'bg-secondary-container text-on-secondary-container border-secondary/20 shadow-sm'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/20 hover:bg-surface-container-high'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Item Listings Container */}
      <div className="flex flex-col gap-3.5 mt-2">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => {
              const isLost = item.type === 'lost';
              const catLabel = LOST_FOUND_CATEGORIES.find(c => c.id === item.category)?.label || item.category;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex flex-col gap-3 relative overflow-hidden"
                >
                  {/* Category & Status Badge Header */}
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-on-surface-variant font-label bg-surface-container px-2.5 py-1 rounded-md border border-outline-variant/10">
                      <Tag className="w-3 h-3 text-secondary" />
                      {catLabel}
                    </span>

                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full tracking-wide shadow-inner ${
                      isLost 
                        ? 'bg-error-container text-on-error-container border border-error/10' 
                        : 'bg-primary-container text-on-primary-container border border-primary/10'
                    }`}>
                      {isLost ? 'LOST (നഷ്ടപ്പെട്ടു)' : 'FOUND (ലഭിച്ചു)'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base font-black text-on-surface leading-snug">{item.title}</h3>
                    <p className="text-sm text-on-surface-variant mt-1.5 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full border-t border-outline-variant/10 my-1"></div>

                  {/* Bottom Stats & Contacts */}
                  <div className="flex justify-between items-center gap-3">
                    <div className="flex flex-col gap-1 text-xs text-on-surface-variant font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        <span>{item.location}</span>
                      </span>
                      <span className="flex items-center gap-1 font-label text-[11px] opacity-75">
                        <Calendar className="w-3.5 h-3.5 text-secondary" />
                        <span>{formatDate(item.createdAt)}</span>
                      </span>
                    </div>

                    <a
                      href={`tel:${item.contactNumber}`}
                      className="h-10 px-4 bg-primary text-on-primary rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-90 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer font-bold text-xs"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>ബന്ധപ്പെടുക</span>
                    </a>
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
                <p className="text-sm font-bold text-on-surface">സാധനങ്ങളൊന്നും കണ്ടെത്താനായില്ല</p>
                <p className="text-xs text-on-surface-variant mt-1">മറ്റൊരു സെർച്ച് വേഡ് അല്ലെങ്കിൽ കാറ്റഗറി തിരയുക.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
