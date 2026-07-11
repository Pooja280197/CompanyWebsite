// IndustryManufacturing.tsx - Manufacturing Industry Page
import React, { useEffect, useRef, useState } from 'react';
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
  X,
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
  const [activeService, setActiveService] = useState<number | null>(null);

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
      link: '/product/rexo-erp'
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
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ECFDF5] via-white to-[#F0FDFA]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#059669]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D9488]/5 rounded-full blur-3xl" />
          <Factory className="float-el top-[15%] right-[8%] text-[#059669]/10 w-20 h-20" />
          <Gauge className="float-el bottom-[25%] right-[12%] text-[#0D9488]/10 w-16 h-16" />
          <Cog className="float-el top-[35%] left-[85%] text-[#06B6D4]/10 w-14 h-14" />
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-8 reveal-up">
            <span className="w-10 h-10 rounded-full bg-[#059669]/10 flex items-center justify-center">
              <Factory size={16} className="text-[#059669]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Manufacturing</span>
            <span className="text-xs text-slate-300">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#059669]">Software Solutions</span>
          </div>

          <h1 className="heading-xl text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
            From shop floor to balance sheet,
            <br />
            <span className="gradient-text">one connected view</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mt-6 leading-relaxed reveal-up" style={{ transitionDelay: '200ms' }}>
            Manufacturing software solutions built by the team behind a $250K smart-factory platform and Rexo ERP — machines, materials, and money finally in the same system.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 reveal-up" style={{ transitionDelay: '300ms' }}>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B] transition-all duration-300 hover:shadow-xl hover:scale-105">
              Discuss Your Plant
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-[#0F172A] font-semibold hover:border-[#059669] hover:text-[#059669] transition-all duration-300">
              Explore Solutions
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 reveal-up" style={{ transitionDelay: '400ms' }}>
            {[
              { value: '$250K', label: 'Platform Value', icon: Award, color: '#059669' },
              { value: '40%', label: 'Cost Savings', icon: TrendingUp, color: '#0D9488' },
              { value: '30%', label: 'Faster Operations', icon: Gauge, color: '#2563EB' },
              { value: '7', label: 'ERP Modules', icon: Settings, color: '#D97706' },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 text-center hover:border-[#059669] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <stat.icon size={20} className="mx-auto mb-2" style={{ color: stat.color }} />
                <div className="text-2xl font-bold text-[#0F172A]">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE CHALLENGE ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#059669] mb-4 reveal-up">
                <span className="w-1 h-5 rounded-full bg-[#059669]" />
                The Challenge
              </span>
              <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
                What manual tracking really costs
              </h2>
              <div className="mt-6 space-y-4 reveal-up" style={{ transitionDelay: '150ms' }}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Downtime discovered after it happened. Dead stock financing nothing. Production planned on whiteboard optimism.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Manufacturers rarely lack data — they lack the connection between machine, inventory, and ledger that turns data into <span className="font-semibold text-[#0F172A]">control</span>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3 reveal-right" style={{ transitionDelay: '200ms' }}>
              {[
                { label: 'Unknown Downtime' },
                { label: 'Dead Stock Financing' },
                { label: 'Whiteboard Planning' },
                { label: 'Siloed Data' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-100 hover:shadow-md transition-all duration-300">
                  <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X size={14} className="text-red-500" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE BUILD ===== */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAFBFC] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#059669]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0D9488]/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4 reveal-up">
              <span className="w-10 h-10 rounded-xl bg-[#059669]/10 flex items-center justify-center">
                <Sparkles size={18} className="text-[#059669]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#059669]">Solutions</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
                What we <span className="gradient-text">build</span>
              </h2>
              <p className="text-slate-400 text-sm reveal-up max-w-sm" style={{ transitionDelay: '150ms' }}>
                5 core solutions engineered for manufacturing — each one built to connect machines, materials, and money.
              </p>
            </div>
            
            <div className="divider-gradient reveal-up" style={{ transitionDelay: '200ms' }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isActive = activeService === i;
              return (
                <div
                  key={i}
                  className="service-card-new"
                  style={{
                    borderColor: isActive ? service.color : '#f1f5f9',
                    boxShadow: isActive ? `0 8px 32px ${service.color}15` : '0 1px 3px rgba(0,0,0,0.04)',
                    opacity: 0,
                    transform: 'translateY(30px)',
                    animation: `fadeUp 0.6s ease ${i * 0.08 + 0.2}s forwards`,
                  }}
                  onMouseEnter={() => setActiveService(i)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <span className="card-number">{service.number}</span>

                  <div className="icon-wrap" style={{ backgroundColor: service.bg, color: service.color }}>
                    <Icon size={24} strokeWidth={1.75} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] pr-12">{service.title}</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">{service.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        <Check size={10} className="text-[#059669]" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div 
                    className={`mt-5 h-0.5 rounded-full transition-all duration-500 ${isActive ? 'w-16' : 'w-10'}`} 
                    style={{ background: service.color }} 
                  />

                  <Link to={service.link || '#'} className="mt-4 text-xs font-semibold text-slate-400 hover:text-[#059669] transition-colors duration-300 flex items-center gap-1 group">
                    Learn more
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center reveal-up">
            <p className="text-sm text-slate-500 mb-4">Need a custom manufacturing solution?</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] text-white font-medium hover:bg-[#1E293B] transition-all duration-300 hover:shadow-lg">
              Discuss Your Plant
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== PROOF ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#059669] mb-4 reveal-up">
                <span className="w-1 h-5 rounded-full bg-[#059669]" />
                Proof
              </span>
              <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
                Real impact in manufacturing
              </h2>
              <div className="mt-6 space-y-4 reveal-up" style={{ transitionDelay: '150ms' }}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A 100-year-old shipping manufacturer: manual tracking, no real-time monitoring, unstructured data.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our cloud-based platform delivered live dashboards, alerts, and predictive maintenance — <span className="font-semibold text-[#0F172A]">operations 30% faster, decisions 50% quicker, 40% cost savings</span>.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Separately, two embedded DevOps specialists cut another manufacturer's deployment times by <span className="font-semibold text-[#0F172A]">25%</span> while closing security gaps.
                </p>
              </div>
              <div className="mt-6 reveal-up" style={{ transitionDelay: '200ms' }}>
                <Link to="/case-studies/manufacturing-modernization" className="inline-flex items-center gap-2 text-sm font-semibold text-[#059669] hover:text-[#047857] transition-colors group">
                  Read the full case study
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 reveal-right" style={{ transitionDelay: '200ms' }}>
              <div className="p-6 rounded-2xl bg-[#ECFDF5] border border-[#059669]/10 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#059669] flex items-center justify-center">
                  <Quote size={14} className="text-white" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic mt-2">
                  "The visibility we now have is unprecedented. We caught a machine failure two days before it happened."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#059669] flex items-center justify-center text-white text-sm font-bold">
                    PM
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">Plant Manager</div>
                    <div className="text-xs text-slate-500">Shipping Manufacturer</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: '30%', label: 'Faster Ops', color: '#059669' },
                  { value: '40%', label: 'Cost Savings', color: '#0D9488' },
                  { value: '25%', label: 'Deployment Time', color: '#2563EB' },
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
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAFBFC]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#059669] mb-4 reveal-up">
              <span className="w-1 h-5 rounded-full bg-[#059669]" />
              FAQ
            </span>
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              Common questions, straight answers
            </h2>
          </div>

          <div className="space-y-3">
            {[
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
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-slate-100 rounded-xl bg-white p-5 hover:border-[#059669]/20 hover:shadow-sm transition-all duration-300"
                style={{
                  opacity: 0,
                  animation: `fadeUp 0.5s ease ${i * 0.08 + 0.2}s forwards`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#059669]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-[#059669]">Q</span>
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

      {/* ===== CTA ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0F172A]">
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
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0F172A] font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Discuss Your Plant
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