import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Brain,
  ChevronDown,
  Eye,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { ScrollTextReveal, SERVICE_HERO_WAVE_PROPS, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { HERO_IMAGES } from '../../data/heroImages';
import { ServiceProofSection } from './ServiceProofSection';
const HERO_TAGLINE = `Machine learning that earns its place in production.`;

const HERO_LETTER_INTERVAL = 72;
const HERO_TITLE_LINES = [
  {
    words: [{ text: 'AI/ML' }],
    letterCount: 2,
    inline: true,
    startDelay: 0,
  },
  {
    words: [{ text: 'DEVELOPMENT' }],
    letterCount: 9,
    inline: false,
    startDelay: 2 * HERO_LETTER_INTERVAL,
  }
];

const BUILD_ITEMS = [
  {
    theme: 'ml',
    title: 'Machine learning',
    desc: 'Prediction wired into operations: churn before it happens, credit and fraud risk before it costs, pricing that responds to demand, forecasts your inventory can trust. Every model ships with a baseline, an accuracy target, and a retraining schedule — because unmonitored models decay silently.',
    icon: Brain,
    accent: '#5b5bd6',
    bg: '#ede9fe',
    tags: ['Churn prediction', 'Fraud risk', 'Demand forecasting', 'Retraining schedules'],
  },
  {
    theme: 'genai',
    title: 'Generative AI & NLP',
    desc: 'Document intelligence that reads contracts and invoices, semantic search that understands intent instead of keywords, RAG pipelines that answer from your private data with citations, and assistants trained on your business context. Plus sentiment analysis, chatbots, and voice interfaces.',
    icon: Bot,
    accent: '#0e7490',
    bg: '#e0f2fe',
    tags: ['RAG pipelines', 'Semantic search', 'Document AI', 'Voice interfaces'],
  },
  {
    theme: 'vision',
    title: 'Computer vision & deep learning',
    desc: 'Classification, similarity, and defect detection with CNNs and transformer architectures. In production: a diamond-similarity engine combining Random Forest classification, K-Means clustering, GrabCut feature extraction, and HSV/LAB color analysis — 80% accuracy, evaluation 60% faster than expert review.',
    icon: Eye,
    accent: '#15803d',
    bg: '#dcfce7',
    tags: ['CNNs & transformers', 'Defect detection', '80% accuracy', '60% faster review'],
  },
  {
    theme: 'mlops',
    title: 'MLOps & model governance',
    desc: 'Version control for models and data, deployment pipelines, drift detection, monitoring dashboards, and audit trails mapped to your compliance needs. This is the difference between an AI feature and an AI liability.',
    icon: ShieldCheck,
    accent: '#c2410c',
    bg: '#ffedd5',
    tags: ['Drift detection', 'Model versioning', 'Audit trails', 'Deployment pipelines'],
  },
];

const GROWTH_IMAGE =
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80';

const PROOF_STATS = [
  { value: '80%', label: 'Vision accuracy' },
  { value: '60%', label: 'Faster evaluation' },
  { value: 'MLOps', label: 'Governed & monitored' },
];

const FEATURE_CARD_TITLE_STYLE = {
  fontFamily: 'Inter,sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
  letterSpacing: '0.02em',
  lineHeight: 1.25,
  maxWidth: '100%',
} as const;

const NO_ML_WORDS = [
  { text: 'Where' },
  { text: 'we\'d' },
  { text: 'tell' },
  { text: 'you' },
  { text: 'not' },
  { text: 'to' },
  { text: 'use' },
  { text: 'ML' },
];

const HONEST_WORDS = [{ text: 'Honest' }, { text: 'before' }, { text: 'you' }, { text: 'commit' }];

const NO_ML_TAGS = [
  'Deterministic rules',
  'Datasets too small',
  'Full explainability required',
];

const NO_ML_INTRO =
  'Deterministic rules that never change. Datasets too small to learn from. Decisions requiring full explainability under regulation where a model can\'t provide it.';

const PROOF_INTRO =
  'In production: a diamond-similarity engine combining Random Forest classification, K-Means clustering, GrabCut feature extraction, and HSV/LAB color analysis — 80% accuracy, evaluation 60% faster than expert review.';

const HONEST_INTRO =
  'We\'ve talked clients out of ML projects — a system that shouldn\'t exist is expensive at any accuracy.';

const FAQS = [
  {
    q: 'What data do we need to get started?',
    a: 'Less than you fear, more than a spreadsheet. The readiness audit answers it precisely: what you have, what\'s usable, what\'s missing, and whether the project should proceed.',
  },
  {
    q: 'How long does an ML project take?',
    a: 'A scoped model with deployment: 8–16 weeks. Platform-scale AI: several months. The audit phase (2–3 weeks) fixes the timeline before you commit.',
  },
  {
    q: 'Can you deploy on our infrastructure?',
    a: 'Yes — your cloud, your VPC, or on-premises where compliance demands it. Model and data residency stay under your control.',
  },
  {
    q: 'Do you work with OpenAI / open-source LLMs?',
    a: 'Both, chosen by the constraint: cost, latency, privacy, and quality trade off differently per use case. Private deployments of open models are increasingly the answer for sensitive data.',
  },
  {
    q: 'What does \'production-grade\' actually mean here?',
    a: 'Monitored accuracy, automated retraining triggers, rollback paths, load-tested inference, and documentation. If it can\'t survive your traffic and your auditors, it isn\'t production-grade.',
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

export default function AiSolutionsService() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'AI Solutions — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Production-grade AI and ML — prediction, generative AI, computer vision, and MLOps with governance that survives your traffic and your auditors.',
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
    script.id = 'ai-solutions-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('ai-solutions-faq-schema')?.remove();
    };
  }, []);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header className="webdev-hero relative border-b border-white/10 px-6">
        <ServiceHeroBackground image={HERO_IMAGES.aiSolutions} />

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
            Models are the easy half. Data pipelines, MLOps, and governance are why our AI ML development services still work a year after deployment. 
            </p>

            <Link
              to="/contact-us"
              className="nav-cta-btn nav-cta-btn--cta a3 mt-5 inline-flex bg-gradient-to-b from-amber-400 via-orange-500 to-orange-600"
              style={{ '--nav-cta-w': '14.75rem' } as React.CSSProperties}
            >
              <span className="nav-cta-btn__label">Book an AI Readiness Call</span>
              <span className="nav-cta-btn__icon">
                <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* What we build — neural bento grid */}
      <section className="ai-cap-section px-6 py-20" aria-labelledby="what-build">
        <div className="ai-cap-section__dots" aria-hidden="true" />
        <div className="max-w-[1080px] mx-auto w-full relative z-[1]">
          <header className="ai-cap-section__header sr text-center mb-10 lg:mb-12">
            <p className="ai-cap-section__eyebrow">Capabilities</p>
            <h2
              id="what-build"
              className="ai-cap-section__title text-[#1b1d1e] font-semibold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight"
            >
              What we build
            </h2>
            <p className="ai-cap-section__desc text-[#666] text-sm sm:text-base leading-relaxed max-w-[34rem] mx-auto mt-3">
              ML, generative AI, computer vision, and MLOps — wired into operations, not slideware.
            </p>
          </header>

          <div className="ai-cap-bento" role="list">
            <span className="ai-cap-hub sr-from-center ai-cap-enter-hub" aria-hidden="true">
              <span className="ai-cap-hub__core" />
              <span className="ai-cap-hub__ring" />
            </span>

            {BUILD_ITEMS.map((item, i) => {
              const Icon = item.icon;
              const enterFrom = i % 2 === 0 ? 'sr-from-left' : 'sr-from-right';
              return (
                <article
                  key={item.title}
                  role="listitem"
                  className={`ai-cap-node ai-cap-node--${item.theme} ${enterFrom} ai-cap-enter-${i + 1}`}
                  style={
                    {
                      '--cap-accent': item.accent,
                      '--cap-bg': item.bg,
                    } as React.CSSProperties
                  }
                >
                  <span className="ai-cap-node__border" aria-hidden="true" />
                  <span className="ai-cap-node__signals" aria-hidden="true">
                    <span /><span /><span /><span />
                  </span>

                  <div className="ai-cap-node__top">
                    <span className="ai-cap-node__icon" aria-hidden="true">
                      <span className="ai-cap-node__icon-ring" />
                      <Icon size={18} strokeWidth={2.25} />
                    </span>
                    <span className="ai-cap-node__index">{String(i + 1).padStart(2, '0')}</span>
                  </div>

                  <h3 className="ai-cap-node__title">{item.title}</h3>
                  <p className="ai-cap-node__desc">{item.desc}</p>

                  <div className="ai-cap-node__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="ai-cap-node__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Where we'd tell you not to use ML */}
      <section
        className="webdev-panel-section webdev-panel-section--stack"
        aria-labelledby="no-ml-heading"
      >
        <div className="max-w-[1200px] mx-auto w-full webdev-panel-stack">
          <article className="webdev-panel webdev-panel--img-left sr-from-center">
            <div className="webdev-panel__media">
              <img
                src={GROWTH_IMAGE}
                alt="AI and machine learning project scoping"
                loading="lazy"
              />
            </div>
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">When to say no</span>
              <ScrollTextReveal
                id="no-ml-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={NO_ML_WORDS}
              />
              <p className="webdev-panel__text">{NO_ML_INTRO}</p>
              <div className="webdev-compare-card__tags mt-2">
                {NO_ML_TAGS.map((tag, i) => (
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
            aria-labelledby="honest-heading"
          >
            <div className="webdev-panel__body">
              <span className="webdev-panel__eyebrow">Our stance</span>
              <ScrollTextReveal
                id="honest-heading"
                tag="h2"
                align="left"
                className="webdev-panel__title w-full"
                wordGap="0.2em"
                style={FEATURE_CARD_TITLE_STYLE}
                words={HONEST_WORDS}
              />
              <p className="webdev-panel__text">{HONEST_INTRO}</p>
            </div>
            <div className="webdev-panel__media">
              <img
                src={GROWTH_IMAGE}
                alt="Computer vision and production ML deployment"
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
