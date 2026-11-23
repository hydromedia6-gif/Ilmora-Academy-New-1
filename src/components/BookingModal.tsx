import React, { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';
import { AudiencePreset } from '../types/booking';

interface BookingModalProps {
  isOpen: boolean;
  defaultAudience?: AudiencePreset;
  onClose: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  classFor: AudiencePreset;
  studentAge: string;
  timezone: string;
}

const INITIAL_FORM: FormState = {
  fullName: '',
  email: '',
  phone: '',
  classFor: '',
  studentAge: '',
  timezone: '',
};

export function BookingModal({
  isOpen,
  defaultAudience = '',
  onClose,
}: BookingModalProps) {
  const [form, setForm] = useState<FormState>({
    ...INITIAL_FORM,
    classFor: defaultAudience,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setForm({
        ...INITIAL_FORM,
        classFor: defaultAudience,
        studentAge:
          defaultAudience === 'Myself (Adult)' ||
          defaultAudience === 'Myself (New Muslim / Revert)'
            ? '18+ (Adult)'
            : '',
      });
      setErrors({});
      setSubmitted(false);
      const timer = window.setTimeout(() => {
        firstInputRef.current?.focus();
      }, 60);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen, defaultAudience]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleResetAndClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleResetAndClose = () => {
    setForm({ ...INITIAL_FORM });
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) {
      nextErrors.phone = 'Please enter a valid WhatsApp or phone number.';
    }
    if (!form.classFor) {
      nextErrors.classFor = 'Please select who the class is for.';
    }
    if (!form.studentAge) {
      nextErrors.studentAge = 'Please select student age.';
    }
    if (!form.timezone) {
      nextErrors.timezone = 'Please select your timezone.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const existing = JSON.parse(
        localStorage.getItem('ilmora_trial_requests') || '[]'
      );
      existing.push({
        ...form,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('ilmora_trial_requests', JSON.stringify(existing));
    } catch {
      // Ignore storage errors in restricted environments
    }

    setSubmitted(true);
  };

  if (!isOpen) return null;

  const inputBaseClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-[#9CA3AF]/60 transition-colors focus:border-[#C6A84A] focus:outline-none focus:ring-1 focus:ring-[#C6A84A]';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
    >
      <div className="relative w-full max-w-[520px] overflow-hidden rounded-3xl border border-[#C6A84A]/25 bg-[#111514] shadow-2xl">
        {/* Top gold gradient accent bar */}
        <div
          aria-hidden="true"
          className="h-1 w-full bg-gradient-to-r from-[#A88F3A] via-[#D4BA6A] to-[#A88F3A]"
        />

        {/* Close Button */}
        <button
          type="button"
          aria-label="Close booking dialog"
          onClick={handleResetAndClose}
          className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-[#9CA3AF] transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              <div className="mb-6 flex items-center gap-4 pr-8">
                <img
                  src="/assets/a_clean_graphic_logo_image_on_a_transparent_checke.png"
                  alt="Ilmora Academy"
                  className="h-20 w-auto shrink-0 object-contain sm:h-24"
                />
                <div>
                  <h2
                    id="booking-modal-title"
                    className="font-serif text-2xl font-bold text-white"
                  >
                    Book Your Free Trial
                  </h2>
                  <p className="mt-1 text-xs text-[#9CA3AF]">
                    30-minute 1-on-1 session · No obligation
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label
                    htmlFor="booking-full-name"
                    className="mb-1.5 block text-xs font-medium text-[#D1D5DB]"
                  >
                    Full Name <span className="text-[#C6A84A]">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="booking-full-name"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => {
                      setForm({ ...form, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="Enter your full name"
                    className={inputBaseClass}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="mb-1.5 block text-xs font-medium text-[#D1D5DB]"
                    >
                      Email <span className="text-[#C6A84A]">*</span>
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="you@example.com"
                      className={inputBaseClass}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="mb-1.5 block text-xs font-medium text-[#D1D5DB]"
                    >
                      WhatsApp / Phone <span className="text-[#C6A84A]">*</span>
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+44 or +1..."
                      className={inputBaseClass}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-class-for"
                    className="mb-1.5 block text-xs font-medium text-[#D1D5DB]"
                  >
                    Who is the class for? <span className="text-[#C6A84A]">*</span>
                  </label>
                  <select
                    id="booking-class-for"
                    required
                    value={form.classFor}
                    onChange={(e) => {
                      const val = e.target.value as AudiencePreset;
                      setForm({ ...form, classFor: val });
                      if (errors.classFor) setErrors({ ...errors, classFor: undefined });
                    }}
                    className={`${inputBaseClass} bg-[#171C1B]`}
                  >
                    <option value="">Select an option</option>
                    <option value="My Child">My Child</option>
                    <option value="Myself (Adult)">Myself (Adult)</option>
                    <option value="Myself (New Muslim / Revert)">
                      Myself (New Muslim / Revert)
                    </option>
                    <option value="Multiple Family Members">
                      Multiple Family Members
                    </option>
                  </select>
                  {errors.classFor && (
                    <p className="mt-1 text-xs text-red-400">{errors.classFor}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-age"
                      className="mb-1.5 block text-xs font-medium text-[#D1D5DB]"
                    >
                      Student Age <span className="text-[#C6A84A]">*</span>
                    </label>
                    <select
                      id="booking-age"
                      required
                      value={form.studentAge}
                      onChange={(e) => {
                        setForm({ ...form, studentAge: e.target.value });
                        if (errors.studentAge)
                          setErrors({ ...errors, studentAge: undefined });
                      }}
                      className={`${inputBaseClass} bg-[#171C1B]`}
                    >
                      <option value="">Select age range</option>
                      <option value="4 to 7">4 to 7</option>
                      <option value="8 to 12">8 to 12</option>
                      <option value="13 to 17">13 to 17</option>
                      <option value="18+ (Adult)">18+ (Adult)</option>
                    </select>
                    {errors.studentAge && (
                      <p className="mt-1 text-xs text-red-400">{errors.studentAge}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-timezone"
                      className="mb-1.5 block text-xs font-medium text-[#D1D5DB]"
                    >
                      Your Timezone <span className="text-[#C6A84A]">*</span>
                    </label>
                    <select
                      id="booking-timezone"
                      required
                      value={form.timezone}
                      onChange={(e) => {
                        setForm({ ...form, timezone: e.target.value });
                        if (errors.timezone)
                          setErrors({ ...errors, timezone: undefined });
                      }}
                      className={`${inputBaseClass} bg-[#171C1B]`}
                    >
                      <option value="">Select timezone</option>
                      <option value="UK (GMT/BST)">UK (GMT/BST)</option>
                      <option value="USA East (EST)">USA East (EST)</option>
                      <option value="USA Central (CST)">USA Central (CST)</option>
                      <option value="USA West (PST)">USA West (PST)</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.timezone && (
                      <p className="mt-1 text-xs text-red-400">{errors.timezone}</p>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="gold-glow-btn min-h-[48px] w-full cursor-pointer rounded-xl px-6 py-3.5 text-sm sm:text-base"
                  >
                    Claim My Free Trial
                  </button>
                  <p className="mt-3 text-center text-xs text-[#9CA3AF]">
                    No credit card required · 100% free · We will contact you within 24hrs
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="py-4 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A84A]/40 bg-[#C6A84A]/15 text-[#C6A84A]">
                <Check className="h-8 w-8" strokeWidth={2.2} />
              </div>

              <h2
                id="booking-modal-title"
                className="font-serif text-3xl font-bold text-white"
              >
                JazakAllah Khair!
              </h2>
              <p className="mt-2 text-base font-medium text-[#D4BA6A]">
                Your free trial request has been received.
              </p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#9CA3AF]">
                A member of our team will reach out within 24 hours to confirm your session.
              </p>

              <div className="mx-auto mt-6 max-w-xs space-y-2.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left text-sm text-[#D1D5DB]">
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#C6A84A]" />
                  <span>30-minute 1-on-1 class booked</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#C6A84A]" />
                  <span>Level assessment included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#C6A84A]" />
                  <span>No payment needed</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-[#9CA3AF]">
                Need immediate assistance? Email{' '}
                <a
                  href="mailto:ilmoraonline@gmail.com"
                  className="text-[#C6A84A] underline underline-offset-2 hover:text-[#D4BA6A]"
                >
                  ilmoraonline@gmail.com
                </a>
              </p>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="mt-6 min-h-[44px] w-full cursor-pointer rounded-xl border border-white/20 bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#C6A84A] hover:text-[#C6A84A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A84A]"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
