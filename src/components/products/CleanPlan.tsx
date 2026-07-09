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
  Clock,
  Zap,
  Sparkles,
  Shield,
  TrendingUp,
  Star,
  Play,
  Pause,
  CheckCircle,
  XCircle,
  Clock as ClockIcon,
  UserCheck,
  PlayCircle,
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80';

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

const STATS = [
  { value: '40%', label: 'Faster operations', icon: Zap },
  { value: '100%', label: 'Digital workflow', icon: CheckCircle },
  { value: '24/7', label: 'Real-time visibility', icon: Clock },
  { value: '99.9%', label: 'Uptime guaranteed', icon: Shield },
];

const SCREENS = [
  {
    title: 'Dashboard',
    desc: 'See your entire business at a glance',
    color: '#2563eb',
  },
  {
    title: 'Scheduling',
    desc: 'Assign and track jobs in real-time',
    color: '#7c3aed',
  },
  {
    title: 'Field View',
    desc: 'Crews confirm completion from mobile',
    color: '#059669',
  },
  {
    title: 'Reports',
    desc: 'Client-ready service history',
    color: '#d97706',
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
  const autoPlayRef = useRef<number | null>(null);

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
      <header className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="CleanPlan - Cleaning business management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-blue-900/70" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Sparkles size={14} className="text-blue-400" />
                <span className="text-xs font-bold text-blue-200 tracking-widest">PRODUCT</span>
                <span className="text-xs text-white/30">•</span>
                <span className="text-xs font-semibold text-white/80">CleanPlan</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Run your cleaning business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400">
                  from your pocket
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-lg mt-4">
                CleanPlan puts scheduling, workforce tracking, and daily operations in one place — so you always know which crew is where, what's done, and what's slipping.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Book a Demo
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300">
                  <PlayCircle size={18} />
                  Watch Demo
                </button>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  Real-time tracking
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  Mobile + Web
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  Configurable checklists
                </span>
              </div>
            </div>

            {/* Hero Right - Phone Mockup */}
            <div className="hidden lg:block relative">
              <div className="relative mx-auto max-w-[320px]">
                {/* Phone frame */}
                <div className="relative rounded-[40px] bg-gradient-to-br from-slate-800 to-slate-900 p-2 shadow-2xl">
                  <div className="rounded-[32px] overflow-hidden bg-white">
                    {/* Phone notch */}
                    <div className="h-6 bg-white flex items-center justify-center">
                      <div className="w-20 h-5 bg-slate-900 rounded-full" />
                    </div>
                    
                    {/* Phone screen content */}
                    <div className="p-4 min-h-[500px] bg-gradient-to-b from-blue-50 to-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">CP</span>
                          </div>
                          <span className="text-xs font-bold text-gray-700">CleanPlan</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-[8px] text-gray-500">Live</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {/* Today's jobs */}
                        <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-blue-700">Today's Jobs</span>
                            <span className="text-xs text-blue-600">8 active</span>
                          </div>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center justify-between p-2 rounded-lg bg-white">
                              <div>
                                <div className="text-xs font-medium text-gray-700">Office Clean</div>
                                <div className="text-[10px] text-gray-400">Crew A • 9:00 AM</div>
                              </div>
                              <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                <Check size={10} className="text-emerald-600" />
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-white">
                              <div>
                                <div className="text-xs font-medium text-gray-700">Retail Store</div>
                                <div className="text-[10px] text-gray-400">Crew B • 10:30 AM</div>
                              </div>
                              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                                <ClockIcon size={10} className="text-amber-600" />
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-white">
                              <div>
                                <div className="text-xs font-medium text-gray-700">School</div>
                                <div className="text-[10px] text-gray-400">Crew C • 1:00 PM</div>
                              </div>
                              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                <UserCheck size={10} className="text-blue-600" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Crew status */}
                        <div className="p-3 rounded-xl bg-purple-50 border border-purple-100">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-purple-700">Crew Status</span>
                            <span className="text-xs text-purple-600">4 active</span>
                          </div>
                          <div className="mt-2 flex gap-2">
                            <div className="flex-1 p-2 rounded-lg bg-white text-center">
                              <div className="text-xs font-medium text-gray-700">Crew A</div>
                              <div className="text-[10px] text-emerald-600">On Site</div>
                            </div>
                            <div className="flex-1 p-2 rounded-lg bg-white text-center">
                              <div className="text-xs font-medium text-gray-700">Crew B</div>
                              <div className="text-[10px] text-blue-600">En Route</div>
                            </div>
                            <div className="flex-1 p-2 rounded-lg bg-white text-center">
                              <div className="text-xs font-medium text-gray-700">Crew C</div>
                              <div className="text-[10px] text-amber-600">Break</div>
                            </div>
                          </div>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2 rounded-xl bg-white border border-gray-100 text-center">
                            <div className="text-lg font-bold text-blue-600">12</div>
                            <div className="text-[8px] text-gray-400">Completed</div>
                          </div>
                          <div className="p-2 rounded-xl bg-white border border-gray-100 text-center">
                            <div className="text-lg font-bold text-amber-600">3</div>
                            <div className="text-[8px] text-gray-400">In Progress</div>
                          </div>
                          <div className="p-2 rounded-xl bg-white border border-gray-100 text-center">
                            <div className="text-lg font-bold text-emerald-600">100%</div>
                            <div className="text-[8px] text-gray-400">On Time</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-8 bg-white rounded-2xl shadow-xl p-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <TrendingUp size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">40%</div>
                      <div className="text-[10px] text-gray-500">Faster operations</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-b border-gray-100 bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon size={20} className="text-blue-500" />
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Clipboard Problem */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="sr-from-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 mb-4">
                <XCircle size={12} className="text-red-500" />
                <span className="text-xs font-bold text-red-700 tracking-wider">THE PROBLEM</span>
              </div>
              <ScrollTextReveal
                tag="h2"
                align="left"
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
                  { text: 'The' },
                  { text: 'clipboard' },
                  { text: 'problem' },
                ]}
              />
              <p className="text-[#555] text-base leading-relaxed mt-4 max-w-lg">
                Cleaning businesses run on coordination: crews across sites, schedules that change by the hour, clients who notice the one missed task.
              </p>
              <p className="text-[#555] text-base leading-relaxed mt-3 max-w-lg">
                Paper and phone calls hold it together until they don't — a no-show discovered at 9 a.m., a completed job nobody logged, an invoice built from memory.
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-100">
                <p className="text-sm text-blue-800 font-medium flex items-start gap-2">
                  <Zap size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>CleanPlan digitizes the whole loop: jobs scheduled, tasks assigned, completion tracked, and the day's operations visible in real time.</span>
                </p>
              </div>
            </div>

            <div className="sr-from-right order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Paper-based cleaning operations"
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ transitionDelay: `${i * 0.06}s` }}
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

      {/* App Screens - Auto-rotating */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="sr-from-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-4">
                <Smartphone size={12} className="text-emerald-500" />
                <span className="text-xs font-bold text-emerald-700 tracking-wider">LIVE PREVIEW</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                See CleanPlan in action
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mt-3 max-w-lg">
                {SCREENS[activeScreen].desc}
              </p>

              {/* Screen indicators */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex gap-2">
                  {SCREENS.map((screen, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveScreen(i)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        i === activeScreen ? 'w-8' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      style={{
                        background: i === activeScreen 
                          ? `linear-gradient(90deg, ${screen.color}, ${screen.color}80)`
                          : undefined,
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={toggleAutoPlay}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  aria-label={isAutoPlaying ? 'Pause' : 'Play'}
                >
                  {isAutoPlaying ? (
                    <Pause size={16} className="text-gray-500" />
                  ) : (
                    <Play size={16} className="text-gray-500" />
                  )}
                </button>
              </div>

              {/* Feature list */}
              <div className="mt-6 space-y-2">
                {SCREENS.map((screen, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                      i === activeScreen ? 'bg-gray-50' : 'hover:bg-gray-50/50'
                    }`}
                    onClick={() => setActiveScreen(i)}
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        background: i === activeScreen ? screen.color : '#d1d5db',
                        width: i === activeScreen ? '8px' : '6px',
                        height: i === activeScreen ? '8px' : '6px',
                      }}
                    />
                    <span className={`text-sm transition-colors duration-300 ${
                      i === activeScreen ? 'font-medium text-gray-900' : 'text-gray-400'
                    }`}>
                      {screen.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sr-from-right">
              <div className="relative mx-auto max-w-[400px]">
                <div className="relative rounded-[40px] bg-gradient-to-br from-slate-800 to-slate-900 p-2 shadow-2xl">
                  <div className="rounded-[32px] overflow-hidden bg-white">
                    <div className="h-6 bg-white flex items-center justify-center">
                      <div className="w-20 h-5 bg-slate-900 rounded-full" />
                    </div>
                    <div className="p-4 min-h-[450px] bg-gradient-to-b from-blue-50 to-white">
                      {/* Dynamic content based on active screen */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">CP</span>
                          </div>
                          <span className="text-xs font-bold text-gray-700">CleanPlan</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[8px] text-gray-500">Live</span>
                        </div>
                      </div>

                      {activeScreen === 0 && (
                        // Dashboard view
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-3 rounded-xl bg-white border border-gray-100">
                              <div className="text-lg font-bold text-blue-600">12</div>
                              <div className="text-[10px] text-gray-400">Today's Jobs</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white border border-gray-100">
                              <div className="text-lg font-bold text-emerald-600">8</div>
                              <div className="text-[10px] text-gray-400">Completed</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white border border-gray-100">
                              <div className="text-lg font-bold text-amber-600">3</div>
                              <div className="text-[10px] text-gray-400">In Progress</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white border border-gray-100">
                              <div className="text-lg font-bold text-purple-600">4</div>
                              <div className="text-[10px] text-gray-400">Crews Active</div>
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-gray-100">
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
                        // Scheduling view
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
                              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white border border-gray-100">
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
                        // Field view
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
                              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white border border-gray-100">
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
                        // Reports view
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
                              <div key={i} className="p-2 rounded-lg bg-white border border-gray-100">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-[900px] mx-auto w-full">
          <div className="relative p-8 md:p-12 rounded-3xl bg-white shadow-xl border border-gray-100">
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
              <FaqItem
                key={faq.q}
                question={faq.q}
                answer={faq.a}
                isOpen={faqOpen === i}
                onToggle={() => setFaqOpen((prev) => (prev === i ? null : i))}
              />
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
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
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