import { useEffect, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, ChevronLeft, ChevronRight, Database, Eye } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';

const TITLE_WORDS = [
  { text: 'Most' },
  { text: 'AI' },
  { text: 'projects' },
  { text: 'die' },
  { text: 'between' },
  { text: 'the' },
  { text: 'demo' },
  { text: 'and' },
  { text: 'production.' },
  { text: 'Ours' },
  { text: "don't." },
] as const;

type Pillar = {
  num: string;
  icon: LucideIcon;
  title: string;
  text: string;
  accent: string;
  metrics?: ReadonlyArray<{ value: string; label: string }>;
};

const PILLARS: Pillar[] = [
  {
    num: '01',
    icon: Brain,
    title: 'Machine learning in daily decisions',
    text: 'Churn prediction, credit risk, dynamic pricing, demand forecasting. Models that plug into operations, not slide decks.',
    accent: '#7dd3fc',
  },
  {
    num: '02',
    icon: Bot,
    title: 'Generative AI & NLP',
    text: 'Document intelligence, semantic search, RAG pipelines, and assistants trained on your business context.',
    accent: '#c4b5fd',
  },
  {
    num: '03',
    icon: Eye,
    title: 'Computer vision',
    text: 'One of our similarity engines evaluates diamonds at 80% accuracy, 60% faster than expert review.',
    accent: '#6ee7b7',
    metrics: [
      { value: '80%', label: 'Accuracy' },
      { value: '60%', label: 'Faster' },
    ],
  },
  {
    num: '04',
    icon: Database,
    title: 'Data engineering underneath it all',
    text: "Pipelines and warehouses that cut one client's ETL time in half and made reporting 3x faster.",
    accent: '#fdba74',
    metrics: [
      { value: '50%', label: 'Faster ETL' },
      { value: '3×', label: 'Reporting' },
    ],
  },
];

/** Real slides + clone of first for seamless forward loop (4 → 1). */
const LOOP_SLIDES: Array<Pillar & { key: string }> = [
  ...PILLARS.map((p) => ({ ...p, key: p.num })),
  { ...PILLARS[0], key: `${PILLARS[0].num}-loop` },
];

const LAST_REAL = PILLARS.length - 1;
const CLONE_INDEX = PILLARS.length;

export default function HomeAiProduction() {
  const [active, setActive] = useState(0);
  const [instant, setInstant] = useState(false);

  const realIndex = active === CLONE_INDEX ? 0 : active;

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => {
        if (prev >= CLONE_INDEX) return prev;
        return prev + 1;
      });
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const handleTransitionEnd = () => {
    if (active !== CLONE_INDEX) return;
    setInstant(true);
    setActive(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setInstant(false));
    });
  };

  const goPrev = () => {
    if (active === 0) {
      setInstant(true);
      setActive(CLONE_INDEX);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setInstant(false);
          setActive(LAST_REAL);
        });
      });
      return;
    }
    setActive((prev) => prev - 1);
  };

  const goNext = () => {
    if (active >= CLONE_INDEX) return;
    setActive((prev) => prev + 1);
  };

  return (
    <section className="ai-prod" aria-labelledby="ai-prod-heading">
      <div className="ai-prod__scan" aria-hidden="true" />
      <div className="ai-prod__noise" aria-hidden="true" />

      <div className="ai-prod__inner mx-auto w-full max-w-[1180px] px-6 py-16 sm:py-20">
        <div className="ai-prod__head text-center">
          <h2 id="ai-prod-heading" className="ai-prod__title-wrap sr">
            <ScrollTextReveal
              tag="span"
              align="center"
              className="ai-prod__title w-full"
              wordGap="0.14em"
              scrollFromColor="#64748b"
              scrollToColor="#ffffff"
              style={{
                display: 'block',
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(1.85rem, 4.2vw, 3rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                maxWidth: '100%',
              }}
              words={[...TITLE_WORDS]}
            />
          </h2>

          <p className="ai-prod__lede sr sr-d2 mx-auto">
            The pattern is familiar: a promising proof-of-concept, an excited stakeholder meeting
            — then months of stalling because nobody planned for messy data, governance, or what
            happens at 10,000 requests a day. We engineer past that wall:
          </p>
        </div>

        <div className="ai-prod__slider sr sr-d3">
          <div className="ai-prod__frame">
            <button
              type="button"
              className="ai-prod__nav ai-prod__nav--left"
              onClick={goPrev}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="ai-prod__viewport">
              <div
                className={`ai-prod__track${instant ? ' ai-prod__track--instant' : ''}`}
                style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {LOOP_SLIDES.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <article
                      key={pillar.key}
                      className="ai-prod__slide"
                      style={{ '--ai-accent': pillar.accent } as CSSProperties}
                      aria-hidden={realIndex !== (index === CLONE_INDEX ? 0 : index)}
                    >
                      <div className="ai-prod__panel">
                        <div className="ai-prod__panel-glow" aria-hidden="true" />
                        <div className="ai-prod__panel-mark" aria-hidden="true">
                          {pillar.num}
                        </div>

                        <div className="ai-prod__panel-main">
                          <span className="ai-prod__panel-icon" aria-hidden="true">
                            <Icon size={26} strokeWidth={1.75} />
                          </span>
                          <h3 className="ai-prod__panel-title">{pillar.title}</h3>
                          <p className="ai-prod__panel-text">{pillar.text}</p>
                        </div>

                        <div className="ai-prod__panel-side">
                          {pillar.metrics ? (
                            <div className="ai-prod__panel-stats">
                              {pillar.metrics.map((m) => (
                                <div key={m.label} className="ai-prod__stat">
                                  <strong>{m.value}</strong>
                                  <span>{m.label}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="ai-prod__panel-note">
                              Built for operations —
                              <br />
                              not the pitch deck.
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              className="ai-prod__nav ai-prod__nav--right"
              onClick={goNext}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="ai-prod__dots" role="tablist" aria-label="Slides">
            {PILLARS.map((item, index) => (
              <button
                key={item.num}
                type="button"
                className={`ai-prod__dot${realIndex === index ? ' ai-prod__dot--active' : ''}`}
                aria-label={`Show ${item.title}`}
                aria-current={realIndex === index}
                onClick={() => setActive(index)}
              />
            ))}
          </div>

          <div className="ai-prod__cta-wrap">
            <Link to="/ai-data" className="ai-prod__cta">
              Explore AI &amp; Data
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
