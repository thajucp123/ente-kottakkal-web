'use client';

import { BookOpen, GraduationCap, Sparkles, Bell, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function EducationMenuScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex flex-col gap-6 pb-12"
    >
      {/* Header Banner */}
      <div className="flex items-center gap-3">
        <Link 
          href="/"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-on-surface leading-tight">വിദ്യാഭ്യാസം (Education)</h2>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ, സ്കോളർഷിപ്പ് വിവരങ്ങൾ എന്നിവ കാണാം.</p>
        </div>
      </div>

      {/* Grid Menu Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Schools & Colleges */}
        <Link 
          href="/education/institutions"
          className="bg-primary-container text-on-primary-container rounded-2xl p-6 flex flex-col items-center justify-center gap-3.5 shadow-md hover:scale-[1.02] active:scale-95 transition-transform border border-outline-variant/10 min-h-[160px] text-center"
        >
          <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center shadow-inner">
            <BookOpen className="w-8 h-8 text-on-primary-container" />
          </div>
          <p className="text-sm font-bold font-label leading-tight">സ്കൂളുകൾ & കോളേജുകൾ</p>
        </Link>

        {/* Tuitions & Coaching */}
        <Link 
          href="/education/tuitions"
          className="bg-secondary-container text-on-secondary-container rounded-2xl p-6 flex flex-col items-center justify-center gap-3.5 shadow-md hover:scale-[1.02] active:scale-95 transition-transform border border-outline-variant/10 min-h-[160px] text-center"
        >
          <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center shadow-inner">
            <GraduationCap className="w-8 h-8 text-on-secondary-container" />
          </div>
          <p className="text-sm font-bold font-label leading-tight">ട്യൂഷൻ & കോച്ചിങ്</p>
        </Link>

        {/* Scholarships */}
        <Link 
          href="/education/scholarships"
          className="bg-error-container text-on-error-container rounded-2xl p-6 flex flex-col items-center justify-center gap-3.5 shadow-md hover:scale-[1.02] active:scale-95 transition-transform border border-outline-variant/10 min-h-[160px] text-center"
        >
          <div className="w-14 h-14 bg-error/20 rounded-full flex items-center justify-center shadow-inner">
            <Sparkles className="w-8 h-8 text-on-error-container" />
          </div>
          <p className="text-sm font-bold font-label leading-tight">സ്കോളർഷിപ്പുകൾ</p>
        </Link>

        {/* Notices */}
        <Link 
          href="/education/notices"
          className="bg-surface-container-highest text-on-surface rounded-2xl p-6 flex flex-col items-center justify-center gap-3.5 shadow-md hover:scale-[1.02] active:scale-95 transition-transform border border-outline-variant/15 min-h-[160px] text-center"
        >
          <div className="w-14 h-14 bg-on-surface-variant/10 rounded-full flex items-center justify-center shadow-inner">
            <Bell className="w-8 h-8 text-on-surface-variant" />
          </div>
          <p className="text-sm font-bold font-label leading-tight">അറിയിപ്പുകൾ (Notices)</p>
        </Link>
      </div>
    </motion.div>
  );
}
