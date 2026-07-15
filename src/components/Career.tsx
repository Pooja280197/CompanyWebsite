// Careers.tsx - Joyful, Vibrant Design
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Send,
  User,
  Briefcase,
  MessageSquare,
  DollarSign,
  Shield,
  Globe,
  Users,
  Building2,
  Calendar,
  PlayCircle,
  FileText,
  Layers,
  Quote,
  X,
  Database,
  Server,
  Rocket,
  Lock,
  Heart,
  Stethoscope,
  GraduationCap,
  Cloud,
  Code,
  Brain,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Upload,
  File,
  Github,
  Award,
  TrendingUp,
  Zap,
  Clock as ClockIcon,
  Target,
  Eye,
  PenTool,
  Cpu,
  GitBranch,
  Smartphone,
  Monitor,
  Package,
  Factory,
  Diamond,
  Building,
  Smile,
  PartyPopper,
  Coffee,
  Laptop,
  Users as UsersIcon,
  Circle,
  Dot,
  Plus,
  Minus,
} from 'lucide-react';
import { FaqAccordionSection } from './FaqAccordionSection';
import { ScrollTextReveal } from './ScrollTextReveal';

const HERO_LETTER_INTERVAL = 52;

const CAREERS_TITLE_LINE_1 = [
  { text: 'Do' },
  { text: 'the' },
  { text: 'work' },
  { text: "you'll" },
];

const CAREERS_TITLE_LINE_2 = [
  { text: 'want' },
  { text: 'to' },
  { text: 'talk' },
  { text: 'about' },
];

const CAREERS_LINE1_MS =
  CAREERS_TITLE_LINE_1.reduce((n, w) => n + w.text.length, 0) * HERO_LETTER_INTERVAL + 350;

const CAREERS_ROLE_STREAM = [
  'Product Engineering',
  'AI & Data',
  'Cloud & DevOps',
  'Mobile',
  'ERP',
  'UI/UX',
  'Staff Aug',
  'Salesforce',
];

const CAREER_FAQS = [
  {
    q: 'Do you hire freshers or only experienced engineers?',
    a: 'Both — experienced engineers for client-facing depth, and promising freshers for structured growth paths. The bar is trajectory, not just history.',
  },
  {
    q: 'Is remote work possible?',
    a: "Role-dependent: many positions are Indore-based for team density, some are hybrid or remote. State your preference in the form — it's a conversation, not a filter.",
  },
  {
    q: 'I sent my resume. When will I hear back?',
    a: "Every resume gets read. If there's a current or near-term match you'll hear within days; strong profiles stay active in our pipeline for future roles.",
  },
];

