import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Check,
  FileCheck,
  MailOpen,
  PhoneCall,
} from 'lucide-react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md';
import { ScrollTextReveal } from './ScrollTextReveal';

const NEED_OPTIONS = [
  'Custom software',
  'AI & Data',
  'Cloud & DevOps',
  'Staff augmentation',
  'Rexo ERP demo',
  'CleanPlan demo',
  'Education ERP demo',
  'Something else',
] as const;

const BUDGET_OPTIONS = [
  'Under ₹5L',
  '₹5L – ₹15L',
  '₹15L – ₹35L',
  '₹35L – ₹75L',
  'Above ₹75L',
  'Not sure yet',
] as const;

const AFTER_STEPS = [
  {
    num: '01',
    title: 'We read it',
    text: 'A person, not an autoresponder.',
    icon: MailOpen,
  },
  {
    num: '02',
    title: '30-minute call',
    text: 'We understand the problem before proposing anything.',
    icon: PhoneCall,
  },
  {
    num: '03',
    title: 'Quote or honesty',
    text: "A fixed, itemized quote — or an honest 'here's a better way to solve this.' Sometimes that's a smaller project, sometimes a tool we don't sell.",
    icon: FileCheck,
  },
] as const;

const PHONE = '+91 88780 03344';
const PHONE_TEL = '+918878003344';
const EMAIL = 'info@nagarsoftwaresolution.com';
const WHATSAPP_URL = 'https://wa.me/918878003344';

const SOCIAL_LINKS = [
  { label: 'Facebook', icon: FaFacebook, href: '#', className: 'contact-page__social--facebook' },
  { label: 'LinkedIn', icon: FaLinkedin, href: '#', className: 'contact-page__social--linkedin' },
  { label: 'WhatsApp', icon: FaWhatsapp, href: WHATSAPP_URL, className: 'contact-page__social--whatsapp', external: true },
  { label: 'Instagram', icon: FaInstagram, href: '#', className: 'contact-page__social--instagram' },
  { label: 'X', icon: FaXTwitter, href: '#', className: 'contact-page__social--x' },
  { label: 'YouTube', icon: FaYoutube, href: '#', className: 'contact-page__social--youtube' },
] as const;

const OFFICE =
  '308 Shagun Arcade, Plot No. 8, PU-4, Scheme No. 54, AB Road, Vijay Nagar, Indore (M.P.) 452010, India';
const MAP_QUERY = encodeURIComponent(
  '308 Shagun Arcade, Plot No. 8, PU-4, Scheme No. 54, AB Road, Vijay Nagar, Indore, Madhya Pradesh 452010, India',
);
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&hl=en&z=17&ie=UTF8&iwloc=near&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

const CONTACT_LETTER_INTERVAL = 78;

const CONTACT_TITLE_WORDS = [
  { text: 'Tell' },
  { text: 'us' },
  { text: "what's" },
  { text: 'slowing' },
  { text: 'you' },
  { text: 'down' },
] as const;

type BrandIconType = 'location' | 'phone' | 'email';

const BRAND_ICONS: Record<
  BrandIconType,
  { Icon: typeof MdLocationOn; className: string }
> = {
  location: { Icon: MdLocationOn, className: 'contact-page__brand-icon contact-page__brand-icon--location' },
  phone: { Icon: FaPhoneAlt, className: 'contact-page__brand-icon contact-page__brand-icon--phone' },
  email: { Icon: FaEnvelope, className: 'contact-page__brand-icon contact-page__brand-icon--email' },
};

function ContactBrandIcon({ type }: { type: BrandIconType }) {
  const { Icon, className } = BRAND_ICONS[type];
  return (
    <span className={className} aria-hidden="true">
      <Icon className="h-7 w-7" />
    </span>
  );
}

const CONTACT_CARDS: {
  iconType: BrandIconType;
  title: string;
  content: string;
  href?: string;
  external?: boolean;
  isEmail?: boolean;
}[] = [
  {
    iconType: 'location',
    title: 'Our main office',
    content: OFFICE,
    href: MAP_LINK,
    external: true,
  },
  {
    iconType: 'phone',
    title: 'Phone',
    content: PHONE,
    href: `tel:${PHONE_TEL}`,
    external: false,
  },
  {
    iconType: 'email',
    title: 'Email',
    content: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    isEmail: true,
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  need: string;
  description: string;
  budget: string;
  consent: boolean;
};

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  need: '',
  description: '',
  budget: '',
  consent: false,
};

