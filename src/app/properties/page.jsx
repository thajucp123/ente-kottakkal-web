'use client';

import { useState, useEffect } from 'react';
import { Home, Search, Phone, Plus, MapPin, Key, DollarSign, Calendar, Tag, AlertCircle, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { INITIAL_PROPERTIES, PROPERTY_CATEGORIES } from '@/data/properties_mock';

export default function PropertiesScreen() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('rental'); // 'rental', 'sale'
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Load from localStorage + Initial Mock Data
    const stored = localStorage.getItem('ente_kottakkal_properties');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setProperties([...parsed, ...INITIAL_PROPERTIES]);
      } catch (e) {
        setProperties(INITIAL_PROPERTIES);
      }
    } else {
      setProperties(INITIAL_PROPERTIES);
    }
  }, []);

  // Filter logic
  const filteredProperties = properties.filter(prop => {
    const matchesSearch = 
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = prop.type === activeTab;
    const matchesCategory = activeCategory === 'all' ? true : prop.category === activeCategory;

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
          <h2 className="text-xl font-bold text-on-surface leading-tight">വാടകകൾ & വസ്തുക്കൾ</h2>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">വീടുകൾ, കടമുറികൾ, വസ്തുക്കൾ എന്നിവ കണ്ടെത്താം</p>
        </div>
      </div>

      {/* Filter and Search Stickiness */}
      <div className="sticky top-16 bg-surface/95 backdrop-blur-md z-30 py-3 flex flex-col gap-3 -mx-4 px-4 border-b border-outline-variant/10">
        
        {/* Search input and post property */}
        <div className="flex gap-2 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="തിരയുക (വസ്തുക്കൾ, സ്ഥലം)..." 
              className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border border-outline-variant/40 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
            />
          </div>
          
          <Link 
            href="/properties/create" 
            className="h-11 px-4 bg-primary text-on-primary font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>ചേർക്കുക</span>
          </Link>
        </div>

        {/* Tab Toggle (Rent / Sale) */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-surface-container rounded-xl border border-outline-variant/20 shadow-inner">
          <button 
            onClick={() => setActiveTab('rental')}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'rental' 
                ? 'bg-secondary text-on-secondary shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            വാടകയ്ക്ക് (Rent)
          </button>
          <button 
            onClick={() => setActiveTab('sale')}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'sale' 
                ? 'bg-primary text-on-primary shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            വില്പനയ്ക്ക് (For Sale)
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 whitespace-nowrap text-xs font-bold rounded-full border transition-all ${
              activeCategory === 'all'
                ? 'bg-secondary-container text-on-secondary-container border-secondary/20 shadow-sm'
                : 'bg-surface-container-low text-on-surface-variant border-outline-variant/20 hover:bg-surface-container-high'
            }`}
          >
            എല്ലാം (All)
          </button>
          {PROPERTY_CATEGORIES.map(cat => (
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

      {/* Property Cards */}
      <div className="flex flex-col gap-3.5 mt-2">
        <AnimatePresence mode="popLayout">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(prop => {
              const isRental = prop.type === 'rental';
              const catLabel = PROPERTY_CATEGORIES.find(c => c.id === prop.category)?.label || prop.category;

              return (
                <motion.div
                  key={prop.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex flex-col gap-3 relative overflow-hidden"
                >
                  {/* Category Badge Header */}
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-on-surface-variant font-label bg-surface-container px-2.5 py-1 rounded-md border border-outline-variant/10">
                      <Tag className="w-3.5 h-3.5 text-secondary" />
                      {catLabel}
                    </span>

                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full tracking-wide shadow-inner ${
                      isRental 
                        ? 'bg-secondary-container text-on-secondary-container border border-secondary/10' 
                        : 'bg-primary-container text-on-primary-container border border-primary/10'
                    }`}>
                      {isRental ? 'RENT (വാടക)' : 'FOR SALE (വില്പന)'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base font-black text-on-surface leading-snug">{prop.title}</h3>
                    <p className="text-sm text-on-surface-variant mt-1.5 leading-relaxed font-medium">
                      {prop.description}
                    </p>
                  </div>

                  {/* Property Details row */}
                  <div className="grid grid-cols-3 gap-2 text-xs text-on-surface-variant bg-surface-container-low/60 rounded-xl p-3 border border-outline-variant/10 text-center font-medium">
                    <div className="flex flex-col gap-0.5 border-r border-outline-variant/20">
                      <span className="text-[10px] opacity-60">വില / ശമ്പളം</span>
                      <span className="font-bold text-secondary text-[11px] truncate">{prop.price}</span>
                    </div>
                    <div className="flex flex-col gap-0.5 border-r border-outline-variant/20">
                      <span className="text-[10px] opacity-60">അളവ് / കാറ്റഗറി</span>
                      <span className="font-bold text-on-surface truncate">{prop.size}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] opacity-60">സ്ഥലം</span>
                      <span className="font-bold text-on-surface truncate">{prop.location}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full border-t border-outline-variant/10 my-0.5"></div>

                  {/* Bottom Stats & Contacts */}
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-[10px] text-on-surface-variant/75 font-label font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span>{new Date(prop.createdAt).toLocaleDateString('ml-IN', { day: 'numeric', month: 'short' })}</span>
                    </span>

                    <a
                      href={`tel:${prop.contactNumber}`}
                      className="h-10 px-4 bg-primary text-on-primary rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-90 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer font-bold text-xs"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>ബന്ധപ്പെടുക (Call)</span>
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
                <p className="text-sm font-bold text-on-surface">വസ്തുക്കളൊന്നും കണ്ടെത്താനായില്ല</p>
                <p className="text-xs text-on-surface-variant mt-1">മറ്റൊരു സെർച്ച് വേഡ് അല്ലെങ്കിൽ കാറ്റഗറി തിരയുക.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
