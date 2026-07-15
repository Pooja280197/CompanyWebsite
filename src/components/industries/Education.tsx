// IndustryEducation.tsx - Education Industry Page
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  Clock,
  Lock,
  Globe,
  Building2,
  ChevronRight,
  PlayCircle,
  FileText,
  Layers,
  Quote,
  Briefcase,
  Database,
  Server,
  Rocket,
  School,
  Monitor,
  Video,
  Award,
  TrendingUp,
  Shield,
  Gauge,
  BarChart3,
  UserCheck,
  Activity,
  Scan,
  Brain,
  Ambulance,
  Syringe,
  Bandage,
  Mail,
  Phone,
  MapPin,
  Check,
  ArrowUpRight,
  Circle,
  Dot,
  Plus,
  Minus,
  Star,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  CalendarCheck2,
  Laptop,
  BookMarked,
  PieChart,
  Zap,
  FileCheck,
  RefreshCw,
  Eye,
  Key,
  Network,
  LayoutDashboard,
  CreditCard,
} from 'lucide-react';
import { FaqAccordionSection } from '../FaqAccordionSection';
import { HERO_IMAGES } from '../../data/heroImages';
import { IndustryHero } from './IndustryHero';
import { IndustryChallenge } from './IndustryChallenge';
import { IndustryBuildCards } from './IndustryBuildCards';