const injectStyles = () => {
  const id = 'careers-styles-vibrant';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .careers-vibrant {
      background: #FFFFFF;
      color: #0F172A;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .font-editorial {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
    }

    /* ── Floating Icons ── */
    .float-icon {
      animation: floatIcon 6s ease-in-out infinite;
      position: absolute;
      pointer-events: none;
      opacity: 0.06;
    }
    .float-icon:nth-child(2) { animation-delay: 1s; }
    .float-icon:nth-child(3) { animation-delay: 2s; }
    .float-icon:nth-child(4) { animation-delay: 3s; }
    .float-icon:nth-child(5) { animation-delay: 4s; }

    @keyframes floatIcon {
      0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
      25% { transform: translateY(-20px) rotate(5deg) scale(1.05); }
      50% { transform: translateY(10px) rotate(-3deg) scale(0.95); }
      75% { transform: translateY(-10px) rotate(4deg) scale(1.02); }
    }

    /* ── Step Circle ── */
    .step-circle {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 700;
      font-family: 'Instrument Serif', Georgia, serif;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
    }
    .step-circle::after {
      content: '';
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      border: 2px dashed transparent;
      transition: all 0.4s ease;
    }
    .step-card:hover .step-circle::after {
      border-color: currentColor;
      animation: spin 10s linear infinite;
    }
    .step-circle .step-number {
      position: relative;
      z-index: 2;
    }
    .step-circle .step-icon {
      position: absolute;
      bottom: -6px;
      right: -6px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* ── Form Styles ── */
    .form-input {
      width: 100%;
      padding: 12px 16px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      background: #fafafa;
      transition: all 0.3s ease;
      font-size: 14px;
      color: #0F172A;
      outline: none;
    }
    .form-input:focus {
      border-color: #2563EB;
      background: #ffffff;
      box-shadow: 0 0 0 4px rgba(37,99,235,0.06);
    }
    .form-input::placeholder {
      color: #9ca3af;
    }
    .form-input.error {
      border-color: #dc2626;
      background: #fef2f2;
    }
    .form-textarea {
      min-height: 100px;
      resize: vertical;
      font-family: 'Inter', sans-serif;
    }

    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: #374151;
      margin-bottom: 6px;
    }

    .checkbox-custom {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      border: 2px solid #d1d5db;
      transition: all 0.3s ease;
      cursor: pointer;
      flex-shrink: 0;
      appearance: none;
      -webkit-appearance: none;
      position: relative;
    }
    .checkbox-custom:checked {
      border-color: #2563EB;
      background: #2563EB;
    }
    .checkbox-custom:checked::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 12px;
      font-weight: 700;
    }

    .file-upload-area {
      border: 2px dashed #e5e7eb;
      border-radius: 12px;
      padding: 24px;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
      background: #fafafa;
    }
    .file-upload-area:hover {
      border-color: #2563EB;
      background: #eff6ff;
    }
    .file-upload-area.dragging {
      border-color: #2563EB;
      background: #eff6ff;
    }

    .success-message {
      animation: successSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes successSlide {
      from { opacity: 0; transform: translateY(20px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .reveal-up {
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-up.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .gradient-text {
      background: linear-gradient(135deg, #2563EB 0%, #6366F1 50%, #06B6D4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Fun Bounce ── */
    @keyframes bounce-soft {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    .bounce-soft {
      animation: bounce-soft 3s ease-in-out infinite;
    }
    .bounce-soft:nth-child(2) { animation-delay: 0.5s; }
    .bounce-soft:nth-child(3) { animation-delay: 1s; }
    .bounce-soft:nth-child(4) { animation-delay: 1.5s; }
  `;
  document.head.appendChild(style);
};

export default function Careers() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [titleLine2Ready, setTitleLine2Ready] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    linkedin: '',
    github: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const processTimelineRef = useRef<HTMLOListElement>(null);
  const whyGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectStyles();
    document.title = 'Careers — NSS';
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setTitleLine2Ready(true), CAREERS_LINE1_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = processTimelineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-inview');
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = whyGridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-inview');
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -6% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      setFileName(file.name);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.role) newErrors.role = true;
    if (!formData.consent) newErrors.consent = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormSubmitted(true);
  };

  const processSteps = [
    {
      num: '01',
      title: 'Resume review',
      desc: 'We read every resume that arrives — and decide quickly if there’s a fit.',
      icon: FileText,
      color: '#14b8a6',
    },
    {
      num: '02',
      title: 'Technical conversation',
      desc: 'A real discussion, not trivia — how you think, build, and trade off.',
      icon: MessageSquare,
      color: '#3b82f6',
    },
    {
      num: '03',
      title: 'Practical round',
      desc: 'Work relevant to actual shipping — not puzzles for their own sake.',
      icon: Code,
      color: '#1e3a8a',
    },
    {
      num: '04',
      title: 'Offer',
      desc: 'Clear next steps when it’s a match — and honesty when it isn’t.',
      icon: Award,
      color: '#64748b',
    },
  ];

  const whyStay = [
    {
      icon: Layers,
      title: 'Variety that compounds',
      desc: 'One quarter on IoT, the next on RAG pipelines or Rexo ERP modules.',
      accent: '#2563eb',
    },
    {
      icon: Target,
      title: 'Real Ownership',
      desc: 'Small teams, direct client exposure, your name on the outcome.',
      accent: '#0d9488',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Upskilling',
      desc: 'Skill development is policy, not poster — our clients pay for current.',
      accent: '#ea580c',
    },
  ];

  return (
    <div className="careers-vibrant" ref={wrapperRef}>
      {/* ===== HERO ===== */}
      <section className="careers-hero" aria-labelledby="careers-hero-heading">
        <div className="careers-hero__layout">
          <div className="careers-hero__inner">
            

            <h1 id="careers-hero-heading" className="careers-hero__title">
              <span className="careers-hero__title-line">
                <ScrollTextReveal
                  tag="span"
                  align="left"
                  animate="words"
                  textColor="#0f172a"
                  letterInterval={HERO_LETTER_INTERVAL}
                  letterDurationMs={560}
                  startDelay={80}
                  style={{ display: 'block', width: 'fit-content', maxWidth: '100%' }}
                  words={CAREERS_TITLE_LINE_1}
                />
              </span>
              <span className="careers-hero__title-line careers-hero__title-line--accent">
                {titleLine2Ready ? (
                  <ScrollTextReveal
                    key="careers-title-line-2"
                    tag="span"
                    align="left"
                    animate="words"
                    textColor="#2563eb"
                    letterInterval={HERO_LETTER_INTERVAL}
                    letterDurationMs={560}
                    startDelay={0}
                    style={{ display: 'block', width: 'fit-content', maxWidth: '100%' }}
                    words={CAREERS_TITLE_LINE_2}
                  />
                ) : (
                  <span className="careers-hero__title-reserve" aria-hidden="true">
                    want to talk about
                  </span>
                )}
              </span>
            </h1>

            <div className="careers-hero__copy">
              <p className="careers-hero__desc careers-hero__fade-in" style={{ animationDelay: `${CAREERS_LINE1_MS + 700}ms` }}>
                Factory platforms that cut costs 40%. AI that judges diamonds. Products running businesses
                on three continents. Built here, from Indore — by engineers who own what ships.
              </p>

              <div className="careers-hero__actions careers-hero__fade-in" style={{ animationDelay: `${CAREERS_LINE1_MS + 880}ms` }}>
                <a
                  href="mailto:hr@nagarsoftwaresolution.com"
                  className="careers-hero__cta"
                  onClick={(e) => {
                    // Ensure mailto opens even if a scroll/overlay handler interferes
                    e.preventDefault();
                    window.location.href =
                      'mailto:hr@nagarsoftwaresolution.com?subject=Job%20Application%20-%20NSS';
                  }}
                >
                  Share Your Resume
                  <ArrowRight size={18} />
                </a>
                <a href="#process" className="careers-hero__ghost">
                  Our Process
                </a>
              </div>
              <p className="careers-hero__mail-hint careers-hero__fade-in" style={{ animationDelay: `${CAREERS_LINE1_MS + 960}ms` }}>
                Or email us at{' '}
                <a href="mailto:hr@nagarsoftwaresolution.com">hr@nagarsoftwaresolution.com</a>
              </p>

              {/* <div className="careers-hero__rail careers-hero__fade-in" style={{ animationDelay: `${CAREERS_LINE1_MS + 1040}ms` }}>
                {['Open roles year-round', 'Indore HQ', 'Growth over titles'].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div> */}
            </div>
          </div>

          <aside className="careers-hero__stage" aria-hidden="true">
            <p className="careers-hero__watermark">CAREERS</p>

            <div className="careers-hero__orbit">
              <span className="careers-hero__ring careers-hero__ring--1" />
              <span className="careers-hero__ring careers-hero__ring--2" />
              <span className="careers-hero__ring careers-hero__ring--3" />
              <span className="careers-hero__ring careers-hero__ring--4" />

              <span className="careers-hero__core">
                <span className="careers-hero__core-pulse" />
                <img
                  src="/mainLogo.png"
                  alt=""
                  className="careers-hero__core-logo"
                />
              </span>

              {CAREERS_ROLE_STREAM.map((role, i) => (
                <span key={role} className={`careers-hero__chip careers-hero__chip--${i + 1}`}>
                  <span className="careers-hero__chip-label">{role}</span>
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ===== WHY ENGINEERS STAY ===== */}
      <section className="careers-why">
        <div className="careers-why__inner">
          <div className="careers-why__head">
            <p className="careers-why__eyebrow">Why engineers stay</p>
            <h2 className="careers-why__title">Build things that matter</h2>
          </div>

          <div className="careers-why__grid" ref={whyGridRef}>
            {whyStay.map((item, i) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="careers-why__card"
                  style={{
                    ['--why-accent' as string]: item.accent,
                    ['--why-delay' as string]: `${0.1 + i * 0.14}s`,
                  }}
                >
                  <span className="careers-why__badge" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW WE HIRE — zig-zag process ===== */}
      <section id="process" className="careers-process">
        <div className="careers-process__inner">
          <div className="careers-process__head">
            <p className="careers-process__eyebrow">The process</p>
            <h2 className="careers-process__title">
              Industry Best Practices <span>to the Core</span>
            </h2>
            <p className="careers-process__lede">
              Resume review → technical conversation → practical round → offer. Clear steps, no black box.
            </p>
          </div>

          <ol className="careers-process__timeline" ref={processTimelineRef}>
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const side = i % 2 === 0 ? 'left' : 'right';
              return (
                <li
                  key={step.num}
                  className={`careers-process__row careers-process__row--${side}`}
                  style={{
                    ['--step-color' as string]: step.color,
                    ['--step-delay' as string]: `${0.12 + i * 0.18}s`,
                  }}
                >
                  <div className="careers-process__pill">
                    <div className="careers-process__icon-wrap">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <div className="careers-process__pill-body">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>

                  <div className="careers-process__rail" aria-hidden="true">
                    <span className="careers-process__dot" />
                  </div>

                  <div className="careers-process__label">
                    <span>STEP</span>
                    <strong>{step.num}</strong>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="careers-process__note">
            We move in days where we can, and we tell you where you stand at every step — the same
            transparency clients get.
          </p>
        </div>
      </section>

      {/* ===== NO OPENINGS NOTE ===== */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-2xl  shadow-sm reveal-up">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4 bounce-soft">
              <Eye size={24} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No openings listed. <span className="text-amber-600">That's deliberate.</span></h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-xl mx-auto">
              Roles fill fast and needs change with projects — so instead of a stale listings page, we read every resume that arrives and keep strong profiles active for the next match.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">Python</span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">React</span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">.NET</span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">Flutter</span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">DevOps</span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">AI/ML</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      {/* <section id="apply" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4 reveal-up">
              <span className="text-xs font-bold text-blue-700 tracking-wider">APPLY NOW</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 reveal-up" style={{ transitionDelay: '100ms' }}>Share your resume</h2>
            <p className="text-gray-500 mt-2 reveal-up" style={{ transitionDelay: '150ms' }}>Introduce yourself — we read every application.</p>
          </div>

          {formSubmitted ? (
            <div className="success-message p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <PartyPopper size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Resume received! 🎉</h3>
              <p className="text-gray-600 mt-2 max-w-md mx-auto">
                Every resume gets read. If there's a current or near-term match you'll hear within days; strong profiles stay active in our pipeline for future roles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">Please enter your name</p>}
                </div>
                <div>
                  <label className="form-label">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">Please enter your email</p>}
                </div>
              </div>

              <div>
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="form-label">Role / Skills <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`form-input ${errors.role ? 'error' : ''}`}
                  placeholder="e.g. React Developer, DevOps Engineer, AI/ML Specialist"
                />
                {errors.role && <p className="text-xs text-red-500 mt-1">Please enter your role or skills</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">LinkedIn (optional)</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="linkedin.com/in/your-profile"
                  />
                </div>
                <div>
                  <label className="form-label">GitHub (optional)</label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="github.com/your-username"
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Upload Resume <span className="text-xs text-gray-400">(PDF/DOC, max 5MB)</span></label>
                <div
                  className={`file-upload-area ${isDragging ? 'dragging' : ''}`}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  {fileName ? (
                    <div className="flex items-center justify-center gap-3">
                      <File size={20} className="text-blue-500" />
                      <span className="text-sm text-gray-700">{fileName}</span>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setFileName(null); }}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Upload size={28} className="text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Click or drag to upload</p>
                      <p className="text-xs text-gray-400 mt-1">PDF or DOC up to 5MB</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="form-label">Message (optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Tell us about yourself, your experience, or why you're interested..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className={`checkbox-custom mt-0.5 ${errors.consent ? 'border-red-500' : ''}`}
                />
                <div>
                  <label className="text-sm text-gray-600">
                    I consent to NSS storing my information for recruitment purposes.
                    <span className="text-red-500"> *</span>
                  </label>
                  {errors.consent && <p className="text-xs text-red-500 mt-1">Please confirm your consent</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B] transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Submit Application
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </section> */}

      {/* ===== FAQ ===== */}
      <FaqAccordionSection items={CAREER_FAQS} />

      {/* ===== BOTTOM ===== */}
      
    </div>
  );
}