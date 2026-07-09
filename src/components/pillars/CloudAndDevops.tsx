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
import { ScrollTextReveal } from '../ScrollTextReveal';

const HERO_BG_IMAGE =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80';

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
  },
  {
    icon: TrendingDown,
    title: 'Cloud Cost Optimization',
    desc: 'Right-sizing, reserved instances and savings plans, automated cost management, multi-cloud comparison, real-time monitoring. One enterprise client cut cloud spend 35% while improving performance 40%.',
    link: '/cloud-solutions',
    accent: '#059669',
    bg: '#d1fae5',
  },
  {
    icon: GitBranch,
    title: 'DevOps & CI/CD',
    desc: 'Automated pipelines with Docker, Kubernetes, Jenkins, and Terraform. For a manufacturing client, two DevOps specialists cut deployment times by 25% and closed critical security gaps in the pipeline.',
    link: '/devops-development',
    accent: '#7c3aed',
    bg: '#ede9fe',
  },
  {
    icon: Layers,
    title: 'Scalable & Hybrid Architecture',
    desc: 'Public, private, and hybrid designs for teams that need elasticity and strict data compliance in the same system. Pay for what you use; scale when demand says so.',
    link: '/cloud-solutions',
    accent: '#d97706',
    bg: '#fef3c7',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    desc: 'Monitoring, patching, performance tuning, and a team that answers before your users notice. Launch day is the beginning.',
    link: '/software-maintenance-support',
    accent: '#dc2626',
    bg: '#fee2e2',
  },
  {
    icon: Cloud,
    title: 'Salesforce Development',
    desc: 'Implementation and customization your sales team will actually adopt, integrated with the rest of your stack.',
    link: '/salesforce-development',
    accent: '#0891b2',
    bg: '#cffafe',
  },
];

const PROOF_STATS = [
  { value: '99.99%', label: 'Uptime under peak load' },
  { value: '40%', label: 'Faster performance' },
  { value: '35%', label: 'Lower cloud costs' },
  { value: '0', label: 'Downtime deployments since' },
];

const PROOF_INTRO = `A high-traffic enterprise application faced traffic spikes, slow queries, DDoS exposure, and an unoptimized bill. We rebuilt the foundation — load balancing with auto-scaling, database tuning (+30% query speed), zero-trust security hardening, and automated CI/CD.`;

const CERTIFICATIONS = [
  { name: 'AWS', icon: Cloud, color: '#f97316', items: ['Migration Hub', 'EC2', 'Cost Explorer'] },
  { name: 'Azure', icon: CloudSnow, color: '#0078d4', items: ['Azure Migrate', 'Site Recovery', 'Compute Engine'] },
  { name: 'Google Cloud', icon: CloudSun, color: '#4285f4', items: ['Compute Engine', 'GKE', 'Cloud Storage'] },
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
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={HERO_BG_IMAGE}
            alt="Cloud infrastructure visualization"
            className="webdev-hero__img h-full w-full object-cover object-center"
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
              {HERO_TITLE_LINES.map((line) => (
                <ScrollTextReveal
                  key={line.words.map((w) => w.text).join('-')}
                  tag="span"
                  align="left"
                  animate="words"
                  outlinedText
                  strokeColor="#60a5fa"
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

            <h1 className="webdev-hero__tagline a2 mb-3 w-full text-left">
              {HERO_TAGLINE}
            </h1>

            <p className="webdev-hero__desc a2 text-sm sm:text-base leading-[1.7] max-w-[38rem] tracking-[0.01em]">
              {HERO_DESC}
            </p>

            <Link
              to="/#contact"
              className="nav-cta-btn nav-cta-btn--cta a3 mt-5 inline-flex bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"
              style={{ '--nav-cta-w': '15.75rem' } as React.CSSProperties}
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
              End-to-end cloud and DevOps solutions that eliminate the quiet tax.
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
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group"
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

      {/* Proof under pressure */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_50%_0%,_rgba(96,165,250,0.15)_0%,_transparent_60%)]" />
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
                { text: 'Proof' },
                { text: 'under' },
                { text: 'pressure' },
              ]}
              textColor="#ffffff"
            />
            <p className="text-blue-200 text-base leading-[1.7] mt-4 max-w-[40rem] mx-auto">
              {PROOF_INTRO}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PROOF_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="sr-from-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-300">{stat.value}</div>
                <div className="text-xs text-blue-200/80 mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6" aria-labelledby="certs-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
            <ScrollTextReveal
              id="certs-heading"
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
                { text: 'Certifications' },
                { text: '&' },
                { text: 'platforms' },
              ]}
            />
            <p className="text-[#555] text-base leading-[1.7] mt-4 max-w-[40rem] mx-auto">
              We recommend the platform your workload and budget deserve, not the one with the best partner margin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.name}
                  className="sr-from-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 text-center"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {cert.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full border border-gray-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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
              Ready to stop paying the quiet tax?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Get a free cloud assessment that shows exactly where you're wasting money and what needs to change.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            Get a Free Cloud Assessment
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}