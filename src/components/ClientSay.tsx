import { Link } from 'react-router-dom';
import { ScrollTextReveal } from './ScrollTextReveal';

const REVIEWS = [
  {
    quote:
      'NSS transformed CleanPlan into a seamless SaaS platform… making facility management smarter, faster, and more reliable.',
    name: 'Prakash Somnarthe',
    initials: 'PS',
    role: 'Client',
    product: { label: 'CleanPlan', href: '/product/cleanplan' },
  },
  {
    quote:
      'NSS enhanced Click Daily with AI-driven insights, optimizing customer engagement and sales.',
    name: 'Alex Ruiz',
    initials: 'AR',
    role: 'Click Daily',
  },
  {
    quote: 'NSS built a robust data pipeline, transforming raw data into real-time insights.',
    name: 'Jin Ae Soo',
    initials: 'JAS',
    role: 'Data & Analytics',
  },
] as const;

export default function ClientSay() {
  return (
    <section className="client-say" aria-labelledby="client-say-heading">
      <div className="client-say__inner mx-auto w-full max-w-[1180px] px-6">
        <div className="client-say__head sr">
          <ScrollTextReveal
            id="client-say-heading"
            tag="h2"
            align="center"
            className="w-full client-say__title"
            wordGap="0.2em"
            scrollFromColor="#6b7280"
            scrollToColor="#ffffff"
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.25,
              maxWidth: '100%',
            }}
            words={[{ text: 'What' }, { text: 'clients' }, { text: 'say' }]}
          />
          <p className="client-say__lede sr sr-d1">
            Real feedback from teams we&apos;ve built products, platforms, and pipelines with.
          </p>
        </div>

        <div className="client-say__grid">
          {REVIEWS.map((review, index) => (
            <figure
              key={review.name}
              className={`client-say__card sr-from-bottom sr-d${index + 1}`}
            >
              <span className="client-say__mark" aria-hidden="true">
                &ldquo;
              </span>

              <blockquote className="client-say__quote">
                <p>{review.quote}</p>
              </blockquote>

              <figcaption className="client-say__person">
                <div className="client-say__avatar" aria-hidden="true">
                  {review.initials}
                </div>
                <div className="client-say__meta">
                  <cite className="client-say__name">{review.name}</cite>
                  <p className="client-say__role">
                    {review.role}
                    {'product' in review && review.product ? (
                      <>
                        {' · '}
                        <Link to={review.product.href} className="client-say__product">
                          {review.product.label}
                        </Link>
                      </>
                    ) : null}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
