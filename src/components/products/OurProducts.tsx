// // Products.tsx - Bold Modern Design
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   Sparkles,
//   Check,
//   GraduationCap,
//   Briefcase,
//   Building2,
//   Users,
//   Star,
//   Shield,
//   PlayCircle,
//   MoveRight,
//   Orbit,
//   TrendingUp,
//   Clock,
//   Globe,
//   Layers,
//   Award,
//   Zap,
//   ArrowUpRight,
// } from 'lucide-react';

// const PRODUCTS = [
//   {
//     id: 'cleanplan',
//     name: 'CleanPlan',
//     tagline: 'Run your cleaning business from your pocket',
//     description: 'Scheduling, workforce tracking, and daily operations in one place.',
//     icon: Briefcase,
//     color: '#2563eb',
//     lightColor: '#dbeafe',
//     darkColor: '#1d4ed8',
//     bgGradient: 'bg-gradient-to-br from-blue-50 via-blue-100/20 to-white',
//     stats: ['40% Faster', '100% Digital', '24/7 Live'],
//     features: ['Scheduling', 'Workforce', 'Task Digitization', 'Client Records'],
//     path: '/product/cleanplan',
//     image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
//     badge: 'SaaS',
//     emoji: '🧹',
//   },
//   {
//     id: 'rexo-erp',
//     name: 'Rexo ERP',
//     tagline: 'Run the whole factory from one screen',
//     description: 'Inventory, purchase, sales, production, CRM, finance, and payroll in one system.',
//     icon: Building2,
//     color: '#7c3aed',
//     lightColor: '#ede9fe',
//     darkColor: '#5b21b6',
//     bgGradient: 'bg-gradient-to-br from-purple-50 via-purple-100/20 to-white',
//     stats: ['7 Modules', '25 Licenses', '99.9% Uptime'],
//     features: ['Inventory', 'Production', 'Sales & CRM', 'Finance'],
//     path: '/product/rexo-erp',
//     image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
//     badge: 'ERP',
//     emoji: '🏭',
//   },
//   {
//     id: 'education-erp',
//     name: 'Education ERP',
//     tagline: 'One platform from enrollment to exam day',
//     description: 'Admissions, fees, attendance, academics, and communication connected.',
//     icon: GraduationCap,
//     color: '#8b5cf6',
//     lightColor: '#ede9fe',
//     darkColor: '#6d28d9',
//     bgGradient: 'bg-gradient-to-br from-indigo-50 via-indigo-100/20 to-white',
//     stats: ['100% Paperless', '70% Less Admin', '24/7 Access'],
//     features: ['Admissions', 'Fees', 'Attendance', 'Communication'],
//     path: '/product/education-erp',
//     image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&q=80',
//     badge: 'Education',
//     emoji: '🎓',
//   },
// ];

// export default function Products() {
//   const [activeId, setActiveId] = useState<string | null>(null);

//   useEffect(() => {
//     document.title = 'Our Products — NSS';
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero */}
//       <section className="relative pt-20 pb-12 px-6 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
//         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-100/20 rounded-full blur-3xl" />

//         <div className="relative z-10 max-w-[1000px] mx-auto text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
//             <Sparkles size={14} className="text-blue-500" />
//             <span className="text-xs font-bold text-gray-700 tracking-wider">PRODUCT SUITE</span>
//           </div>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
//             Our<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Product Suite</span>
//           </h1>

//           <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
//             Three purpose-built products. One engineering discipline. 
//             <span className="block text-sm text-gray-400 mt-1">500+ projects delivered</span>
//           </p>

//           {/* Mini product indicators */}
//           <div className="flex items-center justify-center gap-6 mt-6">
//             {PRODUCTS.map((p) => (
//               <div key={p.id} className="flex items-center gap-2">
//                 <span className="text-lg">{p.emoji}</span>
//                 <span className="text-sm font-medium text-gray-600">{p.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products - Horizontal Cards with Overlap */}
//       <section className="py-8 px-6 bg-white">
//         <div className="max-w-[1100px] mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {PRODUCTS.map((product, index) => {
//               const Icon = product.icon;
//               const isActive = activeId === product.id;

