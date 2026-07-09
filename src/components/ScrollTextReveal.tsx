import { createContext, useContext, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

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
  /** Sky → blue gradient stroke across letters (pillar hero titles) */
  gradientStroke?: boolean;
  /** Traveling fill pulse: each letter fills thick, then returns to outline */
  gradientFillWave?: boolean;
  /** 3-stop gradient for wave fill + stroke (defaults to pillar blue) */
  waveGradientStops?: readonly [string, string, string];
  /** Line index for sequential multi-line hero wave (0-based) */
  waveLineIndex?: number;
  fillWaveInterval?: number;
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

function interpolateHex(t: number, start: string, mid: string, end: string) {
  const stops = [hexToRgb(start), hexToRgb(mid), hexToRgb(end)];
  const clamped = Math.max(0, Math.min(1, t));
  const segment = clamped * 2;
  const from = stops[Math.floor(segment)];
  const to = stops[Math.ceil(segment)];
  const localT = segment - Math.floor(segment);
  return `rgb(${Math.round(lerp(from.r, to.r, localT))},${Math.round(lerp(from.g, to.g, localT))},${Math.round(lerp(from.b, to.b, localT))})`;
}

const PILLAR_TITLE_GRADIENT_STOPS = ['#38bdf8', '#3b82f6', '#1d4ed8'] as const;

/** Tailwind: from-amber-400 via-orange-500 to-orange-600 */
export const SERVICE_HERO_WAVE_STOPS = ['#fbbf24', '#f97316', '#ea580c'] as const;

export const SERVICE_HERO_WAVE_PROPS = {
  outlinedText: true,
  gradientFillWave: true,
  strokeColor: '#f97316',
  waveGradientStops: SERVICE_HERO_WAVE_STOPS,
  strokeWidth: 3,
} as const;

function waveStopsToGradient(stops: readonly [string, string, string]) {
  return `linear-gradient(to bottom, ${stops[0]}, ${stops[1]}, ${stops[2]})`;
}

const WAVE_SOFTNESS = 1.45;
const WAVE_LOOP_PAUSE_MS = 600;

function smoothstep(t: number) {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2;
}

function waveFillAmount(head: number, letterIndex: number) {
  const edge = head - letterIndex;
  if (edge <= 0) return 0;
  if (edge >= WAVE_SOFTNESS) return 1;
  return smoothstep(edge / WAVE_SOFTNESS);
}

function getWaveForwardEnd(letterCount: number) {
  if (letterCount <= 0) return -WAVE_SOFTNESS;
  return letterCount - 1 + WAVE_SOFTNESS;
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function easeInCubic(t: number) {
  return t ** 3;
}

function getWaveDuration(letterCount: number, fillWaveInterval: number) {
  return Math.max(1800, letterCount * fillWaveInterval * 1.2);
}

interface HeroWaveState {
  activeLineIndex: number;
  head: number;
  direction: 'forward' | 'backward';
}

const HeroWaveContext = createContext<HeroWaveState | null>(null);

export function HeroTitleWaveGroup({
  children,
  lineLetterCounts,
  waveStartDelay = 1200,
  fillWaveInterval = 145,
}: {
  children: ReactNode;
  lineLetterCounts: number[];
  waveStartDelay?: number;
  fillWaveInterval?: number;
}) {
  const [waveState, setWaveState] = useState<HeroWaveState>({
    activeLineIndex: -1,
    head: -WAVE_SOFTNESS,
    direction: 'forward',
  });
  const waveRafRef = useRef<number | null>(null);
  const wavePauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (lineLetterCounts.length === 0) return;

    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        wavePauseRef.current = setTimeout(resolve, ms);
      });

    const animateLineHead = (
      lineIndex: number,
      direction: 'forward' | 'backward',
      from: number,
      to: number,
      duration: number,
      earlyCompleteRatio?: number,
    ) =>
      new Promise<void>((resolve) => {
        const runDuration = earlyCompleteRatio ? duration * earlyCompleteRatio : duration;
        const ease = direction === 'forward' ? easeOutCubic : easeInCubic;
        const start = performance.now();
        setWaveState({ activeLineIndex: lineIndex, head: from, direction });

        const tick = (now: number) => {
          if (cancelled) {
            resolve();
            return;
          }
          const t = Math.min(1, (now - start) / runDuration);
          const head = lerp(from, to, ease(t));
          setWaveState({ activeLineIndex: lineIndex, head, direction });
          if (t < 1) {
            waveRafRef.current = requestAnimationFrame(tick);
          } else {
            setWaveState({ activeLineIndex: lineIndex, head: to, direction });
            resolve();
          }
        };

        waveRafRef.current = requestAnimationFrame(tick);
      });

    async function runWaveLoop() {
      await sleep(waveStartDelay);
      if (cancelled) return;

      while (!cancelled) {
        for (let lineIndex = 0; lineIndex < lineLetterCounts.length; lineIndex++) {
          const letterCount = lineLetterCounts[lineIndex];
          if (letterCount <= 0) continue;

          const forwardEnd = getWaveForwardEnd(letterCount);
          const duration = getWaveDuration(letterCount, fillWaveInterval);
          const hasNextLine = lineIndex < lineLetterCounts.length - 1;
          await animateLineHead(
            lineIndex,
            'forward',
            -WAVE_SOFTNESS,
            forwardEnd,
            duration,
            hasNextLine ? 0.9 : undefined,
          );
          if (cancelled) return;
        }

        for (let lineIndex = lineLetterCounts.length - 1; lineIndex >= 0; lineIndex--) {
          const letterCount = lineLetterCounts[lineIndex];
          if (letterCount <= 0) continue;

          const forwardEnd = getWaveForwardEnd(letterCount);
          const duration = getWaveDuration(letterCount, fillWaveInterval);
          const hasPrevLine = lineIndex > 0;
          await animateLineHead(
            lineIndex,
            'backward',
            forwardEnd,
            -WAVE_SOFTNESS,
            duration,
            hasPrevLine ? 0.9 : undefined,
          );
          if (cancelled) return;
        }

        setWaveState({ activeLineIndex: -1, head: -WAVE_SOFTNESS, direction: 'forward' });
        await sleep(WAVE_LOOP_PAUSE_MS);
      }
    }

    runWaveLoop();

    return () => {
      cancelled = true;
      if (waveRafRef.current) cancelAnimationFrame(waveRafRef.current);
      if (wavePauseRef.current) clearTimeout(wavePauseRef.current);
      setWaveState({ activeLineIndex: -1, head: -WAVE_SOFTNESS, direction: 'forward' });
    };
  }, [lineLetterCounts, waveStartDelay, fillWaveInterval]);

  return (
    <HeroWaveContext.Provider value={waveState}>
      {children}
    </HeroWaveContext.Provider>
  );
}

