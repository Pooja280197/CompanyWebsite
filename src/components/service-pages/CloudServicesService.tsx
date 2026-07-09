import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Cloud,
  DollarSign,
  Layers,
  ShieldCheck,
  Zap,
  X,
  Check,
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import { ServiceProofSection } from './ServiceProofSection';

const HERO_BG_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80';

const MIGRATION_WORDS = [
  { text: 'Migration' },
  { text: 'without' },
  { text: 'the' },
  { text: 'outage' },
];

const MIGRATION_PLAN_POINTS = [
  'Replicate, run parallel, validate',
  'Controlled cutover with rollback on standby',
  'Encryption and compliance in the plan',
];

const MIGRATION_PITFALLS = [
  'Zero-downtime as a slogan, not a plan',
  'Production touched before you review',
  'Compliance protocols in the postmortem',
];

const MIGRATION_TAGS = ['Written migration plan', 'Workload-by-workload', 'Zero-downtime'];

const HERO_TAGLINE = `Cloud that scales when you grow and shrinks when you don't.`;
const HERO_DESC = `The cloud's promise was elasticity. The reality for most teams is a bill that only moves one direction. Our cloud consulting services restore the original deal.`;

const HERO_LETTER_INTERVAL = 72;
const HERO_TITLE_STROKE = '#fb923c';

const HERO_TITLE_LINES = [
  {
    words: [{ text: 'CLOUD' }],
    letterCount: 5,
    inline: true,
    startDelay: 0,
  },
  {
    words: [{ text: 'SOLUTIONS' }],
    letterCount: 8,
    inline: false,
    startDelay: 5 * HERO_LETTER_INTERVAL,
  },
];

const BUILD_CARD_BG = '#dbeafe';
const BUILD_CARD_ACCENT = '#2563eb';

