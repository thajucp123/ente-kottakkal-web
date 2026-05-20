'use client';

import { Megaphone, Store, Droplets, Zap, Stethoscope, Clock, Compass, Briefcase, GraduationCap, Key, Calendar, Sparkles, Map, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { NEWS } from '@/data/news';
import { ANNOUNCEMENTS } from '@/data/announcements';

const formatDate = (dateStr) => {
  try {
    return new Date(dateStr).toLocaleDateString('ml-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch { return dateStr; }
};

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
          <h2 className="text-2xl font-bold text-primary-fixed leading-tight">കോട്ടക്കലിലേക്ക് സ്വാഗതം</h2>
          <p className="text-sm opacity-90 mt-1">ഡിജിറ്റൽ ഗ്രാമത്തിന്റെ പുതിയ മുഖം.</p>
        </div>
      </section>

      {/* Alert Banners */}
      <div className="flex flex-col gap-2.5">
        {ANNOUNCEMENTS.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className={`rounded-xl p-4 flex gap-3 shadow-sm items-start border ${
              item.isUrgent
                ? 'bg-error-container/20 border-error/20 text-on-surface'
                : 'bg-secondary-fixed text-on-secondary-fixed border-primary/20'
            }`}
          >
            {item.isUrgent
              ? <AlertTriangle className="text-error w-5 h-5 mt-0.5 flex-shrink-0" />
              : <Megaphone className="text-secondary w-5 h-5 mt-0.5 flex-shrink-0" />
            }
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className={`text-xs font-bold font-label ${
                  item.isUrgent ? 'text-error' : 'text-secondary-container'
                }`}>{item.title}</h3>
                <span className="text-[10px] text-on-surface-variant/40 font-label shrink-0 flex items-center gap-0.5">
                  <Calendar className="w-2.5 h-2.5" />
                  {formatDate(item.date)}
                </span>
              </div>
              <p className="text-sm mt-0.5 leading-snug">{item.message}</p>
            </div>
          </div>
        ))}
        <Link
          href="/announcements"
          className="w-full bg-secondary-container/25 text-on-surface-variant rounded-xl p-2.5 text-center font-semibold hover:scale-[1.02] active:scale-95 transition-transform block text-md mt-1"
        >
          <span>കൂടുതൽ അറിയിപ്പുകൾ &gt;</span>
        </Link>
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
          className="bg-emerald-100/90 text-emerald-950 border border-emerald-200/60 rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner">
            <Zap className="w-6 h-6 text-emerald-700 fill-current" />
          </div>
          <span className="text-sm font-semibold font-label">തൊഴിലാളികൾ</span>
        </Link>

        <Link 
          href="/health"
          className="bg-blue-100/90 text-blue-950 border border-blue-200/60 rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner text-blue-700">
            <Stethoscope className="w-6 h-6" />
          </div>
          <span className="text-sm font-semibold font-label">ആരോഗ്യം</span>
        </Link>

        {/* Education Link added under Services */}
        <Link 
          href="/education"
          className="col-span-2 bg-indigo-100/90 text-indigo-950 border border-indigo-200/60 rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner">
            <GraduationCap className="w-6 h-6 text-indigo-700" />
          </div>
          <span className="text-sm font-semibold font-label text-center">വിദ്യാഭ്യാസം</span>
        </Link>
      </div>

      {/* Community Services Grid */}
      <h3 className="text-lg font-bold text-on-surface mt-2">കമ്മ്യൂണിറ്റി</h3>
      <div className="grid grid-cols-2 gap-3">
        <Link 
          href="/lost-found"
          className="bg-rose-100/90 text-rose-950 border border-rose-200/60 rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner">
            <Compass className="w-6 h-6 text-rose-700" />
          </div>
          <span className="text-sm font-semibold font-label text-center">നഷ്ടപ്പെട്ടവ/ലഭിച്ചവ</span>
        </Link>

        <Link 
          href="/jobs"
          className="bg-sky-100/90 text-sky-950 border border-sky-200/60 rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner">
            <Briefcase className="w-6 h-6 text-sky-700" />
          </div>
          <span className="text-sm font-semibold font-label text-center">തൊഴിലവസരങ്ങൾ</span>
        </Link>

        <Link 
          href="/properties"
          className="bg-amber-100/90 text-amber-950 border border-amber-200/60 rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner">
            <Key className="w-6 h-6 text-amber-700" />
          </div>
          <span className="text-sm font-semibold font-label text-center">വാടകകൾ & വസ്തുക്കൾ</span>
        </Link>

        <Link 
          href="/events"
          className="bg-purple-100/90 text-purple-950 border border-purple-200/60 rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner">
            <Calendar className="w-6 h-6 text-purple-700" />
          </div>
          <span className="text-sm font-semibold font-label text-center">പരിപാടികൾ</span>
        </Link>

        <Link 
          href="/religious"
          className="bg-yellow-100/90 text-yellow-950 border border-yellow-200/60 rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner">
            <Sparkles className="w-6 h-6 text-yellow-700" />
          </div>
          <span className="text-sm font-semibold font-label text-center">ആരാധനാലയങ്ങൾ</span>
        </Link>

        <Link 
          href="/tourism"
          className="bg-teal-100/90 text-teal-950 border border-teal-200/60 rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center shadow-inner">
            <Map className="w-6 h-6 text-teal-700" />
          </div>
          <span className="text-sm font-semibold font-label text-center">ടൂറിസം & സംസ്കാരം</span>
        </Link>
      </div>

      {/* News List */}
      <h3 className="text-lg font-bold text-on-surface mt-2">പുതിയ വാർത്തകൾ</h3>
      <div className="flex flex-col gap-3">
        {NEWS.map((item) => (
          <Link href="/news" key={item.id} className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex gap-4 border border-outline-variant/20 hover:bg-surface-container-low cursor-pointer transition-colors">
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
          </Link>
        ))}
        <Link 
          href="/news" 
          className="w-full bg-primary-container/25 text-on-surface-variant rounded-xl p-2.5 text-center font-semibold hover:scale-[1.02] active:scale-95 transition-transform block text-md mt-1"
        >
          <span>എല്ലാ വാർത്തകളും &gt;</span>
        </Link>
      </div>
    </motion.div>
  );
}
