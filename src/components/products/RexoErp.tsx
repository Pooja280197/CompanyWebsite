// RexoERP.tsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Boxes,
  Users,
  Server,
  Database,
  Smartphone,
  Monitor,
  Award,
  FileText,
  MessageSquare,
  Layers,
  Network,
  Settings,
  BookOpen,
  Code,
  Rocket,
  CreditCard,
  CheckCircle,
  Package,
  ShoppingCart,
  TrendingUp,
  Factory,
  Wallet,
  Briefcase,
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import { CleanPlanHeroBackground } from './CleanPlanHeroBackground';
import { ProductHeroLaptop } from './ProductHeroLaptop';
import { ProductProblemSection } from './ProductProblemSection';
import { ProductModulesCarousel } from './ProductModulesCarousel';

const HERO_LETTER_INTERVAL = 78;

const REXO_HERO_LINES = [
  {
    words: [{ text: 'Run' }, { text: 'the' }, { text: 'whole' }, { text: 'factory' }],
    letterCount: 21,
  },
  {
    words: [{ text: 'from' }, { text: 'one' }, { text: 'screen' }],
    letterCount: 15,
    gradient: true,
  },
].map((line, i, arr) => ({
  ...line,
  startDelay: arr.slice(0, i).reduce((sum, l) => sum + l.letterCount, 0) * HERO_LETTER_INTERVAL,
}));

const MODULES = [
  {
    icon: Package,
    title: 'Inventory Management',
    desc: 'Products, raw materials, BOM, material inwards (MRN), quality control, slow/fast-moving analysis, stock statements, item ledger, inter-material transfer, automated email/SMS alerts, and a live dashboard.',
    benefits: 'Lower storage overhead, less dead stock, full transparency.',
    color: '#2563eb',
  },
  {
    icon: ShoppingCart,
    title: 'Purchase Management',
    desc: 'Vendor management, purchase requests, RFQs, vendor quotations, purchase orders, bill passing, pending orders, and purchase planning.',
    benefits: 'Procurement efficiency and financial control with data-driven decisions.',
    color: '#7c3aed',
  },
  {
    icon: TrendingUp,
    title: 'Sales Management',
    desc: 'Sales orders and approvals, FG stock planning, dispatch advice, delivery notes, invoice management, and automated alerts.',
    benefits: 'Optimal finished-goods planning and dispatch-to-invoice flow without gaps.',
    color: '#059669',
  },
  {
    icon: Factory,
    title: 'Production Management',
    desc: 'Batch planning, job cards, workstation and shop-floor management, process management, real-time cost analysis, FG management, job scheduling, and maintenance management.',
    benefits: 'Complete visual access to plant schedules, quality inspections enforced, demand forecasting.',
    color: '#d97706',
  },
  {
    icon: Users,
    title: 'Marketing & CRM',
    desc: 'Enquiry and lead management, funnel forecasting, team performance and daily activity, quotation generation, follow-ups, and lead analysis.',
    benefits: 'Lead-to-closure tracking and a better opportunity win ratio.',
    color: '#dc2626',
  },
  {
    icon: Wallet,
    title: 'Finance Management',
    desc: 'Accounts, cost centres, budget planning, cash book, petty cash, bank book, trial balance, P&L, and balance sheet.',
    benefits: 'Reconcilable statements in real time, one set of books instead of parallel accounting.',
    color: '#0891b2',
  },
  {
    icon: Briefcase,
    title: 'HR & Payroll (HRMS)',
    desc: 'Employee management, time and attendance, travel logs with expenses, recruitment, payroll and timesheets, compliance, leave and separation management, and government tax calculation.',
    color: '#8b5cf6',
  },
];

const TECH_SPECS = [
  { icon: Monitor, title: 'Web Application', line: 'Web-based (browser) application', color: '#2563eb' },
  { icon: Smartphone, title: 'Mobile Apps', line: 'Mobile apps for iOS & Android', color: '#7c3aed' },
  { icon: Settings, title: 'Customization', line: 'Customization as per requirement', color: '#059669' },
  { icon: Users, title: 'User Licenses', line: '25 default user licenses', color: '#d97706' },
  { icon: Server, title: 'Platform', line: 'Platform independent (Windows or Linux)', color: '#dc2626' },
  { icon: Database, title: 'Databases', line: 'Supported databases: MySQL, MSSQL, Oracle and more', color: '#0891b2' },
  { icon: FileText, title: 'Reports', line: 'Reports in PDF & Excel', color: '#8b5cf6' },
  { icon: MessageSquare, title: 'Alerts', line: 'SMS, Email & WhatsApp alerts', color: '#2563eb' },
  { icon: CreditCard, title: 'Payments', line: 'Payment gateway integration', color: '#059669' },
  { icon: Network, title: 'IoT Integration', line: 'Device/IoT integration for shop-floor data', color: '#7c3aed' },
];



