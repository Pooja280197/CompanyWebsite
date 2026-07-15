import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Layers,
  Newspaper,
  Plug,
  RefreshCw,
  ShoppingCart,
  Smartphone,
  X,
  Check,
} from 'lucide-react';
import { ScrollTextReveal, SERVICE_HERO_WAVE_PROPS, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { HERO_IMAGES } from '../../data/heroImages';
const ECONOMY_WORDS = [
  { text: 'The' },
  { text: 'three-second' },
  { text: 'economy' },
];

const PERFORMANCE_POINTS = [
  'Server-side rendering decided in week one',
  'Image discipline from day one',
  'Clean architecture built in, not bolted on',
];

const SLOW_COSTS = [
  'Users abandon slow pages — Google ranks accordingly',
  'Core Web Vitals are a ranking factor, not a suggestion',
  'Retrofitting speed costs five times what building it does',
];

const STACK_TAGS = [
  'React',
  'Next.js',
  'Vue',
  'Angular',
  'Node.js',
  'Python',
  'PHP/Laravel',
  'Java',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
];

const STANDARDS_TAGS = [
  'Accessibility',
  'Mobile-first',
  'Structured data',
  'Analytics wiring',
];

const HERO_TAGLINE = `Web platforms built to be found, loaded, and used.`;

const HERO_LETTER_INTERVAL = 72;
const HERO_TITLE_LINES = [
  {
    words: [{ text: 'WEB' }, { text: 'DEVELOPMENT' }],
    letterCount: 14,
    inline: true,
    startDelay: 0,
  },
  {
    words: [{ text: '&' }, { text: 'DESIGN' }],
    letterCount: 7,
    inline: false,
    startDelay: 14 * HERO_LETTER_INTERVAL,
  }
];

const BUILD_CARD_BG = '#dbeafe';
const BUILD_CARD_ACCENT = '#2563eb';

const BUILD_ITEMS = [
  {
    title: 'Marketing & corporate sites',
    desc: 'Indexable, fast, built to convert visits into conversations',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Web applications',
    desc: 'Dashboards, portals, and tools in React, Next.js, Vue, and Angular',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'E-commerce',
    desc: 'Storefronts and marketplaces engineered for checkout completion, not just catalog display',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Progressive Web Apps',
    desc: 'App-like experiences without the app-store toll',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Redesigns & migrations',
    desc: 'Modern frontends on existing systems, with SEO equity preserved through proper redirects (we practice what we\'re doing for this very site)',
    icon: RefreshCw,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Headless CMS & content platforms',
    desc: 'Flexible publishing systems that let your marketing team move fast without relying on developers',
    icon: Newspaper,
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'API development & integrations',
    desc: 'Secure APIs and third-party integrations that connect your website with CRMs, ERPs, payment gateways, and business tools',
    icon: Plug,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
];

const BUILD_SHOWCASE_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&q=80';

const GROWTH_IMAGE =
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80';

const FEATURE_CARD_TITLE_STYLE = {
  fontFamily: 'Inter,sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
  letterSpacing: '0.02em',
  lineHeight: 1.25,
  maxWidth: '100%',
} as const;

const STACK_WORDS = [
  { text: 'Stack' },
  { text: '&' },
  { text: 'standards' },
];

const STANDARDS_WORDS = [{ text: 'Shipped' }, { text: 'as' }, { text: 'standard' }];

const STACK_INTRO =
  'React, Next.js, Node.js, Vue, Angular on the front; Node, Python, PHP/Laravel, and Java behind; MongoDB, MySQL, PostgreSQL beneath.';

const STANDARDS_INTRO =
  'Accessibility, mobile-first layouts, structured data, and analytics wiring ship as standard — not as change requests.';

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'How long does a website build take?',
    a: 'A corporate site: 4–8 weeks. A web application: 10–20 weeks depending on complexity. Timeline lands in the quote with milestones.',
  },
  {
    q: 'Will it rank on Google?',
    a: 'We build every technical precondition — speed, structure, schema, clean URLs — and write for search intent. Rankings then depend on content and competition; we\'ll be honest about both in the audit.',
  },
  {
    q: 'Do you redesign without losing our current traffic?',
    a: 'Yes — URL mapping and 301 redirects are part of every redesign scope. Losing ranking equity in a redesign is malpractice, not bad luck.',
  },
  {
    q: 'Can you work with our designers?',
    a: (
      <>
        Comfortably. We implement from your Figma, or our{' '}
        <Link to="/ui-ux-design" className="text-[#2563eb] font-medium hover:underline">
          UI/UX team
        </Link>{' '}
        handles design end to end.
      </>
    ),
  },
  {
    q: 'What about hosting and maintenance?',
    a: 'We deploy to your infrastructure or manage it on AWS/Azure/GCP, with an optional maintenance plan covering updates, monitoring, and support.',
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: React.ReactNode;
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

export default function WebDevelopmentService() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const buildSectionRef = useRef<HTMLElement>(null);
  const buildTrackRef = useRef<HTMLDivElement>(null);
  const buildListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Web Development — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Web platforms built to be found, loaded, and used — fast, indexable sites and applications engineered for speed, search, and conversion.',
      );
    }
    window.scrollTo(0, 0);

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: typeof faq.a === 'string'
            ? faq.a
            : 'Comfortably. We implement from your Figma, or our UI/UX team handles design end to end.',
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'web-dev-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('web-dev-faq-schema')?.remove();
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
        <ServiceHeroBackground image={HERO_IMAGES.webDevelopment} />

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
              A beautiful site nobody finds is a brochure in a drawer. Our web development services engineer for the three things that matter: speed, search, and conversion.
            </p>

            <Link
              to="/contact-us"
              className="nav-cta-btn nav-cta-btn--cta a3 mt-5 inline-flex bg-gradient-to-b from-amber-400 via-orange-500 to-orange-600"
              style={{ '--nav-cta-w': '14.75rem' } as React.CSSProperties}
            >
              <span className="nav-cta-btn__label">Free Technical Audit</span>
              <span className="nav-cta-btn__icon">
                <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* The three-second economy */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="three-second-economy">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr w-full max-w-[920px] mx-auto px-2">
            <ScrollTextReveal
              id="three-second-economy"
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
              words={ECONOMY_WORDS}
            />

            <p className="sr sr-d2 text-[#555] text-base sm:text-lg leading-[1.85] mt-8 max-w-[48rem] mx-auto text-center">
              Users abandon slow pages, and Google ranks accordingly — Core Web Vitals are a ranking factor,
              not a suggestion. So we don&apos;t treat performance as a post-launch optimization. Server-side
              rendering, image discipline, and clean architecture are decided in week one, because retrofitting
              speed costs five times what building it does.
            </p>
          </div>

          <div className="flex items-center justify-center">
            {/* <article className="webdev-compare-card webdev-compare-card--custom sr-from-left">
              <div className="webdev-compare-card__inner">
                <span className="webdev-compare-card__badge webdev-compare-card__badge--custom">
                  <Check size={12} strokeWidth={2.75} aria-hidden="true" />
                  Performance from week one
                </span>
                <ul className="webdev-compare-card__list">
                  {PERFORMANCE_POINTS.map((item, i) => (
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
              </div>
            </article> */}

            <article className="webdev-compare-card webdev-compare-card--shelf sr-from-right webdev-compare-card--enter-second">
              <div className="webdev-compare-card__inner">
                <span className="webdev-compare-card__badge webdev-compare-card__badge--shelf">
                  <X size={12} strokeWidth={2.75} aria-hidden="true" />
                  The cost of slow
                </span>
                <ul className="webdev-compare-card__list">
                  {SLOW_COSTS.map((item, i) => (
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
                    Sites and applications engineered for speed, search, and conversion — not just launch day.
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

      {/* Stack & standards */}
      <section
        className="webdev-panel-section webdev-panel-section--stack"
        aria-labelledby="stack-heading"
      >
        <div className="max-w-[1200px] mx-auto w-full webdev-panel-stack">
          <article className="webdev-panel webdev-panel--img-left sr-from-center">
            <div className="webdev-panel__media">
              <img
                src={GROWTH_IMAGE}
                alt="Modern web development stack and architecture"
                loading="lazy"
              />
            </div>
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">Technology</span>
              <ScrollTextReveal
                id="stack-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={STACK_WORDS}
              />
              <p className="webdev-panel__text">{STACK_INTRO}</p>
              <div className="webdev-compare-card__tags mt-2">
                {STACK_TAGS.map((tag, i) => (
                  <span
                    key={tag}
                    className="webdev-compare-card__tag"
                    style={{ '--tag-delay': `${i * 0.04}s` } as React.CSSProperties}
                  >
                    <Check size={10} strokeWidth={3} aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article
            className="webdev-panel webdev-panel--img-right webdev-panel--compact sr-from-center"
            aria-labelledby="standards-heading"
          >
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">Included by default</span>
              <ScrollTextReveal
                id="standards-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={STANDARDS_WORDS}
              />
              <p className="webdev-panel__text">{STANDARDS_INTRO}</p>

              <div className="webdev-compare-card__tags">
                {STANDARDS_TAGS.map((tag, i) => (
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
            <div className="webdev-panel__media">
              <img
                src={GROWTH_IMAGE}
                alt="Web development standards and deployment"
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </section>

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
