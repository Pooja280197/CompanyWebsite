import { Fragment, isValidElement, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { HeroImageConfig } from '../../data/heroImages';
import { ScrollTextReveal } from '../ScrollTextReveal';

export type IndustryHeroCta = {
  label: string;
  href: string;
};

type Props = {
  image: HeroImageConfig;
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryCta: IndustryHeroCta;
  secondaryCta?: IndustryHeroCta;
  rail?: string[];
  /** CSS color for accent (eyebrow/glow/cta) */
  accent?: string;
};

const HERO_LETTER_INTERVAL = 48;

type TitleSegment = { text: string; accent: boolean };

type TitleGroup = {
  accent: boolean;
  words: Array<{ text: string }>;
  letterCount: number;
  startDelay: number;
};

function flattenTitle(node: ReactNode, accent = false): TitleSegment[] {
  const segments: TitleSegment[] = [];

  const walk = (n: ReactNode, isAccent: boolean) => {
    if (n == null || typeof n === 'boolean') return;
    if (typeof n === 'string' || typeof n === 'number') {
      const text = String(n);
      if (text) segments.push({ text, accent: isAccent });
      return;
    }
    if (Array.isArray(n)) {
      n.forEach((child) => walk(child, isAccent));
      return;
    }
    if (isValidElement(n)) {
      const nextAccent = isAccent || n.type === 'em';
      walk((n.props as { children?: ReactNode }).children, nextAccent);
    }
  };

  walk(node, accent);
  return segments;
}

function titleToGroups(title: ReactNode): TitleGroup[] {
  const segments = flattenTitle(title);
  const groups: Omit<TitleGroup, 'startDelay'>[] = [];

  for (const segment of segments) {
    const words = segment.text
      .split(/\s+/)
      .map((text) => text.trim())
      .filter(Boolean)
      .map((text) => ({ text }));

    if (words.length === 0) continue;

    const letterCount = words.reduce((sum, word) => sum + word.text.length, 0);
    const last = groups[groups.length - 1];

    if (last && last.accent === segment.accent) {
      last.words.push(...words);
      last.letterCount += letterCount;
    } else {
      groups.push({ accent: segment.accent, words, letterCount });
    }
  }

  return groups.map((group, index, arr) => ({
    ...group,
    startDelay: arr.slice(0, index).reduce((sum, g) => sum + g.letterCount, 0) * HERO_LETTER_INTERVAL,
  }));
}

export function IndustryHero({
  image,
  eyebrow: _eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  rail,
  accent = '#38bdf8',
}: Props) {
  const isExternalPrimary = primaryCta.href.startsWith('http') || primaryCta.href.startsWith('#');
  const isExternalSecondary =
    secondaryCta && (secondaryCta.href.startsWith('http') || secondaryCta.href.startsWith('#'));

  const titleGroups = titleToGroups(title);
  const totalLetters = titleGroups.reduce((sum, group) => sum + group.letterCount, 0);
  const contentDelayMs = totalLetters * HERO_LETTER_INTERVAL + 280;

  return (
    <section
      className="industry-hero"
      aria-labelledby="industry-hero-heading"
      style={{ '--ih-accent': accent } as CSSProperties}
    >
      <div className="industry-hero__media" aria-hidden="true">
        <img
          src={image.src}
          alt=""
          className="industry-hero__img"
          style={{ objectPosition: image.objectPosition ?? '68% center' }}
        />
        <div className="industry-hero__shade" />
      </div>

      <div className="industry-hero__inner">
        <h1 id="industry-hero-heading" className="industry-hero__title">
          {titleGroups.map((group, index) => (
            <Fragment key={`${group.words.map((w) => w.text).join('-')}-${index}`}>
              {index > 0 ? ' ' : null}
              <ScrollTextReveal
                tag="span"
                align="left"
                animate="words"
                textColor={group.accent ? accent : '#f8fafc'}
                letterInterval={HERO_LETTER_INTERVAL}
                letterDurationMs={620}
                startDelay={group.startDelay}
                style={{
                  display: 'inline',
                  width: 'fit-content',
                  maxWidth: '100%',
                }}
                words={[...group.words]}
              />
            </Fragment>
          ))}
        </h1>

        <p
          className="industry-hero__desc industry-hero__fade-in"
          style={{ animationDelay: `${contentDelayMs}ms` }}
        >
          {description}
        </p>

        <div
          className="industry-hero__actions industry-hero__fade-in"
          style={{ animationDelay: `${contentDelayMs + 120}ms` }}
        >
          {isExternalPrimary ? (
            <a href={primaryCta.href} className="industry-hero__cta">
              {primaryCta.label}
              <ArrowRight size={17} />
            </a>
          ) : (
            <Link to={primaryCta.href} className="industry-hero__cta">
              {primaryCta.label}
              <ArrowRight size={17} />
            </Link>
          )}

          {secondaryCta ? (
            isExternalSecondary ? (
              <a href={secondaryCta.href} className="industry-hero__ghost">
                {secondaryCta.label}
              </a>
            ) : (
              <Link to={secondaryCta.href} className="industry-hero__ghost">
                {secondaryCta.label}
              </Link>
            )
          ) : null}
        </div>

        {rail && rail.length > 0 ? (
          <div
            className="industry-hero__rail industry-hero__fade-in"
            style={{ animationDelay: `${contentDelayMs + 220}ms` }}
          >
            {rail.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