//               return (
//                 <div
//                   key={product.id}
//                   className={`group relative transition-all duration-500 ${
//                     isActive ? 'z-10' : 'z-0'
//                   }`}
//                   onClick={() => setActiveId(isActive ? null : product.id)}
//                 >
//                   <div
//                     className={`relative ${product.bgGradient} rounded-2xl border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
//                       isActive 
//                         ? 'border-blue-400 shadow-2xl scale-[1.02]' 
//                         : 'border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-gray-200'
//                     }`}
//                   >
//                     {/* Color Accent - Corner */}
//                     <div 
//                       className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl transition-all duration-700 ${
//                         isActive ? 'opacity-40' : 'opacity-0 group-hover:opacity-20'
//                       }`}
//                       style={{ background: product.color }}
//                     />

//                     {/* Emoji Badge */}
//                     <div className="absolute top-3 right-3 text-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">
//                       {product.emoji}
//                     </div>

//                     <div className="p-6 relative z-10">
//                       {/* Icon */}
//                       <div
//                         className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
//                           isActive ? 'scale-110' : 'group-hover:scale-105'
//                         }`}
//                         style={{
//                           backgroundColor: isActive ? product.lightColor : '#f3f4f6',
//                           color: product.color,
//                         }}
//                       >
//                         <Icon size={26} strokeWidth={1.75} />
//                       </div>

//                       {/* Badge */}
//                       <span
//                         className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2"
//                         style={{ backgroundColor: product.lightColor, color: product.color }}
//                       >
//                         {product.badge}
//                       </span>

//                       {/* Title */}
//                       <h3 className="text-xl font-bold text-gray-900">
//                         {product.name}
//                       </h3>

//                       {/* Tagline */}
//                       <p className="text-sm font-medium text-gray-700 mt-1">
//                         {product.tagline}
//                       </p>

//                       {/* Expandable Content */}
//                       <div 
//                         className={`overflow-hidden transition-all duration-500 ${
//                           isActive ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
//                         }`}
//                       >
//                         <p className="text-sm text-gray-600 leading-relaxed">
//                           {product.description}
//                         </p>

//                         {/* Stats */}
//                         <div className="flex flex-wrap gap-3 mt-3">
//                           {product.stats.map((stat, i) => (
//                             <span
//                               key={stat}
//                               className="text-xs font-medium text-gray-600 flex items-center gap-1.5"
//                               style={{
//                                 opacity: 0,
//                                 animation: isActive ? `fadeUp 0.4s ease forwards ${i * 0.1 + 0.15}s` : 'none',
//                               }}
//                             >
//                               <span className="w-1 h-1 rounded-full" style={{ background: product.color }} />
//                               {stat}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Features */}
//                         <div className="flex flex-wrap gap-1.5 mt-3">
//                           {product.features.map((feature, i) => (
//                             <span
//                               key={feature}
//                               className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/80 border"
//                               style={{
//                                 borderColor: `${product.color}20`,
//                                 color: product.color,
//                                 opacity: 0,
//                                 animation: isActive ? `popIn 0.3s ease forwards ${i * 0.06 + 0.3}s` : 'none',
//                               }}
//                             >
//                               <Check size={8} />
//                               {feature}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Action */}
//                         <Link
//                           to={product.path}
//                           className="inline-flex items-center gap-2 mt-4 text-sm font-semibold transition-all duration-300 group/link"
//                           style={{ color: product.color }}
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Explore {product.name}
//                           <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
//                         </Link>
//                       </div>

