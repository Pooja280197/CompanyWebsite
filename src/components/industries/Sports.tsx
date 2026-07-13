// IndustrySports.tsx - Sports Industry Page (Light Theme Redesign)
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Trophy,
  Radio,
  Smartphone,
  Gamepad2,
  MailCheck,
  Table2,
  Repeat2,
  Share2,
  Gauge,
  Server,
  Network,
  Check,
  ArrowUpRight,
  Plus,
  Circle,
} from 'lucide-react';
import { BiChart } from 'react-icons/bi';

const injectStyles = () => {
  const id = 'sports-light-v2';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Instrument+Serif:ital@0;1&display=swap');

    .sports-light {
      background: #FAFAF9;
      color: #1C1917;
      overflow-x: hidden;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    .font-serif { font-family: 'Instrument Serif', Georgia, serif; }

    /* ── Headings ── */
    .hd-hero {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: clamp(48px, 7.5vw, 96px);
      line-height: 0.96;
      letter-spacing: -0.035em;
      font-weight: 400;
    }
    .hd-section {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: clamp(36px, 5vw, 60px);
      line-height: 1.06;
      letter-spacing: -0.025em;
      font-weight: 400;
    }
    .hd-problem {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: clamp(38px, 5.5vw, 68px);
      line-height: 1.04;
      letter-spacing: -0.025em;
      font-weight: 400;
    }

    /* ── Gradient text ── */
    .grad-text {
      background: linear-gradient(135deg, #EA580C 0%, #DC2626 50%, #DB2777 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Reveal animations ── */
    .rv { opacity: 0; transform: translateY(44px); transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1); }
    .rv.vis { opacity: 1; transform: translateY(0); }
    .rv-l { opacity: 0; transform: translateX(-50px); transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1); }
    .rv-l.vis { opacity: 1; transform: translateX(0); }
    .rv-r { opacity: 0; transform: translateX(50px); transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1); }
    .rv-r.vis { opacity: 1; transform: translateX(0); }

    /* ── Nav ── */
    .nav-bar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 50;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background: rgba(250,250,249,0.8);
      border-bottom: 1px solid rgba(28,25,23,0.05);
      transition: all 0.3s ease;
    }
    .nav-bar.scrolled {
      background: rgba(250,250,249,0.95);
      box-shadow: 0 1px 12px rgba(0,0,0,0.04);
    }

    /* ── Hero ── */
    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 60% 50% at 20% 40%, rgba(234,88,12,0.06) 0%, transparent 70%),
        radial-gradient(ellipse 50% 40% at 80% 60%, rgba(220,38,38,0.04) 0%, transparent 70%),
        radial-gradient(ellipse 40% 30% at 60% 20%, rgba(219,39,119,0.03) 0%, transparent 70%);
    }
    .hero-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(28,25,23,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(28,25,23,0.025) 1px, transparent 1px);
      background-size: 72px 72px;
      mask-image: radial-gradient(ellipse 60% 55% at 30% 50%, black 15%, transparent 100%);
      -webkit-mask-image: radial-gradient(ellipse 60% 55% at 30% 50%, black 15%, transparent 100%);
    }
    .hero-float {
      position: absolute;
      pointer-events: none;
      opacity: 0.07;
      animation: heroFloat 7s ease-in-out infinite;
    }
    .hero-float:nth-child(2) { animation-delay: 2s; }
    .hero-float:nth-child(3) { animation-delay: 4s; }
    @keyframes heroFloat {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-14px) rotate(3deg); }
    }

    /* ── Section label ── */
    .sec-label {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #EA580C;
    }
    .sec-label .label-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: linear-gradient(135deg, #EA580C, #DC2626);
      box-shadow: 0 0 0 3px rgba(234,88,12,0.12);
    }

    /* ── Divider ── */
    .sec-line {
      width: 100%;
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(28,25,23,0.08), transparent);
    }

    /* ── Buttons ── */
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 32px;
      border-radius: 999px;
      background: #1C1917;
      color: white;
      font-weight: 600;
      font-size: 15px;
      font-family: inherit;
      border: none;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      text-decoration: none;
    }
    .btn-primary:hover {
      background: #292524;
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(28,25,23,0.15);
    }
    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 32px;
      border-radius: 999px;
      background: transparent;
      color: #1C1917;
      font-weight: 600;
      font-size: 15px;
      font-family: inherit;
      border: 1.5px solid rgba(28,25,23,0.12);
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    .btn-outline:hover {
      border-color: #EA580C;
      color: #EA580C;
      background: rgba(234,88,12,0.03);
    }

    /* ── Problem section ── */
    .problem-section {
      position: relative;
      background: linear-gradient(180deg, #FFF7ED 0%, #FFFBF7 40%, #FAFAF9 100%);
      overflow: hidden;
    }
    .problem-section::before {
      content: '';
      position: absolute;
      top: -10%; right: -5%;
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(234,88,12,0.05) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }
    .problem-dots {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(234,88,12,0.06) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
      mask-image: radial-gradient(ellipse 70% 60% at 70% 50%, black 10%, transparent 100%);
      -webkit-mask-image: radial-gradient(ellipse 70% 60% at 70% 50%, black 10%, transparent 100%);
    }

    .prob-card {
      position: relative;
      padding: 28px 28px 28px 72px;
      background: white;
      border: 1px solid rgba(28,25,23,0.05);
      border-radius: 20px;
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      cursor: default;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }
    .prob-card::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, #EA580C, #DC2626);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
      border-radius: 0 0 20px 20px;
    }
    .prob-card:hover::after { transform: scaleX(1); }
    .prob-card:hover {
      border-color: rgba(234,88,12,0.12);
      transform: translateX(8px);
      box-shadow: 0 8px 32px rgba(234,88,12,0.06), 0 2px 8px rgba(0,0,0,0.03);
    }
    .prob-card .prob-idx {
      position: absolute;
      left: 24px;
      top: 50%;
      transform: translateY(-50%);
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 26px;
      color: rgba(234,88,12,0.12);
      line-height: 1;
      transition: color 0.3s ease;
    }
    .prob-card:hover .prob-idx { color: rgba(234,88,12,0.3); }
    .prob-card .prob-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      background: rgba(234,88,12,0.06);
      color: #EA580C;
      border: 1px solid rgba(234,88,12,0.08);
      margin-top: 12px;
    }
    .prob-card .prob-badge .blink {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: #EA580C;
      animation: blink 2s ease-in-out infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.15; }
    }

    /* ── Bento service cards ── */
    .bento-card {
      position: relative;
      background: white;
      border: 1px solid rgba(28,25,23,0.06);
      border-radius: 24px;
      padding: 32px;
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
      cursor: default;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }
    .bento-card::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 24px;
      opacity: 0;
      transition: opacity 0.5s ease;
      background: radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(234,88,12,0.04), transparent 60%);
      pointer-events: none;
    }
    .bento-card:hover::before { opacity: 1; }
    .bento-card:hover {
      border-color: rgba(234,88,12,0.15);
      transform: translateY(-6px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.03);
    }
    .bento-card .card-top-line {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, var(--accent, #EA580C), transparent);
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .bento-card:hover .card-top-line { opacity: 1; }
    .bento-card .card-num {
      position: absolute;
      top: 24px; right: 28px;
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 52px;
      color: rgba(28,25,23,0.03);
      line-height: 1;
      user-select: none;
      transition: color 0.4s ease;
    }
    .bento-card:hover .card-num { color: rgba(28,25,23,0.06); }
    .bento-card .icon-box {
      width: 52px; height: 52px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .bento-card:hover .icon-box {
      transform: scale(1.08);
      box-shadow: 0 6px 20px rgba(234,88,12,0.12);
    }
    .bento-card.featured {
      grid-column: span 2;
      background: linear-gradient(135deg, #FFFBF7 0%, #FFF5F0 100%);
      border-color: rgba(234,88,12,0.08);
    }
    .bento-card.featured:hover {
      border-color: rgba(234,88,12,0.2);
    }
    .feat-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 5px 12px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 500;
      background: #F5F5F4;
      border: 1px solid rgba(28,25,23,0.06);
      color: #78716C;
      transition: all 0.3s ease;
    }
    .feat-chip:hover {
      border-color: rgba(234,88,12,0.2);
      color: #EA580C;
      background: #FFF7ED;
    }

    /* ── Pillar cards ── */
    .pillar {
      position: relative;
      background: white;
      border: 1px solid rgba(28,25,23,0.06);
      border-radius: 20px;
      padding: 32px;
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }
    .pillar::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;
      opacity: 0;
      transition: opacity 0.5s ease;
      background: radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(234,88,12,0.03), transparent 60%);
      pointer-events: none;
    }
    .pillar:hover::before { opacity: 1; }
    .pillar:hover {
      border-color: rgba(234,88,12,0.12);
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.05);
    }

    /* ── FAQ ── */
    .faq-item {
      border: 1px solid rgba(28,25,23,0.06);
      border-radius: 16px;
      background: white;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 1px 2px rgba(0,0,0,0.02);
    }
    .faq-item.open {
      border-color: rgba(234,88,12,0.15);
      background: #FFFBF7;
    }
    .faq-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 22px 24px;
      background: none;
      border: none;
      color: #1C1917;
      font-size: 15px;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
      font-family: inherit;
      transition: color 0.3s ease;
      line-height: 1.4;
    }
    .faq-item.open .faq-btn { color: #EA580C; }
    .faq-btn .faq-icon {
      width: 30px; height: 30px;
      border-radius: 50%;
      background: #F5F5F4;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.3s ease;
      color: #78716C;
    }
    .faq-item.open .faq-icon {
      background: rgba(234,88,12,0.1);
      color: #EA580C;
      transform: rotate(45deg);
    }
    .faq-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1), padding 0.3s ease;
      padding: 0 24px;
    }
    .faq-item.open .faq-body {
      max-height: 200px;
      padding: 0 24px 22px;
    }

    /* ── CTA section ── */
    .cta-section {
      position: relative;
      background: #1C1917;
      overflow: hidden;
    }
    .cta-section::before {
      content: '';
      position: absolute;
      top: -20%; right: -10%;
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(234,88,12,0.08) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }
    .cta-section::after {
      content: '';
      position: absolute;
      bottom: -20%; left: -5%;
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }
    .btn-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 32px;
      border-radius: 999px;
      background: white;
      color: #1C1917;
      font-weight: 600;
      font-size: 15px;
      font-family: inherit;
      border: none;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      text-decoration: none;
    }
    .btn-cta:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 8px 32px rgba(255,255,255,0.15);
    }
    .btn-cta-ghost {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 32px;
      border-radius: 999px;
      background: transparent;
      color: rgba(255,255,255,0.7);
      font-weight: 600;
      font-size: 15px;
      font-family: inherit;
      border: 1.5px solid rgba(255,255,255,0.12);
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    .btn-cta-ghost:hover {
      border-color: rgba(255,255,255,0.25);
      color: white;
      background: rgba(255,255,255,0.05);
    }

    /* ── Footer ── */
    .footer-bar {
      border-top: 1px solid rgba(28,25,23,0.06);
    }

    /* ── Keyframes ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(36px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-28px); }
      to { opacity: 1; transform: translateX(0); }
    }

    /* ── Responsive ── */
    @media (max-width: 1024px) {
      .bento-card.featured { grid-column: span 1; }
    }
    @media (max-width: 768px) {
      .bento-card { padding: 24px; border-radius: 20px; }
      .bento-card .card-num { font-size: 40px; top: 18px; right: 20px; }
      .prob-card { padding: 22px 22px 22px 60px; border-radius: 16px; }
      .prob-card .prob-idx { left: 18px; font-size: 22px; }
      .pillar { padding: 24px; }
    }
    @media (max-width: 480px) {
      .bento-card { padding: 20px; border-radius: 16px; }
      .bento-card .card-num { font-size: 32px; top: 16px; right: 16px; }
      .prob-card { padding: 18px 18px 18px 52px; border-radius: 14px; }
      .prob-card .prob-idx { left: 14px; font-size: 20px; }
      .faq-btn { padding: 18px 18px; font-size: 14px; }
      .faq-item.open .faq-body { padding: 0 18px 18px; }
    }
  `;
  document.head.appendChild(style);
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.rv, .rv-l, .rv-r');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('vis');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useMouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((e: React.MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);
  return { ref, handleMove };
}

export default function IndustrySports() {
  const wrapperRef = useReveal();
  const navRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    injectStyles();
    document.title = 'Sports Software Development — NSS';
  }, []);

  // Scroll-based nav style
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 40);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Trophy,
      title: 'League & Academy Management',
      desc: 'Registrations, teams, fixtures, and results in one system — no spreadsheets, no double-entry.',
      color: '#EA580C',
      bg: '#FFF7ED',
      features: ['Registrations', 'Fixtures', 'Results'],
      number: '01',
      featured: true,
    },
    {
      icon: Radio,
      title: 'Live Scoring & Event Platforms',
      desc: "Real-time updates that hold up on match day — because the score doesn't wait for a refresh.",
      color: '#DC2626',
      bg: '#FEF2F2',
      features: ['Real-Time', 'Live Updates', 'Match Day'],
      number: '02',
    },
    {
      icon: Smartphone,
      title: 'Fan Engagement Apps',
      desc: 'Content, notifications, and community on mobile — owned channels, not rented.',
      color: '#DB2777',
      bg: '#FDF2F8',
      features: ['Mobile', 'Notifications', 'Community'],
      number: '03',
      link: '/mobile-app-development',
    },
    {
      icon: BiChart,
      title: 'Performance Analytics',
      desc: 'Training and match data turned into decisions — the insight behind every win.',
      color: '#7C3AED',
      bg: '#F5F3FF',
      features: ['Training Data', 'Match Analysis', 'Decisions'],
      number: '04',
      link: '/data-science-and-analytics',
    },
    {
      icon: Gamepad2,
      title: 'Fantasy & Engagement Products',
      desc: 'Full product engineering for sports-tech ventures — scoring engines, live feeds, and community.',
      color: '#0891B2',
      bg: '#ECFEFF',
      features: ['Scoring Engines', 'Live Feeds', 'Community'],
      number: '05',
    },
  ];

  const problems = [
    {
      label: 'Registrations in email threads',
      sub: 'Lost context, missing players, manual data entry',
      icon: MailCheck,
      badge: 'Inefficient',
    },
    {
      label: 'Fixtures in spreadsheets',
      sub: 'Conflicting dates, version chaos, broken workflows',
      icon: Table2,
      badge: 'Error-Prone',
    },
    {
      label: 'Results typed twice',
      sub: 'Double handling, errors, delayed publications',
      icon: Repeat2,
      badge: 'Manual',
    },
    {
      label: 'Fan engagement outsourced',
      sub: 'Rented channels, no owned audience, limited control',
      icon: Share2,
      badge: 'Uncontrolled',
    },
  ];

  const faqs = [
    {
      q: 'Do you work with academies and local leagues, or only large organizations?',
      a: 'Both — the registration-to-results loop is the same problem at every scale, priced accordingly.',
    },
    {
      q: 'Can you build live-scoring for our events?',
      a: 'Yes — real-time updates with the load handled, plus embeddable widgets for your site and app.',
    },
    {
      q: 'Do you build fantasy sports platforms?',
      a: 'Yes, as full product engineering engagements — including the scoring engines and real-time data feeds they depend on.',
    },
  ];

  return (
    <div className="sports-light" ref={wrapperRef}>

      {/* ═══════ NAV ═══════ */}
      <nav ref={navRef} className="nav-bar">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="text-stone-900 font-bold text-lg tracking-tight flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#EA580C] to-[#DC2626] flex items-center justify-center shadow-sm">
              <Trophy size={13} className="text-white" />
            </div>
            NSS
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-400 font-medium">
            <a href="#solutions" className="hover:text-stone-900 transition-colors">Solutions</a>
            <a href="#reliability" className="hover:text-stone-900 transition-colors">Reliability</a>
            <a href="#faq" className="hover:text-stone-900 transition-colors">FAQ</a>
          </div>
          <a href="/contact" className="btn-primary !py-2.5 !px-5 !text-sm !shadow-none hover:!shadow-md">
            Start a Project
            <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section className="hero-section px-6 md:px-12 lg:px-20 pt-24 pb-20">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <Trophy className="hero-float top-[18%] right-[10%] text-stone-900 w-20 h-20" />
        <Target className="hero-float bottom-[28%] right-[15%] text-stone-900 w-14 h-14" />
        <Medal className="hero-float top-[40%] right-[30%] text-stone-900 w-12 h-12" />

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="rv" style={{ transitionDelay: '0.1s' }}>
            <span className="sec-label">
              <span className="label-dot" />
              Sports Software Development
            </span>
          </div>

          <h1 className="hd-hero text-stone-900 mt-6 rv" style={{ transitionDelay: '0.2s' }}>
            Technology for the
            <br />
            <span className="font-serif italic grad-text">game behind the game</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mt-7 leading-relaxed rv" style={{ transitionDelay: '0.35s' }}>
            Sports software development for the operations nobody cheers but everyone depends on — registrations, scheduling, scoring, and the data behind performance.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 rv" style={{ transitionDelay: '0.5s' }}>
            <a href="/contact" className="btn-primary">
              Discuss Your Project
              <ArrowRight size={18} />
            </a>
            <a href="#solutions" className="btn-outline">
              Explore Solutions
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 rv" style={{ transitionDelay: '0.9s' }}>
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-300 font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-stone-300 to-transparent" />
        </div>
      </section>

      <div className="sec-line" />

      {/* ═══════ PROBLEM SECTION ═══════ */}
      <section className="problem-section py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="problem-dots" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Left */}
            <div className="lg:col-span-5 space-y-6">
              <span className="sec-label rv">
                <span className="label-dot" />
                The Problem
              </span>

              <h2 className="hd-problem text-stone-900 rv" style={{ transitionDelay: '0.1s' }}>
                Where sports organizations
                <br />
                <span className="font-serif italic grad-text">lose time</span>
              </h2>

              <div className="space-y-4 rv" style={{ transitionDelay: '0.2s' }}>
                <p className="text-stone-500 text-lg leading-relaxed">
                  Registrations in email threads, fixtures in spreadsheets, results typed twice, and fan engagement outsourced to a social feed.
                </p>
                <p className="text-stone-500 text-lg leading-relaxed">
                  The sport is professional; <span className="text-stone-800 font-semibold">the back office often isn't</span> — yet.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2 rv" style={{ transitionDelay: '0.3s' }}>
                <span className="w-12 h-px bg-gradient-to-r from-[#EA580C]/30 to-transparent" />
                <span className="text-xs text-stone-300 uppercase tracking-widest font-medium">4 critical workflow breakdowns</span>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-7 space-y-4">
              {problems.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="prob-card"
                    style={{
                      opacity: 0,
                      animation: `slideRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1 + 0.3}s forwards`,
                    }}
                  >
                    <span className="prob-idx">0{i + 1}</span>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-stone-800 font-semibold text-[15px] leading-snug">{card.label}</h3>
                        <p className="text-stone-400 text-sm mt-1.5 leading-relaxed">{card.sub}</p>
                        <span className="prob-badge">
                          <span className="blink" />
                          {card.badge}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-stone-300" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="sec-line" />

      {/* ═══════ WHAT WE BUILD ═══════ */}
      <section id="solutions" className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#FAFAF9] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EA580C]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#DC2626]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-16">
            <div>
              <span className="sec-label rv">
                <span className="label-dot" />
                What We Build
              </span>
              <h2 className="hd-section text-stone-900 mt-4 rv" style={{ transitionDelay: '0.1s' }}>
                Solutions engineered for
                <br />
                <span className="font-serif italic grad-text">match day</span>
              </h2>
            </div>
            <p className="text-stone-400 text-sm max-w-xs rv" style={{ transitionDelay: '0.2s' }}>
              5 core solutions built to handle the pressure — from registration week to the final whistle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <BentoCard
                key={i}
                service={service}
                index={i}
                isActive={activeCard === i}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              />
            ))}
          </div>

          <div className="mt-14 text-center rv" style={{ transitionDelay: '0.3s' }}>
            <p className="text-sm text-stone-400 mb-5">Need a custom sports solution?</p>
            <a href="/contact" className="btn-primary">
              Discuss Your Project
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <div className="sec-line" />

      {/* ═══════ MATCH-DAY RELIABILITY ═══════ */}
      <section id="reliability" className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(234,88,12,0.04)_0%,transparent_100%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="sec-label rv justify-center">
              <span className="label-dot" />
              Match-Day Reliability
            </span>
            <h2 className="hd-section text-stone-900 mt-4 rv" style={{ transitionDelay: '0.1s' }}>
              Everything peaks in a
              <br />
              <span className="font-serif italic grad-text">3-hour window</span>
            </h2>
            <p className="text-stone-400 mt-5 max-w-lg mx-auto text-base leading-relaxed rv" style={{ transitionDelay: '0.2s' }}>
              Sports traffic is travel traffic with a whistle: everything peaks in a 3-hour window. Our cloud practice designs for exactly that curve — the platform's biggest day should be its most boring one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <PillarCard
              icon={<Gauge size={24} />}
              color="#EA580C"
              bg="#FFF7ED"
              title="Traffic Curve Engineering"
              desc="Sports traffic peaks in a tight window — our cloud practice designs for exactly that curve."
              delay={0}
            />
            <PillarCard
              icon={<Server size={24} />}
              color="#DC2626"
              bg="#FEF2F2"
              title="Auto-Scaling"
              desc="Capacity that follows the fixture calendar — the platform's biggest day should be its most boring one."
              delay={100}
            />
            <PillarCard
              icon={<Network size={24} />}
              color="#7C3AED"
              bg="#F5F3FF"
              title="Live Data Distribution"
              desc="Real-time updates delivered reliably — scores, stats, and notifications to every device."
              delay={200}
            />
          </div>
        </div>
      </section>

      <div className="sec-line" />

      {/* ═══════ FAQ ═══════ */}
      <section id="faq" className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#FAFAF9]">
        <div className="max-w-3xl mx-auto">
          <span className="sec-label rv">
            <span className="label-dot" />
            FAQ
          </span>
          <h2 className="hd-section text-stone-900 mt-4 mb-12 rv" style={{ transitionDelay: '0.1s' }}>
            Common questions,
            <br />
            <span className="font-serif italic grad-text">straight answers</span>
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                style={{
                  opacity: 0,
                  animation: `fadeUp 0.5s ease ${i * 0.08 + 0.2}s forwards`,
                }}
              >
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className="faq-icon">
                    <Plus size={14} />
                  </span>
                </button>
                <div className="faq-body">
                  <p className="text-sm text-stone-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="cta-section py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-8 rv">
            <Trophy size={14} className="text-[#EA580C]" />
            <span className="text-[11px] font-bold text-white/50 tracking-[0.15em] uppercase">Sports Software</span>
          </div>

          <h2 className="hd-section text-white rv" style={{ transitionDelay: '0.1s' }}>
            Ready to build the
            <br />
            <span className="font-serif italic grad-text">game behind the game?</span>
          </h2>

          <p className="text-white/40 text-lg mt-5 max-w-xl mx-auto leading-relaxed rv" style={{ transitionDelay: '0.2s' }}>
            Let's discuss your sports project. We'll show you what's possible.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 rv" style={{ transitionDelay: '0.3s' }}>
            <a href="/contact" className="btn-cta">
              Discuss Your Project
              <ArrowRight size={18} />
            </a>
            <a href="/case-studies" className="btn-cta-ghost">
              View Case Studies
            </a>
          </div>

          <p className="text-xs text-white/20 mt-6 rv" style={{ transitionDelay: '0.4s' }}>No obligation. Just a conversation.</p>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="footer-bar py-10 px-6 md:px-12 lg:px-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#EA580C] to-[#DC2626] flex items-center justify-center">
              <Trophy size={9} className="text-white" />
            </div>
            <span className="text-sm text-stone-300">© {new Date().getFullYear()} NSS. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-stone-300 font-medium">
            <a href="/privacy" className="hover:text-stone-600 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-stone-600 transition-colors">Terms</a>
            <a href="/contact" className="hover:text-stone-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Bento Card ── */
function BentoCard({ service, index, isActive, onMouseEnter, onMouseLeave }: {
  service: {
    icon: any;
    title: string;
    desc: string;
    color: string;
    bg: string;
    features: string[];
    number: string;
    featured?: boolean;
    link?: string;
  };
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const { ref, handleMove } = useMouseGlow();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`bento-card ${service.featured ? 'featured' : ''}`}
      style={{
        ['--accent' as string]: service.color,
        opacity: 0,
        animation: `fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08 + 0.2}s forwards`,
      }}
    >
      <div className="card-top-line" />
      <span className="card-num">{service.number}</span>

      <div className="icon-box" style={{ backgroundColor: service.bg, color: service.color }}>
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <h3 className="text-[17px] font-bold text-stone-800 pr-12 leading-snug">{service.title}</h3>
      <p className="text-sm text-stone-400 mt-2.5 leading-relaxed">{service.desc}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {service.features.map((f, idx) => (
          <span key={idx} className="feat-chip">
            <Check size={10} className="text-[#EA580C]" />
            {f}
          </span>
        ))}
      </div>

      <div
        className="mt-5 h-0.5 rounded-full transition-all duration-500"
        style={{
          width: isActive ? '48px' : '24px',
          background: service.color,
          opacity: isActive ? 0.7 : 0.2,
        }}
      />

      {service.link && (
        <Link
          to={service.link}
          className="mt-3 text-xs font-semibold text-stone-300 hover:text-[#EA580C] transition-colors duration-300 flex items-center gap-1 group"
        >
          Learn more
          <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      )}
    </div>
  );
}

/* ── Pillar Card ── */
function PillarCard({ icon, color, bg, title, desc, delay }: {
  icon: React.ReactNode;
  color: string;
  bg: string;
  title: string;
  desc: string;
  delay: number;
}) {
  const { ref, handleMove } = useMouseGlow();

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="pillar rv"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: bg, color }}>
        {icon}
      </div>
      <h4 className="text-stone-800 font-bold text-[15px] leading-snug">{title}</h4>
      <p className="text-sm text-stone-400 mt-2.5 leading-relaxed">{desc}</p>
    </div>
  );
}

// Need to import these for the hero floats
import { Target, Medal } from 'lucide-react';