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
  BookOpen,
  Building2,
  Zap,
  Award,
  Play,
  Pause,
  Clock,
  UserCheck,
  FileText,
  CreditCard,
  BarChart3,
  Globe,
  Smartphone,
  CheckCircle,
  XCircle,
  UserPlus,
  BookMarked,
  Video,
  Bell,
  PlayCircle,
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80';

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

const STATS = [
  { value: '100%', label: 'Paperless operations', icon: FileText },
  { value: '70%', label: 'Less admin time', icon: Clock },
  { value: '24/7', label: 'Parent access', icon: Globe },
  { value: 'One', label: 'System, not five', icon: CheckCircle },
];

const MODULES = [
  { name: 'Admissions', icon: UserPlus, color: '#2563eb' },
  { name: 'Fees', icon: CreditCard, color: '#7c3aed' },
  { name: 'Attendance', icon: Calendar, color: '#059669' },
  { name: 'Exams', icon: BookMarked, color: '#d97706' },
  { name: 'Academics', icon: BookOpen, color: '#dc2626' },
  { name: 'Communication', icon: Bell, color: '#0891b2' },
  { name: 'Administration', icon: Building2, color: '#8b5cf6' },
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
  const autoPlayRef = useRef<number | null>(null);

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
      <header className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Education ERP - Modern campus management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-slate-900/85 to-blue-900/75" />
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <GraduationCap size={14} className="text-indigo-400" />
                <span className="text-xs font-bold text-indigo-200 tracking-widest">PRODUCT</span>
                <span className="text-xs text-white/30">•</span>
                <span className="text-xs font-semibold text-white/80">Education ERP</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                One platform from
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400">
                  enrollment to exam day
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-lg mt-4">
                Education ERP connects admissions, fees, attendance, academics, and communication — so administrators stop re-entering the same student into five systems.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Book a Free Demo
                  <ArrowRight size={18} />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300">
                  <PlayCircle size={18} />
                  Watch Demo
                </button>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  Web + Mobile
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  Parent Portal
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  Customizable
                </span>
              </div>
            </div>

            {/* Hero Right - Tablet Mockup */}
            <div className="hidden lg:block relative">
              <div className="relative mx-auto max-w-[420px]">
                <div className="relative rounded-[32px] bg-gradient-to-br from-slate-800 to-slate-900 p-2 shadow-2xl">
                  <div className="rounded-[24px] overflow-hidden bg-white">
                    <div className="p-3 bg-gradient-to-r from-indigo-50 to-blue-50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center">
                            <GraduationCap size={16} className="text-white" />
                          </div>
                          <span className="text-sm font-bold text-gray-700">EduERP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] text-gray-500">Live</span>
                        </div>
                      </div>

                      {/* Dashboard Grid */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100 text-center">
                          <div className="text-xl font-bold text-indigo-600">1,247</div>
                          <div className="text-[10px] text-gray-400">Students</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100 text-center">
                          <div className="text-xl font-bold text-emerald-600">94%</div>
                          <div className="text-[10px] text-gray-400">Attendance</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100 text-center">
                          <div className="text-xl font-bold text-amber-600">87</div>
                          <div className="text-[10px] text-gray-400">Staff</div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-gray-700">Recent Activity</span>
                          <span className="text-[10px] text-indigo-600">View All</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-600">New admission: A. Sharma</span>
                            <span className="text-[10px] text-gray-400">2 min ago</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-600">Fee paid: R. Patel</span>
                            <span className="text-[10px] text-gray-400">15 min ago</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-600">Exam results published</span>
                            <span className="text-[10px] text-gray-400">1 hour ago</span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="flex gap-2 mt-3">
                        <div className="flex-1 p-2 rounded-xl bg-indigo-500 text-white text-center text-xs font-medium">
                          + Add Student
                        </div>
                        <div className="flex-1 p-2 rounded-xl bg-emerald-500 text-white text-center text-xs font-medium">
                          Mark Attendance
                        </div>
                        <div className="flex-1 p-2 rounded-xl bg-purple-500 text-white text-center text-xs font-medium">
                          Fee Report
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                      <Award size={18} className="text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">5K+</div>
                      <div className="text-[10px] text-gray-500">Students managed</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <UserCheck size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">100%</div>
                      <div className="text-[10px] text-gray-500">Paperless</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-b border-gray-100 bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center group">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon size={20} className="text-indigo-500" />
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Five-Register Problem */}
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
                }}
                words={[
                  { text: 'The' },
                  { text: 'five-register' },
                  { text: 'problem' },
                ]}
              />
              <p className="text-[#555] text-base leading-relaxed mt-4 max-w-lg">
                A student exists in the admissions file, the fee register, the attendance sheet, the exam roster, and the transport list — and none of them agree.
              </p>
              <p className="text-[#555] text-base leading-relaxed mt-3 max-w-lg">
                Every reconciliation costs staff hours; every mismatch costs a parent's trust. Campus management isn't complicated because education is complicated; it's complicated because the systems never met.
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                <p className="text-sm text-indigo-800 font-medium flex items-start gap-2">
                  <Zap size={18} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span>Education ERP brings everything together — one system, one truth, one place.</span>
                </p>
              </div>
            </div>

            <div className="sr-from-right order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                  alt="Paper-based campus management"
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 mb-4">
              <CheckCircle size={12} className="text-indigo-500" />
              <span className="text-xs font-bold text-indigo-700 tracking-wider">FEATURES</span>
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

      {/* Module Circle - Visual */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
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
              }}
              words={[
                { text: 'Seven' },
                { text: 'modules,' },
                { text: 'one' },
                { text: 'ecosystem' },
              ]}
            />
            <p className="text-[#555] text-base leading-relaxed mt-4 max-w-[36rem] mx-auto">
              All connected. All working together. No data entry twice.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {MODULES.map((module, i) => {
              const Icon = module.icon;
              return (
                <div
                  key={module.name}
                  className="group p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${module.color}15`, color: module.color }}
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-medium text-gray-600">{module.name}</span>
                </div>
              );
            })}
          </div>

          {/* Connection visual */}
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400" />
              <span>Connected</span>
              <span className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400" />
            </span>
          </div>
        </div>
      </section>

      {/* App Screens - Auto-rotating */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="sr-from-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 mb-4">
                <Smartphone size={12} className="text-indigo-500" />
                <span className="text-xs font-bold text-indigo-700 tracking-wider">LIVE PREVIEW</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                See Education ERP in action
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mt-3 max-w-lg">
                {SCREENS[activeScreen].desc}
              </p>

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

              <div className="mt-6 space-y-2">
                {SCREENS.map((screen, i) => {
                  const Icon = screen.icon;
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        i === activeScreen ? 'bg-white shadow-sm' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveScreen(i)}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: i === activeScreen ? `${screen.color}15` : 'transparent' }}
                      >
                        <Icon size={16} style={{ color: i === activeScreen ? screen.color : '#9ca3af' }} />
                      </div>
                      <span className={`text-sm transition-colors duration-300 ${
                        i === activeScreen ? 'font-medium text-gray-900' : 'text-gray-400'
                      }`}>
                        {screen.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sr-from-right order-1 lg:order-2">
              <div className="relative mx-auto max-w-[420px]">
                <div className="relative rounded-[32px] bg-gradient-to-br from-slate-800 to-slate-900 p-2 shadow-2xl">
                  <div className="rounded-[24px] overflow-hidden bg-white">
                    <div className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 min-h-[380px]">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center">
                            <GraduationCap size={16} className="text-white" />
                          </div>
                          <span className="text-sm font-bold text-gray-700">EduERP</span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            <div className="p-2 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <Bell size={14} />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-medium text-gray-700">Attendance Alert</div>
                                <div className="text-[10px] text-gray-400">Sent to 45 parents</div>
                              </div>
                              <span className="text-[10px] text-emerald-600">Delivered</span>
                            </div>
                            <div className="p-2 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <Bell size={14} />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-medium text-gray-700">Fee Reminder</div>
                                <div className="text-[10px] text-gray-400">Scheduled for tomorrow</div>
                              </div>
                              <span className="text-[10px] text-amber-600">Pending</span>
                            </div>
                            <div className="p-2 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center gap-3">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto w-full text-center">
          <div className="sr">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to bring your campus onto one platform?
            </h2>
            <p className="text-lg text-indigo-100 leading-relaxed max-w-2xl mx-auto mb-8">
              See Education ERP in action. Walk through your workflow and get a clear, itemized quote.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book a Free Demo
              <ArrowRight size={18} />
            </Link>
            <p className="text-sm text-indigo-200 mt-4">Live demo. No commitment. Just clarity.</p>
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
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book a Free Demo
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