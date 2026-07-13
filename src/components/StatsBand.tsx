import { useEffect, useRef } from 'react';
import { ScrollTextReveal } from './ScrollTextReveal';

const STATS = [
  { value: 8, suffix: '+', label: 'Years (est. 2017)', tone: 'blue' },
  { value: 500, suffix: '+', label: 'Projects Completed', tone: 'violet' },
  { value: 95, suffix: '%', label: 'Client Retention', tone: 'emerald' },
  { value: 100, suffix: '+', label: 'Verified IT Professionals', tone: 'sky' },
  { value: 20, suffix: '+', label: 'Technology Stacks', tone: 'amber' },
  { value: 15, suffix: '+', label: 'Global Locations', tone: 'rose' },
] as const;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function StatCounter({ value, startDelay = 0 }: { value: number; startDelay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || ran.current) return;
        ran.current = true;

        const duration = 3000;

        const run = () => {
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            el.textContent = String(Math.round(value * easeOutCubic(progress)));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        };

        window.setTimeout(run, startDelay);
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, startDelay]);

  return (
    <span ref={ref} className="tabular-nums">
      0
    </span>
  );
}

export default function StatsBand() {
  return (
    <section className="stats-band bg-white px-6 py-12 overflow-hidden" aria-labelledby="stats-band-heading">
      <div className="mx-auto w-full max-w-[1200px]">

        <div className="stats-band__frame">
          <div className="stats-band__head sr">
            <ScrollTextReveal
              id="stats-band-heading"
              tag="h2"
              align="center"
              className="w-full"
              wordGap="0.22em"
              style={{
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                letterSpacing: '0.02em',
                lineHeight: 1.25,
                maxWidth: '100%',
              }}
              words={[{ text: 'Stats' }, { text: 'band' }]}
            />
            <p className="stats-band__subtitle sr sr-d2">
              8+ years since 2017 · 500+ projects · 95% retention · 100+ professionals · 20+ stacks · 15+ locations
            </p>
          </div>

          <div className="stats-band__row sr-d1">
            <div className="stats-band__track">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`stats-band__item stats-band__item--${stat.tone} stats-band__reveal sr-d${Math.min(index + 1, 6)}`}
              >
                <div className="stats-band__value">
                  <StatCounter value={stat.value} startDelay={index * 380 + 750} />
                  {stat.suffix === '%' ? (
                    <span>%</span>
                  ) : (
                    <span className="stats-band__suffix">+</span>
                  )}
                </div>
                <p className="stats-band__label">{stat.label}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
