import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Database,
  Layers,
  ShieldCheck,
  Workflow,
  Zap,
  X,
  Check,
} from 'lucide-react';
import { ScrollTextReveal, SERVICE_HERO_WAVE_PROPS, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { HERO_IMAGES } from '../../data/heroImages';
import { ServiceProofSection } from './ServiceProofSection';
const MONDAY_WORDS = [
  { text: 'The' },
  { text: 'Monday-morning' },
  { text: 'test' },
];

const PLUMBING_POINTS = [
  'Clean pipelines from every source system',
  'One warehouse of truth, governed and fast',
  'Reports that refresh themselves',
];

const DASHBOARD_PITFALLS = [
  'Another dashboard tool on broken data',
  'Whole Friday lost to weekly numbers',
  'Data that works against you, not for you',
];

const PLUMBING_TAGS = ['ETL pipelines', 'Data warehouse', 'Auto-refresh reports'];

const HERO_TAGLINE = `From data chaos to decisions you can defend.`;

const HERO_LETTER_INTERVAL = 72;
const HERO_TITLE_LINES = [
  {
    words: [{ text: 'DATA' },{ text: 'SCIENCE' },{ text: '&' }],
    letterCount: 13,
    inline: true,
    startDelay: 0,
  },
  {
    words: [ { text: 'ANALYTICS' }],
    letterCount: 10,
    inline: false,
    startDelay: 9 * HERO_LETTER_INTERVAL,
  }
];

const BUILD_CARD_BG = '#dbeafe';
const BUILD_CARD_ACCENT = '#2563eb';

const BUILD_ITEMS = [
  {
    title: 'ETL pipelines',
    desc: 'Data flowing from every source system, cleaned and reconciled automatically',
    icon: Workflow,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Data warehousing',
    desc: 'Centralized, governed repositories built for fast querying',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Data lake management',
    desc: 'Unstructured data processed with modern frameworks instead of ignored',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Real-time analytics',
    desc: 'Decisions on live data, not last Tuesday\'s export',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Data governance',
    desc: 'Compliance, quality rules, and access control across systems',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Dashboards',
    desc: 'Power BI and custom visualization that answer questions instead of decorating them',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
];

const BUILD_SHOWCASE_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&q=80';

const GROWTH_IMAGE =
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80';

const PROOF_STATS = [
  { value: '50%', label: 'Faster ETL' },
  { value: '99.9%', label: 'Data availability' },
  { value: '3×', label: 'Faster reporting' },
];

const FEATURE_CARD_TITLE_STYLE = {
  fontFamily: 'Inter,sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
  letterSpacing: '0.02em',
  lineHeight: 1.25,
  maxWidth: '100%',
} as const;

const PROCESS_WORDS = [
  { text: 'The' },
  { text: 'analysis' },
  { text: 'process' },
];

const PROCESS_TAGS = [
  'Collection',
  'Cleaning',
  'Exploration',
  'Transformation',
  'Visualization',
  'Decision',
];

const PROOF_INTRO =
  'A data-driven enterprise came to us with slow ETL, disconnected data, and no real-time view. We rebuilt the pipeline architecture: ETL processing time cut 50%, 99.9% data availability, reporting 3x faster.';

const PROCESS_INTRO =
  'The analysis process behind it — collection, cleaning, exploration, transformation, visualization, decision — is the same one we\'ll run on your stack.';

const FAQS = [
  {
    q: 'We run on spreadsheets. Is that bad?',
    a: 'It\'s normal — and it has a ceiling. When versions conflict, formulas break silently, and one person\'s laptop holds the truth, you\'ve hit it. Migration is incremental; nobody\'s Excel gets confiscated on day one.',
  },
  {
    q: 'Which BI tools do you work with?',
    a: 'Power BI most deeply, plus Tableau, Google Data Studio, Plotly, Matplotlib, and custom dashboards where a product needs embedded analytics.',
  },
  {
    q: 'How long until we see value?',
    a: 'First governed dashboard on clean data: typically 4–8 weeks. Full warehouse builds run longer, but value ships incrementally — not as a big-bang reveal.',
  },
  {
    q: 'Real-time analytics — do we actually need it?',
    a: 'Sometimes no, and we\'ll say so. Fraud, inventory, and operations monitoring justify it; monthly financials usually don\'t. The audit sorts need from fashion.',
  },
  {
    q: 'Can this feed AI later?',
    a: 'It\'s the prerequisite. Every AI engagement we run starts with exactly this data foundation — build it once, use it twice.',
  },
];

const GROWTH_WORDS = [
  { text: 'Built' },
  { text: 'for' },
  { text: 'growth,' },
  { text: 'secured' },
  { text: 'by' },
  { text: 'design' },
];

const GROWTH_INTRO =
  'Every build ships with scalable architecture (it grows without a rewrite), security that passes enterprise review — encryption, access control, audit trails — and documentation the next developer can actually use. You own 100% of the code and IP. That\'s in the contract, not the sales call.';

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

export default function AnalyticsService() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const buildSectionRef = useRef<HTMLElement>(null);
  const buildTrackRef = useRef<HTMLDivElement>(null);
  const buildListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Analytics & Reporting — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Data pipelines, warehouses, and dashboards that pass the Monday-morning test — clean plumbing, governed data, reports that refresh themselves.',
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
    script.id = 'analytics-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('analytics-faq-schema')?.remove();
    };
  }, []);

  useEffect(() => {
    const section = buildSectionRef.current;
    const track = buildTrackRef.current;
    const list = buildListRef.current;
    if (!section || !track || !list) return;

    const measurePanelHeight = () => {
      if (window.innerWidth < 1024) {
        section.style.removeProperty('--build-panel-h');
        list.style.removeProperty('--build-panel-h');
        return;
      }

      const cards = list.querySelectorAll<HTMLElement>('.webdev-build-card');
      if (cards.length < 3) return;

      const gap = Number.parseFloat(getComputedStyle(list).rowGap || getComputedStyle(list).gap) || 13.6;
      let height = 0;
      for (let i = 0; i < 3; i += 1) height += cards[i].offsetHeight;
      height += gap * 2;

      const px = `${height}px`;
      section.style.setProperty('--build-panel-h', px);
      list.style.setProperty('--build-panel-h', px);
    };

    const syncBuildScroll = () => {
      if (window.innerWidth < 1024) {
        track.style.removeProperty('height');
        list.classList.remove('webdev-build-scroll--pinned');
        list.scrollTop = 0;
        return;
      }

      list.classList.add('webdev-build-scroll--pinned');
      measurePanelHeight();

      const maxScroll = list.scrollHeight - list.clientHeight;
      if (maxScroll <= 1) {
        track.style.height = 'auto';
        list.scrollTop = 0;
        return;
      }

      track.style.height = `${maxScroll + window.innerHeight}px`;

      const rect = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / scrollable);
      list.scrollTop = progress * maxScroll;
    };

    measurePanelHeight();
    syncBuildScroll();

    const resizeObserver = new ResizeObserver(() => {
      measurePanelHeight();
      syncBuildScroll();
    });
    list.querySelectorAll('.webdev-build-card').forEach((card) => resizeObserver.observe(card));
    window.addEventListener('scroll', syncBuildScroll, { passive: true });
    window.addEventListener('resize', syncBuildScroll);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', syncBuildScroll);
      window.removeEventListener('scroll', syncBuildScroll);
    };
  }, []);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header className="webdev-hero relative border-b border-white/10 px-6">
        <ServiceHeroBackground image={HERO_IMAGES.analytics} />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="max-w-[58rem] text-left">
            <HeroTitleWaveGroup
              lineLetterCounts={getHeroLineLetterCounts(HERO_TITLE_LINES)}
              waveStartDelay={getHeroWaveStartDelay(HERO_TITLE_LINES, HERO_LETTER_INTERVAL)}
            >
            <div
              className="hero-outline-text a1 mb-3"
              style={{ fontSize: 'clamp(2.5rem, 5.8vw, 4.25rem)' }}
              aria-hidden="true"
            >
              {HERO_TITLE_LINES.map((line, i) => (
                <ScrollTextReveal
                  key={line.words.map((w) => w.text).join('-')}
                  tag="span"
                  align="left"
                  animate="words"
                  {...SERVICE_HERO_WAVE_PROPS}
                  waveLineIndex={i}                  letterInterval={HERO_LETTER_INTERVAL}
                  startDelay={line.startDelay}
                  wordGap="0.55em"
                  words={line.words}
                  className={`hero-outline-line hero-outline-line--reveal${line.inline ? ' hero-outline-line--inline' : ''}`}
                  style={{
                    display: line.inline ? 'inline-block' : 'block',
                    width: 'fit-content',
                    maxWidth: '100%',
                    marginBottom: i < HERO_TITLE_LINES.length - 1 ? '0.08em' : undefined,
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
            Your business already generates the data. Our data science and analytics services turn it into pipelines, warehouses, and dashboards leadership actually opens. 
            </p>

            <Link
              to="/contact-us"
              className="nav-cta-btn nav-cta-btn--cta a3 mt-5 inline-flex bg-gradient-to-b from-amber-400 via-orange-500 to-orange-600"
              style={{ '--nav-cta-w': '14.75rem' } as React.CSSProperties}
            >
              <span className="nav-cta-btn__label">Get a Data Audit</span>
              <span className="nav-cta-btn__icon">
                <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* The Monday-morning test */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="monday-test">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr w-full max-w-[920px] mx-auto px-2">
            <ScrollTextReveal
              id="monday-test"
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
              words={MONDAY_WORDS}
            />

            <p className="sr sr-d2 text-[#555] text-base sm:text-lg leading-[1.85] mt-8 max-w-[48rem] mx-auto text-center">
              If preparing the weekly numbers takes someone&apos;s whole Friday, your data works against you.
              The fix isn&apos;t another dashboard tool — it&apos;s the plumbing: clean pipelines, one warehouse
              of truth, and reports that refresh themselves.
            </p>
          </div>

          <div className="flex items-center justify-center">
            {/* <article className="webdev-compare-card webdev-compare-card--custom sr-from-left">
              <div className="webdev-compare-card__inner">
                <span className="webdev-compare-card__badge webdev-compare-card__badge--custom">
                  <Check size={12} strokeWidth={2.75} aria-hidden="true" />
                  Fix the plumbing
                </span>
                <ul className="webdev-compare-card__list">
                  {PLUMBING_POINTS.map((item, i) => (
                    <li
                      key={item}
                      className="webdev-compare-card__item"
                      style={{ '--item-delay': `${i * 0.1}s` } as React.CSSProperties}
                    >
                      <span className="webdev-compare-card__icon webdev-compare-card__icon--custom" aria-hidden="true">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="webdev-compare-card__tags mt-4">
                  {PLUMBING_TAGS.map((tag, i) => (
                    <span
                      key={tag}
                      className="webdev-compare-card__tag"
                      style={{ '--tag-delay': `${i * 0.08}s` } as React.CSSProperties}
                    >
                      <Check size={10} strokeWidth={3} aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article> */}

            <article className="webdev-compare-card webdev-compare-card--shelf sr-from-right webdev-compare-card--enter-second">
              <div className="webdev-compare-card__inner">
                <span className="webdev-compare-card__badge webdev-compare-card__badge--shelf">
                  <X size={12} strokeWidth={2.75} aria-hidden="true" />
                  Another dashboard tool
                </span>
                <ul className="webdev-compare-card__list">
                  {DASHBOARD_PITFALLS.map((item, i) => (
                    <li
                      key={item}
                      className="webdev-compare-card__item"
                      style={{ '--item-delay': `${i * 0.1}s` } as React.CSSProperties}
                    >
                      <span className="webdev-compare-card__icon webdev-compare-card__icon--shelf" aria-hidden="true">
                        <X size={11} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* What we deliver — pinned split + scroll-driven card list */}
      <section ref={buildSectionRef} className="webdev-build-pin px-6 bg-white" aria-labelledby="what-deliver">
        <div ref={buildTrackRef} className="webdev-build-pin-track">
          <div className="webdev-build-pin-sticky py-20">
            <div className="max-w-[1200px] mx-auto w-full">
              <div className="webdev-build-layout grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-stretch">
                <div className="webdev-build-left sr">
                  <h2
                    id="what-deliver"
                    className="webdev-build-left__title text-[#1b1d1e] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight"
                  >
                    What we deliver
                  </h2>
                  <p className="webdev-build-left__desc text-[#666] text-base sm:text-lg leading-relaxed max-w-[28rem]">
                    Pipelines, warehouses, lakes, and dashboards — built to answer questions, not decorate slides.
                  </p>
                  <div className="webdev-build-showcase">
                    <img
                      src={BUILD_SHOWCASE_IMAGE}
                      alt="NSS team collaborating on software"
                      className="webdev-build-showcase__img"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="webdev-build-scroll-wrap sr sr-d2">
                  <div
                    ref={buildListRef}
                    className="webdev-build-scroll"
                    role="region"
                    aria-label="What we deliver services"
                  >
                    {BUILD_ITEMS.map((item, i) => {
                      const Icon = item.icon;
                      return (
                      <article
                        key={item.title}
                        className="webdev-build-card"
                        style={
                          {
                            '--card-delay': `${i * 0.05}s`,
                            '--card-accent': item.accent,
                            '--card-bg': item.bg,
                          } as React.CSSProperties
                        }
                      >
                        <span className="webdev-build-card__glow" aria-hidden="true" />
                        <span className="webdev-build-card__icon" style={{ color: item.accent }} aria-hidden="true">
                          <Icon size={20} strokeWidth={2} />
                        </span>
                        <span className="webdev-build-card__num" aria-hidden="true">
                          {i + 1}
                        </span>
                        <h3 className="webdev-build-card__title">{item.title}</h3>
                        <p className="webdev-build-card__desc">{item.desc}</p>
                      </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for growth */}
      <section
        className="webdev-panel-section webdev-panel-section--stack"
        aria-labelledby="growth-heading"
      >
        <div className="max-w-[1200px] mx-auto w-full webdev-panel-stack">
          <article className="webdev-panel webdev-panel--img-left sr-from-center">
            <div className="webdev-panel__media">
              <img
                src={GROWTH_IMAGE}
                alt="Secure scalable software architecture"
                loading="lazy"
              />
            </div>
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">How we deliver</span>
              <ScrollTextReveal
                id="growth-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={GROWTH_WORDS}
              />
              <p className="webdev-panel__text">{GROWTH_INTRO}</p>
            </div>
          </article>

        </div>
      </section>

      <ServiceProofSection intro={PROOF_INTRO} stats={PROOF_STATS} />

      {/* FAQ */}
      <section className="py-20 px-6" aria-labelledby="web-faq-heading">
        <div className="max-w-[860px] mx-auto w-full">
          <div className="text-center mb-12">
            <ScrollTextReveal
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

    </article>
  );
}
