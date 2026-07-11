// CleanPlan.tsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Calendar,
  Users,
  ClipboardList,
  LayoutDashboard,
  FileCheck,
  Smartphone,
  TrendingUp,
  Star,
  CheckCircle,
  Clock as ClockIcon,
  UserCheck,
  PlayCircle,
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import { CleanPlanHeroBackground } from './CleanPlanHeroBackground';
import { ProductHeroLaptop } from './ProductHeroLaptop';
import { ProductProblemSection } from './ProductProblemSection';
import { ProductLivePreviewSection } from './ProductLivePreviewSection';

const HERO_LETTER_INTERVAL = 78;

const CLEANPLAN_HERO_LINES = [
  {
    words: [{ text: 'Run' }, { text: 'your' }, { text: 'cleaning' }, { text: 'business' }],
    letterCount: 23,
  },
  {
    words: [{ text: 'from' }, { text: 'your' }, { text: 'pocket' }],
    letterCount: 14,
    gradient: true,
  },
].map((line, i, arr) => ({
  ...line,
  startDelay: arr.slice(0, i).reduce((sum, l) => sum + l.letterCount, 0) * HERO_LETTER_INTERVAL,
}));

const FEATURES = [
  {
    icon: Calendar,
    title: 'Scheduling & Dispatch',
    desc: 'Recurring and one-off jobs assigned to crews with full visibility. Know who\'s where, when.',
    color: '#2563eb',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    icon: Users,
    title: 'Workforce Management',
    desc: 'Who\'s on site, who\'s available, who\'s overloaded — controlled from one dashboard.',
    color: '#7c3aed',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    icon: ClipboardList,
    title: 'Task Digitization',
    desc: 'Checklists per job, completion confirmed from the field instead of assumed.',
    color: '#059669',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    icon: LayoutDashboard,
    title: 'Daily Operations View',
    desc: 'The whole business on one screen: today\'s jobs, exceptions, and what needs a decision.',
    color: '#d97706',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    icon: FileCheck,
    title: 'Client-Ready Records',
    desc: 'Service history that settles disputes and supports invoicing. Professional, accurate, ready.',
    color: '#dc2626',
    bg: 'bg-red-50',
    border: 'border-red-200',
  },
];

const SCREENS = [
  {
    title: 'Dashboard',
    desc: 'See your entire business at a glance',
    color: '#2563eb',
    icon: LayoutDashboard,
  },
  {
    title: 'Scheduling',
    desc: 'Assign and track jobs in real-time',
    color: '#7c3aed',
    icon: Calendar,
  },
  {
    title: 'Field View',
    desc: 'Crews confirm completion from mobile',
    color: '#059669',
    icon: Smartphone,
  },
  {
    title: 'Reports',
    desc: 'Client-ready service history',
    color: '#d97706',
    icon: FileCheck,
  },
];

const TESTIMONIAL = {
  quote: "NSS transformed CleanPlan into a seamless SaaS platform, enhancing efficiency and automation… making facility management smarter, faster, and more reliable.",
  author: "One Direction Australia",
  role: "Cleaning Industry Partner",
  logo: "🏢",
};

const FAQS = [
  {
    q: 'Is CleanPlan for small cleaning companies or large ones?',
    a: 'Both — the pain scales with crew count. Small operators replace the notebook; larger companies replace the coordination chaos across sites and supervisors.',
  },
  {
    q: 'Does it work on phones in the field?',
    a: 'Yes — field crews confirm tasks and completion from mobile; managers see it live. The office view runs in any browser.',
  },
  {
    q: 'Can it match our specific service checklists?',
    a: 'Checklists are configurable per job type and per client — your standards, digitized as-is.',
  },
  {
    q: 'What does CleanPlan cost?',
    a: 'Subscription pricing by team size. Book a demo and you\'ll leave with a clear quote — no seat-count surprises later.',
  },
  {
    q: 'Can it integrate with our invoicing or accounting tools?',
    a: 'Service records export cleanly, and direct integrations can be scoped — the engineering team behind CleanPlan is the same one that builds custom integrations for a living.',
  },
];

