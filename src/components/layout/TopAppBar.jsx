'use client';

import { useState } from 'react';
import { Menu, X, Info, MessageSquare, Code, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const SidebarMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Info, label: 'ആപ്പിനെക്കുറിച്ച്', href: '/about' },
    { icon: MessageSquare, label: 'അഭിപ്രായങ്ങൾ', href: '/feedback' },
    { icon: Code, label: 'ഡെവലപ്പർ', href: '/developer' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 w-[280px] h-full bg-surface-container-lowest z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="h-40 bg-primary-container text-on-primary-container p-6 flex flex-col justify-end relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors"
              >
                <X className="w-5 h-5 text-on-primary-container" />
              </button>
              <img src="/logo.png" alt="Ente Kottakkal Logo" className="w-16 h-16 object-cover rounded-full shadow-md mb-3 bg-surface" />
              <h2 className="text-xl font-bold">എന്റെ കോട്ടക്കൽ</h2>
              <p className="text-xs opacity-80 mt-1 font-label">v1.0.0</p>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-4 p-4 rounded-xl text-on-surface hover:bg-surface-container-low transition-colors font-bold"
                  >
                    <Icon className="w-6 h-6 text-on-surface-variant" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}

              <div className="my-2 border-t border-outline-variant/20 mx-2"></div>

              {/* GitHub External Link */}
              <a
                href="https://github.com/thajucp123/ente-kottakkal-web"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-4 p-4 rounded-xl text-on-surface hover:bg-surface-container-low transition-colors font-bold"
              >
                <GitBranch className="w-6 h-6 text-on-surface-variant" />
                <span className="text-sm">ഗിറ്റ്ഹബ്ബ് (GitHub)</span>
              </a>
            </div>
            
            {/* Footer */}
            <div className="p-6 text-center text-xs text-on-surface-variant font-label opacity-70">
              Made with ❤️ in Kottakkal
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const TopAppBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 bg-surface flex items-center justify-between px-4 z-40 border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <h1 className="text-xl font-bold text-primary tracking-tight">എന്റെ കോട്ടക്കൽ</h1>
        </div>
        <img src="/logo.png" alt="Logo" className="w-10 h-10 object-cover rounded-full shadow-sm bg-surface ring-2 ring-primary/10" />
      </header>

      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default TopAppBar;
