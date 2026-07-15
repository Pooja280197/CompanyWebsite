import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTextReveal } from './ScrollTextReveal';

const PROJECTS = [
  {
    name: 'CleanPlan',
    description:
      'Scheduling, workforce tracking, and daily operations for cleaning companies — without the paperwork.',
    href: '/cleanplan',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop',
    tags: ['Scheduling', 'Workforce', 'Field Ops'],
    accent: '#2563eb',
    tint: 'rgba(37, 99, 235, 0.42)',
  },
  {
    name: 'Rexo ERP',
    description:
      'Inventory, production, sales, and daily operations for manufacturers — one system instead of five spreadsheets.',
    href: '/rexo-erp',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop',
    tags: ['Manufacturing', 'Inventory', 'Production'],
    accent: '#7c3aed',
    tint: 'rgba(124, 58, 237, 0.4)',
  },
  {
    name: 'Education ERP',
    description:
      'Admissions, fees, attendance, and campus operations for schools — connected from enrollment to exam day.',
    href: '/erp-solutions-for-education',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80&auto=format&fit=crop',
    imgFallback: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop',
    tags: ['Campus', 'Admissions', 'Fees'],
    accent: '#ea580c',
    tint: 'rgba(234, 88, 12, 0.38)',
  },
  {
    name: 'ShowTimeBro',
    description:
      'Scheduling, workforce tracking, and daily operations for cleaning companies — without the paperwork.',
    href: '/showtimebro',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80&auto=format&fit=crop',
    tags: ['Leagues', 'Scheduling', 'Operations'],
    accent: '#059669',
    tint: 'rgba(5, 150, 105, 0.4)',
  },
];

const ROW_GAP = 20;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2;
}

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project }: { project: Project }) {
  const [imgSrc, setImgSrc] = useState(project.img);

  return (
    <Link
      to={project.href}
      className="port-card group relative block overflow-hidden rounded-2xl bg-slate-900"
      style={{ aspectRatio: '4/3' }}
      aria-label={`View ${project.name}`}
    >
      <img
        src={imgSrc}
        alt={project.name}
        className="port-img h-full w-full object-cover"
        loading="lazy"
        onError={() => {
          if ('imgFallback' in project && project.imgFallback && imgSrc !== project.imgFallback) {
            setImgSrc(project.imgFallback);
          }
        }}
      />

      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(160deg, ${project.tint} 0%, rgba(15, 23, 42, 0.2) 42%, rgba(15, 23, 42, 0.82) 100%)`,
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 rounded-2xl p-5 sm:p-6"
        style={{
          background: `linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.55) 55%, transparent 100%)`,
        }}
      >
        <span
          className="mb-3 inline-flex rounded-full border border-white/40 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white"
          style={{ background: `${project.accent}33` }}
        >
          Product
        </span>

        <p
          className="mb-2 text-lg font-bold leading-tight text-white sm:text-xl"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
        >
          {project.name}
        </p>

        <p
          className="mb-3 line-clamp-3 text-sm leading-relaxed text-white sm:text-[0.9rem]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              style={{ background: 'rgba(255, 255, 255, 0.14)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);
  const coverLiftRef = useRef(0);

  const [row1H, setRow1H] = useState(0);
  const [stageH, setStageH] = useState(0);
  const [coverLift, setCoverLift] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(true);

  const scrollDistance = row1H + ROW_GAP;
  const trackHeight = stageH > 0 && scrollDistance > 0 ? stageH + scrollDistance : undefined;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setMotionEnabled(!reduced);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (row1Ref.current) setRow1H(row1Ref.current.offsetHeight);
      if (stageRef.current) setStageH(stageRef.current.offsetHeight);
    };

    measure();
    window.addEventListener('resize', measure, { passive: true });

    const imgs = stageRef.current?.querySelectorAll('img') ?? [];
    imgs.forEach((img) => img.addEventListener('load', measure));

    const observer = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(measure)
      : null;
    if (observer && stageRef.current) observer.observe(stageRef.current);

    return () => {
      window.removeEventListener('resize', measure);
      imgs.forEach((img) => img.removeEventListener('load', measure));
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!motionEnabled || scrollDistance <= 0) {
      coverLiftRef.current = 0;
      setCoverLift(0);
      return;
    }

    const update = () => {
      const el = trackRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / scrollDistance);
      const nextLift = easeInOutCubic(progress) * scrollDistance;

      if (Math.abs(nextLift - coverLiftRef.current) > 0.5) {
        coverLiftRef.current = nextLift;
        setCoverLift(nextLift);
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        update();
        tickingRef.current = false;
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [motionEnabled, scrollDistance]);

  const row1 = PROJECTS.slice(0, 2);
  const row2 = PROJECTS.slice(2, 4);

  if (!motionEnabled) {
    return (
      <section id="work" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <PortfolioHeader />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <div key={project.name} className={`sr sr-d${Math.min(index + 1, 4)}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="bg-white px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <PortfolioHeader />

        <div
          ref={trackRef}
          className="port-scroll-track"
          style={{
            height: trackHeight,
            marginBottom: coverLift > 0 ? -coverLift : undefined,
          }}
        >
          <div className="port-scroll-sticky">
            <div ref={stageRef} className="port-stack-stage">
              <div ref={row1Ref} className="port-stack-row port-stack-row--base">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {row1.map((p) => (
                    <ProjectCard key={p.name} project={p} />
                  ))}
                </div>
              </div>

              <div
                className="port-stack-row port-stack-row--cover"
                style={{
                  transform: coverLift > 0 ? `translate3d(0, -${coverLift}px, 0)` : undefined,
                  marginTop: ROW_GAP,
                }}
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {row2.map((p) => (
                    <ProjectCard key={p.name} project={p} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioHeader() {
  return (
    <div className="sr mx-auto mb-14 w-full max-w-[1100px] px-2 text-center">
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
          { text: 'When' }, { text: 'building' }, { text: 'from' },
          { text: 'scratch' }, { text: 'is' }, { text: 'the' },
          { text: 'wrong' }, { text: 'answer' },
        ]}
      />
      <p
        className="sr sr-d2 mx-auto mt-8 max-w-[48rem] text-center text-base leading-[1.85] text-[#555] sm:text-lg"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Some problems are already solved. Manufacturing operations, cleaning-business logistics, campus
        management — you shouldn&apos;t pay custom prices for them.
      </p>
    </div>
  );
}