const DEPLOYMENT_STEPS = [
  { name: 'Blueprint', detail: 'delta requirements', color: '#2563eb', icon: BookOpen },
  { name: 'SOW', detail: 'scope of work', color: '#3b82f6', icon: FileText },
  { name: 'Realization', detail: 'customization', color: '#7c3aed', icon: Settings },
  { name: 'Final Preparation', detail: 'data transfer', color: '#059669', icon: Database },
  { name: 'Go-Live & Support', color: '#d97706', icon: Rocket },
];



const WHY_REXO = [
  {
    icon: Settings,
    title: 'Customized to your process',
    desc: 'A smart industry solution configured around your workflow, not a template you bend to.',
    accent: '#2563eb',
  },
  {
    icon: Award,
    title: 'SME-honest pricing',
    desc: 'Enterprise capability without the enterprise licensing trap; 25 user licenses included by default.',
    accent: '#059669',
  },
  {
    icon: Users,
    title: 'Local implementation, direct support',
    desc: 'The team that customizes it is the team that answers the phone.',
    accent: '#7c3aed',
  },
  {
    icon: Code,
    title: 'Built by engineers who also build custom software',
    desc: "When you need an integration the big vendors call 'roadmap', we call it a work order.",
    accent: '#d97706',
  },
];

function RexoLaptopScreenContent() {
  return (
    <div className="cleanplan-laptop__panel">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-violet-500 flex items-center justify-center">
            <Boxes size={10} className="text-white" />
          </div>
          <span className="text-[10px] font-bold text-gray-700">Rexo ERP</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[7px] text-gray-500">Live</span>
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="grid grid-cols-3 gap-1.5">
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-blue-600">1,247</div>
            <div className="text-[7px] text-gray-400">Units in stock</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-emerald-600">83</div>
            <div className="text-[7px] text-gray-400">Orders today</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-amber-600">12</div>
            <div className="text-[7px] text-gray-400">In production</div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-blue-700">Production Queue</span>
            <span className="text-[8px] text-blue-600">View All</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white text-[8px]">
              <span className="text-gray-700">Batch #1023</span>
              <span className="text-emerald-600 font-medium">In progress</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white text-[8px]">
              <span className="text-gray-700">Batch #1024</span>
              <span className="text-amber-600 font-medium">QC pending</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white text-[8px]">
              <span className="text-gray-700">Batch #1025</span>
              <span className="text-blue-600 font-medium">Scheduled</span>
            </div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-violet-50 border border-violet-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-violet-700">Purchase & Dispatch</span>
            <span className="text-[8px] text-violet-600">Today</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white text-[8px]">
              <span className="text-gray-700">PO #4589</span>
              <span className="text-blue-600 font-medium">Shipped</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white text-[8px]">
              <span className="text-gray-700">PO #4590</span>
              <span className="text-emerald-600 font-medium">Received</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white text-[8px]">
              <span className="text-gray-700">Invoice #1024</span>
              <span className="text-amber-600 font-medium">Pending</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-violet-600">7</div>
            <div className="text-[7px] text-gray-400">Modules</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-blue-600">25</div>
            <div className="text-[7px] text-gray-400">Users</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-center">
            <div className="text-sm font-bold text-emerald-600">99.9%</div>
            <div className="text-[7px] text-gray-400">Uptime</div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-emerald-700">Finance Snapshot</span>
            <span className="text-[8px] text-emerald-600">Live</span>
          </div>
          <div className="h-1.5 rounded-full bg-white overflow-hidden">
            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
          </div>
          <div className="mt-1.5 flex justify-between text-[8px] text-gray-500">
            <span>Collections on track</span>
            <span>78% closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <header className="webdev-hero cleanplan-hero relative overflow-hidden px-6">
        <CleanPlanHeroBackground />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
                {REXO_HERO_LINES.map((line, i) => (
                  <span
                    key={line.words.map((w) => w.text).join('-')}
                    className="block w-fit max-w-full"
                    style={{ marginBottom: i < REXO_HERO_LINES.length - 1 ? '0.08em' : undefined }}
                  >
                    <ScrollTextReveal
                      tag="span"
                      align="left"
                      animate="words"
                      textColor="#0f172a"
                      letterInterval={HERO_LETTER_INTERVAL}
                      startDelay={line.startDelay}
                      gradientText={line.gradient}
                      waveGradientStops={line.gradient ? ['#2563eb', '#8b5cf6', '#059669'] : undefined}
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
                Rexo ERP brings inventory, purchase, sales, production, CRM, finance, and payroll into one system — customized to your process, live on web and mobile. Built for manufacturing, trading, and services businesses.
              </p>

              <div className="a3 flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:brightness-105 hover:shadow-2xl hover:shadow-blue-500/35 transition-all duration-300"
                >
                  Book a Free Demo
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="#modules"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-slate-300 text-slate-800 font-medium shadow-md shadow-slate-900/10 hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
                >
                  Explore Modules
                  <ChevronDown size={18} />
                </Link>
              </div>

              {/* <div className="a4 flex flex-wrap gap-6 mt-8 text-sm text-slate-500">
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
                  Customizable
                </span>
              </div> */}
            </div>

            <ProductHeroLaptop
              contentKey="rexo-erp"
              badge={(
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                    <Layers size={15} className="text-violet-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">7 modules</div>
                    <div className="text-[9px] text-gray-500">One integrated system</div>
                  </div>
                </div>
              )}
            >
              <RexoLaptopScreenContent />
            </ProductHeroLaptop>
          </div>
        </div>
      </header>

      <ProductProblemSection
        accent="blue"
        heading="The spreadsheet ceiling"
        paragraphs={[
          'Every growing manufacturer hits it: stock counted in one file, purchase orders in another, production planned on a whiteboard, and accounts reconciled at month-end by someone who deserves better.',
          "The information exists — it just can't talk to itself. Orders slip, dead stock accumulates, and decisions wait for reports that take days to assemble.",
        ]}
        solution="Rexo ERP replaces that patchwork with one integrated system and a 360-degree view: product planning, development, manufacturing, sales, marketing, and HR management connected — so a sales order updates stock, triggers production planning, and lands in the ledger without anyone re-typing it."
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        imageAlt="Spreadsheets and manual processes"
      />

      {/* Seven modules */}
      <section id="modules" className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <CheckCircle size={12} className="text-blue-500" />
              <span className="text-xs font-bold text-blue-700 tracking-wider">MODULES</span>
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
                { text: 'Seven' },
                { text: 'modules,' },
                { text: 'one' },
                { text: 'truth' },
              ]}
            />
            <p className="text-[#555] text-base leading-relaxed mt-4 max-w-[36rem] mx-auto">
              Every module connected to the same live data — no re-entry, no reconciliation gaps.
            </p>
            {/* <p className="mt-2 text-xs text-gray-400" aria-hidden="true">
              Drag, scroll, or use arrows to browse modules →
            </p> */}
          </div>

          <div className="sr-from-bottom">
            <ProductModulesCarousel modules={MODULES} />
          </div>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="bg-gray-50 px-6 py-24" aria-labelledby="tech-heading">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1">
              <Layers size={12} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider text-violet-700">SPECIFICATIONS</span>
            </div>
            <ScrollTextReveal
              id="tech-heading"
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
                { text: 'Technical' },
                { text: 'specifications' },
              ]}
            />
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-x-4 gap-y-10 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_SPECS.map((spec, i) => {
              const Icon = spec.icon;
              const lastRowCenter =
                i === 8 ? 'lg:col-start-2' : i === 9 ? 'lg:col-start-3' : '';

              return (
                <div
                  key={spec.title}
                  className={`sr-from-bottom sr-d${Math.min(i + 1, 10)} group relative mx-auto flex h-full w-full max-w-[280px] flex-col ${lastRowCenter}`}
                >
                  <div
                    className="absolute -top-5 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-white to-slate-50 shadow-lg shadow-slate-300/50 transition-transform duration-300 group-hover:scale-105"
                    style={{ color: spec.color }}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </div>

                  <div className="flex h-full min-h-[148px] flex-col rounded-2xl border border-slate-200/90 bg-white px-5 pb-5 pt-8 text-center shadow-md transition-all duration-500 group-hover:-translate-y-1">
                    <h3 className="text-sm font-semibold text-gray-900">{spec.title}</h3>
                    <div
                      className="mx-auto mt-1.5 mb-2 h-0.5 w-8 shrink-0 rounded-full transition-all duration-300 group-hover:w-12"
                      style={{ background: spec.color }}
                    />
                    <p className="flex-1 text-xs leading-relaxed text-gray-500">{spec.line}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment your way */}
      <section className="relative overflow-hidden bg-gray-50 px-6 py-24" aria-labelledby="deploy-heading">
        <div
          className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-emerald-100/35 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-[1200px]">
          <div className="mb-12 text-center md:mb-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1">
              <span className="text-xs font-bold tracking-wider text-emerald-700">DEPLOYMENT</span>
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
          </div>

          <div className="sr-from-bottom rexo-deploy__panel mx-auto max-w-5xl">
            <p className="rexo-deploy__intro">
              <span className="font-semibold text-blue-600">On-premises</span> for full control,{' '}
              <span className="font-semibold text-violet-600">cloud</span> for zero infrastructure, or{' '}
              <span className="font-semibold text-emerald-600">hybrid</span> where compliance demands both.
            </p>

            <div className="rexo-deploy__divider" aria-hidden="true">
              <span />
            </div>

            <p className="rexo-deploy__phase-label">Implementation runs in five phases</p>

            <div className="rexo-deploy__track">
              <div className="rexo-deploy__track-line" aria-hidden="true" />
              <div className="rexo-deploy__rail">
                {DEPLOYMENT_STEPS.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.name} className="rexo-deploy__step-wrap">
                      <div
                        className="rexo-deploy__step"
                        style={{ borderTopColor: step.color }}
                      >
                        <div
                          className="rexo-deploy__step-icon"
                          style={{
                            color: step.color,
                            background: `color-mix(in srgb, ${step.color} 10%, white)`,
                            borderColor: `color-mix(in srgb, ${step.color} 22%, white)`,
                          }}
                        >
                          <Icon size={18} strokeWidth={1.75} />
                        </div>
                        <span className="rexo-deploy__step-name">{step.name}</span>
                        {step.detail && (
                          <span className="rexo-deploy__step-detail">({step.detail})</span>
                        )}
                      </div>
                      {i < DEPLOYMENT_STEPS.length - 1 && (
                        <span className="rexo-deploy__arrow" aria-hidden="true">
                          <ChevronRight size={16} strokeWidth={2.25} />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="rexo-deploy__closing">
              so you always know which phase your rollout is in and what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* Why manufacturers pick Rexo */}
      <section className="bg-white px-6 py-24" aria-labelledby="why-heading">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mb-14 text-center md:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-3 py-1">
              <span className="text-xs font-bold tracking-wider text-purple-700">WHY REXO</span>
            </div>
            <ScrollTextReveal
              id="why-heading"
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.15em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.85rem, 3.2vw, 2.85rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                maxWidth: '100%',
              }}
              words={[
                { text: 'Why' },
                { text: 'manufacturers' },
                { text: 'pick' },
                { text: 'Rexo' },
                { text: 'over' },
                { text: 'the' },
                { text: 'giants' },
              ]}
            />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div
              className="pointer-events-none absolute bottom-6 left-[1.15rem] top-6 hidden w-px bg-gradient-to-b from-blue-200 via-violet-200 to-amber-200 md:block"
              aria-hidden="true"
            />

            <ul className="space-y-0">
              {WHY_REXO.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className={`sr-from-bottom sr-d${i + 1} group relative border-b border-slate-100 py-7 last:border-b-0 md:py-8`}
                  >
                    <span
                      className="absolute left-3 top-9 hidden h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm md:block"
                      style={{ backgroundColor: item.accent }}
                      aria-hidden="true"
                    />

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5 md:pl-14">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${item.accent} 12%, white)`,
                          color: item.accent,
                        }}
                      >
                        <Icon size={22} strokeWidth={1.75} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-base leading-relaxed text-slate-600 md:text-[1.02rem]">
                          <span className="font-semibold text-slate-900">{item.title}</span>
                          <span className="mx-2 text-slate-300" aria-hidden="true">
                            —
                          </span>
                          {item.desc}
                        </p>
                      </div>

                      <div
                        className="hidden h-px w-16 shrink-0 self-center opacity-60 lg:block"
                        style={{
                          background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-emerald-600 to-blue-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[900px] text-center">
          <div className="sr">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Ready to run your factory from one screen?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-blue-100">
              See Rexo ERP in action. Walk through your process, see the modules that matter to you, and get a fixed quote.
            </p>
            <Link
              to="/contact-us"
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
            to="/contact-us"
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