function FlowConnector() {
  return (
    <svg
      className="contact-page__flow-connector"
      viewBox="0 0 120 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 32 C40 6, 80 6, 116 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 7"
        strokeLinecap="round"
        markerEnd="url(#contact-flow-arrow)"
      />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);

  useEffect(() => {
    document.title = 'Contact Us — NSS';
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page hero-bg">
      {/* Hero */}
      <section className="contact-page__hero px-6 pb-6 pt-36 sm:pb-8 sm:pt-40">
        <div className="mx-auto w-full max-w-[900px] text-center">
          <h1
            className="a1 w-full"
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2.35rem, 5.6vw, 3.85rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: '#1b1d1e',
            }}
          >
            <ScrollTextReveal
              tag="span"
              align="center"
              animate="words"
              textColor="#1b1d1e"
              letterInterval={CONTACT_LETTER_INTERVAL}
              startDelay={0}
              wordGap="0.18em"
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '100%',
                textAlign: 'center',
              }}
              words={[...CONTACT_TITLE_WORDS]}
            />
          </h1>
          <p className="contact-page__lede a2 mx-auto mt-5 max-w-[42rem]">
            A 30-minute call. An honest assessment. A fixed quote if we&apos;re the right fit — a
            straight answer if we&apos;re not. Replies within 24 business hours.
          </p>
        </div>
      </section>

      {/* Cards + gradient form section */}
      <section className="contact-page__body relative">
        <div className="contact-page__cards px-4 sm:px-6">
          <div className="contact-page__cards-grid sr sr-d2">
            {CONTACT_CARDS.map((card) => {
              const { iconType, title, content, href, external } = card;
              const isEmail = Boolean(card.isEmail);
              const inner = (
                <>
                  <ContactBrandIcon type={iconType} />
                  <h2 className="contact-page__card-title">{title}</h2>
                  {isEmail && href ? (
                    <a href={href} className="contact-page__card-email">
                      {content}
                    </a>
                  ) : (
                    <p className="contact-page__card-text">{content}</p>
                  )}
                </>
              );

              if (href) {
                return (
                  <a
                    key={title}
                    href={href}
                    className="contact-page__card"
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <article key={title} className="contact-page__card">
                  {inner}
                </article>
              );
            })}
          </div>
        </div>

        <div className="contact-page__gradient">
          <div className="contact-page__gradient-inner mx-auto max-w-[1180px] px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              {/* Form */}
              <div className="contact-page__form-wrap sr sr-d3">
                {submitted ? (
                  <div className="contact-page__success">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                      <Check className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Got it.</h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                      A real person reads this — expect a reply within 24 business hours. If
                      it&apos;s urgent, call{' '}
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                      >
                        {PHONE}
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-page__form">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="contact-page__field sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-6">
                        <div>
                          <label htmlFor="contact-name" className="contact-page__field-label">
                            Name <span className="text-white">*</span>
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="contact-page__field-input"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="contact-page__field-label">
                            Work email <span className="text-white">*</span>
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="contact-page__field-input"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div className="contact-page__field">
                        <label htmlFor="contact-phone" className="contact-page__field-label">
                          Phone <span className="text-white/80">(optional)</span>
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="contact-page__field-input"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div className="contact-page__field">
                        <label htmlFor="contact-need" className="contact-page__field-label">
                          What do you need? <span className="text-white">*</span>
                        </label>
                        <select
                          id="contact-need"
                          name="need"
                          required
                          value={formData.need}
                          onChange={handleChange}
                          className="contact-page__field-input contact-page__field-select"
                        >
                          <option value="">Select an option</option>
                          {NEED_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="contact-page__field sm:col-span-2">
                        <label htmlFor="contact-description" className="contact-page__field-label">
                          Tell us about it <span className="text-white">*</span>
                        </label>
                        <textarea
                          id="contact-description"
                          name="description"
                          required
                          rows={4}
                          value={formData.description}
                          onChange={handleChange}
                          className="contact-page__field-input contact-page__field-textarea"
                          placeholder="What's the challenge? What are you trying to achieve?"
                        />
                      </div>

                      <div className="contact-page__field sm:col-span-2">
                        <label htmlFor="contact-budget" className="contact-page__field-label">
                          Budget range <span className="text-white/80">(optional)</span>
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="contact-page__field-input contact-page__field-select"
                        >
                          <option value="">Select a range</option>
                          {BUDGET_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <label className="contact-page__consent mt-6 flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        checked={formData.consent}
                        onChange={handleChange}
                        className="contact-page__checkbox mt-0.5"
                      />
                      <span className="contact-page__consent-text">
                        I consent to NSS storing my information to respond to my inquiry.{' '}
                        <span className="text-white">*</span>
                      </span>
                    </label>

                    <button type="submit" className="contact-page__submit mt-8">
                      Send message
                    </button>
                  </form>
                )}
              </div>

              {/* Reach us / get in touch */}
              <aside className="contact-page__aside sr sr-d4 flex flex-col">
                <h2 className="contact-page__aside-title">Reach us directly</h2>
                <p className="contact-page__aside-lead">
                  A 30-minute call. An honest assessment. A fixed quote if we&apos;re the right fit
                  — a straight answer if we&apos;re not.
                </p>
                <p className="contact-page__aside-text">
                  Replies within 24 business hours. Visit our Indore office or drop us a line —
                  we&apos;d rather understand your problem than send a brochure.
                </p>

                <div className="contact-page__map mt-8 overflow-hidden rounded-2xl border border-white/25 shadow-lg">
                  <iframe
                    title="NSS office location on Google Maps"
                    src={MAP_EMBED}
                    className="h-[220px] w-full border-0 sm:h-[250px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-page__map-link mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-white/90"
                >
                  Open in Google Maps
                </a>

                <div className="mt-auto pt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Follow us
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          className={`contact-page__social ${link.className}`}
                          aria-label={link.label}
                          {...('external' in link && link.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* What happens after */}
      <section className="contact-page__process px-6 py-16 sm:py-20" aria-labelledby="contact-process-heading">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="contact-page__process-header sr">
            <h2
              id="contact-process-heading"
              className="contact-page__process-title"
            >
              What happens after you write
            </h2>
          </div>

          <svg className="contact-page__flow-defs" aria-hidden="true">
            <defs>
              <marker
                id="contact-flow-arrow"
                markerWidth="8"
                markerHeight="8"
                refX="6.5"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 Z" fill="#cbd5e1" />
              </marker>
            </defs>
          </svg>

          <div className="contact-page__flow-track">
            {AFTER_STEPS.flatMap((item, index) => {
              const Icon = item.icon;
              const step = (
                <article
                  key={item.num}
                  className={`contact-page__flow-step sr sr-d${index + 1}`}
                >
                  <div className="contact-page__flow-icon" aria-hidden="true">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="contact-page__flow-title">{item.title}</h3>
                  <p className="contact-page__flow-text">{item.text}</p>
                </article>
              );

              if (index === 0) return [step];
              return [<FlowConnector key={`flow-connector-${index}`} />, step];
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
