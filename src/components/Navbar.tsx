import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AudiencePreset } from '../types/booking';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (preset?: AudiencePreset) => void;
  defaultPreset?: AudiencePreset;
}

const NAV_ITEMS = [
  { label: 'For Kids', path: '/Kids' },
  { label: 'For Adults', path: '/Adults' },
  { label: 'For Reverts', path: '/Reverts' },
  { label: 'Pakistani Families', path: '/Pakistani' },
  { label: 'About', path: '/About' },
];

export function Navbar({
  currentPath,
  onNavigate,
  onOpenBooking,
  defaultPreset = '',
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(path);
  };

  const isActive = (path: string) =>
    currentPath.toLowerCase() === path.toLowerCase();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-[#111514] transition-colors duration-200 ${
        scrolled || mobileOpen
          ? 'border-b border-[#C6A84A]/20 shadow-lg shadow-black/20'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-24 max-w-[1280px] items-center justify-between gap-8 px-4 sm:h-28 sm:px-6 lg:px-8">
        {/* Zone 1: Uploaded Transparent Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          aria-label="Ilmora Academy Home"
          className="flex shrink-0 items-center whitespace-nowrap rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A]"
        >
          <img
            src="/assets/a_clean_graphic_logo_image_on_a_transparent_checke.png"
            alt="Ilmora Academy Logo"
            className="h-[88px] w-auto object-contain sm:h-[108px]"
          />
        </a>

        {/* Zone 2: Primary Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`relative whitespace-nowrap shrink-0 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A] ${
                  active
                    ? 'text-[#C6A84A]'
                    : 'text-[#D1D5DB] hover:text-[#C6A84A]'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#C6A84A]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenBooking(defaultPreset)}
            className="gold-glow-btn hidden min-h-[42px] cursor-pointer whitespace-nowrap shrink-0 rounded-xl px-5 py-2.5 text-sm lg:inline-flex lg:items-center"
          >
            Free Trial
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-[#C6A84A]/40 hover:text-[#C6A84A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          className="border-t border-white/10 bg-[#111514] px-4 pb-6 pt-4 sm:px-6 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`flex min-h-[44px] items-center rounded-xl px-4 text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#C6A84A]/10 text-[#C6A84A]'
                      : 'text-[#D1D5DB] hover:bg-white/5 hover:text-[#C6A84A]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 border-t border-white/10 pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenBooking(defaultPreset);
              }}
              className="gold-glow-btn min-h-[48px] w-full cursor-pointer rounded-xl px-5 py-3 text-center text-base"
            >
              Claim Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
