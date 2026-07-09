import { ScrollTextReveal } from './ScrollTextReveal';

const services = [
  {
    icon: 'https://cdn.prod.website-files.com/67b2f932468e3acae7e236f3/68e6018a556df7bc3330d227_brand.svg',
    title: 'Brand\nStrategy',
    bg: '#ede9fe',
    filter: 'invert(25%) sepia(80%) saturate(600%) hue-rotate(240deg)',
  },
  {
    icon: 'https://cdn.prod.website-files.com/67b2f932468e3acae7e236f3/68e621c968fd23ebcbec7320_webdevp.svg',
    title: 'Web\nDevelopment',
    bg: '#fce7f3',
    filter: 'invert(30%) sepia(80%) saturate(500%) hue-rotate(300deg)',
  },
  {
    icon: 'https://cdn.prod.website-files.com/67b2f932468e3acae7e236f3/68e623e24b10e2e4e2969b30_digitalmarketing.svg',
    title: 'Digital\nMarketing',
    bg: '#dbeafe',
    filter: 'invert(30%) sepia(60%) saturate(500%) hue-rotate(180deg)',
  },
  {
    icon: 'https://cdn.prod.website-files.com/67b2f932468e3acae7e236f3/68e623fa72bd543218e41cb8_uiux.svg',
    title: 'UI/UX\nDesigning',
    bg: '#ffedd5',
    filter: 'invert(50%) sepia(80%) saturate(600%) hue-rotate(10deg)',
  },
  {
    icon: 'https://cdn.prod.website-files.com/67b2f932468e3acae7e236f3/68e6242e29d540b132ed5659_analitics.svg',
    title: 'Analytics &\nReporting',
    bg: '#dcfce7',
    filter: 'invert(40%) sepia(60%) saturate(500%) hue-rotate(100deg)',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full">

        <div className="text-center mb-14 sr w-full max-w-[1100px] mx-auto px-2">
          <ScrollTextReveal
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
              { text: 'Where' },
              { text: 'innovation' },
              { text: 'meets' },
              { text: 'aesthetics'},
            ]}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card sr sr-d${i + 1} rounded-2xl p-6 cursor-pointer`}
              style={{ background: s.bg, minHeight: 180 }}
            >
              <img
                src={s.icon}
                alt={s.title}
                className="service-card__icon w-10 h-10 mb-8"
                style={{ filter: s.filter }}
              />
              <div className="service-card__body">
                <p
                  className="service-card__title text-gray-800 text-lg font-semibold leading-snug whitespace-pre-line"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {s.title}
                </p>
                <span className="service-card__arrow" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dark action banner */}
        <div className="bg-[#111] rounded-2xl px-8 py-7 sm:px-10 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sr sr-d5">
          <div>
            <p
              className="text-white font-semibold text-xl sm:text-2xl"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.25, letterSpacing: '-0.01em' }}
            >
              See Our Work in Action.
            </p>
            <p className="text-[#888] text-sm sm:text-base mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Start Your Creative Journey with Us!
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="flex items-center gap-2.5 bg-white text-[#111] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#f5f5f5] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Let's Collaborate
              <span className="w-7 h-7 bg-[#111] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </span>
            </a>
            <a
              href="#work"
              className="flex items-center gap-2.5 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-full hover:border-white/60 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View Portfolio
              <span className="w-7 h-7 border border-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
