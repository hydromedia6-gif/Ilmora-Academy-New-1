import React from 'react';
import { Check } from 'lucide-react';
import {
  DarkSection,
  ImageFrame,
  LightSection,
  Reveal,
} from '../components/SectionPrimitives';
import { AudiencePreset } from '../types/booking';

interface AboutPageProps {
  onOpenBooking: (preset?: AudiencePreset) => void;
}

const PHILOSOPHY_VALUES = [
  {
    title: 'Structured',
    desc: 'Every student follows a clear curriculum from letter recognition and Noorani Qaida through fluent Tajweed application.',
  },
  {
    title: 'Patient',
    desc: 'Learning the Book of Allah requires calmness and encouragement, never rushed corrections or frustration.',
  },
  {
    title: 'Correct',
    desc: 'Real-time Makharij and Tajweed correction ensures habits are built properly from the earliest lesson.',
  },
  {
    title: 'Measurable',
    desc: 'Regular assessments and written progress updates keep parents and adult learners informed at every milestone.',
  },
];

const TEACHER_QUALIFICATIONS = [
  'Official Quran recitation certification (Ijazah / Qari credentials)',
  'Specialized training in classical Tajweed rules and live application',
  'Native or near-native Arabic pronunciation and fluency',
  'Dedicated experience teaching in live 1-on-1 online classrooms',
  'Trained specifically to communicate clearly with Western UK & USA students',
];

const OUR_COMMITMENTS = [
  'Consistent assigned teacher for every student, never random rotation',
  'Honest, transparent progress reporting after evaluations and milestones',
  'Never rushing students merely to finish pages without true mastery',
  "Complete respect for each family's comfort with male and female teacher options",
];

export function AboutPage({ onOpenBooking }: AboutPageProps) {
  return (
    <div>
      {/* Hero (Dark #111514) */}
      <DarkSection className="pt-32 pb-20 lg:pt-40 lg:pb-28" glowPosition="right">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-[#C6A84A]/30 bg-[#C6A84A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A84A]">
              ABOUT ILMORA ACADEMY
            </span>

            <h1
              className="mt-6 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[50px]"
              style={{ textWrap: 'balance' }}
            >
              Structured Quran education, built on{' '}
              <span className="gold-gradient-text">
                patience, correction and accountability.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#D1D5DB] sm:text-lg">
              Ilmora Academy serves families, children, adults, and new Muslims
              across the UK and USA who want trustworthy, 1-on-1 Quran
              instruction rooted in authentic scholarship and modern reliability.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => onOpenBooking('')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-7 py-4 text-sm sm:text-base"
              >
                Book a Free Trial
              </button>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <ImageFrame
              src="/src/assets/images/about_academy_study_1795443620142.jpg"
              alt="Quiet classical study library with dark walnut shelves and an open Quran on a wooden rehal"
              caption="Dedicated scholarship tailored for families in the UK & USA"
            />
          </div>
        </div>
      </DarkSection>

      {/* The Problem We Exist To Solve (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Why We Started
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              The Problem We Exist{' '}
              <span className="gold-gradient-text">To Solve</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#4B5563] sm:text-lg">
              Too many families in the UK and USA sign up for online Quran
              classes only to experience unstructured lessons, crowded group
              rooms, rotating teachers, and zero visibility into whether their
              child is truly reciting correctly. We founded Ilmora Academy to
              replace guesswork with a dependable, structured system where every
              student receives undivided 1-on-1 attention.
            </p>
          </div>
        </Reveal>
      </LightSection>

      {/* Our Vision (Dark #111514) */}
      <DarkSection glowPosition="center">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A84A]">
              Our Vision
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Every Student Reading{' '}
              <span className="gold-gradient-text">Correctly &amp; Confidently</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#D1D5DB] sm:text-lg">
              Our vision is that every student, whether a five-year-old learning
              their first Arabic letters in London, a busy professional in New
              York, or a new Muslim taking their first steps in Chicago, reads
              the Quran correctly and confidently with a consistent teacher and
              a measurable roadmap.
            </p>
          </div>
        </Reveal>
      </DarkSection>

      {/* Teaching Philosophy (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
              Our Pillars
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Teaching{' '}
              <span className="gold-gradient-text">Philosophy</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PHILOSOPHY_VALUES.map((val, i) => (
            <Reveal key={val.title} delay={0.07 * i}>
              <div className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white/95 p-7 transition-colors hover:border-[#C6A84A]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#111514] font-serif text-sm font-bold text-[#C6A84A] transition-colors group-hover:bg-[#C6A84A] group-hover:text-[#111514] tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-[#111514]">
                  {val.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                  {val.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </LightSection>

      {/* Our Teachers (Light Grey Split with Right Portrait) */}
      <LightSection surface="subtle">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88F3A]">
                Faculty Standards
              </p>
              <h2
                className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Our <span className="gold-gradient-text">Teachers</span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-3.5">
              {TEACHER_QUALIFICATIONS.map((qual, idx) => (
                <Reveal key={qual} delay={0.06 * idx}>
                  <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-6 py-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#111514] font-serif text-xs font-bold text-[#C6A84A] tabular-nums">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-medium text-[#111514] sm:text-base">
                      {qual}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5">
            <ImageFrame
              darkSurface={false}
              src="/src/assets/images/teacher_qari_online_1795444748255.jpg"
              alt="Certified Qari scholar seated calmly in a wood-lined library with an open Mushaf"
              caption="Certified male and female instructors trained for Western families"
            />
          </Reveal>
        </div>
      </LightSection>

      {/* Our Commitments (Dark #111514) */}
      <DarkSection glowPosition="left">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A84A]">
              Our Word
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Our <span className="gold-gradient-text">Commitments</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {OUR_COMMITMENTS.map((item, idx) => (
            <Reveal key={item} delay={0.07 * idx}>
              <div className="glass-card flex h-full items-start gap-3.5 rounded-2xl p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6A84A] text-[#111514]">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-sm leading-relaxed text-[#E5E7EB] sm:text-base">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </DarkSection>

      {/* CTA (White) */}
      <LightSection surface="white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-serif text-3xl font-bold leading-[1.15] text-[#111514] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Experience the difference and book your{' '}
              <span className="gold-gradient-text">free 1-on-1 trial.</span>
            </h2>
            <div className="mt-7">
              <button
                type="button"
                onClick={() => onOpenBooking('')}
                className="gold-glow-btn min-h-[52px] cursor-pointer rounded-xl px-8 py-4 text-base"
              >
                Book Your Free Trial Today
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
