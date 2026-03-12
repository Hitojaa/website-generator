'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile au changement de page
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-brand-900'
      )}
    >
      {/* Barre supérieure urgence */}
      <div className={cn(
        'hidden sm:block text-sm transition-colors duration-300',
        scrolled ? 'bg-brand-900 text-white' : 'bg-brand-950 text-brand-100'
      )}>
        <div className="container-site flex items-center justify-between py-1.5">
          <p className="text-xs">{siteConfig.hours.emergency}</p>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-accent-400 transition-colors"
            aria-label={`Appeler le ${siteConfig.contact.phone}`}
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>

      {/* Navigation principale */}
      <nav
        className={cn(
          'container-site flex items-center justify-between py-3',
        )}
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label={`${siteConfig.company.name} – Retour à l'accueil`}
        >
          <div className={cn(
            'p-2 rounded-lg transition-colors duration-300',
            scrolled ? 'bg-brand-900 text-white' : 'bg-white/10 text-white'
          )}>
            <Wrench className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className={cn(
              'block font-bold text-lg leading-none transition-colors duration-300',
              scrolled ? 'text-brand-900' : 'text-white'
            )}>
              {siteConfig.company.name}
            </span>
            <span className={cn(
              'block text-xs leading-none mt-0.5 transition-colors duration-300',
              scrolled ? 'text-gray-500' : 'text-brand-200'
            )}>
              Plombier {siteConfig.mainCity}
            </span>
          </div>
        </Link>

        {/* Navigation desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
                isActive(item.href)
                  ? scrolled
                    ? 'bg-brand-900 text-white'
                    : 'bg-white/20 text-white'
                  : scrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
              )}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA téléphone desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-cta hover:shadow-none hover:-translate-y-0.5"
            aria-label={`Appeler maintenant : ${siteConfig.contact.phone}`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>{siteConfig.contact.phone}</span>
          </a>
        </div>

        {/* Menu burger mobile */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white p-2.5 rounded-lg transition-colors"
            aria-label={`Appeler : ${siteConfig.contact.phone}`}
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              'p-2 rounded-lg transition-colors',
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-slide-up"
        >
          <nav className="container-site py-4 flex flex-col gap-1" aria-label="Menu mobile">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-3 rounded-lg font-medium transition-colors',
                  isActive(item.href)
                    ? 'bg-brand-900 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-3 rounded-lg w-full transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Appeler : {siteConfig.contact.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
