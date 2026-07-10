// IndustryEcommerce.tsx - E-commerce Industry Page
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  CreditCard,
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
  X,
  Briefcase,
  Database,
  Server,
  Rocket,
  Store,
  Package,
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
  ShoppingCart,
  Truck,
  Tag,
  Percent,
  DollarSign,
} from 'lucide-react';

const injectStyles = () => {
  const id = 'ecommerce-industry-premium';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .ecommerce-premium {
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
      background: linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #F59E0B 100%);
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
      background: linear-gradient(90deg, #DC2626, #EF4444, #F59E0B);
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
      box-shadow: 0 8px 24px rgba(220,38,38,0.15);
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
      border-color: #DC2626;
      color: #DC2626;
      background: #fef2f2;
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
      background: linear-gradient(to right, transparent, rgba(220,38,38,0.1), transparent);
      width: 80px;
      margin: 16px 0;
    }

    .metric-card {
      background: white;
      border-radius: 16px;
      padding: 20px;
      border: 1px solid #f1f5f9;
      transition: all 0.3s ease;
    }
    .metric-card:hover {
      border-color: #DC2626;
      box-shadow: 0 8px 24px rgba(220,38,38,0.08);
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

export default function IndustryEcommerce() {
  const wrapperRef = useReveal();
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    injectStyles();
    document.title = 'E-commerce Software Development — NSS';
  }, []);

  const services = [
    { 
      icon: Store, 
      title: 'Storefronts & Marketplaces', 
      desc: 'Fast, indexable, engineered for conversion — every millisecond matters.', 
      color: '#DC2626', 
      bg: '#FEF2F2',
      features: ['Fast Load Times', 'SEO Optimized', 'Conversion Focused'],
      number: '01'
    },
    { 
      icon: Package, 
      title: 'Inventory-Connected Commerce', 
      desc: 'The store that actually knows the warehouse — ERP integration native.', 
      color: '#EF4444', 
      bg: '#FEF2F2',
      features: ['Real-Time Stock', 'ERP Integration', 'Warehouse Sync'],
      number: '02'
    },
    { 
      icon: Brain, 
      title: 'Personalization & AI', 
      desc: 'Recommendation and segmentation models that drive measurable revenue.', 
      color: '#7C3AED', 
      bg: '#F5F3FF',
      features: ['Recommendations', 'Segmentation', 'Predictive Models'],
      number: '03',
      link: '/ai-ml-development-services'
    },
    { 
      icon: CreditCard, 
      title: 'Payments & Logistics Integration', 
      desc: 'Gateways, shipping APIs, COD workflows — payment that completes.', 
      color: '#059669', 
      bg: '#ECFDF5',
      features: ['Payment Gateways', 'Shipping APIs', 'COD Workflows'],
      number: '04'
    },
    { 
      icon: BarChart3, 
      title: 'E-commerce Analytics', 
      desc: 'Funnel truth instead of vanity dashboards — data that drives decisions.', 
      color: '#D97706', 
      bg: '#FFFBEB',
      features: ['Funnel Analysis', 'Conversion Data', 'Actionable Insights'],
      number: '05',
      link: '/data-science-and-analytics'
    },
  ];

  return (
    <div className="ecommerce-premium" ref={wrapperRef}>
      
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FEF2F2] via-white to-[#FFFBEB]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DC2626]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EF4444]/5 rounded-full blur-3xl" />
          <ShoppingBag className="float-el top-[15%] right-[8%] text-[#DC2626]/10 w-20 h-20" />
          <ShoppingCart className="float-el bottom-[25%] right-[12%] text-[#EF4444]/10 w-16 h-16" />
          <Tag className="float-el top-[35%] left-[85%] text-[#F59E0B]/10 w-14 h-14" />
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-8 reveal-up">
            <span className="w-10 h-10 rounded-full bg-[#DC2626]/10 flex items-center justify-center">
              <ShoppingBag size={16} className="text-[#DC2626]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">E-Commerce</span>
            <span className="text-xs text-slate-300">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC2626]">Software Development</span>
          </div>

          <h1 className="heading-xl text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
            Built for the moment between
            <br />
            <span className="gradient-text">'add to cart' and 'order confirmed'</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mt-6 leading-relaxed reveal-up" style={{ transitionDelay: '200ms' }}>
            Ecommerce development services focused on the metric that pays: completed checkouts. Storefronts, marketplaces, and the data engine underneath.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 reveal-up" style={{ transitionDelay: '300ms' }}>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B] transition-all duration-300 hover:shadow-xl hover:scale-105">
              Discuss Your Store
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-[#0F172A] font-semibold hover:border-[#DC2626] hover:text-[#DC2626] transition-all duration-300">
              Explore Solutions
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 reveal-up" style={{ transitionDelay: '400ms' }}>
            {[
              { value: '20%', label: 'Sales Lift', icon: TrendingUp, color: '#DC2626' },
              { value: '80%', label: 'Search Accuracy', icon: Gauge, color: '#EF4444' },
              { value: '60%', label: 'Faster Evaluation', icon: Zap, color: '#F59E0B' },
              { value: 'Real-Time', label: 'Stock Sync', icon: Package, color: '#059669' },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 text-center hover:border-[#DC2626] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DC2626] mb-4 reveal-up">
                <span className="w-1 h-5 rounded-full bg-[#DC2626]" />
                The Challenge
              </span>
              <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
                Where revenue leaks
              </h2>
              <div className="mt-6 space-y-4 reveal-up" style={{ transitionDelay: '150ms' }}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Slow product pages, checkout friction, stockouts the site didn't know about, and marketing aimed by guesswork.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  E-commerce rarely fails dramatically — it <span className="font-semibold text-[#0F172A]">leaks, order by abandoned order</span>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3 reveal-right" style={{ transitionDelay: '200ms' }}>
              {[
                { label: 'Slow Product Pages' },
                { label: 'Checkout Friction' },
                { label: 'Inventory Blindness' },
                { label: 'Guesswork Marketing' },
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
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#DC2626]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#EF4444]/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4 reveal-up">
              <span className="w-10 h-10 rounded-xl bg-[#DC2626]/10 flex items-center justify-center">
                <Sparkles size={18} className="text-[#DC2626]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC2626]">Solutions</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
                What we <span className="gradient-text">build</span>
              </h2>
              <p className="text-slate-400 text-sm reveal-up max-w-sm" style={{ transitionDelay: '150ms' }}>
                5 core solutions engineered for e-commerce — built to convert, not just to look good.
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
                        <Check size={10} className="text-[#DC2626]" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div 
                    className={`mt-5 h-0.5 rounded-full transition-all duration-500 ${isActive ? 'w-16' : 'w-10'}`} 
                    style={{ background: service.color }} 
                  />

                  {service.link ? (
                    <Link to={service.link} className="mt-4 text-xs font-semibold text-slate-400 hover:text-[#DC2626] transition-colors duration-300 flex items-center gap-1 group">
                      Learn more
                      <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  ) : (
                    <button className="mt-4 text-xs font-semibold text-slate-400 hover:text-[#DC2626] transition-colors duration-300 flex items-center gap-1 group">
                      Learn more
                      <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center reveal-up">
            <p className="text-sm text-slate-500 mb-4">Need a custom e-commerce solution?</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] text-white font-medium hover:bg-[#1E293B] transition-all duration-300 hover:shadow-lg">
              Discuss Your Store
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== AI PROOF POINT ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DC2626] mb-4 reveal-up">
              <span className="w-1 h-5 rounded-full bg-[#DC2626]" />
              AI in Action
            </span>
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              When AI <span className="gradient-text">drives revenue</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="metric-card reveal-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={24} className="text-[#DC2626]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">20% Sales Lift</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Five embedded AI engineers drove a 20% sales increase for a retail client through predictive modeling and segmentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="metric-card reveal-up" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-[#EF4444]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Diamond-Similarity Engine</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    <span className="font-semibold">80% accuracy, 60% faster evaluation</span> — from the same retail practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROOF ===== */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAFBFC]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DC2626] mb-4 reveal-up">
                <span className="w-1 h-5 rounded-full bg-[#DC2626]" />
                Proof
              </span>
              <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
                From fragmented data to 20% growth
              </h2>
              <div className="mt-6 space-y-4 reveal-up" style={{ transitionDelay: '150ms' }}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A retail company with fragmented customer data and blind campaigns couldn't understand why their marketing wasn't working.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We brought in five AI developers to build predictive models and segmentation — <span className="font-semibold text-[#0F172A]">lifting sales 20%</span> through targeted campaigns and better engagement.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The diamond-similarity engine (<span className="font-semibold text-[#0F172A]">80% accuracy, 60% faster evaluation</span>) came from the same retail practice.
                </p>
              </div>
              <div className="mt-6 reveal-up" style={{ transitionDelay: '200ms' }}>
                <Link to="/case-studies/retail-ai" className="inline-flex items-center gap-2 text-sm font-semibold text-[#DC2626] hover:text-[#B91C1C] transition-colors group">
                  Read the full case study
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 reveal-right" style={{ transitionDelay: '200ms' }}>
              <div className="p-6 rounded-2xl bg-[#FEF2F2] border border-[#DC2626]/10 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center">
                  <Quote size={14} className="text-white" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic mt-2">
                  "We had data, but we couldn't use it. They turned it into our biggest growth lever."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#DC2626] flex items-center justify-center text-white text-sm font-bold">
                    SM
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">Head of E-Commerce</div>
                    <div className="text-xs text-slate-500">Retail Company</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: '20%', label: 'Sales Lift', color: '#DC2626' },
                  { value: '80%', label: 'Search Accuracy', color: '#EF4444' },
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
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DC2626] mb-4 reveal-up">
              <span className="w-1 h-5 rounded-full bg-[#DC2626]" />
              FAQ
            </span>
            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              Common questions, straight answers
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Shopify/WooCommerce or custom — which do we need?",
                a: "Platforms win until customization fights them; custom wins when your catalog, pricing, or workflow is the differentiator. We'll give you the honest fork in writing after a scoping call."
              },
              {
                q: "Can you connect the store to our inventory system?",
                a: "Yes — real-time stock sync is standard scope, including with Rexo ERP or your existing system."
              },
              {
                q: "Do you build B2B commerce?",
                a: "Yes — quotation flows, tiered pricing, credit terms, and approval chains are B2B-native features we've built repeatedly."
              }
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-slate-100 rounded-xl bg-[#FAFBFC] p-5 hover:border-[#DC2626]/20 hover:shadow-sm transition-all duration-300"
                style={{
                  opacity: 0,
                  animation: `fadeUp 0.5s ease ${i * 0.08 + 0.2}s forwards`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-[#DC2626]">Q</span>
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
            <ShoppingBag size={14} className="text-[#DC2626]" />
            <span className="text-xs font-bold text-white/80 tracking-widest">E-COMMERCE SOFTWARE</span>
          </div>
          <h2 className="heading-lg text-white">
            Ready to convert more
            <br />
            <span className="gradient-text">carts into orders?</span>
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
            Let's discuss your e-commerce project. We'll show you what's possible.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0F172A] font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Discuss Your Store
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