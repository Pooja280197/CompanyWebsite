import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';

const FEATURE_CARD_TITLE_STYLE = {
  fontFamily: 'Inter,sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
  letterSpacing: '0.02em',
  lineHeight: 1.25,
  maxWidth: '100%',
} as const;

const PROOF_WORDS = [{ text: 'Proof' }];

export interface ServiceProofStat {
  value: string;
  label: string;
}

export function ServiceProofSection({
  intro,
  stats,
}: {
  intro?: ReactNode;
  stats: ServiceProofStat[];
}) {
  return (
    <section className="cloud-proof py-20 px-6" aria-labelledby="proof-heading">
      <div className="cloud-proof__orb" aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="cloud-proof__inner sr">
          <div>
            <span className="cloud-proof__eyebrow">Case study</span>
            <ScrollTextReveal
              id="proof-heading"
              tag="h2"
              align="left"
              className="cloud-proof__title w-full"
              wordGap="0.2em"
              style={FEATURE_CARD_TITLE_STYLE}
              words={PROOF_WORDS}
              scrollFromColor="#111111"
              scrollToColor="#f8fafc"
            />
            {intro ? <p className="cloud-proof__text">{intro}</p> : null}
            <Link to="/contact-us" className="cloud-proof__cta">
              Discuss your project
              <ArrowRight size={15} strokeWidth={2.25} />
            </Link>
          </div>

          <div className="cloud-proof__metrics">
            {stats.map((stat) => (
              <div key={stat.label} className="cloud-proof__metric">
                <p className="cloud-proof__metric-value">{stat.value}</p>
                <p className="cloud-proof__metric-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
