// AboutUsPage.tsx - Enhanced Premium with Joyful Design
import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Globe,
  Award,
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
  Twitter,
  Linkedin,
  Calendar,
  Crown,
  User,
  Coffee,
  Laptop,
  Wifi,
  ArrowUpRight,
  Star,
  Hexagon,
  Triangle,
  MoveRight,
  PlayCircle,
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
  Compass,
  Layers,
  BarChart3,
  CheckCircle2,
  CircleDot,
  Brush,
  Sparkle,
  Orbit,
  Flower,
  Gem,
  Music,
  Camera,
} from 'lucide-react';

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

const TEAM_MEMBERS = [
  {
    name: 'Ana Belić',
    role: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
    bio: 'Crafting interfaces that users actually enjoy',
    color: '#2563EB',
    emoji: '🎨',
  },
  {
    name: 'Brian Hanley',
    role: 'Brand Strategist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
    bio: 'Building brands that connect and inspire',
    color: '#6366F1',
    emoji: '🚀',
  },
  {
    name: 'Darko Stanković',
    role: 'Web Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: 'Building fast, reliable, and scalable apps',
    color: '#059669',
    emoji: '💻',
  },
  {
    name: 'Sarah Chen',
    role: 'ML Engineer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    bio: 'Turning data into intelligent solutions',
    color: '#7C3AED',
    emoji: '🧠',
  },
  {
    name: 'Marcus Johnson',
    role: 'Cloud Architect',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
    bio: 'Designing resilient cloud infrastructure',
    color: '#0891B2',
    emoji: '☁️',
  },
  {
    name: 'Priya Sharma',
    role: 'DevOps Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    bio: 'Automating deployments and scaling systems',
    color: '#D97706',
    emoji: '⚡',
  },
];

const LEADERSHIP = [
  {
    name: 'Vikram Singh',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    bio: 'Leading with innovation and client success. 8+ years building technology that solves real problems.',
    color: '#2563EB',
    emoji: '👑',
  },
  {
    name: 'Ananya Reddy',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
    bio: 'Driving technical excellence and architectural decisions. Shaped the engineering culture.',
    color: '#6366F1',
    emoji: '🔧',
  },
  {
    name: 'Arjun Mehta',
    role: 'Head of AI/ML',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: 'Pioneering AI solutions that deliver real business impact. Built production-ready AI systems.',
    color: '#059669',
    emoji: '🤖',
  },
];

