import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  badge: ReactNode;
  contentKey: string;
  glowAClassName?: string;
  glowBClassName?: string;
  scrollDuration?: number;
}

const VIEWPORT_HEIGHT_PX = 384;
const MIN_SCROLL_DURATION = 18;
const MAX_SCROLL_DURATION = 38;

function getScrollDuration(contentHeight: number, override?: number) {
  if (override) return override;

  const overflowRatio = contentHeight / VIEWPORT_HEIGHT_PX;
  return Math.min(MAX_SCROLL_DURATION, Math.max(MIN_SCROLL_DURATION, 14 + overflowRatio * 10));
}

export function ProductHeroLaptop({
  children,
  badge,
  contentKey,
  glowAClassName = 'bg-blue-500/10',
  glowBClassName = 'bg-emerald-500/10',
  scrollDuration,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(scrollDuration ?? 22);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(false);
    const enterTimer = window.setTimeout(() => setEntered(true), 60);
    return () => window.clearTimeout(enterTimer);
  }, [contentKey]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const measure = () => {
      setDuration(getScrollDuration(panel.scrollHeight, scrollDuration));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [children, contentKey, scrollDuration]);

  const scrollStyle = {
    '--laptop-scroll-duration': `${duration}s`,
  } as CSSProperties;

  return (
    <div className="hidden lg:block relative">
      <div
        className={`cleanplan-laptop relative mx-auto${entered ? ' cleanplan-laptop--visible' : ''}`}
        key={contentKey}
      >
        <div className="cleanplan-laptop__lid">
          <div className="cleanplan-laptop__bezel">
            <div className="cleanplan-laptop__camera" aria-hidden="true" />
            <div className="cleanplan-laptop__viewport">
              <div className="cleanplan-laptop__scroll" style={scrollStyle}>
                <div ref={panelRef} className="cleanplan-laptop__scroll-panel">
                  {children}
                </div>
                <div className="cleanplan-laptop__scroll-panel" aria-hidden="true">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cleanplan-laptop__base" aria-hidden="true">
          <div className="cleanplan-laptop__hinge" />
          <div className="cleanplan-laptop__trackpad" />
        </div>

        <div className="cleanplan-laptop__badge">{badge}</div>

        <div className={`absolute -top-3 -right-3 w-28 h-28 rounded-full blur-2xl ${glowAClassName}`} />
        <div className={`absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-2xl ${glowBClassName}`} />
      </div>
    </div>
  );
}
