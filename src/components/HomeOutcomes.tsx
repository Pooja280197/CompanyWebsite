import { type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, CloudCog, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';

type Outcome = {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
  accent: string;
  soft: string;
};

const OUTCOMES: Outcome[] = [
  {
    icon: Cpu,
    title: 'Smart Factory Platform',
    text: 'A century-old manufacturer was tracking machines across divisions by hand. We built a cloud platform with live dashboards and predictive maintenance. Operations 30% faster. Costs down 40%.',
    href: '/our-work/smart-factory-iot',
    accent: '#7c3aed',
    soft: '#ede9fe',
  },
  {
    icon: CloudCog,
    title: 'Cloud That Holds',
    text: 'A high-traffic application kept folding under traffic spikes while the cloud bill climbed. Load balancing, database tuning, and security hardening later: 99.99% uptime, 35% lower cloud spend.',
    href: '/our-work/cloud-optimization',
    accent: '#2563eb',
    soft: '#dbeafe',
  },
  {
    icon: BrainCircuit,
    title: 'Retail AI, Embedded',
    text: "Fragmented customer data, campaigns firing blind. Five of our AI engineers built predictive segmentation inside the client's team. Sales up 20%.",
    href: '/our-work/retail-ai-team',
    accent: '#ea580c',
    soft: '#ffedd5',
  },
];

const TITLE_WORDS = [{ text: 'Outcomes,' }, { text: 'not' }, { text: 'deliverables' }] as const;

export default function HomeOutcomes() {
  return (
    <section
      className="home-outcomes relative overflow-hidden py-16 sm:py-20"
      aria-labelledby="home-outcomes-heading"
      style={{
        background:
          'linear-gradient(180deg,rgb(255, 255, 255) 0%,rgb(251, 247, 247) 42%, #f3f4f6 72%, #e5e7eb 100%)',
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">
        <div className="mb-12 text-center sm:mb-14">
          <ScrollTextReveal
            id="home-outcomes-heading"
            tag="h2"
            align="center"
            className="w-full"
            wordGap="0.16em"
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              maxWidth: '100%',
              color: '#0f172a',
            }}
            words={[...TITLE_WORDS]}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {OUTCOMES.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.href}
                className={`home-outcomes__card group sr sr-d${index + 1} flex min-h-[22rem] flex-col rounded-3xl border border-slate-100 bg-white px-6 pb-6 pt-6 shadow-[0_18px_44px_-14px_rgba(15,23,42,0.28)] transition-all duration-350 ease-out hover:-translate-y-2`}
                style={{ '--out-accent': item.accent, '--out-soft': item.soft } as CSSProperties}
              >
                <div className="flex flex-1 flex-col items-center text-center">
                  <span
                    className="relative inline-flex h-[5.75rem] w-[5.75rem] items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="absolute inset-3 rounded-full bg-[#f3f4f6]" />
                    <span className="absolute right-2 top-2.5 h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="absolute bottom-3 left-2.5 h-1.5 w-1.5 rounded-full bg-slate-400/70" />
                    <Icon
                      size={44}
                      strokeWidth={1.45}
                      className="relative z-[1] text-black"
                    />
                  </span>

                  <h3 className="mt-5 text-[1.25rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-[1.35rem]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 max-w-[16.5rem] text-[0.88rem] leading-relaxed text-slate-500">
                    {item.text}
                  </p>

                  <div className="mt-auto flex w-full justify-center pt-5">
                    <Link
                      to={item.href}
                      className="inline-flex h-11 min-w-[7.5rem] items-center justify-center rounded-full px-6 text-[0.84rem] font-semibold leading-none text-white shadow-sm transition-all duration-300 group-hover:shadow-md"
                      style={{ background: item.accent }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
