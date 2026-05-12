'use client';

import { Megaphone, Store, Droplets, Zap, Stethoscope, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { NEWS } from '@/data/news';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col gap-4"
    >
      {/* Hero Card */}
      <section className="bg-primary-container text-on-primary-container rounded-xl overflow-hidden relative shadow-md">
        <div className="h-44 w-full bg-surface-container-highest relative">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbM4jOgkffJjewLKIFWXZt0fXxPDaZ5CM-6UWGjje5R4xRQaTnxuyJg_cr8NoVJTb1-wLEgZ5BHrdiy3f-92iH-cqw3nvw8mMybgsv_2vafvw9fbx3ba2xRk3RqDU1guZ29w64U_SI6KfA6Yq_RC1CE8LSTrQ-DLsxvBFygS3SCJOxstmDdXaAty3jlYd3OCrumvP7mD6QI1A36tk0D7oQ8fKtPPrRukylXwL-hPcV_dge3N_H86rrbTXBBCZVFgYk9C6mdAVXBAw" 
            alt="Welcome" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-5">
          <h2 className="text-2xl font-bold text-primary-fixed leading-tight">കോട്ടയ്ക്കലിലേക്ക് സ്വാഗതം</h2>
          <p className="text-sm opacity-90 mt-1">ഡിജിറ്റൽ ഗ്രാമസഭയുടെ പുതിയ മുഖം.</p>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="bg-secondary-fixed text-on-secondary-fixed border border-primary/20 rounded-xl p-4 flex gap-3 shadow-sm items-start">
        <Megaphone className="text-secondary w-6 h-6 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-xs font-bold font-label text-secondary-container">പ്രധാന അറിയിപ്പ്</h3>
          <p className="text-sm mt-0.5">നാളെ രാവിലെ 9 മുതൽ 5 വരെ കുടിവെള്ള വിതരണം തടസ്സപ്പെടുന്നതാണ്.</p>
        </div>
      </div>

      {/* Quick Access Bento */}
      <h3 className="text-lg font-bold text-on-surface mt-2">സേവനങ്ങൾ</h3>
      <div className="grid grid-cols-2 gap-3">
        <Link 
          href="/shops"
          className="bg-secondary-container text-on-secondary-container rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner">
            <Store className="w-6 h-6 text-secondary" />
          </div>
          <span className="text-sm font-semibold font-label">കടകൾ</span>
        </Link>

        <Link 
          href="/blood"
          className="bg-error-container text-on-error-container rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner text-error">
            <Droplets className="w-6 h-6 fill-current" />
          </div>
          <span className="text-sm font-semibold font-label">ബ്ലഡ് ബാങ്ക്</span>
        </Link>

        <Link 
          href="/workers"
          className="bg-surface-container rounded-xl p-5 flex flex-col items-center justify-center gap-3 border border-outline-variant/30 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-inner">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <span className="text-sm font-semibold font-label">തൊഴിലാളികൾ</span>
        </Link>

        <Link 
          href="/services"
          className="bg-surface-container rounded-xl p-5 flex flex-col items-center justify-center gap-3 border border-outline-variant/30 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-inner text-on-primary-container">
            <Stethoscope className="w-6 h-6" />
          </div>
          <span className="text-sm font-semibold font-label">ആരോഗ്യം</span>
        </Link>
      </div>

      {/* News List */}
      <h3 className="text-lg font-bold text-on-surface mt-2">പുതിയ വാർത്തകൾ</h3>
      <div className="flex flex-col gap-3">
        {NEWS.map((item) => (
          <div key={item.id} className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex gap-4 border border-outline-variant/20 hover:bg-surface-container-low cursor-pointer transition-colors">
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 shadow-sm border border-outline-variant/10">
              <img src={item.image} alt="News" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-bold text-on-surface leading-tight mb-1">{item.title}</h4>
              <div className="flex items-center gap-1.5 text-on-surface-variant text-[11px] font-label font-medium opacity-70">
                <Clock className="w-3 h-3" />
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
