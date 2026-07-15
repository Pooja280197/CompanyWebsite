// ShowTimeBro.tsx
import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Calendar,
  Ticket,
  QrCode,
  CreditCard,
  Megaphone,
  BarChart3,
  LayoutDashboard,
  Smartphone,
  Music2,
  Medal,
  Flame,
  Presentation,
  Lightbulb,
  Sparkles,
  Palette,
  Clapperboard,
  Briefcase,
  GalleryHorizontalEnd,
  HeartHandshake,
  CheckCircle,
  PlayCircle,
  TrendingUp,
  Cloud,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import { CleanPlanHeroBackground } from './CleanPlanHeroBackground';
import { ProductHeroLaptop } from './ProductHeroLaptop';
import { ProductProblemSection } from './ProductProblemSection';
import { ProductLivePreviewSection } from './ProductLivePreviewSection';

const HERO_LETTER_INTERVAL = 78;

const SHOWTIME_HERO_LINES = [
  {
    words: [{ text: 'Manage' }, { text: 'events,' }, { text: 'sell' }, { text: 'tickets,' }],
    letterCount: 26,
  },
  {
    words: [{ text: 'and' }, { text: 'grow' }, { text: 'your' }, { text: 'audience' }],
    letterCount: 20,
  },
  {
    words: [{ text: 'from' }, { text: 'one' }, { text: 'platform' }],
    letterCount: 16,
    gradient: true,
  },
].map((line, i, arr) => ({
  ...line,
  startDelay: arr.slice(0, i).reduce((sum, l) => sum + l.letterCount, 0) * HERO_LETTER_INTERVAL,
}));

const FEATURES = [
  {
    icon: Calendar,
    title: 'Event Creation & Management',
    desc: 'Create single-day or multi-day events with complete details, venues, schedules, banners, artists, organizers, and categories.',
    color: '#ea580c',
  },
  {
    icon: Ticket,
    title: 'Online Ticket Sales',
    desc: 'Sell tickets through your branded event page with multiple categories, pricing, discounts, promo codes, and secure online payments.',
    color: '#2563eb',
  },
  {
    icon: QrCode,
    title: 'QR Code Ticketing & Check-in',
    desc: 'Every booking generates a secure QR code for fast, paperless entry and real-time attendee verification.',
    color: '#059669',
  },
  {
    icon: CreditCard,
    title: 'Booking & Payment Management',
    desc: 'Track bookings, payment status, refunds, cancellations, and customer information from one centralized dashboard.',
    color: '#7c3aed',
  },
  {
    icon: Megaphone,
    title: 'Promotions & Marketing',
    desc: 'Boost sales with featured events, promotional banners, coupon campaigns, social sharing, and email notifications.',
    color: '#d97706',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    desc: 'Monitor ticket sales, attendance, revenue, booking trends, and event performance through live dashboards and reports.',
    color: '#0891b2',
  },
  {
    icon: LayoutDashboard,
    title: 'Organizer Dashboard',
    desc: 'Manage multiple events, venues, ticket inventories, attendees, and support requests from a single account.',
    color: '#dc2626',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Experience',
    desc: 'Customers browse and buy on any device; organizers manage operations from anywhere.',
    color: '#4f46e5',
  },
];

const EVENT_TYPES = [
  { icon: Music2, label: 'Concerts & Live Music' },
  { icon: Medal, label: 'Sports Tournaments' },
  { icon: Flame, label: 'MMA & Boxing Events' },
  { icon: Presentation, label: 'Conferences & Seminars' },
  { icon: Lightbulb, label: 'Workshops & Training' },
  { icon: Sparkles, label: 'College Festivals' },
  { icon: Palette, label: 'Cultural Events' },
  { icon: Clapperboard, label: 'Theatre & Comedy Shows' },
  { icon: Briefcase, label: 'Corporate Events' },
  { icon: GalleryHorizontalEnd, label: 'Exhibitions & Trade Shows' },
  { icon: HeartHandshake, label: 'Community Events' },
];

const EVENT_TYPE_ROWS = [
  EVENT_TYPES.slice(0, 4),
  EVENT_TYPES.slice(4, 7),
  EVENT_TYPES.slice(7, 11),
];

const PROVEN_FLOW = [
  { icon: Ticket, label: 'Sell tickets', detail: 'Categories, promos & secure checkout' },
  { icon: QrCode, label: 'Check attendees in', detail: 'QR validation at every gate' },
  { icon: CreditCard, label: 'Track payments', detail: 'Bookings, refunds & status in sync' },
  { icon: BarChart3, label: 'Read the numbers', detail: 'Live sales and attendance insights' },
];

