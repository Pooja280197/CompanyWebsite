// IndustryTravel.tsx - Travel Industry Page
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Plane,
  Hotel,
  Calendar,
  Users,
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
  Search,
  MapPin,
  Luggage,
  Ticket,
  TrendingUp,
  Award,
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
  MapPin as MapPinIcon,
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
  PalmTree,
  Umbrella,
  Compass,
  Ship,
  Train,
  Bus,
  Car,
  Bike,
  Footprints,
  Zap,
  Crown,
  Sun,
  Cloud,
  Wind,
  Eye,
  RefreshCw,
  DollarSign,
  FileCheck,
  CreditCard,
} from 'lucide-react';
import { FaqAccordionSection } from '../FaqAccordionSection';
import { HERO_IMAGES } from '../../data/heroImages';
import { IndustryHero } from './IndustryHero';
import { IndustryChallenge } from './IndustryChallenge';
import { IndustryBuildCards } from './IndustryBuildCards';

const injectStyles = () => {
  const id = 'travel-industry-premium';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .travel-premium {
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
      background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #14B8A6 100%);
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
      background: linear-gradient(90deg, #0EA5E9, #06B6D4, #14B8A6);
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
      box-shadow: 0 8px 24px rgba(14,165,233,0.15);
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
      border-color: #0EA5E9;
      color: #0EA5E9;
      background: #eff6ff;
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
      background: linear-gradient(to right, transparent, rgba(14,165,233,0.1), transparent);
      width: 80px;
      margin: 16px 0;
    }

    .pillar-card {
      background: white;
      border-radius: 16px;
      padding: 20px;
      border: 1px solid #f1f5f9;
      transition: all 0.3s ease;
    }
    .pillar-card:hover {
      border-color: #0EA5E9;
      box-shadow: 0 8px 24px rgba(14,165,233,0.08);
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

export default function IndustryTravel() {
  const wrapperRef = useReveal();

  useEffect(() => {
    injectStyles();
    document.title = 'Travel Software Development — NSS';
  }, []);

  const services = [
    { 
      icon: Ticket, 
      title: 'Booking Engines', 
      desc: 'Availability, pricing, and confirmation flows that hold under load — no lost bookings.', 
      color: '#0EA5E9', 
      bg: '#F0F9FF',
      features: ['Availability', 'Dynamic Pricing', 'Confirmation'],
      number: '01'
    },
    { 
      icon: Search, 
      title: 'Travel Portals & Aggregators', 
      desc: 'Search across inventory sources with response times users tolerate — fast and relevant.', 
      color: '#06B6D4', 
      bg: '#ECFEFF',
      features: ['Multi-Source Search', 'Fast Response', 'Aggregation'],
      number: '02'
    },
    { 
      icon: Calendar, 
      title: 'Itinerary & Operations Management', 
      desc: 'Bookings, vendors, and schedules on one operational view — no double-bookings.', 
      color: '#14B8A6', 
      bg: '#F0FDFA',
      features: ['Itineraries', 'Vendor Management', 'Schedules'],
      number: '03'
    },
    { 
      icon: DollarSign, 
      title: 'Payment & Cancellation Workflows', 
      desc: 'The unglamorous flows that decide reviews — handled with care and clarity.', 
      color: '#D97706', 
      bg: '#FFFBEB',
      features: ['Payments', 'Cancellations', 'Refunds'],
      number: '04'
    },
    { 
      icon: Gauge, 
      title: 'Auto-Scaling Cloud Architecture', 
      desc: 'Capacity that follows the calendar — design for the spike, not the average.', 
      color: '#7C3AED', 
      bg: '#F5F3FF',
      features: ['Auto-Scaling', 'Load Balancing', 'Capacity Planning'],
      number: '05',
      link: '/cloud-devops'
    },
  ];

  return (
    <div className="travel-premium" ref={wrapperRef}>
      
      {/* ===== HERO ===== */}
      <IndustryHero
        image={HERO_IMAGES.travel}
        eyebrow="Travel Software"
        accent="#22d3ee"
        title={<>Software that survives <em>peak season</em></>}
        description="Travel software development for the industry where demand spikes are the business model — booking engines, portals, and operations systems built for the surge."
        primaryCta={{ label: 'Discuss Your Platform', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore Solutions', href: '#services' }}
        rail={['Peak-season scale', 'Booking engines', 'Ops systems']}
      />

      {/* ===== THE CHALLENGE ===== */}
      <IndustryChallenge
        accent="#0EA5E9"
        accentSoft="rgba(14, 165, 233, 0.14)"
        accentSoft2="rgba(6, 182, 212, 0.12)"
        title="The seasonality stress test"
        items={[
          { icon: Server, label: 'Peak Season Crashes' },
          { icon: Ticket, label: 'Lost Bookings' },
          { icon: Search, label: 'Slow Search' },
          { icon: CreditCard, label: 'Payment Failures' },
        ]}
      >
        <p className="text-lg text-slate-600 leading-relaxed">
          Travel platforms are quiet for months and then violently busy — and the busy week is exactly when failure is unaffordable.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Architecture for travel means <span className="font-semibold text-[#0F172A]">designing for the spike</span>, not the average.
        </p>
      </IndustryChallenge>

      {/* ===== WHAT WE BUILD ===== */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3 reveal-up">
              <span className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center">
                <Sparkles size={18} className="text-[#0EA5E9]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]">Solutions</span>
            </div>
            
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              What we <span className="gradient-text">build</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 reveal-up" style={{ transitionDelay: '150ms' }}>
              5 core solutions engineered for travel — built to handle the surge.
            </p>
            
            <div className="divider-gradient mx-auto reveal-up" style={{ transitionDelay: '200ms' }} />
          </div>

          <div className="reveal-up" style={{ transitionDelay: '220ms' }}>
            <IndustryBuildCards items={services} />
          </div>

          {/* <div className="mt-12 text-center reveal-up">
            <p className="text-sm text-slate-500 mb-4">Need a custom travel solution?</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] text-white font-medium hover:bg-[#1E293B] transition-all duration-300 hover:shadow-lg">
              Discuss Your Platform
              <ArrowRight size={16} />
            </a>
          </div> */}
        </div>
      </section>

      {/* ===== ENGINEERING FOR THE SPIKE ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9] mb-4 reveal-up">
              <span className="w-1 h-5 rounded-full bg-[#0EA5E9]" />
              Engineering for the Spike
            </span>
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              Capacity that <span className="gradient-text">follows the calendar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-x-4 gap-y-8 pt-3">
            {[
              {
                icon: Gauge,
                label: 'Load Balancing',
                desc: 'Traffic distributed intelligently across infrastructure — no single point of failure.',
                color: '#0EA5E9',
              },
              {
                icon: Server,
                label: 'Auto-Scaling',
                desc: 'Capacity designed to the demand calendar — load-tested before peak season.',
                color: '#06B6D4',
              },
              {
                icon: Database,
                label: 'Database Tuning',
                desc: 'Query optimization and connection pooling — the same practice that delivered 99.99% uptime.',
                color: '#14B8A6',
              },
            ].map((feature, i) => {
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
        </div>
      </section>

      {/* ===== PROOF ===== */}
      {/* <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAFBFC]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9] mb-4 reveal-up">
                <span className="w-1 h-5 rounded-full bg-[#0EA5E9]" />
                Proof
              </span>
              <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
                Surviving the surge
              </h2>
              <div className="mt-6 space-y-4 reveal-up" style={{ transitionDelay: '150ms' }}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A travel aggregator was losing bookings during peak season — their platform couldn't handle the traffic spikes.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We rebuilt their booking engine with auto-scaling architecture, load-tested for peak demand, and optimized their search across multiple inventory sources — <span className="font-semibold text-[#0F172A]">handling 5x peak traffic with 99.99% uptime</span>.
                </p>
              </div>
              <div className="mt-6 reveal-up" style={{ transitionDelay: '200ms' }}>
                <Link to="/case-studies/travel-aggregator" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EA5E9] hover:text-[#0284C7] transition-colors group">
                  Read the full case study
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 reveal-right" style={{ transitionDelay: '200ms' }}>
              <div className="p-6 rounded-2xl bg-[#F0F9FF] border border-[#0EA5E9]/10 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0EA5E9] flex items-center justify-center">
                  <Quote size={14} className="text-white" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic mt-2">
                  "Our previous platform crashed every holiday season. This one didn't even flinch."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white text-sm font-bold">
                    TR
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">CTO</div>
                    <div className="text-xs text-slate-500">Travel Aggregator</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: '5x', label: 'Traffic Capacity', color: '#0EA5E9' },
                  { value: '99.99%', label: 'Uptime', color: '#06B6D4' },
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
            q: "Can you integrate GDS or third-party inventory APIs?",
            a: "Yes — supplier and aggregator API integration is standard scope; we design caching and rate-limit strategy around each provider's constraints."
          },
          {
            q: "How do you handle peak-season load?",
            a: "Auto-scaling designed to the demand calendar, load-tested before season — capacity as an engineered plan, not an emergency purchase."
          },
          {
            q: "Do you build for agencies or travel-tech startups?",
            a: "Both — operations systems for agencies, full product engineering for startups building platforms."
          }
        ]}
      />

      {/* ===== CTA ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <Plane size={14} className="text-[#0EA5E9]" />
            <span className="text-xs font-bold text-white/80 tracking-widest">TRAVEL SOFTWARE</span>
          </div>
          <h2 className="heading-lg text-white">
            Ready to survive peak season
            <br />
            <span className="gradient-text">with zero downtime?</span>
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
            Let's discuss your travel project. We'll show you what's possible.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0F172A] font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Discuss Your Platform
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