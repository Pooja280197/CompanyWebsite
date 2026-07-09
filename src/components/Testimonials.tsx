import { useState } from 'react';

const IMG = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/68e6406dcd9a5a5b917efa2d_image%205.png';

const ITEMS = [
  { quote: 'Awake Design Agency brought our ideas to life with exceptional creativity and precision, exceeding expectations.', name: 'Sarah Mitchell', role: 'Marketing Head at TalentConnect', img: IMG },
  { quote: "Their creativity and attention to detail transformed our brand completely! We saw 3× growth in engagement.", name: 'James Carter', role: 'Founder, Academy.co', img: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67a9ddf65b220093f413d434_Ellipse%2022.jpg' },
  { quote: "Awake's expertise transformed my vision into success with creativity, precision, and a deep understanding of my goals.", name: 'Sarah Mitchell', role: 'Founder of Chipsland', img: IMG },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = ITEMS[idx];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="sr">
            <p className="text-[#aaa] text-xs font-semibold uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="text-[#111] mb-6 leading-tight" style={{ fontFamily:'Inter,sans-serif', fontWeight:800, fontSize:'clamp(1.8rem,3.5vw,2.8rem)', letterSpacing:'-0.03em' }}>
              What our satisfied customers are saying about us
            </h2>

            <div className="inline-flex items-center gap-2 bg-[#111] rounded-full px-5 py-2.5 mb-8">
              <span className="text-white font-bold">91%</span>
              <span className="text-white/50 text-sm">clients recommend our design services.</span>
            </div>

            <p className="text-[#666] text-base leading-relaxed mb-8">
              Their creativity and attention to detail transformed our brand completely!
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIdx((idx - 1 + ITEMS.length) % ITEMS.length)}
                className="w-11 h-11 border border-[#e5e5e5] rounded-full flex items-center justify-center hover:bg-[#111] hover:border-[#111] transition-all duration-300 group"
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="text-[#111] group-hover:text-white">
                  <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button
                onClick={() => setIdx((idx + 1) % ITEMS.length)}
                className="w-11 h-11 bg-[#111] rounded-full flex items-center justify-center hover:bg-[#333] transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2L10 7L5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <span className="text-[#ccc] text-sm ml-1">
                {String(idx+1).padStart(2,'0')} / {String(ITEMS.length).padStart(2,'0')}
              </span>
            </div>
          </div>

          {/* Right card */}
          <div className="sr sr-d2" key={idx}>
            <div className="bg-[#111] rounded-3xl p-8 lg:p-10">
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_,i) => <span key={i} className="text-[#F59E0B] text-xl leading-none">★</span>)}
              </div>
              <blockquote className="text-white mb-8 leading-relaxed" style={{ fontFamily:'Inter,sans-serif', fontWeight:600, fontSize:'clamp(1rem,1.8vw,1.3rem)', letterSpacing:'-0.01em' }}>
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#555] text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