const injectStyles = () => {
  const id = 'education-industry-premium';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .education-premium {
      background: #FAFBFC;
      color: #0F172A;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .font-editorial {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
    }

    .heading-xl {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
      font-size: clamp(48px, 7vw, 80px);
      line-height: 1.05;
      letter-spacing: -0.03em;
    }

    .heading-lg {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
      font-size: clamp(36px, 5vw, 56px);
      line-height: 1.1;
      letter-spacing: -0.02em;
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

    .reveal-left {
      opacity: 0;
      transform: translateX(-60px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-left.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .reveal-right {
      opacity: 0;
      transform: translateX(60px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-right.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .reveal-scale {
      opacity: 0;
      transform: scale(0.95);
      transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-scale.visible {
      opacity: 1;
      transform: scale(1);
    }

    .text-reveal-line {
      overflow: hidden;
      display: block;
    }
    .text-reveal-line > span {
      display: inline-block;
      transform: translateY(110%);
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .text-reveal-line.visible > span {
      transform: translateY(0);
    }

    .gradient-text {
      background: linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .service-card-new {
      position: relative;
      background: white;
      border-radius: 24px;
      padding: 32px;
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      cursor: default;
      border: 1px solid #f1f5f9;
      overflow: hidden;
    }
    .service-card-new::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #D97706, #F59E0B, #FBBF24);
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    .service-card-new:hover::before {
      opacity: 1;
    }
    .service-card-new:hover {
      transform: translateY(-8px);
      border-color: transparent;
      box-shadow: 0 24px 64px rgba(15,23,42,0.08), 0 8px 24px rgba(15,23,42,0.04);
    }
    .service-card-new .icon-wrap {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .service-card-new:hover .icon-wrap {
      transform: scale(1.05);
      box-shadow: 0 8px 24px rgba(217,119,6,0.15);
    }
    .service-card-new .card-number {
      position: absolute;
      top: 16px;
      right: 20px;
      font-size: 48px;
      font-weight: 700;
      font-family: 'Instrument Serif', Georgia, serif;
      color: #f1f5f9;
      line-height: 1;
      transition: color 0.3s ease;
      user-select: none;
    }
    .service-card-new:hover .card-number {
      color: #e2e8f0;
    }

    .feature-tag {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 500;
      background: #f8fafc;
      border: 1px solid #f1f5f9;
      color: #475569;
      transition: all 0.3s ease;
    }
    .feature-tag:hover {
      border-color: #D97706;
      color: #D97706;
      background: #fffbeb;
    }

    .float-el {
      animation: floatEl 6s ease-in-out infinite;
      position: absolute;
      pointer-events: none;
    }
    .float-el:nth-child(2) { animation-delay: 1.5s; }
    .float-el:nth-child(3) { animation-delay: 3s; }

    @keyframes floatEl {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-16px) rotate(4deg); }
    }

    .divider-gradient {
      height: 2px;
      background: linear-gradient(to right, transparent, rgba(217,119,6,0.1), transparent);
      width: 80px;
      margin: 16px 0;
    }

    .credibility-pill {
      background: white;
      border-radius: 16px;
      padding: 20px;
      border: 1px solid #f1f5f9;
      transition: all 0.3s ease;
    }
    .credibility-pill:hover {
      border-color: #D97706;
      box-shadow: 0 8px 24px rgba(217,119,6,0.08);
      transform: translateY(-2px);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .text-reveal-line');
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
  return ref;
}

function TextReveal({ lines, className = '' }: { lines: string[]; className?: string }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="text-reveal-line" style={{ transitionDelay: `${i * 120}ms` }}>
          <span>{line}</span>
        </span>
      ))}
    </span>
  );
}

export default function IndustryEducation() {
  const wrapperRef = useReveal();

  useEffect(() => {
    injectStyles();
    document.title = 'Education Software Development — NSS';
  }, []);

  const services = [
    { 
      icon: BookOpen, 
      title: 'E-Learning Platforms & LMS', 
      desc: 'Courses, assessments, and progress tracking built for engagement — not just content delivery.', 
      color: '#D97706', 
      bg: '#FFFBEB',
      features: ['Courses', 'Assessments', 'Progress Tracking'],
      number: '01'
    },
    { 
      icon: School, 
      title: 'Campus Management (ERP)', 
      desc: 'Our Education ERP covers admissions to exams — the entire student lifecycle in one system.', 
      color: '#F59E0B', 
      bg: '#FEF3C7',
      features: ['Admissions', 'Exams', 'Student Lifecycle'],
      number: '02',
      link: '/erp-solutions-for-education'
    },
    { 
      icon: Video, 
      title: 'Virtual Classrooms', 
      desc: 'Live and recorded learning tied to the academic record — attendance, content, assessment.', 
      color: '#2563EB', 
      bg: '#EFF6FF',
      features: ['Live Learning', 'Recorded Content', 'Academic Integration'],
      number: '03'
    },
    { 
      icon: Users, 
      title: 'Student & Parent Portals', 
      desc: 'The communication layer that empties the front-office queue — transparency at scale.', 
      color: '#059669', 
      bg: '#ECFDF5',
      features: ['Student Access', 'Parent Communication', 'Transparency'],
      number: '04'
    },
    { 
      icon: Rocket, 
      title: 'EdTech Product Engineering', 
      desc: 'For startups building the next platform — full product discipline from concept to scale.', 
      color: '#7C3AED', 
      bg: '#F5F3FF',
      features: ['Product Strategy', 'Development', 'Scaling'],
      number: '05',
      link: '/product-engineering'
    },
  ];

  return (
    <div className="education-premium" ref={wrapperRef}>
      
      {/* ===== HERO ===== */}
      <IndustryHero
        image={HERO_IMAGES.education}
        eyebrow="Education Software"
        accent="#fbbf24"
        title={<>Learning experiences that <em>outlast the login page</em></>}
        description="Education software development from a team that ships its own campus product — e-learning platforms, digital classrooms, and the administrative backbone behind them."
        primaryCta={{ label: 'Discuss Your Project', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore Solutions', href: '#services' }}
        rail={['Campus ERP', 'Digital classrooms', 'Academic ops']}
      />

      {/* ===== THE CHALLENGE ===== */}
      <IndustryChallenge
        accent="#D97706"
        accentSoft="rgba(217, 119, 6, 0.14)"
        accentSoft2="rgba(245, 158, 11, 0.12)"
        title="Digital education's real test"
        items={[
          { icon: Users, label: 'Enrollment Friction' },
          { icon: CreditCard, label: 'Fee Management Errors' },
          { icon: Calendar, label: 'Disconnected Attendance' },
          { icon: Server, label: 'Exam-Day Crashes' },
        ]}
      >
        <p className="text-lg text-slate-600 leading-relaxed">
          Anyone can stream a lecture. The hard part is everything around it.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Enrollment that doesn't lose students, fee systems parents trust, attendance that syncs to academics, and platforms that <span className="font-semibold text-[#0F172A]">survive exam-day traffic</span>.
        </p>
      </IndustryChallenge>

      {/* ===== WHAT WE BUILD ===== */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3 reveal-up">
              <span className="w-10 h-10 rounded-xl bg-[#D97706]/10 flex items-center justify-center">
                <Sparkles size={18} className="text-[#D97706]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97706]">Solutions</span>
            </div>
            
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              What we <span className="gradient-text">build</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 reveal-up" style={{ transitionDelay: '150ms' }}>
              5 core solutions engineered for education — built with the discipline of a live campus product.
            </p>
            
            <div className="divider-gradient mx-auto reveal-up" style={{ transitionDelay: '200ms' }} />
          </div>

          <div className="reveal-up" style={{ transitionDelay: '220ms' }}>
            <IndustryBuildCards items={services} />
          </div>

          {/* <div className="mt-12 text-center reveal-up">
            <p className="text-sm text-slate-500 mb-4">Need a custom education solution?</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] text-white font-medium hover:bg-[#1E293B] transition-all duration-300 hover:shadow-lg">
              Discuss Your Project
              <ArrowRight size={16} />
            </a>
          </div> */}
        </div>
      </section>

      {/* ===== PRODUCT-BACKED CREDIBILITY ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D97706] mb-4 reveal-up">
              <span className="w-1 h-5 rounded-full bg-[#D97706]" />
              Product-Backed Credibility
            </span>
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              We ship what we <span className="gradient-text">sell</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="credibility-pill reveal-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFFBEB] flex items-center justify-center flex-shrink-0">
                  <School size={24} className="text-[#D97706]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Education ERP Product</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    We maintain a full Education ERP product — the domain's edge cases are already engineered, not discovered on your budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="credibility-pill reveal-up" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Production Proven</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Concession structures, batch progressions, transport routes, exam moderation — all built and battle-tested.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROOF ===== */}
      {/* <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAFBFC]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D97706] mb-4 reveal-up">
                <span className="w-1 h-5 rounded-full bg-[#D97706]" />
                Proof
              </span>
              <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
                From campus to cloud
              </h2>
              <div className="mt-6 space-y-4 reveal-up" style={{ transitionDelay: '150ms' }}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A multi-campus institution struggled with disconnected systems — admissions, fees, and attendance in separate silos.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We deployed our Education ERP with integrated virtual classrooms and parent portals — <span className="font-semibold text-[#0F172A]">unifying the entire student lifecycle</span> and cutting front-office queries by 60%.
                </p>
              </div>
              <div className="mt-6 reveal-up" style={{ transitionDelay: '200ms' }}>
                <Link to="/case-studies/education-erp" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D97706] hover:text-[#B45309] transition-colors group">
                  Read the full case study
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 reveal-right" style={{ transitionDelay: '200ms' }}>
              <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-[#D97706]/10 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#D97706] flex items-center justify-center">
                  <Quote size={14} className="text-white" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic mt-2">
                  "Our parents used to call the office weekly. Now they check the portal. The difference is night and day."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D97706] flex items-center justify-center text-white text-sm font-bold">
                    RK
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">Principal</div>
                    <div className="text-xs text-slate-500">Multi-Campus Institution</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: '60%', label: 'Less Queries', color: '#D97706' },
                  { value: '100%', label: 'Unified Records', color: '#059669' },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center hover:border-slate-200 transition-all duration-300">
                    <div className="text-xl font-bold" style={{ color: item.color }}>{item.value}</div>
                    <div className="text-[10px] text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ===== FAQ ===== */}
      <FaqAccordionSection
        items={[
          {
            q: "Do you serve schools, colleges, or edtech startups?",
            a: "All three — institutions typically start from Education ERP; startups engage product engineering for custom platforms."
          },
          {
            q: "Can you handle exam-season traffic spikes?",
            a: "That's a cloud-architecture problem we solve deliberately — auto-scaling designed for the calendar's known peaks. See /cloud-devops."
          },
          {
            q: "Does your platform support online learning?",
            a: "Yes — virtual classrooms integrate with the academic backbone so attendance, content, and assessment stay one record."
          }
        ]}
      />

      {/* ===== CTA ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <GraduationCap size={14} className="text-[#D97706]" />
            <span className="text-xs font-bold text-white/80 tracking-widest">EDUCATION SOFTWARE</span>
          </div>
          <h2 className="heading-lg text-white">
            Ready to build learning experiences
            <br />
            <span className="gradient-text">that outlast the login?</span>
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
            Let's discuss your education project. We'll show you what's possible.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0F172A] font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Discuss Your Project
              <ArrowRight size={18} />
            </a>
            <a href="/case-studies" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-4">No obligation. Just a conversation.</p>
        </div>
      </section>
    </div>
  );
}