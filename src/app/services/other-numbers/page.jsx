'use client';

import { ArrowLeft, PhoneCall, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

// Numbers listed here must NOT duplicate the services page:
// Municipality (04832742200), Police (100), Fire Force (101),
// Ambulance (108), Women's Helpline (1091), Disaster Mgmt (1077)

const CONTACT_SECTIONS = [
  {
    category: 'ആശുപത്രികൾ & ആരോഗ്യം',
    color: 'teal',
    contacts: [
      { name: 'കോട്ടക്കൽ ആര്യ വൈദ്യ ശാല', number: '04832742216', display: '0483 274 2216' },
      { name: 'ജില്ലാ ആശുപത്രി മലപ്പുറം', number: '04832760500', display: '0483 276 0500' },
      { name: 'DISHA മാനസിക ആരോഗ്യ ഹെൽപ്പ്‌ലൈൻ', number: '1800599044', display: '1800 599 0441' },
      { name: 'ചൈൽഡ്‌ ഹെൽപ്പ്‌ലൈൻ', number: '1098', display: '1098' },
    ],
  },
  {
    category: 'പോലീസ് & സുരക്ഷ',
    color: 'blue',
    contacts: [
      { name: 'കോട്ടക്കൽ പോലീസ് സ്റ്റേഷൻ', number: '04832742225', display: '0483 274 2225' },
      { name: 'ക്രൈം സ്റ്റോപ്പർ', number: '1090', display: '1090' },
      { name: 'ട്രാഫിക് ഹെൽപ്പ്‌ലൈൻ', number: '04832760100', display: '0483 276 0100' },
      { name: 'ആന്റി കറപ്ഷൻ ഹെൽപ്പ്‌ലൈൻ', number: '1064', display: '1064' },
    ],
  },
  {
    category: 'ഗവൺമെന്റ് & പഞ്ചായത്ത്',
    color: 'indigo',
    contacts: [
      { name: 'കോട്ടക്കൽ ഗ്രാമ പഞ്ചായത്ത്', number: '04832742299', display: '0483 274 2299' },
      { name: 'ബ്ലോക്ക് ഓഫീസ് – തിരൂർ', number: '04942223800', display: '0494 222 3800' },
      { name: 'ജില്ലാ കളക്ടർ ഓഫീസ്', number: '04832760400', display: '0483 276 0400' },
      { name: 'ഗ്രാമ വികസന ഓഫീസ്', number: '04832742250', display: '0483 274 2250' },
    ],
  },
  {
    category: 'ഗതാഗതം & ഇൻഫ്രാ',
    color: 'amber',
    contacts: [
      { name: 'KSRTC ഡിപ്പോ – കോട്ടക്കൽ', number: '04832742100', display: '0483 274 2100' },
      { name: 'KSEB (വൈദ്യുതി പരാതി)', number: '1912', display: '1912' },
      { name: 'KWA ജലലഭ്യത', number: '1916', display: '1916' },
      { name: 'ദേശീയ ഹൈവേ ഹെൽപ്പ്‌ലൈൻ', number: '1033', display: '1033' },
    ],
  },
  {
    category: 'ക്ഷേമം & ബാലാവകാശം',
    color: 'rose',
    contacts: [
      { name: 'മുതിർന്ന പൗരൻ ഹെൽപ്പ്‌ലൈൻ', number: '14567', display: '14567' },
      { name: 'ഭിന്നശേഷി ഹെൽപ്പ്‌ലൈൻ', number: '1800116000', display: '1800 116 000' },
      { name: 'POCSO ഹെൽപ്പ്‌ലൈൻ', number: '1098', display: '1098' },
      { name: 'തൊഴിൽ ഉദ്യോഗ ഓഫീസ്', number: '04832760200', display: '0483 276 0200' },
    ],
  },
];

const colorMap = {
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-100',   icon: 'bg-teal-100 text-teal-700',   badge: 'bg-teal-100 text-teal-800'   },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   icon: 'bg-blue-100 text-blue-700',   badge: 'bg-blue-100 text-blue-800'   },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', icon: 'bg-indigo-100 text-indigo-700', badge: 'bg-indigo-100 text-indigo-800' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-100',  icon: 'bg-amber-100 text-amber-700',  badge: 'bg-amber-100 text-amber-800'  },
  rose:   { bg: 'bg-rose-50',   border: 'border-rose-100',   icon: 'bg-rose-100 text-rose-600',   badge: 'bg-rose-100 text-rose-800'   },
};

function handleShare(contact) {
  const text = `${contact.name}: ${contact.display}`;
  const subject = `Contact: ${contact.name}`;
  if (typeof window !== 'undefined' && window.EnteKottakkal) {
    window.EnteKottakkal.postMessage(JSON.stringify({ type: 'share', text, subject }));
  } else if (typeof navigator !== 'undefined' && navigator.share) {
    navigator.share({ title: subject, text }).catch(() => {});
  }
}

export default function OtherNumbersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-6 pb-12"
    >
      {/* Header and Back Button */}
      <div className="flex items-center gap-3">
        <Link
          href="/services"
          className="p-2.5 bg-surface-container-low hover:bg-surface-container rounded-full border border-outline-variant/10 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </Link>
        <div>
          <h2 className="text-xl font-bold text-on-surface leading-tight">പ്രധാന ബന്ധപ്പെടൽ നമ്പറുകൾ</h2>
          <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-75 mt-0.5">Important Contact Numbers</p>
        </div>
      </div>

      {/* Sections */}
      {CONTACT_SECTIONS.map((section) => {
        const c = colorMap[section.color];
        return (
          <div key={section.category} className="flex flex-col gap-2">
            {/* Section heading badge */}
            <div className="flex items-center gap-2 px-1">
              <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full ${c.badge}`}>
                {section.category}
              </span>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-2">
              {section.contacts.map((contact) => (
                <div
                  key={contact.number}
                  className={`${c.bg} ${c.border} border rounded-2xl px-4 py-3.5 flex items-center justify-between gap-3 shadow-sm`}
                >
                  {/* Left: icon + name + number */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${c.icon}`}>
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-on-surface leading-snug truncate">{contact.name}</p>
                      <p className="text-xs text-on-surface-variant font-label font-semibold opacity-75 mt-0.5">{contact.display}</p>
                    </div>
                  </div>

                  {/* Right: action buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    {/* Share button */}
                    <button
                      onClick={() => handleShare(contact)}
                      className="w-9 h-9 rounded-full bg-surface-container border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high active:scale-90 transition-all shadow-sm"
                      aria-label={`Share ${contact.name}`}
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    {/* Green call icon button */}
                    <a
                      href={`tel:${contact.number}`}
                      className="w-9 h-9 rounded-full bg-green-500 hover:bg-green-600 active:scale-90 flex items-center justify-center shadow-md transition-all"
                      aria-label={`Call ${contact.name}`}
                    >
                      <PhoneCall className="w-4 h-4 text-white fill-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
