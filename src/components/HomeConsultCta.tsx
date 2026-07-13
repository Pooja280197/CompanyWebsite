import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, PhoneCall, Scale, FileCheck } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';

const PHONE_DISPLAY = '+91 88780 03344';
const PHONE_TEL = '+918878003344';
const EMAIL = 'info@nagarsoftwaresolution.com';

const TITLE_WORDS = [
  { text: 'Tell' },
  { text: 'us' },
  { text: "what's" },
  { text: 'slowing' },
  { text: 'you' },
  { text: 'down.' },
] as const;

const STEPS = [
  {
    num: '01',
    title: '30-minute call',
    text: 'We hear the problem before pitching anything.',
    icon: PhoneCall,
  },
  {
    num: '02',
    title: 'Honest assessment',
    text: 'A clear take on fit, scope, and what not to build.',
    icon: Scale,
  },
  {
    num: '03',
    title: 'Fixed quote — or a straight answer',
    text: "Itemized if we're right. Straight honesty if we're not.",
    icon: FileCheck,
  },
] as const;

export default function HomeConsultCta() {
  return (
    <section className="home-consult hero-bg" aria-labelledby="home-consult-heading">
      <div className="home-consult__inner mx-auto w-full max-w-[1180px] px-6 py-16 sm:py-20">
        <div className="home-consult__head sr mb-10 sm:mb-12">
          <ScrollTextReveal
            id="home-consult-heading"
            tag="h2"
            align="center"
            className="home-consult__title w-full"
            wordGap="0.16em"
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2.1rem, 4.6vw, 3.4rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.12,
              maxWidth: '100%',
              color: '#0f172a',
            }}
            words={[...TITLE_WORDS]}
          />
        </div>

        <div className="home-consult__grid">
          <ol className="home-consult__flow" aria-label="What happens next">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.num}
                  className={`home-consult__step sr sr-d${index + 1}`}
                >
                  <div className="home-consult__step-rail" aria-hidden="true">
                    <span className="home-consult__step-node">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    {index < STEPS.length - 1 ? (
                      <span className="home-consult__step-line" />
                    ) : null}
                  </div>
                  <div className="home-consult__step-body">
                    <span className="home-consult__step-num">{step.num}</span>
                    <h3 className="home-consult__step-title">{step.title}</h3>
                    <p className="home-consult__step-text">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="home-consult__aside sr sr-d2">
            <a href={`tel:${PHONE_TEL}`} className="home-consult__chip">
              <span className="home-consult__chip-icon" aria-hidden="true">
                <Phone size={15} />
              </span>
              <span>{PHONE_DISPLAY}</span>
            </a>

            <a href={`mailto:${EMAIL}`} className="home-consult__chip">
              <span className="home-consult__chip-icon" aria-hidden="true">
                <Mail size={15} />
              </span>
              <span>{EMAIL}</span>
            </a>

            <Link
              to="/contactUs"
              className="home-consult__cta inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-amber-400 via-orange-500 to-orange-600 px-6 py-3.5 text-[0.92rem] font-semibold text-white shadow-[0_8px_22px_rgba(249,115,22,0.28)] transition-all duration-250 hover:-translate-y-0.5 hover:gap-2.5 hover:shadow-[0_12px_28px_rgba(249,115,22,0.34)]"
            >
              Book a Free Consultation
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
