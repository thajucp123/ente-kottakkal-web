'use client';

import { useState } from 'react';
import { MessageSquare, Send, Clock, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Mock initial data
const INITIAL_FEEDBACKS = [
  {
    id: '1',
    name: 'അബ്ദുൾ റഹ്മാൻ',
    text: 'ബ്ലഡ് ബാങ്ക് ഫീച്ചർ വളരെ ഉപകാരപ്രദമാണ്. പഞ്ചായത്തിലെ കൂടുതൽ കടകളുടെ വിവരങ്ങൾ കൂടി ഉൾപ്പെടുത്തിയാൽ നന്നായിരുന്നു.',
    time: '2 hours ago',
    date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    name: 'ശ്രീജിത്ത് കെ.',
    text: 'നല്ലൊരു സംരംഭം! ബസ് സമയക്രമം ചേർക്കുന്നത് യാത്രികർക്ക് വലിയ സഹായകമാകും.',
    time: '1 day ago',
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  }
];

export default function FeedbackScreen() {
  const [feedbacks, setFeedbacks] = useState(INITIAL_FEEDBACKS);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !feedbackText.trim()) return;

    const newFeedback = {
      id: Date.now().toString(),
      name: name.trim(),
      text: feedbackText.trim(),
      time: 'Just now',
      date: new Date().toISOString(),
    };

    // Prepend to show newest first
    setFeedbacks([newFeedback, ...feedbacks]);
    
    // Clear form
    setName('');
    setContact('');
    setFeedbackText('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-6"
    >
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" />
          അഭിപ്രായങ്ങൾ
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">നിങ്ങളുടെ വിലയേറിയ അഭിപ്രായങ്ങളും നിർദ്ദേശങ്ങളും ഞങ്ങളെ അറിയിക്കുക.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">പേര് (Name)*</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="നിങ്ങളുടെ പേര് നൽകുക" 
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">ഇമെയിൽ / ഫോൺ (Contact)</label>
          <input 
            type="text" 
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="ബന്ധപ്പെടാനുള്ള നമ്പർ/ഇമെയിൽ" 
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface">നിർദ്ദേശങ്ങൾ (Feedback)*</label>
          <textarea 
            rows="4"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="നിങ്ങളുടെ അഭിപ്രായങ്ങൾ ഇവിടെ രേഖപ്പെടുത്തുക..." 
            required
            className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant/40 outline-none font-label text-sm focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={!name.trim() || !feedbackText.trim()}
          className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform mt-2 disabled:opacity-50 disabled:active:scale-100"
        >
          <Send className="w-4 h-4 fill-current" /> 
          സമർപ്പിക്കുക
        </button>
      </form>

      {/* Feedback List Section */}
      <div className="flex flex-col gap-4 mt-2">
        <h3 className="text-lg font-bold text-on-surface flex items-center justify-between">
          <span>മറ്റ് അഭിപ്രായങ്ങൾ</span>
          <span className="text-xs bg-primary-container text-on-primary-container px-2.5 py-1 rounded-full">{feedbacks.length} എണ്ണം</span>
        </h3>
        
        <div className="flex flex-col gap-3">
          <AnimatePresence>
            {feedbacks.map((fb) => (
              <motion.div 
                key={fb.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-lg">
                      {fb.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-on-surface">{fb.name}</span>
                      <div className="flex items-center gap-1 text-[11px] text-on-surface-variant font-label opacity-80 mt-0.5">
                        <Clock className="w-3 h-3" />
                        {fb.time}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed font-medium pl-1">
                  &quot;{fb.text}&quot;
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
