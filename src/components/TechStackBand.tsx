import { useState } from 'react';
import { ScrollTextReveal } from './ScrollTextReveal';

type Tech = {
  name: string;
  iconUrl: string;
  fallback: string;
  fallbackColor: string;
};

const TECH_STACK: Tech[] = [
  {
    name: 'React',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    fallback: 'R',
    fallbackColor: '#61DAFB',
  },
  {
    name: 'Next.js',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    fallback: 'N',
    fallbackColor: '#111111',
  },
  {
    name: 'Angular',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
    fallback: 'A',
    fallbackColor: '#DD0031',
  },
  {
    name: 'Vue.js',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    fallback: 'V',
    fallbackColor: '#4FC08D',
  },
  {
    name: 'Node.js',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    fallback: 'N',
    fallbackColor: '#339933',
  },
  {
    name: 'Python',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    fallback: 'Py',
    fallbackColor: '#3776AB',
  },
  {
    name: 'Java',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    fallback: 'J',
    fallbackColor: '#ED8B00',
  },
  {
    name: '.NET',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
    fallback: '.N',
    fallbackColor: '#512BD4',
  },
  {
    name: 'PHP/Laravel',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    fallback: 'L',
    fallbackColor: '#FF2D20',
  },
  {
    name: 'Flutter',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    fallback: 'F',
    fallbackColor: '#02569B',
  },
  {
    name: 'React Native',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    fallback: 'RN',
    fallbackColor: '#61DAFB',
  },
  {
    name: 'Android',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
    fallback: 'A',
    fallbackColor: '#3DDC84',
  },
  {
    name: 'iOS',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
    fallback: 'iOS',
    fallbackColor: '#555555',
  },
  {
    name: 'AWS',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg',
    fallback: 'AWS',
    fallbackColor: '#FF9900',
  },
  {
    name: 'Azure',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    fallback: 'Az',
    fallbackColor: '#0078D4',
  },
  {
    name: 'Google Cloud',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
    fallback: 'GC',
    fallbackColor: '#4285F4',
  },
  {
    name: 'Docker',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    fallback: 'D',
    fallbackColor: '#2496ED',
  },
  {
    name: 'Kubernetes',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
    fallback: 'K',
    fallbackColor: '#326CE5',
  },
  {
    name: 'MongoDB',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    fallback: 'M',
    fallbackColor: '#47A248',
  },
  {
    name: 'MySQL',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    fallback: 'SQL',
    fallbackColor: '#4479A1',
  },
  {
    name: 'PostgreSQL',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    fallback: 'PG',
    fallbackColor: '#4169E1',
  },
  {
    name: 'Firebase',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
    fallback: 'Fb',
    fallbackColor: '#FFCA28',
  },
  {
    name: 'TensorFlow',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    fallback: 'TF',
    fallbackColor: '#FF6F00',
  },
  {
    name: 'Power BI',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/powerbi.svg',
    fallback: 'BI',
    fallbackColor: '#F2C811',
  },
];

const ROW_SIZE = 8;

const TECH_ROWS: Array<{ items: Tech[]; direction: 'ltr' | 'rtl'; duration: string }> = [
  {
    items: TECH_STACK.slice(0, ROW_SIZE),
    direction: 'ltr',
    duration: '48s',
  },
  {
    items: TECH_STACK.slice(ROW_SIZE, ROW_SIZE * 2),
    direction: 'rtl',
    duration: '54s',
  },
  {
    items: TECH_STACK.slice(ROW_SIZE * 2, ROW_SIZE * 3),
    direction: 'ltr',
    duration: '52s',
  },
];

function buildLoopItems(items: Tech[]) {
  return [...items, ...items];
}

function TechIcon({ tech }: { tech: Tech }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="text-[0.6rem] font-bold"
        style={{ color: tech.fallbackColor }}
        aria-hidden="true"
      >
        {tech.fallback}
      </span>
    );
  }

  return (
    <img
      src={tech.iconUrl}
      alt=""
      width={30}
      height={30}
      className="h-[1.85rem] w-[1.85rem] object-contain"
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}

function TechChip({ tech }: { tech: Tech }) {
  return (
    <div className="tech-stack-band__chip shrink-0">
      <span className="tech-stack-band__chip-icon" aria-hidden="true">
        <TechIcon tech={tech} />
      </span>
      <span className="tech-stack-band__chip-label">{tech.name}</span>
    </div>
  );
}

function TechRow({
  items,
  direction,
  duration,
}: {
  items: Tech[];
  direction: 'ltr' | 'rtl';
  duration: string;
}) {
  const loopItems = buildLoopItems(items);

  return (
    <div className="tech-stack-band__row overflow-hidden">
      <div
        className={`tech-stack-band__track tech-stack-band__track--${direction} motion-reduce:animate-none`}
        style={{ animationDuration: duration }}
        aria-hidden="true"
      >
        {loopItems.map((tech, index) => (
          <TechChip key={`${tech.name}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackBand() {
  return (
    <section
      className="tech-stack-band overflow-hidden py-12 sm:py-14"
      aria-labelledby="tech-stack-heading"
    >
      <div className="mx-auto mb-8 w-full max-w-[1200px] px-6 text-center sm:mb-9">
        <div className="sr">
          <ScrollTextReveal
            id="tech-stack-heading"
            tag="h2"
            align="center"
            className="w-full text-white"
            wordGap="0.2em"
            scrollFromColor="#7dd3fc"
            scrollToColor="#ffffff"
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.85rem, 4vw, 3rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.25,
              maxWidth: '100%',
            }}
            words={[
              { text: 'The' },
              { text: 'stack' },
              { text: 'behind' },
              { text: 'the' },
              { text: 'work' },
            ]}
          />
          <p className="tech-stack-band__lede sr sr-d1">
            From frontend and mobile to cloud, data, and AI — the tools we ship with in production.
          </p>
        </div>
      </div>

      <div className="tech-stack-band__rows">
        {TECH_ROWS.map((row, index) => (
          <TechRow
            key={index}
            items={row.items}
            direction={row.direction}
            duration={row.duration}
          />
        ))}
      </div>

      <p className="sr-only mx-auto max-w-[1200px] px-6">
          Technologies we work with:{' '}
          {TECH_STACK.map((tech) => tech.name).join(', ')}
      </p>
    </section>
  );
}
