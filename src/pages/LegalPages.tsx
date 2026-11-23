import React, { useState } from 'react';
import { BookOpen, Check } from 'lucide-react';
import {
  DarkSection,
  LightSection,
} from '../components/SectionPrimitives';
import { AudiencePreset } from '../types/booking';

interface LegalPageProps {
  onOpenBooking: (preset?: AudiencePreset) => void;
  onNavigate: (path: string) => void;
}

export function PrivacyPage({ onOpenBooking }: LegalPageProps) {
  return (
    <div>
      <DarkSection className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A84A]">
            Legal Information
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[#9CA3AF]">
            Last updated: November 2026
          </p>
        </div>
      </DarkSection>

      <LightSection surface="white">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-[#4B5563]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#111514]">
              1. Information We Collect
            </h2>
            <p className="mt-2">
              When you book a free trial class or inquire about our programs, we
              collect only the contact details you provide, including your full
              name, email address, WhatsApp or phone number, student age range,
              preferred timezone (UK or USA), and learning preferences.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#111514]">
              2. How We Use Your Details
            </h2>
            <p className="mt-2">
              Your information is used strictly to schedule your 1-on-1 trial
              session, match your family with an appropriate certified Qari or
              female instructor, share student progress updates, and manage class
              timings. We never sell, rent, or share your contact details with
              third-party marketers.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#111514]">
              3. Classroom &amp; Child Privacy
            </h2>
            <p className="mt-2">
              All 1-on-1 Quran classes take place over private Zoom or Google
              Meet links. Parents are welcome to sit with or monitor their
              child&apos;s sessions at any time. Sessions are never shared
              publicly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#111514]">
              4. Contact Regarding Privacy
            </h2>
            <p className="mt-2">
              To update or remove your family&apos;s contact information at any
              time, write to us at{' '}
              <a
                href="mailto:ilmoraonline@gmail.com"
                className="font-medium text-[#A88F3A] underline underline-offset-2"
              >
                ilmoraonline@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <button
              type="button"
              onClick={() => onOpenBooking('')}
              className="gold-glow-btn min-h-[48px] cursor-pointer rounded-xl px-6 py-3 text-sm"
            >
              Book Your Free Trial
            </button>
          </div>
        </div>
      </LightSection>
    </div>
  );
}

export function TermsPage({ onOpenBooking }: LegalPageProps) {
  return (
    <div>
      <DarkSection className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A84A]">
            Academy Policies
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-[#9CA3AF]">
            Last updated: November 2026
          </p>
        </div>
      </DarkSection>

      <LightSection surface="white">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-[#4B5563]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#111514]">
              1. Free Trial Session
            </h2>
            <p className="mt-2">
              Every new family and adult student is entitled to one complimentary
              30-minute 1-on-1 trial session and Tajweed evaluation with no
              payment or credit card required.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#111514]">
              2. Monthly Tuition &amp; 7-Day Satisfaction Guarantee
            </h2>
            <p className="mt-2">
              Standard enrollment is $70 per month for structured 1-on-1 live
              instruction. If you are not completely satisfied during your first
              7 days of paid classes, you may request a full refund with no
              questions asked.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#111514]">
              3. Scheduling &amp; Teacher Compatibility
            </h2>
            <p className="mt-2">
              Students may reschedule missed or conflicting classes by notifying
              their coordinator in advance. If at any point you wish to switch
              to another certified male or female teacher, we will arrange a
              replacement promptly at no additional cost.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <button
              type="button"
              onClick={() => onOpenBooking('')}
              className="gold-glow-btn min-h-[48px] cursor-pointer rounded-xl px-6 py-3 text-sm"
            >
              Start With Free Trial
            </button>
          </div>
        </div>
      </LightSection>
    </div>
  );
}

export function ContactPage({ onOpenBooking }: LegalPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete all required fields before sending.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <div>
      <DarkSection className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A84A]">
            Get In Touch
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
            Contact <span className="gold-gradient-text">Ilmora Academy</span>
          </h1>
          <p className="mt-4 text-base text-[#D1D5DB]">
            Questions about timings in the UK or USA, female teachers, or
            Urdu-speaking instruction? Reach our admissions team directly.
          </p>
        </div>
      </DarkSection>

      <LightSection surface="white">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-gray-50 p-6">
              <h2 className="font-serif text-xl font-bold text-[#111514]">
                Admissions &amp; Support
              </h2>
              <p className="mt-2 text-sm text-[#4B5563]">
                We respond to all family inquiries within 24 hours across UK and
                North American timezones.
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A88F3A]">
                    Email
                  </p>
                  <a
                    href="mailto:ilmoraonline@gmail.com"
                    className="font-medium text-[#111514] underline underline-offset-2"
                  >
                    ilmoraonline@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A88F3A]">
                    Regions Served
                  </p>
                  <p className="text-[#1A1A1A]">
                    United Kingdom (GMT/BST) · United States (EST/CST/PST)
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#C6A84A]/25 bg-[#111514] p-6 text-white">
              <h3 className="font-serif text-lg font-bold text-white">
                Ready for a 30-Minute Trial?
              </h3>
              <p className="mt-2 text-sm text-[#9CA3AF]">
                Book your complimentary 1-on-1 Tajweed evaluation directly.
              </p>
              <button
                type="button"
                onClick={() => onOpenBooking('')}
                className="gold-glow-btn mt-4 min-h-[44px] w-full cursor-pointer rounded-xl px-5 py-2.5 text-sm"
              >
                Book Free Trial Now
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm sm:p-9">
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-[#111514]">
                    Send Us A Message
                  </h2>
                  {error && (
                    <p className="rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-700">
                      {error}
                    </p>
                  )}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-semibold text-[#1A1A1A]"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm text-[#111514] focus:border-[#C6A84A] focus:outline-none focus:ring-1 focus:ring-[#C6A84A]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-semibold text-[#1A1A1A]"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm text-[#111514] focus:border-[#C6A84A] focus:outline-none focus:ring-1 focus:ring-[#C6A84A]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-semibold text-[#1A1A1A]"
                    >
                      How Can We Help?
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your child's age, your timezone, or your preferred teacher..."
                      className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm text-[#111514] focus:border-[#C6A84A] focus:outline-none focus:ring-1 focus:ring-[#C6A84A]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="gold-glow-btn min-h-[48px] cursor-pointer rounded-xl px-7 py-3 text-sm"
                  >
                    Send Inquiry
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A84A]/15 text-[#A88F3A]">
                    <Check className="h-6 w-6" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#111514]">
                    JazakAllah Khair!
                  </h2>
                  <p className="mt-2 text-sm text-[#4B5563]">
                    Your message has been received. Our admissions coordinator
                    will reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-5 cursor-pointer rounded-xl border border-neutral-300 px-5 py-2 text-sm font-medium text-[#111514] hover:border-[#C6A84A]"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </LightSection>
    </div>
  );
}

export function NotFoundPage({ onNavigate, onOpenBooking }: LegalPageProps) {
  return (
    <DarkSection className="flex min-h-[75vh] items-center pt-28 pb-20">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A84A]/30 bg-[#C6A84A]/10 text-[#C6A84A]">
          <BookOpen className="h-6 w-6" />
        </div>
        <p className="font-serif text-sm font-bold uppercase tracking-[0.25em] text-[#C6A84A]">
          Page Not Found · 404
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
          We Could Not Find That Page
        </h1>
        <p className="mt-4 text-base text-[#9CA3AF]">
          Return to Ilmora Academy home or explore our programs for families,
          children, adults, and new Muslims in the UK and USA.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="gold-glow-btn min-h-[48px] cursor-pointer rounded-xl px-7 py-3 text-sm"
          >
            Return Home
          </button>
          <button
            type="button"
            onClick={() => onOpenBooking('')}
            className="min-h-[48px] cursor-pointer rounded-xl border border-white/20 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-[#C6A84A] hover:text-[#C6A84A]"
          >
            Book Free Trial
          </button>
        </div>
      </div>
    </DarkSection>
  );
}
