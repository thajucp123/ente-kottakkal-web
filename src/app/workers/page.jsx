'use client';

import { Search, ShieldCheck, Star, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { WORKERS } from '@/data/workers';
import Image from 'next/image';

export default function WorkersScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-on-surface">തൊഴിലാളികൾ</h2>
        <p className="text-sm text-on-surface-variant mt-1">നിങ്ങളുടെ പ്രദേശത്തെ മികച്ച സേവനങ്ങൾ കണ്ടെത്തുക.</p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
        <input 
          type="text" 
          placeholder="സേവനങ്ങൾ തിരയുക..." 
          className="w-full pl-12 pr-4 py-3.5 bg-surface-container-highest border border-outline-variant/40 rounded-full font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-8 -mx-4 px-4 pb-1">
        <button className="px-6 py-2 bg-secondary text-on-secondary rounded-full text-xs font-bold shadow-md">എല്ലാം</button>
        {['പ്ലംബർ', 'ഇലക്ട്രീഷ്യൻ', 'കാർപെന്റർ', 'മേസ്തിരി'].map(cat => (
          <button key={cat} className="px-6 py-2 bg-surface text-secondary border border-secondary/30 rounded-full text-xs font-bold hover:bg-secondary/10 transition-colors shadow-sm">
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {WORKERS.map((worker, idx) => (
          <div key={worker.id} className={`bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm transition-all hover:shadow-md ${idx === 0 ? 'bg-linear-to-br from-surface-container-low to-white ring-1 ring-primary/5' : ''}`}>
            {worker.status && (
              <div className="flex justify-end -mt-5 -mr-5 mb-4">
                <span className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-bl-2xl text-[10px] font-bold font-label flex items-center gap-1 shadow-sm">
                  <ShieldCheck className="w-3 h-3" /> {worker.status}
                </span>
              </div>
            )}
            <div className="flex gap-5 items-start">
              {worker.image ? (
                <div className="relative w-20 h-20 shadow-md ring-2 ring-white rounded-full overflow-hidden">
  <Image 
    src={worker.image} 
    alt={worker.name} 
    fill
    sizes="80px"
    className="object-cover"
  />
</div>
              ) : (
                <div className="w-20 h-20 bg-tertiary-container text-on-tertiary-container rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                  {worker.initials}
                </div>
              )}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-on-surface">{worker.name}</h3>
                    <p className="text-sm font-semibold text-secondary mt-0.5">{worker.profession}</p>
                  </div>
                  <div className="bg-surface-container-high px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-3 h-3 text-secondary fill-current" />
                    <span className="text-xs font-bold text-on-surface">{worker.rating}</span>
                    <span className="text-[10px] text-on-surface-variant font-label">({worker.reviews})</span>
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <button className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all">
                    <Phone className="w-4 h-4 fill-current" /> വിളിക്കുക
                  </button>
                  <button className="p-3 bg-surface-container-high text-primary rounded-xl shadow-sm border border-outline-variant/10 active:scale-95 transition-all">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
