// IndustryManufacturing.tsx - Manufacturing Industry Page
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Factory,
  Gauge,
  Boxes,
  Truck,
  FileCheck,
  TrendingUp,
  Shield,
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
  Cpu,
  Wrench,
  ClipboardCheck,
  UserCheck,
  Activity,
  Scan,
  Cog,
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
  Warehouse,
  Package,
  GanttChart,
  Settings,
  LineChart,
  Zap,
  Award,
  BarChart3,
} from 'lucide-react';
import { FaqAccordionSection } from '../FaqAccordionSection';
import { ServiceProofSection } from '../service-pages/ServiceProofSection';
import { HERO_IMAGES } from '../../data/heroImages';
import { IndustryHero } from './IndustryHero';
import { IndustryChallenge } from './IndustryChallenge';
import { IndustryBuildCards } from './IndustryBuildCards';

const injectStyles = () => {
  const id = 'manufacturing-industry-premium';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .manufacturing-premium {
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
      background: linear-gradient(135deg, #059669 0%, #0D9488 50%, #06B6D4 100%);
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
      background: linear-gradient(90deg, #059669, #0D9488, #06B6D4);
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
      box-shadow: 0 8px 24px rgba(5,150,105,0.15);
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
      border-color: #059669;
      color: #059669;
      background: #ecfdf5;
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
      background: linear-gradient(to right, transparent, rgba(5,150,105,0.1), transparent);
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

export default function IndustryManufacturing() {
  const wrapperRef = useReveal();

  useEffect(() => {
    injectStyles();
    document.title = 'Manufacturing Software Development — NSS';
  }, []);

  const services = [
    { 
      icon: Cpu, 
      title: 'Industrial IoT Platforms', 
      desc: 'Live machine monitoring with predictive maintenance — know downtime before it happens.', 
      color: '#059669', 
      bg: '#ECFDF5',
      features: ['Live Monitoring', 'Predictive Maintenance', 'Machine Health'],
      number: '01',
      link: '/iot-solutions'
    },
    { 
      icon: Settings, 
      title: 'Manufacturing ERP', 
      desc: 'Rexo ERP\'s seven modules — from inventory and BOM to payroll, all connected.', 
      color: '#0D9488', 
      bg: '#F0FDFA',
      features: ['Inventory', 'BOM', 'Payroll'],
      number: '02',
      link: '/rexo-erp'
    },
    { 
      icon: GanttChart, 
      title: 'Production & Shop-Floor Systems', 
      desc: 'Batch planning, job cards, workstation management, and real-time costing.', 
      color: '#2563EB', 
      bg: '#EFF6FF',
      features: ['Batch Planning', 'Job Cards', 'Real-Time Costing'],
      number: '03'
    },
    { 
      icon: Truck, 
      title: 'Supply Chain Visibility', 
      desc: 'Purchase to dispatch with automated alerts — know where everything is.', 
      color: '#D97706', 
      bg: '#FFFBEB',
      features: ['Purchase', 'Dispatch', 'Automated Alerts'],
      number: '04'
    },
    { 
      icon: FileCheck, 
      title: 'GST & Compliance-Ready', 
      desc: 'E-invoicing and Indian tax workflows handled natively — no surprises at filing.', 
      color: '#DC2626', 
      bg: '#FEF2F2',
      features: ['E-Invoicing', 'Tax Workflows', 'Compliance'],
      number: '05'
    },
  ];

  return (
    <div className="manufacturing-premium" ref={wrapperRef}>
      
      {/* ===== HERO ===== */}
      <IndustryHero
        image={HERO_IMAGES.manufacturing}
        eyebrow="Manufacturing Software"
        accent="#34d399"
        title={<>From shop floor to balance sheet, <em>one connected view</em></>}
        description="Manufacturing software solutions built by the team behind a $250K smart-factory platform and Rexo ERP — machines, materials, and money finally in the same system."
        primaryCta={{ label: 'Discuss Your Plant', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore Solutions', href: '#services' }}
        rail={['Smart factory platforms', 'Rexo ERP', 'Shop-floor visibility']}
      />

      {/* ===== THE CHALLENGE ===== */}
      <IndustryChallenge
        accent="#059669"
        accentSoft="rgba(5, 150, 105, 0.14)"
        accentSoft2="rgba(13, 148, 136, 0.14)"
        title="What manual tracking really costs"
        items={[
          { icon: Gauge, label: 'Unknown Downtime' },
          { icon: Package, label: 'Dead Stock Financing' },
          { icon: ClipboardCheck, label: 'Whiteboard Planning' },
          { icon: Database, label: 'Siloed Data' },
        ]}
      >
        <p className="text-lg text-slate-600 leading-relaxed">
          Downtime discovered after it happened. Dead stock financing nothing. Production planned on whiteboard optimism.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Manufacturers rarely lack data — they lack the connection between machine, inventory, and ledger that turns data into <span className="font-semibold text-[#0F172A]">control</span>.
        </p>
      </IndustryChallenge>

      {/* ===== WHAT WE BUILD ===== */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3 reveal-up">
              <span className="w-10 h-10 rounded-xl bg-[#059669]/10 flex items-center justify-center">
                <Sparkles size={18} className="text-[#059669]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#059669]">Solutions</span>
            </div>
            
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              What we <span className="gradient-text">build</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 reveal-up" style={{ transitionDelay: '150ms' }}>
              5 core solutions engineered for manufacturing — each one built to connect machines, materials, and money.
            </p>
            
            <div className="divider-gradient mx-auto reveal-up" style={{ transitionDelay: '200ms' }} />
          </div>

          <div className="reveal-up" style={{ transitionDelay: '220ms' }}>
            <IndustryBuildCards items={services} />
          </div>
{/* 
          <div className="mt-12 text-center reveal-up">
            <p className="text-sm text-slate-500 mb-4">Need a custom manufacturing solution?</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] text-white font-medium hover:bg-[#1E293B] transition-all duration-300 hover:shadow-lg">
              Discuss Your Plant
              <ArrowRight size={16} />
            </a>
          </div> */}
        </div>
      </section>

      {/* ===== PROOF ===== */}
      <ServiceProofSection
        intro={
          <>
            A 100-year-old shipping manufacturer: manual tracking, no real-time monitoring,
            unstructured data. Our cloud-based platform delivered live dashboards, alerts, and
            predictive maintenance — <strong>operations 30% faster, decisions 50% quicker, 40%
            cost savings</strong>. Separately, two embedded DevOps specialists cut another
            manufacturer&apos;s deployment times by <strong>25%</strong> while closing security gaps.
          </>
        }
        stats={[
          { value: '30%', label: 'Faster ops' },
          { value: '40%', label: 'Cost savings' },
          { value: '25%', label: 'Faster deployments' },
        ]}
      />

      {/* ===== FAQ ===== */}
      <FaqAccordionSection
        items={[
          {
            q: "We're a small factory. Is this overkill?",
            a: "No — Rexo ERP is priced and scoped for SMEs, and IoT pilots start on the machines you already run. The right first step is usually smaller than vendors pretend."
          },
          {
            q: "Can you work with our existing machines and sensors?",
            a: "Usually — standard industrial protocols (Modbus, OPC-UA, MQTT) cover most installed equipment. We audit before recommending new hardware."
          },
          {
            q: "ERP and IoT together or separately?",
            a: "Either. They compound — machine data feeding ERP planning is where the 40%-class savings live — but each stands alone, and phasing is normal."
          }
        ]}
      />

      {/* ===== CTA ===== */}
      {/* <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <Factory size={14} className="text-[#059669]" />
            <span className="text-xs font-bold text-white/80 tracking-widest">MANUFACTURING SOFTWARE</span>
          </div>
          <h2 className="heading-lg text-white">
            Ready to connect your shop floor
            <br />
            <span className="gradient-text">to your balance sheet?</span>
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
            Let's discuss your manufacturing project. We'll show you what's possible.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0F172A] font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Discuss Your Plant
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