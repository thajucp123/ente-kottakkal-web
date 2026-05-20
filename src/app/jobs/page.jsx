'use client';

import { useState, useEffect } from 'react';
import { Briefcase, Search, Phone, Plus, MapPin, DollarSign, Clock, AlertCircle, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { INITIAL_JOBS, JOB_CATEGORIES } from '@/data/jobs_mock';

export default function JobsScreen() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('All'); // 'All', 'Full-Time', 'Part-Time', 'Gulf Vacancy'

  useEffect(() => {
    // Load from localStorage + Initial Mock Data
    const stored = localStorage.getItem('ente_kottakkal_jobs');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setJobs([...parsed, ...INITIAL_JOBS]);
      } catch (e) {
        setJobs(INITIAL_JOBS);
      }
    } else {
      setJobs(INITIAL_JOBS);
    }
  }, []);

  // Filter logic
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' ? true : job.category === activeCategory;
    const matchesType = activeType === 'All' ? true : job.type === activeType;

    return matchesSearch && matchesCategory && matchesType;
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
          <h2 className="text-xl font-bold text-on-surface leading-tight">തൊഴിലവസരങ്ങൾ</h2>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">ചെറുകിട ജോലികളും പ്രാദേശിക ഒഴിവുകളും</p>
        </div>
      </div>

      {/* Filter and search stickiness */}
      <div className="sticky top-16 bg-surface/95 backdrop-blur-md z-30 py-3 flex flex-col gap-3 -mx-4 px-4 border-b border-outline-variant/10">
        
        {/* Search input and post action */}
        <div className="flex gap-2 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="തിരയുക (ജോലി, കമ്പനി, സ്ഥലം)..." 
              className="w-full pl-11 pr-4 py-3 bg-surface-container-highest border border-outline-variant/40 rounded-xl font-label text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
            />
          </div>
          
          <Link 
            href="/jobs/create" 
            className="h-11 px-4 bg-primary text-on-primary font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>ഒഴിവ് ചേർക്കുക</span>
          </Link>
        </div>

        {/* Job Type selection */}
        <div className="grid grid-cols-4 gap-1 p-1 bg-surface-container rounded-xl border border-outline-variant/20 shadow-inner">
          {['All', 'Full-Time', 'Part-Time', 'Gulf Vacancy'].map(type => (
            <button 
              key={type}
              onClick={() => setActiveType(type)}
              className={`py-1.5 text-[10px] font-bold rounded-lg transition-all ${
                activeType === type 
                  ? 'bg-secondary text-on-secondary shadow-sm' 
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {type === 'All' ? 'എല്ലാം' : type === 'Gulf Vacancy' ? 'Gulf' : type}
            </button>
          ))}
        </div>

        {/* Categories Chips */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          {JOB_CATEGORIES.map(cat => (
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

      {/* Job Cards Grid */}
      <div className="flex flex-col gap-3.5 mt-2">
        <AnimatePresence mode="popLayout">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex flex-col gap-3.5 relative overflow-hidden"
              >
                {/* Title and Job Type Badge Header */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-base font-black text-on-surface leading-tight">{job.title}</h3>
                    <span className="text-xs font-bold text-primary font-label mt-1 block opacity-90">{job.company}</span>
                  </div>

                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full tracking-wide shrink-0 shadow-inner ${
                    job.type === 'Full-Time' 
                      ? 'bg-primary-container text-on-primary-container border border-primary/10' 
                      : job.type === 'Part-Time' 
                      ? 'bg-secondary-container text-on-secondary-container border border-secondary/10' 
                      : 'bg-error-container text-on-error-container border border-error/10'
                  }`}>
                    {job.type}
                  </span>
                </div>

                {/* Details Section */}
                <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
                  {job.description}
                </p>

                {/* Info row */}
                <div className="grid grid-cols-2 gap-2 text-xs text-on-surface-variant bg-surface-container-low/60 rounded-xl p-3 border border-outline-variant/10">
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span className="font-label font-bold text-[11px] truncate">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span className="font-bold truncate">{job.location}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-outline-variant/10 my-0.5"></div>

                {/* Footer Call Trigger */}
                <div className="flex justify-between items-center gap-3">
                  <div className="flex items-center gap-1 text-[10px] text-on-surface-variant/75 font-label font-medium">
                    <Clock className="w-3 h-3 text-secondary" />
                    <span>സാധുത: {job.expiresAt}</span>
                  </div>

                  <a
                    href={`tel:${job.contactNumber}`}
                    className="h-10 px-4 bg-primary text-on-primary rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-90 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer font-bold text-xs"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" />
                    <span>ബന്ധപ്പെടുക (Call)</span>
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3"
            >
              <AlertCircle className="w-10 h-10 text-on-surface-variant/40" />
              <div>
                <p className="text-sm font-bold text-on-surface">ഒഴിവുകളൊന്നും കണ്ടെത്താനായില്ല</p>
                <p className="text-xs text-on-surface-variant mt-1">മറ്റൊരു സെർച്ച് വേഡ് അല്ലെങ്കിൽ കാറ്റഗറി ഉപയോഗിക്കുക.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
