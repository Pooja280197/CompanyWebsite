// IndustryFinance.tsx - Finance Industry Page
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Landmark,
  Shield,
  TrendingUp,
  Clock,
  Lock,
  Globe,
  Users,
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
  Wallet,
  CreditCard,
  BarChart3,
  Activity,
  Scan,
  Fingerprint,
  Droplet,
  Brain,
  Ambulance,
  Syringe,
  Bandage,
  Calendar,
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
  Gauge,
  Award,
  PieChart,
  Zap,
  FileCheck,
  AlertTriangle,
  RefreshCw,
  Eye,
  Key,
  Network,
  UserCheck,
} from 'lucide-react';
import { FaqAccordionSection } from '../FaqAccordionSection';
import { HERO_IMAGES } from '../../data/heroImages';
import { IndustryHero } from './IndustryHero';
import { IndustryChallenge } from './IndustryChallenge';
import { IndustryBuildCards } from './IndustryBuildCards';

const injectStyles = () => {
  const id = 'finance-industry-premium';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .finance-premium {
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
      background: linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #2563EB 100%);
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
      background: linear-gradient(90deg, #7C3AED, #6366F1, #2563EB);
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
      box-shadow: 0 8px 24px rgba(124,58,237,0.15);
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
      border-color: #7C3AED;
      color: #7C3AED;
      background: #f5f3ff;
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
      background: linear-gradient(to right, transparent, rgba(124,58,237,0.1), transparent);
      width: 80px;
      margin: 16px 0;
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

export default function IndustryFinance() {
  const wrapperRef = useReveal();

  useEffect(() => {
    injectStyles();
    document.title = 'Financial Software Development — NSS';
  }, []);

  const services = [
    { 
      icon: Landmark, 
      title: 'Secure Cloud Financial Platforms', 
      desc: 'Lending, payments, and account management with zero-trust architecture — from day one.', 
      color: '#7C3AED', 
      bg: '#F5F3FF',
      features: ['Lending', 'Payments', 'Zero-Trust'],
      number: '01'
    },
    { 
      icon: AlertTriangle, 
      title: 'Fraud Detection Systems', 
      desc: 'ML models flagging anomalies in real time — before losses materialize.', 
      color: '#DC2626', 
      bg: '#FEF2F2',
      features: ['ML Models', 'Real-Time', 'Anomaly Detection'],
      number: '02',
      link: '/ai-ml-development-services'
    },
    { 
      icon: BarChart3, 
      title: 'Real-Time Financial Analytics', 
      desc: 'Risk, exposure, and cash position on live data — no batch delays.', 
      color: '#059669', 
      bg: '#ECFDF5',
      features: ['Risk Analysis', 'Live Data', 'Cash Position'],
      number: '03'
    },
    { 
      icon: RefreshCw, 
      title: 'Financial Automation', 
      desc: 'Reconciliation, reporting, and compliance workflows that remove manual error.', 
      color: '#D97706', 
      bg: '#FFFBEB',
      features: ['Reconciliation', 'Automated Reporting', 'Compliance'],
      number: '04'
    },
    { 
      icon: Network, 
      title: 'Financial Integrations', 
      desc: 'Payment gateways, banking APIs, and accounting systems connected properly.', 
      color: '#2563EB', 
      bg: '#EFF6FF',
      features: ['Payment Gateways', 'Banking APIs', 'Accounting'],
      number: '05'
    },
  ];

  const securityFeatures = [
    {
      icon: Lock,
      label: 'Encryption in Transit & Rest',
      desc: 'Enterprise-grade security',
      color: '#7C3AED',
    },
    {
      icon: Key,
      label: 'Role-Based Access Control with Audit Trails',
      desc: 'Enterprise-grade security',
      color: '#6366F1',
    },
    {
      icon: Shield,
      label: 'DDoS Protection',
      desc: 'Enterprise-grade security',
      color: '#059669',
    },
    {
      icon: UserCheck,
      label: 'Zero-Trust Hardening',
      desc: 'Enterprise-grade security',
      color: '#2563EB',
    },
  ];

  return (
    <div className="finance-premium" ref={wrapperRef}>
      
      {/* ===== HERO ===== */}
      <IndustryHero
        image={HERO_IMAGES.finance}
        eyebrow="Finance & FinTech"
        accent="#60a5fa"
        title={<>Financial software where <em>trust</em> is the feature</>}
        description="Fintech software development with the two things finance can't compromise: security that survives audit, and accuracy that survives reconciliation."
        primaryCta={{ label: 'Discuss Your Build', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore Solutions', href: '#services' }}
        rail={['Audit-ready security', 'Reconciliation accuracy', 'Regulated workflows']}
      />

      {/* ===== THE CHALLENGE ===== */}
      <IndustryChallenge
        accent="#7C3AED"
        accentSoft="rgba(124, 58, 237, 0.14)"
        accentSoft2="rgba(99, 102, 241, 0.12)"
        title="The zero-tolerance domain"
        items={[
          { icon: Shield, label: 'Regulatory Risk' },
          { icon: AlertTriangle, label: 'Transaction Errors' },
          { icon: Lock, label: 'Security Gaps' },
          { icon: FileCheck, label: 'Audit Failures' },
        ]}
      >
        <p className="text-lg text-slate-600 leading-relaxed">
          A rounding error in e-commerce is a refund; in finance it's a regulator's letter.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Financial systems demand exactness — in transactions, in audit trails, in access control — and the <span className="font-semibold text-[#0F172A]">engineering culture</span> to sustain it.
        </p>
      </IndustryChallenge>

      {/* ===== WHAT WE BUILD ===== */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3 reveal-up">
              <span className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                <Sparkles size={18} className="text-[#7C3AED]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">Solutions</span>
            </div>
            
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              What we <span className="gradient-text">build</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 reveal-up" style={{ transitionDelay: '150ms' }}>
              5 core solutions engineered for finance — security and accuracy built in, never bolted on.
            </p>
            
            <div className="divider-gradient mx-auto reveal-up" style={{ transitionDelay: '200ms' }} />
          </div>

          <div className="reveal-up" style={{ transitionDelay: '220ms' }}>
            <IndustryBuildCards items={services} />
          </div>
{/* 
          <div className="mt-12 text-center reveal-up">
            <p className="text-sm text-slate-500 mb-4">Need a custom financial solution?</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] text-white font-medium hover:bg-[#1E293B] transition-all duration-300 hover:shadow-lg">
              Discuss Your Build
              <ArrowRight size={16} />
            </a>
          </div> */}
        </div>
      </section>

      {/* ===== SECURITY POSTURE ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED] mb-4 reveal-up">
              <span className="w-1 h-5 rounded-full bg-[#7C3AED]" />
              Security Posture
            </span>
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              Built for the <span className="gradient-text">audit</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-8 pt-3">
            {securityFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.label}
                  className="audit-card reveal-up"
                  style={{
                    ['--audit-accent' as string]: feature.color,
                    transitionDelay: `${i * 100 + 100}ms`,
                  }}
                >
                  <span className="audit-card__icon">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h4 className="audit-card__title">{feature.label}</h4>
                  <p className="audit-card__desc">{feature.desc}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-[#F5F3FF] border border-[#7C3AED]/10 reveal-up">
            <p className="text-sm text-slate-600 text-center">
              <Shield size={16} className="inline mr-2 text-[#7C3AED]" />
              The same discipline that took a high-traffic financial-grade platform to <span className="font-semibold text-[#0F172A]">99.99% uptime</span> with continuous threat monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROOF ===== */}
      {/* <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAFBFC]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED] mb-4 reveal-up">
                <span className="w-1 h-5 rounded-full bg-[#7C3AED]" />
                Proof
              </span>
              <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
                Where precision pays
              </h2>
              <div className="mt-6 space-y-4 reveal-up" style={{ transitionDelay: '150ms' }}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A fintech platform needed to process high-volume transactions with zero tolerance for error — and compliance across multiple jurisdictions.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We built a secure, cloud-native platform with real-time fraud detection, automated reconciliation, and audit-ready architecture — delivering <span className="font-semibold text-[#0F172A]">99.99% uptime</span> and fully passing regulatory review.
                </p>
              </div>
              <div className="mt-6 reveal-up" style={{ transitionDelay: '200ms' }}>
                <Link to="/case-studies/fintech-platform" className="inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] hover:text-[#6D28D9] transition-colors group">
                  Read the full case study
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 reveal-right" style={{ transitionDelay: '200ms' }}>
              <div className="p-6 rounded-2xl bg-[#F5F3FF] border border-[#7C3AED]/10 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center">
                  <Quote size={14} className="text-white" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic mt-2">
                  "Our investors asked about security posture. We showed them the architecture and the audit reports. That closed the round."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white text-sm font-bold">
                    JD
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">CTO</div>
                    <div className="text-xs text-slate-500">Fintech Platform</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: '99.99%', label: 'Uptime', color: '#7C3AED' },
                  { value: 'Zero', label: 'Breaches', color: '#059669' },
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
            q: "Can you build for regulatory compliance?",
            a: "We architect for it — audit trails, data residency, access control — and work with your compliance counsel on jurisdiction specifics. Compliance is scoped explicitly, never assumed."
          },
          {
            q: "Do you build fraud detection?",
            a: "Yes — anomaly-detection models on transaction streams, deployed with monitoring and retraining. See the AI practice: /ai-ml-development-services."
          },
          {
            q: "Startup MVP or bank-grade — which do you serve?",
            a: "Both, with the same security floor. Fintech startups get speed without cut corners; institutions get modernization without downtime."
          }
        ]}
      />

      {/* ===== CTA ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <Landmark size={14} className="text-[#7C3AED]" />
            <span className="text-xs font-bold text-white/80 tracking-widest">FINANCIAL SOFTWARE</span>
          </div>
          <h2 className="heading-lg text-white">
            Ready to build where
            <br />
            <span className="gradient-text">trust is non-negotiable?</span>
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
            Let's discuss your financial project. We'll show you what's possible.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0F172A] font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Discuss Your Build
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