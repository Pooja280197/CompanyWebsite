import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import '../../styles/our-work-hub.css';

const HERO_LETTER_INTERVAL = 52;

const OWH_TITLE_LINE_1 = [{ text: 'Outcomes,' }];

const OWH_TITLE_LINE_2 = [{ text: 'documented.' }];

const OWH_LINE1_MS =
  OWH_TITLE_LINE_1.reduce((n, w) => n + w.text.length, 0) * HERO_LETTER_INTERVAL + 350;

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  industry: string;
  capability: string;
  clientType: string;
  problem: string;
  metric: string;
  metricLabel: string;
  image: string;
  color: string;
  featured?: boolean;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'smart-factory-iot',
    title: 'Smart Factory IoT Platform',
    slug: 'smart-factory-iot',
    industry: 'Manufacturing',
    capability: 'Cloud & Automation',
    clientType: 'Enterprise Manufacturer',
    problem:
      'Manual tracking across divisions, locations, and machines — no centralized view of operations.',
    metric: '42%',
    metricLabel: 'Reduction in operational costs',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    color: '#2563EB',
    featured: true,
  },
  {
    id: 'diamond-similarity-ai',
    title: 'Diamond Similarity AI',
    slug: 'diamond-similarity-ai',
    industry: 'Retail',
    capability: 'AI & Data',
    clientType: 'Luxury Retailer',
    problem: 'Manual diamond comparison by experts — inconsistent and unable to scale.',
    metric: '80%',
    metricLabel: 'Match Accuracy',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    color: '#0D9488',
  },
  {
    id: 'cloud-optimization',
    title: 'Cloud Optimization',
    slug: 'cloud-optimization',
    industry: 'Fintech',
    capability: 'Cloud & Automation',
    clientType: 'Fintech Platform',
    problem: 'Traffic spikes, performance bottlenecks, security exposure, and spiraling cloud costs.',
    metric: '99.99%',
    metricLabel: 'Uptime Achieved',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    color: '#059669',
  },
  {
    id: 'enterprise-data-pipeline',
    title: 'Real-Time Data Pipeline',
    slug: 'enterprise-data-pipeline',
    industry: 'Healthcare',
    capability: 'Custom Software',
    clientType: 'Healthcare Provider',
    problem: 'Slow ETL, inconsistent data across sources, no real-time visibility into business metrics.',
    metric: '3x',
    metricLabel: 'Faster Reporting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    color: '#EA580C',
  },
  {
    id: 'retail-ai-team',
    title: 'Retail AI Team',
    slug: 'retail-ai-team',
    industry: 'Retail',
    capability: 'AI & Data',
    clientType: 'Retail Chain',
    problem: 'Fragmented customer data, marketing campaigns firing blind — no unified intelligence layer.',
    metric: '20%',
    metricLabel: 'Sales Increase',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    color: '#2563EB',
  },
  {
    id: 'manufacturing-devops',
    title: 'Manufacturing DevOps',
    slug: 'manufacturing-devops',
    industry: 'Manufacturing',
    capability: 'DevOps',
    clientType: 'Industrial Manufacturer',
    problem:
      'CI/CD delays averaging 45 minutes, security risks in pipeline, critical product deadline looming.',
    metric: '25%',
    metricLabel: 'Faster Deployments',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    color: '#0891B2',
  },
  {
    id: 'healthcare-patient-management',
    title: 'Healthcare Platform Modernization',
    slug: 'healthcare-patient-management',
    industry: 'Healthcare',
    capability: 'Custom Software',
    clientType: 'Hospital Network',
    problem:
      'Fragmented patient data across 6 legacy systems, outdated management software causing care delays.',
    metric: '30%',
    metricLabel: 'Faster Care Delivery',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    color: '#2563EB',
  },
];

const PROCESS_STEPS = [
  {
    title: 'Discovery',
    desc: 'We sit with the problem, the constraints, and what “done” actually means.',
  },
  {
    title: 'Strategy',
    desc: 'Scope, architecture, and delivery plan — clear before a line of product work.',
  },
  {
    title: 'Development',
    desc: 'Build in visible increments with demos, not black-box wait-and-see cycles.',
  },
  {
    title: 'Launch',
    desc: 'Harden, ship, and hand over with runbooks your team can actually use.',
  },
  {
    title: 'Optimization',
    desc: 'Measure outcomes, tune what matters, and stay for the next iteration.',
  },
] as const;