const FUN_FACTS = [
  { emoji: '🎉', fact: 'We celebrate every deployment with a dance party in the office' },
  { emoji: '☕', fact: 'We go through 200+ cups of chai every week' },
  { emoji: '🌍', fact: 'Our team speaks 8 different languages' },
  { emoji: '🏆', fact: 'We\'ve won 12 industry awards in the last 3 years' },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

export default function AboutUsPage() {
  const wrapperRef = useReveal();
  const [activeTeam, setActiveTeam] = useState<number | null>(null);
  const [activeLeader, setActiveLeader] = useState<number | null>(null);
  const [activeFunFact, setActiveFunFact] = useState<number | null>(null);

  useEffect(() => {
    injectStyles();
    document.title = 'About Us — NSS';
  }, []);

  return (
    <div className="about-premium" ref={wrapperRef}>
      
      {/* ===== HERO - Enhanced ===== */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
        {/* Floating Orbs */}
        <div className="floating-orb float-orb-1 w-96 h-96 bg-[#2563EB] top-[-100px] right-[-100px]" />
        <div className="floating-orb float-orb-2 w-80 h-80 bg-[#6366F1] bottom-[-80px] left-[-80px]" />
        
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-8 reveal-up">
            <span className="relative w-2.5 h-2.5 rounded-full bg-[#2563EB] pulse-ring" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">About Us</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">·</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]/60 celebrate-badge px-3 py-1 rounded-full">
              ✨ Celebrating 8 Years
            </span>
          </div>

          <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#0F172A] leading-[1.05] tracking-tight reveal-up" style={{ transitionDelay: '100ms' }}>
            The company
            <br />
            <span className="gradient-text">behind the magic</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-xl mt-6 reveal-up" style={{ transitionDelay: '200ms' }}>
            500+ projects. 95% retention. 15+ countries. And a team that actually enjoys working together.
          </p>

          <div className="flex flex-wrap gap-12 mt-10 reveal-up" style={{ transitionDelay: '300ms' }}>
            <CounterStat value={500} suffix="+" label="Projects" icon={Briefcase} />
            <CounterStat value={95} suffix="%" label="Retention" icon={Heart} />
            <CounterStat value={15} suffix="+" label="Countries" icon={Globe} />
          </div>

          <div className="flex flex-wrap gap-4 mt-12 reveal-up" style={{ transitionDelay: '400ms' }}>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Work With Us
              <ArrowRight size={18} />
            </a>
            <a href="#story" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-[#0F172A] font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300">
              Learn More
            </a>
          </div>

          <div className="mt-16 flex items-center gap-3 text-slate-400 reveal-up" style={{ transitionDelay: '500ms' }}>
            <div className="w-px h-10 bg-gradient-to-b from-slate-300 to-transparent" />
            <span className="text-xs uppercase tracking-widest font-medium animate-bounce">↓ Scroll to explore</span>
          </div>
        </div>
      </section>

      <div className="divider-light max-w-5xl mx-auto" />

      {/* ===== ORIGIN STORY - Enhanced ===== */}
      <section id="story" className="py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB] mb-6 block reveal-up">
                <span className="inline-flex items-center gap-2">
                  <PartyPopper size={14} />
                  Origin Story
                </span>
              </span>
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#0F172A] leading-tight tracking-tight reveal-up" style={{ transitionDelay: '100ms' }}>
                Where we started
              </h2>
              
              <div className="origin-border mt-6">
                <p className="text-lg text-slate-600 leading-relaxed reveal-up" style={{ transitionDelay: '150ms' }}>
                  We started in <span className="font-semibold text-[#0F172A]">2017 in Indore</span> with a simple observation: businesses didn't need more technology — they needed technology that <span className="font-semibold text-[#0F172A]">simplified things</span> instead of adding to the pile.
                </p>
              </div>
              
              <div className="mt-6 space-y-5">
                <p className="text-lg text-slate-600 leading-relaxed reveal-up" style={{ transitionDelay: '200ms' }}>
                  That meant custom software shaped to real workflows, cloud infrastructure that didn't require a translator, and later, AI that reached production instead of the pitch deck.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed reveal-up" style={{ transitionDelay: '250ms' }}>
                  The client base spread from India across North America, Europe, Asia, Australia, and the Middle East — startups, consultants, and enterprises, each with different constraints and the same expectation of delivery.
                </p>
              </div>

              {/* Fun Facts */}
              <div className="grid grid-cols-2 gap-3 mt-8 reveal-up" style={{ transitionDelay: '300ms' }}>
                {FUN_FACTS.map((fact, i) => (
                  <div
                    key={i}
                    className="fun-fact-card"
                    onMouseEnter={() => setActiveFunFact(i)}
                    onMouseLeave={() => setActiveFunFact(null)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{fact.emoji}</span>
                      <span className="text-xs text-slate-600 leading-relaxed">{fact.fact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Enhanced Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="gradient-border-card">
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#6366F1] flex items-center justify-center shadow-lg shadow-[#2563EB]/20">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0F172A]">Est. 2017</p>
                      <p className="text-sm text-slate-500">8 years of consistent delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gradient-border-card">
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center shadow-lg shadow-[#F59E0B]/20">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0F172A]">Indore, India</p>
                      <p className="text-sm text-slate-500">Headquarters</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="image-frame reveal-right" style={{ transitionDelay: '300ms' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team"
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400 justify-end">
                <Camera size={14} />
                <span>Our team, celebrating a big win</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-light max-w-5xl mx-auto" />

      {/* ===== LEADERSHIP - Enhanced ===== */}
      <section className="py-32 px-6 md:px-12 lg:px-20 wavy-bg relative overflow-hidden">
        <div className="floating-orb float-orb-1 w-64 h-64 bg-[#6366F1] top-[-80px] right-[-80px]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB] mb-4 block reveal-up">
              <span className="inline-flex items-center gap-2">
                <Crown size={14} />
                Leadership
              </span>
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#0F172A] leading-tight tracking-tight reveal-up" style={{ transitionDelay: '100ms' }}>
              The team behind the <span className="gradient-text">vision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LEADERSHIP.map((leader, i) => {
              const isActive = activeLeader === i;
              return (
                <div
                  key={i}
                  className="group"
                  style={{
                    opacity: 0,
                    transform: 'translateY(30px)',
                    animation: `fadeUp 0.6s ease ${i * 0.1 + 0.2}s forwards`,
                  }}
                  onMouseEnter={() => setActiveLeader(i)}
                  onMouseLeave={() => setActiveLeader(null)}
                >
                  <div className={`relative rounded-2xl overflow-hidden bg-white border-2 transition-all duration-500 ${
                    isActive ? 'border-[#2563EB] shadow-xl -translate-y-2' : 'border-slate-100 hover:shadow-xl hover:-translate-y-1'
                  }`}>
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 right-4 text-3xl">{leader.emoji}</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-white font-semibold">{leader.name}</div>
                      <div className="text-white/80 text-sm">{leader.role}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-[#0F172A]">{leader.name}</h3>
                          <p className="text-sm text-slate-500">{leader.role}</p>
                        </div>
                        <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-all duration-300">
                          <Linkedin size={14} />
                        </a>
                      </div>
                      <p className="text-sm text-slate-600 mt-2">{leader.bio}</p>
                      <div className={`mt-3 h-0.5 rounded-full transition-all duration-500 ${isActive ? 'w-12' : 'w-8 group-hover:w-12'}`} style={{ background: leader.color }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider-light max-w-5xl mx-auto" />

      {/* ===== OUR TEAM - Enhanced with Joyful Design ===== */}
      <section className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="floating-orb float-orb-2 w-72 h-72 bg-[#06B6D4] bottom-[-100px] left-[-100px]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB] mb-4 block reveal-up">
              <span className="inline-flex items-center gap-2">
                <Users size={14} />
                Our Team
              </span>
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#0F172A] leading-tight tracking-tight reveal-up" style={{ transitionDelay: '100ms' }}>
              The amazing people <br className="hidden md:block" />
              <span className="gradient-text-warm">behind the work</span>
            </h2>
            <p className="text-slate-500 text-lg mt-3 reveal-up" style={{ transitionDelay: '150ms' }}>
              Engineers, designers, and strategists — one team, one mission. <span className="text-xl">✨</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, i) => {
              const isActive = activeTeam === i;
              return (
                <div
                  key={i}
                  className="group team-card"
                  style={{
                    opacity: 0,
                    transform: 'translateY(30px)',
                    animation: `fadeUp 0.6s ease ${i * 0.08 + 0.2}s forwards`,
                  }}
                  onMouseEnter={() => setActiveTeam(i)}
                  onMouseLeave={() => setActiveTeam(null)}
                >
                  <div className={`relative rounded-2xl overflow-hidden bg-white border-2 transition-all duration-500 ${
                    isActive ? 'border-[#2563EB] shadow-xl' : 'border-slate-100 hover:border-[#2563EB]/30'
                  }`}>
                    <div className="aspect-square overflow-hidden relative">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-3 right-3 text-2xl happy-emoji">{member.emoji}</div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-[#0F172A]">{member.name}</h3>
                          <p className="text-sm text-slate-500">{member.role}</p>
                        </div>
                        <div className="flex gap-1.5">
                          <a href="#" className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-all duration-300">
                            <Linkedin size={12} />
                          </a>
                          <a href="#" className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-all duration-300">
                            <Twitter size={12} />
                          </a>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mt-1">{member.bio}</p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                        <span>❤️</span>
                        <span>Loves what they do</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 reveal-up">
            <p className="text-sm text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Heart size={14} className="text-red-400 fill-red-400" />
                Built with love in Indore
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="divider-light max-w-5xl mx-auto" />

      {/* ===== BIG STATEMENT - Enhanced ===== */}
      <section className="py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="floating-orb float-orb-1 w-64 h-64 bg-[#8B5CF6] top-[-80px] left-[-80px]" />
        <div className="floating-orb float-orb-2 w-48 h-48 bg-[#06B6D4] bottom-[-60px] right-[-60px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-5xl mb-4 reveal-up">🚀</div>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-7xl text-[#0F172A] leading-[1.1] tracking-tight">
            <TextReveal lines={["We don't sell hours.", "We ship outcomes."]} />
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mt-6 leading-relaxed">
            Every line of code, every model trained, every infrastructure decision — measured against the result it produces for your business.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="text-3xl animate-bounce">✨</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>⭐</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌟</span>
          </div>
        </div>
      </section>

      <div className="divider-light max-w-5xl mx-auto" />

      {/* ===== LOCATION - Enhanced ===== */}
      <section className="py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB] mb-4 block reveal-up">
                <span className="inline-flex items-center gap-2">
                  <Compass size={14} />
                  Location
                </span>
              </span>
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#0F172A] leading-tight tracking-tight reveal-up" style={{ transitionDelay: '100ms' }}>
                Where we <span className="gradient-text">work & play</span>
              </h2>
              <p className="text-lg text-slate-600 mt-6 leading-relaxed reveal-up" style={{ transitionDelay: '150ms' }}>
                Headquartered in Indore, India — with delivery and support across time zones for clients in 15+ locations worldwide.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm reveal-up" style={{ transitionDelay: '200ms' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#6366F1] flex items-center justify-center shadow-lg shadow-[#2563EB]/20 flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">308 Shagun Arcade</p>
                    <p className="text-sm text-slate-500">Plot No. 8, PU-4, Scheme No. 54</p>
                    <p className="text-sm text-slate-500">AB Road, Vijay Nagar, Indore 452010</p>
                    <p className="text-xs text-slate-400 mt-1">📍 Come say hi! We have chai ☕</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-10 reveal-up" style={{ transitionDelay: '300ms' }}>
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Work With Us
                  <ArrowRight size={18} />
                </a>
                <a href="/careers" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-[#0F172A] font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300">
                  Join Us 🎯
                </a>
              </div>
            </div>

            <div className="reveal-right" style={{ transitionDelay: '200ms' }}>
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Office"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400 mt-3 justify-end">
                <Camera size={14} />
                <span>Our office space — where magic happens</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA - Enhanced with Joyful Design ===== */}
      <section className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A]" />
        <div className="floating-orb float-orb-1 w-96 h-96 bg-[#2563EB] top-[-150px] right-[-100px] opacity-20" />
        <div className="floating-orb float-orb-2 w-80 h-80 bg-[#8B5CF6] bottom-[-100px] left-[-100px] opacity-20" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles size={16} className="text-[#2563EB]" />
            <span className="text-xs font-bold text-white/80 tracking-widest">READY TO BUILD</span>
            <span className="text-sm">🚀</span>
          </div>
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            Let's create something
            <br />
            <span className="gradient-text">remarkable together</span>
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
            500+ projects delivered. 95% client retention. And a team that actually cares about your success.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0F172A] font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Work With Us
              <ArrowRight size={18} />
            </a>
            <a href="/case-studies" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              See Our Work ✨
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <span className="text-white/30 text-sm">❤️</span>
            <span className="text-white/30 text-sm">⭐</span>
            <span className="text-white/30 text-sm">🌟</span>
            <span className="text-white/30 text-sm">💪</span>
            <span className="text-white/30 text-sm">🚀</span>
          </div>
        </div>
      </section>
    </div>
  );
}