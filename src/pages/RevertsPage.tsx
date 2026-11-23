import React from 'react';
import { Check } from 'lucide-react';
import {
  DarkSection,
  ImageFrame,
  LightSection,
  Reveal,
} from '../components/SectionPrimitives';
import { AudiencePreset } from '../types/booking';

interface RevertsPageProps {
  onOpenBooking: (preset?: AudiencePreset) => void;
}

const REVERT_MODULES = [
  {
    title: 'Arabic Alphabet Introduction',
    desc: 'We start from the very beginning with every letter clearly explained.',
  },
  {
    title: 'Proper Pronunciation Practice',
    desc: 'Makharij (articulation points) introduced step by step.',
  },
  {
    title: 'Basic Tajweed Understanding',
    desc: 'Simple rules introduced gradually with zero overwhelm.',
  },
  {
    title: 'Slow & Supportive Teaching',
    desc: 'We move at your pace. There is absolutely no pressure.',
  },
];

const SAFETY_PROMISES = [
  'No embarrassment, ever',
  'No judgment from your teacher',
  'Questions are always welcome',
  'Completely private 1-on-1 sessions',
  'English-speaking teachers available',
];

export function RevertsPage({ onOpenBooking }: RevertsPageProps) {
  return (
    <div>
      {/* Hero (Dark #111514) */}
      <DarkSection className="pt-32 pb-20 lg:pt-40 lg:pb-28" glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-[#C6A84A]/30 bg-[#C6A84A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A84A]">
              FOR REVERTS
            </span>

            <h1
              className="mt-6 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[54px]"
              style={{ textWrap: 'balance' }}
            >
              Beginner-Friendly Quran Classes For{' '}
              <span className="gold-gradient-text">New Muslims</span>
            </h1>

            <p className="mt-5 font-serif text-xl font-semibold text-[#E5E7EB]">
              Starting from zero? You are in the right place.
            </p>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-[#D1D5DB] sm:text-lg">
              We guide you gently and clearly, at a pace that feels comfortable
              and never overwhelming, with fluent English-speaking teachers in
              UK and USA timezones.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => onOpenBooking('Myself (New Muslim / Revert)')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-7 py-4 text-sm sm:text-base"
              >
                Begin My Quran Journey
              </button>
              <p className="mt-3 text-xs text-[#9CA3AF]">
                Gentle pace · Fluent English instruction · 100% private 1-on-1
              </p>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <ImageFrame
              src="/src/assets/images/reverts_beginner_study_1795444776894.jpg"
              alt="Beginner Arabic alphabet workbook beside an open Quran Mushaf in soft morning sunlight"
              caption="Step-by-step guidance from the very first Arabic letter"
            />
          </div>
        </div>
      </DarkSection>

      {/* Warmth (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-amber-200 bg-amber-50 px-6 py-10 text-center sm:px-12">
            <p className="font-serif text-2xl font-bold text-[#111514] sm:text-3xl">
              We understand that starting can feel intimidating.
            </p>
            <p className="mt-3 font-serif text-xl italic font-semibold text-[#A88F3A]">
              No pressure. No embarrassment. Just growth.
            </p>
          </div>
        </Reveal>
      </LightSection>

      {/* Program (Light Grey) */}
      <LightSection surface="subtle">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Revert Program
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              Our Revert Program{' '}
              <span className="gold-gradient-text">Includes:</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {REVERT_MODULES.map((item, i) => (
            <Reveal key={item.title} delay={0.07 * i}>
              <div className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 transition-colors hover:border-[#C6A84A]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#111514] font-serif text-sm font-bold text-[#C6A84A] transition-colors group-hover:bg-[#C6A84A] group-hover:text-[#111514] tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-[#111514]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563] sm:text-base">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </LightSection>

      {/* Safety (Dark #111514 Split with Right Image) */}
      <DarkSection glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2
                className="font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[44px]"
                style={{ textWrap: 'balance' }}
              >
                At Ilmora Academy,{' '}
                <span className="gold-gradient-text">You Are Safe.</span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-3.5">
              {SAFETY_PROMISES.map((item, idx) => (
                <Reveal key={item} delay={0.06 * idx}>
                  <div className="glass-card flex items-center gap-4 rounded-2xl px-6 py-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C6A84A] text-[#111514]">
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span className="text-base font-medium text-white">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5">
            <ImageFrame
              src="/src/assets/images/hero_quran_rehal_1795443620014.jpg"
              alt="Open Arabic Mushaf Quran resting on a carved wooden rehal in warm golden light"
              caption="Supportive, patient 1-on-1 guidance at every step"
            />
          </Reveal>
        </div>
      </DarkSection>

      {/* CTA (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              Your Journey Begins With{' '}
              <span className="gold-gradient-text">One Class.</span>
            </h2>
            <p className="mt-4 text-base text-[#4B5563] sm:text-lg">
              Book your free 30-minute 1-on-1 trial. No pressure. No commitment.
            </p>
            <div className="mt-7">
              <button
                type="button"
                onClick={() => onOpenBooking('Myself (New Muslim / Revert)')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-8 py-4 text-base"
              >
                Start For Free Today
              </button>
              <p className="mt-3 text-xs text-[#6B7280]">
                No credit card required · 100% free · No obligation
              </p>
            </div>
          </div>
        </Reveal>
      </LightSection>
    </div>
  );
}