const PROVEN_HIGHLIGHTS = [
  'One cloud SaaS stack',
  'Multi-event organizer access',
  'Mobile-ready for crowds',
  'Built to scale with you',
];

const WHY_CHOOSE = [
  {
    icon: LayoutDashboard,
    title: 'Complete event management',
    subtitle: 'Run every stage from one connected platform',
  },
  {
    icon: Ticket,
    title: 'Fast online ticket booking',
    subtitle: 'Sell tickets instantly with a branded event page',
  },
  {
    icon: CreditCard,
    title: 'Secure payment gateway',
    subtitle: 'Accept payments with reliable checkout flows',
  },
  {
    icon: QrCode,
    title: 'QR ticket validation',
    subtitle: 'Paperless entry with real-time check-in scans',
  },
  {
    icon: Layers,
    title: 'Multi-category pricing',
    subtitle: 'VIP, early bird, general — priced your way',
  },
  {
    icon: Megaphone,
    title: 'Coupons & campaigns',
    subtitle: 'Boost sales with promos and featured placement',
  },
  {
    icon: BarChart3,
    title: 'Real-time sales dashboard',
    subtitle: 'Watch bookings, revenue, and trends live',
  },
  {
    icon: Calendar,
    title: 'Multi-event support',
    subtitle: 'Manage many events from a single organizer account',
  },
  {
    icon: Cloud,
    title: 'Cloud-based SaaS',
    subtitle: 'Access everything online — no installs needed',
  },
  {
    icon: Smartphone,
    title: 'Mobile-friendly experience',
    subtitle: 'Smooth for attendees and organizers on any device',
  },
  {
    icon: TrendingUp,
    title: 'Built to scale',
    subtitle: 'Works for workshops and large national events',
  },
  {
    icon: ShieldCheck,
    title: 'Secure infrastructure',
    subtitle: 'Reliable systems you can trust on event day',
  },
];

const PROBLEM_PAINS = [
  'Overbooked or unsold seats',
  'Manual check-ins',
  'Payment tracking issues',
  'Last-minute schedule confusion',
  'Poor attendee experience',
  'Limited visibility into sales performance',
];

const SCREENS = [
  {
    title: 'Dashboard',
    desc: 'Live sales and attendance at a glance',
    color: '#ea580c',
    icon: LayoutDashboard,
  },
  {
    title: 'Tickets',
    desc: 'Categories, pricing, and inventory',
    color: '#2563eb',
    icon: Ticket,
  },
  {
    title: 'Check-in',
    desc: 'QR scans in real time',
    color: '#059669',
    icon: QrCode,
  },
  {
    title: 'Analytics',
    desc: 'Revenue and booking trends',
    color: '#7c3aed',
    icon: BarChart3,
  },
];

const FAQS = [
  {
    q: 'What types of events can ShowTimeBro manage?',
    a: 'ShowTimeBro supports concerts, sports tournaments, conferences, exhibitions, workshops, cultural festivals, corporate events, comedy shows, theatre performances, and many other event formats.',
  },
  {
    q: 'Can I sell tickets online?',
    a: 'Yes. ShowTimeBro allows organizers to create multiple ticket categories, accept secure online payments, generate digital tickets, and manage bookings in real time.',
  },
  {
    q: 'Does ShowTimeBro support QR code ticket validation?',
    a: 'Yes. Every ticket includes a secure QR code that can be scanned during entry, enabling fast and reliable attendee check-in.',
  },
  {
    q: 'Can I manage multiple events from one account?',
    a: 'Absolutely. Organizers can create and manage multiple events, monitor ticket sales, manage attendees, and access reports from a single dashboard.',
  },
  {
    q: 'Does ShowTimeBro work on mobile devices?',
    a: 'Yes. Attendees can browse events, purchase tickets, and access digital tickets from their smartphones, while organizers can monitor their events from any web browser.',
  },
  {
    q: 'Can I create different ticket categories?',
    a: 'Yes. You can create multiple ticket types such as Early Bird, VIP, General Admission, Premium, Fan Pit, Gold, Silver, and more with independent pricing and availability.',
  },
  {
    q: 'Can ShowTimeBro be customized for our organization?',
    a: "Yes. Since ShowTimeBro is developed by NSS, additional features, integrations, workflows, and branding can be customized to meet your organization's specific requirements.",
  },
  {
    q: 'How much does ShowTimeBro cost?',
    a: 'Pricing depends on your event volume, feature requirements, and customization needs. Book a demo to receive a tailored quote based on your business.',
  },
];

