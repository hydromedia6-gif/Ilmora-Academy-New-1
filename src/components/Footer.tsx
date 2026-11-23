import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t border-[#C6A84A]/15 bg-[#111514] py-10 text-sm text-[#9CA3AF]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        {/* Left: Uploaded Transparent Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLink(e, '/')}
          aria-label="Ilmora Academy Home"
          className="flex items-center whitespace-nowrap rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A]"
        >
          <img
            src="/assets/a_clean_graphic_logo_image_on_a_transparent_checke.png"
            alt="Ilmora Academy Logo"
            className="h-36 w-auto object-contain sm:h-44"
          />
        </a>

        {/* Centre: Legal & Contact Links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="/Privacy"
            onClick={(e) => handleLink(e, '/Privacy')}
            className="whitespace-nowrap py-1 text-[#9CA3AF] transition-colors hover:text-[#C6A84A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A]"
          >
            Privacy Policy
          </a>
          <span aria-hidden="true" className="text-white/15">
            ·
          </span>
          <a
            href="/Terms"
            onClick={(e) => handleLink(e, '/Terms')}
            className="whitespace-nowrap py-1 text-[#9CA3AF] transition-colors hover:text-[#C6A84A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A]"
          >
            Terms of Service
          </a>
          <span aria-hidden="true" className="text-white/15">
            ·
          </span>
          <a
            href="/Contact"
            onClick={(e) => handleLink(e, '/Contact')}
            className="whitespace-nowrap py-1 text-[#9CA3AF] transition-colors hover:text-[#C6A84A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A]"
          >
            Contact Us
          </a>
        </nav>

        {/* Right: Copyright */}
        <p className="text-center text-xs text-[#9CA3AF] md:text-right">
          © {year} Ilmora Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