export function getHeroWaveStartDelay(
  lines: Array<{ startDelay?: number; letterCount?: number; words: Array<{ text: string; light?: boolean }> }>,
  letterInterval: number,
) {
  const counts = getHeroLineLetterCounts(lines);
  return (
    Math.max(...lines.map((line, index) => (line.startDelay ?? 0) + counts[index] * letterInterval)) + 400
  );
}

export function getHeroLineLetterCounts(
  lines: Array<{ letterCount?: number; words: Array<{ text: string; light?: boolean }> }>,
) {
  return lines.map((line) =>
    line.words.reduce((acc, w) => (w.light ? acc : acc + w.text.length), 0),
  );
}

function computeHeroFillMix(
  heroWave: HeroWaveState | null,
  waveLineIndex: number,
  letterIndex: number,
): number {
  if (!heroWave || heroWave.activeLineIndex < 0 || letterIndex < 0) return 0;

  const { activeLineIndex, head, direction } = heroWave;

  if (direction === 'forward') {
    if (waveLineIndex < activeLineIndex) return 1;
    if (waveLineIndex > activeLineIndex) return 0;
    return waveFillAmount(head, letterIndex);
  }

  if (waveLineIndex > activeLineIndex) return 0;
  if (waveLineIndex < activeLineIndex) return 1;
  return waveFillAmount(head, letterIndex);
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
  gradientStroke = false,
  gradientFillWave = false,
  waveGradientStops,
  waveLineIndex = 0,
  fillWaveInterval = 145,
  strokeWidth = 2.5,
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const heroWave = useContext(HeroWaveContext);
  const activeWaveStops = waveGradientStops ?? PILLAR_TITLE_GRADIENT_STOPS;
  const activeWaveGradient = waveStopsToGradient(activeWaveStops);
  const [progress, setProgress] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [waveHead, setWaveHead] = useState(-WAVE_SOFTNESS);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const waveRafRef = useRef<number | null>(null);
  const wavePauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    if (heroWave !== null || !gradientFillWave || animate !== 'words' || totalLetters === 0) {
      return;
    }

    let cancelled = false;
    const forwardEnd = getWaveForwardEnd(totalLetters);
    const waveDuration = getWaveDuration(totalLetters, fillWaveInterval);

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        wavePauseRef.current = setTimeout(resolve, ms);
      });

    const animateHead = (from: number, to: number, duration: number) =>
      new Promise<void>((resolve) => {
        const start = performance.now();

        const tick = (now: number) => {
          if (cancelled) {
            resolve();
            return;
          }
          const t = Math.min(1, (now - start) / duration);
          setWaveHead(lerp(from, to, easeInOutCubic(t)));
          if (t < 1) {
            waveRafRef.current = requestAnimationFrame(tick);
          } else {
            setWaveHead(to);
            resolve();
          }
        };

        waveRafRef.current = requestAnimationFrame(tick);
      });

    async function runWaveLoop() {
      await sleep(startDelay + totalLetters * letterInterval + 400);
      if (cancelled) return;

      while (!cancelled) {
        await animateHead(-WAVE_SOFTNESS, forwardEnd, waveDuration);
        if (cancelled) return;
        await animateHead(forwardEnd, -WAVE_SOFTNESS, waveDuration);
        if (cancelled) return;
        await sleep(WAVE_LOOP_PAUSE_MS);
      }
    }

    runWaveLoop();

    return () => {
      cancelled = true;
      if (waveRafRef.current) cancelAnimationFrame(waveRafRef.current);
      if (wavePauseRef.current) clearTimeout(wavePauseRef.current);
      setWaveHead(-WAVE_SOFTNESS);
    };
  }, [
    heroWave,
    animate,
    gradientFillWave,
    totalLetters,
    letterInterval,
    startDelay,
    fillWaveInterval,
  ]);

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

    const gradientLetterStroke =
      gradientStroke && totalLetters > 1
        ? interpolateHex(
            myIdx / (totalLetters - 1),
            activeWaveStops[0],
            activeWaveStops[1],
            activeWaveStops[2],
          )
        : gradientStroke
          ? activeWaveStops[1]
          : strokeColor;

    let letterStyle: CSSProperties;

    if (animate === 'words') {
      const shown = w.light || myIdx < visibleCount;
      const dur = `${letterDurationMs / 1000}s`;
      const fillMix = gradientFillWave && shown && myIdx >= 0
        ? heroWave !== null
          ? computeHeroFillMix(heroWave, waveLineIndex, myIdx)
          : waveFillAmount(waveHead, myIdx)
        : 0;

      const outlineLayer: CSSProperties =
        outlinedText && shown
          ? {
              color: 'transparent',
              WebkitTextStroke: `${strokeWidth}px ${gradientLetterStroke}`,
              paintOrder: 'stroke fill',
              WebkitFontSmoothing: 'antialiased',
              fontWeight: 700,
            }
          : { color: w.light ? LIGHT : textColor };

      const filledLayer: CSSProperties = {
        color: 'transparent',
        backgroundImage: activeWaveGradient,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        WebkitTextStroke: '0px transparent',
        fontWeight: 800,
      };

      const gradientStyle: CSSProperties = gradientText && shown
        ? {
            backgroundImage: activeWaveGradient,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }
        : gradientFillWave && shown && fillMix > 0
          ? {}
          : outlineLayer;

      if (gradientFillWave && shown && !gradientText) {
        return (
          <span
            key={key}
            className="hero-wave-letter"
            style={{
              display: 'inline-block',
              position: 'relative',
              opacity: shown ? 1 : 0,
              transform: !shown
                ? 'translateX(0.9rem)'
                : `translateX(0) scale(${1 + fillMix * 0.05})`,
              transition: `opacity ${dur} ${LETTER_EASE}, transform ${dur} ${LETTER_EASE}`,
              willChange: 'opacity, transform',
              ...serifStyle,
            }}
            aria-hidden={char === ' ' ? true : undefined}
          >
            <span style={{ ...outlineLayer, ...serifStyle }} aria-hidden="true">
              {char === ' ' ? '\u00A0' : char}
            </span>
            <span
              style={{
                ...filledLayer,
                ...serifStyle,
                position: 'absolute',
                left: 0,
                top: 0,
                opacity: fillMix,
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        );
      }

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
