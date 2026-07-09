// RexoERP.tsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Boxes,
  Users,
  Cloud,
  Server,
  Database,
  Smartphone,
  Monitor,
  Zap,
  Award, 
  FileText,
  MessageSquare,
  Layers, 
  Network,
  Settings, 
  BookOpen,
  
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80';

// const MODULES = [
//   {
//     icon: Package,
//     title: 'Inventory Management',
//     desc: 'Products, raw materials, BOM, material inwards (MRN), quality control, stock analysis, item ledger, inter-material transfer, automated alerts, live dashboard.',
//     benefits: 'Lower storage overhead, less dead stock, full transparency.',
//     accent: '#2563eb',
//     bg: '#dbeafe',
//   },
//   {
//     icon: ShoppingCart,
//     title: 'Purchase Management',
//     desc: 'Vendor management, purchase requests, RFQs, quotations, purchase orders, bill passing, pending orders, purchase planning.',
//     benefits: 'Procurement efficiency and financial control with data-driven decisions.',
//     accent: '#7c3aed',
//     bg: '#ede9fe',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Sales Management',
//     desc: 'Sales orders and approvals, FG stock planning, dispatch advice, delivery notes, invoice management, automated alerts.',
//     benefits: 'Optimal finished-goods planning and dispatch-to-invoice flow without gaps.',
//     accent: '#059669',
//     bg: '#d1fae5',
//   },
//   {
//     icon: Factory,
//     title: 'Production Management',
//     desc: 'Batch planning, job cards, workstation and shop-floor management, process management, real-time cost analysis, FG management, job scheduling, maintenance.',
//     benefits: 'Complete visual access to plant schedules, quality inspections enforced, demand forecasting.',
//     accent: '#d97706',
//     bg: '#fef3c7',
//   },
//   {
//     icon: Users,
//     title: 'Marketing & CRM',
//     desc: 'Enquiry and lead management, funnel forecasting, team performance, quotation generation, follow-ups, lead analysis.',
//     benefits: 'Lead-to-closure tracking and a better opportunity win ratio.',
//     accent: '#dc2626',
//     bg: '#fee2e2',
//   },
//   {
//     icon: Wallet,
//     title: 'Finance Management',
//     desc: 'Accounts, cost centres, budget planning, cash book, petty cash, bank book, trial balance, P&L, balance sheet.',
//     benefits: 'Reconcilable statements in real time, one set of books instead of parallel accounting.',
//     accent: '#0891b2',
//     bg: '#cffafe',
//   },
//   {
//     icon: Briefcase,
//     title: 'HR & Payroll (HRMS)',
//     desc: 'Employee management, time and attendance, travel logs, recruitment, payroll and timesheets, compliance, leave management, government tax calculation.',
//     benefits: 'Complete workforce management from hire to retire.',
//     accent: '#8b5cf6',
//     bg: '#ede9fe',
//   },
// ];

const TECH_SPECS = [
  { icon: Monitor, label: 'Web-based application', value: 'Browser-based access' },
  { icon: Smartphone, label: 'Mobile apps', value: 'iOS & Android' },
  { icon: Settings, label: 'Customization', value: 'As per requirement' },
  { icon: Users, label: 'Default licenses', value: '25 user licenses' },
  { icon: Server, label: 'Platform', value: 'Windows or Linux' },
  { icon: Database, label: 'Databases', value: 'MySQL, MSSQL, Oracle & more' },
  { icon: FileText, label: 'Reports', value: 'PDF & Excel' },
  { icon: MessageSquare, label: 'Alerts', value: 'SMS, Email & WhatsApp' },
  { icon: CreditCard, label: 'Payments', value: 'Gateway integration' },
  { icon: Network, label: 'IoT Integration', value: 'Device/shop-floor data' },
];



const DEPLOYMENT_PHASES = [
  {
    phase: 'Blueprint',
    label: 'Delta requirements',
    desc: 'Map your process, identify gaps, and define customizations.',
    icon: BookOpen,
  },
  {
    phase: 'SOW',
    label: 'Scope of work',
    desc: 'Fixed scope, timeline, and cost — signed before work begins.',
    icon: FileText,
  },
  {
    phase: 'Realization',
    label: 'Customization',
    desc: 'Screens, workflows, reports, and approvals configured to your process.',
    icon: Settings,
  },
  {
    phase: 'Final Preparation',
    label: 'Data transfer',
    desc: 'Migration, validation, and user training before go-live.',
    icon: Database,
  },
  {
    phase: 'Go-Live & Support',
    label: 'Launch + ongoing',
    desc: 'Live deployment with hands-on support and post-launch optimization.',
    icon: Rocket,
  },
];



