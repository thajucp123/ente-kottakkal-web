'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Store, HardHat, Briefcase } from 'lucide-react';

const BottomNavBar = () => {
  const pathname = usePathname();

  const tabs = [
    { id: '/', label: 'ഹോം', icon: Home },
    { id: '/shops', label: 'കടകൾ', icon: Store },
    { id: '/workers', label: 'തൊഴിലാളികൾ', icon: HardHat },
    { id: '/services', label: 'സേവനങ്ങൾ', icon: Briefcase },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/10 px-2 py-3 flex justify-around items-center z-40 rounded-t-xl shadow-lg">
      {tabs.map((tab) => {
        const isActive = pathname === tab.id || (pathname === '/blood' && tab.id === '/services');
        const Icon = tab.icon;
        return (
          <Link
            key={tab.id}
            href={tab.id}
            className={`flex flex-col items-center justify-center transition-all duration-200 py-1.5 px-4 rounded-full ${
              isActive 
                ? 'bg-secondary-container text-on-secondary-container scale-105' 
                : 'text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
            <span className="text-[10px] font-bold mt-1">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
