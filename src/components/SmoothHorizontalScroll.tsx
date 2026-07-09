import { useEffect, useRef, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function SmoothHorizontalScroll({ children, className = '', ariaLabel }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY * 0.42;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  useEffect(() => {
    const endDrag = () => {
      const el = trackRef.current;
      if (!el) return;
      isDragging.current = false;
      el.style.cursor = 'grab';
      el.style.scrollBehavior = 'smooth';
    };

    window.addEventListener('mouseup', endDrag);
    return () => window.removeEventListener('mouseup', endDrag);
  }, []);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || e.button !== 0) return;
    isDragging.current = true;
    dragStartX.current = e.pageX;
    scrollStart.current = el.scrollLeft;
    el.style.cursor = 'grabbing';
    el.style.scrollBehavior = 'auto';
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !isDragging.current) return;
    e.preventDefault();
    el.scrollLeft = scrollStart.current - (e.pageX - dragStartX.current) * 0.9;
  };

  const endDrag = () => {
    const el = trackRef.current;
    if (!el || !isDragging.current) return;
    isDragging.current = false;
    el.style.cursor = 'grab';
    el.style.scrollBehavior = 'smooth';
  };

  return (
    <div
      ref={trackRef}
      className={`method-rail__track ${className}`.trim()}
      role="region"
      aria-label={ariaLabel}
      onMouseDown={onMouseDown}
      onMouseLeave={endDrag}
      onMouseUp={endDrag}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}
