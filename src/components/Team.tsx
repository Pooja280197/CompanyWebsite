import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollTextReveal } from './ScrollTextReveal';
import member1 from '../assets/team/member-1.png';
import member2 from '../assets/team/member-2.png';
import member3 from '../assets/team/member-3.png';
import member4 from '../assets/team/member-4.png';
import member5 from '../assets/team/member-5.png';
import member6 from '../assets/team/member-6.png';
import member7 from '../assets/team/member-7.png';
import member8 from '../assets/team/member-8.png';
import memberPrashant from '../assets/team/member-prashant.png';
import member9 from '../assets/team/member-9.png';
import member10 from '../assets/team/member-10.png';

const TWITTER = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67addc1083998f646851a971_twitter.png';
const LINKEDIN = 'https://cdn.prod.website-files.com/67a5fb8bc33c7f25ab4e52d9/67addc10396a59bde77d300f_linkedin.png';

const team = [
  {
    name: 'Prashant Rajput',
    role: 'Angular Developer',
    img: memberPrashant,
    bg: '#F97316',
  },
  {
    name: 'Rahul Mehta',
    role: 'Engineering Lead',
    img: member1,
    bg: '#F5D76E',
  },
  {
    name: 'Neha Sharma',
    role: 'Product Manager',
    img: member2,
    bg: '#7DD3FC',
  },
  {
    name: 'Amit Verma',
    role: 'Solutions Architect',
    img: member3,
    bg: '#F97316',
  },
  {
    name: 'Karan Singh',
    role: 'Frontend Developer',
    img: member4,
    bg: '#F5D76E',
  },
  {
    name: 'Vikash Patel',
    role: 'Full Stack Developer',
    img: member5,
    bg: '#7DD3FC',
  },
  {
    name: 'Arjun Kapoor',
    role: 'Backend Developer',
    img: member6,
    bg: '#F97316',
  },
  {
    name: 'Ananya Iyer',
    role: 'UI Designer',
    img: member7,
    bg: '#F5D76E',
  },
  {
    name: 'Sneha Rao',
    role: 'QA Lead',
    img: member8,
    bg: '#7DD3FC',
  },
  {
    name: 'Rohan Desai',
    role: 'Mobile Developer',
    img: member9,
    bg: '#F97316',
  },
  {
    name: 'Siddharth Nair',
    role: 'DevOps Engineer',
    img: member10,
    bg: '#F5D76E',
  },
] as const;

function ShapeBg({ bg }: { bg: string }) {
  return <div className="team-shape absolute inset-x-5 top-5 bottom-6" style={{ background: bg }} />;
}

function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[number];
  index: number;
}) {
  return (
    <div className="team-card team-marquee__card group" aria-hidden={index >= team.length ? true : undefined}>
      <div className="team-img-wrap relative rounded-2xl overflow-hidden mb-4">
        <ShapeBg bg={member.bg} />
        <img
          src={member.img}
          alt={index < team.length ? member.name : ''}
          className="team-photo relative z-10 w-full h-full object-cover object-top"
          draggable={false}
        />
        <div className="team-social-bar absolute bottom-3 left-3 z-20 flex gap-2">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm"
            tabIndex={index >= team.length ? -1 : undefined}
          >
            <img src={TWITTER} alt="" className="w-4 h-4" />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm"
            tabIndex={index >= team.length ? -1 : undefined}
          >
            <img src={LINKEDIN} alt="" className="w-4 h-4" />
          </a>
        </div>
      </div>
      <p className="text-[#111] font-bold text-base">{member.name}</p>
      <p className="text-[#999] text-sm mt-1">{member.role}</p>
    </div>
  );
}

export default function Team() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef(0);
  const [, setTick] = useState(0);

  const loopItems = [...team, ...team];

  const normalize = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (half <= 0) return;
    while (offsetRef.current <= -half) offsetRef.current += half;
    while (offsetRef.current > 0) offsetRef.current -= half;
  }, []);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    normalize();
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  }, [normalize]);

  useEffect(() => {
    const speed = 0.95;
    const tick = () => {
      if (!pausedRef.current) {
        offsetRef.current -= speed;
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [applyTransform]);

  const nudge = (dir: -1 | 1) => {
    const step = 300;
    offsetRef.current += dir * step;
    applyTransform();
    setTick((t) => t + 1);
  };

  return (
    <section id="team" className="team-marquee relative z-20 bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 sr w-full max-w-[1100px] mx-auto px-2">
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
              { text: 'Meet' },
              { text: 'the' },
              { text: 'creative' },
              { text: 'minds' },
              { text: 'behind' },
              { text: 'our' },
              { text: 'success' },
            ]}
          />
        </div>
      </div>

      <div
        className="team-marquee__shell relative"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <button
          type="button"
          className="team-marquee__arrow team-marquee__arrow--left"
          aria-label="Previous team members"
          onClick={() => nudge(1)}
        >
          <ChevronLeft size={26} strokeWidth={2.4} />
        </button>
        <button
          type="button"
          className="team-marquee__arrow team-marquee__arrow--right"
          aria-label="Next team members"
          onClick={() => nudge(-1)}
        >
          <ChevronRight size={26} strokeWidth={2.4} />
        </button>

        <div className="team-marquee__viewport">
          <div ref={trackRef} className="team-marquee__track">
            {loopItems.map((member, i) => (
              <TeamCard key={`${member.name}-${i}`} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
