import type { LucideIcon } from 'lucide-react';
import { Monitor, Pause, Play } from 'lucide-react';
import type { ReactNode } from 'react';

export interface LivePreviewScreen {
  title: string;
  desc: string;
  color: string;
  icon?: LucideIcon;
}

interface Props {
  heading: string;
  screens: LivePreviewScreen[];
  activeScreen: number;
  onScreenChange: (index: number) => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
  sectionClassName?: string;
  children: ReactNode;
}

export function ProductPreviewLaptop({ children }: { children: ReactNode }) {
  return (
    <div className="product-preview-laptop relative mx-auto w-full">
      <div className="product-preview-laptop__glow" aria-hidden="true" />
      <div className="product-preview-laptop__lid">
        <div className="product-preview-laptop__bezel">
          <div className="product-preview-laptop__camera" aria-hidden="true" />
          <div className="product-preview-laptop__screen">{children}</div>
        </div>
      </div>
      <div className="product-preview-laptop__base" aria-hidden="true">
        <div className="product-preview-laptop__hinge" />
        <div className="product-preview-laptop__trackpad" />
      </div>
    </div>
  );
}

export function ProductLivePreviewSection({
  heading,
  screens,
  activeScreen,
  onScreenChange,
  isAutoPlaying,
  onToggleAutoPlay,
  sectionClassName = 'bg-gray-50',
  children,
}: Props) {
  const active = screens[activeScreen];

  return (
    <section className={`${sectionClassName} px-6 py-24`}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="sr-from-left order-2 space-y-6 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 shadow-sm">
              <Monitor size={12} className="text-blue-500" />
              <span className="text-xs font-bold tracking-wider text-blue-700">LIVE PREVIEW</span>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">{heading}</h2>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-gray-600 transition-colors duration-300">
                {active?.desc}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {screens.map((screen, i) => (
                  <button
                    key={screen.title}
                    type="button"
                    onClick={() => onScreenChange(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === activeScreen ? 'w-8' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    style={{
                      background:
                        i === activeScreen
                          ? `linear-gradient(90deg, ${screen.color}, ${screen.color}99)`
                          : undefined,
                    }}
                    aria-label={`Show ${screen.title}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={onToggleAutoPlay}
                className="rounded-full border border-gray-200 bg-white p-2.5 shadow-sm transition-colors duration-300 hover:bg-gray-50"
                aria-label={isAutoPlaying ? 'Pause preview' : 'Play preview'}
              >
                {isAutoPlaying ? (
                  <Pause size={16} className="text-gray-500" />
                ) : (
                  <Play size={16} className="text-gray-500" />
                )}
              </button>
            </div>

            <div className="space-y-2">
              {screens.map((screen, i) => {
                const Icon = screen.icon;
                const isActive = i === activeScreen;

                return (
                  <button
                    key={screen.title}
                    type="button"
                    onClick={() => onScreenChange(i)}
                    className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-gray-200 bg-white shadow-md shadow-slate-200/70'
                        : 'border-transparent bg-transparent hover:border-gray-200 hover:bg-white/70'
                    }`}
                  >
                    {Icon ? (
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300"
                        style={{
                          backgroundColor: isActive ? `${screen.color}15` : '#f3f4f6',
                          color: isActive ? screen.color : '#9ca3af',
                        }}
                      >
                        <Icon size={16} strokeWidth={1.75} />
                      </div>
                    ) : (
                      <div
                        className="shrink-0 rounded-full transition-all duration-300"
                        style={{
                          background: isActive ? screen.color : '#d1d5db',
                          width: isActive ? '8px' : '6px',
                          height: isActive ? '8px' : '6px',
                        }}
                      />
                    )}
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        isActive ? 'font-semibold text-gray-900' : 'text-gray-500'
                      }`}
                    >
                      {screen.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="sr-from-right order-1 lg:order-2">
            <ProductPreviewLaptop>{children}</ProductPreviewLaptop>
          </div>
        </div>
      </div>
    </section>
  );
}
