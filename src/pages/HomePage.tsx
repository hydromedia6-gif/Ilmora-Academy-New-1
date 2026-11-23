import React, { useState } from 'react';
import { BookOpen, Check, ChevronDown, ShieldCheck, Star } from 'lucide-react';
import {
  DarkSection,
  GoldDivider,
  ImageFrame,
  LightSection,
  Reveal,
} from '../components/SectionPrimitives';
import { AudiencePreset } from '../types/booking';

interface HomePageProps {
  onOpenBooking: (preset?: AudiencePreset) => void;
  onNavigate: (path: string) => void;
}

const TRUST_BADGES = [
  'Certified Male & Female Teachers',
  'Native Arab Tutors Available',
  '100% 1-on-1 Personalized Classes',
  'Flexible UK & USA Timings',
];

const PARENT_QUOTES = [
  'My child reads, but I do not know if it is correct.',
  'I am not confident about their Tajweed.',
  'I tried a few online teachers, but it was not structured.',
  'The teacher kept changing.',
  'There was no progress tracking.',
];

const COMPETITOR_FLAWS = [
  'Group classes with limited correction',
  'Rotating teachers',
  'No structured roadmap',
  'Generic lesson plans',
  'Minimal accountability',
  'No Western timezone focus',
];

const METHOD_STEPS = [
  {
    num: '01',
    title: 'Detailed Assessment',
    points: [
      'Current reading level',
      'Tajweed knowledge',
      'Pronunciation gaps (Makharij)',
      'Fluency level',
      'Memorization goals',
    ],
    tagline: 'This prevents wasted months.',
  },
  {
    num: '02',
    title: 'Foundation Correction',
    points: [
      'Letter articulation',
      'Common pronunciation mistakes',
      'Basic Tajweed rule application',
    ],
    tagline: 'Strong foundation creates faster progress later.',
  },
  {
    num: '03',
    title: 'Structured Tajweed',
    points: [
      'Rules with practical application',
      'Real-time correction',
      'Repetition with understanding',
      'Proper breathing & flow',
    ],
    tagline: 'Not memorization, true understanding.',
  },
  {
    num: '04',
    title: 'Fluency & Confidence',
    points: [
      'From hesitant reading',
      'To smooth, confident recitation',
    ],
    tagline: 'Parents notice improvement within weeks.',
  },
  {
    num: '05',
    title: 'Progress Tracking',
    points: [
      'Track performance',
      'Adjust teaching speed',
      'Send parent updates',
      'Provide feedback reports',
    ],
    tagline: 'Accountability creates transformation.',
  },
];

const PROGRAM_SHOWCASE = [
  {
    title: 'For Kids (UK & USA)',
    subtitle: 'Ages 4 to 17 · After-school & weekend timings',
    img: '/src/assets/images/kids_quran_study_1795443620411.jpg',
    alt: 'Child reading Quran with a patient Qari teacher',
    path: '/Kids',
  },
  {
    title: 'For Adults',
    subtitle: 'Private Tajweed correction & fluency',
    img: '/src/assets/images/adults_quran_study_1795443620569.jpg',
    alt: 'Adult studying an open Arabic Quran at a wooden desk',
    path: '/Adults',
  },
  {
    title: 'For New Muslims',
    subtitle: 'Beginner-friendly from the first Arabic letter',
    img: '/src/assets/images/reverts_beginner_study_1795444776894.jpg',
    alt: 'Beginner Arabic alphabet study notebook beside a Quran Mushaf',
    path: '/Reverts',
  },
  {
    title: 'Pakistani Families',
    subtitle: 'Urdu communication & diaspora family support',
    img: '/src/assets/images/pakistani_family_quran_1795444748313.jpg',
    alt: 'Pakistani father and son reading the Quran together at home',
    path: '/Pakistani',
  },
];

