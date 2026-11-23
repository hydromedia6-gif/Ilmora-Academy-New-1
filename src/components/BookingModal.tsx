import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, X } from 'lucide-react';
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

const AUDIENCE_OPTIONS: { value: AudiencePreset; label: string }[] = [
  { value: 'My Child', label: 'My Child' },
  { value: 'Myself (Adult)', label: 'Myself (Adult)' },
  {
    value: 'Myself (New Muslim / Revert)',
    label: 'Myself (New Muslim / Revert)',
  },
  { value: 'Multiple Family Members', label: 'Multiple Family Members' },
];

const AGE_OPTIONS = [
  { value: '4 to 7', label: '4 to 7' },
  { value: '8 to 12', label: '8 to 12' },
  { value: '13 to 17', label: '13 to 17' },
  { value: '18+ (Adult)', label: '18+ (Adult)' },
];

const TIMEZONE_OPTIONS = [
  { value: 'UK (GMT/BST)', label: 'UK (GMT/BST)' },
  { value: 'USA East (EST)', label: 'USA East (EST)' },
  { value: 'USA Central (CST)', label: 'USA Central (CST)' },
  { value: 'USA West (PST)', label: 'USA West (PST)' },
  { value: 'Other', label: 'Other' },
];

interface DarkSelectProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  error?: string;
}

function DarkSelect({
  id,
  label,
  placeholder,
  value,
  options,
  onChange,
  error,
}: DarkSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc, true);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc, true);
    };
  }, [open]);

  const selectedOption = options.find((o) => o.value === value);

  return (
    <div ref={containerRef} className="relative">
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium text-[#D1D5DB]"
      >
        {label} <span className="text-[#C6A84A]">*</span>
      </label>

      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex min-h-[44px] w-full cursor-pointer items-center justify-between rounded-xl border px-3.5 py-2.5 text-left text-sm transition-colors focus:outline-none ${
          open
            ? 'border-[#C6A84A] bg-[#171C1B] ring-1 ring-[#C6A84A]'
            : 'border-white/15 bg-[#171C1B] hover:border-white/25 focus:border-[#C6A84A] focus:ring-1 focus:ring-[#C6A84A]'
        }`}
      >
        <span className={selectedOption ? 'text-white' : 'text-[#9CA3AF]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[#C6A84A] transition-transform duration-150 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-labelledby={id}
          className="absolute left-0 right-0 z-50 mt-1.5 max-h-56 overflow-y-auto rounded-xl border border-[#C6A84A]/40 bg-[#171C1B] py-1.5 shadow-2xl"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li key={opt.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`flex min-h-[40px] w-full cursor-pointer items-center justify-between px-3.5 py-2 text-left text-sm transition-colors ${
                    isSelected
                      ? 'bg-[#C6A84A]/20 font-semibold text-[#D4BA6A]'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span>{opt.label}</span>
                  {isSelected && (
                    <Check className="h-4 w-4 shrink-0 text-[#C6A84A]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

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
  const [submitting, setSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || submitting) return;

    setSubmitting(true);
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

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);

    try {
      await Promise.allSettled([
        // Direct email forwarding to ilmoraonline@gmail.com via FormSubmit AJAX
        fetch('https://formsubmit.co/ajax/ilmoraonline@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `New Free Trial Booking: ${form.fullName} (${form.timezone})`,
            _template: 'table',
            _captcha: 'false',
            'Full Name': form.fullName,
            Email: form.email,
            'WhatsApp / Phone': form.phone,
            'Class For': form.classFor,
            'Student Age': form.studentAge,
            Timezone: form.timezone,
          }),
          signal: controller.signal,
        }),
        // Vercel serverless endpoint for Resend / CRM webhook integration
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'trial', ...form }),
          signal: controller.signal,
        }),
      ]);
    } finally {
      window.clearTimeout(timeoutId);
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  if (!isOpen) return null;

  const inputBaseClass =
    'w-full min-h-[44px] rounded-xl border border-white/15 bg-[#171C1B] px-3.5 py-2.5 text-sm text-white placeholder-[#9CA3AF]/70 transition-colors focus:border-[#C6A84A] focus:outline-none focus:ring-1 focus:ring-[#C6A84A]';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-4 py-6 backdrop-blur-md sm:items-center sm:py-8"
    >
      <div className="relative w-full max-w-[520px] overflow-visible rounded-3xl border border-[#C6A84A]/25 bg-[#111514] shadow-2xl">
        {/* Top gold gradient accent bar */}
        <div
          aria-hidden="true"
          className="h-1 w-full rounded-t-3xl bg-gradient-to-r from-[#A88F3A] via-[#D4BA6A] to-[#A88F3A]"
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
                      if (errors.fullName)
                        setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="Enter your full name"
                    className={inputBaseClass}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.fullName}
                    </p>
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
                        if (errors.email)
                          setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="you@example.com"
                      className={inputBaseClass}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email}
                      </p>
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
                        if (errors.phone)
                          setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+44 or +1..."
                      className={inputBaseClass}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <DarkSelect
                  id="booking-class-for"
                  label="Who is the class for?"
                  placeholder="Select an option"
                  value={form.classFor}
                  options={AUDIENCE_OPTIONS}
                  onChange={(val) => {
                    setForm({ ...form, classFor: val as AudiencePreset });
                    if (errors.classFor)
                      setErrors({ ...errors, classFor: undefined });
                  }}
                  error={errors.classFor}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <DarkSelect
                    id="booking-age"
                    label="Student Age"
                    placeholder="Select age range"
                    value={form.studentAge}
                    options={AGE_OPTIONS}
                    onChange={(val) => {
                      setForm({ ...form, studentAge: val });
                      if (errors.studentAge)
                        setErrors({ ...errors, studentAge: undefined });
                    }}
                    error={errors.studentAge}
                  />

                  <DarkSelect
                    id="booking-timezone"
                    label="Your Timezone"
                    placeholder="Select timezone"
                    value={form.timezone}
                    options={TIMEZONE_OPTIONS}
                    onChange={(val) => {
                      setForm({ ...form, timezone: val });
                      if (errors.timezone)
                        setErrors({ ...errors, timezone: undefined });
                    }}
                    error={errors.timezone}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="gold-glow-btn min-h-[48px] w-full cursor-pointer rounded-xl px-6 py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
                  >
                    {submitting ? 'Submitting Request...' : 'Claim My Free Trial'}
                  </button>
                  <p className="mt-3 text-center text-xs text-[#9CA3AF]">
                    No credit card required · 100% free · We will contact you
                    within 24hrs
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
                A member of our team will reach out within 24 hours to confirm
                your session.
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
                  href={`mailto:ilmoraonline@gmail.com?subject=${encodeURIComponent(
                    `Free Trial Request - ${form.fullName}`
                  )}&body=${encodeURIComponent(
                    `Name: ${form.fullName}\nEmail: ${form.email}\nWhatsApp/Phone: ${form.phone}\nClass For: ${form.classFor}\nStudent Age: ${form.studentAge}\nTimezone: ${form.timezone}`
                  )}`}
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
