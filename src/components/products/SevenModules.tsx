// SevenModules.tsx - Compact Modern Cards with 3D Tilt
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Package,
  ShoppingCart,
  TrendingUp,
  Factory,
  Users,
  Wallet,
  Briefcase,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';

const MODULES = [
  {
    id: 1,
    icon: Package,
    title: 'Inventory',
    desc: 'Real-time stock tracking, BOM, quality checks & automated alerts.',
    benefits: ['Lower dead stock', 'Full transparency', 'Auto replenishment'],
    accent: '#3b82f6',
    stat: '1.2K',
    statLabel: 'SKUs',
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: 'Purchase',
    desc: 'RFQ to payment — vendor tracking, POs & bill passing in one flow.',
    benefits: ['Procurement efficiency', 'Cost control', 'Vendor analytics'],
    accent: '#8b5cf6',
    stat: '83',
    statLabel: 'Vendors',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Sales',
    desc: 'Orders, dispatch, invoicing & FG stock planning fully synced.',
    benefits: ['Seamless dispatch', 'Live tracking', 'Stock optimization'],
    accent: '#10b981',
    stat: '12',
    statLabel: "Today's Orders",
  },
  {
    id: 4,
    icon: Factory,
    title: 'Production',
    desc: 'Batch planning, job cards, workstation management & cost analysis.',
    benefits: ['Visual plant view', 'Quality enforcement', 'Demand forecast'],
    accent: '#f59e0b',
    stat: '98.7%',
    statLabel: 'Quality Rate',
  },
  {
    id: 5,
    icon: Users,
    title: 'CRM',
    desc: 'Lead funnel, team tracking, quotation generation & follow-ups.',
    benefits: ['Lead-to-close tracking', 'Better win ratio', 'Team insights'],
    accent: '#ef4444',
    stat: '342',
    statLabel: 'Leads',
  },
  {
    id: 6,
    icon: Wallet,
    title: 'Finance',
    desc: 'Accounts, budgets, P&L, balance sheet — single source of truth.',
    benefits: ['Live statements', 'Budget control', 'Cash visibility'],
    accent: '#06b6d4',
    stat: '₹2.4Cr',
    statLabel: 'Revenue/mo',
  },
  {
    id: 7,
    icon: Briefcase,
    title: 'HRMS',
    desc: 'Attendance, payroll, compliance, leave & tax — hire to retire.',
    benefits: ['Auto compliance', 'Payroll accuracy', 'Full lifecycle'],
    accent: '#a855f7',
    stat: '156',
    statLabel: 'Employees',
  },
];

