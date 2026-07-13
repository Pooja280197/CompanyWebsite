import { type CSSProperties } from 'react';
import { BadgeCheck, Clock3, HeartHandshake, Receipt } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';

type Proof = {
  mark: string;
  icon: LucideIcon;
  title: string;
  text: string;
  accent: string;
  soft: string;
};

const PROOFS: Proof[] = [
  {
    mark: '95%',
    icon: HeartHandshake,
    title: '95% client retention',
    text: 'Most of our growth is existing clients expanding, not new logos replacing churned ones.',
    accent: '#2563eb',
    soft: '#eff6ff',
  },
  {
    mark: '0',
    icon: Receipt,
    title: 'Transparent pricing',
    text: 'The quote you approve is the invoice you receive. Eight years, zero surprise bills.',
    accent: '#7c3aed',
    soft: '#f5f3ff',
  },
  {
    mark: '10×',
    icon: BadgeCheck,
    title: 'Honest recommendations',
    text: "If an off-the-shelf tool solves your problem for a tenth of the price, we'll say so before you spend ten times more with us. It costs us projects and earns us clients.",
    accent: '#059669',
    soft: '#ecfdf5',
  },
  {
    mark: '24/7',
    icon: Clock3,
    title: 'Time-zone coverage',
    text: 'Overlap hours matched to Chicago, Berlin, or Sydney, with a named account manager who answers.',
    accent: '#ea580c',
    soft: '#fff7ed',
  },
];

const TITLE_WORDS = [
  { text: 'The' },
  { text: 'numbers' },
  { text: "we're" },
  { text: 'actually' },
  { text: 'proud' },
  { text: 'of' },
] as const;

export default function HomeProudNumbers() {
  return (
    <section
      className="home-proud relative overflow-hidden bg-white py-16 px-6 sm:py-20"
      aria-labelledby="home-proud-heading"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto mb-14 w-full max-w-[900px] px-2 text-center sr">
          <ScrollTextReveal
            id="home-proud-heading"
            tag="h2"
            align="center"
            className="w-full"
            wordGap="0.18em"
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.25,
              maxWidth: '100%',
              color: '#0f172a',
            }}
            words={[...TITLE_WORDS]}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {PROOFS.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`home-proud__card group sr sr-d${index + 1} flex flex-col rounded-3xl border border-[#ececec] bg-white p-5 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.22)] sm:p-6`}
                style={
                  {
                    '--proud-accent': item.accent,
                    '--proud-soft': item.soft,
                  } as CSSProperties
                }
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f5f5f5] text-black transition-colors duration-300 group-hover:bg-[#111] group-hover:text-white"
                    aria-hidden="true"
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span
                    className="pt-0.5 text-[0.9rem] font-semibold tracking-tight"
                    style={{ color: item.accent }}
                  >
                    {item.mark}
                  </span>
                </div>

                <h3 className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-semibold leading-snug text-[#111]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[0.9rem] leading-[1.55] text-[#777]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
