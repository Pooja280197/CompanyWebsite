import { ScrollTextReveal } from './ScrollTextReveal';

export default function CTA() {
  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="cta-bg rounded-3xl px-8 py-20 lg:px-16 text-center sr" style={{ border:'1px solid rgba(0,0,0,0.04)' }}>

          <div className="mb-5 w-full max-w-[1100px] mx-auto px-2">
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
                { text: 'Innovative' },
                { text: 'Solutions' },
                { text: 'for' },
                { text: 'bold' },
                { text: 'brands' },
              ]}
            />
          </div>

          <p className="text-[#666] text-base leading-relaxed mx-auto mb-10 max-w-lg">
            Looking to elevate your brand? We craft immersive experiences that captivate, engage, and
            make your business unforgettable in every interaction.
          </p>

          <a href="mailto:hello@nssagency.com" className="nav-cta-btn nav-cta-btn--cta">
            <span className="nav-cta-btn__label">Let's craft together</span>
            <span className="nav-cta-btn__icon">
              <svg viewBox="0 0 10 10" fill="none">
                <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
