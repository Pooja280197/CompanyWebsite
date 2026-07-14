import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';
import { titleToScrollWords } from './titleToScrollWords';

export interface CaseStudyCtaProps {
  sectionId: string;
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  footnote?: string;
}

export function CaseStudyCta({
  sectionId,
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref = '/#case-studies',
  secondaryLabel = 'View All Case Studies',
  footnote = "No pressure. Just clarity on what's possible.",
}: CaseStudyCtaProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -10px 0px' },
    );

    root.querySelectorAll('.sr-from-bottom').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sf-cta cta-bg border-t border-gray-100 px-4 sm:px-6"
      aria-labelledby={sectionId}
    >
      <div className="sf-cta__inner mx-auto w-full max-w-[960px] text-center">
        <ScrollTextReveal
          id={sectionId}
          tag="h2"
          align="center"
          className="sf-cta__title text-gray-900"
          wordGap="0.2em"
          scrollFromColor="#d1d1d1"
          scrollToColor="#111827"
          words={titleToScrollWords(title)}
        />
        <p className="sf-cta__subtitle mt-6 text-gray-600 sr-from-bottom sr-d2">{subtitle}</p>

        <div className="sf-cta__actions sr-from-bottom sr-d3">
          <Link
            to={primaryHref}
            className="pillar-cta-btn inline-flex items-center gap-2.5 px-9 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
          >
            {primaryLabel}
            <ArrowRight size={18} strokeWidth={2.25} />
          </Link>
          <Link
            to={secondaryHref}
            className="sf-cta__secondary inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md"
          >
            {secondaryLabel}
          </Link>
        </div>

        <p className="sf-cta__footnote sr-from-bottom sr-d4">{footnote}</p>
      </div>
    </section>
  );
}
