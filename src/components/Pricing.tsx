import { ScrollTextReveal } from './ScrollTextReveal';

const STARTER = ['Design Updates Every 2 Days','Mid-level Designer','SEO optimization','Monthly analytics','2x Calls Per Month','License free assets'];
const PRO     = ['Design Updates Daily','Senior-level Designer','AI Advisory Framework','Full-service Creative Team','4x Calls Per Month','License free assets'];

function Check({ white = false }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
      <path d="M3 8L6.5 11.5L13 5" stroke={white ? 'white' : '#111'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CollabBtn({ dark = false }) {
  return (
    <a
      href="#contact"
      className={`btn-pill flex items-center justify-between gap-3 font-semibold text-sm pl-6 pr-2.5 py-2.5 rounded-full w-full max-w-[200px] transition-colors ${dark ? 'bg-[#111] text-white hover:bg-[#000]' : 'bg-[#111] text-white hover:bg-[#000]'}`}
    >
      Let's Collaborate
      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </span>
    </a>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">

        <div className="text-center mb-14 sr">
          <ScrollTextReveal
            tag="h2"
            align="center"
            style={{ fontFamily:'Inter,sans-serif', fontWeight:800, fontSize:'clamp(2rem,4.5vw,4rem)', letterSpacing:'-0.04em', lineHeight:1.12 }}
            words={[
              { text:'Pick' }, { text:'the' }, { text:'plan' }, { text:'that' }, { text:'fits' },
              { text:'yo' }, { text:'ur', light:true }, { text:'start-up', serif:true },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Starter — yellow */}
          <div className="plan-card sr sr-d1 rounded-3xl p-8 flex flex-col sm:flex-row gap-8" style={{ background:'#FEF08A' }}>
            <div className="flex-1">
              <span className="inline-block bg-[#111] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Starter</span>
              <p className="text-[#555] text-sm leading-relaxed mb-8 max-w-[200px]">For companies who need design support. One request at a time</p>
              <div className="mb-8">
                <span style={{ fontFamily:'Inter,sans-serif', fontWeight:900, fontSize:'3.5rem', letterSpacing:'-0.06em', color:'#111', lineHeight:1 }}>$2500</span>
                <span className="text-[#888] text-sm ml-1">/month</span>
              </div>
              <CollabBtn />
            </div>
            <div className="flex-1">
              <p className="text-[#888] text-xs font-semibold uppercase tracking-widest mb-4">Features</p>
              <div className="space-y-3">
                {STARTER.map(f => (
                  <div key={f} className="flex items-center gap-2.5">
                    <Check /><span className="text-[#333] text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pro — indigo */}
          <div className="plan-card sr sr-d2 rounded-3xl p-8 flex flex-col sm:flex-row gap-8" style={{ background:'#4F46E5' }}>
            <div className="flex-1">
              <span className="inline-block bg-[#111]/40 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Pro</span>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[200px]">2x the speed. Great for an MVP, Web App or complex problem</p>
              <div className="mb-8">
                <span style={{ fontFamily:'Inter,sans-serif', fontWeight:900, fontSize:'3.5rem', letterSpacing:'-0.06em', color:'white', lineHeight:1 }}>$3500</span>
                <span className="text-white/50 text-sm ml-1">/month</span>
              </div>
              <CollabBtn dark />
            </div>
            <div className="flex-1">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Features</p>
              <div className="space-y-3">
                {PRO.map(f => (
                  <div key={f} className="flex items-center gap-2.5">
                    <Check white /><span className="text-white text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
