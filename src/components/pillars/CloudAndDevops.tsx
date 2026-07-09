// CloudDevOps.tsx
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Cloud,
  CloudCog,
  Shield,
  GitBranch,
  Layers,
  TrendingDown,
  CloudRain,
  CloudSnow,
  CloudSun,
} from 'lucide-react';
import { ScrollTextReveal, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { ServiceProofSection } from '../service-pages/ServiceProofSection';
import { HERO_IMAGES } from '../../data/heroImages';

const HERO_TAGLINE = `Infrastructure that scales. Releases that don't scare anyone.`;

const HERO_DESC = `Cloud and DevOps engineering for teams tired of surprise bills, fragile deployments, and 2 a.m. incidents.`;

const HERO_TITLE_LINES = [
  {
    words: [{ text: 'CLOUD' }, { text: '&' }, { text: 'DEVOPS' }],
    letterCount: 6,
    inline: true,
    startDelay: 0,
  },
];

const TAX_ITEMS = [
  'The cloud bill creeps 8% a quarter',
  'Deployments need a Saturday and a prayer',
  'One traffic spike and the app folds',
  'None of it is a crisis — until the month it is',
];

const DELIVERABLES = [
  {
    icon: CloudCog,
    title: 'Cloud Migration',
    desc: 'Legacy to AWS, Azure, or GCP with tailored migration plans and a zero-downtime approach. Custom strategy per workload; encryption and compliance protocols built in.',
    link: '/cloud-solutions',
    accent: '#2563eb',
    bg: '#dbeafe',
    bgMid: '#bfdbfe',
  },
  {
    icon: TrendingDown,
    title: 'Cloud Cost Optimization',
    desc: 'Right-sizing, reserved instances and savings plans, automated cost management, multi-cloud comparison, real-time monitoring. One enterprise client cut cloud spend 35% while improving performance 40%.',
    link: '/cloud-solutions',
    accent: '#059669',
    bg: '#d1fae5',
    bgMid: '#a7f3d0',
  },
  {
    icon: GitBranch,
    title: 'DevOps & CI/CD',
    desc: 'Automated pipelines with Docker, Kubernetes, Jenkins, and Terraform. For a manufacturing client, two DevOps specialists cut deployment times by 25% and closed critical security gaps in the pipeline.',
    link: '/devops-development',
    accent: '#7c3aed',
    bg: '#ede9fe',
    bgMid: '#ddd6fe',
  },
  {
    icon: Layers,
    title: 'Scalable & Hybrid Architecture',
    desc: 'Public, private, and hybrid designs for teams that need elasticity and strict data compliance in the same system. Pay for what you use; scale when demand says so.',
    link: '/cloud-solutions',
    accent: '#d97706',
    bg: '#fef3c7',
    bgMid: '#fde68a',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    desc: 'Monitoring, patching, performance tuning, and a team that answers before your users notice. Launch day is the beginning.',
    link: '/software-maintenance-support',
    accent: '#dc2626',
    bg: '#fee2e2',
    bgMid: '#fecaca',
  },
  {
    icon: Cloud,
    title: 'Salesforce Development',
    desc: 'Implementation and customization your sales team will actually adopt, integrated with the rest of your stack.',
    link: '/salesforce-development',
    accent: '#0891b2',
    bg: '#cffafe',
    bgMid: '#a5f3fc',
  },
];

const PROOF_STATS = [
  { value: '99.99%', label: 'Uptime at peak' },
  { value: '35%', label: 'Lower cloud costs' },
  { value: '40%', label: 'Faster performance' },
];

const PROOF_INTRO = (
  <>
    A high-traffic enterprise application faced traffic spikes, slow queries, DDoS exposure,
    and an unoptimized bill. We rebuilt the foundation — load balancing with auto-scaling,
    database tuning (<strong>+30% query speed</strong>), zero-trust security hardening, and
    automated CI/CD. <strong>Zero-downtime deployments</strong> since go-live.
  </>
);

const CERTIFICATIONS = [
  {
    name: 'Azure',
    icon: CloudSnow,
    color: '#0078d4',
    bg: '#dbeafe',
    bgMid: '#bfdbfe',
    items: ['Azure Migrate', 'Site Recovery', 'Compute Engine'],
  },
  {
    name: 'AWS',
    icon: Cloud,
    color: '#f97316',
    bg: '#ffedd5',
    bgMid: '#fed7aa',
    items: ['Migration Hub', 'EC2', 'Cost Explorer'],
  },
  {
    name: 'Google Cloud',
    icon: CloudSun,
    color: '#4285f4',
    bg: '#dbeafe',
    bgMid: '#93c5fd',
    items: ['Compute Engine', 'GKE', 'Cloud Storage'],
  },
];

const FAQS = [
  {
    q: 'How do you migrate without downtime?',
    a: 'Workload by workload: replicate, run in parallel, validate, cut over in a controlled window, keep rollback ready. The "zero downtime" promise is an engineering plan, not a slogan — you\'ll see it before we start.',
  },
  {
    q: 'Our cloud bill keeps growing. Is that normal?',
    a: 'Common, not normal. Most bills we audit carry 20–40% waste: over-provisioned instances, orphaned storage, missing savings plans. The free assessment shows the number before you spend anything.',
  },
  {
    q: 'AWS, Azure, or GCP — which should we choose?',
    a: 'It depends on your workloads, existing licensing, data residency, and team skills — and we\'ll say so specifically after the assessment. We work across all three, so the recommendation has no hidden agenda.',
  },
  {
    q: 'What does DevOps engagement look like?',
    a: 'Either we build your CI/CD foundation as a project, or our DevOps specialists embed in your team (see /staff-augmentation). The manufacturing case above was two embedded specialists.',
  },
  {
    q: 'Do you offer ongoing support after migration?',
    a: 'Yes — monitoring, patching, incident response, and continuous optimization under a maintenance agreement with response-time commitments in writing.',
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

export default function CloudDevOps() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Cloud & DevOps — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        `Infrastructure that scales. Releases that don't scare anyone. Cloud and DevOps engineering for teams tired of surprise bills and fragile deployments.`,
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
    script.id = 'cloud-devops-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('cloud-devops-faq-schema')?.remove();
    };
  }, []);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header
        className="webdev-hero relative border-b border-white/10 px-6"
        style={{ height: '100svh', maxHeight: '100svh' }}
      >
        <ServiceHeroBackground image={HERO_IMAGES.cloudAndDevops} />

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
                  waveLineIndex={i}                  strokeWidth={3}
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
              style={{ '--nav-cta-w': '19.5rem' } as React.CSSProperties}
            >
              <span className="nav-cta-btn__label">Get a Free Cloud Assessment</span>
              <span className="nav-cta-btn__icon">
                <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* The quiet tax */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="tax-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr w-full max-w-[920px] mx-auto px-2">
            <ScrollTextReveal
              id="tax-heading"
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
                { text: 'quiet' },
                { text: 'tax' },
                { text: 'on' },
                { text: 'your' },
                { text: 'engineering' },
              ]}
            />

            <p className="sr sr-d2 text-[#555] text-base sm:text-lg leading-[1.85] mt-8 max-w-[48rem] mx-auto text-center">
              It rarely announces itself. The cloud bill creeps 8% a quarter. Deployments need a Saturday and a prayer.
              One traffic spike and the app folds. None of it is a crisis — until the month it is.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TAX_ITEMS.map((item, i) => (
              <div
                key={item}
                className={`sr-from-left p-5 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-blue-500 mt-0.5" aria-hidden="true">
                    <CloudRain size={18} />
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-white border border-blue-100 text-center">
            <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <strong>Our cloud and DevOps services remove that tax:</strong> architecture that scales on demand,
              pipelines that make releases boring, and cost discipline that pays for the engagement by itself.
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
              End-to-end cloud and DevOps solutions that eliminate the quiet tax.
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

      <ServiceProofSection intro={PROOF_INTRO} stats={PROOF_STATS} />

      {/* Certifications */}
      <section className="cloud-certs py-20 px-6 bg-gray-50" aria-labelledby="certs-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr">
            <span className="cloud-certs__eyebrow">Platforms</span>
            <ScrollTextReveal
              id="certs-heading"
              tag="h2"
              align="center"
              className="cloud-certs__title w-full mt-3"
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
                { text: 'Certifications' },
                { text: '&' },
                { text: 'platforms' },
              ]}
            />
            <p className="cloud-certs__subtitle">
              We recommend the platform your workload and budget deserve, not the one with the best partner margin.
            </p>
          </div>

          <div className="cloud-certs__grid max-w-[920px] mx-auto">
            {CERTIFICATIONS.map((cert, i) => {
              const Icon = cert.icon;
              const cardStyle = {
                '--cert-accent': cert.color,
                '--cert-bg': cert.bg,
                '--cert-bg-mid': cert.bgMid,
                transitionDelay: `${i * 0.1}s`,
              } as React.CSSProperties;

              return (
                <article
                  key={cert.name}
                  className="cloud-certs__card sr-from-center"
                  style={cardStyle}
                >
                  <div className="cloud-certs__icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="cloud-certs__card-title">{cert.name}</h3>
                  <div className="cloud-certs__tags">
                    {cert.items.map((item) => (
                      <span key={item} className="cloud-certs__tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
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
              Ready to stop paying the quiet tax?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Get a free cloud assessment that shows exactly where you're wasting money and what needs to change.
            </p>
            <Link
              to="/#contact"
              className="pillar-cta-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Your Free Assessment
              <ArrowRight size={18} />
            </Link>
            <p className="text-sm text-gray-500 mt-4">No obligation. Just clarity.</p>
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
              AWS Certified
            </span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-green-500" />
              Azure Certified
            </span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-green-500" />
              GCP Certified
            </span>
          </div>
          <Link
            to="/#contact"
            className="pillar-cta-btn inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            Get a Free Cloud Assessment
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}