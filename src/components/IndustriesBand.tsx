import { type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Plane,
  ShoppingBag,
  Trophy,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';

const INDUSTRIES: Array<{
  label: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    label: 'Healthcare',
    href: '/industries/healthcare-software-development',
    icon: HeartPulse,
  },
  {
    label: 'Education',
    href: '/erp-solutions-for-education',
    icon: GraduationCap,
  },
  {
    label: 'Finance',
    href: '/industries/fintech-software-development',
    icon: Landmark,
  },
  {
    label: 'Real Estate',
    href: '/industries/real-estate-software-development',
    icon: Building2,
  },
  {
    label: 'Manufacturing',
    href: '/industries/manufacturing-software-solutions',
    icon: Factory,
  },
  {
    label: 'E-commerce',
    href: '/industries/ecommerce-development',
    icon: ShoppingBag,
  },
  {
    label: 'Travel',
    href: '/industries/travel-software-development',
    icon: Plane,
  },
  {
    label: 'Sports',
    href: '/contact-us',
    icon: Trophy,
  },
];

const WAVE_POINTS = INDUSTRIES.map((_, index) => ({
  x: 62.5 + index * 125,
  y: index % 2 === 0 ? 188 : 72,
}));

const WAVE_PATH = WAVE_POINTS.map((point, index) =>
  `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`,
).join(' ');

function IndustryNode({
  industry,
  index,
}: {
  industry: (typeof INDUSTRIES)[number];
  index: number;
}) {
  const Icon = industry.icon;
  const isHigh = index % 2 === 1;

  const label = (
    <Link to={industry.href} className="ind-band__label-link">
      {industry.label}
    </Link>
  );

  const iconLink = (
    <Link to={industry.href} className="ind-band__icon-link" aria-label={industry.label}>
      <span className="ind-band__ring" aria-hidden="true">
        <span className="ind-band__bubble">
          <Icon size={26} strokeWidth={1.85} className="ind-band__icon" />
        </span>
      </span>
    </Link>
  );

  return (
    <div
      className={`ind-band__node sr-from-left${isHigh ? ' ind-band__node--high' : ' ind-band__node--low'}`}
      style={{ transitionDelay: `${index * 0.06}s` } as CSSProperties}
      role="listitem"
    >
      {isHigh && <span className="ind-band__label ind-band__label--above">{label}</span>}
      {iconLink}
      {!isHigh && <span className="ind-band__label ind-band__label--below">{label}</span>}
    </div>
  );
}

export default function IndustriesBand() {
  return (
    <section className="ind-band bg-white px-6 py-16 overflow-hidden" aria-labelledby="ind-band-heading">
      <div className="ind-band__head-wrap mx-auto w-full max-w-[920px] sr">
        <ScrollTextReveal
          id="ind-band-heading"
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
            { text: 'Industries' },
            { text: 'we' },
            { text: 'know' },
            { text: 'from' },
            { text: 'the' },
            { text: 'inside' },
          ]}
        />
        <p className="ind-band__lede sr sr-d1">
          Deep domain experience across the verticals where software has to work in production.
        </p>
      </div>

      <div className="ind-band__zigzag-scroll mt-10">
        <div className="ind-band__zigzag" role="list">
          <svg
            className="ind-band__wave"
            viewBox="0 0 1000 260"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="ind-band__wave-path" d={WAVE_PATH} />
          </svg>

          <div className="ind-band__track">
            {INDUSTRIES.map((industry, index) => (
              <IndustryNode key={industry.label} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </div>

      <p className="ind-band__footnote sr sr-d2">
        And if yours isn&apos;t listed,{' '}
        <span className="ind-band__footnote-highlight">that's a conversation &apos;s</span> not a limitation.
      </p>
    </section>
  );
}
