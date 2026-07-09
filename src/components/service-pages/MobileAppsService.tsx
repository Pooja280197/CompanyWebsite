import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  ChevronDown,
  Cpu,
  GraduationCap,
  RefreshCw,
  Store,
  Users,
  X,
  Check,
} from 'lucide-react';
import { ScrollTextReveal, SERVICE_HERO_WAVE_PROPS, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { HERO_IMAGES } from '../../data/heroImages';
const DECISION_WORDS = [
  { text: 'Native,' },
  { text: 'cross-platform,' },
  { text: 'or' },
  { text: 'PWA' },
  { text: '—' },
  { text: 'the' },
  { text: 'honest' },
  { text: 'decision' },
];

const OUR_APPROACH = [
  'Flutter or React Native — one codebase, both platforms, ~30–40% cost saving',
  'Native Kotlin/Swift when performance or hardware access demands it',
  'Progressive Web App when users won\'t tolerate an install',
];

const AGENCY_PITFALLS = [
  'Most agencies pitch whatever their bench knows',
  'Recommendations without reasons — or none at all',
  'Sometimes you don\'t need an app yet — and they won\'t say so',
];

const PLATFORM_TAGS = ['Flutter', 'React Native', 'Kotlin/Swift', 'Progressive Web App'];

const HERO_TAGLINE = `Apps built to survive real users and real reviews.`;

const HERO_LETTER_INTERVAL = 72;
const HERO_TITLE_LINES = [
  {
    words: [{ text: 'MOBILE' }, { text: 'APP' }],
    letterCount: 9,
    inline: true,
    startDelay: 0,
  },
  {
    words: [{ text: 'DEVELOPMENT' }],
    letterCount: 11,
    inline: false,
    startDelay: 9 * HERO_LETTER_INTERVAL,
  }
];

const BUILD_CARD_BG = '#dbeafe';
const BUILD_CARD_ACCENT = '#2563eb';

const BUILD_ITEMS = [
  {
    title: 'Consumer apps',
    desc: 'Onboarding that converts, offline states that don\'t lose data, notifications that inform instead of annoy',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Business & field apps',
    desc: 'Inventory, delivery, inspection, and workforce tools (CleanPlan\'s mobile operations run on this discipline)',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fd538d?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'IoT companion apps',
    desc: 'Device pairing, real-time telemetry, and control surfaces for connected products',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'App modernization',
    desc: 'Rescuing apps other teams built, starting with a code audit and an honest verdict',
    icon: RefreshCw,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Booking & scheduling apps',
    desc: 'Appointments, reservations, calendar synchronization, and automated reminders that reduce no-shows',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Marketplace apps',
    desc: 'Buyer and seller experiences with listings, payments, messaging, and order tracking built for scale',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Education & e-learning apps',
    desc: 'Interactive learning, assessments, live classes, and progress tracking for students and institutions',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=640&q=80',
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

const OBSESS_WORDS = [
  { text: 'The' },
  { text: 'unglamorous' },
  { text: 'parts' },
  { text: 'we' },
  { text: 'obsess' },
  { text: 'over' },
];

const DELIVERY_WORDS = [
  { text: 'Real' },
  { text: 'devices,' },
  { text: 'real' },
  { text: 'ratings' },
];

const OBSESS_TAGS = [
  'Battery discipline',
  'Cold-start time',
  'Low-end Android',
  'Interrupted networks',
  'App-store guidelines',
];

const OBSESS_INTRO =
  'Battery discipline. Cold-start time. Low-end Android devices with 2GB of RAM. Interrupted networks in the field. App-store review guidelines that change quarterly.';

const DELIVERY_INTRO =
  'These decide your ratings more than features do — so they\'re engineered, tested on real devices, and monitored after launch.';

const FAQS = [
  {
    q: 'Flutter or native — which should we choose?',
    a: 'Flutter (or React Native) covers most business and consumer apps at 30–40% lower cost. Native wins for heavy graphics, deep hardware integration, or platform-specific polish. We\'ll put the recommendation and reasoning in writing before you decide.',
  },
  {
    q: 'How much does an app cost?',
    a: 'A focused single-purpose app starts in the low five figures; feature-rich products with backends run higher. Scope drives everything, and the quote is fixed and itemized.',
  },
  {
    q: 'Do you handle app store submission?',
    a: 'End to end — listings, review compliance, staged rollouts, and the inevitable resubmission when a guideline shifts mid-review.',
  },
  {
    q: 'What about the backend?',
    a: 'Included where needed: APIs, databases, authentication, push infrastructure, and admin panels are scoped in the same quote, one team accountable.',
  },
  {
    q: 'Do you maintain apps post-launch?',
    a: 'Yes — OS updates break things on a schedule. Maintenance plans cover monitoring, updates, crash triage, and store compliance.',
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

export default function MobileAppsService() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const buildSectionRef = useRef<HTMLElement>(null);
  const buildTrackRef = useRef<HTMLDivElement>(null);
  const buildListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Mobile App Development — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Mobile apps built to survive real users and real reviews — native, cross-platform, or PWA chosen by the numbers, not the agency bench.',
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
    script.id = 'mobile-apps-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('mobile-apps-faq-schema')?.remove();
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
        <ServiceHeroBackground image={HERO_IMAGES.mobileApps} />

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
            The app store is unforgiving: one crash, one battery complaint, one confusing screen, and the 1-star reviews write themselves. Our mobile app development services engineer for the phone in your user's hand, not the emulator on ours. 
            </p>

            <Link
              to="/#contact"
              className="nav-cta-btn nav-cta-btn--cta a3 mt-5 inline-flex bg-gradient-to-b from-amber-400 via-orange-500 to-orange-600"
              style={{ '--nav-cta-w': '14.75rem' } as React.CSSProperties}
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

      {/* Native, cross-platform, or PWA */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="honest-decision">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr w-full max-w-[920px] mx-auto px-2">
            <ScrollTextReveal
              id="honest-decision"
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
              words={DECISION_WORDS}
            />

            <p className="sr sr-d2 text-[#555] text-base sm:text-lg leading-[1.85] mt-8 max-w-[48rem] mx-auto text-center">
              Most agencies pitch whatever their bench knows. We decide by the numbers: Flutter or React Native
              when one codebase serves both platforms without compromise (roughly 30–40% cost saving), native
              Kotlin/Swift when performance, hardware access, or platform feel demands it, and a Progressive Web
              App when your users won&apos;t tolerate an install. You get the recommendation with reasons — and
              sometimes the reason is &apos;you don&apos;t need an app yet.&apos;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            <article className="webdev-compare-card webdev-compare-card--custom sr-from-left">
              <div className="webdev-compare-card__inner">
                <span className="webdev-compare-card__badge webdev-compare-card__badge--custom">
                  <Check size={12} strokeWidth={2.75} aria-hidden="true" />
                  We decide by the numbers
                </span>
                <ul className="webdev-compare-card__list">
                  {OUR_APPROACH.map((item, i) => (
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
                  {PLATFORM_TAGS.map((tag, i) => (
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
            </article>

            <article className="webdev-compare-card webdev-compare-card--shelf sr-from-right webdev-compare-card--enter-second">
              <div className="webdev-compare-card__inner">
                <span className="webdev-compare-card__badge webdev-compare-card__badge--shelf">
                  <X size={12} strokeWidth={2.75} aria-hidden="true" />
                  What most agencies do
                </span>
                <ul className="webdev-compare-card__list">
                  {AGENCY_PITFALLS.map((item, i) => (
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

      {/* What we build — pinned split + scroll-driven card list */}
      <section ref={buildSectionRef} className="webdev-build-pin px-6 bg-white" aria-labelledby="what-build">
        <div ref={buildTrackRef} className="webdev-build-pin-track">
          <div className="webdev-build-pin-sticky py-20">
            <div className="max-w-[1200px] mx-auto w-full">
              <div className="webdev-build-layout grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-stretch">
                <div className="webdev-build-left sr">
                  <h2
                    id="what-build"
                    className="webdev-build-left__title text-[#1b1d1e] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight"
                  >
                    What we build
                  </h2>
                  <p className="webdev-build-left__desc text-[#666] text-base sm:text-lg leading-relaxed max-w-[28rem]">
                    Consumer, field, IoT, and rescue projects — engineered for the phone in your user&apos;s hand.
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
                    aria-label="What we build services"
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

      {/* The unglamorous parts we obsess over */}
      <section
        className="webdev-panel-section webdev-panel-section--stack"
        aria-labelledby="obsess-heading"
      >
        <div className="max-w-[1200px] mx-auto w-full webdev-panel-stack">
          <article className="webdev-panel webdev-panel--img-left sr-from-center">
            <div className="webdev-panel__media">
              <img
                src={GROWTH_IMAGE}
                alt="Mobile app performance testing on real devices"
                loading="lazy"
              />
            </div>
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">What ratings depend on</span>
              <ScrollTextReveal
                id="obsess-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={OBSESS_WORDS}
              />
              <p className="webdev-panel__text">{OBSESS_INTRO}</p>
              <div className="webdev-compare-card__tags mt-2">
                {OBSESS_TAGS.map((tag, i) => (
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
            aria-labelledby="delivery-heading"
          >
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">After launch</span>
              <ScrollTextReveal
                id="delivery-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={DELIVERY_WORDS}
              />
              <p className="webdev-panel__text">{DELIVERY_INTRO}</p>
            </div>
            <div className="webdev-panel__media">
              <img
                src={GROWTH_IMAGE}
                alt="Mobile app delivery and device testing"
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
