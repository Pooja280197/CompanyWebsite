// AiData.tsx
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Brain,
  Check,
  ChevronDown,
  Database,
  GitBranch,
  Network,
  PieChart,
  Shield,
  Sparkles,
  Zap,
  Cloud,
  Eye,
  Activity,
  TrendingUp,

} from 'lucide-react';
import { ScrollTextReveal, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { HERO_IMAGES } from '../../data/heroImages';
import { SmoothHorizontalScroll } from '../SmoothHorizontalScroll';

const HERO_TAGLINE = `AI that survives contact with production`;

const HERO_DESC = `Proofs-of-concept are easy. We build the machine learning, generative AI, and data infrastructure that still works at scale, under governance, a year later.`;

const HERO_TITLE_LINES = [
  {
    words: [{ text: 'AI' }, { text: '&' }, { text: 'DATA' }],
    letterCount: 4,
    inline: true,
    startDelay: 0,
  },
];

const WALL_ITEMS = [
  'Data turns out to be scattered across five systems',
  'Nobody owns model quality',
  'Costs balloon at real request volumes',
  'Most AI pilots never reach production — not because the models were bad, but because the engineering around them was never planned',
];

const DELIVERABLES = [
  {
    icon: Brain,
    title: 'Machine Learning that runs the business',
    desc: 'Churn prediction, credit and fraud risk, dynamic pricing, demand forecasting. Deployed into daily operations with monitoring and retraining schedules, so accuracy doesn\'t quietly rot.',
    link: '/ai-ml-development-services',
    accent: '#7c3aed',
    bg: '#ede9fe',
    bgMid: '#ddd6fe',
  },
  {
    icon: Bot,
    title: 'Generative AI & NLP',
    desc: 'Document intelligence, semantic search, RAG pipelines over your private data, and AI assistants that answer from your business context instead of hallucinating around it.',
    link: '/ai-ml-development-services',
    accent: '#2563eb',
    bg: '#dbeafe',
    bgMid: '#bfdbfe',
  },
  {
    icon: Eye,
    title: 'Computer Vision & Deep Learning',
    desc: 'Classification, similarity, and defect detection with CNNs and transformer models. Our diamond-similarity engine for a retailer reached 80% accuracy and cut evaluation time by 60%.',
    link: '/ai-ml-development-services',
    accent: '#059669',
    bg: '#d1fae5',
    bgMid: '#a7f3d0',
  },
  {
    icon: PieChart,
    title: 'Data Science & Analytics',
    desc: 'The truth layer: ETL pipelines, warehouses, data lakes, real-time analytics, and Power BI dashboards. One enterprise cut ETL processing time by 50%, reached 99.9% data availability, and made reporting 3x faster.',
    link: '/data-science-and-analytics',
    accent: '#d97706',
    bg: '#fef3c7',
    bgMid: '#fde68a',
  },
  {
    icon: Network,
    title: 'IoT & Edge Intelligence',
    desc: 'Connected devices feeding real-time platforms, from factory-floor sensors to predictive maintenance. The foundation of our smart-factory work.',
    link: '/iot-solutions',
    accent: '#dc2626',
    bg: '#fee2e2',
    bgMid: '#fecaca',
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    label: 'Data readiness audit',
    desc: 'Where your data lives, what shape it\'s in, what\'s missing.',
    icon: Database,
    accent: '#2563eb',
    bg: '#eff6ff',
    bgMid: '#dbeafe',
  },
  {
    num: '02',
    label: 'Business-case scoping',
    desc: 'The model earns its keep or doesn\'t get built.',
    icon: TrendingUp,
    accent: '#9333ea',
    bg: '#faf5ff',
    bgMid: '#f3e8ff',
  },
  {
    num: '03',
    label: 'Pipeline & architecture',
    desc: 'Designed before model training — infrastructure first.',
    icon: GitBranch,
    accent: '#db2777',
    bg: '#fdf2f8',
    bgMid: '#fce7f3',
  },
  {
    num: '04',
    label: 'Iterative modeling',
    desc: 'With measurable baselines and clear success criteria.',
    icon: Activity,
    accent: '#d97706',
    bg: '#fffbeb',
    bgMid: '#fef3c7',
  },
  {
    num: '05',
    label: 'Deployment with MLOps',
    desc: 'Versioning, monitoring, drift detection, retraining schedules.',
    icon: Cloud,
    accent: '#0891b2',
    bg: '#ecfeff',
    bgMid: '#cffafe',
  },
  {
    num: '06',
    label: 'Governance',
    desc: 'Access, audit trails, and compliance mapped to your industry.',
    icon: Shield,
    accent: '#059669',
    bg: '#ecfdf5',
    bgMid: '#d1fae5',
  },
];

const FAQS = [
  {
    q: 'We have data everywhere and no strategy. Where do we start?',
    a: 'With a data readiness audit, not a model. Two to three weeks: we map sources, quality, and gaps, and hand you a prioritized roadmap with honest effort estimates. Strategy first is cheaper than rescue later.',
  },
  {
    q: 'How much does an AI project cost?',
    a: 'Documented AI engagements on our books run from focused five-figure builds to $150,000+ platforms. The audit phase fixes the number before you commit to the build.',
  },
  {
    q: 'Can generative AI work with our private documents securely?',
    a: 'Yes — that\'s what RAG (retrieval-augmented generation) architectures are for. Your documents stay in your controlled environment; the model retrieves and cites rather than absorbing your data into training.',
  },
  {
    q: 'Do you also provide AI engineers for our in-house team?',
    a: 'Yes. A retail client took five of our AI engineers into their team and drove a 20% sales increase through predictive segmentation. Details: /staff-augmentation.',
  },
  {
    q: 'Which frameworks do you use?',
    a: 'TensorFlow, PyTorch, and Scikit-learn for modeling; Python across the stack; Kafka and Spark for data movement; Power BI for the last mile. The stack serves the problem, never the reverse.',
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

export default function AiData() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'AI & Data — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'AI that survives contact with production. Machine learning, generative AI, and data infrastructure that works at scale, under governance, a year later.',
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
    script.id = 'ai-data-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('ai-data-faq-schema')?.remove();
    };
  }, []);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header
        className="webdev-hero relative border-b border-white/10 px-6"
        style={{ height: '100svh', maxHeight: '100svh' }}
      >
        <ServiceHeroBackground image={HERO_IMAGES.aiAndData} />

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
              style={{ '--nav-cta-w': '18.5rem' } as React.CSSProperties}
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

      {/* The wall every AI project hits */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="wall-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr w-full max-w-[920px] mx-auto px-2">
            <ScrollTextReveal
              id="wall-heading"
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
                { text: 'The' },
                { text: 'wall' },
                { text: 'every' },
                { text: 'AI' },
                { text: 'project' },
                { text: 'hits' },
              ]}
            />

            <p className="sr sr-d2 text-[#555] text-base sm:text-lg leading-[1.85] mt-8 max-w-[48rem] mx-auto text-center">
              Somewhere between the impressive demo and the production rollout, most AI initiatives stall.
              Industry surveys keep finding that the majority of AI pilots never reach production — not because
              the models were bad, but because the engineering around them was never planned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WALL_ITEMS.map((item, i) => (
              <div
                key={item}
                className="sr-from-left p-5 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-blue-500 mt-0.5" aria-hidden="true">
                    <Zap size={18} />
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-white border border-blue-100 text-center">
            <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <strong>That's why our AI and data engineering services are one practice, not two departments.</strong>{' '}
              The pipeline, the governance, and the deployment path get designed on day one — before a single model is trained.
            </p>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="ai-deliver py-20 px-6" aria-labelledby="deliver-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr">
            <span className="ai-deliver__eyebrow">Capabilities</span>
            <ScrollTextReveal
              id="deliver-heading"
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
                { text: 'deliver' },
              ]}
            />
            <p className="ai-deliver__subtitle">
              End-to-end AI and data solutions that survive production.
            </p>
          </div>

          <div className="ai-deliver__grid">
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

      {/* Production-first method */}
      <section className="method-rail py-20" aria-labelledby="method-heading">
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <div className="text-center sr">
            <span className="method-rail__eyebrow">How we work</span>
            <ScrollTextReveal
              id="method-heading"
              tag="h2"
              align="center"
              className="method-rail__title w-full mt-3"
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
                { text: 'Our' },
                { text: 'production-first' },
                { text: 'method' },
              ]}
            />
            <p className="method-rail__subtitle">
              Pipeline, governance, and deployment designed before training begins.
            </p>
            <p className="method-rail__hint" aria-hidden="true">
              Scroll with mouse wheel or drag →
            </p>
          </div>
        </div>

        <SmoothHorizontalScroll ariaLabel="Production-first method steps">
          <div className="method-rail__row">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              const cardStyle = {
                '--method-accent': step.accent,
                '--method-bg': step.bg,
                '--method-bg-mid': step.bgMid,
                transitionDelay: `${i * 0.12}s`,
              } as React.CSSProperties;

              return (
                <article
                  key={step.num}
                  className="method-rail__card sr-from-right"
                  style={cardStyle}
                >
                  <span className="method-rail__watermark" aria-hidden="true">{step.num}</span>
                  {i < PROCESS_STEPS.length - 1 && (
                    <span className="method-rail__pipe" aria-hidden="true" />
                  )}

                  <div className="method-rail__icon-ring" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.65} />
                  </div>

                  <div className="method-rail__body">
                    <h3 className="method-rail__card-title">{step.label}</h3>
                    <p className="method-rail__card-desc">{step.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </SmoothHorizontalScroll>
      </section>

      {/* An honest note on AI */}
      <section className="ai-honest-note py-20 px-6 bg-gray-50" aria-labelledby="honest-heading">
        <div className="max-w-[900px] mx-auto w-full">
          <div className="ai-honest-note__card sr">
            <div className="ai-honest-note__orb ai-honest-note__orb--left" aria-hidden="true" />
            <div className="ai-honest-note__orb ai-honest-note__orb--right" aria-hidden="true" />
            <div className="flex items-start gap-4 md:gap-5 relative z-10">
              <div className="ai-honest-note__icon flex-shrink-0" aria-hidden="true">
                <Sparkles size={24} />
              </div>
              <div>
                <span className="ai-honest-note__eyebrow">Our stance</span>
                <ScrollTextReveal
                  id="honest-heading"
                  tag="h2"
                  align="left"
                  className="ai-honest-note__title w-full mt-2"
                  wordGap="0.2em"
                  style={{
                    fontFamily: 'Inter,sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    letterSpacing: '0.02em',
                    lineHeight: 1.25,
                    maxWidth: '100%',
                  }}
                  words={[
                    { text: 'An' },
                    { text: 'honest' },
                    { text: 'note' },
                    { text: 'on' },
                    { text: 'AI' },
                  ]}
                  scrollFromColor="#f8fafc"
                  scrollToColor="#e2e8f0"
                />
                <p className="ai-honest-note__text">
                  Not every problem needs machine learning. If a rules engine or a well-built report solves it,
                  we'll tell you — an AI project that shouldn't exist is the most expensive kind. Clients tend to
                  remember that conversation; it's a large part of why <strong>95% of them stay</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 cta-bg border-t border-gray-100">
        <div className="max-w-[900px] mx-auto w-full text-center">
          <div className="sr">
            <h2 className="font-serif-italic text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              Ready to build AI that survives production?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Start with an AI Readiness Call. We'll map your data, identify the right opportunities, and give you an honest roadmap.
            </p>
            <Link
              to="/#contact"
              className="pillar-cta-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Book Your AI Readiness Call
              <ArrowRight size={18} />
            </Link>
            <p className="text-sm text-gray-500 mt-4">No pressure. Just clarity on what's possible.</p>
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
              <Check size={14} className="text-green-500" />
              TensorFlow Certified
            </span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-green-500" />
              PyTorch Certified
            </span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-green-500" />
              AWS ML Certified
            </span>
          </div>
          <Link
            to="/#contact"
            className="pillar-cta-btn inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            Book an AI Readiness Call
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}