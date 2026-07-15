import type { LucideIcon } from 'lucide-react';
import { Activity, X } from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';

export type IndustryChallengeItem = {
  label: string;
  icon?: LucideIcon;
  desc?: string;
};

export type IndustryChallengeProps = {
  accent: string;
  accentSoft?: string;
  accentSoft2?: string;
  eyebrowIcon?: LucideIcon;
  title: ReactNode;
  children: ReactNode;
  accentQuote?: ReactNode;
  items: IndustryChallengeItem[];
};

export function IndustryChallenge({
  accent,
  eyebrowIcon: EyebrowIcon = Activity,
  title,
  children,
  accentQuote,
  items,
}: IndustryChallengeProps) {
  const style = {
    '--ic-accent': accent,
  } as CSSProperties;

  return (
    <section className="industry-challenge py-24 px-6 md:px-12 lg:px-20" style={style}>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4 reveal-up">
              <span className="industry-challenge__eyebrow-icon">
                <EyebrowIcon size={18} />
              </span>
              <span className="industry-challenge__eyebrow">The Challenge</span>
            </div>

            <h2 className="heading-lg text-[#0F172A] reveal-up" style={{ transitionDelay: '100ms' }}>
              {title}
            </h2>

            <div className="mt-6 space-y-4 reveal-up" style={{ transitionDelay: '150ms' }}>
              {children}
            </div>

            {accentQuote ? (
              <div className="industry-challenge__accent reveal-up" style={{ transitionDelay: '200ms' }}>
                <p>{accentQuote}</p>
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-6 reveal-right" style={{ transitionDelay: '200ms' }}>
            <div className="industry-challenge__panel">
              {items.map((item, i) => {
                const Icon = item.icon ?? X;
                return (
                  <div
                    key={item.label}
                    className="industry-challenge__item"
                    style={{ transitionDelay: `${220 + i * 80}ms` }}
                  >
                    <span className="industry-challenge__icon">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <span className="industry-challenge__item-title">{item.label}</span>
                      {item.desc ? (
                        <span className="industry-challenge__item-desc">{item.desc}</span>
                      ) : null}
                    </div>
                    <span className="industry-challenge__item-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
