import { useEffect, useRef, useState } from 'react';
import { ScrollTextReveal } from './ScrollTextReveal';

const PROJECTS = [
  {
    name: 'FlowBank',
    tags: ['UX Research', 'Interface Design'],
    img: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67adb22b6801ba1be2c8816a_flowbank.jpg',
  },
  {
    name: 'Academy.co',
    tags: ['Product Design', 'Interaction Design'],
    img: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67adb22bbb6dbd85f5b9fc07_academy.jpg',
  },
  {
    name: 'Genome',
    tags: ['Brand Identity Design', 'UX Research'],
    img: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67adb22b8be398062d992b05_genome.jpg',
  },
  {
    name: 'Hotto',
    tags: ['Visual Story telling', 'Web & Mobile Design'],
    img: 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67adb22cde7bb305cec8b740_hotto.jpg',
  },
];

const ROW_GAP = 20;

function easeInOutQuint(t: number) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

const COVER_RATIO = 0.55;

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="port-card group relative rounded-2xl overflow-hidden block bg-white"
      style={{ aspectRatio: '4/3' }}
    >
      <img src={project.img} alt={project.name} className="port-img w-full h-full object-cover" />

      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 35%, transparent 65%)',
        }}
      />

      <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-5 translate-y-0 group-hover:-translate-y-1 transition-transform duration-400">
        <p
          className="text-white font-bold text-lg mb-2 leading-tight"
          style={{ fontFamily: 'Inter,sans-serif', letterSpacing: '-0.02em' }}
        >
          {project.name}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-white/80 text-xs font-medium border border-white/30 rounded-full px-3 py-1 backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [row1H, setRow1H] = useState(0);
  const [stageH, setStageH] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (row1Ref.current) setRow1H(row1Ref.current.offsetHeight);
      if (stageRef.current) setStageH(stageRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });
    const imgs = stageRef.current?.querySelectorAll('img') ?? [];
    imgs.forEach((img) => img.addEventListener('load', measure));
    return () => {
      window.removeEventListener('resize', measure);
      imgs.forEach((img) => img.removeEventListener('load', measure));
    };
  }, []);

  useEffect(() => {
    const update = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      const scrolled = Math.max(0, -rect.top);
      setProgress(Math.min(1, scrolled / scrollable));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const coverT = Math.min(1, progress / COVER_RATIO);
  const coverPhase = easeInOutQuint(coverT);

  const exitT = progress <= COVER_RATIO ? 0 : (progress - COVER_RATIO) / (1 - COVER_RATIO);
  const exitPhase = easeInOutQuint(exitT);

  const coverLift = coverPhase * (row1H + ROW_GAP);
  const exitLift = exitPhase * stageH;
  const trackPull = coverLift + exitLift;

  const row1 = PROJECTS.slice(0, 2);
  const row2 = PROJECTS.slice(2, 4);

  return (
    <section id="work" className="bg-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">

        <div className="text-center mb-14 sr w-full max-w-[1100px] mx-auto px-2">
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
              { text: 'How' }, { text: 'we' }, { text: 'transformed' },
              { text: 'a' }, { text: 'small' }, { text: "business's" },
              { text: 'online' }, { text: 'presence' },
            ]}
          />
        </div>

        <div
          ref={trackRef}
          className="port-scroll-track"
          style={{ marginBottom: trackPull > 0 ? `-${trackPull}px` : undefined }}
        >
          <div className="port-scroll-sticky">
            <div
              ref={stageRef}
              className="port-stack-stage"
              style={{ transform: exitLift > 0 ? `translate3d(0, -${exitLift}px, 0)` : undefined }}
            >
              <div ref={row1Ref} className="port-stack-row port-stack-row--base">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {row1.map((p) => (
                    <ProjectCard key={p.name} project={p} />
                  ))}
                </div>
              </div>

              <div
                className="port-stack-row port-stack-row--cover"
                style={{
                  transform: coverLift > 0 ? `translate3d(0, -${coverLift}px, 0)` : undefined,
                  marginBottom: coverLift > 0 ? `-${coverLift}px` : undefined,
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
