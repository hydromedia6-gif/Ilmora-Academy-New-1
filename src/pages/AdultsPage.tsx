import React from 'react';
import { Check } from 'lucide-react';
import {
  DarkSection,
  ImageFrame,
  LightSection,
  Reveal,
} from '../components/SectionPrimitives';
import { AudiencePreset } from '../types/booking';

interface AdultsPageProps {
  onOpenBooking: (preset?: AudiencePreset) => void;
}

const ADULT_FOCUS = [
  {
    title: 'Tajweed Correction',
    desc: 'We identify and fix years of pronunciation mistakes, properly.',
  },
  {
    title: 'Fluency Improvement',
    desc: 'From hesitant reading to smooth, confident recitation.',
  },
  {
    title: 'Recitation Confidence',
    desc: 'Read aloud without embarrassment or hesitation.',
  },
  {
    title: 'Gradual Learning Pace',
    desc: 'We move at your speed with no pressure and no rushing.',
  },
];

const PERFECT_FOR = [
  'Professionals with busy schedules',
  'Parents who want to improve alongside their children',
  'Individuals correcting long-standing mistakes',
  'Those who stopped learning and want to restart',
];

export function AdultsPage({ onOpenBooking }: AdultsPageProps) {
  return (
    <div>
      {/* Hero (Dark #111514) */}
      <DarkSection className="pt-32 pb-20 lg:pt-40 lg:pb-28" glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-[#C6A84A]/30 bg-[#C6A84A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A84A]">
              FOR ADULTS
            </span>

            <h1
              className="mt-6 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[52px]"
              style={{ textWrap: 'balance' }}
            >
              Online Quran Classes For Adults:{' '}
              <span className="gold-gradient-text">
                Private &amp; Judgment-Free
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#D1D5DB] sm:text-lg">
              It&apos;s never too late to improve your Quran. Our private 1-on-1
              online sessions allow adults across the UK and USA to improve in a
              comfortable and judgment-free environment, before or after work.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => onOpenBooking('Myself (Adult)')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-7 py-4 text-sm sm:text-base"
              >
                Start My Free Trial
              </button>
              <p className="mt-3 text-xs text-[#9CA3AF]">
                100% private 1-on-1 sessions · Male &amp; female certified teachers
              </p>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <ImageFrame
              src="/src/assets/images/adults_quran_study_1795443620569.jpg"
              alt="Adult learner studying an open Arabic Quran at a walnut desk with warm reading lamp light"
              caption="Private evening and early morning sessions around UK & USA workdays"
            />
          </div>
        </div>
      </DarkSection>

      {/* Focus (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Our Adult Program
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              We Focus On{' '}
              <span className="gold-gradient-text">Real Results</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {ADULT_FOCUS.map((item, i) => (
            <Reveal key={item.title} delay={0.07 * i}>
              <div className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white/95 p-7 transition-colors hover:border-[#C6A84A]">
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

      {/* Perfect For (Dark #111514 Split with Right Portrait) */}
      <DarkSection glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2
                className="font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[44px]"
                style={{ textWrap: 'balance' }}
              >
                This Program Is{' '}
                <span className="gold-gradient-text">Perfect For:</span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-3.5">
              {PERFECT_FOR.map((item, idx) => (
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

            <Reveal delay={0.2}>
              <div className="mt-8 rounded-2xl border border-[#C6A84A]/30 bg-[#C6A84A]/10 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A84A]">
                  All sessions are
                </p>
                <p className="mt-1.5 font-serif text-2xl font-bold text-white">
                  Private. Personalized. Judgment-Free.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5">
            <ImageFrame
              src="/src/assets/images/teacher_qari_online_1795444748255.jpg"
              alt="Certified Qari scholar seated calmly in a classical library with an open Mushaf"
              caption="Learn directly with an encouraging, certified Qari or female teacher"
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
              Your Quran Journey{' '}
              <span className="gold-gradient-text">Continues Today.</span>
            </h2>
            <p className="mt-4 text-base text-[#4B5563] sm:text-lg">
              Experience the difference with a completely free 1-on-1 trial
              class.
            </p>
            <div className="mt-7">
              <button
                type="button"
                onClick={() => onOpenBooking('Myself (Adult)')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-8 py-4 text-base"
              >
                Claim My Free Trial Class
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