//                       {/* Click Hint */}
//                       <div className={`flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 transition-all duration-300 ${
//                         isActive ? 'opacity-0' : 'opacity-100'
//                       }`}>
//                         <span className="text-xs text-gray-400 flex items-center gap-1.5">
//                           <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
//                           Click to explore
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Interaction Guide */}
//           <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-400">
//             <span className="flex items-center gap-1.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
//               Hover to preview
//             </span>
//             <span className="text-gray-300">•</span>
//             <span className="flex items-center gap-1.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
//               Click to expand
//             </span>
//             <span className="text-gray-300">•</span>
//             <span className="flex items-center gap-1.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
//               Explore details
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Why NSS */}
//       <section className="py-16 px-6 bg-gray-50/50">
//         <div className="max-w-[1000px] mx-auto">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-3">
//               <Orbit size={12} className="text-blue-500" />
//               <span className="text-xs font-bold text-blue-700 tracking-wider">WHY NSS</span>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900">Built different. Built better.</h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             {[
//               { icon: Shield, title: 'Enterprise Grade', desc: 'Scalable, secure, production-ready' },
//               { icon: Users, title: 'Industry Focused', desc: 'Built for your specific needs' },
//               { icon: Sparkles, title: 'Continuously Improved', desc: 'Evolving with your business' },
//             ].map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <div key={item.title} className="p-5 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center group">
//                   <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
//                     <Icon size={20} />
//                   </div>
//                   <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
//                   <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-6 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
//         <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/30 rounded-full blur-2xl" />
//         <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100/30 rounded-full blur-2xl" />

//         <div className="relative z-10 max-w-[700px] mx-auto text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Need something custom?</h2>
//           <p className="text-sm text-gray-600 mt-2 max-w-lg mx-auto">
//             We build custom software too. If your industry needs a tailored solution, let's talk.
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
//             <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
//               Start a Custom Project
//               <MoveRight size={16} />
//             </Link>
//             <Link to="/services" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
//               View All Services
//             </Link>
//           </div>
//           <p className="text-xs text-gray-400 mt-3">500+ projects delivered • Fixed quotes • No surprises</p>
//         </div>
//       </section>

//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(6px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes popIn {
//           from { opacity: 0; transform: scale(0.85); }
//           to { opacity: 1; transform: scale(1); }
//         }
//       `}</style>
//     </div>
//   );
// }

// Products.tsx — Premium Light Theme with Unique Hero
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Check,
  GraduationCap,
  Briefcase,
  Building2,
  Users,
  Shield,
  Star,
  PlayCircle,
  ChevronDown,
} from 'lucide-react';
import { ScrollTextReveal } from '../ScrollTextReveal';

// ─── Data ────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'cleanplan',
    name: 'CleanPlan',
    tagline: 'Your cleaning business, pocket-sized',
    description:
      "Scheduling, workforce tracking, and daily ops in one place. Know which crew is where, what's done, and what's slipping — always.",
    icon: Briefcase,
    color: '#2563eb',
    colorLight: '#eff6ff',
    colorMid: '#bfdbfe',
    stats: [
      { value: '40%', label: 'Faster ops' },
      { value: '100%', label: 'Digital' },
      { value: '24/7', label: 'Live tracking' },
    ],
    features: ['Scheduling', 'Workforce', 'Task Digitization', 'Client Records'],
    path: '/product/cleanplan',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    badge: 'SaaS',
    quote: 'Transformed into a seamless platform — smarter, faster, more reliable.',
    author: 'One Direction Australia',
  },
  {
    id: 'rexo-erp',
    name: 'Rexo ERP',
    tagline: 'The whole factory on one screen',
    description:
      'Inventory, purchase, sales, production, CRM, finance, payroll — one system, customized to your process, live on web & mobile.',
    icon: Building2,
    color: '#7c3aed',
    colorLight: '#f5f3ff',
    colorMid: '#ddd6fe',
    stats: [
      { value: '7', label: 'Modules' },
      { value: '25', label: 'Users included' },
      { value: '99.9%', label: 'Uptime' },
    ],
    features: ['Inventory', 'Production', 'Sales & CRM', 'Finance & HR'],
    path: '/product/rexo-erp',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    badge: 'ERP',
    quote: 'Complete visibility from raw materials to finished goods.',
    author: 'Manufacturing Client',
  },
  {
    id: 'education-erp',
    name: 'Education ERP',
    tagline: 'Enrollment to exam day, connected',
    description:
      "Admissions, fees, attendance, academics, communication — so admins stop re-entering the same student into five systems.",
    icon: GraduationCap,
    color: '#ea580c',
    colorLight: '#fff7ed',
    colorMid: '#fed7aa',
    stats: [
      { value: '100%', label: 'Paperless' },
      { value: '70%', label: 'Less admin' },
      { value: '24/7', label: 'Parent portal' },
    ],
    features: ['Admissions', 'Fee Mgmt', 'Attendance & Exams', 'Parent Comms'],
    path: '/product/education-erp',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80',
    badge: 'Education',
    quote: 'One system that connects students, parents, and staff.',
    author: 'School Administrator',
  },
];

