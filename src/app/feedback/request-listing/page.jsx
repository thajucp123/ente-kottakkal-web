'use client';

import { useState } from 'react';
import { ArrowLeft, Send, CheckCircle2, ClipboardList, ShieldAlert, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RequestListingScreen() {
  const router = useRouter();

  const [category, setCategory] = useState('shop');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim() || !contactNumber.trim() || !location.trim() || !description.trim()) {
      setErrorMsg('എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കേണ്ടതാണ് (Please fill all fields).');
      return;
    }

    const newRequest = {
      id: `req-${Date.now()}`,
      category,
      name: name.trim(),
      contactNumber: contactNumber.trim(),
      location: location.trim(),
      description: description.trim(),
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };

    try {
      const stored = localStorage.getItem('ente_kottakkal_listing_requests') || '[]';
      const parsed = JSON.parse(stored);
      // Prepend the new request
      localStorage.setItem('ente_kottakkal_listing_requests', JSON.stringify([newRequest, ...parsed]));
      setIsSubmitted(true);
    } catch (err) {
      setErrorMsg('അപേക്ഷ സമർപ്പിക്കുന്നതിൽ പരാജയപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക.');
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

        <h2 className="text-xl font-black text-on-surface leading-tight">അപേക്ഷ വിജയകരമായി സമർപ്പിച്ചു!</h2>
        <p className="text-sm text-on-surface-variant max-w-[280px]">
          നിങ്ങൾ നൽകിയ വിവരങ്ങൾ അഡ്മിൻ പരിശോധനയ്ക്ക് അയച്ചിരിക്കുന്നു. അംഗീകാരത്തിന് ശേഷം ലിസ്റ്റിംഗ് ലൈവ് ആകുന്നതാണ്.
        </p>
        <div className="w-full border-t border-outline-variant/10 my-2 max-w-[240px]"></div>
        <p className="text-xs text-on-surface-variant/80 max-w-[240px]">
          Your listing request has been submitted to the admin and will be published upon approval.
        </p>

        <button
          onClick={() => router.push('/feedback')}
          className="mt-4 bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-xl shadow-md active:scale-95 transition-transform"
        >
          മടങ്ങുക (Back to Feedback)
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
          href="/feedback"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-xl font-bold text-on-surface leading-tight">ലിസ്റ്റിംഗ് അപേക്ഷ സമർപ്പിക്കുക</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Submit private listing request</p>
        </div>
      </div>

      {/* Info Warning Alert */}
      <div className="bg-secondary-container/10 border border-secondary/15 rounded-2xl p-4 flex gap-3 text-xs leading-relaxed font-semibold text-on-surface-variant">
        <ShieldAlert className="w-5 h-5 text-secondary shrink-0" />
        <div>
          <p className="text-on-surface font-bold mb-0.5">അഡ്മിൻ അവലോകനം (Admin Review Only)</p>
          <p>നിങ്ങൾ സമർപ്പിക്കുന്ന വിവരങ്ങൾ പൊതുവായി ഉടൻ കാണാൻ സാധിക്കില്ല. അഡ്മിൻ പാനലിൽ പരിശോധിച്ചു വിവരങ്ങൾ ശരിയാണെന്ന് ഉറപ്പുവരുത്തിയ ശേഷം മാത്രമേ ആപ്പിൽ ചേർക്കുകയുള്ളൂ.</p>
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

        {/* Listing Category selection */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">ചേർക്കേണ്ട ലിസ്റ്റിംഗ് വിഭാഗം (Listing Category)*</label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
            >
              <option value="shop">കട (Shop)</option>
              <option value="tuition">ട്യൂഷൻ സെന്റർ (Tuition Center)</option>
              <option value="blood">രക്തദാതാവ് (Blood Donor)</option>
              <option value="worker">തൊഴിലാളി (Worker/Laborer)</option>
              <option value="business">ബിസിനസ് ലിസ്റ്റിംഗ് (Business Listing)</option>
              <option value="other">മറ്റുള്ളവ (Other)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
              <ClipboardList className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Name Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">പേര് / സ്ഥാപനത്തിന്റെ പേര് (Name / Title)*</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ഉദാഹരണം: സലിം കെ (പ്ലംബർ), എ ബി സി ഗ്രോസറി"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Contact Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">ബന്ധപ്പെടാനുള്ള ഫോൺ നമ്പർ (Contact Number)*</label>
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
          <label className="text-sm font-bold text-on-surface">സ്ഥലം / വിലാസം (Location / Address)*</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="വിലാസവും പ്രധാന ലാൻഡ്‌മാർക്കും രേഖപ്പെടുത്തുക"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Description Textarea */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">അധിക വിവരങ്ങൾ (Description / Details)*</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="പ്രവർത്തന സമയം, നൽകുന്ന സേവനങ്ങൾ, അല്ലെങ്കിൽ രക്തഗ്രൂപ്പ് തുടങ്ങിയ കൂടുതൽ വിവരങ്ങൾ ഇവിടെ നൽകുക..."
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
          അപേക്ഷ സമർപ്പിക്കുക
        </button>
      </form>
    </motion.div>
  );
}
