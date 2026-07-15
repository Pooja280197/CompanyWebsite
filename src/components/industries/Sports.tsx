// IndustrySports.tsx — aligned with other industry pages
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Trophy,
  Radio,
  Smartphone,
  Gamepad2,
  BarChart3,
  Gauge,
  Server,
  Network,
  Mail,
  Calendar,
  ClipboardCheck,
  Users,
} from 'lucide-react';
import { FaqAccordionSection } from '../FaqAccordionSection';
import { ServiceProofSection } from '../service-pages/ServiceProofSection';
import { HERO_IMAGES } from '../../data/heroImages';
import { IndustryHero } from './IndustryHero';
import { IndustryChallenge } from './IndustryChallenge';
import { IndustryBuildCards } from './IndustryBuildCards';

const injectStyles = () => {
  const id = 'sports-industry-premium-v1';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    .sports-premium {
      background: #FAFBFC;
      color: #0F172A;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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

    .reveal-right {
      opacity: 0;
      transform: translateX(60px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-right.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .gradient-text {
      background: linear-gradient(135deg, #EA580C 0%, #DC2626 50%, #F97316 100%);
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
      background: linear-gradient(90deg, #EA580C, #DC2626, #F97316);
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
      box-shadow: 0 8px 24px rgba(234,88,12,0.15);
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
      border-color: #EA580C;
      color: #EA580C;
      background: #fff7ed;
    }

    .divider-gradient {
      height: 2px;
      background: linear-gradient(to right, transparent, rgba(234,88,12,0.15), transparent);
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
    const targets = el.querySelectorAll('.reveal-up, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function IndustrySports() {
  const wrapperRef = useReveal();

  useEffect(() => {
    injectStyles();
    document.title = 'Sports Software Development — NSS';
    window.scrollTo(0, 0);
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
      icon: BarChart3,
      title: 'Performance Analytics',
      desc: 'Training and match data turned into decisions — the insight behind every win.',
      color: '#0891B2',
      bg: '#ECFEFF',
      features: ['Training Data', 'Match Analysis', 'Decisions'],
      number: '04',
      link: '/data-science-and-analytics',
    },
    {
      icon: Gamepad2,
      title: 'Fantasy & Engagement Products',
      desc: 'Full product engineering for sports-tech ventures — scoring engines, live feeds, and community.',
      color: '#0F766E',
      bg: '#F0FDFA',
      features: ['Scoring Engines', 'Live Feeds', 'Community'],
      number: '05',
    },
  ];

  const reliability = [
    {
      icon: Gauge,
      title: 'Traffic Curve Engineering',
      desc: 'Sports traffic peaks in a tight window — our cloud practice designs for exactly that curve.',
      color: '#EA580C',
      bg: '#FFF7ED',
    },
    {
      icon: Server,
      title: 'Auto-Scaling',
      desc: "Capacity that follows the fixture calendar — the platform's biggest day should be its most boring one.",
      color: '#DC2626',
      bg: '#FEF2F2',
    },
    {
      icon: Network,
      title: 'Live Data Distribution',
      desc: 'Real-time updates delivered reliably — scores, stats, and notifications to every device.',
      color: '#0891B2',
      bg: '#ECFEFF',
    },
  ];

  return (
    <div className="sports-premium" ref={wrapperRef}>
      <IndustryHero
        image={HERO_IMAGES.sports}
        eyebrow="Sports Software"
        accent="#fb923c"
        title={
          <>
            Technology for the <em>game behind the game</em>
          </>
        }
        description="Sports software development for the operations nobody cheers but everyone depends on — registrations, scheduling, scoring, and the data behind performance."
        primaryCta={{ label: 'Discuss Your Project', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore Solutions', href: '#services' }}
        rail={['Registrations', 'Live scoring', 'Performance data']}
      />

      {/* ===== THE CHALLENGE ===== */}
      <IndustryChallenge
        accent="#EA580C"
        accentSoft="rgba(234, 88, 12, 0.14)"
        accentSoft2="rgba(220, 38, 38, 0.12)"
        title="Where sports organizations lose time"
        items={[
          { icon: Mail, label: 'Registrations in email threads' },
          { icon: Calendar, label: 'Fixtures in spreadsheets' },
          { icon: ClipboardCheck, label: 'Results typed twice' },
          { icon: Users, label: 'Fan engagement outsourced' },
        ]}
      >
        <p className="text-lg leading-relaxed text-slate-600">
          Registrations in email threads, fixtures in spreadsheets, results typed twice, and fan
          engagement outsourced to a social feed.
        </p>
        <p className="text-lg leading-relaxed text-slate-600">
          The sport is professional;{' '}
          <span className="font-semibold text-[#0F172A]">the back office often isn&apos;t</span> — yet.
        </p>
      </IndustryChallenge>

      {/* ===== WHAT WE BUILD ===== */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3 reveal-up">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EA580C]/10">
                <Sparkles size={18} className="text-[#EA580C]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EA580C]">Solutions</span>
            </div>

            <h2 className="heading-lg reveal-up text-[#0F172A]" style={{ transitionDelay: '100ms' }}>
              What we <span className="gradient-text">build</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 reveal-up" style={{ transitionDelay: '150ms' }}>
              5 core solutions built to handle the pressure — from registration week to the final whistle.
            </p>

            <div className="divider-gradient mx-auto reveal-up" style={{ transitionDelay: '200ms' }} />
          </div>

          <div className="reveal-up" style={{ transitionDelay: '220ms' }}>
            <IndustryBuildCards items={services} />
          </div>

          {/* <div className="reveal-up mt-12 text-center">
            <p className="mb-4 text-sm text-slate-500">Need a custom sports solution?</p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#1E293B] hover:shadow-lg"
            >
              Discuss Your Project
              <ArrowRight size={16} />
            </Link>
          </div> */}
        </div>
      </section>

      {/* ===== MATCH-DAY RELIABILITY (as proof-style section) ===== */}
      <ServiceProofSection
        intro={
          <>
            Everything peaks in a <strong>3-hour window</strong>. Sports traffic is travel traffic with a
            whistle — our cloud practice designs for exactly that curve. The platform&apos;s biggest day
            should be its most boring one.
          </>
        }
        stats={[
          { value: 'Peak', label: 'Traffic curves' },
          { value: 'Auto', label: 'Fixture scaling' },
          { value: 'Live', label: 'Data distribution' },
        ]}
      />

      {/* Reliability detail cards */}
      <section
        id="reliability"
        className="bg-gradient-to-b from-white to-slate-50 px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="reveal-up mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#EA580C]">
              <span className="h-5 w-1 rounded-full bg-[#EA580C]" />
              Match-Day Reliability
            </span>
            <h2 className="heading-lg reveal-up text-[#0F172A]" style={{ transitionDelay: '100ms' }}>
              Everything peaks in a <span className="gradient-text">3-hour window</span>
            </h2>
            <p
              className="reveal-up mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-500"
              style={{ transitionDelay: '150ms' }}
            >
              Sports traffic is travel traffic with a whistle: everything peaks in a 3-hour window. Our
              cloud practice designs for exactly that curve.
            </p>
          </div>

          <div className="grid gap-x-4 gap-y-8 pt-3 md:grid-cols-3">
            {reliability.map((item, i) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="audit-card reveal-up"
                  style={{
                    ['--audit-accent' as string]: item.color,
                    transitionDelay: `${i * 100 + 100}ms`,
                  }}
                >
                  <span className="audit-card__icon">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h3 className="audit-card__title">{item.title}</h3>
                  <p className="audit-card__desc">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FaqAccordionSection
        items={[
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
        ]}
      />

      {/* ===== CTA ===== */}
      <section className="bg-[#0F172A] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Trophy size={14} className="text-[#EA580C]" />
            <span className="text-xs font-bold tracking-widest text-white/80">SPORTS SOFTWARE</span>
          </div>
          <h2 className="heading-lg text-white">
            Ready to build the
            <br />
            <span className="gradient-text">game behind the game?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Let&apos;s discuss your sports project. We&apos;ll show you what&apos;s possible.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#0F172A] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              View Case Studies
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">No obligation. Just a conversation.</p>
        </div>
      </section>
    </div>
  );
}