function PhoneScreenContent() {
  return (
    <div className="cleanplan-laptop__panel">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-blue-500 flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">CP</span>
          </div>
          <span className="text-[10px] font-bold text-gray-700">CleanPlan</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[7px] text-gray-500">Live</span>
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-blue-700">Today&apos;s Jobs</span>
            <span className="text-[9px] text-blue-600">8 active</span>
          </div>
          <div className="mt-1.5 space-y-1.5">
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white">
              <div>
                <div className="text-[10px] font-medium text-gray-700">Office Clean</div>
                <div className="text-[8px] text-gray-400">Crew A • 9:00 AM</div>
              </div>
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check size={8} className="text-emerald-600" />
              </div>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white">
              <div>
                <div className="text-[10px] font-medium text-gray-700">Retail Store</div>
                <div className="text-[8px] text-gray-400">Crew B • 10:30 AM</div>
              </div>
              <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center">
                <ClockIcon size={8} className="text-amber-600" />
              </div>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white">
              <div>
                <div className="text-[10px] font-medium text-gray-700">School</div>
                <div className="text-[8px] text-gray-400">Crew C • 1:00 PM</div>
              </div>
              <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                <UserCheck size={8} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-100">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-purple-700">Crew Status</span>
            <span className="text-[9px] text-purple-600">4 active</span>
          </div>
          <div className="mt-1.5 flex gap-1.5">
            <div className="flex-1 p-1.5 rounded-md bg-white text-center">
              <div className="text-[9px] font-medium text-gray-700">Crew A</div>
              <div className="text-[8px] text-emerald-600">On Site</div>
            </div>
            <div className="flex-1 p-1.5 rounded-md bg-white text-center">
              <div className="text-[9px] font-medium text-gray-700">Crew B</div>
              <div className="text-[8px] text-blue-600">En Route</div>
            </div>
            <div className="flex-1 p-1.5 rounded-md bg-white text-center">
              <div className="text-[9px] font-medium text-gray-700">Crew C</div>
              <div className="text-[8px] text-amber-600">Break</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-blue-600">12</div>
            <div className="text-[7px] text-gray-400">Completed</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-amber-600">3</div>
            <div className="text-[7px] text-gray-400">In Progress</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-emerald-600">100%</div>
            <div className="text-[7px] text-gray-400">On Time</div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-emerald-700">Checklists</span>
            <span className="text-[9px] text-emerald-600">5/6 done</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[8px] text-gray-600">
              <Check size={8} className="text-emerald-500 shrink-0" />
              Restroom sanitization
            </div>
            <div className="flex items-center gap-1.5 text-[8px] text-gray-600">
              <Check size={8} className="text-emerald-500 shrink-0" />
              Floor mopping complete
            </div>
            <div className="flex items-center gap-1.5 text-[8px] text-gray-600">
              <ClockIcon size={8} className="text-amber-500 shrink-0" />
              Waste disposal pending
            </div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-100">
          <div className="text-[10px] font-semibold text-amber-700 mb-1.5">Alerts</div>
          <div className="space-y-1.5">
            <div className="p-1.5 rounded-md bg-white text-[8px] text-gray-600">
              Crew B running 12 min behind on Retail Store
            </div>
            <div className="p-1.5 rounded-md bg-white text-[8px] text-gray-600">
              New job assigned: Medical Clinic — 4:30 PM
            </div>
          </div>
        </div>
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

export default function CleanPlan() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeScreen, setActiveScreen] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    document.title = 'CleanPlan — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Run your cleaning business from your pocket, not a paper trail. CleanPlan puts scheduling, workforce tracking, and daily operations in one place.',
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
    script.id = 'cleanplan-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('cleanplan-faq-schema')?.remove();
    };
  }, []);

  // Auto-rotate screens
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveScreen((prev) => (prev + 1) % SCREENS.length);
      }, 3000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Hero - Clean, Modern, Full Width */}
      <header className="webdev-hero cleanplan-hero relative overflow-hidden px-6">
        <CleanPlanHeroBackground />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <div className="a1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 mb-6 shadow-sm">
                <Sparkles size={14} className="text-blue-500" />
                <span className="text-xs font-bold text-blue-600 tracking-widest">PRODUCT</span>
                <span className="text-xs text-slate-300">•</span>
                <span className="text-xs font-semibold text-slate-600">CleanPlan</span>
              </div> */}

              <h1
                className="a1 w-full"
                style={{
                  fontFamily: 'Inter,sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.12,
                  color: '#0f172a',
                }}
              >
                {CLEANPLAN_HERO_LINES.map((line, i) => (
                  <span
                    key={line.words.map((w) => w.text).join('-')}
                    className="block w-fit max-w-full"
                    style={{ marginBottom: i < CLEANPLAN_HERO_LINES.length - 1 ? '0.08em' : undefined }}
                  >
                    <ScrollTextReveal
                      tag="span"
                      align="left"
                      animate="words"
                      textColor="#0f172a"
                      letterInterval={HERO_LETTER_INTERVAL}
                      startDelay={line.startDelay}
                      gradientText={line.gradient}
                      waveGradientStops={line.gradient ? ['#2563eb', '#8b5cf6', '#2563eb'] : undefined}
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

              <p className="a2 text-lg text-slate-600 leading-relaxed max-w-lg mt-4">
                CleanPlan puts scheduling, workforce tracking, and daily operations in one place — so you always know which crew is where, what's done, and what's slipping.
              </p>

              <div className="a3 flex flex-wrap gap-4 mt-8">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:brightness-105 hover:shadow-2xl hover:shadow-blue-500/35 transition-all duration-300"
                >
                  Book a Demo
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-slate-300 text-slate-800 font-medium shadow-md shadow-slate-900/10 hover:bg-slate-50 hover:shadow-lg transition-all duration-300">
                  <PlayCircle size={18} />
                  Watch Demo
                </button>
              </div>

              {/* <div className="a4 flex flex-wrap gap-6 mt-8 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-500" />
                  Real-time tracking
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-500" />
                  Mobile + Web
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-500" />
                  Configurable checklists
                </span>
              </div> */}
            </div>

            <ProductHeroLaptop
              contentKey="cleanplan"
              badge={(
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <TrendingUp size={15} className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">40%</div>
                    <div className="text-[9px] text-gray-500">Faster operations</div>
                  </div>
                </div>
              )}
            >
              <PhoneScreenContent />
            </ProductHeroLaptop>
          </div>
        </div>
      </header>

      <ProductProblemSection
        accent="blue"
        heading="The clipboard problem"
        paragraphs={[
          'Cleaning businesses run on coordination: crews across sites, schedules that change by the hour, clients who notice the one missed task.',
          "Paper and phone calls hold it together until they don't — a no-show discovered at 9 a.m., a completed job nobody logged, an invoice built from memory.",
        ]}
        solution="CleanPlan digitizes the whole loop: jobs scheduled, tasks assigned, completion tracked, and the day's operations visible in real time."
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85&auto=format&fit=crop"
        imageAlt="Operations team managing schedules with paper and spreadsheets"
        imageCaption="When coordination lives on paper, the gap shows up on site."
      />

      {/* Features Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <CheckCircle size={12} className="text-blue-500" />
              <span className="text-xs font-bold text-blue-700 tracking-wider">FEATURES</span>
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
                { text: 'Everything' },
                { text: 'you' },
                { text: 'need' },
                { text: 'to' },
                { text: 'run' },
                { text: 'clean' } 
              ]}
            />
            <p className="text-[#555] text-base leading-relaxed mt-4 max-w-[36rem] mx-auto">
              CleanPlan handles the entire workflow — from scheduling to client records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`sr-from-bottom sr-d${i + 1} group rounded-2xl border border-gray-100 border-l-4 bg-white p-6 shadow-lg shadow-slate-200/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-300/80`}
                  style={{
                    borderLeftColor: feature.color,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                  >
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  <div
                    className="mt-4 w-10 h-0.5 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ background: feature.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProductLivePreviewSection
        heading="See CleanPlan in action"
        screens={SCREENS}
        activeScreen={activeScreen}
        onScreenChange={setActiveScreen}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={toggleAutoPlay}
      >
        <div className="flex items-center justify-between mb-4 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">CP</span>
            </div>
            <span className="text-sm font-bold text-gray-700">CleanPlan</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-gray-500">Live</span>
          </div>
        </div>

        {activeScreen === 0 && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="text-lg font-bold text-blue-600">12</div>
                <div className="text-[10px] text-gray-400">Today's Jobs</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="text-lg font-bold text-emerald-600">8</div>
                <div className="text-[10px] text-gray-400">Completed</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="text-lg font-bold text-amber-600">3</div>
                <div className="text-[10px] text-gray-400">In Progress</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="text-lg font-bold text-purple-600">4</div>
                <div className="text-[10px] text-gray-400">Crews Active</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-700">Crew Performance</span>
                <span className="text-[10px] text-emerald-600">↑ 12%</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        )}

        {activeScreen === 1 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700">Today's Schedule</span>
              <span className="text-[10px] text-blue-600">View All</span>
            </div>
            <div className="space-y-2">
              {[
                { time: '9:00 AM', job: 'Office Clean', crew: 'Crew A', status: 'Completed' },
                { time: '10:30 AM', job: 'Retail Store', crew: 'Crew B', status: 'In Progress' },
                { time: '1:00 PM', job: 'School', crew: 'Crew C', status: 'Upcoming' },
                { time: '3:00 PM', job: 'Hospital', crew: 'Crew A', status: 'Upcoming' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-gray-100 shadow-sm">
                  <div>
                    <div className="text-xs font-medium text-gray-700">{item.job}</div>
                    <div className="text-[10px] text-gray-400">{item.time} • {item.crew}</div>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    item.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                    item.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeScreen === 2 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700">Crew Locations</span>
              <span className="text-[10px] text-blue-600">4 active</span>
            </div>
            <div className="space-y-2">
              {[
                { crew: 'Crew A', location: 'Main Office', status: 'On Site', progress: '100%' },
                { crew: 'Crew B', location: 'Retail Store', status: 'En Route', progress: '60%' },
                { crew: 'Crew C', location: 'School', status: 'Break', progress: '0%' },
                { crew: 'Crew D', location: 'Hospital', status: 'On Site', progress: '45%' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-gray-100 shadow-sm">
                  <div className={`w-2 h-2 rounded-full ${
                    item.status === 'On Site' ? 'bg-emerald-400' :
                    item.status === 'En Route' ? 'bg-blue-400' :
                    'bg-amber-400'
                  }`} />
                  <div className="flex-1">
                    <div className="text-xs font-medium text-gray-700">{item.crew}</div>
                    <div className="text-[10px] text-gray-400">{item.location}</div>
                  </div>
                  <div className="text-[10px] font-medium text-gray-500">{item.progress}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeScreen === 3 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700">Service Records</span>
              <span className="text-[10px] text-blue-600">Export</span>
            </div>
            <div className="space-y-2">
              {[
                { client: 'ABC Corp', jobs: '12', rating: '4.9', status: 'Invoiced' },
                { client: 'XYZ Ltd', jobs: '8', rating: '4.8', status: 'Completed' },
                { client: 'CleanCo', jobs: '5', rating: '4.7', status: 'In Progress' },
              ].map((item, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-gray-700">{item.client}</div>
                      <div className="text-[10px] text-gray-400">{item.jobs} jobs • ⭐ {item.rating}</div>
                    </div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      item.status === 'Invoiced' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ProductLivePreviewSection>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-[900px] mx-auto w-full">
          <div className="sr-from-bottom relative p-8 md:p-12 rounded-3xl bg-white shadow-xl border border-gray-100">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl font-serif-italic text-gray-800 leading-relaxed">
                "{TESTIMONIAL.quote}"
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-xl font-bold">
                  {TESTIMONIAL.logo}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{TESTIMONIAL.author}</div>
                  <div className="text-sm text-gray-500">{TESTIMONIAL.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-emerald-600 to-blue-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto w-full text-center">
          <div className="sr">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to run your cleaning business from your pocket?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
              See CleanPlan in action. Walk through your workflow, see the features that matter to you, and get a clear quote.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book a Demo
              <ArrowRight size={18} />
            </Link>
            <p className="text-sm text-blue-200 mt-4">Live demo. No commitment. Just clarity.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6" aria-labelledby="faq-heading">
        <div className="max-w-[860px] mx-auto w-full">
          <div className="text-center mb-12">
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
                { text: 'Common' },
                { text: 'questions,' },
                { text: 'straight' },
                { text: 'answers' },
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
      <section className="py-6 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-600 flex-wrap justify-center">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Real-time tracking
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Mobile + Web
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Configurable checklists
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Client-ready records
            </span>
          </div>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 hover:brightness-105 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300"
          >
            Book a Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </article>
  );
}