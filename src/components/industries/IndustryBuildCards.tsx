import { useEffect, useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { CSSProperties } from 'react';

export type IndustryBuildCardItem = {
  title: string;
  desc: string;
  color: string;
  number?: string;
  icon?: LucideIcon;
};

type IndustryBuildCardsProps = {
  items: IndustryBuildCardItem[];
};

export function IndustryBuildCards({ items }: IndustryBuildCardsProps) {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-inview');
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="industry-build-strip" ref={stripRef}>
      {items.map((item, i) => {
        const capTop = i % 2 === 0;
        const Icon = item.icon;
        const num = item.number ?? String(i + 1).padStart(2, '0');

        return (
          <article
            key={`${num}-${item.title}`}
            className={`industry-build-card ${
              capTop ? 'industry-build-card--cap-top' : 'industry-build-card--cap-bottom'
            }`}
            style={
              {
                '--ib-accent': item.color,
                '--ib-delay': `${i * 160}ms`,
                zIndex: items.length - i,
              } as CSSProperties
            }
          >
            {capTop ? <div className="industry-build-card__cap" aria-hidden="true" /> : null}

            <div className="industry-build-card__body">
              {Icon ? (
                <span className="industry-build-card__icon">
                  <Icon size={18} strokeWidth={2} />
                </span>
              ) : null}
              <span className="industry-build-card__num">{num}</span>
              <h3 className="industry-build-card__title">{item.title}</h3>
              <div className="industry-build-card__rule" aria-hidden="true" />
              <p className="industry-build-card__desc">{item.desc}</p>
            </div>

            {!capTop ? <div className="industry-build-card__cap" aria-hidden="true" /> : null}
          </article>
        );
      })}
    </div>
  );
}
