import React from 'react';
import { Check } from 'lucide-react';
import {
  DarkSection,
  ImageFrame,
  LightSection,
  Reveal,
} from '../components/SectionPrimitives';
import { AudiencePreset } from '../types/booking';

interface KidsPageProps {
  onOpenBooking: (preset?: AudiencePreset) => void;
}

const FOCUS_CARDS = [
  {
    title: 'Noorani Qaida Mastery',
    desc: 'The correct starting point for every young learner.',
  },
  {
    title: 'Clear Makharij Correction',
    desc: 'Proper letter articulation from day one.',
  },
  {
    title: 'Step-by-Step Tajweed',
    desc: "Rules introduced gradually at the child's pace.",
  },
  {
    title: 'Confidence Building',
    desc: 'Positive reinforcement so children love learning.',
  },
  {
    title: 'Parental Progress Updates',
    desc: 'You always know how your child is improving.',
  },
  {
    title: 'Flexible After-School Timing',
    desc: 'Evening and weekend slots for UK & USA families.',
  },
];

const WE_ENSURE = [
  'Female teachers available for daughters',
  'Patient and friendly learning environment',
  'Flexible after-school timing',
  'Regular progress feedback to parents',
  '1-on-1 sessions with no group distractions',
];

export function KidsPage({ onOpenBooking }: KidsPageProps) {
  return (
    <div>
      {/* Hero (Dark #111514) */}
      <DarkSection className="pt-32 pb-20 lg:pt-40 lg:pb-28" glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-[#C6A84A]/30 bg-[#C6A84A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A84A]">
              FOR KIDS
            </span>

            <h1
              className="mt-6 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[54px]"
              style={{ textWrap: 'balance' }}
            >
              Online Quran Classes For Kids In{' '}
              <span className="gold-gradient-text">UK &amp; USA</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#D1D5DB] sm:text-lg">
              Your child deserves structured Quran education, not random
              lessons. We build a real foundation designed for children aged 4 to
              17 balancing UK and USA school routines.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => onOpenBooking('My Child')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-7 py-4 text-sm sm:text-base"
              >
                Book Free Trial For My Child
              </button>
              <p className="mt-3 text-xs text-[#9CA3AF]">
                30-minute 1-on-1 assessment · Tailored to UK &amp; US timezones
              </p>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <ImageFrame
              src="/src/assets/images/kids_quran_study_1795443620411.jpg"
              alt="Young student reading the Quran on a carved wooden rehal beside an attentive Qari teacher"
              caption="Patient 1-on-1 instruction for young learners in the UK & USA"
            />
          </div>
        </div>
      </DarkSection>

      {/* What We Focus On (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Our Kids Program
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              What We <span className="gold-gradient-text">Focus On</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FOCUS_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.06 * i}>
              <div className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white/95 p-7 transition-colors hover:border-[#C6A84A]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#111514] font-serif text-sm font-bold text-[#C6A84A] transition-colors group-hover:bg-[#C6A84A] group-hover:text-[#111514] tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-[#111514]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563] sm:text-base">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </LightSection>

      {/* We Ensure (Dark #111514 Split with Right Image) */}
      <DarkSection glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A84A]">
                Our Standards
              </p>
              <h2
                className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[44px]"
                style={{ textWrap: 'balance' }}
              >
                We <span className="gold-gradient-text">Ensure</span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-3.5">
              {WE_ENSURE.map((item, idx) => (
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
              alt="Open Arabic Mushaf Quran resting on a carved wooden rehal in warm golden study light"
              caption="Dedicated 1-on-1 focus tailored to your child's learning rhythm"
            />
          </Reveal>
        </div>
      </DarkSection>

      {/* Parent Proof + CTA (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-6 py-8 text-center sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88F3A]">
              Parents receive regular updates so they can see:
            </p>
            <blockquote className="mt-3 font-serif text-2xl font-bold italic text-[#111514] sm:text-3xl">
              &ldquo;My child is actually improving, week by week.&rdquo;
            </blockquote>
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <h2
              className="font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              Start Your Child&apos;s{' '}
              <span className="gold-gradient-text">Journey Today.</span>
            </h2>
            <div className="mt-7">
              <button
                type="button"
                onClick={() => onOpenBooking('My Child')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-8 py-4 text-base"
              >
                Claim Free Trial Class
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