function TiltCard({
  module,
  index,
  isActive,
  onActivate,
  visible,
}: {
  module: (typeof MODULES)[0];
  index: number;
  isActive: boolean;
  onActivate: (id: number) => void;
  visible: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setTilt({ x: y * -8, y: x * 8 });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const Icon = module.icon;
  const showExpanded = isActive || isHovered;

  return (
    <div
      ref={cardRef}
      onClick={() => onActivate(module.id)}
      className={`
        relative rounded-2xl cursor-pointer
        transition-all duration-500 ease-out
        will-change-transform
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        transform: `
          perspective(800px)
          rotateX(${tilt.x}deg)
          rotateY(${tilt.y}deg)
          scale(${isHovered ? 1.04 : 1})
          translateZ(${isHovered ? 20 : 0}px)
        `,
        transitionDelay: visible ? `${index * 80}ms` : '0ms',
        background: isActive
          ? `linear-gradient(135deg, ${module.accent}08, ${module.accent}03)`
          : '#ffffff',
        border: `1px solid ${isActive ? module.accent + '40' : isHovered ? module.accent + '25' : '#e5e7eb'}`,
        boxShadow: isHovered
          ? `0 20px 40px -12px ${module.accent}18, 0 0 0 1px ${module.accent}10`
          : isActive
            ? `0 12px 32px -8px ${module.accent}15`
            : '0 1px 3px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-4 right-4 h-[2px] rounded-b-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${module.accent}, transparent)`,
          opacity: showExpanded ? 1 : 0,
          transform: showExpanded ? 'scaleX(1)' : 'scaleX(0)',
        }}
      />

      <div className="p-5">
        {/* Icon + Number row */}
        <div className="flex items-center justify-between mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-400"
            style={{
              background: showExpanded ? module.accent + '12' : '#f4f5f7',
              color: showExpanded ? module.accent : '#a1a1aa',
              transform: isHovered ? 'scale(1.1) rotate(-3deg)' : 'scale(1)',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <Icon size={20} strokeWidth={1.8} />
          </div>
          <span
            className="text-[11px] font-mono font-medium transition-all duration-300"
            style={{
              color: showExpanded ? module.accent : '#d4d4d8',
            }}
          >
            {String(module.id).padStart(2, '0')}
          </span>
        </div>

        {/* Title + Stat inline */}
        <div className="flex items-baseline justify-between gap-3 mb-1.5">
          <h3
            className="text-[17px] font-semibold tracking-tight transition-colors duration-300"
            style={{ color: isActive ? module.accent : '#18181b' }}
          >
            {module.title}
          </h3>
          <div className="text-right flex-shrink-0">
            <div
              className="text-lg font-bold leading-none transition-all duration-300"
              style={{
                color: showExpanded ? module.accent : '#a1a1aa',
                transform: showExpanded ? 'scale(1)' : 'scale(0.9)',
              }}
            >
              {module.stat}
            </div>
            <div className="text-[10px] text-zinc-400 mt-0.5 leading-none">
              {module.statLabel}
            </div>
          </div>
        </div>

        {/* Short desc */}
        <p className="text-[13px] text-zinc-500 leading-relaxed">
          {module.desc}
        </p>

        {/* Expanded benefits */}
        <div
          className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            maxHeight: showExpanded ? '160px' : '0px',
            opacity: showExpanded ? 1 : 0,
          }}
        >
          <div className="pt-3 mt-3 border-t border-zinc-100 space-y-2">
            {module.benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2"
                style={{
                  opacity: 0,
                  transform: 'translateX(-8px)',
                  animation: showExpanded
                    ? `slideIn 0.35s ease forwards ${i * 0.08 + 0.1}s`
                    : 'none',
                }}
              >
                <div
                  className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: module.accent + '12' }}
                >
                  <Check size={10} style={{ color: module.accent }} />
                </div>
                <span className="text-[12.5px] text-zinc-600">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom action hint */}
        <div
          className="mt-3 flex items-center justify-between transition-all duration-300"
          style={{
            opacity: showExpanded ? 1 : 0.3,
          }}
        >
          <span className="text-[11px] text-zinc-400">
            {isActive ? 'Click to collapse' : 'Hover to preview'}
          </span>
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-400"
            style={{
              background: showExpanded ? module.accent + '12' : 'transparent',
              color: showExpanded ? module.accent : '#d4d4d8',
              transform: isHovered
                ? 'translate(2px, -2px) scale(1.1)'
                : 'scale(1)',
            }}
          >
            <ArrowUpRight size={13} />
          </div>
        </div>
      </div>

      {/* Shimmer on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `linear-gradient(105deg, transparent 40%, ${module.accent}06 45%, ${module.accent}10 50%, ${module.accent}06 55%, transparent 60%)`,
          backgroundSize: '200% 100%',
          animation: isHovered ? 'shimmer 1.5s ease-in-out' : 'none',
        }}
      />
    </div>
  );
}

export default function SevenModules() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleActivate = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-5 bg-[#fafafa] relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Subtle radial glow behind the grid */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1100px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 bg-white/80 backdrop-blur mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-zinc-500 tracking-wide uppercase">
              7 Core Modules
            </span>
          </div>

          <ScrollTextReveal
            tag="h2"
            align="center"
            className="w-full"
            wordGap="0.12em"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              color: '#18181b',
            }}
            words={[
              { text: 'Everything' },
              { text: 'connected.' },
              { text: 'Nothing' },
              { text: 'falls' },
              { text: 'through.' },
            ]}
          />

          <p className="text-zinc-400 text-[14px] mt-3 max-w-md mx-auto leading-relaxed">
            Hover to preview. Click to lock. Seven modules, one seamless system.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MODULES.map((module, i) => (
            <TiltCard
              key={module.id}
              module={module}
              index={i}
              isActive={activeId === module.id}
              onActivate={handleActivate}
              visible={visible}
            />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => handleActivate(m.id)}
              className="h-[6px] rounded-full transition-all duration-500 ease-out"
              style={{
                width: activeId === m.id ? '24px' : '6px',
                background:
                  activeId === m.id
                    ? `linear-gradient(90deg, ${m.accent}, ${m.accent}80)`
                    : '#e4e4e7',
              }}
              aria-label={`Module ${m.id}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}