function unique(key: keyof CaseStudy) {
  return [...new Set(CASE_STUDIES.map((c) => String(c[key])))];
}

export default function OurWorkHub() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [activeCapability, setActiveCapability] = useState<string | null>(null);
  const [titleLine2Ready, setTitleLine2Ready] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  const industries = useMemo(() => unique('industry'), []);
  const capabilities = useMemo(() => unique('capability'), []);

  const filtered = useMemo(
    () =>
      CASE_STUDIES.filter((c) => {
        const byIndustry = !activeIndustry || c.industry === activeIndustry;
        const byCapability = !activeCapability || c.capability === activeCapability;
        return byIndustry && byCapability;
      }),
    [activeIndustry, activeCapability],
  );

  const featured = filtered.find((c) => c.featured) ?? filtered[0];
  const others = filtered.filter((c) => c.id !== featured?.id);
  const hasFilters = Boolean(activeIndustry || activeCapability);

  useEffect(() => {
    document.title = 'Our Work — NSS';
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setTitleLine2Ready(true), OWH_LINE1_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const nodes = root.querySelectorAll<HTMLElement>('.owh__reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [filtered.length]);

  return (
    <div className="owh" ref={pageRef}>
      <section className="owh__hero" aria-labelledby="owh-hero-heading">
        <div className="owh__shell">
          <h1 id="owh-hero-heading" className="owh__title">
            <span className="owh__title-line">
              <ScrollTextReveal
                tag="span"
                align="center"
                animate="words"
                textColor="#0f172a"
                letterInterval={HERO_LETTER_INTERVAL}
                letterDurationMs={560}
                startDelay={80}
                style={{ display: 'block', width: 'fit-content', maxWidth: '100%', marginInline: 'auto' }}
                words={OWH_TITLE_LINE_1}
              />
            </span>
            <span className="owh__title-line owh__title-line--accent">
              {titleLine2Ready ? (
                <ScrollTextReveal
                  key="owh-title-line-2"
                  tag="span"
                  align="center"
                  animate="words"
                  textColor="#2563eb"
                  letterInterval={HERO_LETTER_INTERVAL}
                  letterDurationMs={560}
                  startDelay={0}
                  style={{ display: 'block', width: 'fit-content', maxWidth: '100%', marginInline: 'auto' }}
                  words={OWH_TITLE_LINE_2}
                />
              ) : (
                <span className="owh__title-reserve" aria-hidden="true">
                  documented.
                </span>
              )}
            </span>
          </h1>

          <p
            className="owh__lede owh__fade-in"
            style={{ animationDelay: `${OWH_LINE1_MS + 700}ms` }}
          >
            Seven engagements, real numbers, and the same delivery standard we run for clients —
            without the adjective treadmill.
          </p>

          <div
            className="owh__stats owh__fade-in"
            aria-label="Highlights"
            style={{ animationDelay: `${OWH_LINE1_MS + 880}ms` }}
          >
            <div className="owh__stat">
              <strong>7</strong>
              <span>Case studies</span>
            </div>
            <div className="owh__stat">
              <strong>95%</strong>
              <span>Client retention</span>
            </div>
            <div className="owh__stat">
              <strong>500+</strong>
              <span>Projects delivered</span>
            </div>
          </div>
        </div>
      </section>

      <div className="owh__filters">
        <div className="owh__filters-inner" role="group" aria-label="Filter case studies">
          {industries.map((industry) => (
            <button
              key={industry}
              type="button"
              className={`owh__filter${activeIndustry === industry ? ' is-active' : ''}`}
              onClick={() => setActiveIndustry(activeIndustry === industry ? null : industry)}
            >
              {industry}
            </button>
          ))}
          {capabilities.map((cap) => (
            <button
              key={cap}
              type="button"
              className={`owh__filter${activeCapability === cap ? ' is-active' : ''}`}
              onClick={() => setActiveCapability(activeCapability === cap ? null : cap)}
            >
              {cap}
            </button>
          ))}
          {hasFilters && (
            <button
              type="button"
              className="owh__filter-clear"
              onClick={() => {
                setActiveIndustry(null);
                setActiveCapability(null);
              }}
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {featured && (
        <section className="owh__section">
          <div className="owh__shell">
            <div className="owh__section-head">
              <h2 className="owh__section-title">Featured engagement</h2>
            </div>

            <Link
              to={`/our-work/${featured.slug}`}
              className="owh__featured owh__reveal"
              style={{ ['--accent' as string]: featured.color }}
            >
              <div className="owh__featured-media">
                <img src={featured.image} alt="" loading="lazy" />
                <div className="owh__featured-pills">
                  <span className="owh__pill">{featured.industry}</span>
                  <span className="owh__pill">{featured.capability}</span>
                </div>
              </div>
              <div className="owh__featured-body">
                <div className="owh__metric">{featured.metric}</div>
                <div className="owh__metric-label">{featured.metricLabel}</div>
                <p className="owh__client">{featured.clientType}</p>
                <h3 className="owh__card-title">{featured.title}</h3>
                <p className="owh__card-desc">{featured.problem}</p>
                <span className="owh__cta-link">
                  Read case study
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="owh__section owh__section--grid">
        <div className="owh__shell">
          <div className="owh__section-head">
            <h2 className="owh__section-title">All case studies</h2>
            <span className="owh__section-meta">
              {filtered.length} project{filtered.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="owh__grid">
            {others.length === 0 ? (
              <p className="owh__empty">No case studies match these filters.</p>
            ) : (
              others.map((study, i) => (
                <Link
                  key={study.id}
                  to={`/our-work/${study.slug}`}
                  className="owh__card owh__reveal"
                  style={{
                    ['--accent' as string]: study.color,
                    transitionDelay: `${i * 0.06}s`,
                  }}
                >
                  <div className="owh__card-media">
                    <img src={study.image} alt="" loading="lazy" />
                  </div>
                  <div className="owh__card-body">
                    <div className="owh__card-tags">
                      <span
                        className="owh__pill owh__pill--accent"
                        style={{ ['--pill' as string]: study.color }}
                      >
                        {study.industry}
                      </span>
                      <span className="owh__pill">{study.capability}</span>
                    </div>
                    <h3 className="owh__card-title">{study.title}</h3>
                    <p className="owh__card-desc">{study.problem}</p>
                    <div className="owh__card-foot">
                      <div>
                        <div className="owh__card-metric">{study.metric}</div>
                        <div className="owh__card-metric-label">{study.metricLabel}</div>
                      </div>
                      <span className="owh__card-arrow" aria-hidden="true">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="owh__process">
        <div className="owh__shell">
          <div className="owh__process-head owh__reveal">
            <p className="owh__eyebrow" style={{ justifyContent: 'center' }}>
              <span className="owh__eyebrow-mark" aria-hidden="true" />
              How engagements run
            </p>
            <h2>
              Built through long-term <em>partnerships</em>
            </h2>
            <p className="owh__process-lede">
              One connected path from first conversation to lasting outcomes — not a handoff maze.
            </p>
          </div>

          <ol className="owh__timeline owh__reveal">
            {PROCESS_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="owh__timeline-item"
                style={{ ['--step-delay' as string]: `${0.08 + i * 0.12}s` }}
              >
                <div className="owh__timeline-rail" aria-hidden="true">
                  <span className="owh__timeline-dot" />
                  {i < PROCESS_STEPS.length - 1 && <span className="owh__timeline-line" />}
                </div>
                <div className="owh__timeline-card">
                  <span className="owh__timeline-num">STEP {String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* <section className="owh__cta">
        <div className="owh__cta-panel owh__reveal">
          <p className="owh__eyebrow" style={{ justifyContent: 'center' }}>
            <span className="owh__eyebrow-mark" aria-hidden="true" />
            Next engagement
          </p>
          <h2>
            Ready for your next <em>documented outcome?</em>
          </h2>
          <p>
            Tell us the problem. We&apos;ll tell you whether we&apos;re the right team — before any
            pitch deck.
          </p>
          <div className="owh__cta-actions">
            <Link to="/contact-us" className="owh__btn owh__btn--primary">
              Start a conversation
              <ArrowRight size={17} />
            </Link>
            <Link to="/about-us" className="owh__btn owh__btn--ghost">
              About NSS
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
