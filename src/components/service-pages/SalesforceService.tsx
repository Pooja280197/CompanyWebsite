import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Link2,
  Workflow,
  X,
  Check,
} from 'lucide-react';
import { ScrollTextReveal, SERVICE_HERO_WAVE_PROPS, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { HERO_IMAGES } from '../../data/heroImages';
import { ServiceProofSection } from './ServiceProofSection';
const ADOPTION_FAIL_WORDS = [
  { text: 'Why' },
  { text: 'Salesforce' },
  { text: 'adoption' },
  { text: 'fails' },
];

const TEMPLATE_PITFALLS = [
  'Fields nobody needs cluttering every record',
  'Workflows imported from a template',
  'Reports built for a business that isn\'t yours',
];

const PROCESS_TAGS = ['Implementation', 'Integrations', 'Data migration'];

const HERO_TAGLINE = `Salesforce your sales team will actually use.`;
const HERO_DESC = `The most expensive CRM is the one your team quietly abandons for spreadsheets. Our Salesforce development services tune the platform to how your pipeline really works.`;

const HERO_LETTER_INTERVAL = 72;
const HERO_TITLE_LINES = [
  {
    words: [{ text: 'SALESFORCE' }],
    letterCount: 10,
    inline: true,
    startDelay: 0,
  },
  {
    words: [{ text: 'DEVELOPMENT' }],
    letterCount: 11,
    inline: false,
    startDelay: 10 * HERO_LETTER_INTERVAL,
  },
];

const BUILD_CARD_BG = '#dbeafe';
const BUILD_CARD_ACCENT = '#2563eb';

const BUILD_ITEMS = [
  {
    title: 'Implementation & configuration',
    desc: 'Objects, pipelines, and permissions shaped to your actual sales motion',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Custom development',
    desc: 'Apex, Lightning components, and flows where configuration ends',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Integrations',
    desc: 'Salesforce talking to your ERP, marketing tools, and support desk (this is where the real value hides)',
    icon: Link2,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Data migration',
    desc: 'Legacy CRM data cleaned and mapped, not just dumped',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Admin support & training',
    desc: 'Adoption is a process, so we stay for it',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Reports & dashboards',
    desc: 'Real-time sales, service, and operational insights that give teams visibility without spreadsheet gymnastics',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Automation & workflow optimization',
    desc: 'Approvals, lead routing, follow-ups, and repetitive CRM tasks automated to improve consistency and reduce manual effort',
    icon: Workflow,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
];

const SALESFORCE_TAGS = [
  'Implementation',
  'Custom development',
  'Integrations',
  'Data migration',
  'Admin & training',
  'Reports & dashboards',
  'Workflow automation',
];

const BUILD_SHOWCASE_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&q=80';

const GROWTH_IMAGE =
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80';

const PROOF_STATS = [
  { value: '4–8 wk', label: 'Focused rollout' },
  { value: '3–5 mo', label: 'Complex orgs' },
  { value: '1 team', label: 'Software + Salesforce' },
];

const FEATURE_CARD_TITLE_STYLE = {
  fontFamily: 'Inter,sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
  letterSpacing: '0.02em',
  lineHeight: 1.25,
  maxWidth: '100%',
} as const;

const GROWTH_WORDS = [
  { text: 'Integrated,' },
  { text: 'not' },
  { text: 'isolated' },
];

const GROWTH_INTRO =
  'A CRM that doesn\'t see your orders, invoices, and support tickets tells half the truth. As engineers first, we connect Salesforce to the rest of your stack — including custom platforms and ERPs like the ones we build.';

const PROOF_INTRO =
  'We bought Salesforce and nobody uses it — our most common Salesforce engagement. The audit finds the friction, usually over-configuration, and we cut it back to what your team\'s day actually needs.';

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: 'We bought Salesforce and nobody uses it. Can you fix that?',
    a: 'This is our most common Salesforce engagement. The audit finds the friction — usually over-configuration — and we cut it back to what your team\'s day actually needs.',
  },
  {
    q: 'Do you handle Salesforce integrations with custom software?',
    a: 'Yes, and it\'s our edge: most Salesforce shops don\'t build software, and most software shops don\'t do Salesforce. We do both, so the integration has one accountable owner.',
  },
  {
    q: 'How long does implementation take?',
    a: 'A focused implementation: 4–8 weeks. Complex orgs with integrations and migration: 3–5 months, phased so value ships early.',
  },
  {
    q: 'Can you rescue a bad implementation?',
    a: 'Usually without starting over — the audit separates what\'s salvageable from what\'s fighting your process, then we fix incrementally.',
  },
  {
    q: 'Do you provide ongoing Salesforce admin support?',
    a: 'Yes — retainer-based admin, enhancement, and user support so you don\'t need a full-time hire for a part-time need.',
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: ReactNode;
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

export default function SalesforceService() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const buildSectionRef = useRef<HTMLElement>(null);
  const buildTrackRef = useRef<HTMLDivElement>(null);
  const buildListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Salesforce Development — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Salesforce development — implementation, custom Apex and Lightning, ERP integrations, data migration, and admin support shaped to your sales process.',
      );
    }
    window.scrollTo(0, 0);

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a as string },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'salesforce-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('salesforce-faq-schema')?.remove();
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
        <ServiceHeroBackground image={HERO_IMAGES.salesforce} />

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
              {HERO_DESC}
            </p>

            <Link
              to="/contact-us"
              className="nav-cta-btn nav-cta-btn--cta a3 mt-5 inline-flex bg-gradient-to-b from-amber-400 via-orange-500 to-orange-600"
              style={{ '--nav-cta-w': '14.75rem' } as React.CSSProperties}
            >
              <span className="nav-cta-btn__label">Book a Salesforce Audit</span>
              <span className="nav-cta-btn__icon">
                <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Why Salesforce adoption fails */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="adoption-fail-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr w-full max-w-[920px] mx-auto px-2">
            <ScrollTextReveal
              id="adoption-fail-heading"
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
              words={ADOPTION_FAIL_WORDS}
            />

            <p className="sr sr-d2 text-[#555] text-base sm:text-lg leading-[1.85] mt-8 max-w-[48rem] mx-auto text-center">
              It&apos;s rarely the platform. It&apos;s fields nobody needs, workflows imported from a
              template, and reports built for a business that isn&apos;t yours. Adoption follows relevance
              — so implementation starts with your sales process, not with Salesforce&apos;s defaults.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            <article className="webdev-compare-card webdev-compare-card--custom sr-from-left">
              <div className="webdev-compare-card__inner">
                <span className="webdev-compare-card__badge webdev-compare-card__badge--custom">
                  <Check size={12} strokeWidth={2.75} aria-hidden="true" />
                  Your sales process
                </span>
                <p className="webdev-compare-card__desc">
                  Objects, pipelines, and permissions shaped to how your team actually sells — adoption
                  follows relevance, not defaults.
                </p>
                <div className="webdev-compare-card__tags">
                  {PROCESS_TAGS.map((tag, i) => (
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
                  Template defaults
                </span>
                <ul className="webdev-compare-card__list">
                  {TEMPLATE_PITFALLS.map((item, i) => (
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
                <div className="webdev-build-left sr webdev-build-left--has-tags">
                  <h2
                    id="what-deliver"
                    className="webdev-build-left__title text-[#1b1d1e] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight"
                  >
                    What we deliver
                  </h2>
                  <p className="webdev-build-left__desc text-[#666] text-base sm:text-lg leading-relaxed max-w-[28rem]">
                    Implementation, custom development, integrations, migration, and training — shaped
                    to your sales motion, not a template.
                  </p>
                  <div className="webdev-build-showcase">
                    <img
                      src={BUILD_SHOWCASE_IMAGE}
                      alt="NSS team collaborating on software"
                      className="webdev-build-showcase__img"
                      loading="lazy"
                    />
                  </div>
                  <div className="webdev-build-left__tags webdev-compare-card__tags mt-4 max-w-[28rem] flex-shrink-0">
                    {SALESFORCE_TAGS.map((tag, i) => (
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
                alt="Salesforce integrated with business systems"
                loading="lazy"
              />
            </div>
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">Connected stack</span>
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
