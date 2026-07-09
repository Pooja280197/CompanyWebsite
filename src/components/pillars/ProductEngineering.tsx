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
import { ServiceProofSection } from '../service-pages/ServiceProofSection';

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
    bgMid: '#bfdbfe',
  },
  {
    icon: Globe,
    title: 'Web Development & Design',
    desc: 'Fast, indexable, conversion-focused platforms in React, Next.js, and Node — engineered for Core Web Vitals from the first commit, because a beautiful site nobody finds is a brochure in a drawer.',
    link: '/web-development-and-design',
    accent: '#7c3aed',
    bg: '#ede9fe',
    bgMid: '#ddd6fe',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Android, iOS, and Flutter apps built to survive real reviews: offline states, low-end devices, battery discipline. One codebase where it saves you money, native where it doesn\'t.',
    link: '/mobile-app-development',
    accent: '#059669',
    bg: '#d1fae5',
    bgMid: '#a7f3d0',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Interfaces your users won\'t need a manual for. Research, wireframes, prototypes, and design systems that developers can actually implement.',
    link: '/ui-ux-design',
    accent: '#d97706',
    bg: '#fef3c7',
    bgMid: '#fde68a',
  },
];

const ENGAGEMENT_STEPS = [
  {
    num: '01',
    label: 'Discovery & honest scoping',
    desc: 'Including the conversation about what not to build in version one.',
    icon: Target,
    accent: '#2563eb',
    bg: '#eff6ff',
    bgMid: '#bfdbfe',
  },
  {
    num: '02',
    label: 'Architecture',
    desc: 'Foundation that absorbs change without breaking.',
    icon: Layers,
    accent: '#7c3aed',
    bg: '#f5f3ff',
    bgMid: '#ddd6fe',
  },
  {
    num: '03',
    label: 'Sprint-based delivery',
    desc: 'Demos every cycle — you see progress in working software, not status decks.',
    icon: GitBranch,
    accent: '#ea580c',
    bg: '#fff7ed',
    bgMid: '#fed7aa',
  },
  {
    num: '04',
    label: 'QA alongside development',
    desc: 'Quality runs with the build, not as a panic phase after it.',
    icon: Shield,
    accent: '#059669',
    bg: '#ecfdf5',
    bgMid: '#a7f3d0',
  },
  {
    num: '05',
    label: 'Launch plan',
    desc: 'Including the week after launch, when real users find the real bugs.',
    icon: Rocket,
    accent: '#0891b2',
    bg: '#ecfeff',
    bgMid: '#a5f3fc',
  },
];

const PROOF_STATS = [
  { value: '30%', label: 'Faster operations' },
  { value: '50%', label: 'Quicker decisions' },
  { value: '40%', label: 'Lower failure costs' },
];

const PROOF_INTRO = (
  <>
    A century-old manufacturer ran divisions, locations, and machines on manual tracking.
    We engineered a cloud-based operations platform with live dashboards and predictive
    maintenance: operations <strong>30% faster</strong>, decision-making{' '}
    <strong>50% quicker</strong>, costs down <strong>40%</strong> from fewer unexpected failures.
    The same discipline scales down to an MVP in weeks — and up to modernizing legacy platforms
    without stopping the business that runs on them.
  </>
);

