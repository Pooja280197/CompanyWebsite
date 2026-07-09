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
  BarChart3,
  Cloud,
  Eye,
  Activity,
  TrendingUp,
  Server,

} from 'lucide-react';
import { ScrollTextReveal, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { HERO_IMAGES } from '../../data/heroImages';

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
  },
  {
    icon: Bot,
    title: 'Generative AI & NLP',
    desc: 'Document intelligence, semantic search, RAG pipelines over your private data, and AI assistants that answer from your business context instead of hallucinating around it.',
    link: '/ai-ml-development-services',
    accent: '#2563eb',
    bg: '#dbeafe',
  },
  {
    icon: Eye,
    title: 'Computer Vision & Deep Learning',
    desc: 'Classification, similarity, and defect detection with CNNs and transformer models. Our diamond-similarity engine for a retailer reached 80% accuracy and cut evaluation time by 60%.',
    link: '/ai-ml-development-services',
    accent: '#059669',
    bg: '#d1fae5',
  },
  {
    icon: PieChart,
    title: 'Data Science & Analytics',
    desc: 'The truth layer: ETL pipelines, warehouses, data lakes, real-time analytics, and Power BI dashboards. One enterprise cut ETL processing time by 50%, reached 99.9% data availability, and made reporting 3x faster.',
    link: '/data-science-and-analytics',
    accent: '#d97706',
    bg: '#fef3c7',
  },
  {
    icon: Network,
    title: 'IoT & Edge Intelligence',
    desc: 'Connected devices feeding real-time platforms, from factory-floor sensors to predictive maintenance. The foundation of our smart-factory work.',
    link: '/iot-solutions',
    accent: '#dc2626',
    bg: '#fee2e2',
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    label: 'Data readiness audit',
    desc: 'Where your data lives, what shape it\'s in, what\'s missing.',
    icon: Database,
  },
  {
    num: '02',
    label: 'Business-case scoping',
    desc: 'The model earns its keep or doesn\'t get built.',
    icon: TrendingUp,
  },
  {
    num: '03',
    label: 'Pipeline & architecture',
    desc: 'Designed before model training — infrastructure first.',
    icon: GitBranch,
  },
  {
    num: '04',
    label: 'Iterative modeling',
    desc: 'With measurable baselines and clear success criteria.',
    icon: Activity,
  },
  {
    num: '05',
    label: 'Deployment with MLOps',
    desc: 'Versioning, monitoring, drift detection, retraining schedules.',
    icon: Cloud,
  },
  {
    num: '06',
    label: 'Governance',
    desc: 'Access, audit trails, and compliance mapped to your industry.',
    icon: Shield,
  },
];

const FRAMEWORKS = [
  { name: 'TensorFlow', icon: Brain, color: '#f97316' },
  { name: 'PyTorch', icon: Brain, color: '#e74c3c' },
  { name: 'Scikit-learn', icon: Brain, color: '#2ecc71' },
  { name: 'Kafka', icon: Server, color: '#3498db' },
  { name: 'Spark', icon: Zap, color: '#e67e22' },
  { name: 'Power BI', icon: BarChart3, color: '#f1c40f' },
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
                className={`sr-from-left p-5 rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-purple-500 mt-0.5" aria-hidden="true">
                    <Zap size={18} />
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-purple-50 via-violet-50 to-white border border-purple-100 text-center">
            <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <strong>That's why our AI and data engineering services are one practice, not two departments.</strong>{' '}
              The pipeline, the governance, and the deployment path get designed on day one — before a single model is trained.
            </p>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="deliver-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
            <ScrollTextReveal
              id="deliver-heading"
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
                { text: 'deliver' },
              ]}
            />
            <p className="text-[#555] text-base leading-[1.7] mt-4 max-w-[40rem] mx-auto">
              End-to-end AI and data solutions that survive production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors group"
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

      {/* Production-first method */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_50%_0%,_rgba(167,139,250,0.2)_0%,_transparent_60%)]" />
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
                { text: 'Our' },
                { text: 'production-first' },
                { text: 'method' },
              ]}
              textColor="#ffffff"
            />
            <p className="text-purple-200 text-base leading-[1.7] mt-4 max-w-[40rem] mx-auto">
              Pipeline, governance, and deployment designed before training begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="sr-from-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-bold text-purple-300 tabular-nums">{step.num}</span>
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1">{step.label}</h4>
                  <p className="text-sm text-purple-200/80 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* An honest note on AI */}
      <section className="py-20 px-6" aria-labelledby="honest-heading">
        <div className="max-w-[900px] mx-auto w-full">
          <div className="sr p-8 md:p-12 rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-white border border-amber-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                <Sparkles size={24} />
              </div>
              <div>
                <ScrollTextReveal
                  id="honest-heading"
                  tag="h2"
                  align="left"
                  className="w-full"
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
                  textColor="#92400e"
                />
                <p className="text-amber-800/80 text-base leading-[1.8] mt-3 max-w-2xl">
                  Not every problem needs machine learning. If a rules engine or a well-built report solves it,
                  we'll tell you — an AI project that shouldn't exist is the most expensive kind. Clients tend to
                  remember that conversation; it's a large part of why <strong className="text-amber-900">95% of them stay</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-20 px-6 bg-gray-50" aria-labelledby="frameworks-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
            <ScrollTextReveal
              id="frameworks-heading"
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
                { text: 'The' },
                { text: 'stack' },
                { text: 'serves' },
                { text: 'the' },
                { text: 'problem' },
              ]}
            />
            <p className="text-[#555] text-base leading-[1.7] mt-4 max-w-[40rem] mx-auto">
              Never the reverse. We use the right tools for each challenge.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {FRAMEWORKS.map((framework, i) => {
              const Icon = framework.icon;
              return (
                <div
                  key={framework.name}
                  className="sr-from-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: `${framework.color}15`, color: framework.color }}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{framework.name}</span>
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