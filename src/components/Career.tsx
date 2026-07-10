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
  const [heroVisible, setHeroVisible] = useState(false);
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

  useEffect(() => {
    injectStyles();
    document.title = 'Careers — NSS';
    setTimeout(() => setHeroVisible(true), 100);
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
      title: 'Discover', 
      desc: 'We read every resume that arrives.',
      icon: Eye,
      color: '#2563EB',
      bg: '#EFF6FF',
    },
    { 
      num: '02', 
      title: 'Planning', 
      desc: 'A real technical discussion, not trivia.',
      icon: Target,
      color: '#7C3AED',
      bg: '#F5F3FF',
    },
    { 
      num: '03', 
      title: 'Design & Dev', 
      desc: 'Practical round relevant to actual work.',
      icon: Code,
      color: '#059669',
      bg: '#ECFDF5',
    },
    { 
      num: '04', 
      title: 'Testing', 
      desc: 'We move in days where we can.',
      icon: Shield,
      color: '#D97706',
      bg: '#FFFBEB',
    },
  ];

  const whyStay = [
    { icon: Layers, title: 'Variety that compounds', desc: 'One quarter on IoT, the next on RAG pipelines or Rexo ERP modules.' },
    { icon: Target, title: 'Real Ownership', desc: 'Small teams, direct client exposure, your name on the outcome.' },
    { icon: TrendingUp, title: 'Continuous Upskilling', desc: 'Skill development is policy, not poster — our clients pay for current.' },
  ];

  const funFacts = [
    { emoji: '🚀', text: 'Products running on 3 continents' },
    { emoji: '💎', text: 'AI that judges diamonds' },
    { emoji: '🏭', text: 'Factory platforms cutting costs 40%' },
    { emoji: '☕', text: 'Built here, from Indore' },
  ];

  return (
    <div className="careers-vibrant" ref={wrapperRef}>
      
      {/* ===== HERO - JOYFUL ===== */}
      <section className="relative min-h-[70vh] flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#EEF2FF]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#06B6D4]/5 rounded-full blur-3xl" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <Factory className="float-icon text-[#2563EB]" style={{ width: '60px', height: '60px', top: '12%', left: '5%' }} />
          <Diamond className="float-icon text-[#6366F1]" style={{ width: '50px', height: '50px', top: '8%', right: '10%', animationDelay: '1.5s' }} />
          <Building className="float-icon text-[#059669]" style={{ width: '55px', height: '55px', bottom: '20%', left: '8%', animationDelay: '2.5s' }} />
          <Cloud className="float-icon text-[#06B6D4]" style={{ width: '45px', height: '45px', top: '45%', right: '5%', animationDelay: '3.5s' }} />
          <Code className="float-icon text-[#7C3AED]" style={{ width: '50px', height: '50px', bottom: '30%', right: '15%', animationDelay: '4.5s' }} />
          <Brain className="float-icon text-[#D97706]" style={{ width: '45px', height: '45px', top: '25%', left: '12%', animationDelay: '5.5s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div 
            className="flex items-center gap-3 mb-6"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}
          >
            <span className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
              <Sparkles size={16} className="text-[#2563EB]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Careers</span>
            <span className="text-xs text-slate-300">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">Join Us</span>
          </div>

          <h1 
            className="font-editorial text-5xl md:text-6xl lg:text-7xl text-[#0F172A] leading-[1.05] tracking-tight"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.1s',
            }}
          >
            Do the work you'll
            <br />
            <span className="gradient-text">want to talk about</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-slate-500 max-w-2xl mt-6 leading-relaxed"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.2s',
            }}
          >
            Factory platforms that cut costs 40%. AI that judges diamonds. Products running businesses on three continents. Built here, from Indore.
          </p>

          {/* Fun Facts Row */}
          <div 
            className="flex flex-wrap gap-4 mt-6"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.3s',
            }}
          >
            {funFacts.map((fact, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <span>{fact.emoji}</span>
                {fact.text}
              </span>
            ))}
          </div>

          <div 
            className="flex flex-wrap gap-4 mt-8"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.4s',
            }}
          >
            <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B] transition-all duration-300 hover:shadow-xl hover:scale-105">
              Share Your Resume
              <ArrowRight size={18} />
            </a>
            <a href="#process" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-[#0F172A] font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300">
              Our Process
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY ENGINEERS STAY ===== */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4 reveal-up">
              <span className="text-xs font-bold text-blue-700 tracking-wider">WHY ENGINEERS STAY</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 reveal-up" style={{ transitionDelay: '100ms' }}>Build things that matter</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyStay.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    opacity: 0,
                    animation: `fadeUp 0.6s ease ${i * 0.08 + 0.2}s forwards`,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW WE HIRE - CIRCLE STEPS (Like Image) ===== */}
      <section id="process" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-4 reveal-up">
              <span className="text-xs font-bold text-emerald-700 tracking-wider">HOW WE HIRE</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 reveal-up" style={{ transitionDelay: '100ms' }}>
              Industry Best Practices <span className="gradient-text">to the Core</span>
            </h2>
            <p className="text-gray-500 mt-2 reveal-up" style={{ transitionDelay: '150ms' }}>
              Our design approach is to simplify. We embrace creating something.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="step-card group text-center p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    opacity: 0,
                    animation: `fadeUp 0.5s ease ${i * 0.1 + 0.2}s forwards`,
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div 
                      className="step-circle"
                      style={{ 
                        background: step.bg, 
                        color: step.color,
                      }}
                    >
                      <span className="step-number">{step.num}</span>
                      <div className="step-icon" style={{ color: step.color }}>
                        <Icon size={14} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Decorative text like in image */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We denounce righteous indignation and dislike men who beguiled. 
              At this step, we cater to requirement backed web services.
            </p>
          </div>
        </div>
      </section>

      {/* ===== NO OPENINGS NOTE ===== */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 shadow-sm reveal-up">
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
      <section id="apply" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50/50">
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
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-4 reveal-up">
              <span className="text-xs font-bold text-gray-700 tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 reveal-up" style={{ transitionDelay: '100ms' }}>Common questions, straight answers</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Do you hire freshers or only experienced engineers?',
                a: 'Both — experienced engineers for client-facing depth, and promising freshers for structured growth paths. The bar is trajectory, not just history.'
              },
              {
                q: 'Is remote work possible?',
                a: 'Role-dependent: many positions are Indore-based for team density, some are hybrid or remote. State your preference in the form — it\'s a conversation, not a filter.'
              },
              {
                q: 'I sent my resume. When will I hear back?',
                a: 'Every resume gets read. If there\'s a current or near-term match you\'ll hear within days; strong profiles stay active in our pipeline for future roles.'
              }
            ].map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#2563EB]/20 hover:shadow-sm transition-all duration-300"
                style={{
                  opacity: 0,
                  animation: `fadeUp 0.5s ease ${i * 0.08 + 0.2}s forwards`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-blue-600">Q</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] text-sm">{faq.q}</h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM ===== */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-slate-400">© 2025 Nagar Software Solutions. All rights reserved.</p>
          <p className="text-xs text-slate-600 mt-1">
            308 Shagun Arcade, Plot No. 8, PU-4, Scheme No. 54, AB Road, Vijay Nagar, Indore (M.P.) 452010, India
          </p>
        </div>
      </section>
    </div>
  );
}