const BUILD_ITEMS = [
  {
    title: 'Right-sizing & savings plans',
    desc: 'Over-provisioned instances trimmed, reserved instances and savings plans applied',
    icon: DollarSign,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Automated cost management',
    desc: 'Multi-cloud price comparison and real-time monitoring with reporting',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Hybrid architecture',
    desc: 'Public, private, and hybrid designs for industries with strict data compliance',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Dynamic scaling',
    desc: 'Dynamic resource scaling for cost efficiency under variable load',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'Disaster recovery',
    desc: 'Continuity plans that ensure operations survive failure',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
  {
    title: 'AWS, Azure & Google Cloud',
    desc: 'Migration Hub, EC2, Cost Explorer · Migrate, VMs, Site Recovery · Compute Engine, Anthos, GKE',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&q=80',
    bg: BUILD_CARD_BG,
    accent: BUILD_CARD_ACCENT,
  },
];

const BUILD_SHOWCASE_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&q=80';

const GROWTH_IMAGE =
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80';

const ARCHITECTURE_IMAGE =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80';

const COST_STATS = [
  { value: '20–40%', label: 'Waste in most bills' },
  { value: '35%', label: 'Lower spend' },
  { value: '40%', label: 'Faster performance' },
];

const PROOF_STATS = [
  { value: '99.99%', label: 'Uptime at peak' },
  { value: '35%', label: 'Cost savings' },
  { value: '$80K', label: 'Project value' },
];

const FEATURE_CARD_TITLE_STYLE = {
  fontFamily: 'Inter,sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
  letterSpacing: '0.02em',
  lineHeight: 1.25,
  maxWidth: '100%',
} as const;

const COST_WORDS = [
  { text: 'Cost' },
  { text: 'optimization' },
  { text: 'that' },
  { text: 'pays' },
  { text: 'for' },
  { text: 'itself' },
];

const ARCHITECTURE_WORDS = [
  { text: 'Architecture:' },
  { text: 'scalable,' },
  { text: 'hybrid,' },
  { text: 'defensible' },
];

const CLOUD_TAGS = [
  'AWS Migration Hub',
  'EC2',
  'Cost Explorer',
  'Azure Migrate',
  'VMs',
  'Site Recovery',
  'Compute Engine',
  'Anthos',
  'GKE',
];

const ARCHITECTURE_INTRO =
  'Public, private, and hybrid designs — dynamic resource scaling for cost efficiency, private-public combinations for industries with strict data compliance, and disaster recovery that ensures continuity. On AWS (Migration Hub, EC2, Cost Explorer), Azure (Migrate, VMs, Site Recovery), and Google Cloud (Compute Engine, Anthos, GKE).';

const COST_INTRO =
  'Right-sizing over-provisioned instances, reserved instances and savings plans, automated cost management, multi-cloud price comparison, and real-time monitoring with reporting. Most bills we audit carry 20–40% pure waste. One enterprise client: 35% lower spend and 40% faster performance from the same engagement.';

const PROOF_INTRO =
  'A high-traffic enterprise application: unpredictable spikes, slow queries, DDoS exposure, runaway costs. After load balancing with auto-scaling, database tuning (+30% query speed), zero-trust hardening, and CI/CD automation — 99.99% uptime under peak load, 35% cost savings, zero-downtime deployments since. Project value: $80,000.';

const FAQS = [
  {
    q: 'How long does a cloud migration take?',
    a: 'A single application: 4–8 weeks. A portfolio: phased over months, workload by workload, with the business running throughout. The assessment produces the real timeline.',
  },
  {
    q: 'Will migration disrupt our operations?',
    a: 'The plan is built so it doesn\'t: parallel running, validation gates, controlled cutover windows, rollback ready. You approve the plan before execution.',
  },
  {
    q: 'Which cloud is cheapest?',
    a: 'Depends on workloads, licensing, and committed-use discounts — the multi-cloud comparison in our assessment answers it with your numbers, not vendor marketing.',
  },
  {
    q: 'Can you fix costs without migrating anything?',
    a: 'Often, yes — right-sizing and savings plans on your current setup routinely recover 20–40%. That\'s the fastest win in the assessment.',
  },
  {
    q: 'Do you provide ongoing cloud management?',
    a: 'Yes — monitoring, patching, optimization, and incident response under a maintenance agreement with written response times.',
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

export default function CloudServicesService() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const buildSectionRef = useRef<HTMLElement>(null);
  const buildTrackRef = useRef<HTMLDivElement>(null);
  const buildListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Cloud Services — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Cloud migration without the outage — zero-downtime plans, cost optimization, hybrid architecture on AWS, Azure, and Google Cloud.',
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
    script.id = 'cloud-services-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('cloud-services-faq-schema')?.remove();
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
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={HERO_BG_IMAGE}
            alt=""
            className="webdev-hero__img h-full w-full object-cover object-[72%_center]"
          />
          <div className="webdev-hero__overlay webdev-hero__overlay--dark" aria-hidden="true" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="max-w-[58rem] text-left">
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
                  outlinedText
                  strokeColor={HERO_TITLE_STROKE}
                  strokeWidth={3}
                  letterInterval={HERO_LETTER_INTERVAL}
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

            <h1 className="webdev-hero__tagline a2 mb-3 w-full text-left">
              {HERO_TAGLINE}
            </h1>

            <p className="webdev-hero__desc a2 text-sm sm:text-base leading-[1.7] max-w-[38rem] tracking-[0.01em]">
              {HERO_DESC}
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

      {/* Migration without the outage */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="migration-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr w-full max-w-[920px] mx-auto px-2">
            <ScrollTextReveal
              id="migration-heading"
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
              words={MIGRATION_WORDS}
            />

            <p className="sr sr-d2 text-[#555] text-base sm:text-lg leading-[1.85] mt-8 max-w-[48rem] mx-auto text-center">
              Legacy-to-cloud transitions with custom strategies per workload: replicate, run parallel,
              validate, controlled cutover, rollback on standby. Zero-downtime isn&apos;t a slogan here
              — it&apos;s a written migration plan you review before we touch anything. Encryption and
              compliance protocols are part of the plan, not the postmortem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            <article className="webdev-compare-card webdev-compare-card--custom sr-from-left">
              <div className="webdev-compare-card__inner">
                <span className="webdev-compare-card__badge webdev-compare-card__badge--custom">
                  <Check size={12} strokeWidth={2.75} aria-hidden="true" />
                  Written migration plan
                </span>
                <ul className="webdev-compare-card__list">
                  {MIGRATION_PLAN_POINTS.map((item, i) => (
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
                  {MIGRATION_TAGS.map((tag, i) => (
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
                  Slogan migrations
                </span>
                <ul className="webdev-compare-card__list">
                  {MIGRATION_PITFALLS.map((item, i) => (
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
                    Cost optimization, hybrid architecture, and multi-cloud expertise — built to scale,
                    comply, and survive.
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
                    {CLOUD_TAGS.map((tag, i) => (
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

      {/* Cost optimization + Architecture */}
      <section
        className="webdev-panel-section webdev-panel-section--stack"
        aria-labelledby="cost-heading"
      >
        <div className="max-w-[1200px] mx-auto w-full webdev-panel-stack">
          <article className="webdev-panel webdev-panel--img-left sr-from-center">
            <div className="webdev-panel__media">
              <img
                src={GROWTH_IMAGE}
                alt="Cloud cost optimization and architecture"
                loading="lazy"
              />
            </div>
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">How we deliver</span>
              <ScrollTextReveal
                id="cost-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={COST_WORDS}
              />
              <p className="webdev-panel__text">{COST_INTRO}</p>
              <div className="webdev-panel__metrics">
                {COST_STATS.map((stat) => (
                  <div key={stat.label} className="webdev-panel__metric">
                    <p className="webdev-panel__metric-value">{stat.value}</p>
                    <p className="webdev-panel__metric-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="webdev-panel webdev-panel--img-right sr-from-center" aria-labelledby="architecture-heading">
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">Technology</span>
              <ScrollTextReveal
                id="architecture-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={ARCHITECTURE_WORDS}
              />
              <p className="webdev-panel__text">{ARCHITECTURE_INTRO}</p>
            </div>
            <div className="webdev-panel__media">
              <img
                src={ARCHITECTURE_IMAGE}
                alt="Scalable hybrid cloud architecture"
                loading="lazy"
              />
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
