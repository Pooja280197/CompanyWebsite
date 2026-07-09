import { useEffect, useRef, useState, CSSProperties } from 'react';

interface Word {
  text: string;
  serif?: boolean;
  light?: boolean;
}

interface Props {
  words: Word[];
  className?: string;
  style?: CSSProperties;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  align?: 'left' | 'center';
  animate?: 'scroll' | 'words';
  wordGap?: string;
  textColor?: string;
  /** Scroll reveal start color (default LIGHT #d1d1d1) */
  scrollFromColor?: string;
  /** Scroll reveal end color (default DARK #111111) */
  scrollToColor?: string;
  letterInterval?: number;
  startDelay?: number;
  letterDurationMs?: number;
  gradientText?: boolean;
  outlinedText?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
  id?: string;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function interpolateColor(t: number, dark: string, light: string) {
  const d = hexToRgb(dark);
  const l = hexToRgb(light);
  return `rgb(${Math.round(lerp(l.r, d.r, t))},${Math.round(lerp(l.g, d.g, t))},${Math.round(lerp(l.b, d.b, t))})`;
}

const DARK = '#111111';
const LIGHT = '#d1d1d1';
const HERO_TEXT = '#1b1d1e';
const LETTER_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

function countAnimatableLetters(words: Word[]) {
  return words.reduce((acc, w) => (w.light ? acc : acc + w.text.length), 0);
}

export function ScrollTextReveal({
  words,
  className = '',
  style,
  tag: Tag = 'h2',
  align = 'center',
  animate = 'scroll',
  wordGap = '0.22em',
  textColor = HERO_TEXT,
  scrollFromColor = LIGHT,
  scrollToColor = DARK,
  letterInterval = 72,
  startDelay = 0,
  letterDurationMs = 900,
  gradientText = false,
  outlinedText = false,
  strokeColor = '#1b1d1e',
  strokeWidth = 2.5,
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalLetters = countAnimatableLetters(words);

  useEffect(() => {
    if (animate !== 'scroll') return;
    const el = ref.current;
    if (!el) return;

    function update() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.30;
      const p = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, p)));
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [animate]);

  useEffect(() => {
    if (animate !== 'words') return;

    function run() {
      if (timerRef.current) clearInterval(timerRef.current);
      setVisibleCount(0);
      let count = 0;
      timerRef.current = setInterval(() => {
        count++;
        setVisibleCount(count);
        if (count >= totalLetters && timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      }, letterInterval);
    }

    const timeout = setTimeout(run, startDelay);
    return () => {
      clearTimeout(timeout);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [animate, totalLetters, letterInterval, startDelay]);

  let letterIdx = 0;

  const inline: CSSProperties = {
    display: 'block',
    textAlign: align,
    width: '100%',
    maxWidth: '100%',
    ...(style || {}),
  };

  function renderLetter(char: string, w: Word, key: string) {
    const myIdx = w.light ? -1 : letterIdx++;
    const serifStyle: CSSProperties = w.serif
      ? {
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontWeight: 600,
        }
      : {};

    let letterStyle: CSSProperties;

    if (animate === 'words') {
      const shown = w.light || myIdx < visibleCount;
      const dur = `${letterDurationMs / 1000}s`;
      const gradientStyle: CSSProperties = gradientText && shown
        ? {
            backgroundImage: 'linear-gradient(to bottom, #fbbf24, #f97316, #ea580c)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }
        : outlinedText && shown
          ? {
              color: 'transparent',
              WebkitTextStroke: `${strokeWidth}px ${strokeColor}`,
              paintOrder: 'stroke fill',
              WebkitFontSmoothing: 'antialiased',
            }
          : { color: w.light ? LIGHT : textColor };

      letterStyle = {
        display: 'inline-block',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateX(0)' : 'translateX(0.9rem)',
        transition: `opacity ${dur} ${LETTER_EASE}, transform ${dur} ${LETTER_EASE}`,
        willChange: 'opacity, transform',
        ...gradientStyle,
        ...serifStyle,
      };
    } else {
      let color: string;
      if (w.light) {
        color = LIGHT;
      } else {
        const reveal = Math.max(0, Math.min(1, progress * totalLetters - myIdx));
        color = interpolateColor(reveal, scrollToColor, scrollFromColor);
      }
      letterStyle = {
        display: 'inline-block',
        color,
        transition: 'color 0.08s linear',
        ...serifStyle,
      };
    }

    return (
      <span key={key} style={letterStyle} aria-hidden={char === ' ' ? true : undefined}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    );
  }

  function renderWord(w: Word, wordIndex: number) {
    const isLast = wordIndex === words.length - 1;
    const wordWrapperStyle: CSSProperties = {
      display: 'inline-block',
      whiteSpace: 'nowrap',
      verticalAlign: 'top',
      marginRight: isLast ? undefined : wordGap,
    };

    return (
      <span key={wordIndex} style={wordWrapperStyle}>
        {w.text.split('').map((char, ci) =>
          renderLetter(char, w, `${wordIndex}-${ci}`),
        )}
      </span>
    );
  }

  return (
    <Tag
      id={id}
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={inline}
    >
      {words.map((w, i) => renderWord(w, i))}
    </Tag>
  );
}
