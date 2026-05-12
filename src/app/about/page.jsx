'use client';

import { Info, ShieldCheck, Heart, Users, Code2, Globe, GitBranch, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutScreen() {
  const objectives = [
    "വിവിധ സർക്കാർ സേവനങ്ങൾ ഒറ്റ പ്ലാറ്റ്‌ഫോമിൽ ലഭ്യമാക്കും.",
    "പ്രാദേശിക വാർത്തകളും അറിയിപ്പുകളും വേഗത്തിൽ ജനങ്ങളിലേക്ക് എത്തിക്കും.",
    "കോട്ടക്കലിന്റെ സാംസ്കാരികവും സാമ്പത്തികവുമായ വളർച്ചക്ക് പിന്തുണ നൽകും.",
    "പ്രാദേശിക കച്ചവടക്കാർക്കും സംരംഭകർക്കും ഡിജിറ്റൽ പ്ലാറ്റ്‌ഫോം ഒരുക്കും.",
    "ഗ്രാമവാസികൾ തമ്മിൽ ആശയവിനിമയം മെച്ചപ്പെടുത്തുകയും ഒരുമയോടെ പ്രവർത്തിക്കാൻ പ്രോത്സാഹിപ്പിക്കുകയും ചെയ്യും.",
    "വിദ്യാഭ്യാസ, ആരോഗ്യ, തൊഴിൽ അവസരങ്ങൾ സംബന്ധിച്ച വിവരങ്ങൾ പങ്കുവെക്കും.",
    "വിനോദ, വിജ്ഞാനോപാസന കേന്ദ്രങ്ങളെപ്പറ്റി മനസ്സിലാക്കാൻ സഹായിക്കും."
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6"
    >
      {/* Header with Logo */}
      <div className="flex flex-col items-center justify-center pt-8 pb-4">
        <div className="w-24 h-24 rounded-3xl shadow-xl rotate-3 mb-6 bg-surface p-1 border border-outline-variant/20 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl -z-10 blur-xl"></div>
          <img src="/logo.png" alt="Ente Kottakkal Logo" className="w-full h-full object-cover rounded-2xl -rotate-3" />
        </div>
        <h2 className="text-3xl font-bold text-on-surface tracking-tight">എന്റെ കോട്ടക്കൽ</h2>
        <span className="bg-primary-container text-on-primary-container text-xs font-bold px-3 py-1 rounded-full mt-3 shadow-sm">
          v1.0.0 (Beta)
        </span>
      </div>

      {/* Main Info Card */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
        <h3 className="text-xl font-bold text-primary flex items-center gap-2 mb-3">
          <Info className="w-5 h-5" />
          ആപ്പിനെക്കുറിച്ച്
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
          കോട്ടക്കൽ ഗ്രാമത്തിലെ വിവിധ വിവരങ്ങളും സേവനങ്ങളും ജനങ്ങളിലേക്ക് എളുപ്പത്തിൽ എത്തിക്കുക എന്നതാണ് ഈ ആപ്ലിക്കേഷന്റെ പ്രധാന ലക്ഷ്യം. 
          &quot;ഡിജിറ്റൽ ഗ്രാമത്തിന്റെ പുതിയ മുഖം&quot; എന്ന ആശയത്തിൽ അധിഷ്ഠിതമായാണ് ഇത് പ്രവർത്തിക്കുന്നത്.
        </p>
      </div>

      {/* Objectives Section */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm">
        <h3 className="text-base font-bold text-on-surface leading-snug mb-5">
          പ്രാദേശിക ജനകീയ കൂട്ടായ്മയുടെ ഭാഗമായി രൂപം കൊണ്ട ഈ ആപ്ലിക്കേഷൻ താഴെ പറയുന്ന മാറ്റങ്ങൾ കൊണ്ടുവരാൻ ലക്ഷ്യമിടുന്നു:
        </h3>
        <ul className="flex flex-col gap-3">
          {objectives.map((obj, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant font-medium leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex flex-col items-center text-center gap-3 hover:bg-surface-container-low transition-colors">
          <div className="w-12 h-12 rounded-full bg-secondary-container/50 flex items-center justify-center text-secondary">
            <Users className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-on-surface">ജനകീയം<br/>(Community)</span>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex flex-col items-center text-center gap-3 hover:bg-surface-container-low transition-colors">
          <div className="w-12 h-12 rounded-full bg-error-container/50 flex items-center justify-center text-error">
            <Heart className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-on-surface">സേവനം<br/>(Service)</span>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex flex-col items-center text-center gap-3 hover:bg-surface-container-low transition-colors">
          <div className="w-12 h-12 rounded-full bg-tertiary-container/50 flex items-center justify-center text-tertiary">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-on-surface">സുരക്ഷിതം<br/>(Secure)</span>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/20 shadow-sm flex flex-col items-center text-center gap-3 hover:bg-surface-container-low transition-colors">
          <div className="w-12 h-12 rounded-full bg-primary-container/50 flex items-center justify-center text-primary">
            <Code2 className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-on-surface">ഓപ്പൺ സോഴ്സ്<br/>(Open Source)</span>
        </div>
      </div>

      {/* Open Source & Links Section */}
      <div className="bg-linear-to-br from-surface-container-lowest to-surface-container-low rounded-3xl p-6 border border-outline-variant/30 shadow-sm mt-2">
        <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 mb-2">
          <Code2 className="w-5 h-5 text-primary" />
          ഓപ്പൺ സോഴ്സ് പ്രോജക്ട്
        </h3>
        <p className="text-sm text-on-surface-variant font-medium leading-relaxed mb-6">
          ഈ ആപ്ലിക്കേഷൻ പൂർണ്ണമായും ഒരു ഓപ്പൺ സോഴ്സ് പ്രോജക്ട് ആണ്. ആർക്കും ഇതിന്റെ കോഡ് പരിശോധിക്കാനും കൂടുതൽ മെച്ചപ്പെടുത്തലുകൾ നിർദ്ദേശിക്കാനും കഴിയും.
        </p>

        <div className="flex flex-col gap-3">
          <a 
            href="https://github.com/thajucp123/ente-kottakkal-web" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-surface border border-outline-variant/20 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-on-surface" />
              <span className="text-sm font-bold text-on-surface">GitHub പ്രൊഫൈൽ</span>
            </div>
            <span className="text-[10px] bg-surface-container text-on-surface-variant px-2 py-1 rounded font-bold group-hover:bg-primary group-hover:text-on-primary transition-colors">വ്യൂ ചെയ്യുക</span>
          </a>

          <a 
            href="https://www.thajucp.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-surface border border-outline-variant/20 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-on-surface" />
              <span className="text-sm font-bold text-on-surface">ലാൻഡിംഗ് പേജ്</span>
            </div>
            <span className="text-[10px] bg-surface-container text-on-surface-variant px-2 py-1 rounded font-bold group-hover:bg-primary group-hover:text-on-primary transition-colors">സന്ദർശിക്കുക</span>
          </a>
        </div>
      </div>
      
    </motion.div>
  );
}