function PhoneScreenContent() {
  return (
    <div className="cleanplan-laptop__panel">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-orange-500 flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">ST</span>
          </div>
          <span className="text-[10px] font-bold text-gray-700">ShowTimeBro</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[8px] text-gray-400">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="p-2 rounded-lg bg-orange-50 border border-orange-100">
          <div className="text-[11px] font-bold text-orange-600">1,284</div>
          <div className="text-[7px] text-gray-500">Tickets sold</div>
        </div>
        <div className="p-2 rounded-lg bg-blue-50 border border-blue-100">
          <div className="text-[11px] font-bold text-blue-600">₹4.2L</div>
          <div className="text-[7px] text-gray-500">Revenue</div>
        </div>
      </div>

      <div className="space-y-1.5 mb-3">
        <div className="text-[8px] font-semibold text-gray-600">Tonight’s events</div>
        {[
          { name: 'Indie Night Live', seats: '82% sold', tone: 'bg-emerald-100 text-emerald-700' },
          { name: 'MMA Fight Night', seats: '64% sold', tone: 'bg-amber-100 text-amber-700' },
        ].map((e) => (
          <div key={e.name} className="flex items-center justify-between p-1.5 rounded-md bg-white border border-gray-100">
            <span className="text-[8px] font-medium text-gray-700">{e.name}</span>
            <span className={`text-[7px] font-semibold px-1.5 py-0.5 rounded-full ${e.tone}`}>{e.seats}</span>
          </div>
        ))}
      </div>

      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
        <div className="text-[8px] font-semibold text-gray-600 mb-1">Check-ins</div>
        <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-orange-500 to-blue-500" />
        </div>
        <div className="mt-1 text-[7px] text-gray-500">924 / 1,280 scanned</div>
      </div>
    </div>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const inner = innerRef.current;
    const panel = panelRef.current;
    if (!inner || !panel) return;

    const measure = () => {
      const prev = panel.style.maxHeight;
      panel.style.maxHeight = 'none';
      setHeight(inner.scrollHeight);
      panel.style.maxHeight = prev;
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(inner);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [answer]);

  return (
    <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
      <button type="button" onClick={onToggle} className="faq-trigger" aria-expanded={isOpen}>
        <span className="faq-question">{question}</span>
        <span className={`faq-chevron${isOpen ? ' faq-chevron--open' : ''}`}>
          <ChevronDown size={18} strokeWidth={2} />
        </span>
      </button>
      <div
        ref={panelRef}
        className="faq-panel"
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
        aria-hidden={!isOpen}
      >
        <div ref={innerRef} className="faq-panel__inner">
          <p className="faq-answer">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function ShowTimeBro() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeScreen, setActiveScreen] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    document.title = 'ShowTimeBro — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'ShowTimeBro is an all-in-one event management and ticketing platform — create events, sell tickets, manage attendees, and track sales in real time.',
      );
    }
    window.scrollTo(0, 0);

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'showtimebro-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('showtimebro-faq-schema')?.remove();
    };
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveScreen((prev) => (prev + 1) % SCREENS.length);
      }, 3000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  return (
    <article className="min-h-screen bg-white">
      <header className="webdev-hero cleanplan-hero showtimebro-hero relative overflow-hidden px-6">
        <CleanPlanHeroBackground />

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] items-center py-4 sm:py-6">
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <h1
                className="a1 w-full"
                style={{
                  fontFamily: 'Inter,sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(1.85rem, 4vw, 3.25rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: '#0f172a',
                }}
              >
                {SHOWTIME_HERO_LINES.map((line, i) => (
                  <span
                    key={line.words.map((w) => w.text).join('-')}
                    className="block w-fit max-w-full"
                    style={{ marginBottom: i < SHOWTIME_HERO_LINES.length - 1 ? '0.08em' : undefined }}
                  >
                    <ScrollTextReveal
                      tag="span"
                      align="left"
                      animate="words"
                      textColor="#0f172a"
                      letterInterval={HERO_LETTER_INTERVAL}
                      startDelay={line.startDelay}
                      gradientText={line.gradient}
                      waveGradientStops={line.gradient ? ['#ea580c', '#2563eb', '#ea580c'] : undefined}
                      style={{
                        display: 'block',
                        width: 'fit-content',
                        maxWidth: '100%',
                      }}
                      words={[...line.words]}
                    />
                  </span>
                ))}
              </h1>

              <p className="a2 mt-4 max-w-lg text-lg leading-relaxed text-slate-600">
                ShowTimeBro is an all-in-one event management and ticketing platform that helps organizers
                create events, sell tickets online, manage attendees, and track sales in real time. Whether
                you&apos;re hosting concerts, sports events, conferences, exhibitions, or workshops, everything
                runs from one powerful dashboard.
              </p>

              <div className="a3 mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:brightness-105 hover:shadow-2xl hover:shadow-blue-500/35 transition-all duration-300"
                >
                  Book a Demo
                  <ArrowRight size={18} />
                </Link>
                {/* <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 font-medium text-slate-800 shadow-md shadow-slate-900/10 transition-all duration-300 hover:bg-slate-50 hover:shadow-lg"
                >
                  <PlayCircle size={18} />
                  Watch Demo
                </button> */}
              </div>
            </div>

            <ProductHeroLaptop
              contentKey="showtimebro"
              badge={(
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50">
                    <TrendingUp size={15} className="text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Real-time</div>
                    <div className="text-[9px] text-gray-500">Sales tracking</div>
                  </div>
                </div>
              )}
              glowAClassName="bg-orange-500/15"
              glowBClassName="bg-blue-500/15"
            >
              <PhoneScreenContent />
            </ProductHeroLaptop>
          </div>
        </div>
      </header>

      <ProductProblemSection
        accent="blue"
        heading="The event management problem"
        paragraphs={[
          'Every successful event depends on flawless coordination. But many organizers still juggle spreadsheets, WhatsApp groups, manual ticketing, payment reconciliation, and attendee lists across multiple tools.',
          'ShowTimeBro replaces disconnected processes with a single SaaS platform where event creation, ticket sales, attendee management, payments, and reporting work together seamlessly.',
        ]}
        solution={`That usually leads to: ${PROBLEM_PAINS.join(' · ')}.`}
        imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85&auto=format&fit=crop"
        imageAlt="Crowded live event with stage lights and audience"
        imageCaption="When tools are scattered, the attendee experience pays for it."
      />

      {/* Problem pain chips */}
      <section className="-mt-6 px-6 pb-10 sm:-mt-10 sm:pb-14">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap justify-center gap-2.5">
          {PROBLEM_PAINS.map((pain) => (
            <span
              key={pain}
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
            >
              {pain}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-3 py-1">
              <CheckCircle size={12} className="text-orange-600" />
              <span className="text-xs font-bold tracking-wider text-orange-700">FEATURES</span>
            </div>
            <ScrollTextReveal
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.15em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                maxWidth: '100%',
              }}
              words={[
                { text: 'What' },
                { text: 'ShowTimeBro' },
                { text: 'handles' },
              ]}
            />
            <p className="mx-auto mt-4 max-w-[36rem] text-base leading-relaxed text-[#555]">
              Event creation, ticket sales, check-in, payments, promotions, and reporting — in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className={`stb-wave-card sr-from-bottom sr-d${Math.min(i + 1, 10)}`}
                  style={{ '--stb-accent': feature.color } as CSSProperties}
                >
                  <div className="stb-wave-card__visual" aria-hidden="true">
                    <span className="stb-wave-card__icon">
                      <Icon size={22} strokeWidth={1.85} />
                    </span>
                  </div>
                  <div className="stb-wave-card__sheet">
                    <svg
                      className="stb-wave-card__wave"
                      viewBox="0 0 320 52"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path d="M0 52V26c28-18 58-26 96-22 44 5 70 26 112 30 46 4 78-8 112-22v40H0Z" />
                    </svg>
                    <div className="stb-wave-card__body">
                      <h3 className="stb-wave-card__title">{feature.title}</h3>
                      <div className="stb-wave-card__desc-wrap">
                        <p className="stb-wave-card__desc">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mb-12 text-center">
            <ScrollTextReveal
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.15em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                maxWidth: '100%',
              }}
              words={[
                { text: 'Built' },
                { text: 'for' },
                { text: 'every' },
                { text: 'type' },
                { text: 'of' },
                { text: 'event' },
              ]}
            />
            <p className="mx-auto mt-4 max-w-[32rem] text-base text-slate-500">
              ShowTimeBro supports events of every size.
            </p>
          </div>

          <div className="stb-event-rows">
            {EVENT_TYPE_ROWS.map((row, rowIndex) => (
              <div
                key={`event-row-${rowIndex}`}
                className={`stb-event-row stb-event-row--${row.length}`}
              >
                {row.map((item, i) => {
                  const Icon = item.icon;
                  const delay = Math.min(rowIndex * 4 + i + 1, 10);
                  return (
                    <article
                      key={item.label}
                      className={`stb-event-card sr-from-bottom sr-d${delay}`}
                    >
                      <span className="stb-event-card__icon">
                        <Icon size={18} strokeWidth={2} />
                      </span>
                      <h3 className="stb-event-card__label">{item.label}</h3>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven */}
      <section className="stb-proven relative overflow-hidden bg-white px-6 py-24">
        <div className="stb-proven__wash" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <ScrollTextReveal
              tag="h2"
              align="left"
              className="w-full"
              wordGap="0.15em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem, 3.2vw, 2.75rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                maxWidth: '100%',
              }}
              words={[
                { text: 'Proven,' },
                { text: 'not' },
                { text: 'promised' },
              ]}
            />

            <div className="stb-proven__copy mt-6 space-y-4">
              <p>
                ShowTimeBro is built as a scalable SaaS platform using modern cloud architecture, allowing organizers to
                manage events of every size without relying on multiple systems.

              </p>
              <p>
                From ticket booking and secure payments to QR-based entry, attendee management, promotions, and realtime reporting, ShowTimeBro brings every stage of event management together into one reliable platform.

              </p>
              <p>
                Whether you're organizing a local workshop or a large national sporting event, ShowTimeBro helps you
                deliver a smoother experience for both organizers and attendees.

              </p>
            </div>

            {/* <ul className="stb-proven__chips mt-8">
              {PROVEN_HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <Check size={14} strokeWidth={2.4} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul> */}
          </div>

          <div className="stb-proven__visual" aria-label="How ShowTimeBro works end to end">
            <div className="stb-proven__frame">
              <div className="stb-proven__frame-top">
                <div>
                  <p className="stb-proven__eyebrow">End-to-end flow</p>
                  <p className="stb-proven__frame-title">One platform, every stage</p>
                </div>
                <span className="stb-proven__live">
                  <span className="stb-proven__live-dot" />
                  Live
                </span>
              </div>

              <ol className="stb-proven__flow">
                {PROVEN_FLOW.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.label} className="stb-proven__step">
                      <span className="stb-proven__step-index">{String(index + 1).padStart(2, '0')}</span>
                      <span className="stb-proven__step-icon">
                        <Icon size={18} strokeWidth={1.9} />
                      </span>
                      <div className="stb-proven__step-text">
                        <span className="stb-proven__step-label">{step.label}</span>
                        <span className="stb-proven__step-detail">{step.detail}</span>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <div className="stb-proven__stats">
                <div>
                  <strong>1</strong>
                  <span>unified stack</span>
                </div>
                <div>
                  <strong>∞</strong>
                  <span>events per org</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>dashboard access</span>
                </div>
              </div>
            </div>

            <div className="stb-proven__float" aria-hidden="true">
              <TrendingUp size={14} />
              <span>Sales updates in real time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="stb-why bg-slate-50 px-6 py-24">
        <div className="stb-why__layout mx-auto w-full max-w-[1200px]">
          <div className="stb-why__intro">
            <ScrollTextReveal
              tag="h2"
              align="left"
              className="w-full"
              wordGap="0.15em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem, 3.2vw, 2.75rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                maxWidth: '100%',
              }}
              words={[
                { text: 'Why' },
                { text: 'organizers' },
                { text: 'choose' },
                { text: 'ShowTimeBro' },
              ]}
            />
            <p className="stb-why__lede">
              Everything you need to run events confidently — without stitching five tools together.
            </p>
          </div>

          <ul className="stb-why__zigzag">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = item.icon;
              const side = i % 2 === 0 ? 'left' : 'right';
              return (
                <li
                  key={item.title}
                  className={`stb-why__item stb-why__item--${side} sr-from-bottom sr-d${Math.min(i + 1, 10)}`}
                >
                  <div className="stb-why__media" aria-hidden="true">
                    <span className="stb-why__wave stb-why__wave--a" />
                    <span className="stb-why__wave stb-why__wave--b" />
                    <span className="stb-why__wave stb-why__wave--c" />
                    <span className="stb-why__icon">
                      <Icon size={17} strokeWidth={1.9} />
                    </span>
                  </div>
                  <div className="stb-why__body">
                    <h3 className="stb-why__title">{item.title}</h3>
                    <p className="stb-why__subtitle">{item.subtitle}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ProductLivePreviewSection
        heading="See ShowTimeBro in action"
        screens={SCREENS}
        activeScreen={activeScreen}
        onScreenChange={setActiveScreen}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={toggleAutoPlay}
      >
        <div className="mb-4 flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500">
              <span className="text-[9px] font-bold text-white">ST</span>
            </div>
            <span className="text-sm font-bold text-gray-700">ShowTimeBro</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[10px] text-gray-500">Live</span>
          </div>
        </div>

        {activeScreen === 0 && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Tickets sold', value: '1,284', color: 'text-orange-600' },
                { label: 'Revenue', value: '₹4.2L', color: 'text-blue-600' },
                { label: 'Checked in', value: '924', color: 'text-emerald-600' },
                { label: 'Active events', value: '6', color: 'text-purple-600' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                  <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-[10px] text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeScreen === 1 && (
          <div className="space-y-2">
            {[
              { tier: 'VIP', price: '₹4,999', left: '42 left' },
              { tier: 'Gold', price: '₹2,499', left: '180 left' },
              { tier: 'General', price: '₹999', left: '620 left' },
              { tier: 'Early Bird', price: '₹699', left: 'Sold out' },
            ].map((t) => (
              <div key={t.tier} className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm">
                <div>
                  <div className="text-xs font-medium text-gray-700">{t.tier}</div>
                  <div className="text-[10px] text-gray-400">{t.price}</div>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                  {t.left}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeScreen === 2 && (
          <div className="space-y-2">
            {[
              { gate: 'Gate A', scans: '312', status: 'Active' },
              { gate: 'Gate B', scans: '287', status: 'Active' },
              { gate: 'VIP Entry', scans: '96', status: 'Busy' },
              { gate: 'Staff', scans: '41', status: 'Active' },
            ].map((g) => (
              <div key={g.gate} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm">
                <div className={`h-2 w-2 rounded-full ${g.status === 'Busy' ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-700">{g.gate}</div>
                  <div className="text-[10px] text-gray-400">{g.scans} scans</div>
                </div>
                <span className="text-[10px] font-medium text-gray-500">{g.status}</span>
              </div>
            ))}
          </div>
        )}

        {activeScreen === 3 && (
          <div className="space-y-3">
            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-700">Weekly sales</span>
                <span className="text-[10px] text-emerald-600">↑ 18%</span>
              </div>
              <div className="flex h-16 items-end gap-1.5">
                {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-orange-500 to-blue-500"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <div className="text-sm font-bold text-gray-800">72%</div>
                <div className="text-[10px] text-gray-400">Avg. occupancy</div>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <div className="text-sm font-bold text-gray-800">3.4x</div>
                <div className="text-[10px] text-gray-400">Promo lift</div>
              </div>
            </div>
          </div>
        )}
      </ProductLivePreviewSection>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-blue-600 to-orange-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-400/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[900px] text-center">
          <div className="sr">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Ready to run events from one platform?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-orange-100">
              See ShowTimeBro in action — event creation, ticket sales, QR check-in, and real-time reporting
              in one walkthrough.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Book a Demo
              <ArrowRight size={18} />
            </Link>
            <p className="mt-4 text-sm text-orange-200">Live demo. No commitment. Just clarity.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24" aria-labelledby="faq-heading">
        <div className="mx-auto w-full max-w-[860px]">
          <div className="mb-12 text-center">
            <ScrollTextReveal
              id="faq-heading"
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.15em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                maxWidth: '100%',
              }}
              words={[
                { text: 'Frequently' },
                { text: 'asked' },
                { text: 'questions' },
              ]}
            />
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className={`sr-from-bottom sr-d${Math.min(i + 1, 10)}`}>
                <FaqItem
                  question={faq.q}
                  answer={faq.a}
                  isOpen={faqOpen === i}
                  onToggle={() => setFaqOpen((prev) => (prev === i ? null : i))}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-100 bg-white px-6 py-6">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Online ticketing
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              QR check-in
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Real-time analytics
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Multi-event dashboard
            </span>
          </div>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-orange-400 via-orange-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:brightness-105 hover:shadow-xl"
          >
            Book a Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
