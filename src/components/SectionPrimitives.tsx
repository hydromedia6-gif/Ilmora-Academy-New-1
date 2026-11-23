import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export function IslamicPatternOverlay({ light = false }: { light?: boolean }) {
  if (light) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src="/src/assets/images/islamic_arch_light_overlay_1795444747683.jpg"
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <img
        src="/src/assets/images/islamic_geometric_overlay_1795444747129.jpg"
        alt=""
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover opacity-[0.16] mix-blend-lighten"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111514]/85 via-[#111514]/65 to-[#111514]/90" />
    </div>
  );
}

interface DarkSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'obsidian' | 'elevated';
  glowPosition?: 'center' | 'right' | 'left';
}

export function DarkSection({
  id,
  children,
  className = '',
  variant = 'obsidian',
  glowPosition = 'center',
}: DarkSectionProps) {
  const bg = variant === 'elevated' ? 'bg-[#171C1B]' : 'bg-[#111514]';
  const glowAlign =
    glowPosition === 'right'
      ? 'right-[-8%] top-1/3'
      : glowPosition === 'left'
        ? 'left-[-8%] top-1/3'
        : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${bg} py-20 lg:py-28 text-[#D1D5DB] ${className}`}
    >
      <IslamicPatternOverlay />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute ${glowAlign} h-[420px] w-[420px] rounded-full bg-[#C6A84A]/[0.06] blur-[120px]`}
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface LightSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  surface?: 'white' | 'subtle';
}

export function LightSection({
  id,
  children,
  className = '',
  surface = 'white',
}: LightSectionProps) {
  const bg = surface === 'subtle' ? 'bg-gray-50' : 'bg-white';
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${bg} py-20 lg:py-28 text-[#4B5563] ${className}`}
    >
      <IslamicPatternOverlay light />
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function GoldDivider({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`gold-divider w-full ${className}`} />;
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ImageFrameProps {
  src: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  darkSurface?: boolean;
}

export function ImageFrame({
  src,
  alt,
  caption,
  aspectClass = 'aspect-[4/3]',
  darkSurface = true,
}: ImageFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative">
      {darkSurface && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 rounded-[32px] bg-[#C6A84A]/[0.08] blur-2xl"
        />
      )}
      <div
        className={`relative overflow-hidden rounded-3xl ${
          darkSurface
            ? 'glass-card p-3 sm:p-4'
            : 'border border-neutral-200 bg-white p-3 shadow-sm'
        }`}
      >
        <div
          className={`relative w-full overflow-hidden rounded-2xl bg-[#171C1B] ${aspectClass}`}
        >
          {!failed ? (
            <img
              src={src}
              alt={alt}
              referrerPolicy="no-referrer"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#171C1B] to-[#111514] p-6 text-center">
              <BookOpen className="mb-3 h-10 w-10 text-[#C6A84A]" />
              <p className="font-serif text-lg text-white">Ilmora Academy</p>
              <p className="mt-1 text-xs text-[#9CA3AF]">{alt}</p>
            </div>
          )}
        </div>
        {caption && (
          <p
            className={`mt-3 text-center text-xs tracking-wide ${
              darkSurface ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
            }`}
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
