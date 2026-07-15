// AboutUsPage.tsx - Enhanced Premium with Joyful Design
import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Clock,
  Briefcase,
  MapPin,
  Quote,
  Brain,
  Target,
  Handshake,
  Rocket,
  Linkedin,
  Calendar,
  User,
  Laptop,
  Wifi,
  ArrowUpRight,
  Star,
  Hexagon,
  Mail,
  Phone,
  Heart,
  Smile,
  PartyPopper,
  Gift,
  Palette,
  Feather,
  Sun,
  Cloud,
  Layers,
  BarChart3,
  CheckCircle2,
  CircleDot,
  Brush,
  Flower,
  Gem,
  Music,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollTextReveal } from './ScrollTextReveal';
import Team from './Team';
import RRCATLOGO from '../assets/Clients/RRCATLOGO.png';
import DataInfaLogo from '../assets/Clients/DataInfaLogo.jpg';
import BlueTinkLogo from '../assets/Clients/BlueThinkLogo.png';
import CareerWaveLogo from '../assets/Clients/CareerWaveLogo.png';
import ChowguleLogo from '../assets/Clients/ChowguleLogo.png';
import CrickBro from '../assets/Clients/CrickBro.jpg';
import ExatipTechnologies from '../assets/Clients/ExatipTechnologies.jpg';
import MindefyLogo from '../assets/Clients/MindefyLogo.jpg';
import ShyamFutureTech from '../assets/Clients/ShyamFutureTech.jpg';
import SiyaTechLogo from '../assets/Clients/SiyaTechLogo.png';
import SMTLabsLogo from '../assets/Clients/SMTLabsLogo.jpg';
import leader1Img from '../assets/team/leader-1.png';
import leader2Img from '../assets/team/leader-2.png';
import Techlene from '../assets/Clients/Techlene.jpg';

const LETTER_INTERVAL = 78;

const titleWords = (text: string) => text.split(' ').map((word) => ({ text: word }));

const TITLE_STYLE = {
  display: 'block' as const,
  width: '100%',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontWeight: 600,
  letterSpacing: '0.04em',
  fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
  lineHeight: 1.12,
};

const TITLE_STYLE_LG = {
  ...TITLE_STYLE,
  fontSize: 'clamp(2.35rem, 5.2vw, 3.85rem)',
  lineHeight: 1.1,
};

const HERO_WORDS = [
  { text: 'The' },
  { text: 'company' },
  { text: 'behind' },
  { text: 'the' },
  { text: 'numbers' },
] as const;

const HERO_STATS = [
  { value: 500, suffix: '+', label: 'Projects' },
  { value: 95, suffix: '%', label: 'Retention' },
  { value: 15, suffix: '+', label: 'Countries' },
] as const;

