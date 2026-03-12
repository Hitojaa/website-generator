'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MobileCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={`tel:${siteConfig.contact.phoneRaw}`}
      className={cn(
        'sticky-cta fixed bottom-6 right-4 lg:hidden',
        'flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white',
        'font-bold px-5 py-3.5 rounded-full shadow-cta',
        'transition-all duration-300',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      )}
      aria-label={`Appeler maintenant : ${siteConfig.contact.phone}`}
    >
      <Phone className="w-5 h-5 animate-pulse-slow" aria-hidden="true" />
      <span className="text-sm">Appeler maintenant</span>
    </a>
  );
}
