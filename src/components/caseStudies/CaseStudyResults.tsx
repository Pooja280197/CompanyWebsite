import { useEffect, useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import { titleToScrollWords } from './titleToScrollWords';

export type CaseStudyResultsTone = 'blue' | 'violet' | 'emerald';

export interface CaseStudyResultMetric {
  icon: LucideIcon;
  value: string;
  label: string;
  text: string;
  tone: CaseStudyResultsTone;
  progress?: number;
}

function parseMetricProgress(value: string): number {
  const percent = value.match(/^([\d.]+)%$/);
  if (percent) return Math.min(Number(percent[1]), 100);

  const multiplier = value.match(/^([\d.]+)x$/i);
  if (multiplier) return Math.min(Number(multiplier[1]) * 30, 100);

  const number = value.match(/^(\d+)$/);
  if (number) return Math.min(Number(number[1]) * 10, 100);

  return 100;
}

export interface CaseStudyResultsProps {
  sectionId: string;
  title?: string;
  metrics: [CaseStudyResultMetric, CaseStudyResultMetric, CaseStudyResultMetric];
  outcome: string;
  outcomeIcon: LucideIcon;
}

const TONE_COLORS = {
  blue: '#38bdf8',
  violet: '#a78bfa',
  emerald: '#34d399',
} as const;

const STAGGER = ['sr-d3', 'sr-d4', 'sr-d5'] as const;

function ResultRing({
  value,
  progress,
  color,
}: {
  value: string;
  progress: number;
  color: string;
}) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="sf-results__ring" aria-hidden="true">
      <svg viewBox="0 0 128 128" className="sf-results__ring-svg">
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="7"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          className="sf-results__ring-progress"
          style={
            {
              '--ring-progress': progress,
              '--ring-circumference': circumference,
            } as React.CSSProperties
          }
          transform="rotate(-90 64 64)"
        />
      </svg>
      <span className="sf-results__ring-value">{value}</span>
    </div>
  );
}

export function CaseStudyResults({
  sectionId,
  title = 'The results',
  metrics,
  outcome,
  outcomeIcon: OutcomeIcon,
}: CaseStudyResultsProps) {
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
      { threshold: 0.08, rootMargin: '0px 0px -10px 0px' },
    );

    root.querySelectorAll('.sr-from-bottom, .sf-results__ring-progress').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sf-results cloud-proof relative overflow-hidden px-4 py-20 sm:px-6 md:py-24"
      aria-labelledby={sectionId}
    >
      <div className="cloud-proof__orb" aria-hidden="true" />

      <div className="relative z-[1] mx-auto w-full max-w-[1200px]">
        <div className="sf-results__layout">
          <div className="sf-results__head">
            <ScrollTextReveal
              id={sectionId}
              tag="h2"
              align="center"
              className="sf-results__title"
              wordGap="0.2em"
              scrollFromColor="#64748b"
              scrollToColor="#f8fafc"
              words={titleToScrollWords(title)}
            />
          </div>

          <div className="sf-results__metrics">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const color = TONE_COLORS[metric.tone];

              return (
                <article
                  key={metric.label}
                  className={`sf-results__metric sf-results__metric--${metric.tone} sr-from-bottom ${STAGGER[index]}`}
                >
                  <div className="sf-results__metric-glow" aria-hidden="true" />

                  <div className="sf-results__metric-top">
                    <ResultRing
                      value={metric.value}
                      progress={metric.progress ?? parseMetricProgress(metric.value)}
                      color={color}
                    />
                    <span className={`sf-results__icon sf-results__icon--${metric.tone}`}>
                      <Icon size={18} strokeWidth={2} />
                    </span>
                  </div>

                  <p className="sf-results__label">{metric.label}</p>
                  <p className="sf-results__text">{metric.text}</p>
                </article>
              );
            })}
          </div>

          <div className="sf-results__footer sr-from-bottom sr-d6">
            <span className="sf-results__footer-icon" aria-hidden="true">
              <OutcomeIcon size={20} strokeWidth={2} />
            </span>
            <p className="sf-results__footer-text">{outcome}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
