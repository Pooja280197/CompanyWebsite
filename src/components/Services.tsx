import { Link } from 'react-router-dom';
import { Brain, Cloud, Layers, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';

const services: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  bg: string;
  accent: string;
}> = [
  {
    icon: Layers,
    title: 'Product Engineering',
    description:
      'Custom software, web platforms, and mobile apps built for the moment after launch — when real users, real load, and real edge cases show up. From the first architecture decision to version 4.0.',
    href: '/whatWeDo/productEngineering',
    bg: '#ede9fe',
    accent: '#7c3aed',
  },
  {
    icon: Brain,
    title: 'AI & Data',
    description:
      'Machine learning, generative AI, and the data engineering that makes both trustworthy. Built for production from day one: governance, MLOps, and data readiness included, not improvised later.',
    href: '/whatWeDo/ai-and-data',
    bg: '#dbeafe',
    accent: '#2563eb',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Migration without downtime, architecture that scales on demand, and CI/CD pipelines that turn releases from events into routine. One client runs at 99.99% uptime on a cloud bill 35% smaller than before.',
    href: '/whatWeDo/cloud-and-devops',
    bg: '#ffedd5',
    accent: '#ea580c',
  },
  {
    icon: Users,
    title: 'Team Extension',
    description:
      'Vetted engineers embedded in your team, working your hours, under your direction — onboarded in days through a seven-step vetting process. Scale up for a sprint or down after a release.',
    href: '/whatWeDo/staffAugmentation',
    bg: '#dcfce7',
    accent: '#16a34a',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-10 pb-16 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full">

        <div className="text-center mb-8 sr w-full max-w-[1100px] mx-auto px-2">
          <ScrollTextReveal
            tag="h2"
            align="center"
            className="w-full"
            wordGap="0.2em"
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.25,
              maxWidth: '100%',
            }}
            words={[
              { text: 'Four' },
              { text: 'ways we' },
              { text: 'move your' },
              { text: 'roadmap forward' },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 pt-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={`service-hover-card sr sr-d${i + 1}`}
                style={
                  {
                    '--service-bg': s.bg,
                    '--service-accent': s.accent,
                  } as React.CSSProperties
                }
              >
                <span className="service-hover-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.85} />
                </span>
                <div className="service-hover-card__cap">
                  <h3 className="service-hover-card__title">{s.title}</h3>
                  <div className="service-hover-card__desc-wrap">
                    <p className="service-hover-card__desc">{s.description}</p>
                  </div>
                </div>
                <Link
                  to={s.href}
                  className="service-hover-card__btn"
                  aria-label={`Read more about ${s.title}`}
                >
                  Read More
                </Link>
              </article>
            );
          })}
        </div>

        {/* <div className="bg-[#111] rounded-2xl px-8 py-7 sm:px-10 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sr sr-d5">
          <div>
            <p
              className="text-white font-semibold text-xl sm:text-2xl"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.25, letterSpacing: '-0.01em' }}
            >
              See Our Work in Action.
            </p>
            <p className="text-[#888] text-sm sm:text-base mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Start Your Creative Journey with Us!
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="flex items-center gap-2.5 bg-white text-[#111] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#f5f5f5] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Let's Collaborate
              <span className="w-7 h-7 bg-[#111] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </span>
            </a>
            <a
              href="#work"
              className="flex items-center gap-2.5 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-full hover:border-white/60 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View Portfolio
              <span className="w-7 h-7 border border-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