const WHY_REXO = [
  {
    icon: Settings,
    title: 'Customized to your process',
    desc: 'Configured around your workflow, not a template you bend to.',
    accent: '#2563eb',
  },
  {
    icon: Award,
    title: 'SME-honest pricing',
    desc: 'Enterprise capability without the licensing trap — 25 users included.',
    accent: '#059669',
  },
  {
    icon: Users,
    title: 'Local implementation',
    desc: 'The team that customizes it is the team that answers the phone.',
    accent: '#7c3aed',
  },
  {
    icon: Code,
    title: 'Built by engineers',
    desc: 'When you need an integration, we call it a work order — not a roadmap.',
    accent: '#d97706',
  },
];

import { Code, Rocket, CreditCard } from 'lucide-react';
import SevenModules from './SevenModules';

const FAQS = [
  {
    q: 'How long does Rexo ERP implementation take?',
    a: 'Depends on modules and data volume: focused rollouts go live in weeks, full multi-module implementations in a few months — phase by phase, with the go-live date fixed in the SOW.',
  },
  {
    q: 'Can Rexo be customized to our exact process?',
    a: 'That\'s the design principle. Customization as per requirement is standard — screens, workflows, reports, and approvals shaped in the Realization phase.',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing follows modules, users, and deployment model. Ask for a quote with the demo — like everything we sell, it\'s fixed and itemized, with 25 user licenses in the default package.',
  },
  {
    q: 'Can it run alongside our existing accounting software?',
    a: 'Yes — integrate and migrate gradually, or replace at cutover. The Blueprint phase maps exactly which systems stay, sync, or retire.',
  },
  {
    q: 'Is our data safe if we choose cloud deployment?',
    a: 'Encrypted in transit and at rest, role-based access, audit trails, and backup/disaster recovery. On-premises remains available where policy requires it.',
  },
  {
    q: 'Do you provide training?',
    a: 'Included in Go-Live & Support — role-based training for operators, managers, and admins, plus documentation your team keeps.',
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

export default function RexoERP() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Rexo ERP — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Run the whole factory from one screen. Rexo ERP brings inventory, purchase, sales, production, CRM, finance, and payroll into one integrated system.',
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
    script.id = 'rexo-erp-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('rexo-erp-faq-schema')?.remove();
    };
  }, []);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero - Full screen with gradient overlay and floating elements */}
      <header className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Modern manufacturing facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-900/80" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Boxes size={16} className="text-blue-400" />
                <span className="text-xs font-bold text-blue-200 tracking-widest">REXO ERP</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Run the whole factory
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                  from one screen
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-lg mt-6">
                Rexo ERP brings inventory, purchase, sales, production, CRM, finance, and payroll into one system —
                customized to your process, live on web and mobile.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Book a Free Demo
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="#modules"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Explore Modules
                  <ChevronDown size={18} />
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  25 user licenses included
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  Web + Mobile
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400" />
                  Customizable
                </span>
              </div>
            </div>

            {/* Hero right - floating dashboard preview */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/20 p-6 shadow-2xl animate-float">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Boxes size={20} className="text-blue-400" />
                      <span className="text-white font-semibold text-sm">Rexo ERP</span>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-blue-400">1,247</div>
                      <div className="text-[10px] text-slate-400">Units in stock</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-emerald-400">83</div>
                      <div className="text-[10px] text-slate-400">Orders today</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-amber-400">12</div>
                      <div className="text-[10px] text-slate-400">In production</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-xs text-slate-300">Batch #1023</span>
                      <span className="text-xs text-emerald-400">In progress</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-xs text-slate-300">PO #4589</span>
                      <span className="text-xs text-blue-400">Shipped</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-xs text-slate-300">Invoice #1024</span>
                      <span className="text-xs text-amber-400">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/50 animate-scroll-dot" />
          </div>
        </div>
      </header>

      {/* The spreadsheet ceiling - Split with visual */}
      <section className="py-24 px-6 overflow-hidden" aria-labelledby="ceiling-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="sr-from-left order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-200 mb-4">
                <span className="text-xs font-bold text-amber-700 tracking-wider">THE PROBLEM</span>
              </div>
              <ScrollTextReveal
                id="ceiling-heading"
                tag="h2"
                align="left"
                className="w-full"
                wordGap="0.2em"
                style={{
                  fontFamily: 'Inter,sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  letterSpacing: '0.02em',
                  lineHeight: 1.2,
                  maxWidth: '100%',
                }}
                words={[
                  { text: 'The' },
                  { text: 'spreadsheet' },
                  { text: 'ceiling' },
                ]}
              />
              <p className="text-[#555] text-base leading-relaxed mt-4 max-w-lg">
                Every growing manufacturer hits it: stock counted in one file, purchase orders in another,
                production planned on a whiteboard, and accounts reconciled at month-end by someone who deserves better.
              </p>
              <p className="text-[#555] text-base leading-relaxed mt-3 max-w-lg">
                The information exists — it just can't talk to itself. Orders slip, dead stock accumulates,
                and decisions wait for reports that take days to assemble.
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <p className="text-sm text-blue-800 font-medium flex items-start gap-2">
                  <Zap size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Rexo ERP replaces that patchwork with one integrated system and a 360-degree view.</span>
                </p>
              </div>
            </div>

            <div className="sr-from-right order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Spreadsheets and manual processes"
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seven modules - Interactive grid with hover states */}
   <SevenModules />

      {/* Technical Specifications - Table layout */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" aria-labelledby="tech-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 mb-4">
              <span className="text-xs font-bold text-blue-300 tracking-wider">SPECIFICATIONS</span>
            </div>
            <ScrollTextReveal
              id="tech-heading"
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.2em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.2,
                maxWidth: '100%',
              }}
              words={[
                { text: 'Technical' },
                { text: 'specifications' },
              ]}
              textColor="#ffffff"
            />
            <p className="text-slate-400 text-base leading-relaxed mt-4 max-w-[40rem] mx-auto">
              Enterprise-grade technology stack built for manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_SPECS.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.04}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">{spec.label}</div>
                    <div className="text-sm text-white font-medium">{spec.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dashboard preview placeholder */}
          <div className="mt-12 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Boxes size={20} className="text-blue-400" />
              <span className="text-white font-semibold">Rexo ERP Dashboard Preview</span>
              <span className="text-xs text-slate-400 ml-auto">Production Management</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-bold text-blue-400">1,247</div>
                <div className="text-xs text-slate-400">Active Batches</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-bold text-emerald-400">83%</div>
                <div className="text-xs text-slate-400">Machine Utilization</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-bold text-amber-400">12</div>
                <div className="text-xs text-slate-400">Pending Jobs</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-bold text-purple-400">98.7%</div>
                <div className="text-xs text-slate-400">Quality Pass Rate</div>
              </div>
            </div>
            <div className="mt-4 text-center text-xs text-slate-500">
              Dashboard showing batch tracking, machine status, and quality metrics
            </div>
          </div>
        </div>
      </section>

      {/* Deployment your way */}
      <section className="py-24 px-6" aria-labelledby="deploy-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-4">
              <span className="text-xs font-bold text-emerald-700 tracking-wider">DEPLOYMENT</span>
            </div>
            <ScrollTextReveal
              id="deploy-heading"
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.2em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.2,
                maxWidth: '100%',
              }}
              words={[
                { text: 'Deployment' },
                { text: 'your' },
                { text: 'way' },
              ]}
            />
            <p className="text-[#555] text-base leading-relaxed mt-4 max-w-[40rem] mx-auto">
              On-premises, cloud, or hybrid — choose what fits your compliance and control needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="sr-from-center p-8 rounded-3xl bg-white border-2 border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <Server size={40} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">On-Premises</h3>
              <p className="text-sm text-gray-600">Full control, your infrastructure, your security policies.</p>
            </div>
            <div className="sr-from-center p-8 rounded-3xl bg-white border-2 border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center" style={{ transitionDelay: '0.1s' }}>
              <Cloud size={40} className="text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud</h3>
              <p className="text-sm text-gray-600">Zero infrastructure, scale on demand, pay for what you use.</p>
            </div>
            <div className="sr-from-center p-8 rounded-3xl bg-white border-2 border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center" style={{ transitionDelay: '0.2s' }}>
              <Layers size={40} className="text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hybrid</h3>
              <p className="text-sm text-gray-600">Best of both — cloud elasticity with on-prem compliance.</p>
            </div>
          </div>

          {/* Phases */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-emerald-400 hidden md:block" />
            <div className="space-y-6">
              {DEPLOYMENT_PHASES.map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={phase.phase}
                    className="sr-from-left flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-blue-600">{phase.phase}</div>
                        <div className="text-xs text-gray-500">{phase.label}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{phase.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why manufacturers pick Rexo */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="why-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 border border-purple-200 mb-4">
              <span className="text-xs font-bold text-purple-700 tracking-wider">WHY REXO</span>
            </div>
            <ScrollTextReveal
              id="why-heading"
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.2em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.2,
                maxWidth: '100%',
              }}
              words={[
                { text: 'Why' },
                { text: 'manufacturers' },
                { text: 'pick' },
                { text: 'Rexo' },
              ]}
            />
            <p className="text-[#555] text-base leading-relaxed mt-4 max-w-[40rem] mx-auto">
              Built for SMEs who need enterprise capability without the enterprise price tag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_REXO.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="sr-from-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                  >
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-slate-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto w-full text-center">
          <div className="sr">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to run your factory from one screen?
            </h2>
            <p className="text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto mb-8">
              See Rexo ERP in action. Walk through your process, see the modules that matter to you, and get a fixed quote.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book a Free Demo
              <ArrowRight size={18} />
            </Link>
            <p className="text-sm text-blue-300 mt-4">Live demo. No commitment. Just clarity.</p>
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
              wordGap="0.2em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.2,
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
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              25 user licenses included
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Web + Mobile
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-emerald-500" />
              Fixed pricing
            </span>
          </div>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book a Free Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes scroll-dot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0; }
        }
        .animate-scroll-dot {
          animation: scroll-dot 2s ease-in-out infinite;
        }
      `}</style>
    </article>
  );
}