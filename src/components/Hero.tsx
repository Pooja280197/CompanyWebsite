import { ScrollTextReveal } from './ScrollTextReveal';

const AVATARS = [
  'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67a9ddf66ed69f30d2d060eb_Ellipse%2021.jpg',
  'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67a9ddf65b220093f413d434_Ellipse%2022.jpg',
  'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67a9ddf59fa3d48caaee99e7_Ellipse%2023.jpg',
  'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67a9ddf502d7968dd3515d0d_Ellipse%2024.jpg',
];

const LETTER_INTERVAL = 78;

const HERO_LINES = [
  {
    words: [{ text: 'Software', serif: true }, { text: 'that' }, { text: 'ships.' }],
    letterCount: 18,
    align: 'left' as const,
  },
  {
    words: [{ text: 'AI', serif: true }, { text: 'that' }, { text: 'works.' }],
    letterCount: 12,
    align: 'center' as const,
  },
  {
    words: [{ text: 'Teams', serif: true }, { text: 'that' }, { text: 'deliver.' }],
    letterCount: 17,
    align: 'left' as const,
  },
].map((line, i, arr) => ({
  ...line,
  startDelay: arr.slice(0, i).reduce((sum, l) => sum + l.letterCount, 0) * LETTER_INTERVAL,
}));

export default function Hero() {
  return (
    <section id="home" className="hero-bg min-h-screen flex flex-col justify-center pt-32 pb-12 px-6">
      <div className="max-w-[900px] mx-auto w-full text-center">

        <h1
          className="a1 mb-8 w-full"
          style={{
            fontFamily: 'Inter,sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(2.75rem,6.5vw,4.75rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: '#1b1d1e',
          }}
        >
          {HERO_LINES.map((line, i) => {
            const reveal = (
              <ScrollTextReveal
                tag="span"
                align={line.align}
                animate="words"
                textColor="#1b1d1e"
                letterInterval={LETTER_INTERVAL}
                startDelay={line.startDelay}
                style={{
                  display: 'block',
                  width: 'fit-content',
                  maxWidth: '100%',
                  textAlign: line.align,
                  whiteSpace: 'nowrap',
                }}
                words={[...line.words]}
              />
            );

            const rowStyle = { marginBottom: i < HERO_LINES.length - 1 ? '0.12em' : undefined };

            if (line.align === 'center') {
              return (
                <span key={i} className="flex w-full justify-center" style={rowStyle}>
                  {reveal}
                </span>
              );
            }

            return (
              <span key={i} className="block mx-auto w-fit max-w-full" style={rowStyle}>
                {reveal}
              </span>
            );
          })}
        </h1>

        <p className="a2 text-[#666] text-base font-normal leading-[1.75] tracking-[0.01em] mx-auto mb-11 max-w-[50rem]">
        We engineer digital products, production-grade AI, and cloud platforms for companies in 15+ countries — and embed vetted engineers inside teams that need to move faster. 500+ projects since 2017. 95% of clients stay. [ See Our Work] 
        </p>

        <div className="a3 flex items-center justify-center gap-6 flex-wrap">
          <a
            href="/contact-us"
            className="btn-pill group flex items-center gap-12 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700 text-white font-semibold pl-7 pr-2.5 py-2.5 rounded-full hover:brightness-105 transition-all"
          >
            <span className="text-base whitespace-nowrap">Get Started</span>
            <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#1d4ed8" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {AVATARS.map((src, i) => (
                <img key={i} src={src} alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#F59E0B] text-sm leading-none">★</span>
                ))}
              </div>
              <p className="text-[#888] text-xs font-medium">Trusted by 200+ clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="a4 max-w-[900px] mx-auto w-full mt-24 px-2">
        <div className="flex items-center gap-4 w-full mb-3">
          <span className="flex-1 h-px bg-black/30" />
          <p className="text-gray-700 text-md shrink-0 text-center">
          Trusted by government research institutions, data companies, and growing enterprises worldwide.
          </p>
          <span className="flex-1 h-px bg-black/30" />
        </div>
      </div>
    </section>
  );
}
