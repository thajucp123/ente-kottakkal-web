'use client';

import { useState } from 'react';
import { ArrowLeft, Search, Clock, Newspaper, Share2, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { NEWS } from '@/data/news';

export default function NewsHubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [likes, setLikes] = useState({});

  const toggleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredNews = NEWS.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
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
          <h2 className="text-xl font-bold text-on-surface leading-tight">പ്രാദേശിക വാർത്തകൾ</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Ente Kottakkal News Hub</p>
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
            placeholder="വാർത്തകൾ തിരയുക..." 
            className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border border-outline-variant/40 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
          />
        </div>
      </div>

      {/* News Cards */}
      <div className="flex flex-col gap-4 mt-2">
        <AnimatePresence mode="popLayout">
          {filteredNews.length > 0 ? (
            filteredNews.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden flex flex-col group"
              >
                {/* News Image Header banner */}
                <div className="h-44 w-full relative bg-surface-container-highest overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Share button */}
                  <button className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 active:scale-90 text-white rounded-full backdrop-blur-sm transition-all border border-white/10">
                    <Share2 className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-white/90 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.time}</span>
                  </div>
                </div>

                {/* News Text Body */}
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-base font-black text-on-surface leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  {item.description && (
                    <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  <div className="flex justify-between items-center mt-2 pt-3 border-t border-outline-variant/10">
                    <span className="text-[10px] font-black tracking-wide bg-primary-container text-on-primary-container px-2.5 py-0.5 rounded-full uppercase">
                      LATEST NEWS
                    </span>

                    <button 
                      onClick={() => toggleLike(item.id)}
                      className={`flex items-center gap-1 text-xs font-bold transition-all py-1 px-3.5 rounded-full border border-outline-variant/20 ${
                        likes[item.id] 
                          ? 'bg-rose-50 text-rose-600 border-rose-100' 
                          : 'bg-surface hover:bg-surface-container'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${likes[item.id] ? 'fill-current text-rose-600' : 'text-on-surface-variant'}`} />
                      <span>{likes[item.id] ? 'Liked' : 'Like'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3">
              <Newspaper className="w-10 h-10 text-on-surface-variant/40" />
              <p className="text-sm font-bold text-on-surface">വാർത്തകളൊന്നും കണ്ടെത്താനായില്ല</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
