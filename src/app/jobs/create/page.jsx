'use client';

import { useState } from 'react';
import { Briefcase, ArrowLeft, Send, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { JOB_CATEGORIES } from '@/data/jobs_mock';

export default function CreateJobScreen() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [salary, setSalary] = useState('');
  const [type, setType] = useState('Full-Time'); // 'Full-Time', 'Part-Time', 'Temporary', 'Gulf Vacancy'
  const [category, setCategory] = useState('delivery');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [expiresAt, setExpiresAt] = useState(() => {
    // Default expiration date = 30 days from now
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date.toISOString().split('T')[0];
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!title.trim() || !company.trim() || !salary.trim() || !contactNumber.trim() || !location.trim() || !description.trim()) {
      setErrorMsg('എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കേണ്ടതാണ് (Please fill all fields).');
      return;
    }

    const newJob = {
      id: `job-${Date.now()}`,
      title: title.trim(),
      company: company.trim(),
      salary: salary.trim(),
      type,
      category,
      contactNumber: contactNumber.trim(),
      location: location.trim(),
      description: description.trim(),
      expiresAt,
      createdAt: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem('ente_kottakkal_jobs') || '[]';
      const parsed = JSON.parse(stored);
      // Prepend the new job
      localStorage.setItem('ente_kottakkal_jobs', JSON.stringify([newJob, ...parsed]));
      setIsSubmitted(true);
    } catch (err) {
      setErrorMsg('അപ്‌ലോഡ് ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക.');
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center gap-4"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-20 h-20 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-lg border border-primary/20"
        >
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </motion.div>

        <h2 className="text-xl font-black text-on-surface leading-tight">വിജയകരമായി സമർപ്പിച്ചു!</h2>
        <p className="text-sm text-on-surface-variant max-w-[280px]">
          തൊഴിലവസരം വിജയകരമായി പോസ്റ്റ് ചെയ്യപ്പെട്ടിരിക്കുന്നു. പരിശോധനയ്ക്ക് ശേഷം ലിസ്റ്റിൽ ലഭ്യമാകും.
        </p>
        <div className="w-full border-t border-outline-variant/10 my-2 max-w-[240px]"></div>
        <p className="text-xs text-on-surface-variant/80 max-w-[240px]">
          Your job vacancy has been posted successfully and will appear in the directory.
        </p>

        <button
          onClick={() => router.push('/jobs')}
          className="mt-4 bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-xl shadow-md active:scale-95 transition-transform"
        >
          മടങ്ങുക (Back to Job Board)
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-6"
    >
      {/* Title & Back Button */}
      <div className="flex items-center gap-3">
        <Link 
          href="/jobs"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-xl font-bold text-on-surface leading-tight">ഒഴിവ് ചേർക്കുക</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Post a job vacancy</p>
        </div>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col gap-5">
        
        {/* Error Alert Box */}
        {errorMsg && (
          <div className="bg-error-container text-on-error-container p-3 rounded-xl flex items-center gap-2 border border-error/20 text-xs font-bold text-left leading-normal animate-shake">
            <AlertTriangle className="w-4 h-4 shrink-0 text-error" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Job Title */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">തൊഴിലിന്റെ പേര് (Job Title)*</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ഉദാഹരണം: ഡെലിവറി പാർട്ണർ, സെയിൽസ് ഗേൾ"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Company/Employer Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">സ്ഥാപനം/തൊഴിലുടമ (Company Name)*</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="ഉദാഹരണം: റോയൽ ബേക്കറി, അൽ-അമീൻ മൊബൈൽസ്"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Job Type selection */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">തൊഴിൽ തരം (Job Type)*</label>
          <div className="relative">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
            >
              <option value="Full-Time">Full-Time (പൂർണ്ണ സമയം)</option>
              <option value="Part-Time">Part-Time (ഭാഗിക സമയം)</option>
              <option value="Temporary">Temporary (താൽക്കാലികം)</option>
              <option value="Gulf Vacancy">Gulf Vacancy (ഗൾഫ് ഒഴിവ്)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
              <Briefcase className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">വിഭാഗം (Category)*</label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
            >
              {JOB_CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
              <Briefcase className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Salary Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">പ്രതീക്ഷിക്കുന്ന ശമ്പളം (Salary Range)*</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="ഉദാഹരണം: 10000 - 12000, 1500 SAR/Month"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Contact Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">ഫോൺ നമ്പർ (Contact Number)*</label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="ബന്ധപ്പെടാനുള്ള മൊബൈൽ നമ്പർ"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Location Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">സ്ഥലം (Location)*</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="ജോലി ചെയ്യേണ്ട സ്ഥലം (ഉദാ: കോട്ടക്കൽ ടൗൺ)"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Expiration date */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">സാധുത തീയതി (Expires At)*</label>
          <div className="relative">
            <input
              type="date"
              value={expiresAt}
              onChange={(e) => setExpiresAt(e.target.value)}
              required
              className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Description Textarea */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">ജോലി വിവരണം (Description)*</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="യോഗ്യതകൾ, പ്രവൃത്തിപരിചയം, ജോലി സമയം എന്നിവ ഇവിടെ രേഖപ്പെടുത്തുക..."
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all resize-none leading-relaxed"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform mt-2"
        >
          <Send className="w-4 h-4 fill-current" />
          പോസ്റ്റ് ചെയ്യുക
        </button>
      </form>
    </motion.div>
  );
}
