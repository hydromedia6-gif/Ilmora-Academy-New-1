import React from 'react';
import { Check } from 'lucide-react';
import {
  DarkSection,
  GoldDivider,
  ImageFrame,
  LightSection,
  Reveal,
} from '../components/SectionPrimitives';
import { AudiencePreset } from '../types/booking';

interface PakistaniPageProps {
  onOpenBooking: (preset?: AudiencePreset) => void;
}

const CHALLENGES = [
  'Children grow up in English-speaking schools',
  'Islamic education becomes harder to manage',
  "Masjid timings don't always match",
  'Parents worry about weak Tajweed',
  'Language barriers make communication difficult',
];

const CULTURAL_POINTS = [
  'Parents can communicate in Urdu',
  'Children can ask questions comfortably',
  'Teachers understand Pakistani family values',
  'We teach with patience and respect',
  'We know the expectations South Asian parents have',
];

const PERFECT_FOR = [
  'Pakistani families living in UK',
  'Pakistani families living in USA',
  'South Asian households wanting Urdu support',
  'Parents worried about Tajweed mistakes',
  'Families who want structured Islamic learning',
  'Mothers who prefer female teachers for daughters',
];

const WHAT_WE_OFFER = [
  'Certified Qaris',
  'Tajweed-certified teachers',
  'Male & Female instructors',
  '1-on-1 private sessions',
  'Flexible UK & USA evening timings',
  'Free trial class',
];

