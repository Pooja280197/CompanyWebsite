import { Zap, XCircle } from 'lucide-react';

type Accent = 'blue' | 'indigo';

interface Props {
  heading: string;
  paragraphs: [string, string];
  solution: string;
  imageSrc: string;
  imageAlt: string;
  accent?: Accent;
  imageCaption?: string;
}

const ACCENT_STYLES: Record<
  Accent,
  {
    glow: string;
    glowHover: string;
    glowSecondary: string;
    calloutBg: string;
    calloutBorder: string;
    calloutIcon: string;
    calloutText: string;
    frameRing: string;
    frameRingHover: string;
    imageOverlay: string;
    captionBadge: string;
  }
> = {
  blue: {
    glow: 'from-sky-200/45 via-blue-100/25 to-emerald-100/35',
    glowHover: 'group-hover:from-sky-300/55 group-hover:via-blue-200/35 group-hover:to-emerald-200/45',
    glowSecondary: 'bg-blue-500/10',
    calloutBg: 'bg-gradient-to-br from-sky-50 to-blue-50/80',
    calloutBorder: 'border-blue-100/90',
    calloutIcon: 'bg-blue-500/10 text-blue-600',
    calloutText: 'text-slate-700',
    frameRing: 'ring-slate-200/80',
    frameRingHover: 'group-hover:ring-blue-200/90',
    imageOverlay: 'from-blue-950/70 via-slate-900/25 to-transparent',
    captionBadge: 'bg-blue-500/90',
  },
  indigo: {
    glow: 'from-indigo-200/45 via-violet-100/25 to-blue-100/35',
    glowHover: 'group-hover:from-indigo-300/55 group-hover:via-violet-200/35 group-hover:to-blue-200/45',
    glowSecondary: 'bg-indigo-500/10',
    calloutBg: 'bg-gradient-to-br from-indigo-50 to-violet-50/80',
    calloutBorder: 'border-indigo-100/90',
    calloutIcon: 'bg-indigo-500/10 text-indigo-600',
    calloutText: 'text-slate-700',
    frameRing: 'ring-slate-200/80',
    frameRingHover: 'group-hover:ring-indigo-200/90',
    imageOverlay: 'from-indigo-950/70 via-slate-900/25 to-transparent',
    captionBadge: 'bg-indigo-500/90',
  },
};

export function ProductProblemSection({
  heading,
  paragraphs,
  solution,
  imageSrc,
  imageAlt,
  accent = 'blue',
  imageCaption,
}: Props) {
  const styles = ACCENT_STYLES[accent];

  return (
    <section className="relative overflow-hidden bg-slate-50/60 px-6 py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_0%_45%,rgba(255,255,255,0.95),transparent_58%),radial-gradient(ellipse_55%_50%_at_100%_35%,rgba(241,245,249,0.9),transparent_52%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="sr-from-left order-2 space-y-6 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
              <XCircle size={12} className="shrink-0 text-red-500" strokeWidth={2} />
              The problem
            </span>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
              {heading}
            </h2>

            <div className="max-w-xl space-y-4">
              <p className="text-base leading-relaxed text-gray-600">{paragraphs[0]}</p>
              <p className="text-base leading-relaxed text-gray-600">{paragraphs[1]}</p>
            </div>

            <div
              className={`flex items-start gap-4 rounded-2xl border p-5 ${styles.calloutBg} ${styles.calloutBorder}`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.calloutIcon}`}
              >
                <Zap size={18} strokeWidth={1.75} />
              </div>
              <p className="text-base leading-relaxed text-gray-700">{solution}</p>
            </div>
          </div>

          <div className="sr-from-right order-1 lg:order-2">
            <div className="group relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                className={`absolute -inset-4 rounded-[1.85rem] bg-gradient-to-br opacity-80 blur-2xl transition-all duration-500 ${styles.glow} ${styles.glowHover}`}
                aria-hidden="true"
              />

              <div
                className={`relative overflow-hidden rounded-[1.35rem] bg-white shadow-[0_22px_50px_-28px_rgba(15,23,42,0.35)] ring-1 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_32px_64px_-24px_rgba(15,23,42,0.42)] ${styles.frameRing} ${styles.frameRingHover}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="aspect-[5/4] w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>

                {imageCaption && (
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-gradient-to-t px-5 pb-5 pt-20 transition-opacity duration-500 ${styles.imageOverlay} group-hover:opacity-100`}
                  >
                    <span
                      className={`mb-2 inline-flex rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white ${styles.captionBadge}`}
                    >
                      Reality check
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-white/95">{imageCaption}</p>
                  </div>
                )}
              </div>

              <div
                className={`absolute -bottom-6 -left-6 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${styles.glowSecondary} opacity-70`}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
