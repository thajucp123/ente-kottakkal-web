'use client';

import { useState } from 'react';
import { Compass, ArrowLeft, Send, CheckCircle2, User, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LOST_FOUND_CATEGORIES } from '@/data/lost_found_mock';

export default function CreateLostFoundScreen() {
  const router = useRouter();
  
  const [type, setType] = useState('lost'); // 'lost', 'found'
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('documents');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!title.trim() || !contactNumber.trim() || !location.trim() || !description.trim()) {
      setErrorMsg('എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കേണ്ടതാണ് (Please fill all fields).');
      return;
    }

    const newItem = {
      id: `lf-${Date.now()}`,
      type,
      title: title.trim(),
      category,
      contactNumber: contactNumber.trim(),
      location: location.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    try {
      const stored = localStorage.getItem('ente_kottakkal_lost_found') || '[]';
      const parsed = JSON.parse(stored);
      // Save new item to the beginning of the list
      localStorage.setItem('ente_kottakkal_lost_found', JSON.stringify([newItem, ...parsed]));
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
          നിങ്ങൾ നൽകിയ വിവരങ്ങൾ വിജയകരമായി പോസ്റ്റ് ചെയ്യപ്പെട്ടിരിക്കുന്നു. പരിശോധനയ്ക്ക് ശേഷം ലിസ്റ്റിൽ ലഭ്യമാകും.
        </p>
        <div className="w-full border-t border-outline-variant/10 my-2 max-w-[240px]"></div>
        <p className="text-xs text-on-surface-variant/80 max-w-[240px]">
          Your listing has been submitted successfully and will appear in the listing directory.
        </p>

        <button
          onClick={() => router.push('/lost-found')}
          className="mt-4 bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-xl shadow-md active:scale-95 transition-transform"
        >
          മടങ്ങുക (Back to Listings)
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
          href="/lost-found"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-xl font-bold text-on-surface leading-tight">വിവരങ്ങൾ ചേർക്കുക</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Post lost/found item</p>
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

        {/* Status Toggle buttons */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-on-surface">വിഭാഗം തിരഞ്ഞെടുക്കുക (Type)*</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setType('lost')}
              className={`py-3 text-sm font-bold rounded-xl border transition-all ${
                type === 'lost'
                  ? 'bg-error text-on-error border-error-container shadow-md'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/20 hover:bg-surface-container-high'
              }`}
            >
              നഷ്ടപ്പെട്ടത് (Lost)
            </button>
            <button
              type="button"
              onClick={() => setType('found')}
              className={`py-3 text-sm font-bold rounded-xl border transition-all ${
                type === 'found'
                  ? 'bg-primary text-on-primary border-primary-container shadow-md'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/20 hover:bg-surface-container-high'
              }`}
            >
              കണ്ടുകിട്ടിയത് (Found)
            </button>
          </div>
        </div>

        {/* Title Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">വസ്തുവിന്റെ പേര് (Item Name)*</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ഉദാഹരണം: മൊബൈൽ ഫോൺ, പേഴ്സ്, താക്കോൽ"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">കാറ്റഗറി (Category)*</label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
            >
              {LOST_FOUND_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
            {/* Custom dropdown caret */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
              <Compass className="h-4 w-4" />
            </div>
          </div>
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
          <label className="text-sm font-bold text-on-surface">നഷ്ടപ്പെട്ട/കിട്ടിയ സ്ഥലം (Location)*</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="സ്ഥലം രേഖപ്പെടുത്തുക (ഉദാ: കോട്ടക്കൽ ബസ് സ്റ്റാൻഡ്)"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Description Textarea */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">വിശദ വിവരങ്ങൾ (Details/Description)*</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="നിറം, ബ്രാൻഡ് അല്ലെങ്കിൽ മറ്റ് തിരിച്ചറിയൽ അടയാളങ്ങൾ ഇവിടെ നൽകുക..."
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
