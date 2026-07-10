import { useCallback, useEffect, useRef, useState, type LucideIcon } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ModuleCarouselItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  benefits?: string;
  color: string;
}

function getCircularOffset(index: number, active: number, total: number): number {
  let offset = index - active;
  const half = total / 2;
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
}

function getCardTransform(offset: number) {
  const abs = Math.abs(offset);
  const scale = offset === 0 ? 1 : abs === 1 ? 0.9 : abs === 2 ? 0.8 : 0.72;
  const translateX = offset * 248;
  const rotateY = offset * -16;
  const zIndex = 30 - abs;
  const opacity = abs > 3 ? 0 : 1 - abs * 0.14;

  return { scale, translateX, rotateY, zIndex, opacity };
}

interface Props {
  modules: ModuleCarouselItem[];
}

export function ProductModulesCarousel({ modules }: Props) {
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const shift = useCallback((direction: -1 | 1) => {
    setActive((prev) => (prev + direction + modules.length) % modules.length);
  }, [modules.length]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      shift(e.deltaY > 0 ? 1 : -1);
    };

    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => stage.removeEventListener('wheel', onWheel);
  }, [shift]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 48) {
      shift(delta > 0 ? -1 : 1);
    }
    isDragging.current = false;
    dragStartX.current = null;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="rexo-coverflow__wrap relative">
      <p className="rexo-coverflow__watermark" aria-hidden="true">
        ONE TRUTH
      </p>

      <button
        type="button"
        onClick={() => shift(-1)}
        className="rexo-coverflow__nav rexo-coverflow__nav--prev"
        aria-label="Previous module"
      >
        <ChevronLeft size={22} strokeWidth={2.25} />
      </button>

      <button
        type="button"
        onClick={() => shift(1)}
        className="rexo-coverflow__nav rexo-coverflow__nav--next"
        aria-label="Next module"
      >
        <ChevronRight size={22} strokeWidth={2.25} />
      </button>

      <div
        ref={stageRef}
        className="rexo-coverflow__stage touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="region"
        aria-label="Rexo ERP modules carousel"
        aria-live="polite"
      >
        {modules.map((module, i) => {
          const offset = getCircularOffset(i, active, modules.length);
          const { scale, translateX, rotateY, zIndex, opacity } = getCardTransform(offset);
          const Icon = module.icon;
          const isActive = offset === 0;

          return (
            <article
              key={module.title}
              className="rexo-coverflow__card"
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex,
                opacity,
                pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto',
              }}
              onClick={() => {
                if (!isActive) setActive(i);
              }}
              aria-hidden={!isActive}
            >
              <div
                className="rexo-coverflow__card-inner"
                style={{
                  borderTopColor: module.color,
                  borderRightColor: `color-mix(in srgb, ${module.color} 32%, #e2e8f0)`,
                  borderBottomColor: `color-mix(in srgb, ${module.color} 32%, #e2e8f0)`,
                  borderLeftColor: `color-mix(in srgb, ${module.color} 32%, #e2e8f0)`,
                }}
              >
                <div
                  className="rexo-coverflow__icon-ring"
                  style={{
                    color: module.color,
                    background: `linear-gradient(145deg, color-mix(in srgb, ${module.color} 14%, white), color-mix(in srgb, ${module.color} 6%, white))`,
                  }}
                >
                  <Icon size={isActive ? 28 : 22} strokeWidth={1.75} />
                </div>

                <div className="rexo-coverflow__body">
                  <h3 className="rexo-coverflow__title">{module.title}</h3>
                  <p className={`rexo-coverflow__desc${isActive ? '' : ' rexo-coverflow__desc--compact'}`}>
                    {module.desc}
                  </p>
                  {module.benefits && isActive && (
                    <p className="rexo-coverflow__benefits">
                      <span className="font-semibold text-gray-800">Benefits: </span>
                      {module.benefits}
                    </p>
                  )}
                </div>

                <div
                  className="rexo-coverflow__accent-line"
                  style={{ background: `linear-gradient(90deg, ${module.color}, transparent)` }}
                />
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {modules.map((module, i) => (
          <button
            key={module.title}
            type="button"
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? 'w-8' : 'w-2 bg-slate-200 hover:bg-slate-300'
            }`}
            style={{
              background: i === active
                ? `linear-gradient(90deg, ${module.color}, color-mix(in srgb, ${module.color} 60%, #6366f1))`
                : undefined,
            }}
            aria-label={`Show ${module.title}`}
          />
        ))}
      </div>
    </div>
  );
}
