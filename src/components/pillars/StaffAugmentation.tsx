// StaffAugmentation.tsx
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Users,
  Shield,
  Zap,
  GitBranch,
  BarChart3,
  RefreshCw,
  Target,
  Globe,
  Layers,
 
} from 'lucide-react';
import { ScrollTextReveal, HeroTitleWaveGroup, getHeroLineLetterCounts, getHeroWaveStartDelay } from '../ScrollTextReveal';
import { ServiceHeroBackground } from '../ServiceHeroBackground';
import { HERO_IMAGES } from '../../data/heroImages';

const HERO_TAGLINE = `Your team, extended — without the hiring drag`;

const HERO_DESC = `Vetted engineers embedded in your workflow, under your direction, in days instead of the months a hire takes. Scale up for the roadmap, scale down after the release.`;

const HERO_TITLE_LINES = [
  {
    words: [{ text: 'STAFF' }, { text: 'AUGMENTATION' }],
    letterCount: 7,
    inline: true,
    startDelay: 0,
  },
];

const MATH_ITEMS = [
  'A senior developer hire takes 8–12 weeks',
  "Costs a recruiter's fee of 15–25% of annual salary",
  'Locks in a salary whether the roadmap needs them in month seven or not',
  'Meanwhile the deadline hasn\'t moved',
];

const STAFF_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&q=80';

const ENGAGEMENT_MODELS = [
  {
    icon: Users,
    title: 'Full-time dedicated',
    desc: 'Professionals working exclusively on your product, fully integrated into your team.',
    accent: '#2563eb',
    bg: '#dbeafe',
    bgMid: '#bfdbfe',
  },
  {
    icon: Clock,
    title: 'Part-time support',
    desc: 'Flexible allocation for intermittent needs — pay only for the hours you use.',
    accent: '#7c3aed',
    bg: '#ede9fe',
    bgMid: '#ddd6fe',
  },
  {
    icon: Target,
    title: 'Activity-based',
    desc: 'Resources scoped to specific tasks or milestones with clear deliverables.',
    accent: '#059669',
    bg: '#d1fae5',
    bgMid: '#a7f3d0',
  },
  {
    icon: Layers,
    title: 'Company-to-company',
    desc: 'Cohesive multi-resource teams for scaling operations or joint ventures.',
    accent: '#d97706',
    bg: '#fef3c7',
    bgMid: '#fde68a',
  },
  {
    icon: RefreshCw,
    title: 'Customizable contracts',
    desc: 'Terms shaped to your requirements, with transparent billing aligned to your budget.',
    accent: '#dc2626',
    bg: '#fee2e2',
    bgMid: '#fecaca',
  },
  {
    icon: Shield,
    title: 'Rapid onboarding & replacement',
    desc: 'Quick deployment, minimal downtime, and immediate replacement if the fit isn\'t right. In writing.',
    accent: '#0891b2',
    bg: '#cffafe',
    bgMid: '#a5f3fc',
  },
];

