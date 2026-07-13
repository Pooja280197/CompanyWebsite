import { useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';

const FAQS = [
  {
    q: 'How much does custom software development cost?',
    a: 'Documented projects on our books range from $50,000 to $250,000, but scope drives everything — a focused MVP can cost far less. After a free consultation you get a fixed, itemized quote, and the price you approve is the price you pay.',
  },
  {
    q: 'How fast can you place developers in my team?',
    a: "Our seven-step vetting and sourcing process typically moves from requirement to onboarded engineer in days, not months. If a resource isn't the right fit, we replace them quickly — that's in the agreement, not a favor.",
  },
  {
    q: 'Do you work with startups or only enterprises?',
    a: 'Both, plus the consultants in between. Startups get ROI-driven scoping and transparent pricing; enterprises get compliance, security, and scale. Roughly a third of our engagements start as small pilots that grow.',
  },
  {
    q: 'Can you take over a project another vendor started?',
    a: 'Yes, and it\'s common. We start with a code and infrastructure audit, hand you an honest report, and propose a path — continue, refactor, or rebuild. You decide with full information.',
  },
  {
    q: 'Who owns the code and IP?',
    a: 'You do — 100% of everything we produce for you, with NDAs signed before any detailed discussion. No lock-in, no licensing traps.',
  },
  {
    q: 'How do you handle time zones?',
    a: 'A named account manager, overlap hours matched to your zone, and real-time project tracking. You will never wonder what happened this week.',
  },
  {
    q: 'What happens after launch?',
    a: "Every project includes a support window, and most clients continue on a maintenance plan — monitoring, updates, and improvements. Software that isn't maintained decays; ours doesn't get the chance.",
  },
  {
    q: 'Where are you located?',
    a: 'Headquarters: 308 Shagun Arcade, Vijay Nagar, Indore (M.P.), India — delivering to clients across North America, Europe, Asia, Australia, and the Middle East with 24/7 coverage.',
  },
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