export function PakistaniPage({ onOpenBooking }: PakistaniPageProps) {
  return (
    <div>
      {/* Hero (Dark #111514) */}
      <DarkSection className="pt-32 pb-20 lg:pt-40 lg:pb-28" glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-[#C6A84A]/30 bg-[#C6A84A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A84A]">
              FOR PAKISTANI &amp; URDU-SPEAKING FAMILIES
            </span>

            <h1
              className="mt-6 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[52px]"
              style={{ textWrap: 'balance' }}
            >
              Online Quran Classes For Pakistani Families Living In{' '}
              <span className="gold-gradient-text">UK &amp; USA</span>
            </h1>

            <p className="mt-5 font-serif text-xl font-semibold text-[#E5E7EB]">
              Raising children abroad is not easy.
            </p>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#D1D5DB] sm:text-lg">
              You want them to grow in a Western country, while staying deeply
              connected to their Deen. At Ilmora Academy, we help Pakistani and
              Urdu-speaking families ensure their children and themselves learn
              the Quran with correct Tajweed, in a comfortable and culturally
              understanding environment.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => onOpenBooking('Multiple Family Members')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-7 py-4 text-sm sm:text-base"
              >
                Book Free Trial For My Family
              </button>
              <p className="mt-3 text-xs text-[#9CA3AF]">
                English &amp; Urdu communication · UK &amp; US evening timings
              </p>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <ImageFrame
              src="/src/assets/images/pakistani_family_quran_1795444748313.jpg"
              alt="Pakistani father and son reading the Quran together on a wooden rehal at their home study desk"
              caption="Culturally grounded 1-on-1 Quran education for diaspora families"
            />
          </div>
        </div>
      </DarkSection>

      {/* We Understand (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              We Understand Something{' '}
              <span className="gold-gradient-text">Many Academies Don&apos;t.</span>
            </h2>
            <p className="mt-4 text-base text-[#4B5563] sm:text-lg">
              Living abroad creates unique challenges:
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map((item, idx) => (
            <Reveal key={item} delay={0.05 * idx}>
              <div className="flex h-full items-center gap-4 rounded-2xl border border-red-200/80 bg-red-50 px-5 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-red-200 bg-white font-serif text-xs font-bold text-red-700 tabular-nums">
                  0{idx + 1}
                </span>
                <span className="text-sm font-medium text-[#111514]">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-6 py-8 text-center sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88F3A]">
              Sometimes parents feel:
            </p>
            <blockquote className="mt-3 font-serif text-2xl font-bold italic text-[#111514] sm:text-3xl">
              &ldquo;I want a teacher who understands our background.&rdquo;
            </blockquote>
            <p className="mt-4 font-serif text-lg font-bold text-[#A88F3A]">
              That&apos;s exactly why Ilmora Academy is different.
            </p>
          </div>
        </Reveal>
      </LightSection>

      {/* Cultural Comfort (Dark #111514 Split with Right Image) */}
      <DarkSection glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A84A]">
                Cultural Comfort
              </p>
              <h2
                className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[42px]"
                style={{ textWrap: 'balance' }}
              >
                Urdu &amp; Cultural{' '}
                <span className="gold-gradient-text">
                  Understanding Matters.
                </span>
              </h2>
              <p className="mt-4 text-base text-[#D1D5DB] sm:text-lg">
                We create a familiar learning environment, even while you live
                thousands of miles from Pakistan.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3.5">
              {CULTURAL_POINTS.map((item, idx) => (
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
              src="/src/assets/images/kids_quran_study_1795443620411.jpg"
              alt="Young child learning proper Quran recitation beside a patient Qari teacher"
              caption="Respectful instruction with Urdu & English communication support"
            />
          </Reveal>
        </div>
      </DarkSection>

      {/* Perfect For (Light Grey) */}
      <LightSection surface="subtle">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Who We Serve
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Built For <span className="gold-gradient-text">Your Household</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PERFECT_FOR.map((item, i) => (
            <Reveal key={item} delay={0.05 * i}>
              <div className="flex h-full items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111514] font-serif text-xs font-bold text-[#C6A84A] tabular-nums">
                  0{i + 1}
                </span>
                <span className="font-serif text-lg font-bold text-[#111514]">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </LightSection>

      {/* What We Offer (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Included In Every Enrollment
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              What We <span className="gold-gradient-text">Offer</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_WE_OFFER.map((item, i) => (
            <Reveal key={item} delay={0.05 * i}>
              <div className="flex h-full items-center gap-4 rounded-2xl border border-neutral-200 bg-white/95 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111514] font-serif text-xs font-bold text-[#C6A84A] tabular-nums">
                  0{i + 1}
                </span>
                <span className="font-serif text-lg font-bold text-[#111514]">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-neutral-200 bg-gray-50 px-4 py-3 text-center text-sm font-semibold text-[#111514]">
              No group distractions.
            </div>
            <div className="rounded-xl border border-neutral-200 bg-gray-50 px-4 py-3 text-center text-sm font-semibold text-[#111514]">
              No rushed lessons.
            </div>
            <div className="rounded-xl border border-neutral-200 bg-gray-50 px-4 py-3 text-center text-sm font-semibold text-[#111514]">
              No confusion.
            </div>
            <div className="rounded-xl border border-[#C6A84A]/40 bg-[#111514] px-4 py-3 text-center text-sm font-semibold text-[#D4BA6A]">
              Just proper Quran education.
            </div>
          </div>
        </Reveal>
      </LightSection>

      {/* Two Panels: Children + Parents & Adults (Dark #111514) */}
      <DarkSection glowPosition="center">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* For Your Children */}
          <Reveal>
            <div className="glass-card flex h-full flex-col justify-between rounded-3xl p-7 sm:p-9">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A84A]">
                  For Your Children
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                  We focus on:
                </h3>

                <ul className="mt-6 space-y-3">
                  {[
                    'Noorani Qaida',
                    'Makharij correction',
                    'Step-by-step Tajweed',
                    'Short Surahs for Salah',
                    'Confidence building',
                    'Regular parent updates',
                  ].map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-3 text-base text-[#E5E7EB]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6A84A]/20 text-[#C6A84A]">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.3} />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-sm text-[#9CA3AF]">
                  Your child will not just &lsquo;read.&rsquo;
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-[#D4BA6A]">
                  They will improve properly.
                </p>
              </div>
            </div>
          </Reveal>

          {/* For Parents & Adults */}
          <Reveal delay={0.1}>
            <div className="glass-card flex h-full flex-col justify-between rounded-3xl p-7 sm:p-9">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A84A]">
                  For Parents &amp; Adults
                </p>
                <div className="mt-3 rounded-2xl border border-[#C6A84A]/25 bg-white/[0.03] p-5">
                  <p className="text-xs text-[#9CA3AF]">
                    Many parents abroad say:
                  </p>
                  <p className="mt-1.5 font-serif text-xl italic font-bold text-white">
                    &ldquo;I wish I could fix my own Tajweed too.&rdquo;
                  </p>
                </div>

                <p className="mt-5 font-serif text-2xl font-bold text-[#D4BA6A]">
                  You can.
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    'Private',
                    'Comfortable',
                    'Judgment-free',
                    'Flexible around work schedule',
                  ].map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-3 text-base text-[#E5E7EB]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6A84A]/20 text-[#C6A84A]">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.3} />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-sm text-[#E5E7EB]">
                  You can speak Urdu if needed.
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-[#D4BA6A]">
                  We move at your pace.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </DarkSection>

      {/* Pricing (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              Affordable &amp;{' '}
              <span className="gold-gradient-text">Structured</span>
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-[460px] rounded-[32px] border border-[#C6A84A]/30 bg-[#111514] p-8 text-center text-white shadow-xl sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A84A]">
              For only:
            </p>
            <div className="mt-3 flex items-baseline justify-center gap-1.5">
              <span className="font-serif text-5xl font-bold text-white tabular-nums sm:text-6xl">
                $70
              </span>
              <span className="text-base text-[#9CA3AF]">/month</span>
            </div>

            <GoldDivider className="my-7" />

            <ul className="space-y-3 text-left text-sm text-[#E5E7EB] sm:text-base">
              {[
                '1-on-1 classes',
                'Certified teachers',
                'Personalized attention',
                'Flexible scheduling',
                'Progress tracking',
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C6A84A]/20 text-[#C6A84A]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.3} />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-semibold text-[#D4BA6A]">
              Less than $2.50 per day for your child&apos;s Quran foundation.
            </p>
          </div>
        </Reveal>
      </LightSection>

      {/* Free Trial (Light Grey Split with Right Image) */}
      <LightSection surface="subtle">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div>
              <h2
                className="font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Free Trial <span className="gold-gradient-text">Class</span>
              </h2>
              <p className="mt-3 text-base text-[#4B5563] sm:text-lg">
                Before you decide, experience our teaching yourself.
              </p>

              <div className="mt-7 rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm sm:p-8">
                <h3 className="font-serif text-xl font-bold text-[#111514]">
                  Your FREE Trial Includes:
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-[#111514] sm:text-base">
                  {[
                    '30-minute 1-on-1 class',
                    'Level assessment',
                    'Teacher introduction',
                    'Learning plan discussion',
                  ].map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-gray-50 px-4 py-3"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-[#A88F3A]"
                        strokeWidth={2.3}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs font-medium text-[#6B7280]">
                  No obligation · No pressure · Just clarity
                </p>
                <button
                  type="button"
                  onClick={() => onOpenBooking('Multiple Family Members')}
                  className="gold-glow-btn mt-6 min-h-[50px] w-full cursor-pointer rounded-xl px-7 py-3.5 text-base sm:w-auto"
                >
                  Book My Free Trial Class
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <ImageFrame
              darkSurface={false}
              src="/src/assets/images/offer_quran_mushaf_1795444747826.jpg"
              alt="Open Quran Mushaf resting on a dark carved wooden stand beside a brass reading lamp"
              caption="Experience a calm 30-minute session with your family"
            />
          </Reveal>
        </div>
      </LightSection>

      {/* Final Message (Dark #111514) */}
      <DarkSection glowPosition="center">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              Your children are growing up in a different country.{' '}
              <span className="gold-gradient-text">
                Their Islamic identity needs support.
              </span>
            </h2>

            <div className="mt-6 space-y-1.5 font-serif text-xl font-semibold text-[#E5E7EB]">
              <p>Give them strong Tajweed.</p>
              <p>Give them confidence.</p>
              <p className="text-[#D4BA6A]">
                Give them connection to the Quran.
              </p>
            </div>

            <div className="mt-7">
              <span className="inline-flex items-center rounded-full border border-red-400/35 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-300">
                Limited UK &amp; USA Evening Slots Available
              </span>
            </div>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => onOpenBooking('Multiple Family Members')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-8 py-4 text-base"
              >
                Claim Your Free Trial Now
              </button>
            </div>
          </div>
        </Reveal>
      </DarkSection>
    </div>
  );
}