const SKILL_STACKS = [
  { category: 'Languages', items: ['Java', 'Python', '.NET', 'Node.js', 'PHP', 'Go', 'Rust', 'Ruby'] },
  { category: 'Frameworks', items: ['React', 'Angular', 'Spring', 'Django', 'Vue.js', 'Next.js', 'Laravel'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Oracle Cloud', 'DigitalOcean'] },
  { category: 'AI & ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'LangChain'] },
  { category: 'DevOps', items: ['Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'GitHub Actions'] },
  { category: 'Mobile', items: ['iOS', 'Android', 'Flutter', 'React Native', 'Xamarin'] },
  { category: 'Data', items: ['Big Data', 'Hadoop', 'Spark', 'Power BI', 'Tableau', 'Snowflake'] },
  { category: 'Security', items: ['Penetration testing', 'Risk assessment', 'SIEM', 'Compliance audits'] },
];

const SKILL_BY_CATEGORY = Object.fromEntries(
  SKILL_STACKS.map((stack) => [stack.category, stack.items]),
) as Record<string, string[]>;

const SKILL_HIERARCHY = [
  {
    pillar: 'Engineering',
    categories: [
      { name: 'Languages', items: SKILL_BY_CATEGORY.Languages },
      { name: 'Frameworks', items: SKILL_BY_CATEGORY.Frameworks },
      { name: 'Mobile', items: SKILL_BY_CATEGORY.Mobile },
    ],
  },
  {
    pillar: 'Infrastructure',
    categories: [
      { name: 'Cloud', items: SKILL_BY_CATEGORY.Cloud },
      { name: 'DevOps', items: SKILL_BY_CATEGORY.DevOps },
      { name: 'Security', items: SKILL_BY_CATEGORY.Security },
    ],
  },
  {
    pillar: 'Data & AI',
    categories: [
      { name: 'AI & ML', items: SKILL_BY_CATEGORY['AI & ML'] },
      { name: 'Data', items: SKILL_BY_CATEGORY.Data },
    ],
  },
];

const PROCESS_STEPS = [
  { num: '01', label: 'Plan', desc: 'We understand the requirement and prepare a tailored plan.' },
  { num: '02', label: 'Source', desc: 'Pipeline from our resume database, in-house developers, and vetted resources.' },
  { num: '03', label: 'Screen', desc: 'Internal technical screening against your project\'s specific needs.' },
  { num: '04', label: 'Client interview', desc: 'You interview the shortlist directly — no hidden surprises.' },
  { num: '05', label: 'Project discussion', desc: 'Requirements and expectations finalized before engagement.' },
  { num: '06', label: 'Final discussion', desc: 'Terms confirmed, candidate locked, start date set.' },
  { num: '07', label: 'Paperwork', desc: 'Contracts and onboarding — most engagements done in days.' },
];

const WHY_KEEP = [
  {
    icon: Shield,
    title: 'Compliance & legal handled',
    desc: 'Engagements structured to industry regulations, risk-free on your side.',
    accent: '#2563eb',
    bg: '#eff6ff',
    bgMid: '#dbeafe',
  },
  {
    icon: BarChart3,
    title: 'Performance monitoring',
    desc: 'We track and optimize our people\'s output; you\'re never managing underperformance alone.',
    accent: '#9333ea',
    bg: '#faf5ff',
    bgMid: '#f3e8ff',
  },
  {
    icon: GitBranch,
    title: 'Skill development',
    desc: 'Continuous upskilling keeps the bench current, not recycled.',
    accent: '#0891b2',
    bg: '#ecfeff',
    bgMid: '#cffafe',
  },
  {
    icon: Globe,
    title: '24/7 coverage',
    desc: 'Resources across time zones for teams that never fully sleep.',
    accent: '#d97706',
    bg: '#fffbeb',
    bgMid: '#fef3c7',
  },
];

const SUCCESS_STORY = {
  title: 'What it looks like when it works',
  cases: [
    {
      industry: 'Retail',
      problem: 'Fragmented customer data and campaigns firing blind',
      solution: 'Five AI developers embedded with their team, built predictive segmentation',
      result: '20% sales increase',
      accent: '#2563eb',
      bg: '#eff6ff',
    },
    {
      industry: 'Manufacturing',
      problem: 'CI/CD delays and security risk',
      solution: 'Two DevOps specialists — deployment pipelines and security closure',
      result: 'Deployment times down 25%, pipeline security closed',
      accent: '#d97706',
      bg: '#fff7ed',
    },
  ],
};

const FAQS = [
  {
    q: 'Staff augmentation vs. outsourcing — what\'s the real difference?',
    a: 'Control. With augmentation, engineers work inside your team, your tools, your standups — you direct the work. With outsourcing, you hand over a scope and receive deliverables. Augmentation fits evolving roadmaps; outsourcing fits fixed, well-defined scopes. We offer both; we\'ll tell you which fits.',
  },
  {
    q: 'How fast can someone start?',
    a: 'Shortlist profiles typically within 48 hours; onboarded and committing code within days for common stacks. Rare specializations take longer — we\'ll give you an honest timeline upfront, not a sales one.',
  },
  {
    q: 'What if the developer isn\'t a good fit?',
    a: 'We replace them quickly, at no re-sourcing cost. It\'s a contractual commitment, and it\'s rare — the seven-step vetting exists to keep it that way.',
  },
  {
    q: 'Can I convert an augmented engineer to my payroll?',
    a: 'Yes — conversion terms are agreed in the contract upfront, so there\'s no awkward negotiation later.',
  },
  {
    q: 'How does pricing work?',
    a: 'Transparent monthly or hourly billing per engineer, rate fixed in the contract by skill and seniority. No placement fees, no hidden markups, and you see the full rate card before you commit.',
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

export default function StaffAugmentation() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Staff Augmentation — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Vetted engineers embedded in your workflow in days instead of months. Scale up for the roadmap, scale down after the release.',
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
    script.id = 'staff-augmentation-faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title = 'NSS — Software that ships';
      document.getElementById('staff-augmentation-faq-schema')?.remove();
    };
  }, []);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header className="webdev-hero relative border-b border-white/10 px-6" style={{ height: '100svh', maxHeight: '100svh' }}>
        <ServiceHeroBackground image={HERO_IMAGES.staffAugmentation} />

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
              style={{ '--nav-cta-w': '21.5rem' } as React.CSSProperties}
            >
              <span className="nav-cta-btn__label">Get Candidate Profiles in 48 Hours</span>
              <span className="nav-cta-btn__icon">
                <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* The math that doesn't work */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="math-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr w-full max-w-[920px] mx-auto px-2">
            <ScrollTextReveal
              id="math-heading"
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
                { text: 'math' },
                { text: 'that' },
                { text: 'doesn\'t' },
                { text: 'work' },
              ]}
            />

            <p className="sr sr-d2 text-[#555] text-base sm:text-lg leading-[1.85] mt-8 max-w-[48rem] mx-auto text-center">
              Hiring rarely moves at roadmap speed. The search runs weeks. The recruiter's fee lands before day one.
              The salary locks in whether you need them in month seven or not — and the deadline hasn't moved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {MATH_ITEMS.map((item, i) => (
              <div
                key={item}
                className="sr-from-left p-5 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-blue-500 mt-0.5" aria-hidden="true">
                    <Clock size={18} />
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-white border border-blue-100 text-center">
            <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <strong>Staff augmentation flips the equation:</strong> the skills arrive in days, the commitment matches
              the project, and the overhead — sourcing, screening, payroll, replacement — is ours.{' '}
              <strong>100+ verified IT professionals</strong> across <strong>20+ technology stacks</strong>, with a
              bench we've screened before you ever see a CV.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="ai-deliver py-20 px-6" aria-labelledby="engagement-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr">
            <span className="ai-deliver__eyebrow">How we engage</span>
            <ScrollTextReveal
              id="engagement-heading"
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
                { text: 'Engagement' },
                { text: 'models' },
                { text: 'that' },
                { text: 'bend' },
                { text: 'to' },
                { text: 'the' },
                { text: 'project' },
              ]}
            />
            <p className="ai-deliver__subtitle">
              Choose the model that fits your workflow, budget, and timeline.
            </p>
          </div>

          <div className="ai-deliver__grid">
            {ENGAGEMENT_MODELS.map((model, i) => {
              const Icon = model.icon;
              const cardStyle = {
                '--deliver-accent': model.accent,
                '--deliver-bg': model.bg,
                '--deliver-bg-mid': model.bgMid,
                transitionDelay: `${i * 0.07}s`,
              } as React.CSSProperties;

              return (
                <article
                  key={model.title}
                  className="ai-deliver__card sr-from-center"
                  style={cardStyle}
                >
                  <div className="ai-deliver__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                  <h3 className="ai-deliver__card-title">{model.title}</h3>
                  <p className="ai-deliver__card-desc">{model.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills on the bench */}
      <section className="skill-tree py-20 px-6 bg-gray-50" aria-labelledby="skills-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-12 sr">
            <ScrollTextReveal
              id="skills-heading"
              tag="h2"
              align="center"
              className="skill-tree__title w-full"
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
                { text: 'Skills' },
                { text: 'on' },
                { text: 'the' },
                { text: 'bench' },
              ]}
            />
          </div>

          <div className="skill-tree__canvas sr">
            <div className="skill-tree__root-wrap">
              <div className="skill-tree__root">
                <span className="skill-tree__root-title"> Verified Skills</span>
                {/* <span className="skill-tree__root-sub">20+ technology stacks on the bench</span> */}
              </div>
              <div className="skill-tree__root-stem" aria-hidden="true" />
            </div>

            <div className="skill-tree__pillars">
              {SKILL_HIERARCHY.map((pillar, pi) => (
                <div
                  key={pillar.pillar}
                  className="skill-tree__pillar sr-from-center"
                  style={{ transitionDelay: `${pi * 0.12}s` }}
                >
                  <div className="skill-tree__pillar-stem" aria-hidden="true" />
                  <div className="skill-tree__pillar-tile">{pillar.pillar}</div>
                  <div className="skill-tree__pillar-stem skill-tree__pillar-stem--down" aria-hidden="true" />

                  <div className="skill-tree__categories">
                    {pillar.categories.map((category) => (
                      <div key={category.name} className="skill-tree__category">
                        <div className="skill-tree__category-tile">{category.name}</div>
                        <div className="skill-tree__category-stem" aria-hidden="true" />
                        <div className="skill-tree__skills">
                          {category.items.map((skill) => (
                            <span key={skill} className="skill-tree__skill">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50/50 to-white" aria-labelledby="process-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
            <ScrollTextReveal
              id="process-heading"
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
                { text: 'seven' },
                { text: 'steps' },
                { text: 'between' },
                { text: 'you' },
                { text: 'and' },
                { text: 'a' },
                { text: 'working' },
                { text: 'engineer' },
              ]}
            />
            <p className="text-[#555] text-base leading-[1.7] mt-4 max-w-[40rem] mx-auto">
              Most engagements go requirement-to-onboarded in days.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-[4.5rem] top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400" />

            <div className="space-y-6">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="staff-process__step sr-from-left flex flex-col lg:flex-row gap-4 lg:gap-8 items-start p-5 rounded-2xl bg-white border border-gray-100 transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <div className="flex-shrink-0 flex items-center gap-4 lg:w-[7rem]">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 tabular-nums">
                      {step.num}
                    </span>
                    <span className="lg:hidden font-semibold text-gray-900">{step.label}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="hidden lg:block font-semibold text-gray-900 mb-1">{step.label}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="staff-story py-20 px-6 bg-gray-50" aria-labelledby="story-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14 sr">
            <span className="staff-story__eyebrow">Proof in practice</span>
            <ScrollTextReveal
              id="story-heading"
              tag="h2"
              align="center"
              className="staff-story__title w-full mt-3"
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
                { text: 'it' },
                { text: 'looks' },
                { text: 'like' },
                { text: 'when' },
                { text: 'it' },
                { text: 'works' },
              ]}
            />
          </div>

          <div className="staff-story__grid">
            {SUCCESS_STORY.cases.map((story, i) => {
              const cardStyle = {
                '--story-accent': story.accent,
                '--story-bg': story.bg,
                transitionDelay: `${i * 0.12}s`,
              } as React.CSSProperties;

              return (
                <article
                  key={story.industry}
                  className="staff-story__card sr-from-center"
                  style={cardStyle}
                >
                  <span className="staff-story__industry">{story.industry}</span>

                  <div className="staff-story__block">
                    <span className="staff-story__label">Problem</span>
                    <p className="staff-story__text">{story.problem}</p>
                  </div>

                  <div className="staff-story__block">
                    <span className="staff-story__label">Solution</span>
                    <p className="staff-story__text">{story.solution}</p>
                  </div>

                  <div className="staff-story__result">
                    <Zap size={15} strokeWidth={2} aria-hidden="true" />
                    <span>{story.result}</span>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="staff-story__footnote sr">
            Same model, different skills — your direction, our bench.
          </p>
        </div>
      </section>

      {/* Why teams keep their augmented engineers */}
      <section className="why-keep py-20 px-6 bg-gray-50" aria-labelledby="keep-heading">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-14">
            <ScrollTextReveal
              id="keep-heading"
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
                { text: 'Why' },
                { text: 'teams' },
                { text: 'keep' },
                { text: 'their' },
                { text: 'augmented' },
                { text: 'engineers' },
              ]}
            />
          </div>

          <div className="why-keep__grid">
            {WHY_KEEP.map((item, i) => {
              const Icon = item.icon;
              const cardStyle = {
                '--method-accent': item.accent,
                '--method-bg': item.bg,
                '--method-bg-mid': item.bgMid,
                transitionDelay: `${i * 0.09}s`,
              } as React.CSSProperties;

              return (
                <article
                  key={item.title}
                  className="method-rail__card why-keep__card sr-from-center"
                  style={cardStyle}
                >
                  <div className="method-rail__icon-ring" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.65} />
                  </div>

                  <div className="method-rail__body">
                    <h3 className="method-rail__card-title">{item.title}</h3>
                    <p className="method-rail__card-desc">{item.desc}</p>
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
              Ready to extend your team?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Get vetted engineers embedded in your workflow in days, not months.
            </p>
            <Link
              to="/#contact"
              className="pillar-cta-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Start with Candidate Profiles
              <ArrowRight size={18} />
            </Link>
            <p className="text-sm text-gray-500 mt-4">Profiles in 48 hours. Onboarding in days.</p>
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
          <p className="text-sm text-gray-600">
            <strong className="text-gray-900">100+</strong> verified IT professionals •{' '}
            <strong className="text-gray-900">20+</strong> technology stacks
          </p>
          <Link
            to="/#contact"
            className="pillar-cta-btn inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Candidate Profiles in 48 Hours
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}