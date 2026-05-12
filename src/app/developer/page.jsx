'use client';

import { Code, GitBranch, Mail, Globe, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function DeveloperScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
          <Code className="w-6 h-6 text-primary" />
          ഡെവലപ്പർ
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">ഈ ആപ്ലിക്കേഷന് പിന്നിൽ പ്രവർത്തിച്ചവർ.</p>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/30 shadow-md">
        <div className="h-24 bg-linear-to-r from-primary to-primary-container relative">
          <div className="absolute -bottom-10 left-6 w-20 h-20 bg-surface rounded-2xl p-1 shadow-lg">
            <img src="/Thaju2.png" alt="Thajudeen CP" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
        
        <div className="pt-14 pb-6 px-6">
          <h3 className="text-xl font-bold text-on-surface">Thaju Fakrudheen</h3>
          <p className="text-sm text-secondary font-bold mt-1">AI/ML Engineer & Full Stack Developer</p>
          
          <p className="text-sm text-on-surface-variant mt-4 leading-relaxed font-medium">
            A passionate developer from Kerala, India, with expertise in Data Science, Computer Vision, MERN stack, Flutter, and Kotlin. Creator of the Ente Kottakkal community platform.
          </p>

          <div className="my-4 border-t border-outline-variant/20"></div>

          <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
            കോട്ടക്കൽ നിവാസികൾക്ക് വിവിധ സേവനങ്ങളും വിവരങ്ങളും എളുപ്പത്തിൽ ലഭ്യമാക്കുക എന്ന ലക്ഷ്യത്തോടെയാണ് ഈ ആപ്ലിക്കേഷൻ വികസിപ്പിച്ചിരിക്കുന്നത്. ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, സോഫ്റ്റ്‌വെയർ നിർമ്മാണം എന്നീ മേഖലകളിൽ പ്രവർത്തിക്കുന്ന ഒരു കോട്ടക്കൽ സ്വദേശി കൂടിയാണ് ഇതിന് പിന്നിൽ.
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <a href="https://github.com/thajucp123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors text-on-surface-variant font-bold text-sm border border-outline-variant/10 shadow-sm">
              <GitBranch className="w-5 h-5 text-on-surface" />
              GitHub (thajucp123)
            </a>
            <a href="https://linkedin.com/in/thaju-fakrudheen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors text-on-surface-variant font-bold text-sm border border-outline-variant/10 shadow-sm">
              <User className="w-5 h-5 text-on-surface" />
              LinkedIn Profile
            </a>
            <a href="https://www.thajucp.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors text-on-surface-variant font-bold text-sm border border-outline-variant/10 shadow-sm">
              <Globe className="w-5 h-5 text-on-surface" />
              Portfolio Website (thajucp.in)
            </a>
            <a href="mailto:thajucp123@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors text-on-surface-variant font-bold text-sm border border-outline-variant/10 shadow-sm">
              <Mail className="w-5 h-5 text-on-surface" />
              Email Contact
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
