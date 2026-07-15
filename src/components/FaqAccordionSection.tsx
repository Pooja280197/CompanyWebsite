import { useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';

export type FaqEntry = { q: string; a: string };

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const inner = innerRef.current;
    const panel = panelRef.current;
    if (!inner || !panel) return;

    const measure = () => {
      const prev = panel.style.maxHeight;
      panel.style.maxHeight = 'none';
      setHeight(inner.scrollHeight);
      panel.style.maxHeight = prev;
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(inner);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [answer]);

  return (
    <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
      <button type="button" onClick={onToggle} className="faq-trigger" aria-expanded={isOpen}>
        <span className="faq-question">{question}</span>
        <span className={`faq-chevron${isOpen ? ' faq-chevron--open' : ''}`}>
          <ChevronDown size={18} strokeWidth={2} />
        </span>
      </button>
      <div
        ref={panelRef}
        className="faq-panel"
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
        aria-hidden={!isOpen}
      >
        <div ref={innerRef} className="faq-panel__inner">
          <p className="faq-answer">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/** Product / pillar-style FAQ accordion — used across industry pages */
export function FaqAccordionSection({
  items,
  headingWords = [
    { text: 'Common' },
    { text: 'questions,' },
    { text: 'straight' },
    { text: 'answers' },
  ],
}: {
  items: FaqEntry[];
  headingWords?: { text: string }[];
}) {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 px-6" aria-labelledby="faq-heading">
      <div className="mx-auto w-full max-w-[860px]">
        <div className="mb-12 text-center">
          <ScrollTextReveal
            id="faq-heading"
            tag="h2"
            align="center"
            className="w-full"
            wordGap="0.2em"
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.25,
              maxWidth: '100%',
            }}
            words={headingWords}
          />
        </div>

        <div className="flex flex-col gap-3">
          {items.map((faq, i) => (
            <FaqItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={faqOpen === i}
              onToggle={() => setFaqOpen((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
