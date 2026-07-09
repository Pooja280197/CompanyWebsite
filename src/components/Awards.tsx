import { ScrollTextReveal } from './ScrollTextReveal';

const AWARDS = [
  {
    logo: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/69030f2cac395abeb9c932df_lineicons--webflow.svg',
    name: 'Webflow Awards',
    year: '2025',
    desc: 'Celebrated for cutting-edge interaction design and seamless user experiences.',
  },
  {
    logo: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67af23d542aa17b59f75e9f2_icon-dribbble.svg',
    name: 'Dribbble Awards',
    year: '2024',
    desc: 'Recognized for creative excellence and innovative design solutions.',
  },
  {
    logo: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/69031081709697ee143941dc_logos--dailydev-icon.svg',
    name: 'awwwards Awards',
    year: '2024',
    desc: 'Honored with the Best Website Design for creativity, usability, and innovation.',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="bg-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">

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
              { text: 'Accolades' }, { text: 'and' }, { text: 'achievements' },
              { text: 'celebrating' }, { text: 'our' },
              { text: 'design' },
              { text: 'excellence' },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {AWARDS.map((a, i) => (
            <div
              key={a.name}
              className={`award-card sr sr-d${i + 1} group flex flex-col rounded-3xl border border-[#ececec] p-9 sm:p-10 min-h-[280px] sm:min-h-[300px]`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-[#f5f5f5] rounded-2xl flex items-center justify-center group-hover:bg-[#111] transition-colors duration-300">
                  <img src={a.logo} alt={a.name} className="w-8 h-8 group-hover:invert transition-all duration-300" />
                </div>
                <span
                  className="text-[#bbb] font-semibold"
                  style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem' }}
                >
                  {a.year}
                </span>
              </div>
              <p
                className="text-[#111] font-semibold mb-3 leading-snug"
                style={{ fontFamily: 'Inter,sans-serif', fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)' }}
              >
                {a.name}
              </p>
              <p
                className="text-[#777] leading-relaxed mt-auto"
                style={{ fontFamily: 'Inter,sans-serif', fontSize: 'clamp(0.975rem, 1.2vw, 1.0625rem)', lineHeight: 1.65 }}
              >
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
