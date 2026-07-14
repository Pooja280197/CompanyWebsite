import { useEffect, useRef } from 'react';
import { ScrollTextReveal } from './ScrollTextReveal';

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || ran.current) return;
      ran.current = true;
      el.classList.add('stat-visible');
      let v = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        v = Math.min(v + step, target);
        el.textContent = String(Math.floor(v));
        if (v >= target) clearInterval(timer);
      }, 18);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref} className="tabular-nums">0</span>;
}

const STAT_SUFFIX_STYLE: React.CSSProperties = {
  fontSize: '0.32em',
  marginTop: '0.18em',
  marginLeft: '0.06em',
};

const STATS = [
  { n: 8,   percent: false, label: 'Years (est. 2017)',           accent: '#C2410C' },
  { n: 500, percent: false, label: 'Projects Completed',          accent: '#5B21B6' },
  { n: 95,  percent: true,  label: 'Client Retention',            accent: '#065F46' },
  { n: 100, percent: false, label: 'Verified IT Professionals',   accent: '#0369A1' },
  { n: 20,  percent: false, label: 'Technology Stacks',           accent: '#92400E' },
  { n: 15,  percent: false, label: 'Global Locations',            accent: '#9F1239' },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-8 px-6 overflow-hidden">
      <div className="max-w-[1140px] mx-auto w-full">

        <div className="text-center mb-8 sr w-full max-w-[1000px] mx-auto px-2">
          <ScrollTextReveal
            tag="h2"
            align="center"
            className="w-full"
            wordGap="0.24em"
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.65rem, 3.5vw, 2.75rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.22,
              maxWidth: '100%',
            }}
            words={[
              { text: 'Crafting' }, { text: 'exceptional,' }, { text: 'well' },
              { text: 'experienced' }, { text: '&' }, { text: 'technology' },
              { text: 'driven' }, { text: 'strategies' }, { text: 'to' },
              { text: 'drive' }, { text: 'impactful' },
              { text: 'results' }, { text: 'with' },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-w-0 divide-y sm:divide-y-0 divide-[#efefef]">
          {STATS.map(({ n, percent, label, accent }, i) => (
            <div
              key={label}
              className={`px-4 sm:px-6 py-6 text-center sr sr-d${Math.min(i + 1, 6)} min-w-0 sm:border-r sm:border-[#efefef] ${
                i % 2 === 1 ? 'sm:border-r-0' : ''
              } lg:border-r lg:border-[#efefef] ${
                i % 3 === 2 ? 'lg:border-r-0' : ''
              } ${i < 3 ? 'lg:border-b lg:border-[#efefef]' : ''}`}
            >
              <div
                className="text-[#1b1d1e] mb-3 inline-flex items-start justify-center max-w-full"
                style={{
                  fontFamily: 'Inter,sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                <Counter target={n} />
                {percent ? (
                  <span>%</span>
                ) : (
                  <span className="self-start" style={STAT_SUFFIX_STYLE}>+</span>
                )}
              </div>
              <p className="text-base font-semibold" style={{ color: accent }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
