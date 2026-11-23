import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { KidsPage } from './pages/KidsPage';
import { AdultsPage } from './pages/AdultsPage';
import { RevertsPage } from './pages/RevertsPage';
import { PakistaniPage } from './pages/PakistaniPage';
import { AboutPage } from './pages/AboutPage';
import {
  ContactPage,
  NotFoundPage,
  PrivacyPage,
  TermsPage,
} from './pages/LegalPages';
import { AudiencePreset } from './types/booking';

interface RouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
  defaultPreset: AudiencePreset;
}

const ROUTE_META_MAP: Record<string, RouteMeta> = {
  '/': {
    title:
      'Ilmora Academy | Online 1-on-1 Quran Classes for Kids & Adults in UK & USA',
    description:
      'Structured 1-on-1 online Quran classes with certified Qaris and native Arab tutors. Tajweed correction, progress tracking and flexible UK and USA timings. Book a free trial class.',
    canonicalPath: '/',
    defaultPreset: '',
  },
  '/kids': {
    title: 'Online Quran Classes For Kids in UK & USA | Ilmora Academy',
    description:
      'Structured 1-on-1 Quran education for children aged 4 to 17 in the UK and USA. Noorani Qaida, Makharij correction, Tajweed, and regular parental updates.',
    canonicalPath: '/Kids',
    defaultPreset: 'My Child',
  },
  '/adults': {
    title: 'Online Quran Classes For Adults | Private 1-on-1 | Ilmora Academy',
    description:
      'Private, judgment-free 1-on-1 online Quran classes for adults in the UK and USA. Tajweed correction, fluency building, and flexible scheduling.',
    canonicalPath: '/Adults',
    defaultPreset: 'Myself (Adult)',
  },
  '/reverts': {
    title: 'Quran Classes For New Muslims & Reverts | Ilmora Academy',
    description:
      'Gentle, beginner-friendly 1-on-1 Quran classes for new Muslims starting from zero in the UK and USA. English-speaking certified tutors.',
    canonicalPath: '/Reverts',
    defaultPreset: 'Myself (New Muslim / Revert)',
  },
  '/pakistani': {
    title:
      'Online Quran Classes For Pakistani Families in UK & USA | Ilmora Academy',
    description:
      'Culturally understanding 1-on-1 Quran classes with Urdu communication support for Pakistani and South Asian families living in the UK and USA.',
    canonicalPath: '/Pakistani',
    defaultPreset: 'Multiple Family Members',
  },
  '/about': {
    title: 'About Ilmora Academy | Certified 1-on-1 Quran Education',
    description:
      'Learn about Ilmora Academy’s mission, certified Qari teachers, and structured approach to 1-on-1 online Quran education for UK and USA families.',
    canonicalPath: '/About',
    defaultPreset: '',
  },
  '/privacy': {
    title: 'Privacy Policy | Ilmora Academy',
    description:
      'Read Ilmora Academy’s privacy practices for student and family data.',
    canonicalPath: '/Privacy',
    defaultPreset: '',
  },
  '/terms': {
    title: 'Terms of Service | Ilmora Academy',
    description:
      'Review Ilmora Academy’s enrollment terms, scheduling flexibility, and 7-Day Satisfaction Guarantee.',
    canonicalPath: '/Terms',
    defaultPreset: '',
  },
  '/contact': {
    title: 'Contact Us | Ilmora Academy',
    description:
      'Contact Ilmora Academy admissions for UK and USA 1-on-1 Quran class timings and free trial bookings.',
    canonicalPath: '/Contact',
    defaultPreset: '',
  },
};

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '').toLowerCase();
}

export default function App() {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPreset, setBookingPreset] = useState<AudiencePreset>('');

  const normalized = normalizePath(pathname);
  const activeMeta = ROUTE_META_MAP[normalized];

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const meta = activeMeta || {
      title: 'Page Not Found | Ilmora Academy',
      description: 'Ilmora Academy online 1-on-1 Quran classes.',
      canonicalPath: pathname,
      defaultPreset: '' as AudiencePreset,
    };

    document.title = meta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    if (typeof window !== 'undefined') {
      let canonicalEl = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.rel = 'canonical';
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = `${window.location.origin}${meta.canonicalPath}`;
    }
  }, [activeMeta, pathname]);

  const navigate = (targetPath: string) => {
    if (targetPath.startsWith('#')) {
      const targetEl = document.querySelector(targetPath);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const [cleanPath, hash] = targetPath.split('#');
    if (cleanPath !== window.location.pathname) {
      window.history.pushState({}, '', targetPath);
      setPathname(cleanPath || '/');
    }

    if (hash) {
      window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openBooking = (preset?: AudiencePreset) => {
    const resolvedPreset =
      preset !== undefined ? preset : activeMeta?.defaultPreset || '';
    setBookingPreset(resolvedPreset);
    setBookingOpen(true);
  };

  const renderPage = () => {
    switch (normalized) {
      case '/':
        return <HomePage onOpenBooking={openBooking} onNavigate={navigate} />;
      case '/kids':
        return <KidsPage onOpenBooking={openBooking} />;
      case '/adults':
        return <AdultsPage onOpenBooking={openBooking} />;
      case '/reverts':
        return <RevertsPage onOpenBooking={openBooking} />;
      case '/pakistani':
        return <PakistaniPage onOpenBooking={openBooking} />;
      case '/about':
        return <AboutPage onOpenBooking={openBooking} />;
      case '/privacy':
        return (
          <PrivacyPage onOpenBooking={openBooking} onNavigate={navigate} />
        );
      case '/terms':
        return <TermsPage onOpenBooking={openBooking} onNavigate={navigate} />;
      case '/contact':
        return (
          <ContactPage onOpenBooking={openBooking} onNavigate={navigate} />
        );
      default:
        return (
          <NotFoundPage onOpenBooking={openBooking} onNavigate={navigate} />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#111514] text-[#D1D5DB]">
      <Navbar
        currentPath={pathname}
        onNavigate={navigate}
        onOpenBooking={openBooking}
        defaultPreset={activeMeta?.defaultPreset || ''}
      />

      <main>{renderPage()}</main>

      <Footer onNavigate={navigate} />

      <BookingModal
        isOpen={bookingOpen}
        defaultAudience={bookingPreset}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
