// OurWorkHub.tsx - Enhanced with More Color
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Factory,
  Diamond,
  Cloud,
  Database,
  Users,
  GitBranch,
  Heart,
  TrendingUp,
  ArrowUpRight,
  Flame,
  Cpu,
  RefreshCw,
  Award,
  Target,
  Zap,
  Shield,
  Clock,
  MoveRight,
  Building2,
  Briefcase,
  Layers,
  ChevronRight,
  Check,
  Star,
  Globe,
  Calendar,
  BarChart3,
  LineChart,
  Activity,
  Settings,
  Code,
  Server,
  HardDrive,
  Smartphone,
  Monitor,
  Package,
  Rocket,
  Eye,
  PenTool,
  FileText,
  PieChart,
  Hash,
  Filter,
  Merge,
  Quote,
} from 'lucide-react';

const injectStyles = () => {
  const id = 'our-work-hub-premium';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    .work-hub-premium {
      background: #FAFBFC;
      color: #0F172A;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .font-editorial {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
    }

    /* ── Hero ── */
    .hero-premium {
      position: relative;
      min-height: 70vh;
      display: flex;
      align-items: center;
      padding: 120px 24px 80px;
      overflow: hidden;
    }
    .hero-premium-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(160deg, #EFF6FF 0%, #FFFFFF 50%, #F5F3FF 100%);
    }
    .hero-premium-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      pointer-events: none;
    }
    .hero-premium-orb-1 {
      width: 600px; height: 600px;
      top: -200px; right: -100px;
      background: rgba(37,99,235,0.12);
      animation: orbFloat 14s ease-in-out infinite;
    }
    .hero-premium-orb-2 {
      width: 500px; height: 500px;
      bottom: -200px; left: -100px;
      background: rgba(99,102,241,0.1);
      animation: orbFloat 18s ease-in-out infinite 4s;
    }
    @keyframes orbFloat {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -40px) scale(1.05); }
      66% { transform: translate(-20px, 30px) scale(0.95); }
    }

    /* ── Gradient Text ── */
    .gradient-text-primary {
      background: linear-gradient(135deg, #2563EB 0%, #4F46E5 60%, #06B6D4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .gradient-text-warm {
      background: linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #EC4899 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Filter Pills ── */
    .filter-pill {
      padding: 8px 20px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 500;
      border: 1px solid #E5E7EB;
      background: #FFFFFF;
      color: #6B7280;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      cursor: pointer;
      white-space: nowrap;
      user-select: none;
    }
    .filter-pill:hover {
      border-color: #2563EB;
      color: #2563EB;
      background: #EFF6FF;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(37,99,235,0.1);
    }
    .filter-pill.active {
      background: linear-gradient(135deg, #2563EB 0%, #4F46E5 100%);
      color: #FFFFFF;
      border-color: transparent;
      box-shadow: 0 4px 16px rgba(37,99,235,0.3);
    }
    .filter-pill.active:hover {
      box-shadow: 0 6px 24px rgba(37,99,235,0.4);
      transform: translateY(-2px);
    }

    /* ── Premium Card ── */
    .card-premium {
      position: relative;
      background: #FFFFFF;
      border-radius: 24px;
      overflow: hidden;
      height: 100%;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  box-shadow 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      will-change: transform;
      border: 1px solid #F1F5F9;
    }
    .card-premium::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: 25px;
      padding: 1.5px;
      background: linear-gradient(135deg, transparent 30%, rgba(37,99,235,0.15) 100%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    .card-premium:hover::before {
      opacity: 1;
    }
    .card-premium:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 64px -20px rgba(37,99,235,0.12);
      border-color: rgba(37,99,235,0.1);
    }

    .card-premium .card-accent {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .card-premium:hover .card-accent {
      opacity: 1;
    }

    .card-premium .card-glow {
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.6s ease;
      border-radius: 24px;
    }
    .card-premium:hover .card-glow {
      opacity: 1;
    }

    .metric-large {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
      font-size: 44px;
      line-height: 1;
      letter-spacing: -0.02em;
    }
    .metric-medium {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
      font-size: 34px;
      line-height: 1;
      letter-spacing: -0.02em;
    }

    /* ── Featured Card ── */
    .featured-card-premium {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      min-height: 380px;
      border: 1px solid rgba(37,99,235,0.08) !important;
    }
    .featured-card-premium::before {
      background: linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(99,102,241,0.1) 100%) !important;
      opacity: 1 !important;
    }
    .featured-card-premium .featured-image {
      position: relative;
      overflow: hidden;
      background: #EFF6FF;
      min-height: 280px;
    }
    .featured-card-premium .featured-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .featured-card-premium:hover .featured-image img {
      transform: scale(1.03);
    }
    .featured-card-premium .featured-content {
      padding: 36px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: linear-gradient(135deg, #FFFFFF 0%, #FAFBFC 100%);
    }
    @media (max-width: 768px) {
      .featured-card-premium {
        grid-template-columns: 1fr;
      }
      .featured-card-premium .featured-image {
        min-height: 200px;
      }
      .featured-card-premium .featured-content {
        padding: 28px;
      }
    }

    /* ── Timeline ── */
    .timeline-premium {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 20px 0;
    }
    .timeline-premium::before {
      content: '';
      position: absolute;
      top: 32px;
      left: 40px;
      right: 40px;
      height: 2px;
      background: linear-gradient(to right, #2563EB, #4F46E5, #06B6D4);
      opacity: 0.3;
    }
    .timeline-premium .timeline-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      position: relative;
      z-index: 2;
    }
    .timeline-premium .timeline-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid #2563EB;
      background: #0F172A;
      margin-bottom: 12px;
      position: relative;
      box-shadow: 0 0 20px rgba(37,99,235,0.2);
    }
    .timeline-premium .timeline-dot::after {
      content: '';
      position: absolute;
      inset: -6px;
      border-radius: 50%;
      border: 1px solid rgba(37,99,235,0.3);
      animation: pulseDot 2s ease-in-out infinite;
    }
    @keyframes pulseDot {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.5); opacity: 0; }
    }
    .timeline-premium .timeline-label {
      font-size: 11px;
      font-weight: 600;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      text-align: center;
    }
    .timeline-premium .timeline-label.active {
      color: #FFFFFF;
    }

    /* ── Stats Row ── */
    .stat-item {
      padding: 8px 20px;
      border-radius: 12px;
      background: rgba(37,99,235,0.04);
      border: 1px solid rgba(37,99,235,0.06);
      transition: all 0.3s ease;
    }
    .stat-item:hover {
      background: rgba(37,99,235,0.08);
      border-color: rgba(37,99,235,0.12);
      transform: translateY(-2px);
    }

    /* ── CTA Card ── */
    .cta-card {
      background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%);
      border: 1px solid rgba(37,99,235,0.08);
      box-shadow: 0 4px 24px rgba(37,99,235,0.04);
    }
    .cta-card .cta-glow {
      background: radial-gradient(circle at 30% 20%, rgba(37,99,235,0.06) 0%, transparent 60%);
    }

    /* ── Animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes floatBlob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(30px, -20px) scale(1.05); }
    }
    .anim-fade-up {
      opacity: 0;
      animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .anim-fade-in {
      opacity: 0;
      animation: fadeIn 0.8s ease forwards;
    }
    .float-blob {
      animation: floatBlob 8s ease-in-out infinite;
    }

    .stagger-children > * {
      opacity: 0;
      animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .stagger-children > *:nth-child(1) { animation-delay: 0.05s; }
    .stagger-children > *:nth-child(2) { animation-delay: 0.1s; }
    .stagger-children > *:nth-child(3) { animation-delay: 0.15s; }
    .stagger-children > *:nth-child(4) { animation-delay: 0.2s; }
    .stagger-children > *:nth-child(5) { animation-delay: 0.25s; }
    .stagger-children > *:nth-child(6) { animation-delay: 0.3s; }
    .stagger-children > *:nth-child(7) { animation-delay: 0.35s; }
    .stagger-children > *:nth-child(8) { animation-delay: 0.4s; }
  `;
  document.head.appendChild(style);
};

// ─── Types ───
interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  industry: string;
  capability: string;
  clientType: string;
  problem: string;
  metric: string;
  metricLabel: string;
  image?: string;
  color: string;
  colorRgb: string;
  featured?: boolean;
  tags: string[];
}

// ─── Data ───
const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'smart-factory-iot',
    title: 'Smart Factory IoT Platform',
    slug: 'smart-factory-iot',
    industry: 'Manufacturing',
    capability: 'Cloud & Automation',
    clientType: 'Enterprise Manufacturer',
    problem: 'Manual tracking across divisions, locations, and machines — no centralized view of operations.',
    metric: '42%',
    metricLabel: 'Reduction in operational costs',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    color: '#2563EB',
    colorRgb: '37,99,235',
    featured: true,
    tags: ['IoT', 'Data Pipeline', 'Edge Computing'],
  },
  {
    id: 'diamond-similarity-ai',
    title: 'Diamond Similarity AI',
    slug: 'diamond-similarity-ai',
    industry: 'Retail',
    capability: 'AI & Data',
    clientType: 'Luxury Retailer',
    problem: 'Manual diamond comparison by experts — inconsistent and unable to scale.',
    metric: '80%',
    metricLabel: 'Match Accuracy',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    color: '#7C3AED',
    colorRgb: '124,58,237',
    featured: false,
    tags: ['AI', 'Computer Vision', 'Retail'],
  },
  {
    id: 'cloud-optimization',
    title: 'Cloud Optimization',
    slug: 'cloud-optimization',
    industry: 'Fintech',
    capability: 'Cloud & Automation',
    clientType: 'Fintech Platform',
    problem: 'Traffic spikes, performance bottlenecks, security exposure, and spiraling cloud costs.',
    metric: '99.99%',
    metricLabel: 'Uptime Achieved',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    color: '#059669',
    colorRgb: '5,150,105',
    featured: false,
    tags: ['Cloud', 'DevOps', 'Kubernetes'],
  },
  {
    id: 'data-pipeline',
    title: 'Real-Time Data Pipeline',
    slug: 'data-pipeline',
    industry: 'Healthcare',
    capability: 'Custom Software',
    clientType: 'Healthcare Provider',
    problem: 'Slow ETL, inconsistent data across sources, no real-time visibility into business metrics.',
    metric: '3x',
    metricLabel: 'Faster Reporting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    color: '#D97706',
    colorRgb: '217,119,6',
    featured: false,
    tags: ['Data Engineering', 'ETL', 'Analytics'],
  },
  {
    id: 'retail-ai-team',
    title: 'Retail AI Team',
    slug: 'retail-ai-team',
    industry: 'Retail',
    capability: 'AI & Data',
    clientType: 'Retail Chain',
    problem: 'Fragmented customer data, marketing campaigns firing blind — no unified intelligence layer.',
    metric: '20%',
    metricLabel: 'Sales Increase',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    color: '#DC2626',
    colorRgb: '220,38,38',
    featured: false,
    tags: ['AI', 'Staffing', 'Marketing'],
  },
  {
    id: 'manufacturing-devops',
    title: 'Manufacturing DevOps',
    slug: 'manufacturing-devops',
    industry: 'Manufacturing',
    capability: 'DevOps',
    clientType: 'Industrial Manufacturer',
    problem: 'CI/CD delays averaging 45 minutes, security risks in pipeline, critical product deadline looming.',
    metric: '25%',
    metricLabel: 'Faster Deployments',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    color: '#0891B2',
    colorRgb: '8,145,178',
    featured: false,
    tags: ['DevOps', 'CI/CD', 'Security'],
  },
  {
    id: 'healthcare-modernization',
    title: 'Healthcare Platform Modernization',
    slug: 'healthcare-modernization',
    industry: 'Healthcare',
    capability: 'Custom Software',
    clientType: 'Hospital Network',
    problem: 'Fragmented patient data across 6 legacy systems, outdated management software causing care delays.',
    metric: '30%',
    metricLabel: 'Faster Care Delivery',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    color: '#2563EB',
    colorRgb: '37,99,235',
    featured: false,
    tags: ['Healthcare', 'Custom Software', 'Integration'],
  },
];

// ─── Helper ───
const getUniqueValues = (key: keyof CaseStudy) => {
  return [...new Set(CASE_STUDIES.map(c => c[key] as string))];
};

// ─── Hook ───
const useScrollReveal = () => {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(prev => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const registerRef = (el: HTMLElement | null, index: number) => {
    if (el && !refs.current.includes(el)) {
      refs.current[index] = el;
    }
  };

  return { registerRef, visible };
};

// ─── Counter Component ───
const Counter: React.FC<{ target: number; suffix?: string; label: string; color?: string }> = ({ 
  target, 
  suffix = '', 
  label, 
  color = '#0F172A' 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-editorial text-4xl md:text-5xl" style={{ color }}>
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-500 mt-1 font-medium">{label}</div>
    </div>
  );
};

// ─── Main Component ───
export default function OurWorkHub() {
  const navigate = useNavigate();
  const [heroReady, setHeroReady] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [activeCapability, setActiveCapability] = useState<string | null>(null);
  const { registerRef, visible } = useScrollReveal();

  const industries = getUniqueValues('industry');
  const capabilities = getUniqueValues('capability');

  const filteredCases = CASE_STUDIES.filter(c => {
    const matchIndustry = !activeIndustry || c.industry === activeIndustry;
    const matchCapability = !activeCapability || c.capability === activeCapability;
    return matchIndustry && matchCapability;
  });

  const featured = filteredCases.find(c => c.featured);
  const others = filteredCases.filter(c => !c.featured);

  const clearFilters = () => {
    setActiveIndustry(null);
    setActiveCapability(null);
  };

  const hasFilters = activeIndustry || activeCapability;

  useEffect(() => {
    injectStyles();
    document.title = 'Our Work — NSS';
    setTimeout(() => setHeroReady(true), 100);
  }, []);

  return (
    <div className="work-hub-premium">
      
      {/* ========== HERO ========== */}
      <section className="hero-premium">
        <div className="hero-premium-bg">
          <div className="hero-premium-orb hero-premium-orb-1" />
          <div className="hero-premium-orb hero-premium-orb-2" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 shadow-sm mb-8"
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? 'translateY(0)' : 'translateY(14px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <Sparkles size={14} className="text-[#2563EB]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2563EB]">Outcomes</span>
            </div>

            {/* Heading */}
            <h1
              className="font-editorial text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-slate-900"
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? 'translateY(0)' : 'translateY(36px)',
                transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.08s',
              }}
            >
              Outcomes,
              <br />
              <span className="gradient-text-primary">Documented.</span>
            </h1>

            {/* Description */}
            <p
              className="text-base md:text-[17px] text-slate-500 max-w-xl mx-auto mt-6 leading-relaxed"
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? 'translateY(0)' : 'translateY(18px)',
                transition: 'all 0.65s ease 0.2s',
              }}
            >
              Seven engagements, real numbers, no adjectives doing the heavy lifting.
            </p>

            {/* Filters */}
            <div
              className="flex flex-wrap items-center justify-center gap-3 mt-8"
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? 'translateY(0)' : 'translateY(18px)',
                transition: 'all 0.65s ease 0.3s',
              }}
            >
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(activeIndustry === industry ? null : industry)}
                  className={`filter-pill ${activeIndustry === industry ? 'active' : ''}`}
                >
                  {industry}
                </button>
              ))}
              {capabilities.map(cap => (
                <button
                  key={cap}
                  onClick={() => setActiveCapability(activeCapability === cap ? null : cap)}
                  className={`filter-pill ${activeCapability === cap ? 'active' : ''}`}
                >
                  {cap}
                </button>
              ))}
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-[#2563EB] hover:text-[#4F46E5] transition-colors duration-200 flex items-center gap-1 font-medium"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Stats Row with Colors */}
            <div
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? 'translateY(0)' : 'translateY(18px)',
                transition: 'all 0.65s ease 0.4s',
              }}
            >
              <div className="stat-item">
                <Counter target={500} suffix="+" label="Projects" color="#2563EB" />
              </div>
              <div className="stat-item">
                <Counter target={95} suffix="%" label="Retention" color="#7C3AED" />
              </div>
              <div className="stat-item">
                <Counter target={15} suffix="+" label="Countries" color="#059669" />
              </div>
              <div className="stat-item">
                <Counter target={7} label="Case Studies" color="#D97706" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED CASE STUDY ========== */}
      {featured && (
        <section className="px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-[1200px] mx-auto">
            <div
              className="card-premium featured-card-premium"
              onClick={() => navigate(`/case-studies/${featured.slug}`)}
              style={{
                opacity: 0,
                animation: `fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards`,
              }}
            >
              <div className="card-accent" style={{ background: `linear-gradient(90deg, ${featured.color}, ${featured.color}60)` }} />
              <div className="card-glow" style={{ background: `radial-gradient(circle at 30% 50%, ${featured.color}10, transparent 60%)` }} />
              
              <div className="featured-image">
                <img src={featured.image} alt={featured.title} loading="lazy" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-slate-700 border border-slate-200/50">
                    {featured.industry}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-slate-700 border border-slate-200/50">
                    {featured.capability}
                  </span>
                </div>
              </div>

              <div className="featured-content">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="metric-large" style={{ color: featured.color }}>
                      {featured.metric}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{featured.metricLabel}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
                      {featured.clientType}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-4">{featured.title}</h3>
                <p className="text-slate-600 text-sm mt-2 max-w-lg leading-relaxed">{featured.problem}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3" style={{ color: featured.color }}>
                  Read Case Study
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== CASE STUDY GRID ========== */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-editorial text-2xl md:text-3xl text-slate-900">
              All Case Studies
            </h2>
            <span className="text-sm text-slate-500 font-medium bg-slate-100 px-4 py-1.5 rounded-full">
              {filteredCases.length} projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {others.map((study) => {
              return (
                <div
                  key={study.id}
                  className="card-premium"
                  onClick={() => navigate(`/case-studies/${study.slug}`)}
                >
                  <div className="card-accent" style={{ background: `linear-gradient(90deg, ${study.color}, ${study.color}60)` }} />
                  <div className="card-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${study.color}08, transparent 60%)` }} />

                  <div className="p-6 flex flex-col flex-1">
                    {study.image && (
                      <div className="h-36 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded"
                        style={{ background: `${study.color}12`, color: study.color }}
                      >
                        {study.industry}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                        {study.capability}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">{study.title}</h3>
                    <p className="text-sm text-slate-500 mt-2 flex-1 leading-relaxed">{study.problem}</p>

                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-end justify-between">
                      <div>
                        <div className="metric-medium" style={{ color: study.color }}>
                          {study.metric}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">
                          {study.metricLabel}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-lg">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== DARK SECTION ========== */}
      <section className="px-6 md:px-12 lg:px-20 pt-20 pb-24 bg-[#0F172A] rounded-t-[40px] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4F46E5]/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#06B6D4]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-sm">
              <Award size={14} className="text-[#2563EB]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">Partnerships</span>
            </div>
            <h2 className="font-editorial text-4xl md:text-5xl text-white leading-tight">
              Built through long-term
              <br />
              <span className="italic text-white/40">partnerships.</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="timeline-premium max-w-3xl mx-auto">
            {['Discovery', 'Strategy', 'Development', 'Launch', 'Optimization'].map((phase, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <span className="timeline-label">{phase}</span>
              </div>
            ))}
          </div>

          {/* Quote Card */}
          <div className="mt-16 max-w-2xl mx-auto bg-white/8 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm hover:bg-white/12 transition-all duration-500">
            <div className="flex justify-center mb-4">
              <Quote size={32} className="text-[#2563EB]/50" />
            </div>
            <p className="text-white text-lg md:text-xl font-serif-italic leading-relaxed">
              "Our clients stay for outcomes, not contracts."
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-xs text-white/50 font-medium">Retention</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-white/50 font-medium">Projects</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-white/50 font-medium">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-[900px] mx-auto">
          <div className="relative cta-card rounded-3xl shadow-xl p-10 md:p-16 text-center overflow-hidden">
            <div className="cta-glow absolute inset-0 pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#2563EB]/8 rounded-full blur-3xl float-blob" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#4F46E5]/8 rounded-full blur-3xl float-blob" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#06B6D4]/8 rounded-full blur-3xl float-blob" style={{ animationDelay: '4s' }} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6">
                <Sparkles size={14} className="text-[#2563EB]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2563EB]">Get Started</span>
              </div>

              <h2 className="font-editorial text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight">
                Ready to create your next
                <br />
                <span className="gradient-text-primary">success story?</span>
              </h2>

              <p className="text-slate-500 mt-4 max-w-lg mx-auto text-base">
                Let's build something that moves the needle. No pitch decks until we understand your problem.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-medium hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/30 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-10 px-6 md:px-12 lg:px-20 border-t border-slate-100 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#4F46E5] flex items-center justify-center shadow-sm">
              <span className="text-white text-xs font-bold">NS</span>
            </div>
            <span className="text-sm font-semibold text-slate-700">Nagar Software Solutions</span>
          </div>
          <p className="text-xs text-slate-400">© 2025 NSS. All rights reserved.</p>
          <p className="text-xs text-slate-400 text-center max-w-xs">
            308 Shagun Arcade, Vijay Nagar, Indore (M.P.) 452010
          </p>
        </div>
      </footer>
    </div>
  );
}