const HERO_STATS = [
  { value: '500+', label: 'Institutions', icon: Building2 },
  { value: '50K+', label: 'Users', icon: Users },
  { value: '99.9%', label: 'Uptime', icon: Shield },
  { value: '4.9', label: 'Rating', icon: Star },
];

// ─── Animated Counter ────────────────────────────────────────────
function AnimatedNumber({ target }: { target: string }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericPart = parseFloat(target.replace(/[^0-9.]/g, ''));
          const prefix = target.match(/^[^0-9]*/)?.[0] || '';
          const endSuffix = target.match(/[^0-9.]*$/)?.[0] || '';
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = numericPart * eased;
            const formatted = Number.isInteger(numericPart)
              ? Math.round(current).toString()
              : current.toFixed(1);
            setDisplay(`${prefix}${formatted}${endSuffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

// ─── Hero Floating Card ──────────────────────────────────────────
function FloatingHeroCard({
  product,
  index,
  isVisible,
}: {
  product: (typeof PRODUCTS)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = product.icon;
  const positions = [
    { top: '10%', left: '5%', rotate: '-6deg', delay: '0.4s' },
    { top: '25%', right: '5%', rotate: '4deg', delay: '0.6s' },
    { bottom: '15%', left: '15%', rotate: '-3deg', delay: '0.8s' },
  ];
  const pos = positions[index];

  return (
    <div
      className="absolute hidden lg:flex w-[260px] rounded-2xl bg-white border border-gray-100 shadow-2xl overflow-hidden"
      style={{
        ...pos,
        transform: isVisible
          ? `rotate(${pos.rotate}) translateY(0px)`
          : `rotate(${pos.rotate}) translateY(40px)`,
        opacity: isVisible ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${pos.delay}`,
        zIndex: 3 - index, // Back to front
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-3">
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: product.colorLight, color: product.color }}
          >
            <Icon size={13} strokeWidth={2} />
          </div>
          <span className="text-sm font-bold text-gray-900">{product.name}</span>
          <span
            className="ml-auto text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
            style={{ background: product.colorLight, color: product.color }}
          >
            {product.badge}
          </span>
        </div>
        <p className="text-[11px] text-gray-500 leading-snug">{product.tagline}</p>
      </div>
    </div>
  );
}