const WHY_STAY = [
  {
    icon: Check,
    title: 'Fixed, itemized quotes',
    desc: 'The number you approve is the invoice you receive.',
    accent: '#2563eb',
    bg: '#eff6ff',
    bgMid: '#bfdbfe',
  },
  {
    icon: Eye,
    title: 'Honest "don\'t build that yet"',
    desc: 'We\'ve talked clients out of six-figure features that data said nobody would use.',
    accent: '#ea580c',
    bg: '#fff7ed',
    bgMid: '#fed7aa',
  },
  {
    icon: Award,
    title: '95% client retention',
    desc: 'Across eight years and 500+ projects.',
    accent: '#7c3aed',
    bg: '#f5f3ff',
    bgMid: '#ddd6fe',
  },
  {
    icon: Shield,
    title: 'Post-launch ownership',
    desc: 'Monitoring, maintenance, and iteration under one roof.',
    accent: '#0891b2',
    bg: '#ecfeff',
    bgMid: '#a5f3fc',
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
      <section className="ai-deliver py-20 px-6" aria-labelledby="build-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr">
            <span className="ai-deliver__eyebrow">Capabilities</span>
            <ScrollTextReveal
              id="build-heading"
              tag="h2"
              align="center"
              className="ai-deliver__title w-full mt-3"
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
            <p className="ai-deliver__subtitle">
              Full-stack product engineering that survives launch.
            </p>
          </div>

          <div className="ai-deliver__grid ai-deliver__grid--pairs">
            {DELIVERABLES.map((item, i) => {
              const Icon = item.icon;
              const cardStyle = {
                '--deliver-accent': item.accent,
                '--deliver-bg': item.bg,
                '--deliver-bg-mid': item.bgMid,
                transitionDelay: `${i * 0.07}s`,
              } as React.CSSProperties;

              return (
                <article
                  key={item.title}
                  className="ai-deliver__card sr-from-center"
                  style={cardStyle}
                >
                  <div className="ai-deliver__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                  <h3 className="ai-deliver__card-title">{item.title}</h3>
                  <p className="ai-deliver__card-desc">{item.desc}</p>
                  <Link to={item.link} className="ai-deliver__link group">
                    Learn more
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How an engagement runs */}
      <section className="engagement-flow py-20 px-6" aria-labelledby="engagement-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr">
            <span className="engagement-flow__eyebrow">Our process</span>
            <ScrollTextReveal
              id="engagement-heading"
              tag="h2"
              align="center"
              className="engagement-flow__title w-full mt-3"
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
            />
            <p className="engagement-flow__subtitle">
              From discovery to launch and beyond — one continuous responsibility, not a chain of handoffs.
            </p>
          </div>

          <div className="engagement-flow__track">
            {ENGAGEMENT_STEPS.map((step, i) => {
              const Icon = step.icon;
              const stepStyle = {
                '--step-accent': step.accent,
                '--step-bg': step.bg,
                '--step-bg-mid': step.bgMid,
                transitionDelay: `${i * 0.08}s`,
              } as React.CSSProperties;

              return (
                <article
                  key={step.num}
                  className="engagement-flow__step sr-from-center"
                  style={stepStyle}
                >
                  <span className="engagement-flow__dot" aria-hidden="true" />
                  <div className="engagement-flow__step-top">
                    <span className="engagement-flow__num">{step.num}</span>
                    <div className="engagement-flow__icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="engagement-flow__label">{step.label}</h3>
                  <p className="engagement-flow__desc">{step.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceProofSection intro={PROOF_INTRO} stats={PROOF_STATS} />

      {/* Why teams pick us */}
      <section className="why-pick py-20 px-6" aria-labelledby="why-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr">
            {/* <span className="why-pick__eyebrow">Why NSS</span> */}
            <ScrollTextReveal
              id="why-heading"
              tag="h2"
              align="center"
              className="why-pick__title w-full mt-3"
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
            <p className="why-pick__subtitle">
              Not because we promise everything — because we own the outcome after the contract is signed.
            </p>
          </div>

          <div className="why-pick__grid">
            {WHY_STAY.map((item, i) => {
              const Icon = item.icon;
              const cardStyle = {
                '--pick-accent': item.accent,
                '--pick-bg': item.bg,
                '--pick-bg-mid': item.bgMid,
                transitionDelay: `${i * 0.09}s`,
              } as React.CSSProperties;

              return (
                <article
                  key={item.title}
                  className="why-pick__card sr-from-center"
                  style={cardStyle}
                >
                  <span className="why-pick__shine" aria-hidden="true" />
                  <div className="why-pick__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="why-pick__card-title">{item.title}</h3>
                  <p className="why-pick__card-desc">{item.desc}</p>
                  <span className="why-pick__arrow" aria-hidden="true">
                    <ArrowRight size={14} strokeWidth={2.25} />
                  </span>
                </article>
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