function FoundedYearBadge() {
  const ref = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const yearEl = yearRef.current;
    if (!el || !yearEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || ran.current) return;
        ran.current = true;
        el.classList.add('is-in');

        const start = performance.now();
        const duration = 1600;
        const from = 2008;
        const to = 2017;

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) ** 3;
          yearEl.textContent = String(Math.round(from + (to - from) * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="about-founded" aria-label="Founded 2017">
      <span className="about-founded__glow about-founded__glow--warm" aria-hidden />
      <span className="about-founded__glow about-founded__glow--cool" aria-hidden />
      <span className="about-founded__label">Founded</span>
      <span ref={yearRef} className="about-founded__year">
        2008
      </span>
      <span className="about-founded__bar" aria-hidden />
    </div>
  );
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function StatCounter({ value, startDelay = 0 }: { value: number; startDelay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || ran.current) return;
        ran.current = true;
        const duration = 2200;

        const run = () => {
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            el.textContent = String(Math.round(value * easeOutCubic(progress)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        };

        window.setTimeout(run, startDelay);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, startDelay]);

  return (
    <span ref={ref} className="tabular-nums">
      0
    </span>
  );
}

const injectStyles = () => {
  const id = 'about-us-premium-enhanced';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .about-premium {
      background: #FAFAFA;
      color: #0F172A;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .font-editorial {
      font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
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

    /* Leadership — slow, smooth side entrances */
    .about-lead__card.reveal-left {
      transform: translateX(-120px);
      transition: opacity 1.9s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 1.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .about-lead__card.reveal-right {
      transform: translateX(120px);
      transition: opacity 1.9s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 1.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .about-lead__card.reveal-left.visible,
    .about-lead__card.reveal-right.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .reveal-scale {
      opacity: 0;
      transform: scale(0.92);
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

    /* ── Stagger ── */
    .stagger-children.visible > * {
      opacity: 1;
      transform: translateY(0);
    }
    .stagger-children > * {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .stagger-children > *:nth-child(1) { transition-delay: 0ms; }
    .stagger-children > *:nth-child(2) { transition-delay: 80ms; }
    .stagger-children > *:nth-child(3) { transition-delay: 160ms; }
    .stagger-children > *:nth-child(4) { transition-delay: 240ms; }
    .stagger-children > *:nth-child(5) { transition-delay: 320ms; }
    .stagger-children > *:nth-child(6) { transition-delay: 400ms; }

    /* ── Gradient Text ── */
    .gradient-text {
      background: linear-gradient(135deg, #2563EB 0%, #6366F1 40%, #06B6D4 70%, #8B5CF6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .gradient-text-warm {
      background: linear-gradient(135deg, #F59E0B 0%, #EF4444 40%, #EC4899 70%, #8B5CF6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Divider ── */
    .divider-light {
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(15,23,42,0.06), transparent);
    }

    /* ── Counter ── */
    .counter-num {
      font-variant-numeric: tabular-nums;
      letter-spacing: -0.03em;
    }

    /* ── Scroll Dot ── */
    @keyframes scrollDot {
      0%, 100% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(6px); opacity: 0.3; }
    }
    .animate-scroll-dot {
      animation: scrollDot 2s ease-in-out infinite;
    }

    /* ── Team Card ── */
    .team-card {
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  box-shadow 0.4s ease;
    }
    .team-card:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 20px 60px rgba(37,99,235,0.12);
    }

    /* ── Pulse Ring ── */
    @keyframes pulseRing {
      0% { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(2.5); opacity: 0; }
    }
    .pulse-ring::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px solid #2563EB;
      animation: pulseRing 2.5s ease-out infinite;
    }

    /* ── Origin Story Border Style ── */
    .origin-border {
      border-left: 3px solid #2563EB;
      padding-left: 24px;
    }

    /* ── Wavy Background ── */
    .wavy-bg {
      position: relative;
      overflow: hidden;
    }
    .wavy-bg::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 20% 50%, rgba(37,99,235,0.05) 0%, transparent 50%),
                  radial-gradient(circle at 80% 50%, rgba(99,102,241,0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    /* ── Floating Orbs ── */
    .floating-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      pointer-events: none;
      opacity: 0.3;
    }

    @keyframes floatOrb1 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -20px) scale(1.1); }
      66% { transform: translate(-20px, 30px) scale(0.9); }
    }

    @keyframes floatOrb2 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(-30px, 20px) scale(0.9); }
      66% { transform: translate(20px, -30px) scale(1.1); }
    }

    .float-orb-1 {
      animation: floatOrb1 8s ease-in-out infinite;
    }

    .float-orb-2 {
      animation: floatOrb2 10s ease-in-out infinite;
    }

    /* ── Bento Grid ── */
    .bento-card {
      background: white;
      border-radius: 20px;
      border: 1px solid rgba(15,23,42,0.06);
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .bento-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(15,23,42,0.08);
      border-color: rgba(37,99,235,0.2);
    }

    /* ── Gradient Border Card ── */
    .gradient-border-card {
      position: relative;
      background: white;
      border-radius: 20px;
      overflow: hidden;
    }
    .gradient-border-card::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 1.5px;
      border-radius: 20px;
      background: linear-gradient(135deg, #2563EB, #6366F1, #06B6D4, #8B5CF6);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .float-slow {
      animation: float 4s ease-in-out infinite;
    }

    /* ── Wave Divider ── */
    .wave-divider {
      position: relative;
      height: 60px;
      overflow: hidden;
    }
    .wave-divider svg {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 60px;
    }

    /* ── Confetti style dots ── */
    .confetti-dot {
      display: inline-block;
      animation: confettiPop 1.5s ease-in-out infinite;
    }
    @keyframes confettiPop {
      0%, 100% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.3) rotate(180deg); }
    }

    /* ── Image Frame ── */
    .image-frame {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
    }
    .image-frame::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;
      border: 2px solid transparent;
      background: linear-gradient(135deg, #2563EB, #6366F1, #06B6D4) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    /* ── Celebratory Badge ── */
    .celebrate-badge {
      background: linear-gradient(135deg, #FEF3C7, #FDE68A);
      border: 1px solid #F59E0B;
      color: #92400E;
    }

    /* ── Fun Fact Card ── */
    .fun-fact-card {
      background: linear-gradient(135deg, #EEF2FF, #E0E7FF);
      border-radius: 16px;
      padding: 20px 24px;
      border: 1px solid rgba(37,99,235,0.1);
    }

    /* ── Happy Team Member ── */
    .happy-card {
      transition: all 0.3s ease;
    }
    .happy-card:hover .happy-emoji {
      transform: scale(1.2) rotate(-10deg);
    }
    .happy-emoji {
      transition: transform 0.3s ease;
    }
      /* ── Hide scrollbar ── */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: visible !important;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* ── Wave path animation ── */
.wave-path {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawWave 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes drawWave {
  to {
    stroke-dashoffset: 0;
  }
}

.wave-dot {
  opacity: 0;
  animation: dotAppear 0.6s ease forwards;
  animation-delay: 0.8s;
}

@keyframes dotAppear {
  to {
    opacity: 1;
  }
}
  `;
  document.head.appendChild(style);
};

/* ─────────────────────────────────────────────
   HOOKS
   ───────────────────────────────────────────── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .stagger-children, .text-reveal-line');
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

function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let raf: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return { count, ref };
}



function CounterStat({ value, suffix = '', label, icon: Icon }: { value: number; suffix?: string; label: string; icon?: any }) {
  const { count, ref } = useCounter(value, 2200);
  return (
    <div className="text-center group">
      {Icon && (
        <div className="flex justify-center mb-2">
          <div className="p-2 rounded-full bg-gradient-to-br from-[#2563EB]/10 to-[#6366F1]/10 group-hover:scale-110 transition-transform duration-300">
            <Icon size={20} className="text-[#2563EB]" />
          </div>
        </div>
      )}
      <div className="text-4xl md:text-5xl font-light tracking-tighter counter-num text-[#0F172A]" ref={ref}>
        {count}
        <span className="gradient-text">{suffix}</span>
      </div>
      <div className="mt-1 text-xs font-medium text-slate-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const LEADERSHIP = [
  {
    name: 'Jyoti Gupta',
    role: 'Founder & CEO',
    image: leader2Img,
    bio: 'Leading with innovation and client success. 8+ years building technology that solves real problems.',
  },
  {
    name: 'Anand Nagar',
    role: 'Chief Technology Officer',
    image: leader1Img,
    bio: 'Driving technical excellence and architectural decisions. Shaped the engineering culture.',
  },
] as const;

const BELIEFS = [
  {
    title: 'Software should pay for itself',
    text: 'Every engagement is measured by the result it produces — 40% cost savings, 20% sales lifts, 3x faster reporting — not the hours it consumed.',
    icon: TrendingUp,
    accent: '#ea580c',
  },
  {
    title: 'Honesty is a feature',
    text: "We've talked clients out of projects, recommended cheaper tools than ours, and said 'don't build that yet' more times than any sales team would like. It's why 95% of clients stay.",
    icon: Heart,
    accent: '#2563EB',
  },
  {
    title: 'The price you approve is the invoice you receive',
    text: 'Transparent, itemized quotes — eight years, zero surprise bills.',
    icon: CheckCircle2,
    accent: '#208A86',
  },
  {
    title: 'Your challenges are our solution',
    text: 'Startups fighting budget limits, consultants fighting deadlines, enterprises fighting compliance complexity — the challenge defines the engagement, not a standard package.',
    icon: Target,
    accent: '#7c3aed',
  },
] as const;

const WHAT_WE_DO = [
  {
    step: '01',
    title: 'Build platforms',
    text: 'We build custom software, AI, and cloud platforms — one engineering standard across product, data, and infrastructure.',
    accent: '#ea580c',
    soft: 'rgba(234,88,12,0.1)',
    icon: Layers,
    links: [
      { label: 'Product Engineering', to: '/product-engineering' },
      { label: 'AI & Data', to: '/ai-data' },
      { label: 'Cloud & DevOps', to: '/cloud-devops' },
    ],
  },
  {
    step: '02',
    title: 'Ship our products',
    text: 'We implement our own products inside real client operations — not demos.',
    accent: '#2563EB',
    soft: 'rgba(37,99,235,0.1)',
    icon: Rocket,
    products: ['Rexo ERP', 'CleanPlan', 'Education ERP'],
  },
  {
    step: '03',
    title: 'Extend your team',
    text: 'We extend client teams with 100+ verified IT professionals across 20+ technology stacks.',
    accent: '#208A86',
    soft: 'rgba(32,138,134,0.12)',
    icon: Users,
    links: [{ label: 'Staff Augmentation', to: '/staff-augmentation' }],
  },
] as const;

const WHO_TRUST_CATEGORIES = [
  'Government research',
  'Data-focused firms',
  'Technology companies',
  'Service businesses',
] as const;

const WHO_TRUSTS_LOGOS = [
  { name: 'RRCAT', logo: RRCATLOGO },
  { name: 'DataInfa', logo: DataInfaLogo },
  { name: 'Bluethink', logo: BlueTinkLogo },
  { name: 'Career Wave', logo: CareerWaveLogo },
  { name: 'Chowgule', logo: ChowguleLogo },
  { name: 'CrickBro', logo: CrickBro },
  { name: 'Exatip Technologies', logo: ExatipTechnologies },
  { name: 'Mindefy', logo: MindefyLogo },
  { name: 'Shyam Future Tech', logo: ShyamFutureTech },
  { name: 'Siya Tech', logo: SiyaTechLogo },
  { name: 'SMT Labs', logo: SMTLabsLogo },
  { name: 'Techlene', logo: Techlene },
] as const;

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

export default function AboutUsPage() {
  const wrapperRef = useReveal();
  const [activeTeam, setActiveTeam] = useState<number | null>(null);

  useEffect(() => {
    injectStyles();
    document.title = 'About Us — NSS';
  }, []);

  return (
    <>
      <div className="about-page bg-white">
        {/* Hero — full-bleed right image with wavy edge */}
        <section className="about-hero-wave relative min-h-[min(88vh,760px)] overflow-hidden bg-white pt-28 sm:pt-32 lg:min-h-[720px] lg:pt-0">
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <clipPath id="aboutHeroWaveDesktop" clipPathUnits="objectBoundingBox">
                <path d="M0.6,0 C0.48,0.1 0.28,0.2 0.18,0.34 C0.08,0.5 0.14,0.6 0.2,0.7 C0.28,0.84 0.36,0.92 0.4,1 L1,1 L1,0 Z" />
              </clipPath>
              <clipPath id="aboutHeroWaveMobile" clipPathUnits="objectBoundingBox">
                <path d="M0,0.16 C0.18,0.08 0.42,0.02 0.68,0.03 C0.88,0.04 1,0.1 1,0.1 L1,1 L0,1 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Soft rim behind media — depth on the left edge */}
          <div
            className="about-hero-wave__rim pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[56%] bg-[#208A86]/30 lg:block"
            aria-hidden="true"
          />

          {/* Right image panel — full section height, clipped by wave */}
          <div
            className="about-hero-wave__media pointer-events-none absolute inset-x-0 bottom-0 top-auto h-[42%] w-full lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[56%]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[#1a7a76]" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80"
              alt="NSS office meeting"
              className="absolute inset-0 h-full w-full object-cover object-[center_40%] lg:object-[62%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a7a76]/55 via-[#208A86]/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
          </div>

          {/* Curve accent stroke along the left border */}
          <svg
            className="about-hero-wave__stroke pointer-events-none absolute inset-y-0 right-0 z-[1] hidden h-full w-[56%] lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="aboutWaveStrokeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#5eead4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              className="about-hero-wave__stroke-path"
              d="M60,0 C48,10 28,20 18,34 C8,50 14,60 20,70 C28,84 36,92 40,100"
              fill="none"
              stroke="url(#aboutWaveStrokeGrad)"
              strokeWidth="1.15"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative z-10 mx-auto flex min-h-[inherit] w-full max-w-[1200px] items-center px-6 pb-[46%] pt-4 sm:px-6 lg:items-center lg:px-0 lg:pb-16 lg:pt-28">
            <div className="w-full max-w-xl pb-6 text-center lg:max-w-[46%] lg:pb-8 lg:pl-0 lg:text-left">
              <h1 className="font-editorial a1 text-[#0F172A]">
                <ScrollTextReveal
                  tag="span"
                  align="left"
                  animate="words"
                  textColor="#0F172A"
                  letterInterval={LETTER_INTERVAL}
                  wordGap="0.2em"
                  style={{
                    display: 'block',
                    width: '100%',
                    fontSize: 'clamp(2.35rem, 5.2vw, 3.85rem)',
                    lineHeight: 1.1,
                    letterSpacing: '0.04em',
                    fontWeight: 600,
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                  words={[...HERO_WORDS]}
                />
              </h1>

              <p className="sr sr-d1 mx-auto mt-5 max-w-[34rem] text-[1.02rem] leading-relaxed text-slate-500 lg:mx-0 lg:text-[1.08rem]">
                500+ projects. 95% retention. 15+ countries. Here&apos;s how a team from Indore got
                there — and the principles that keep clients for years, not quarters.
              </p>

              <div className="sr sr-d2 mt-10 flex flex-wrap items-stretch justify-center lg:justify-start">
                {HERO_STATS.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex min-w-[6.5rem] flex-col px-5 py-1 text-center first:pl-0 last:pr-0 sm:min-w-[7.5rem] sm:px-7 lg:text-left ${
                      index > 0 ? 'border-l border-slate-300/80' : ''
                    }`}
                  >
                    <p className="text-[1.85rem] font-bold leading-none tracking-tight text-slate-900 sm:text-[2.1rem]">
                      <StatCounter value={stat.value} startDelay={index * 200} />
                      <span>{stat.suffix}</span>
                    </p>
                    <p className="mt-2 text-[0.88rem] font-normal text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="about-premium" ref={wrapperRef}>

      {/* ===== ORIGIN STORY ===== */}
      <section
        id="story"
        className="relative overflow-hidden bg-white px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          {/* Header */}
          <div className="flex flex-col gap-5 border-b border-slate-200/80 pb-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[#0F172A]">
                <ScrollTextReveal
                  tag="span"
                  align="left"
                  animate="scroll"
                  textColor="#0F172A"
                  letterInterval={LETTER_INTERVAL}
                  wordGap="0.2em"
                  style={TITLE_STYLE_LG}
                  words={titleWords('Where we started')}
                />
              </h2>
              <div className="reveal-up mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.9rem]">
                <span className="inline-flex items-center gap-2 font-medium text-slate-700">
                  <Calendar size={15} className="text-[#ea580c]" />
                  Est. 2017
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden />
                <span className="inline-flex items-center gap-2 font-medium text-slate-700">
                  <MapPin size={15} className="text-[#2563EB]" />
                  Indore, India
                </span>
              </div>
            </div>

            <FoundedYearBadge />
          </div>

          {/* Story copy + practices */}
          <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="relative space-y-5 lg:col-span-7 lg:pl-7">
              <span
                className="absolute left-0 top-1 hidden h-[calc(100%-0.5rem)] w-[3px] rounded-full lg:block"
                style={{
                  background: 'linear-gradient(180deg, #ea580c 0%, #2563EB 55%, #208A86 100%)',
                }}
                aria-hidden
              />
              <p className="reveal-up text-[1.05rem] leading-[1.75] text-slate-600">
                We started in 2017 in Indore with a simple observation: businesses didn&apos;t need more
                technology — they needed technology that simplified things instead of adding to the
                pile. That meant custom software shaped to real workflows, cloud infrastructure that
                didn&apos;t require a translator, and later, AI that reached production instead of the
                pitch deck.
              </p>
              <p className="reveal-up text-[1.05rem] leading-[1.75] text-slate-600">
                The focus deepened from there: AI/ML, data engineering, and cloud optimization became
                core practices. The client base spread from India across North America, Europe, Asia,
                Australia, and the Middle East — startups, consultants, and enterprises, each with
                different constraints and the same expectation of delivery.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5">
              {[
                { icon: Brain, title: 'AI / ML', text: 'Production systems — not pitch decks.', accent: '#ea580c', soft: 'rgba(234,88,12,0.1)' },
                { icon: Layers, title: 'Data engineering', text: 'Pipelines shaped to real workflows.', accent: '#2563EB', soft: 'rgba(37,99,235,0.1)' },
                { icon: Globe, title: 'Cloud optimization', text: 'Infrastructure without the translator.', accent: '#208A86', soft: 'rgba(32,138,134,0.12)' },
              ].map(({ icon: Icon, title, text, accent, soft }, i) => (
                <div
                  key={title}
                  className="reveal-up group flex gap-4 rounded-2xl border border-slate-200/90 bg-[#fafafa] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_40px_-24px_rgba(15,23,42,0.25)]"
                  style={{ transitionDelay: `${i * 60}ms`, borderColor: 'rgba(226,232,240,0.95)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(226,232,240,0.95)';
                  }}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ background: soft, color: accent }}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-[0.95rem] font-semibold text-[#0F172A]">{title}</p>
                    <p className="mt-1 text-[0.88rem] leading-relaxed text-slate-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regions */}
          <div className="reveal-up mt-8 flex flex-col gap-3 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
              <Globe size={14} className="text-[#2563EB]" />
              Where we deliver
            </p>
            <div className="flex flex-wrap gap-2">
              {['India', 'North America', 'Europe', 'Asia', 'Australia', 'Middle East'].map(
                (region) => (
                  <span
                    key={region}
                    className="rounded-full border border-orange-100 bg-gradient-to-r from-orange-50 to-blue-50 px-3.5 py-1.5 text-[0.8rem] font-medium text-slate-700"
                  >
                    {region}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE BELIEVE ===== */}
      <section
        id="beliefs"
        className="relative overflow-hidden bg-gray-50 px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        aria-labelledby="beliefs-heading"
      >
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mb-9 flex flex-col items-center text-center sm:mb-11">
            <h2 id="beliefs-heading" className="text-[#0F172A]">
              <ScrollTextReveal
                tag="span"
                align="center"
                animate="scroll"
                textColor="#0F172A"
                letterInterval={LETTER_INTERVAL}
                wordGap="0.2em"
                style={TITLE_STYLE}
                words={titleWords('What we believe and practice')}
              />
            </h2>
            <p className="reveal-up mx-auto mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-slate-500 sm:mt-4 sm:text-[1.05rem]">
              Results over hours. Honesty over upsells. Clear quotes. Challenges that shape the work —
              not a packaged checklist.
            </p>
            <span className="about-beliefs__title-line reveal-up mt-4" aria-hidden />
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
            {BELIEFS.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="about-belief group reveal-up relative flex h-full min-h-[12.5rem] flex-col overflow-hidden rounded-[1.5rem] bg-white px-5 pb-[3.75rem] pt-4 sm:min-h-[13.25rem] sm:rounded-[1.65rem] sm:px-6 sm:pb-16 sm:pt-5"
                  style={
                    {
                      '--belief-accent': item.accent,
                      '--belief-delay': `${index * 0.35}s`,
                      transitionDelay: `${index * 80}ms`,
                    } as React.CSSProperties
                  }
                >
                  <span className="about-belief__shine" aria-hidden />
                  <span className="about-belief__glow" aria-hidden />
                  <span className="about-belief__index" aria-hidden>
                    0{index + 1}
                  </span>

                  <span className="about-belief__ripples pointer-events-none" aria-hidden>
                    <span />
                    <span />
                    <span />
                  </span>

                  <div className="about-belief__copy relative z-[1] max-w-[88%]">
                    <h3 className="text-[1.08rem] font-bold leading-[1.25] tracking-tight text-slate-900 sm:text-[1.18rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.88rem] font-normal leading-[1.55] text-slate-500 sm:text-[0.9rem]">
                      {item.text}
                    </p>
                  </div>

                  <div className="about-belief__icon pointer-events-none absolute bottom-3 right-3 z-[2] sm:bottom-3.5 sm:right-3.5">
                    <span
                      className="about-belief__icon-blob"
                      style={{ background: item.accent }}
                      aria-hidden
                    />
                    <span
                      className="about-belief__icon-stack"
                      style={{ '--icon-tone': item.accent } as React.CSSProperties}
                    >
                      <span className="about-belief__icon-plate about-belief__icon-plate--back" aria-hidden />
                      <span className="about-belief__icon-plate about-belief__icon-plate--mid" aria-hidden />
                      <span className="about-belief__icon-face">
                        <Icon size={26} strokeWidth={1.7} />
                      </span>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO TODAY ===== */}
      <section
        id="what-we-do"
        className="relative overflow-hidden bg-white px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
        aria-labelledby="what-we-do-heading"
      >
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mb-8 flex flex-col items-center text-center sm:mb-9">
            <h2 id="what-we-do-heading" className="text-[#0F172A]">
              <ScrollTextReveal
                tag="span"
                align="center"
                animate="scroll"
                textColor="#0F172A"
                letterInterval={LETTER_INTERVAL}
                wordGap="0.2em"
                style={TITLE_STYLE}
                words={titleWords('What we do today')}
              />
            </h2>
            <p className="reveal-up mx-auto mt-2.5 max-w-2xl text-[0.98rem] leading-relaxed text-slate-500 sm:mt-3 sm:text-[1.05rem]">
              Three ways of working, one engineering standard.
            </p>
            <span className="about-beliefs__title-line reveal-up mt-3.5" aria-hidden />
          </div>

          <div className="about-do-flow relative mx-auto max-w-5xl">
            <span className="about-do-flow__rail" aria-hidden />

            {WHAT_WE_DO.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="about-do-row group reveal-up relative grid grid-cols-[3rem_1fr] gap-4 py-4 sm:grid-cols-[4.5rem_1fr] sm:gap-7 sm:py-5"
                  style={
                    {
                      '--do-accent': item.accent,
                      transitionDelay: `${index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div className="relative z-[1] flex flex-col items-center">
                    <span className="about-do-row__node">
                      <Icon size={18} strokeWidth={1.85} />
                    </span>
                    <span className="mt-1.5 text-[0.7rem] font-bold tracking-[0.14em] text-slate-400">
                      {item.step}
                    </span>
                  </div>

                  <div className="min-w-0 pb-0.5 text-left">
                    <h3 className="text-[1.15rem] font-bold tracking-tight text-slate-900 sm:text-[1.25rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-[0.92rem] leading-[1.55] text-slate-500">
                      {item.text}
                    </p>

                    {'products' in item && item.products ? (
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                        {item.products.map((name) => (
                          <span
                            key={name}
                            className="inline-flex items-center gap-2 text-[0.84rem] font-medium text-slate-700"
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ background: item.accent }}
                              aria-hidden
                            />
                            {name}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {'links' in item && item.links ? (
                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                        {item.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="about-do-row__link inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-slate-800"
                          >
                            {link.label}
                            <ArrowUpRight size={14} strokeWidth={2.2} />
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHO TRUSTS US ===== */}
      <section
        id="who-trusts-us"
        className="about-trust relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
        aria-labelledby="who-trusts-heading"
      >
        <div className="about-trust__aura" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
            <h2 id="who-trusts-heading" className="text-[#0F172A]">
              <ScrollTextReveal
                tag="span"
                align="center"
                animate="scroll"
                textColor="#0F172A"
                letterInterval={LETTER_INTERVAL}
                wordGap="0.2em"
                style={TITLE_STYLE}
                words={titleWords('Who trusts us')}
              />
            </h2>
            <p className="reveal-up mx-auto mt-3 max-w-xl text-[1.02rem] leading-relaxed text-slate-500 sm:text-[1.08rem]">
              From research labs to product companies — trust earned on delivery.
            </p>
            <span className="about-beliefs__title-line reveal-up mt-4" aria-hidden />
          </div>

          <div className="about-trust__rail reveal-up mb-10 sm:mb-12" role="list">
            {WHO_TRUST_CATEGORIES.map((title, i) => (
              <React.Fragment key={title}>
                {i > 0 ? <span className="about-trust__rail-dot" aria-hidden /> : null}
                <span className="about-trust__rail-item" role="listitem">
                  {title}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="about-trust__stage reveal-up relative z-10" aria-label="Client logos">
          <div className="about-trust__marquee about-trust__marquee--left">
            <div className="about-trust__marquee-track">
              {[...WHO_TRUSTS_LOGOS, ...WHO_TRUSTS_LOGOS].map((item, i) => (
                <div key={`a-${item.name}-${i}`} className="about-trust__tile" title={item.name}>
                  <img src={item.logo} alt={item.name} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <p className="about-trust__closer reveal-up mt-12 text-center sm:mt-14" style={{ transitionDelay: '160ms' }}>
            <span className="about-trust__closer-soft">Across every one:</span>{' '}
            <span className="about-trust__closer-emph">delivery, measured.</span>
          </p>
        </div>
      </section>

      {/* ===== WHERE WE WORK ===== */}
      {/* <section
        id="where-we-work"
        className="about-work relative overflow-hidden bg-slate-50 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        aria-labelledby="where-we-work-heading"
      >
        <div className="about-work__grid" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
            <h2 id="where-we-work-heading" className="text-[#0F172A]">
              <ScrollTextReveal
                tag="span"
                align="center"
                animate="scroll"
                textColor="#0F172A"
                letterInterval={LETTER_INTERVAL}
                wordGap="0.2em"
                style={TITLE_STYLE}
                words={titleWords('Where we work')}
              />
            </h2>
            <span className="about-beliefs__title-line reveal-up mt-3.5" aria-hidden />
          </div>

          <div className="about-work__layout reveal-up">
            <div className="about-work__hq">
              <p className="about-work__label">
                <span className="about-work__label-icon" aria-hidden>
                  <MapPin size={18} strokeWidth={2.35} />
                </span>
                Location
              </p>

              <address className="about-work__address not-italic">
                {[
                  '308 Shagun Arcade',
                  'Plot No. 8, PU-4, Scheme No. 54',
                  'AB Road, Vijay Nagar',
                  'Indore (M.P.) 452010, India',
                ].map((line) => (
                  <span key={line} className="about-work__line">
                    {line}
                  </span>
                ))}
              </address>

              <div className="about-work__cta">
                <Link to="/contact-us" className="about-work__btn about-work__btn--primary">
                  Work with us
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </Link>
                <Link to="/careers" className="about-work__btn about-work__btn--ghost">
                  Join us
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </Link>
              </div>
            </div>

            <div className="about-work__spine" aria-hidden>
              <span className="about-work__spine-dot" />
              <span className="about-work__spine-rail" />
              <span className="about-work__spine-dot about-work__spine-dot--end" />
            </div>

            <div className="about-work__reach">
              <p className="about-work__stat">
                <span className="about-work__stat-num">15+</span>
                <span className="about-work__stat-label">locations worldwide</span>
              </p>
              <p className="about-work__reach-copy">
                Delivery and support across time zones — so your team always has cover where the work happens.
              </p>
              <div className="about-work__zones" aria-hidden>
                {['Americas', 'Europe', 'Asia', 'ANZ'].map((zone) => (
                  <span key={zone} className="about-work__zone">
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="divider-light max-w-5xl mx-auto" />

      {/* ===== LEADERSHIP ===== */}
      <section
        id="leadership"
        className="about-lead relative overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        aria-labelledby="leadership-heading"
      >
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mb-12 flex flex-col items-center text-center sm:mb-16">
            <h2 id="leadership-heading" className="text-[#0F172A]">
              <ScrollTextReveal
                tag="span"
                align="center"
                animate="scroll"
                textColor="#0F172A"
                letterInterval={LETTER_INTERVAL}
                wordGap="0.2em"
                style={TITLE_STYLE}
                words={titleWords('The team behind the vision')}
              />
            </h2>
            <span className="about-beliefs__title-line reveal-up mt-3.5" aria-hidden />
          </div>

          <div className="about-lead__rows">
            {LEADERSHIP.map((leader, i) => (
              <article
                key={leader.name}
                className={`about-lead__card ${i % 2 === 1 ? 'about-lead__card--reverse' : ''} ${
                  i % 2 === 0 ? 'reveal-left' : 'reveal-right'
                }`}
                style={
                  {
                    transitionDelay: `${i * 280}ms`,
                    '--lead-accent': i % 2 === 0 ? '#ea580c' : '#2563eb',
                    '--lead-accent-soft':
                      i % 2 === 0 ? 'rgba(234, 88, 12, 0.22)' : 'rgba(37, 99, 235, 0.2)',
                  } as React.CSSProperties
                }
              >
                <div
                  className={`about-lead__media${i % 2 === 0 ? ' about-lead__media--warm' : ' about-lead__media--cool'}`}
                >
                  <span className="about-lead__media-glow" aria-hidden />
                  <span className="about-lead__media-frame" aria-hidden />
                  <div className="about-lead__media-shot">
                    <img src={leader.image} alt={leader.name} loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="about-lead__copy">
                  <h3 className="about-lead__name">{leader.name}</h3>
                  <span className="about-lead__badge">{leader.role}</span>
                  <p className="about-lead__bio">{leader.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-light max-w-5xl mx-auto" />

      <Team />
      <section
        id="where-we-work"
        className="about-work relative overflow-hidden bg-slate-50 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        aria-labelledby="where-we-work-heading"
      >
        <div className="about-work__grid" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
            <h2 id="where-we-work-heading" className="text-[#0F172A]">
              <ScrollTextReveal
                tag="span"
                align="center"
                animate="scroll"
                textColor="#0F172A"
                letterInterval={LETTER_INTERVAL}
                wordGap="0.2em"
                style={TITLE_STYLE}
                words={titleWords('Where we work')}
              />
            </h2>
            <span className="about-beliefs__title-line reveal-up mt-3.5" aria-hidden />
          </div>

          <div className="about-work__layout reveal-up">
            <div className="about-work__hq">
              <p className="about-work__label">
                <span className="about-work__label-icon" aria-hidden>
                  <MapPin size={18} strokeWidth={2.35} />
                </span>
                Location
              </p>

              <address className="about-work__address not-italic">
                {[
                  '308 Shagun Arcade',
                  'Plot No. 8, PU-4, Scheme No. 54',
                  'AB Road, Vijay Nagar',
                  'Indore (M.P.) 452010, India',
                ].map((line) => (
                  <span key={line} className="about-work__line">
                    {line}
                  </span>
                ))}
              </address>

              <div className="about-work__cta">
                <Link to="/contact-us" className="about-work__btn about-work__btn--primary">
                  Work with us
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </Link>
                <Link to="/careers" className="about-work__btn about-work__btn--ghost">
                  Join us
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </Link>
              </div>
            </div>

            <div className="about-work__spine" aria-hidden>
              <span className="about-work__spine-dot" />
              <span className="about-work__spine-rail" />
              <span className="about-work__spine-dot about-work__spine-dot--end" />
            </div>

            <div className="about-work__reach">
              <p className="about-work__stat">
                <span className="about-work__stat-num">15+</span>
                <span className="about-work__stat-label">locations worldwide</span>
              </p>
              <p className="about-work__reach-copy">
                Delivery and support across time zones — so your team always has cover where the work happens.
              </p>
              <div className="about-work__zones" aria-hidden>
                {['Americas', 'Europe', 'Asia', 'ANZ'].map((zone) => (
                  <span key={zone} className="about-work__zone">
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}