// EducationERP.tsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  GraduationCap,
  Users,
  Calendar,
  Building2,
  Award,
  CreditCard,
  BarChart3,
  Globe,
  CheckCircle,
  UserPlus,
  BookMarked,
  Video,
  Bell,
  PlayCircle,
  Handshake,
  Layers,
  Smartphone,
  SlidersHorizontal,
  ShieldCheck,
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import { CleanPlanHeroBackground } from './CleanPlanHeroBackground';
import { ProductHeroLaptop } from './ProductHeroLaptop';
import { ProductProblemSection } from './ProductProblemSection';
import { ProductLivePreviewSection } from './ProductLivePreviewSection';

const HERO_LETTER_INTERVAL = 78;

const EDUCATION_HERO_LINES = [
  {
    words: [{ text: 'One' }, { text: 'platform' }, { text: 'from' }],
    letterCount: 15,
  },
  {
    words: [{ text: 'enrollment' }, { text: 'to' }, { text: 'exam' }, { text: 'day' }],
    letterCount: 19,
    gradient: true,
  },
].map((line, i, arr) => ({
  ...line,
  startDelay: arr.slice(0, i).reduce((sum, l) => sum + l.letterCount, 0) * HERO_LETTER_INTERVAL,
}));

const FEATURES = [
  {
    icon: UserPlus,
    title: 'Admissions & Enrollment',
    desc: 'Inquiry to admission with documents and approvals in one seamless flow.',
    color: '#2563eb',
    bg: 'bg-blue-50',
  },
  {
    icon: CreditCard,
    title: 'Fee Management',
    desc: 'Structures, schedules, receipts, dues, and reminders that send themselves.',
    color: '#7c3aed',
    bg: 'bg-purple-50',
  },
  {
    icon: Calendar,
    title: 'Attendance & Timetables',
    desc: 'Students and staff tracking with parent notifications.',
    color: '#059669',
    bg: 'bg-emerald-50',
  },
  {
    icon: BookMarked,
    title: 'Examinations & Academics',
    desc: 'Schedules, marks, report cards, and progression records.',
    color: '#d97706',
    bg: 'bg-amber-50',
  },
  {
    icon: Video,
    title: 'Virtual Classrooms',
    desc: 'Online learning connected to the same academic backbone.',
    color: '#dc2626',
    bg: 'bg-red-50',
  },
  {
    icon: Bell,
    title: 'Parent & Student Communication',
    desc: 'SMS/email/app updates that reach home before rumors do.',
    color: '#0891b2',
    bg: 'bg-cyan-50',
  },
  {
    icon: Building2,
    title: 'Administration',
    desc: 'Staff records, transport, library, and inventory in the same system.',
    color: '#8b5cf6',
    bg: 'bg-violet-50',
  },
];

const PLATFORM_TRAITS = [
  { icon: Globe, label: 'Web-based', desc: 'Access from any browser, any campus office', color: '#2563eb' },
  { icon: Smartphone, label: 'Mobile-ready', desc: 'Field updates and parent access on the go', color: '#7c3aed' },
  { icon: SlidersHorizontal, label: 'Customizable', desc: 'Mapped to your institution\'s structure', color: '#059669' },
  { icon: ShieldCheck, label: 'Role-based access', desc: 'Permissions that match real responsibilities', color: '#d97706' },
];

const ACCESS_ROLES = [
  { icon: Building2, label: 'Administrators', desc: 'Campus-wide control & reporting', color: '#2563eb' },
  { icon: GraduationCap, label: 'Teachers', desc: 'Classroom tools & academic records', color: '#7c3aed' },
  { icon: Users, label: 'Parents', desc: 'Fees, attendance & updates in one place', color: '#059669' },
];

const SCREENS = [
  {
    title: 'Dashboard',
    desc: 'Complete institution overview at a glance',
    color: '#2563eb',
    icon: BarChart3,
  },
  {
    title: 'Student Profile',
    desc: 'All student data in one place',
    color: '#7c3aed',
    icon: Users,
  },
  {
    title: 'Fee Management',
    desc: 'Track payments and dues',
    color: '#059669',
    icon: CreditCard,
  },
  {
    title: 'Parent Portal',
    desc: 'Real-time access for parents',
    color: '#d97706',
    icon: Globe,
  },
];

