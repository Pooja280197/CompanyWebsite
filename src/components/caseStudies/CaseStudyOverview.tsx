import { Quote, Factory, Cpu, Clock, TrendingDown, GitBranch, Users, Target, type LucideIcon } from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import { titleToScrollWords } from './titleToScrollWords';

export interface CaseStudyGlanceItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CaseStudyOverviewProps {
  sectionId?: string;
  title?: string;
  lead: string;
  quote: string;
  quoteAuthor: string;
  glanceItems: CaseStudyGlanceItem[];
}

const GLANCE_ICON_MAP: Record<string, LucideIcon> = {
  Industry: Factory,
  Technology: Cpu,
  Solution: GitBranch,
  Duration: Clock,
  'Team Size': Users,
  Focus: Target,
  Impact: TrendingDown,
};

function glanceIcon(label: string): LucideIcon {
  return GLANCE_ICON_MAP[label] ?? Target;
}

export function CaseStudyOverview({
  sectionId = 'case-study-overview-heading',
  title = 'The client',
  lead,
  quote,
  quoteAuthor,
  glanceItems,
}: CaseStudyOverviewProps) {
  return (
    <section className="sf-overview relative overflow-hidden px-4 py-20 sm:px-6 md:py-24" aria-labelledby={sectionId}>
      <div className="relative z-[1] mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="sf-overview__eyebrow sr-from-bottom sr-d1">Overview</p>

            <ScrollTextReveal
              id={sectionId}
              tag="h2"
              align="left"
              className="sf-overview__title"
              wordGap="0.2em"
              scrollFromColor="#d1d1d1"
              scrollToColor="#0f172a"
              words={titleToScrollWords(title)}
            />

            <p className="sf-overview__lead sr-from-bottom sr-d3">{lead}</p>

            <blockquote className="sf-overview__quote sr-from-left sr-d4">
              <Quote size={22} className="sf-overview__quote-icon" aria-hidden="true" />
              <div>
                <p className="sf-overview__quote-text">&ldquo;{quote}&rdquo;</p>
                <footer className="sf-overview__quote-author">— {quoteAuthor}</footer>
              </div>
            </blockquote>
          </div>

          <aside className="lg:col-span-5">
            <div className="sf-overview__panel sr-from-right sr-d2">
              <div className="sf-overview__panel-head">
                <span className="sf-overview__panel-dot" aria-hidden="true" />
                <h3 className="sf-overview__panel-title">At a Glance</h3>
              </div>

              <ul className="sf-overview__stats" role="list">
                {glanceItems.map((item, i) => {
                  const Icon = glanceIcon(item.label);
                  return (
                    <li
                      key={item.label}
                      className={`sf-overview__stat sr-from-bottom ${['sr-d3', 'sr-d4', 'sr-d5', 'sr-d6'][i]}${item.highlight ? ' sf-overview__stat--highlight' : ''}`}
                    >
                      <span className="sf-overview__stat-icon" aria-hidden="true">
                        <Icon size={16} strokeWidth={2} />
                      </span>
                      <span className="sf-overview__stat-label">{item.label}</span>
                      <span className="sf-overview__stat-value">{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
