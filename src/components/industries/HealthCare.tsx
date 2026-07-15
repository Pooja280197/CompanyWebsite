// IndustryHealthcare.tsx - Redesigned "What We Build" Section Only
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Heart,
  Stethoscope,
  TrendingUp,
  Shield,
  Zap,
  MoveRight,
  Award,
  BarChart3,
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
  FileHeart,
  Pill,

  Microscope,
  ClipboardCheck,
  UserCheck,
  Activity,
  Scan,
  Bone,
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
} from 'lucide-react';
import { FaqAccordionSection } from '../FaqAccordionSection';
import { ServiceProofSection } from '../service-pages/ServiceProofSection';
import { HERO_IMAGES } from '../../data/heroImages';
import { IndustryHero } from './IndustryHero';
import { IndustryChallenge } from './IndustryChallenge';
import { IndustryBuildCards } from './IndustryBuildCards';

const injectStyles = () => {
    const id = 'healthcare-industry-premium-v2';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .healthcare-premium {
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

    /* ── Reveal ── */
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

    /* ── Text Reveal ── */
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
      background: linear-gradient(135deg, #2563EB 0%, #6366F1 50%, #06B6D4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── REDESIGNED SERVICE CARD ── */
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
      background: linear-gradient(90deg, #2563EB, #6366F1, #06B6D4);
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
      box-shadow: 0 8px 24px rgba(37,99,235,0.15);
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
      border-color: #2563EB;
      color: #2563EB;
      background: #eff6ff;
    }

    /* ── FLOATING ELEMENTS ── */
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

    /* ── DIVIDER ── */
    .divider-gradient {
      height: 2px;
      background: linear-gradient(to right, transparent, rgba(37,99,235,0.1), transparent);
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

export default function IndustryHealthcare() {
  const wrapperRef = useReveal();

  useEffect(() => {
    injectStyles();
    document.title = 'Healthcare Software Development — NSS';
  }, []);

  const services = [
    { 
      icon: ClipboardCheck, 
      title: 'Patient Management Systems', 
      desc: 'Registration to discharge on one record, with complete patient history and care coordination.', 
      color: '#2563EB', 
      bg: '#EFF6FF',
      features: ['Unified Records', 'Care Coordination', 'Patient History'],
      number: '01'
    },
    { 
      icon: CalendarCheck2, 
      title: 'Hospital Operations Software', 
      desc: 'Appointments, wards, billing, and inventory connected in a single operational system.', 
      color: '#6366F1', 
      bg: '#EEF2FF',
      features: ['Appointments', 'Ward Management', 'Billing'],
      number: '02'
    },
    { 
      icon: Database, 
      title: 'Health Data Engineering', 
      desc: 'The pipelines that make clinical reporting trustworthy and data-driven decisions possible.', 
      color: '#059669', 
      bg: '#ECFDF5',
      features: ['ETL Pipelines', 'Analytics', 'Reporting'],
      number: '03'
    },
    { 
      icon: Globe, 
      title: 'Telehealth & Patient Portals', 
      desc: 'Access without the waiting room — secure virtual care and patient engagement.', 
      color: '#D97706', 
      bg: '#FFFBEB',
      features: ['Virtual Visits', 'Patient Access', 'Secure Messaging'],
      number: '04'
    },
    { 
      icon: Lock, 
      title: 'Compliance-Aware Architecture', 
      desc: 'Encryption, access control, and audit trails designed for health-data regulation.', 
      color: '#DC2626', 
      bg: '#FEF2F2',
      features: ['Encryption', 'Access Control', 'Audit Trails'],
      number: '05'
    },
  ];

  return (
    <div className="healthcare-premium" ref={wrapperRef}>
      
      {/* ===== HERO ===== */}
      <IndustryHero
        image={HERO_IMAGES.healthcare}
        eyebrow="Healthcare Software"
        accent="#38bdf8"
        title={
          <>
            Software where the stakes are <em>patients</em>, not just deadlines
          </>
        }
        description="Healthcare software development with the discipline the domain demands: patient data handled properly, workflows built around clinicians, systems that don't fail at 2 a.m."
        primaryCta={{ label: 'Discuss Your Project', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore Solutions', href: '#services' }}
        rail={['HIPAA-aware architecture', 'Clinical workflows', 'Always-on reliability']}
      />

      {/* ===== THE CHALLENGE ===== */}
      <IndustryChallenge
        accent="#2563EB"
        accentSoft="rgba(37, 99, 235, 0.14)"
        accentSoft2="rgba(14, 165, 233, 0.12)"
        title={
          <>
            The fragmentation tax in <span className="gradient-text">care delivery</span>
          </>
        }
        accentQuote="Clinics rarely lack software — they lack one connected view of the patient journey."
        items={[
          {
            icon: Database,
            label: 'Fragmented Patient Data',
            desc: 'Records split across registration, lab, and billing',
          },
          {
            icon: ClipboardCheck,
            label: 'Manual Workflows',
            desc: 'Duplicate entry, hallway handoffs, and paper gaps',
          },
          {
            icon: Shield,
            label: 'Compliance Risk',
            desc: 'Audit trails and access control left inconsistent',
          },
          {
            icon: Clock,
            label: 'Care Delays',
            desc: 'Staff time spent hunting data instead of treating',
          },
        ]}
      >
        <p className="text-lg text-slate-600 leading-relaxed">
          Patient data scattered across registration, lab, pharmacy, and billing systems
          doesn&apos;t just waste staff time — it{' '}
          <span className="font-semibold text-[#0F172A]">delays care</span>.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Every duplicate entry is a chance for error; every system that won&apos;t talk to
          another is a hallway phone call.
        </p>
      </IndustryChallenge>

      {/* ===== WHAT WE BUILD ===== */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3 reveal-up">
              <span className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
                <Sparkles size={18} className="text-[#2563EB]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">Solutions</span>
            </div>

            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              What we <span className="gradient-text">build</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 reveal-up" style={{ transitionDelay: '150ms' }}>
              5 core solutions engineered for healthcare — each one built with the discipline the domain demands.
            </p>

            <div className="divider-gradient mx-auto reveal-up" style={{ transitionDelay: '200ms' }} />
          </div>

          <div className="reveal-up" style={{ transitionDelay: '220ms' }}>
            <IndustryBuildCards items={services} />
          </div>

          {/* <div className="mt-12 text-center reveal-up">
            <p className="text-sm text-slate-500 mb-4">Need a custom healthcare solution?</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] text-white font-medium hover:bg-[#1E293B] transition-all duration-300 hover:shadow-lg">
              Discuss Your Project
              <ArrowRight size={16} />
            </a>
          </div> */}
        </div>
      </section>

      {/* ===== PROOF ===== */}
      <ServiceProofSection
        intro={
          <>
            A healthcare provider faced care delays from fragmented patient data and outdated
            management systems. We modernized patient management with integrated database
            solutions and streamlined workflows — delivering{' '}
            <strong>30% operational efficiency improvement</strong>, faster and more accurate
            care delivery, and measurably better satisfaction for staff and patients.
          </>
        }
        stats={[
          { value: '30%', label: 'Efficiency gain' },
          { value: 'Faster', label: 'Care delivery' },
          { value: 'Higher', label: 'Staff & patient satisfaction' },
        ]}
      />

      {/* ===== FAQ ===== */}
      <FaqAccordionSection
        items={[
          {
            q: 'Do you build HIPAA-compliant systems?',
            a: 'We build HIPAA-aware architecture — encryption, access controls, audit logging, BAA-compatible hosting — and work with your compliance officer on certification specifics.',
          },
          {
            q: 'Can you integrate with existing hospital systems?',
            a: 'Usually yes — HL7/FHIR interfaces and database-level integration are standard scoping questions in healthcare engagements.',
          },
          {
            q: 'Do you work with clinics or only hospitals?',
            a: 'Both, plus diagnostics, telehealth startups, and health-data companies — the discipline scales in both directions.',
          },
        ]}
      />

      {/* ===== CTA ===== */}
      {/* <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <Heart size={14} className="text-[#2563EB]" />
            <span className="text-xs font-bold text-white/80 tracking-widest">HEALTHCARE SOFTWARE</span>
          </div>
          <h2 className="heading-lg text-white">
            Ready to build software where
            <br />
            <span className="gradient-text">patients matter most?</span>
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
            Let's discuss your healthcare project. We'll show you what's possible.
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
      </section> */}
    </div>
  );
}