// ─── Product Card ────────────────────────────────────────────────
function ProductCard({
  product,
  index,
}: {
  product: (typeof PRODUCTS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() =>
      setTilt({ x: y * -5, y: x * 5 })
    );
  }, []);

  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [onMove, onLeave]);

  const Icon = product.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`
        relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-gray-100
        transition-all duration-700 ease-out will-change-transform
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
      `}
      style={{
        transform: `
          perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)
          scale(${hovered ? 1.02 : 1}) translateZ(${hovered ? 20 : 0}px)
        `,
        transitionDelay: visible ? `${index * 150}ms` : '0ms',
        boxShadow: hovered
          ? `0 32px 64px -16px rgba(0,0,0,0.12), 0 0 0 1px ${product.color}15`
          : '0 4px 16px -4px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03)',
      }}
      onMouseEnter={() => setHovered(true)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[460px]">
        {/* Image Side */}
        <div className={`relative overflow-hidden order-2 lg:order-${isEven ? '1' : '2'}`}>
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out"
            style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: isEven
                ? 'linear-gradient(to right, transparent 40%, white 100%)'
                : 'linear-gradient(to left, transparent 40%, white 100%)',
              opacity: 0.9,
            }}
          />
          {/* Floating Live Badge */}
          <div className="absolute bottom-5 left-5 lg:bottom-6 lg:left-6">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg border border-white/50 transition-all duration-300"
              style={{
                boxShadow: hovered ? `0 8px 24px ${product.color}20` : '0 4px 12px rgba(0,0,0,0.05)',
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: product.color }}
              />
              <span className="text-[12px] font-semibold text-gray-700">
                {hovered ? 'Explore →' : 'Live Product'}
              </span>
            </div>
          </div>
          {/* Big Number */}
          <div
            className="absolute top-5 right-5 lg:top-6 lg:right-6 text-[100px] font-black leading-none text-gray-100/50 select-none transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.1)' : 'scale(1)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Content Side */}
        <div
          className={`relative p-8 md:p-10 flex flex-col justify-between order-1 lg:order-${isEven ? '2' : '1'}`}
          style={{
            background: `linear-gradient(${isEven ? '135deg' : '225deg'}, ${product.colorLight}40 0%, white 40%)`,
          }}
        >
          {/* Top */}
          <div>
            <div className="flex items-start justify-between mb-7">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500"
                style={{
                  background: product.colorLight,
                  color: product.color,
                  transform: hovered ? 'scale(1.1) rotate(-6deg)' : 'scale(1)',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: hovered ? `0 8px 20px ${product.color}25` : 'none',
                }}
              >
                <Icon size={22} strokeWidth={1.6} />
              </div>
              <span
                className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300"
                style={{
                  color: product.color,
                  background: product.colorLight,
                  border: `1px solid ${product.colorMid}`,
                }}
              >
                {product.badge}
              </span>
            </div>

            <h3 className="text-3xl md:text-[2.2rem] font-bold text-gray-900 tracking-tight leading-[1.1] mb-1.5">
              {product.name}
            </h3>
            <p className="text-base font-semibold mb-4" style={{ color: product.color }}>
              {product.tagline}
            </p>

            <p className="text-[15px] text-gray-500 leading-relaxed max-w-md">
              {product.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-5 mt-6">
              {product.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="transition-all duration-500"
                  style={{
                    opacity: hovered ? 1 : 0.5,
                    transform: hovered ? 'translateY(0)' : 'translateY(4px)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 space-y-5">
            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {product.features.map((f, i) => (
                <span
                  key={f}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium border transition-all duration-400"
                  style={{
                    background: 'white',
                    borderColor: hovered ? `${product.colorMid}` : '#f3f4f6',
                    color: hovered ? product.color : '#6b7280',
                    opacity: 0,
                    transform: 'translateY(6px)',
                    animation: hovered
                      ? `featIn 0.4s ease forwards ${i * 0.07 + 0.1}s`
                      : 'none',
                  }}
                >
                  <Check size={10} style={{ color: product.color }} />
                  {f}
                </span>
              ))}
            </div>

            {/* Quote */}
            <div
              className="p-4 rounded-xl transition-all duration-500"
              style={{
                background: `${product.colorLight}60`,
                border: `1px solid ${product.colorMid}60`,
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translateY(0)' : 'translateY(8px)',
                transitionDelay: '0.3s',
              }}
            >
              <p className="text-[13px] text-gray-600 italic leading-relaxed">
                "{product.quote}"
              </p>
              <p className="text-[11px] text-gray-400 mt-1">— {product.author}</p>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 pt-1">
              <Link
                to={product.path}
                className="group/btn inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-[14px] font-semibold text-white transition-all duration-400"
                style={{
                  background: product.color,
                  boxShadow: hovered
                    ? `0 8px 24px -4px ${product.color}40`
                    : `0 4px 12px -2px ${product.color}20`,
                  transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
                }}
              >
                Explore {product.name}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-[14px] font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <PlayCircle size={15} />
                Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-700 origin-left"
        style={{
          background: `linear-gradient(90deg, ${product.color}, ${product.color}60)`,
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        }}
      />
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────
export default function Products() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Our Products — NSS';
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        'content',
        'Discover NSS products: CleanPlan, Rexo ERP, and Education ERP — purpose-built software for cleaning, manufacturing, and education.',
      );
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setHeroVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setCtaVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article className="min-h-screen bg-[#fafafa]">
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-white pt-28 pb-32 px-6"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Soft radial gradients */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 transition-transform duration-[2000ms] ease-out"
            style={{ transform: heroVisible ? 'scale(1)' : 'scale(0.5)' }}
          />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-violet-50 rounded-full blur-3xl opacity-60 transition-transform duration-[2000ms] ease-out delay-300"
            style={{ transform: heroVisible ? 'scale(1)' : 'scale(0.5)' }}
          />
          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          {/* Left: Text Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-6 transition-all duration-700"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              <Sparkles size={13} className="text-indigo-500" />
              <span className="text-[11px] font-bold text-gray-500 tracking-[0.12em] uppercase">
                Our Products
              </span>
            </div>

            <ScrollTextReveal
              tag="h1"
              align="left"
              className="w-full"
              wordGap="0.08em"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#111827',
              }}
              words={[
                { text: 'Software' },
                { text: 'built' },
                { text: 'for' },
                { text: 'the' },
                { text: 'real' },
                { text: 'world.' },
              ]}
              textColor="#111827"
            />

            <p
              className="text-[16px] text-gray-500 leading-relaxed max-w-md mt-5 transition-all duration-700 delay-300"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              Purpose-built for cleaning, manufacturing, and education — the same
              discipline behind 500+ successful deployments.
            </p>

            {/* Stats Row */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-lg transition-all duration-700 delay-500"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              {HERO_STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-3 rounded-xl bg-gray-50/80 border border-gray-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-200"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Icon size={13} className="text-indigo-500" />
                      <span className="text-lg font-bold text-gray-900 tracking-tight">
                        <AnimatedNumber target={stat.value} />
                      </span>
                    </div>
                    <div className="text-[11px] text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Floating Product Cards Collage */}
          <div className="relative h-[450px] hidden lg:block">
            {/* Connecting Lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full z-0"
              style={{ opacity: heroVisible ? 0.15 : 0, transition: 'opacity 1.5s ease 1s' }}
            >
              <line x1="15%" y1="30%" x2="50%" y2="50%" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="85%" y1="40%" x2="50%" y2="50%" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="35%" y1="80%" x2="50%" y2="50%" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50%" cy="50%" r="6" fill="white" stroke="#9ca3af" strokeWidth="1.5" />
            </svg>
            
            {PRODUCTS.map((product, i) => (
              <FloatingHeroCard
                key={product.id}
                product={product}
                index={i}
                isVisible={heroVisible}
              />
            ))}

            {/* Central "NSS" Logo/Node */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-xl flex items-center justify-center transition-all duration-700 delay-1000"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
              }}
            >
              <span className="text-sm font-black text-gray-900 tracking-tight">NSS</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-all duration-700 delay-1000"
          style={{ opacity: heroVisible ? 1 : 0 }}
        >
          <span className="text-[10px] text-gray-300 tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={14} className="text-gray-300 animate-bounce" />
        </div>
      </section>

      {/* ─── Products Section ─────────────────────────────────── */}
      <section className="py-20 px-5 md:px-8 relative bg-[#fafafa]">
        {/* Subtle divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="max-w-[1100px] mx-auto">
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(12px)',
              transitionDelay: '0.8s',
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Explore the suite
            </h2>
            <p className="text-gray-400 text-[15px] mt-2 max-w-md mx-auto">
              Hover to reveal details. Click to dive deeper.
            </p>
          </div>

          <div className="space-y-8">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ──────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#fafafa]">
        <div
          ref={ctaRef}
          className={`relative max-w-[900px] mx-auto transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative rounded-[32px] overflow-hidden p-10 md:p-16 text-center bg-white border border-gray-100 shadow-xl">
            {/* Soft decorative bg shapes */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-50 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-violet-50 rounded-full blur-3xl opacity-60" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                <Sparkles size={12} className="text-indigo-500" />
                <span className="text-[11px] font-bold text-indigo-600 tracking-wider">CUSTOM PROJECTS</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-4">
                Not seeing what you need?
              </h2>
              <p className="text-base text-gray-500 leading-relaxed max-w-lg mx-auto mb-8">
                We build custom software too. If your workflow needs a tailored
                solution, let's talk.
              </p>
              
              <Link
                to="/#contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gray-900 text-white font-semibold text-[15px] hover:bg-black hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.3)] hover:scale-[1.03] transition-all duration-400"
              >
                Start a Custom Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <p className="text-[13px] text-gray-300 mt-5">
                Fixed quotes · No surprises · Just results
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes featIn {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </article>
  );
}