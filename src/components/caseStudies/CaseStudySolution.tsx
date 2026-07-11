import { useEffect, useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import { titleToScrollWords } from './titleToScrollWords';

export type CaseStudySolutionTone = 'blue' | 'violet' | 'emerald';

export interface CaseStudySolutionPillar {
  icon: LucideIcon;
  title: string;
  text: string;
  tag: string;
  tone: CaseStudySolutionTone;
}

export interface CaseStudySolutionTech {
  icon: LucideIcon;
  name: string;
  color: string;
  bg?: string;
}

export interface CaseStudySolutionProps {
  sectionId: string;
  title?: string;
  lead?: string;
  techStackLabel?: string;
  pillars: [CaseStudySolutionPillar, CaseStudySolutionPillar, CaseStudySolutionPillar];
  technologies: CaseStudySolutionTech[];
}

const TONE_STYLES = {
  blue: {
    card: 'hover:border-blue-200/80',
    icon: 'bg-blue-50 text-blue-600 ring-blue-100',
    tag: 'bg-blue-50 text-blue-700 border-blue-100',
    glow: 'from-blue-500/10',
    rail: 'bg-blue-500',
  },
  violet: {
    card: 'hover:border-violet-200/80',
    icon: 'bg-violet-50 text-violet-600 ring-violet-100',
    tag: 'bg-violet-50 text-violet-700 border-violet-100',
    glow: 'from-violet-500/10',
    rail: 'bg-violet-500',
  },
  emerald: {
    card: 'hover:border-emerald-200/80',
    icon: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    tag: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    glow: 'from-emerald-500/10',
    rail: 'bg-emerald-500',
  },
} as const;

const STAGGER = ['sr-d4', 'sr-d5', 'sr-d6'] as const;

export function CaseStudySolution({
  sectionId,
  title = 'What we built',
  lead,
  techStackLabel = 'Technology Stack',
  pillars,
  technologies,
}: CaseStudySolutionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10px 0px' },
    );

    root.querySelectorAll('.sr-from-bottom').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sf-solution relative overflow-hidden px-4 py-20 sm:px-6 md:py-24"
      aria-labelledby={sectionId}
    >
      <div className="relative z-[1] mx-auto w-full max-w-[1200px]">
        <div className="sf-solution__head mx-auto max-w-3xl text-center">
          <p className="sf-solution__eyebrow sr-from-bottom sr-d1">Solution</p>
          <ScrollTextReveal
            id={sectionId}
            tag="h2"
            align="center"
            className="sf-solution__title"
            wordGap="0.2em"
            scrollFromColor="#d1d1d1"
            scrollToColor="#0f172a"
            words={titleToScrollWords(title)}
          />
          {lead && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sr-from-bottom sr-d3">
              {lead}
            </p>
          )}
        </div>

        <div className={`sf-solution__pipeline relative ${lead ? 'mt-10 md:mt-12' : 'mt-8 md:mt-10'}`}>
          <div
            className="sf-solution__pipeline-rail pointer-events-none absolute bottom-6 left-[1.35rem] top-6 hidden w-0.5 md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-3 md:gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const tone = TONE_STYLES[pillar.tone];

              return (
                <article
                  key={pillar.title}
                  className={`group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_12px_28px_-24px_rgba(15,23,42,0.28)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-22px_rgba(15,23,42,0.3)] md:pl-12 ${tone.card} sr-from-bottom ${STAGGER[index]}`}
                >
                  <span
                    className={`sf-solution__node-dot absolute left-5 top-6 hidden h-3 w-3 rounded-full ring-[3px] ring-white md:block ${tone.rail}`}
                    aria-hidden="true"
                  />

                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${tone.glow} to-transparent opacity-0 transition duration-500 group-hover:opacity-100`}
                    aria-hidden="true"
                  />

                  <div className="relative grid grid-cols-1 gap-3 p-4 sm:p-4 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-4">
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 transition duration-300 group-hover:scale-105 ${tone.icon}`}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </span>

                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-slate-900">{pillar.title}</h3>
                      <p className="mt-1 max-w-3xl text-sm leading-snug text-slate-600">{pillar.text}</p>
                    </div>

                    <span
                      className={`inline-flex w-fit shrink-0 items-center self-start rounded-full border px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] lg:self-center ${tone.tag}`}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="sf-solution__stack sr-from-bottom sr-d6 mt-10 rounded-2xl border border-dashed border-slate-300/80 bg-gray-200 p-5 sm:p-6">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">
            {techStackLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <span
                  key={tech.name}
                  className={`inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sr-from-bottom ${['sr-d4', 'sr-d5', 'sr-d6', 'sr-d7', 'sr-d8', 'sr-d9'][index] ?? 'sr-d6'}`}
                >
                  <Icon size={16} style={{ color: tech.color }} />
                  {tech.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