const FAQS = [
  {
    q: 'Is this for schools, colleges, or both?',
    a: 'Both — the structure (classes, semesters, departments, batches) is configured to your institution during implementation.',
  },
  {
    q: 'Can parents access it?',
    a: 'Yes — attendance, fees, results, and announcements through parent-facing access, which cuts front-office query load noticeably.',
  },
  {
    q: 'How does fee management handle our specific structures?',
    a: 'Fee heads, concessions, installments, and late rules are configurable; receipts and dues reports generate automatically.',
  },
  {
    q: 'What about our existing student records?',
    a: 'Data migration is part of implementation — legacy records cleaned, mapped, and imported before go-live, tested against the originals.',
  },
  {
    q: 'What does it cost?',
    a: 'Priced by institution size and modules. The demo ends with a clear, itemized quote — the same pricing honesty we apply everywhere.',
  },
];

function EducationPhoneScreenContent() {
  return (
    <div className="cleanplan-laptop__panel">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-indigo-500 flex items-center justify-center">
            <GraduationCap size={10} className="text-white" />
          </div>
          <span className="text-[10px] font-bold text-gray-700">EduERP</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[7px] text-gray-500">Live</span>
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="grid grid-cols-3 gap-1.5">
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-indigo-600">1,247</div>
            <div className="text-[7px] text-gray-400">Students</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-emerald-600">94%</div>
            <div className="text-[7px] text-gray-400">Attendance</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-amber-600">87</div>
            <div className="text-[7px] text-gray-400">Staff</div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-indigo-50 border border-indigo-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-indigo-700">Recent Activity</span>
            <span className="text-[8px] text-indigo-600">View All</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white text-[8px]">
              <span className="text-gray-600">New admission: A. Sharma</span>
              <span className="text-gray-400">2m</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white text-[8px]">
              <span className="text-gray-600">Fee paid: R. Patel</span>
              <span className="text-gray-400">15m</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white text-[8px]">
              <span className="text-gray-600">Exam results published</span>
              <span className="text-gray-400">1h</span>
            </div>
          </div>
        </div>

        <div className="flex gap-1.5">
          <div className="flex-1 p-1.5 rounded-md bg-indigo-500 text-white text-center text-[8px] font-medium">
            + Student
          </div>
          <div className="flex-1 p-1.5 rounded-md bg-emerald-500 text-white text-center text-[8px] font-medium">
            Attendance
          </div>
          <div className="flex-1 p-1.5 rounded-md bg-violet-500 text-white text-center text-[8px] font-medium">
            Fee Report
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-purple-700">Fee Dues</span>
            <span className="text-[8px] text-purple-600">12 pending</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[8px] text-gray-600 p-1.5 rounded-md bg-white">
              <span>Class 10-A • Term 2</span>
              <span className="text-amber-600 font-medium">₹4,200</span>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-600 p-1.5 rounded-md bg-white">
              <span>Class 8-B • Transport</span>
              <span className="text-amber-600 font-medium">₹1,800</span>
            </div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-100">
          <div className="text-[10px] font-semibold text-amber-700 mb-1.5">Parent Alerts</div>
          <div className="space-y-1.5">
            <div className="p-1.5 rounded-md bg-white text-[8px] text-gray-600">
              PTM scheduled for Class 9 — Friday 3:00 PM
            </div>
            <div className="p-1.5 rounded-md bg-white text-[8px] text-gray-600">
              Bus route 4 delayed by 10 minutes
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

export default function EducationERP() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeScreen, setActiveScreen] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    document.title = 'Education ERP — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'One platform from enrollment to exam day. Education ERP connects admissions, fees, attendance, academics, and communication.',
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
    script.id = 'education-erp-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('education-erp-faq-schema')?.remove();
    };
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveScreen((prev) => (prev + 1) % SCREENS.length);
      }, 3500);
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
      {/* Hero */}
      <header className="webdev-hero cleanplan-hero relative overflow-hidden px-6">
        <CleanPlanHeroBackground />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <div className="a1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 mb-6 shadow-sm">
                <GraduationCap size={14} className="text-indigo-500" />
                <span className="text-xs font-bold text-indigo-600 tracking-widest">PRODUCT</span>
                <span className="text-xs text-slate-300">•</span>
                <span className="text-xs font-semibold text-slate-600">Education ERP</span>
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
                {EDUCATION_HERO_LINES.map((line, i) => (
                  <span
                    key={line.words.map((w) => w.text).join('-')}
                    className="block w-fit max-w-full"
                    style={{ marginBottom: i < EDUCATION_HERO_LINES.length - 1 ? '0.08em' : undefined }}
                  >
                    <ScrollTextReveal
                      tag="span"
                      align="left"
                      animate="words"
                      textColor="#0f172a"
                      letterInterval={HERO_LETTER_INTERVAL}
                      startDelay={line.startDelay}
                      gradientText={line.gradient}
                      waveGradientStops={line.gradient ? ['#4f46e5', '#8b5cf6', '#2563eb'] : undefined}
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
                Education ERP connects admissions, fees, attendance, academics, and communication — so administrators stop re-entering the same student into five systems.
              </p>

              <div className="a3 flex flex-wrap gap-4 mt-8">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:brightness-105 hover:shadow-2xl hover:shadow-blue-500/35 transition-all duration-300"
                >
                  Book a Free Demo
                  <ArrowRight size={18} />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-slate-300 text-slate-800 font-medium shadow-md shadow-slate-900/10 hover:bg-slate-50 hover:shadow-lg transition-all duration-300">
                  <PlayCircle size={18} />
                  Watch Demo
                </button>
              </div>

              {/* <div className="a4 flex flex-wrap gap-6 mt-8 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-500" />
                  Web + Mobile
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-500" />
                  Parent Portal
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-500" />
                  Customizable
                </span>
              </div> */}
            </div>

            <ProductHeroLaptop
              contentKey="education-erp"
              glowAClassName="bg-indigo-500/10"
              glowBClassName="bg-blue-500/10"
              badge={(
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <Award size={15} className="text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">5K+</div>
                    <div className="text-[9px] text-gray-500">Students managed</div>
                  </div>
                </div>
              )}
            >
              <EducationPhoneScreenContent />
            </ProductHeroLaptop>
          </div>
        </div>
      </header>

      <ProductProblemSection
        accent="indigo"
        heading="The five-register problem"
        paragraphs={[
          'A student exists in the admissions file, the fee register, the attendance sheet, the exam roster, and the transport list — and none of them agree.',
          "Every reconciliation costs staff hours; every mismatch costs a parent's trust. Campus management isn't complicated because education is complicated; it's complicated because the systems never met.",
        ]}
        solution="Education ERP brings everything together — one system, one truth, one place."
        imageSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=85&auto=format&fit=crop"
        imageAlt="School administrator managing student records across multiple systems"
        imageCaption="Five registers. One student. Zero alignment."
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
                { text: 'your' },
                { text: 'institution' },
                { text: 'needs' },
              ]}
            />
            <p className="text-[#555] text-base leading-relaxed mt-4 max-w-[36rem] mx-auto">
              Seven integrated modules that work together seamlessly.
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

      {/* Built with education partners */}
      <section className="relative overflow-hidden bg-gray-50 px-6 py-24">
        <div
          className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="sr-from-bottom overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/60">
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" aria-hidden="true" />

            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="border-b border-slate-100 p-8 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1">
                  <Handshake size={12} className="text-indigo-600" />
                  <span className="text-xs font-bold tracking-wider text-indigo-700">PARTNERSHIP</span>
                </div>

                <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
                  Built with education partners
                </h2>

                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Developed in collaboration with education-domain specialists and engineered on the same
                  platform discipline as Rexo ERP: web-based, mobile-ready, customizable to your
                  institution&apos;s structure, with role-based access for administrators, teachers, and parents.
                </p>

                <div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Layers size={18} className="text-indigo-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Rexo ERP platform discipline</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">
                        Enterprise-grade engineering — proven in manufacturing, applied to education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:col-span-3">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Platform capabilities
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {PLATFORM_TRAITS.map((trait, i) => {
                    const Icon = trait.icon;
                    return (
                      <div
                        key={trait.label}
                        className={`sr-from-bottom sr-d${Math.min(i + 1, 10)} group flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-md hover:shadow-slate-200/60`}
                      >
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundColor: `${trait.color}12`, color: trait.color }}
                        >
                          <Icon size={18} strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{trait.label}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{trait.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="mb-4 mt-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Who gets access
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {ACCESS_ROLES.map((role, i) => {
                    const Icon = role.icon;
                    return (
                      <div
                        key={role.label}
                        className={`sr-from-bottom sr-d${Math.min(i + 5, 10)} group relative overflow-hidden rounded-2xl border border-slate-100 p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/70`}
                      >
                        <div
                          className="absolute inset-x-0 top-0 h-1 opacity-80"
                          style={{ background: role.color }}
                          aria-hidden="true"
                        />
                        <div
                          className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${role.color}12`, color: role.color }}
                        >
                          <Icon size={20} strokeWidth={1.75} />
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{role.label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-gray-500">{role.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductLivePreviewSection
        heading="See Education ERP in action"
        sectionClassName="bg-white"
        screens={SCREENS}
        activeScreen={activeScreen}
        onScreenChange={setActiveScreen}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={toggleAutoPlay}
      >
        <div className="flex items-center justify-between mb-4 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center">
              <GraduationCap size={16} className="text-white" />
            </div>
            <span className="text-sm font-bold text-gray-700">EduERP</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-gray-500">Live</span>
          </div>
        </div>

        {activeScreen === 0 && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100 text-center">
                <div className="text-lg font-bold text-indigo-600">1,247</div>
                <div className="text-[10px] text-gray-400">Students</div>
              </div>
              <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100 text-center">
                <div className="text-lg font-bold text-emerald-600">94%</div>
                <div className="text-[10px] text-gray-400">Attendance</div>
              </div>
              <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100 text-center">
                <div className="text-lg font-bold text-amber-600">87</div>
                <div className="text-[10px] text-gray-400">Staff</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-700">Today's Attendance</span>
                <span className="text-[10px] text-emerald-600">↑ 5%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ width: '94%' }} />
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-gray-400">
                <span>Present: 892</span>
                <span>Absent: 57</span>
              </div>
            </div>
          </div>
        )}

        {activeScreen === 1 && (
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                AS
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">Ananya Sharma</div>
                <div className="text-xs text-gray-500">Class 10-A • Roll #12</div>
              </div>
              <div className="text-xs text-emerald-600 font-medium">Active</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-xl bg-white shadow-sm border border-gray-100 text-center">
                <div className="text-xs text-gray-500">Attendance</div>
                <div className="text-sm font-bold text-gray-900">95%</div>
              </div>
              <div className="p-2 rounded-xl bg-white shadow-sm border border-gray-100 text-center">
                <div className="text-xs text-gray-500">Fees</div>
                <div className="text-sm font-bold text-emerald-600">Paid</div>
              </div>
              <div className="p-2 rounded-xl bg-white shadow-sm border border-gray-100 text-center">
                <div className="text-xs text-gray-500">Exams</div>
                <div className="text-sm font-bold text-amber-600">3 Upcoming</div>
              </div>
              <div className="p-2 rounded-xl bg-white shadow-sm border border-gray-100 text-center">
                <div className="text-xs text-gray-500">Transport</div>
                <div className="text-sm font-bold text-blue-600">Route B</div>
              </div>
            </div>
          </div>
        )}

        {activeScreen === 2 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700">Fee Collection</span>
              <span className="text-[10px] text-indigo-600">This Month</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500">Collected</div>
                <div className="text-lg font-bold text-emerald-600">₹24.8L</div>
                <div className="text-[10px] text-gray-400">85% of target</div>
              </div>
              <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500">Pending</div>
                <div className="text-lg font-bold text-amber-600">₹4.2L</div>
                <div className="text-[10px] text-gray-400">12 students</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">Collection Progress</span>
                <span className="text-xs font-medium text-emerald-600">85%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        )}

        {activeScreen === 3 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700">Parent Notifications</span>
              <span className="text-[10px] text-indigo-600">Send</span>
            </div>
            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Bell size={14} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-700">Attendance Alert</div>
                  <div className="text-[10px] text-gray-400">Sent to 45 parents</div>
                </div>
                <span className="text-[10px] text-emerald-600">Delivered</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Bell size={14} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-700">Fee Reminder</div>
                  <div className="text-[10px] text-gray-400">Scheduled for tomorrow</div>
                </div>
                <span className="text-[10px] text-amber-600">Pending</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Bell size={14} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-700">Exam Schedule</div>
                  <div className="text-[10px] text-gray-400">Published to all classes</div>
                </div>
                <span className="text-[10px] text-emerald-600">Delivered</span>
              </div>
            </div>
          </div>
        )}
      </ProductLivePreviewSection>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-emerald-600 to-blue-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[900px] text-center">
          <div className="sr">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Ready to bring your campus onto one platform?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-blue-100">
              See Education ERP in action. Walk through your workflow and get a clear, itemized quote.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Book a Free Demo
              <ArrowRight size={18} />
            </Link>
            <p className="mt-4 text-sm text-blue-200">Live demo. No commitment. Just clarity.</p>
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
              Web + Mobile
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Parent Portal
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Customizable
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Data Migration
            </span>
          </div>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 hover:brightness-105 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300"
          >
            Book a Free Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </article>
  );
}