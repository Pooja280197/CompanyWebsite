import { useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';

const FAQS = [
  { q: 'What services does NSS Agency offer?', a: 'We offer Brand Strategy, Web Development, Digital Marketing, UI/UX Design, and Analytics & Reporting — all tailored to help startups grow fast.' },
  { q: 'How long does a typical project take?', a: 'Brand identity projects take 2–4 weeks. A full website typically takes 6–12 weeks. We share detailed timelines during our kickoff call.' },
  { q: 'How is pricing structured at NSS Agency?', a: 'We offer two subscription plans — Starter at $2500/month and Pro at $3500/month. Both plans include dedicated designer access and regular updates.' },
  { q: 'Do you offer ongoing support after project completion?', a: 'Yes. We offer monthly retainers for continuous design support, updates, and performance optimization.' },
  { q: 'How often will I receive updates on my project?', a: 'Starter clients receive updates every 2 days. Pro clients receive daily updates plus priority Slack access.' },
  { q: 'How do I get started with NSS Agency?', a: "Click \"Let's Collaborate\" anywhere on this page. We'll schedule a free 30-minute discovery call to understand your needs and recommend the best plan." },
];

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
      <button
        type="button"
        onClick={onToggle}
        className="faq-trigger"
        aria-expanded={isOpen}
      >
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

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-20 bg-white py-16 px-6">
      <div className="max-w-[860px] mx-auto">

        <div className="text-center mb-14 sr w-full mx-auto px-2">
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
              { text: 'Got' }, { text: 'questions?' },
              { text: "We've" }, { text: 'got' }, { text: 'answers' },
            ]}
          />
        </div>

        <div className="relative z-20 flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={open === i}
              onToggle={() => setOpen((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
