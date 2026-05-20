'use client';

import { useState } from 'react';
import { Key, ArrowLeft, Send, CheckCircle2, AlertTriangle, Building } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PROPERTY_CATEGORIES } from '@/data/properties_mock';

export default function CreatePropertyScreen() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [type, setType] = useState('rental'); // 'rental', 'sale'
  const [category, setCategory] = useState('house');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!title.trim() || !price.trim() || !size.trim() || !contactNumber.trim() || !location.trim() || !description.trim()) {
      setErrorMsg('എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കേണ്ടതാണ് (Please fill all fields).');
      return;
    }

    const newProperty = {
      id: `prop-${Date.now()}`,
      title: title.trim(),
      type,
      category,
      price: price.trim(),
      size: size.trim(),
      contactNumber: contactNumber.trim(),
      location: location.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem('ente_kottakkal_properties') || '[]';
      const parsed = JSON.parse(stored);
      // Prepend the new property listing
      localStorage.setItem('ente_kottakkal_properties', JSON.stringify([newProperty, ...parsed]));
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
          നിങ്ങളുടെ വസ്തുവിന്റെ വിവരങ്ങൾ സക്സസ്ഫുൾ ആയി ലിസ്റ്റ് ചെയ്തു. പരിശോധനയ്ക്ക് ശേഷം അത് പബ്ലിഷ് ആകും.
        </p>
        <div className="w-full border-t border-outline-variant/10 my-2 max-w-[240px]"></div>
        <p className="text-xs text-on-surface-variant/80 max-w-[240px]">
          Your property has been submitted successfully and will appear in the directory.
        </p>

        <button
          onClick={() => router.push('/properties')}
          className="mt-4 bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-xl shadow-md active:scale-95 transition-transform"
        >
          മടങ്ങുക (Back to Real Estate)
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-6 animate-fadeIn"
    >
      {/* Title & Back Button */}
      <div className="flex items-center gap-3">
        <Link 
          href="/properties"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-xl font-bold text-on-surface leading-tight">വസ്തുക്കൾ ചേർക്കുക</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Add properties & rentals</p>
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

        {/* Listing Title */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">പേര് / വിവരണം (Title)*</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ഉദാഹരണം: 2 BHK ഫ്ലാറ്റ് വാടകയ്ക്ക്, 10 സെന്റ് വില്പനയ്ക്ക്"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Transaction Type */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">ഉദ്ദേശ്യം (Purpose)*</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setType('rental')}
              className={`py-3 rounded-xl font-bold text-xs border transition-all ${
                type === 'rental'
                  ? 'bg-secondary text-on-secondary border-secondary shadow-sm'
                  : 'bg-surface border-outline-variant/30 text-on-surface-variant'
              }`}
            >
              വാടകയ്ക്ക് (Rental / Lease)
            </button>
            <button
              type="button"
              onClick={() => setType('sale')}
              className={`py-3 rounded-xl font-bold text-xs border transition-all ${
                type === 'sale'
                  ? 'bg-primary text-on-primary border-primary shadow-sm'
                  : 'bg-surface border-outline-variant/30 text-on-surface-variant'
              }`}
            >
              വില്പനയ്ക്ക് (For Sale)
            </button>
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
              {PROPERTY_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
              <Building className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Price / Rent Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">വില / പ്രതിമാസ വാടക (Price / Rent)*</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="ഉദാഹരണം: ₹12,000 / മാസം, ₹5 ലക്ഷം / സെന്റ്"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Size Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">അളവ് (Size / Area)*</label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="ഉദാഹരണം: 1200 Sq.Ft, 10 സെന്റ്"
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
            placeholder="വസ്തു സ്ഥിതി ചെയ്യുന്ന സ്ഥലം (ഉദാ: ചങ്കുവെട്ടി)"
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-medium text-sm focus:ring-2 focus:ring-primary/20 transition-all"
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

        {/* Description Textarea */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">വിശദാംശങ്ങൾ (Description)*</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="വഴി സൗകര്യം, കിണർ വെള്ളം, കോൺക്രീറ്റ് റൂഫ്, മുറികളുടെ എണ്ണം തുടങ്ങിയ മറ്റ് വിവരങ്ങൾ ഇവിടെ രേഖപ്പെടുത്തുക..."
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
          ലിസ്റ്റിംഗ് പോസ്റ്റ് ചെയ്യുക
        </button>
      </form>
    </motion.div>
  );
}