const FAQ_ITEMS = [
  {
    question: 'Is it truly 1-on-1?',
    answer:
      'Yes. Every session is fully personalized and private. Your child (or you) gets the teacher’s full, undivided attention with no group distractions and no shared time.',
  },
  {
    question: 'What platform do you use?',
    answer:
      'We use Zoom or Google Meet with secure private links. Sessions are easy to join from any device, whether phone, tablet, or computer.',
  },
  {
    question: 'Can siblings share one class?',
    answer:
      'Each student receives individual sessions for maximum focus and personalized correction. Shared classes would reduce the effectiveness of our system.',
  },
  {
    question: 'Is it suitable for beginners?',
    answer:
      'Yes. We teach from Noorani Qaida all the way to advanced Tajweed. Whether you are starting from scratch or correcting existing mistakes, we handle both.',
  },
  {
    question: 'Are there female teachers?',
    answer:
      'Yes, available upon request. We have experienced female teachers for sisters, daughters, and women who prefer to learn with a female instructor.',
  },
  {
    question: 'Can I change my schedule later?',
    answer:
      'Yes, flexibility is part of our structure. If your availability changes, simply inform us and we will arrange a time that works for you.',
  },
  {
    question: 'What if I am not satisfied?',
    answer:
      'We offer a 7-Day Satisfaction Guarantee. If you are not happy in the first week, we refund you with no questions asked. We also offer immediate teacher replacement if needed.',
  },
];

