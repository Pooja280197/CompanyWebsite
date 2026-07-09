import { ScrollTextReveal } from './ScrollTextReveal';

const TWITTER  = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67addc1083998f646851a971_twitter.png';
const LINKEDIN = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67addc10396a59bde77d300f_linkedin.png';

const team = [
  {
    name: 'Prashant Rajput',
    role: 'Angular Developer',
    img: '/shan.png',
    bg: '#4F46E5',
    shape: 'blob',
  },
  {
    name: 'Ana Belić',
    role: 'UX Designer',
    img: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67adda75ce2c9d6527fac25e_profile2.png',
    bg: '#F97316',
    shape: 'arch',
  },
  {
    name: 'Brian Hanley',
    role: 'Brand Strategist',
    img: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67adda73f2e2b31cbe6b22f6_profile3.png',
    bg: '#EAB308',
    shape: 'circle',
  },
  {
    name: 'Darko Stanković',
    role: 'Web Developer',
    img: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/68e632a92c0c4f4cb49995b6_creative_img_4.webp',
    bg: '#06B6D4',
    shape: 'blob',
  },
];

function ShapeBg({ bg, shape }: { bg: string; shape: string }) {
  const r = shape === 'circle' ? '50%'
          : shape === 'arch'   ? '50% 50% 0 0 / 60% 60% 0 0'
          : '40% 60% 60% 40% / 60% 30% 70% 40%';
  return <div className="team-shape absolute inset-x-4 top-4 bottom-8" style={{ background: bg, borderRadius: r }} />;
}

export default function Team() {
  return (
    <section id="team" className="relative z-20 bg-white py-16 px-6">
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
              { text: 'Meet' },
              { text: 'the' },
              { text: 'creative' },
              { text: 'minds' },
              { text: 'behind' },
              { text: 'our' },
              { text: 'success' },
            ]}
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <div key={m.name} className={`team-card sr sr-d${i + 1} group`}>
              <div className="team-img-wrap relative rounded-2xl overflow-hidden mb-4" style={{ aspectRatio: '3/4' }}>
                <ShapeBg bg={m.bg} shape={m.shape} />
                <img src={m.img} alt={m.name} className="team-photo relative z-10 w-full h-full object-cover object-top" />
                <div className="team-social-bar absolute bottom-3 left-3 z-20 flex gap-2">
                  <a href="#" onClick={e => e.preventDefault()} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <img src={TWITTER} alt="Twitter" className="w-4 h-4" />
                  </a>
                  <a href="#" onClick={e => e.preventDefault()} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <img src={LINKEDIN} alt="LinkedIn" className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-[#111] font-bold text-sm">{m.name}</p>
              <p className="text-[#999] text-xs mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
