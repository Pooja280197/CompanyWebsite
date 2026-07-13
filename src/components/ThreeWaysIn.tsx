import { type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Boxes, Package, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';

const WAYS = [
  {
    step: '01',
    title: 'We build it',
    description: 'Full-cycle delivery on a fixed, itemized quote.',
    href: '/whatWeDo/productEngineering',
    cta: 'Product engineering',
    accent: '#4f46e5',
    glow: 'rgba(79, 70, 229, 0.22)',
    tint: 'rgba(79, 70, 229, 0.06)',
    icon: Boxes,
  },
  {
    step: '02',
    title: 'You run our product',
    description: 'Customized and implemented for your operation.',
    href: '/product/rexo-erp',
    cta: 'Explore products',
    accent: '#059669',
    glow: 'rgba(5, 150, 105, 0.22)',
    tint: 'rgba(5, 150, 105, 0.06)',
    icon: Package,
    products: [
      { label: 'Rexo ERP', href: '/product/rexo-erp' },
      { label: 'CleanPlan', href: '/product/cleanplan' },
      { label: 'Education ERP', href: '/product/education-erp' },
    ],
  },
  {
    step: '03',
    title: 'We join your team',
    description: 'Engineers embedded under your direction, scaled to demand.',
    href: '/whatWeDo/staffAugmentation',
    cta: 'Team extension',
    accent: '#d97706',
    glow: 'rgba(217, 119, 6, 0.22)',
    tint: 'rgba(217, 119, 6, 0.06)',
    icon: Users,
  },
] as const;

function WayIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon size={18} strokeWidth={1.85} aria-hidden="true" />;
}

export default function ThreeWaysIn() {
  return (
    <section className="ways-in px-6 py-14 overflow-hidden" aria-labelledby="ways-in-heading">
      <div className="ways-in__grid" aria-hidden="true" />
      <div className="ways-in__glow ways-in__glow--left" aria-hidden="true" />
      <div className="ways-in__glow ways-in__glow--right" aria-hidden="true" />

      <div className="ways-in__frame mx-auto w-full max-w-[1180px]">
        <div className="ways-in__head sr">
          <ScrollTextReveal
            id="ways-in-heading"
            tag="h2"
            align="center"
            className="w-full"
            wordGap="0.22em"
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.25,
              maxWidth: '100%',
            }}
            words={[{ text: 'Three' }, { text: 'ways' }, { text: 'in' }]}
          />
          <p className="ways-in__eyebrow sr sr-d1">Choose your engagement model</p>
        </div>

        <div className="ways-in__lanes">
          <div className="ways-in__rail" aria-hidden="true">
            <span className="ways-in__rail-line" />
          </div>

          {WAYS.map((way, index) => (
            <article
              key={way.step}
              className="ways-in__lane sr-from-left"
              style={
                {
                  '--ways-accent': way.accent,
                  '--ways-glow': way.glow,
                  '--ways-tint': way.tint,
                  transitionDelay: `${index * 0.08}s`,
                } as CSSProperties
              }
            >
              <div className="ways-in__node">
                <span className="ways-in__node-ring" aria-hidden="true" />
                <span className="ways-in__node-core">
                  <WayIcon icon={way.icon} />
                </span>
                <span className="ways-in__node-step">{way.step}</span>
              </div>

              <div className="ways-in__body">
                <h3 className="ways-in__title">{way.title}</h3>
                <p className="ways-in__desc">
                  {'products' in way ? (
                    <>
                      <Link to={way.products[0].href} className="ways-in__product">
                        {way.products[0].label}
                      </Link>
                      <Link to={way.products[1].href} className="ways-in__product">
                        {way.products[1].label}
                      </Link>
                      <Link to={way.products[2].href} className="ways-in__product">
                        {way.products[2].label}
                      </Link>
                      <span className="ways-in__desc-note">{way.description}</span>
                    </>
                  ) : (
                    way.description
                  )}
                </p>

                <Link to={way.href} className="ways-in__cta">
                  <span>{way.cta}</span>
                  <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
