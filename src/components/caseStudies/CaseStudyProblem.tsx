import type { LucideIcon } from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import { titleToScrollWords } from './titleToScrollWords';

export interface CaseStudyProblemNode {
  label: string;
  icon: LucideIcon;
}

export interface CaseStudyProblemMetric {
  label: string;
  value: string;
}

export interface CaseStudyProblemPoint {
  icon: LucideIcon;
  text: string;
}

export interface CaseStudyProblemProps {
  sectionId: string;
  eyebrow: string;
  eyebrowVariant?: 'problem' | 'engagement';
  title: string;
  centerIcon: LucideIcon;
  centerLabel: string;
  centerStatus: string;
  nodes: [CaseStudyProblemNode, CaseStudyProblemNode, CaseStudyProblemNode];
  metrics: [CaseStudyProblemMetric, CaseStudyProblemMetric, CaseStudyProblemMetric];
  painPoints: [CaseStudyProblemPoint, CaseStudyProblemPoint, CaseStudyProblemPoint];
}

const STAGGER = ['sr-d4', 'sr-d5', 'sr-d6'] as const;

export function CaseStudyProblem({
  sectionId,
  eyebrow,
  eyebrowVariant = 'problem',
  title,
  centerIcon: CenterIcon,
  centerLabel,
  centerStatus,
  nodes,
  metrics,
  painPoints,
}: CaseStudyProblemProps) {
  const eyebrowClass =
    eyebrowVariant === 'engagement'
      ? 'sf-problem__eyebrow sf-problem__eyebrow--engagement'
      : 'sf-problem__eyebrow';

  const [nodeTl, nodeTr, nodeBc] = nodes;
  const TlIcon = nodeTl.icon;
  const TrIcon = nodeTr.icon;
  const BcIcon = nodeBc.icon;

  return (
    <section className="sf-problem relative overflow-hidden px-4 py-20 sm:px-6 md:py-24" aria-labelledby={sectionId}>
      <div className="relative z-[1] mx-auto w-full max-w-[1200px]">
        <div className="sf-problem__head">
          <p className={`${eyebrowClass} sr-from-bottom sr-d1`}>{eyebrow}</p>
          <ScrollTextReveal
            id={sectionId}
            tag="h2"
            align="center"
            className="sf-problem__title"
            wordGap="0.2em"
            scrollFromColor="#d1d1d1"
            scrollToColor="#0f172a"
            words={titleToScrollWords(title)}
          />
        </div>

        <div className="sf-problem__diagram sr-from-center sr-d3" aria-hidden="true">
          <div className="sf-problem__diagram-inner bg-white">
            <svg className="sf-problem__lines" viewBox="0 0 720 280" preserveAspectRatio="xMidYMid meet">
              <path className="sf-problem__line sf-problem__line--a" d="M360 148 L170 78" />
              <path className="sf-problem__line sf-problem__line--b" d="M360 148 L550 78" />
              <path className="sf-problem__line sf-problem__line--c" d="M360 148 L360 228" />
            </svg>

            <div className="sf-problem__node sf-problem__node--center">
              <span className="sf-problem__node-pulse" />
              <span className="sf-problem__node-icon sf-problem__node-icon--center">
                <CenterIcon size={22} strokeWidth={2} />
              </span>
              <span className="sf-problem__node-label">{centerLabel}</span>
              <span className="sf-problem__node-status">{centerStatus}</span>
            </div>

            <div className={`sf-problem__node sf-problem__node--tl sr-from-left ${STAGGER[0]}`}>
              <span className="sf-problem__node-icon">
                <TlIcon size={18} strokeWidth={2} />
              </span>
              <span className="sf-problem__node-label">{nodeTl.label}</span>
            </div>

            <div className={`sf-problem__node sf-problem__node--tr sr-from-right ${STAGGER[1]}`}>
              <span className="sf-problem__node-icon">
                <TrIcon size={18} strokeWidth={2} />
              </span>
              <span className="sf-problem__node-label">{nodeTr.label}</span>
            </div>

            <div className={`sf-problem__node sf-problem__node--bc sr-from-bottom ${STAGGER[2]}`}>
              <span className="sf-problem__node-icon">
                <BcIcon size={18} strokeWidth={2} />
              </span>
              <span className="sf-problem__node-label">{nodeBc.label}</span>
            </div>

            <div className="sf-problem__metrics">
              {metrics.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`sf-problem__metric sf-problem__metric--bad sr-from-bottom ${STAGGER[index]}`}
                >
                  <span className="sf-problem__metric-label">{stat.label}</span>
                  <span className="sf-problem__metric-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ul className="sf-problem__list" role="list">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <li key={point.text} className={`sf-problem__item sr-from-bottom ${STAGGER[index]}`}>
                <div className="sf-problem__item-top">
                  <span className="sf-problem__item-step">{`0${index + 1}`}</span>
                  <span className="sf-problem__item-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                </div>
                <p className="sf-problem__item-text">{point.text}</p>
                <span className="sf-problem__item-line" aria-hidden="true" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