export function HomePage({ onOpenBooking, onNavigate }: HomePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div>
      {/* 5.1 HERO (Dark #111514) */}
      <DarkSection className="pt-32 pb-20 lg:pt-40 lg:pb-28" glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#C6A84A]/30 bg-[#C6A84A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A84A]">
              <BookOpen className="h-3.5 w-3.5" strokeWidth={1.8} />
              <span>ILMORA ACADEMY</span>
            </div>

            <h1
              className="mt-6 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]"
              style={{ textWrap: 'balance' }}
            >
              Help Your Child, Or Yourself, Read The Quran With{' '}
              <span className="gold-gradient-text">
                Confidence, Clarity &amp; Correct Tajweed
              </span>
            </h1>

            <p className="mt-5 font-serif text-xl font-semibold text-[#E5E7EB] sm:text-2xl">
              Even If You&apos;re Starting From Zero.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#D1D5DB] sm:text-lg">
              At Ilmora Academy, we provide structured 1-on-1 online Quran classes
              led by certified Qaris and native Arab tutors, specifically designed
              for families and adults in the UK &amp; USA who want serious,
              measurable progress.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking('')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-7 py-4 text-sm sm:text-base"
              >
                Claim Your FREE Quran Clarity Session Now
              </button>
              <p className="text-xs font-medium tracking-wide text-[#D4BA6A]">
                Limited Evening Slots Available For UK &amp; USA Students
              </p>
            </div>

            {/* 2x2 Trust Grid */}
            <div className="mt-9 grid grid-cols-1 gap-3 border-t border-white/10 pt-7 sm:grid-cols-2">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-3 text-sm font-medium text-[#E5E7EB]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C6A84A]/40 bg-[#C6A84A]/10 text-[#C6A84A]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Visual (hidden below 1024px) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 rounded-[36px] bg-[#C6A84A]/[0.08] blur-3xl"
              />
              <div className="glass-card relative rounded-[28px] p-5">
                <div className="overflow-hidden rounded-2xl bg-[#171C1B]">
                  <img
                    src="/src/assets/images/hero_quran_rehal_1795443620014.jpg"
                    alt="Open Quran resting on a carved wooden rehal in warm golden study light"
                    referrerPolicy="no-referrer"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>

                <div className="mt-5 text-center">
                  <p
                    lang="ar"
                    dir="rtl"
                    className="gold-gradient-text font-serif text-2xl font-bold tracking-wide"
                  >
                    بِسْمِ ٱللَّهِ
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-white">
                    1-on-1 Live Quran Sessions
                  </p>
                  <p className="mt-0.5 text-xs text-[#C6A84A]">
                    Live Classes Available Now · UK &amp; USA Timings
                  </p>
                </div>

                <GoldDivider className="my-5" />

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="font-serif text-xl font-bold text-white tabular-nums">
                      500+
                    </p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-wider text-[#9CA3AF]">
                      Students
                    </p>
                  </div>
                  <div className="border-x border-white/10">
                    <p className="font-serif text-xl font-bold text-[#D4BA6A] tabular-nums">
                      98%
                    </p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-wider text-[#9CA3AF]">
                      Satisfaction
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-xl font-bold text-white tabular-nums">
                      15+
                    </p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-wider text-[#9CA3AF]">
                      Countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DarkSection>

      {/* 5.2 THE PROBLEM (White + Subtle Architectural Overlay) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              The Reality Most Parents Face
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              If You&apos;re Living In The{' '}
              <span className="gold-gradient-text">UK or USA...</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] sm:text-lg">
              You already know how difficult it is to ensure your child stays
              connected to the Quran.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              'Between school.',
              'Between distractions.',
              'Between social media.',
              'Between busy work schedules.',
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-neutral-200 bg-gray-50 px-4 py-3 text-center text-sm font-medium text-[#111514]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-base text-[#4B5563]">
              Quran learning slowly becomes &ldquo;something we&apos;ll fix later.&rdquo;
            </p>
            <p className="mt-1 font-semibold text-[#111514]">
              And that &lsquo;later&rsquo; keeps getting delayed.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-14">
            <h3 className="text-center font-serif text-2xl font-bold text-[#111514]">
              Many parents tell us:
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {PARENT_QUOTES.map((quote, idx) => (
                <div
                  key={quote}
                  className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white/90 p-5 shadow-xs"
                >
                  <span className="font-serif text-2xl font-bold leading-none text-[#C6A84A]">
                    &ldquo;
                  </span>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-[#111514]">
                    {quote}
                  </p>
                  <span className="mt-4 text-xs font-medium text-[#9CA3AF] tabular-nums">
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Amber Callout Box */}
        <Reveal delay={0.16}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-6 py-8 text-center sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88F3A]">
              And deep down... there&apos;s a quiet worry:
            </p>
            <blockquote className="mt-3 font-serif text-2xl font-bold italic leading-snug text-[#111514] sm:text-3xl">
              &ldquo;What if my child grows up without reading the Quran properly?&rdquo;
            </blockquote>
          </div>
        </Reveal>

        {/* Dark Rounded Panel with Right-Side Editorial Photo */}
        <Reveal delay={0.18}>
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[32px] border border-[#C6A84A]/25 bg-[#111514] p-7 text-white sm:p-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h3 className="font-serif text-2xl font-bold leading-snug text-white sm:text-3xl">
                  For Adults &amp; Reverts, It&apos;s Even{' '}
                  <span className="gold-gradient-text">More Personal.</span>
                </h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">You may feel:</p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    'Embarrassed about pronunciation',
                    'Afraid to read aloud in front of others',
                    'Unsure where to restart',
                    'Overwhelmed by Tajweed rules',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-[#E5E7EB]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A84A]"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-[#C6A84A]/20">
                  <img
                    src="/src/assets/images/adults_quran_study_1795443620569.jpg"
                    alt="Adult student studying an open Arabic Quran in a calm private evening room"
                    referrerPolicy="no-referrer"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Most Academies Offer */}
        <Reveal delay={0.2}>
          <div className="mt-14">
            <h3 className="text-center font-serif text-2xl font-bold text-[#111514]">
              Most Online Quran Academies Offer:
            </h3>
            <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {COMPETITOR_FLAWS.map((flaw, i) => (
                <div
                  key={flaw}
                  className="flex items-center gap-4 rounded-2xl border border-red-200/80 bg-red-50 px-5 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-red-200 bg-white font-serif text-xs font-bold text-red-700 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-medium text-[#111514]">{flaw}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center font-serif text-xl font-bold text-[#111514]">
              That&apos;s exactly why Ilmora Academy exists.
            </p>
          </div>
        </Reveal>
      </LightSection>

      {/* 5.3 WHY WE'RE DIFFERENT (Dark #111514) */}
      <DarkSection glowPosition="left">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A84A]">
              Why Ilmora Academy Is Different
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              We Built Something{' '}
              <span className="gold-gradient-text">Completely Different.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Glass Card */}
          <Reveal delay={0.08}>
            <div className="glass-card flex h-full flex-col justify-between rounded-3xl p-7 sm:p-9">
              <div>
                <h3 className="font-serif text-xl font-bold leading-snug text-white sm:text-2xl">
                  We Created A Structured, Step-by-Step Quran Mastery Framework™
                  Designed Specifically For:
                </h3>

                <ul className="mt-6 space-y-3.5">
                  {[
                    'Busy Western families',
                    'English-speaking students',
                    'Reverts',
                    'Children needing personal attention',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-base text-[#E5E7EB]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C6A84A]/40 bg-[#C6A84A]/15 text-[#C6A84A]">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <GoldDivider className="mb-6" />
                <div className="space-y-2 font-serif text-lg font-semibold text-white">
                  <p>We do not rush.</p>
                  <p>We do not rotate randomly.</p>
                  <p className="text-[#D4BA6A]">
                    We do not leave progress to chance.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column */}
          <Reveal delay={0.14}>
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="mb-5 font-serif text-xl font-bold text-white sm:text-2xl">
                  Every Student Receives:
                </h3>
                <div className="space-y-3">
                  {[
                    'Dedicated 1-on-1 sessions',
                    'Consistent assigned teacher',
                    'Structured syllabus',
                    'Tajweed-focused correction',
                    'Regular progress feedback',
                  ].map((benefit) => (
                    <div
                      key={benefit}
                      className="glass-card flex items-center gap-3.5 rounded-2xl px-5 py-3.5"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C6A84A] text-[#111514]">
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm font-medium text-white sm:text-base">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#C6A84A]/35 bg-[#C6A84A]/10 p-5 text-center">
                <p className="text-sm font-medium text-[#E5E7EB]">
                  This is not casual tutoring.
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-[#D4BA6A]">
                  This is guided Quran education.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4 Credential Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Certified Qaris',
              desc: 'Every teacher holds official Quran recitation certification',
            },
            {
              title: 'Native Arab Tutors',
              desc: 'Fluent Arabic speakers who understand Tajweed natively',
            },
            {
              title: 'Tajweed-Certified',
              desc: 'Specialized training in all Tajweed rules & live application',
            },
            {
              title: 'Male & Female Teachers',
              desc: "Choose what's comfortable for your family's needs",
            },
          ].map((cred, index) => (
            <Reveal key={cred.title} delay={0.06 * index}>
              <div className="glass-card flex h-full flex-col rounded-2xl p-6">
                <span className="font-serif text-sm font-bold tracking-widest text-[#C6A84A] tabular-nums">
                  0{index + 1}
                </span>
                <h4 className="mt-3 font-serif text-lg font-bold text-white">
                  {cred.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                  {cred.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </DarkSection>

      {/* 5.4 OUR METHOD (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Our Proven System
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              The Ilmora{' '}
              <span className="gold-gradient-text">Tajweed Mastery</span>{' '}
              Framework™
            </h2>
            <p className="mt-4 text-base text-[#4B5563] sm:text-lg">
              Here&apos;s exactly how we help every student improve, step by step.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {METHOD_STEPS.map((step, index) => (
            <Reveal key={step.num} delay={0.07 * index}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white/95 p-6 transition-colors hover:border-[#C6A84A]">
                <div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#111514] font-serif text-sm font-bold text-[#C6A84A] transition-colors group-hover:bg-[#C6A84A] group-hover:text-[#111514] tabular-nums">
                    {step.num}
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#111514]">
                    {step.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-[#4B5563]">
                    {step.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C6A84A]"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 border-t border-neutral-100 pt-4 font-serif text-sm italic font-semibold text-[#A88F3A]">
                  {step.tagline}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center font-serif text-xl font-bold text-[#111514]">
          This accountability is what creates transformation.
        </p>
      </LightSection>

      {/* 5.5 TEACHERS (Light Grey with Right-Side Qari Portrait) */}
      <LightSection surface="subtle">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Our Teachers
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              We Take Teacher Quality{' '}
              <span className="gold-gradient-text">Seriously.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="mb-4 font-serif text-xl font-bold text-[#111514]">
                  All teachers are:
                </h3>
                <div className="space-y-3">
                  {[
                    'Certified Qaris',
                    'Tajweed-certified',
                    'Experienced in online teaching',
                    'Fluent in English',
                    'Trained to work with Western students',
                  ].map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#111514] font-serif text-xs font-bold text-[#C6A84A] tabular-nums">
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-[#111514] sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="flex h-full flex-col justify-between rounded-[32px] border border-[#C6A84A]/25 bg-[#111514] p-7 text-white sm:p-9">
              <div>
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="/src/assets/images/teacher_qari_online_1795444748255.jpg"
                    alt="Certified Qari scholar seated at a study desk with an open Mushaf on a wooden rehal"
                    referrerPolicy="no-referrer"
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  We offer:
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    'Male teachers for boys & men',
                    'Female teachers for girls & women',
                    'Native Arab tutors available',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3.5 text-base font-medium text-[#E5E7EB]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6A84A] text-[#111514]">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-[#C6A84A]/35 bg-[#C6A84A]/10 p-5">
                <p className="text-sm leading-relaxed text-[#E5E7EB] sm:text-base">
                  We also prioritize patience, character, and communication skills
                  because Quran learning is not just technical.
                </p>
                <p className="mt-1.5 font-serif text-lg font-bold text-[#D4BA6A]">
                  It&apos;s spiritual.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </LightSection>

      {/* 5.6 FREE TRIAL OFFER (Dark #111514 Split Layout with Right Image) */}
      <DarkSection id="offer-section" glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#C6A84A]/35 bg-[#C6A84A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A84A]">
                LIMITED TIME OFFER
              </div>

              <h2
                className="mt-5 font-serif text-3xl font-bold leading-[1.12] text-white sm:text-5xl"
                style={{ textWrap: 'balance' }}
              >
                FREE Quran{' '}
                <span className="gold-gradient-text">Clarity Session</span>
              </h2>

              <p className="mt-4 font-serif text-xl font-bold text-[#D4BA6A] sm:text-2xl">
                <span className="mr-2 text-[#9CA3AF] line-through">
                  $97 Value
                </span>
                <span>Absolutely FREE</span>
              </p>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#D1D5DB]">
                Before you enroll, we invite you to experience our system. No
                obligation. No pressure. Just clarity.
              </p>

              <div className="glass-card mt-7 rounded-3xl p-6 sm:p-8">
                <h3 className="font-serif text-xl font-bold text-white">
                  When you enroll today, you receive:
                </h3>

                <ul className="mt-5 space-y-3">
                  {[
                    '30-Minute Live 1-on-1 Class',
                    'Tajweed Evaluation',
                    'Personalized Learning Roadmap',
                    'Teacher Compatibility Matching',
                    'Flexible Schedule Planning',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#E5E7EB] sm:text-base"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6A84A] text-[#111514]">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <button
                    type="button"
                    onClick={() => onOpenBooking('')}
                    className="gold-glow-btn min-h-[52px] w-full cursor-pointer rounded-xl px-8 py-4 text-base sm:w-auto"
                  >
                    Book Your Free Trial Today
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <ImageFrame
              src="/src/assets/images/offer_quran_mushaf_1795444747826.jpg"
              alt="Open Arabic Quran on a carved dark walnut stand beside a brass reading lamp and leather study journal"
              caption="Experience a full 30-minute assessment before making any commitment"
            />
          </Reveal>
        </div>
      </DarkSection>

      {/* 5.7 PRICING (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Investment
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              Premium Quality.{' '}
              <span className="gold-gradient-text">Accessible Pricing.</span>
            </h2>
            <p className="mt-4 text-base text-[#4B5563] sm:text-lg">
              Many academies charge $90 to $150 per month for certified 1-on-1
              teaching. At Ilmora Academy, you get more for less.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-[480px] rounded-[32px] border border-[#C6A84A]/30 bg-[#111514] p-8 text-center text-white shadow-xl sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C6A84A]">
              ILMORA ACADEMY PLAN
            </p>

            <div className="mt-4 flex items-baseline justify-center gap-1.5">
              <span className="font-serif text-5xl font-bold text-white tabular-nums sm:text-6xl">
                $70
              </span>
              <span className="text-base text-[#9CA3AF]">/month</span>
            </div>

            <p className="mt-3 text-sm font-semibold text-[#D4BA6A]">
              That&apos;s less than $2.50 per day.
            </p>
            <p className="mt-2 text-sm text-[#9CA3AF]">
              This is not an expense. It&apos;s an investment in your child&apos;s
              foundation.
            </p>

            <GoldDivider className="my-7" />

            <ul className="space-y-3 text-left text-sm text-[#E5E7EB] sm:text-base">
              {[
                '1-on-1 live sessions',
                'Certified Qaris',
                'Native Arab teachers',
                'Male & female options',
                'Flexible scheduling',
                'Progress tracking',
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C6A84A]/20 text-[#C6A84A]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.3} />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => onOpenBooking('')}
              className="gold-glow-btn mt-8 min-h-[50px] w-full cursor-pointer rounded-xl px-6 py-3.5 text-base"
            >
              Start With FREE Trial
            </button>
          </div>
        </Reveal>
      </LightSection>

      {/* 5.8 WHO IT'S FOR (White + Visual Program Showcase) */}
      <LightSection surface="white" className="border-t border-neutral-100">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Is This For You?
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              This Is <span className="gold-gradient-text">Perfect For:</span>
            </h2>
          </div>
        </Reveal>

        {/* Visual Showcase of our 4 Dedicated Country/Community Programs */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_SHOWCASE.map((prog, idx) => (
            <Reveal key={prog.title} delay={0.06 * idx}>
              <button
                type="button"
                onClick={() => onNavigate(prog.path)}
                className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left transition-colors hover:border-[#C6A84A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#171C1B]">
                  <img
                    src={prog.img}
                    alt={prog.alt}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#111514]">
                      {prog.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                      {prog.subtitle}
                    </p>
                  </div>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#A88F3A] group-hover:text-[#111514]">
                    Explore Program
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* 6 Audience Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Parents who want structured Quran education',
              path: '/Kids',
            },
            {
              title: 'Families in UK & USA',
              path: '/Pakistani',
            },
            {
              title: 'Adults restarting their Quran journey',
              path: '/Adults',
            },
            {
              title: 'Reverts beginning from scratch',
              path: '/Reverts',
            },
            {
              title: 'Students wanting Tajweed correction',
              path: '/Adults',
            },
            {
              title: 'Busy professionals needing flexible timings',
              path: '/Adults',
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={0.05 * i}>
              <button
                type="button"
                onClick={() => onNavigate(card.path)}
                className="group flex h-full w-full cursor-pointer items-center gap-4 rounded-2xl border border-neutral-200 bg-gray-50 p-6 text-left transition-colors hover:border-[#C6A84A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#111514] font-serif text-sm font-bold text-[#C6A84A] transition-colors group-hover:bg-[#C6A84A] group-hover:text-[#111514] tabular-nums">
                  0{i + 1}
                </span>
                <span className="font-serif text-lg font-bold leading-snug text-[#111514]">
                  {card.title}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </LightSection>

      {/* 5.9 GUARANTEES (Light Grey) */}
      <LightSection surface="subtle">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A84A]/35 bg-[#C6A84A]/10 text-[#A88F3A]">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Zero Risk
            </p>
            <h2
              className="mt-2 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              We Remove <span className="gold-gradient-text">All Risk.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: '7-Day Satisfaction Guarantee',
              desc: "If you're not happy in the first week, we refund you. No questions asked.",
            },
            {
              title: 'Teacher Replacement Guarantee',
              desc: 'Not comfortable? We assign a new certified tutor immediately.',
            },
            {
              title: 'Flexible Scheduling Guarantee',
              desc: 'Missed class? Reschedule easily. Life happens, we understand.',
            },
            {
              title: 'Progress Assurance',
              desc: "If your child doesn't improve, we re-evaluate and adjust strategy at no extra cost.",
            },
          ].map((g, i) => (
            <Reveal key={g.title} delay={0.07 * i}>
              <div className="h-full rounded-2xl border border-neutral-200 bg-white p-7">
                <span className="font-serif text-xs font-bold tracking-widest text-[#A88F3A] tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-[#111514]">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563] sm:text-base">
                  {g.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </LightSection>

      {/* 5.10 SCARCITY (Dark #111514) */}
      <DarkSection glowPosition="center">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-red-400/35 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
              LIMITED ENROLLMENT
            </span>

            <h2
              className="mt-5 font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              We Only Onboard A{' '}
              <span className="gold-gradient-text">
                Limited Number Of New Students
              </span>{' '}
              Each Month
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#D1D5DB]">
              To maintain the highest quality of education, we cap enrollment
              every month.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <span className="rounded-full border border-[#C6A84A]/35 bg-[#C6A84A]/10 px-5 py-2.5 text-sm font-medium text-[#D4BA6A]">
                UK &amp; USA evening slots fill the fastest
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-[#D1D5DB]">
                Once slots are full, enrollment closes
              </span>
            </div>

            <div className="mt-9">
              <button
                type="button"
                onClick={() => onOpenBooking('')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-8 py-4 text-base"
              >
                Secure Your Spot Now
              </button>
            </div>
          </div>
        </Reveal>
      </DarkSection>

      <GoldDivider />

      {/* 5.11 TESTIMONIALS (Elevated Dark #171C1B) */}
      <DarkSection variant="elevated" glowPosition="right">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A84A]">
              Success Stories
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              What Our <span className="gold-gradient-text">Families Say</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            {
              initial: 'S',
              name: 'Sarah A.',
              location: 'London, UK',
              quote:
                "My daughter's Tajweed improved dramatically in just 2 months. The 1-on-1 attention makes all the difference. We tried group classes before, and this is worlds apart.",
            },
            {
              initial: 'A',
              name: 'Ahmed K.',
              location: 'New York, USA',
              quote:
                "As a revert, I was nervous about my pronunciation. My teacher is incredibly patient and encouraging. I'm reading Surah Al-Baqarah now with confidence!",
            },
            {
              initial: 'F',
              name: 'Fatima M.',
              location: 'Birmingham, UK',
              quote:
                'The progress tracking is amazing. I know exactly where my son stands every week. The scheduling flexibility is perfect for our busy family life.',
            },
          ].map((t, idx) => (
            <Reveal key={t.name} delay={0.08 * idx}>
              <div className="glass-card flex h-full flex-col justify-between rounded-3xl p-7">
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      aria-hidden="true"
                      className="font-serif text-4xl font-bold leading-none text-[#C6A84A]/60"
                    >
                      &ldquo;
                    </span>
                    <div
                      className="flex items-center gap-1 text-[#C6A84A]"
                      aria-label="5 out of 5 stars"
                    >
                      {[0, 1, 2, 3, 4].map((starIdx) => (
                        <Star
                          key={starIdx}
                          className="h-4 w-4 fill-[#C6A84A] text-[#C6A84A]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#E5E7EB] sm:text-base">
                    {t.quote}
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-3.5 border-t border-white/10 pt-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C6A84A]/40 bg-[#C6A84A]/15 font-serif text-sm font-bold text-[#D4BA6A]">
                    {t.initial}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-[#9CA3AF]">{t.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </DarkSection>

      {/* 5.12 FAQ (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Common Questions
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl lg:text-[44px]"
              style={{ textWrap: 'balance' }}
            >
              Frequently Asked{' '}
              <span className="gold-gradient-text">Questions</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-[#C6A84A] bg-amber-50/60'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="flex min-h-[56px] w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A]"
                >
                  <span className="font-serif text-lg font-bold text-[#111514]">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#C6A84A] text-[#111514]'
                        : 'bg-gray-100 text-[#111514]'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <div
                  id={`faq-panel-${idx}`}
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </LightSection>

      {/* 5.13 FINAL CTA (Dark #111514) */}
      <DarkSection glowPosition="center">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A84A]/35 bg-[#C6A84A]/10 text-[#C6A84A]">
              <BookOpen className="h-6 w-6" strokeWidth={1.75} />
            </div>

            <h2
              className="font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[46px]"
              style={{ textWrap: 'balance' }}
            >
              Your Child&apos;s Quran Education{' '}
              <span className="gold-gradient-text">Should Not Be Delayed.</span>
            </h2>

            <p className="mt-4 font-serif text-xl font-semibold text-[#E5E7EB]">
              Your own Quran confidence should not wait another year.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#D1D5DB]">
              The longer you wait, the harder it becomes to correct mistakes.
              Start today. Experience Ilmora Academy with a FREE Trial Class.
            </p>

            <div className="mt-6">
              <span className="inline-flex items-center rounded-full border border-red-400/35 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-300">
                Limited UK/USA Slots Available
              </span>
            </div>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => onOpenBooking('')}
                className="gold-glow-btn min-h-[54px] cursor-pointer rounded-xl px-8 py-4 text-base"
              >
                Claim Your Free Quran Clarity Session Now
              </button>
              <p className="mt-3 text-xs text-[#9CA3AF]">
                No credit card required · 100% free · No obligation
              </p>
            </div>
          </div>
        </Reveal>
      </DarkSection>
    </div>
  );
}
