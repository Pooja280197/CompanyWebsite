import { useEffect, useRef } from 'react';
import { ScrollTextReveal } from './ScrollTextReveal';

const CREATIVITY = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67aadb9ec80cd595bb214692_Magic%20Stick.svg';
const INNOVATION = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67aaddc4c79cc5141322f4db_Frame.svg';
const STRATEGY   = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67aaddc4819d3c15ab088565_Frame%20(1).svg';

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

const PILLS = [
  { icon: CREATIVITY, label: 'Creativity', bg: '#ede9fe', color: '#7C3AED', filter: 'invert() sepia(60%) saturate(500%) hue-rotate(240deg)' },
  { icon: INNOVATION, label: 'Innovation', bg: '#dbeafe', color: '#2563EB', filter: 'invert(30%) sepia(60%) saturate(500%) hue-rotate(180deg)' },
  { icon: STRATEGY,   label: 'Strategy',   bg: '#fef3c7', color: '#D97706', filter: 'invert(50%) sepia(80%) saturate(500%) hue-rotate(10deg)'   },
];

const STATS = [
  { n: 500, percent: false, label: 'Total Projects Completed' },
  { n: 95, percent: true, label: 'Client Retention Rate' },
  { n: 15, percent: false, label: 'Countries Served' },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-[1140px] mx-auto w-full">

        <div className="text-center mb-10 sr w-full max-w-[1000px] mx-auto px-2">
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

        <div className="flex flex-wrap items-center justify-center gap-4 mb-20 sr sr-d1">
          {PILLS.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-3 px-7 py-3.5 rounded-full cursor-default"
              style={{ background: p.bg }}
            >
              <img src={p.icon} alt="" className="w-6 h-6" style={{ filter: p.filter }} />
              <span className="font-serif-italic text-xl" style={{ color: p.color }}>{p.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#efefef] min-w-0">
          {STATS.map(({ n, percent, label }, i) => (
            <div key={label} className={`px-4 sm:px-8 py-12 text-center sr sr-d${i + 1} min-w-0`}>
              <div
                className="text-[#1b1d1e] mb-3 inline-flex items-start justify-center max-w-full"
                style={{
                  fontFamily: 'Inter,sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(4.5rem, 9vw, 8rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                <Counter target={n} />
                {percent && <span>%</span>}
                <span className="self-start" style={STAT_SUFFIX_STYLE}>+</span>
              </div>
              <p className="text-[#666] text-base font-normal">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
