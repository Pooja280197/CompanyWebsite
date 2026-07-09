// ProductEngineering.tsx
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Monitor,
  Package,
  Rocket,
  Shield,
  Smartphone,
  Users,
  Zap,
  BarChart3,
  Clock,
  TrendingUp,
  Award,
  Target,
  Eye,
  PenTool,
  Server,
  Workflow,
} from 'lucide-react';
import { ScrollTextReveal, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { HERO_IMAGES } from '../../data/heroImages';

const HERO_TAGLINE = `Product engineering for the moment after launch`;

const HERO_DESC = `Anyone can ship a demo. We build the version that survives real users, real load, and three years of feature requests — architecture first, shortcuts never.`;

const HERO_TITLE_LINES = [
  {
    words: [{ text: 'PRODUCT' }, { text: 'ENGINEERING' }],
    letterCount: 8,
    inline: true,
    startDelay: 0,
  },
];

const FAIL_ITEMS = [
  'An architecture that can\'t absorb change',
  'A codebase only one developer understands',
  'A launch that revealed the database was never going to cope',
  'By the time it shows, the cheap fix is gone',
];

const DELIVERABLES = [
  {
    icon: Package,
    title: 'Custom Software Development',
    desc: 'Purpose-built systems for workflows generic software can\'t hold: ERPs, order management, quotation engines, internal platforms. When a client\'s process is their competitive edge, we encode it instead of forcing them into someone else\'s template.',
    link: '/custom-software-development',
    accent: '#2563eb',
    bg: '#dbeafe',
  },
  {
    icon: Globe,
    title: 'Web Development & Design',
    desc: 'Fast, indexable, conversion-focused platforms in React, Next.js, and Node — engineered for Core Web Vitals from the first commit, because a beautiful site nobody finds is a brochure in a drawer.',
    link: '/web-development-and-design',
    accent: '#7c3aed',
    bg: '#ede9fe',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Android, iOS, and Flutter apps built to survive real reviews: offline states, low-end devices, battery discipline. One codebase where it saves you money, native where it doesn\'t.',
    link: '/mobile-app-development',
    accent: '#059669',
    bg: '#d1fae5',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Interfaces your users won\'t need a manual for. Research, wireframes, prototypes, and design systems that developers can actually implement.',
    link: '/ui-ux-design',
    accent: '#d97706',
    bg: '#fef3c7',
  },
];

const ENGAGEMENT_STEPS = [
  {
    num: '01',
    label: 'Discovery & honest scoping',
    desc: 'Including the conversation about what not to build in version one.',
    icon: Target,
  },
  {
    num: '02',
    label: 'Architecture',
    desc: 'Foundation that absorbs change without breaking.',
    icon: Layers,
  },
  {
    num: '03',
    label: 'Sprint-based delivery',
    desc: 'Demos every cycle — you see progress in working software, not status decks.',
    icon: GitBranch,
  },
  {
    num: '04',
    label: 'QA alongside development',
    desc: 'Quality runs with the build, not as a panic phase after it.',
    icon: Shield,
  },
  {
    num: '05',
    label: 'Launch plan',
    desc: 'Including the week after launch, when real users find the real bugs.',
    icon: Rocket,
  },
];

const PROOF_STATS = [
  { value: '30%', label: 'Faster operations' },
  { value: '50%', label: 'Quicker decision-making' },
  { value: '40%', label: 'Lower costs from fewer failures' },
];

const WHY_STAY = [
  {
    icon: Check,
    title: 'Fixed, itemized quotes',
    desc: 'The number you approve is the invoice you receive.',
  },
  {
    icon: Eye,
    title: 'Honest "don\'t build that yet"',
    desc: 'We\'ve talked clients out of six-figure features that data said nobody would use.',
  },
  {
    icon: Award,
    title: '95% client retention',
    desc: 'Across eight years and 500+ projects.',
  },
  {
    icon: Shield,
    title: 'Post-launch ownership',
    desc: 'Monitoring, maintenance, and iteration under one roof.',
  },
];

const FAQS = [
  {
    q: 'What is product engineering, in plain terms?',
    a: 'It\'s the full lifecycle of building a software product — strategy, architecture, design, development, testing, launch, and evolution — handled as one continuous responsibility instead of disconnected phases. One team accountable for outcomes, not handoffs.',
  },
  {
    q: 'How long does a typical build take?',
    a: 'A focused MVP: 8–14 weeks. A full platform: 4–9 months depending on integrations. You\'ll have a milestone-level timeline before you commit a rupee or dollar.',
  },
  {
    q: 'Can you modernize an existing product instead of rebuilding?',
    a: 'Usually, yes — and it\'s often the right call. We audit the codebase first and give you a straight recommendation: refactor, re-platform incrementally, or rebuild. Rebuilds are the last resort, not the default pitch.',
  },
  {
    q: 'Which industries do you build for?',
    a: 'Healthcare, manufacturing, finance, e-commerce, education, real estate, travel, and sports are our deepest verticals — with logistics, retail, and hospitality alongside. Industry pages: /industries.',
  },
  {
    q: 'Do I get a dedicated team?',
    a: 'Yes — engineers, a project lead, and QA assigned to your build, with a named account manager. For clients who want direct control, the same talent is available through staff augmentation.',
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

  useLayoutEffect(() => {
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

export default function ProductEngineering() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Product Engineering — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Product engineering for the moment after launch. We build the version that survives real users, real load, and three years of feature requests.',
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
    script.id = 'product-engineering-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('product-engineering-faq-schema')?.remove();
    };
  }, []);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header
        className="webdev-hero relative border-b border-white/10 px-6"
        style={{ height: '100svh', maxHeight: '100svh' }}
      >
        <ServiceHeroBackground image={HERO_IMAGES.productEngineering} />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="max-w-[58rem] text-left">
            <HeroTitleWaveGroup
              lineLetterCounts={getHeroLineLetterCounts(HERO_TITLE_LINES)}
              waveStartDelay={getHeroWaveStartDelay(HERO_TITLE_LINES, 72)}
            >
            <div
              className="hero-outline-text hero-outline-text--pillar a1 mb-3"
              style={{ fontSize: 'clamp(2.5rem, 5.8vw, 4.25rem)' }}
              aria-hidden="true"
            >
              {HERO_TITLE_LINES.map((line, i) => (
                <ScrollTextReveal
                  key={line.words.map((w) => w.text).join('-')}
                  tag="span"
                  align="left"
                  animate="words"
                  outlinedText
                  gradientStroke
                  gradientFillWave
                  waveLineIndex={i}
                  strokeWidth={3}
                  letterInterval={72}
                  startDelay={line.startDelay}
                  wordGap="0.55em"
                  words={line.words}
                  className={`hero-outline-line hero-outline-line--reveal${line.inline ? ' hero-outline-line--inline' : ''}`}
                  style={{
                    display: line.inline ? 'inline-block' : 'block',
                    width: 'fit-content',
                    maxWidth: '100%',
                    letterSpacing: '0.1em',
                  }}
                />
              ))}
            </div>
            </HeroTitleWaveGroup>
            <h1 className="webdev-hero__tagline a2 mb-3 w-full text-left">
              {HERO_TAGLINE}
            </h1>

            <p className="webdev-hero__desc a2 text-sm sm:text-base leading-[1.7] max-w-[38rem] tracking-[0.01em]">
              {HERO_DESC}
            </p>

            <Link
              to="/#contact"
              className="nav-cta-btn nav-cta-btn--cta nav-cta-btn--blue a3 mt-5 inline-flex"
              style={{ '--nav-cta-w': '15.5rem' } as React.CSSProperties}
            >
              <span className="nav-cta-btn__label">Get a Fixed Quote</span>
              <span className="nav-cta-btn__icon">
                <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Where products actually fail */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="fail-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr w-full max-w-[920px] mx-auto px-2">
            <ScrollTextReveal
              id="fail-heading"
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.2em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.25,
                maxWidth: '100%',
              }}
              words={[
                { text: 'Where' },
                { text: 'products' },
                { text: 'actually' },
                { text: 'fail' },
              ]}
            />

            <p className="sr sr-d2 text-[#555] text-base sm:text-lg leading-[1.85] mt-8 max-w-[48rem] mx-auto text-center">
              Most products don't fail because the idea was wrong. They fail in the unglamorous middle:
              an architecture that can't absorb change, a codebase only one developer understands, a launch
              that revealed the database was never going to cope. By the time it shows, the cheap fix is gone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FAIL_ITEMS.map((item, i) => (
              <div
                key={item}
                className={`sr-from-left p-5 rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-emerald-500 mt-0.5" aria-hidden="true">
                    <Zap size={18} />
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-100 text-center">
            <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <strong>Our product engineering services exist for exactly that middle.</strong>{' '}
              We take ownership from the first architecture decision through launch and into the years after —
              so the expensive surprises never get scheduled.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="build-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
            <ScrollTextReveal
              id="build-heading"
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.2em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.25,
                maxWidth: '100%',
              }}
              words={[
                { text: 'What' },
                { text: 'we' },
                { text: 'build' },
              ]}
            />
            <p className="text-[#555] text-base leading-[1.7] mt-4 max-w-[40rem] mx-auto">
              Full-stack product engineering that survives launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {DELIVERABLES.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="sr-from-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 group"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.bg, color: item.accent }}
                  >
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-800 transition-colors group"
                  >
                    Learn more
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How an engagement runs */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_50%_0%,_rgba(52,211,153,0.2)_0%,_transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
            <ScrollTextReveal
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.2em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.25,
                maxWidth: '100%',
              }}
              words={[
                { text: 'How' },
                { text: 'an' },
                { text: 'engagement' },
                { text: 'runs' },
              ]}
              textColor="#ffffff"
            />
            <p className="text-emerald-200 text-base leading-[1.7] mt-4 max-w-[40rem] mx-auto">
              From discovery to launch and beyond — one continuous responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {ENGAGEMENT_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="sr-from-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300 text-center"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 mx-auto mb-3">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold text-emerald-300/60 tabular-nums block mb-1">{step.num}</span>
                  <h4 className="text-sm font-semibold text-white mb-1">{step.label}</h4>
                  <p className="text-xs text-emerald-200/70 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 px-6" aria-labelledby="proof-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="sr">
              <ScrollTextReveal
                id="proof-heading"
                tag="h2"
                align="left"
                className="w-full"
                wordGap="0.2em"
                style={{
                  fontFamily: 'Inter,sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  letterSpacing: '0.02em',
                  lineHeight: 1.25,
                  maxWidth: '100%',
                }}
                words={[
                  { text: 'Proof' },
                ]}
              />
              <p className="text-[#555] text-base leading-[1.8] mt-4">
                A century-old manufacturer ran divisions, locations, and machines on manual tracking.
                We engineered a cloud-based operations platform with live dashboards and predictive
                maintenance: operations <strong className="text-emerald-600">30% faster</strong>,
                decision-making <strong className="text-emerald-600">50% quicker</strong>,
                costs down <strong className="text-emerald-600">40%</strong> from fewer unexpected failures.
              </p>
              <p className="text-[#555] text-base leading-[1.8] mt-3">
                The same discipline scaled down builds an MVP in weeks — and scaled up modernizes a
                legacy platform without stopping the business that runs on it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sr sr-d2">
              {PROOF_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 text-center hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600">{stat.value}</div>
                  <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why teams pick us */}
      <section className="py-20 px-6 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
            <ScrollTextReveal
              id="why-heading"
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.2em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.25,
                maxWidth: '100%',
              }}
              words={[
                { text: 'Why' },
                { text: 'teams' },
                { text: 'pick' },
                { text: 'us' },
                { text: '—' },
                { text: 'and' },
                { text: 'stay' },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_STAY.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="sr-from-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <Icon size={22} strokeWidth={1.75} />
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
      <section className="py-20 px-6 cta-bg border-t border-gray-100">
        <div className="max-w-[900px] mx-auto w-full text-center">
          <div className="sr">
            <h2 className="font-serif-italic text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              Ready to build something that survives launch?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Get a fixed, itemized quote before you commit. No surprises. Just a plan that works.
            </p>
            <Link
              to="/#contact"
              className="pillar-cta-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Get a Fixed Quote
              <ArrowRight size={18} />
            </Link>
            <p className="text-sm text-gray-500 mt-4">The number you approve is the invoice you receive.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" aria-labelledby="faq-heading">
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
                lineHeight: 1.25,
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
      <section className="py-12 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Check size={14} className="text-emerald-500" />
              500+ projects delivered
            </span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-emerald-500" />
              95% client retention
            </span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-emerald-500" />
              8 years of ownership
            </span>
          </div>
          <Link
            to="/#contact"
            className="pillar-cta-btn inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            Get a Fixed Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}