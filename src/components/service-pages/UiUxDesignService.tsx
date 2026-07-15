import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  ClipboardList,
  FileCode,
  Layers,
  LayoutTemplate,
  Palette,
  Sparkles,
  UserCheck,
  X,
  Check,
} from 'lucide-react';
import { ScrollTextReveal, SERVICE_HERO_WAVE_PROPS, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { HERO_IMAGES } from '../../data/heroImages';
const DESIGN_WORDS = [
  { text: 'Why' },
  { text: 'design' },
  { text: 'pays' },
  { text: 'for' },
  { text: 'itself' },
];

const RESEARCH_POINTS = [
  'Fix usability at the wireframe — cheapest place to solve it',
  'User interviews, workflow mapping, and research before build',
  'Clickable prototypes argued about before a component is built',
];

const PRODUCTION_COSTS = [
  'Production is the most expensive place to fix usability',
  'Changes touch code, tests, and retraining',
  'Thinking bolted on after build, not front-loaded',
];

const RESEARCH_TAGS = ['User interviews', 'Workflow mapping', 'Clickable prototypes'];

const HERO_TAGLINE = `Design your users won't need a manual for.`;

const HERO_LETTER_INTERVAL = 72;
const HERO_TITLE_LINES = [
  {
    words: [{ text: 'UI/UX' }],
    letterCount: 4,
    inline: true,
    startDelay: 0,
  },
  {
    words: [{ text: 'DESIGN' }],
    letterCount: 6,
    inline: false,
    startDelay: 4 * HERO_LETTER_INTERVAL,
  }
];

const BUILD_CARD_BG = '#dbeafe';
const BUILD_CARD_ACCENT = '#2563eb';

const BUILD_ITEMS = [
  {
    title: 'UX research & audits',
    desc: 'Where users struggle, measured, not guessed',
    icon: ClipboardList,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Wireframes & prototypes',
    desc: 'Clickable flows stakeholders can test before development spends a rupee',
    icon: LayoutTemplate,
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'UI design',
    desc: 'Interface design with hierarchy, accessibility, and restraint',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Design systems',
    desc: 'Reusable component libraries so screen #200 ships as consistently as screen #2',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Developer handoff',
    desc: 'Specs, tokens, and Figma files engineered for implementation, because a design that can\'t be built is an illustration',
    icon: FileCode,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Interaction & motion design',
    desc: 'Purposeful animations, transitions, and micro-interactions that guide users without distracting them',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Usability testing & optimization',
    desc: 'Real user feedback translated into design improvements that increase clarity, confidence, and conversion',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1531489875518-69b88be066ca?w=640&q=80',
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

const ENGINEERING_WORDS = [
  { text: 'Design' },
  { text: 'with' },
  { text: 'engineering' },
  { text: 'in' },
  { text: 'the' },
  { text: 'room' },
];

const GAP_WORDS = [{ text: 'No' }, { text: 'handoff' }, { text: 'wars' }];

const ENGINEERING_TAGS = [
  'No impossible interactions',
  'No 40-variant sprawl',
  'Figma tokens & specs',
];

const ENGINEERING_INTRO =
  'Our designers sit with our engineers, which changes the output: no impossible interactions, no 40-variant component sprawl, no handoff wars.';

const GAP_INTRO =
  'If you\'ve experienced the agency-to-developer translation gap, this is the fix.';

const FAQS = [
  {
    q: 'Do you redesign existing products?',
    a: 'Constantly — usually starting with a UX audit that ranks problems by user impact, so you fix the expensive ones first instead of the visible ones.',
  },
  {
    q: 'What tools do you use?',
    a: 'Figma for design and prototyping, with developer-ready tokens and specs. Research artifacts arrive in formats your team can reuse.',
  },
  {
    q: 'Can you match our brand?',
    a: 'Yes — we design within your brand system, or help formalize one if it lives in scattered logo files and memory.',
  },
  {
    q: 'How do you measure design success?',
    a: 'Task completion, error rates, support-ticket reduction, and conversion — agreed as targets in the scope, measured after release.',
  },
  {
    q: 'Design only, or design plus build?',
    a: 'Either. Design-only engagements hand off cleanly to any competent team; most clients keep design and engineering under one roof here for speed.',
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

export default function UiUxDesignService() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const buildSectionRef = useRef<HTMLElement>(null);
  const buildTrackRef = useRef<HTMLDivElement>(null);
  const buildListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'UI/UX Design — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'UI/UX design that pays for itself — research-first wireframes, developer-ready handoff, and designers who work in the room with engineers.',
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
    script.id = 'ui-ux-design-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('ui-ux-design-faq-schema')?.remove();
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
        <ServiceHeroBackground image={HERO_IMAGES.uiUxDesign} />

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
            Every confusing screen has a cost: support tickets, abandoned carts, training hours. Our UI UX design services remove that cost before it's coded in.
            </p>

            <Link
              to="/contact-us"
              className="nav-cta-btn nav-cta-btn--cta a3 mt-5 inline-flex bg-gradient-to-b from-amber-400 via-orange-500 to-orange-600"
              style={{ '--nav-cta-w': '14.75rem' } as React.CSSProperties}
            >
              <span className="nav-cta-btn__label">Book a Free Design Review</span>
              <span className="nav-cta-btn__icon">
                <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Why design pays for itself */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="design-pays">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr w-full max-w-[920px] mx-auto px-2">
            <ScrollTextReveal
              id="design-pays"
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
              words={DESIGN_WORDS}
            />

            <p className="sr sr-d2 text-[#555] text-base sm:text-lg leading-[1.85] mt-8 max-w-[48rem] mx-auto text-center">
              The cheapest place to fix a usability problem is the wireframe. The most expensive is production,
              where a change touches code, tests, and retraining. Research-first design front-loads the thinking:
              user interviews, workflow mapping, and clickable prototypes that get argued about before a single
              component is built.
            </p>
          </div>

          <div className="flex items-center justify-center">
            {/* <article className="webdev-compare-card webdev-compare-card--custom sr-from-left">
              <div className="webdev-compare-card__inner">
                <span className="webdev-compare-card__badge webdev-compare-card__badge--custom">
                  <Check size={12} strokeWidth={2.75} aria-hidden="true" />
                  Research-first design
                </span>
                <ul className="webdev-compare-card__list">
                  {RESEARCH_POINTS.map((item, i) => (
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
                  {RESEARCH_TAGS.map((tag, i) => (
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
                  Fix it in production
                </span>
                <ul className="webdev-compare-card__list">
                  {PRODUCTION_COSTS.map((item, i) => (
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
                    From research to handoff — design that gets argued about before a single component is built.
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

      {/* Design with engineering in the room */}
      <section
        className="webdev-panel-section webdev-panel-section--stack"
        aria-labelledby="engineering-heading"
      >
        <div className="max-w-[1200px] mx-auto w-full webdev-panel-stack">
          <article className="webdev-panel webdev-panel--img-left sr-from-center">
            <div className="webdev-panel__media">
              <img
                src={GROWTH_IMAGE}
                alt="Designers and engineers collaborating on product UI"
                loading="lazy"
              />
            </div>
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">How we work</span>
              <ScrollTextReveal
                id="engineering-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={ENGINEERING_WORDS}
              />
              <p className="webdev-panel__text">{ENGINEERING_INTRO}</p>
              <div className="webdev-compare-card__tags mt-2">
                {ENGINEERING_TAGS.map((tag, i) => (
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
            aria-labelledby="gap-heading"
          >
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">The fix</span>
              <ScrollTextReveal
                id="gap-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={GAP_WORDS}
              />
              <p className="webdev-panel__text">{GAP_INTRO}</p>
            </div>
            <div className="webdev-panel__media">
              <img
                src={GROWTH_IMAGE}
                alt="UI/UX design handoff and collaboration"
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
