import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Building2,
  Plane,
  GraduationCap,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import '../../styles/industries-hub.css';

const HERO_LETTER_INTERVAL = 52;

const TITLE_LINE_1 = [
  { text: 'Software' },
  { text: 'that' },
  { text: 'speaks' },
];

const TITLE_LINE_2 = [
  { text: "your" },
  { text: "industry's" },
  { text: 'language' },
];

const LINE1_MS =
  TITLE_LINE_1.reduce((n, w) => n + w.text.length, 0) * HERO_LETTER_INTERVAL + 350;

interface IndustryCard {
  id: string;
  title: string;
  href: string;
  valueProp: string;
  metric?: string;
  metricLabel?: string;
  accent: string;
  icon: LucideIcon;
}

const INDUSTRIES: IndustryCard[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    href: '/industries/healthcare-software-development',
    valueProp: 'Clinical systems and care platforms that respect compliance from day one.',
    metric: '30%',
    metricLabel: 'Faster care delivery',
    accent: '#2563eb',
    icon: HeartPulse,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    href: '/industries/manufacturing-software-solutions',
    valueProp: 'Factory ops, IoT, and production software built for the shop floor.',
    metric: '42%',
    metricLabel: 'Ops cost reduction',
    accent: '#0d9488',
    icon: Factory,
  },
  {
    id: 'fintech',
    title: 'Finance / FinTech',
    href: '/industries/fintech-software-development',
    valueProp: 'Payments, lending, and financial products with security that holds up.',
    metric: '99.99%',
    metricLabel: 'Uptime achieved',
    accent: '#059669',
    icon: Landmark,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    href: '/industries/ecommerce-development',
    valueProp: 'Storefronts, catalogs, and commerce ops that scale with the spike.',
    metric: '20%',
    metricLabel: 'Sales increase',
    accent: '#ea580c',
    icon: ShoppingBag,
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    href: '/industries/real-estate-software-development',
    valueProp: 'Listings, CRM, and property platforms your agents actually use.',
    accent: '#7c3aed',
    icon: Building2,
  },
  {
    id: 'travel',
    title: 'Travel',
    href: '/industries/travel-software-development',
    valueProp: 'Booking, itineraries, and travel tech built for inventory chaos.',
    accent: '#0891b2',
    icon: Plane,
  },
  {
    id: 'education',
    title: 'Education',
    href: '/industries/education-software-development',
    valueProp: 'Campus ERP, e-learning, and academic ops that stay in sync.',
    accent: '#2563eb',
    icon: GraduationCap,
  },
  {
    id: 'sports',
    title: 'Sports',
    href: '/industries/sports-software-development',
    valueProp: 'Fan engagement, events, and sports platforms that keep up live.',
    accent: '#dc2626',
    icon: Trophy,
  },
];

export default function IndustriesHub() {
  const [titleLine2Ready, setTitleLine2Ready] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Industries — NSS';
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setTitleLine2Ready(true), LINE1_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const nodes = root.querySelectorAll<HTMLElement>('.ihub__reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ihub" ref={pageRef}>
      <section className="ihub__hero" aria-labelledby="ihub-heading">
        <div className="ihub__shell">
          <h1 id="ihub-heading" className="ihub__title">
            <span className="ihub__title-line">
              <ScrollTextReveal
                tag="span"
                align="center"
                animate="words"
                textColor="#0f172a"
                letterInterval={HERO_LETTER_INTERVAL}
                letterDurationMs={560}
                startDelay={80}
                style={{ display: 'block', width: 'fit-content', maxWidth: '100%', marginInline: 'auto' }}
                words={TITLE_LINE_1}
              />
            </span>
            <span className="ihub__title-line ihub__title-line--accent">
              {titleLine2Ready ? (
                <ScrollTextReveal
                  key="ihub-title-line-2"
                  tag="span"
                  align="center"
                  animate="words"
                  textColor="#2563eb"
                  letterInterval={HERO_LETTER_INTERVAL}
                  letterDurationMs={560}
                  startDelay={0}
                  style={{ display: 'block', width: 'fit-content', maxWidth: '100%', marginInline: 'auto' }}
                  words={TITLE_LINE_2}
                />
              ) : (
                <span className="ihub__title-reserve" aria-hidden="true">
                  your industry&apos;s language
                </span>
              )}
            </span>
          </h1>

          <p className="ihub__lede ihub__fade-in" style={{ animationDelay: `${LINE1_MS + 700}ms` }}>
            Generic software forces every business to explain itself. We arrive already knowing the
            compliance rules, the workflows, and the failure modes of your domain.
          </p>
        </div>
      </section>

      <section className="ihub__grid-section" aria-label="Industries">
        <div className="ihub__shell">
          <div className="ihub__grid">
            {INDUSTRIES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className="ihub__card ihub__reveal"
                  style={{
                    ['--ihub-accent' as string]: item.accent,
                    transitionDelay: `${i * 0.05}s`,
                  }}
                >
                  <span className="ihub__card-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h2 className="ihub__card-title">{item.title}</h2>
                  <p className="ihub__card-desc">{item.valueProp}</p>
                  {item.metric && (
                    <div className="ihub__card-metric">
                      <strong>{item.metric}</strong>
                      <span>{item.metricLabel}</span>
                    </div>
                  )}
                  <span className="ihub__card-link">
                    Explore
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>

          <p className="ihub__footnote ihub__reveal">
            Your industry not listed? That&apos;s a conversation, not a limitation.{' '}
            <Link to="/contact-us">
              Talk to us
              <ArrowRight size={15} />
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
