// CaseStudyDataPipeline.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
 
  Sparkles,

  Database,
  TrendingUp,

  Shield,
  Zap,
  MoveRight,
 
  LineChart,
  Activity,
  Target,
 
  ChevronRight,

  FileText,
  
  Layers,
  Quote,
  X,
 
  Server,

  Workflow,
 
  Filter,
  Merge,
} from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80';

const STATS = [
  { value: '50%', label: 'Faster ETL', icon: Zap, color: '#2563eb', bg: 'bg-blue-50', border: 'border-blue-200' },
  { value: '99.9%', label: 'Data Availability', icon: Shield, color: '#7c3aed', bg: 'bg-purple-50', border: 'border-purple-200' },
  { value: '3x', label: 'Faster Reporting', icon: TrendingUp, color: '#059669', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { value: 'One', label: 'Source of Truth', icon: Database, color: '#d97706', bg: 'bg-amber-50', border: 'border-amber-200' },
];

const TECHNOLOGIES = [
  { icon: Workflow, name: 'ETL Pipelines', color: '#2563eb', bg: 'bg-blue-50' },
  { icon: Database, name: 'Data Warehousing', color: '#7c3aed', bg: 'bg-purple-50' },
  { icon: LineChart, name: 'Real-time Analytics', color: '#059669', bg: 'bg-emerald-50' },
  { icon: Shield, name: 'Data Governance', color: '#d97706', bg: 'bg-amber-50' },
  { icon: Filter, name: 'Data Quality', color: '#dc2626', bg: 'bg-red-50' },
  { icon: Server, name: 'Scalable Infrastructure', color: '#0891b2', bg: 'bg-cyan-50' },
];

const TIMELINE = [
  { phase: 'Assessment', desc: 'Audited existing pipelines and data sources', duration: '2 weeks', icon: Target, color: '#2563eb' },
  { phase: 'Architecture', desc: 'Designed optimized data pipeline architecture', duration: '3 weeks', icon: Layers, color: '#7c3aed' },
  { phase: 'Development', desc: 'Built ETL pipelines and data warehouse', duration: '8 weeks', icon: Workflow, color: '#059669' },
  { phase: 'Integration', desc: 'Connected all data sources and systems', duration: '3 weeks', icon: Merge, color: '#d97706' },
  { phase: 'Optimization', desc: 'Fine-tuned for performance and reliability', duration: 'Ongoing', icon: Activity, color: '#dc2626' },
];

function useScrollAnimation() {
  const [refs, setRefs] = useState<(HTMLElement | null)[]>([]);
  const [visibleStates, setVisibleStates] = useState<boolean[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleStates(prev => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [refs]);

  const registerRef = (el: HTMLElement | null, index: number) => {
    if (el && !refs.includes(el)) {
      setRefs(prev => {
        const newRefs = [...prev];
        newRefs[index] = el;
        return newRefs;
      });
      setVisibleStates(prev => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });
    }
  };

  return { registerRef, visibleStates };
}

export default function DataPipeline() {
  const [activeStat, setActiveStat] = useState<number | null>(null);
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  
  const { registerRef, visibleStates } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Data Pipeline — NSS Case Study';
    window.scrollTo(0, 0);
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section - Data Theme */}
      <header className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-white to-white" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
          
          {/* Data flow icons */}
          <div className="absolute top-20 right-20 text-5xl opacity-20 animate-float-slow">📊</div>
          <div className="absolute bottom-20 left-20 text-4xl opacity-20 animate-float-slow" style={{ animationDelay: '1.5s' }}>📈</div>
          <div className="absolute top-1/2 right-1/4 text-3xl opacity-20 animate-float-slow" style={{ animationDelay: '3s' }}>📉</div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div 
            className="flex items-center gap-2 text-sm text-gray-400 mb-6"
            style={{
              opacity: 0,
              animation: heroVisible ? 'fadeDown 0.6s ease forwards' : 'none',
            }}
          >
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/#case-studies" className="hover:text-gray-600 transition-colors">Case Studies</Link>
            <ChevronRight size={14} />
            <span className="text-indigo-600 font-medium">Data Pipeline</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  animation: heroVisible ? 'fadeUp 0.6s ease 0.2s forwards' : 'none',
                }}
              >
                <Sparkles size={14} className="text-indigo-500" />
                <span className="text-xs font-bold text-gray-700 tracking-wider">CASE STUDY</span>
              </div>

              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.08] tracking-tight"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  animation: heroVisible ? 'fadeUp 0.8s ease 0.3s forwards' : 'none',
                }}
              >
                The pipeline rebuild that
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-[length:200%_auto] animate-gradient-shift">
                  made reporting 3x faster
                </span>
              </h1>

              <div 
                className="flex flex-wrap items-center gap-3 mt-6"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  animation: heroVisible ? 'fadeUp 0.6s ease 0.5s forwards' : 'none',
                }}
              >
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-sm text-indigo-700 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <Database size={16} className="text-indigo-500" />
                  Enterprise Data Management
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-sm text-amber-700 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <FileText size={16} className="text-amber-500" />
                  Project Value: $50,000
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl ${stat.bg} border ${stat.border} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                    style={{
                      opacity: 0,
                      transform: 'translateY(15px)',
                      animation: heroVisible ? `fadeSlide 0.5s ease ${i * 0.1 + 0.6}s forwards` : 'none',
                    }}
                  >
                    <stat.icon size={18} style={{ color: stat.color }} className="animate-pulse-soft" />
                    <div>
                      <span className="text-lg font-bold" style={{ color: stat.color }}>{stat.value}</span>
                      <span className="text-xs text-gray-500 ml-1">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="relative"
              style={{
                opacity: 0,
                transform: 'translateX(40px)',
                animation: heroVisible ? 'slideRight 0.8s ease 0.4s forwards' : 'none',
              }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={HERO_IMAGE}
                  alt="Data pipeline architecture"
                  className="w-full h-[400px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-float hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center animate-bounce-soft">
                      <TrendingUp size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">3x Faster Reporting</div>
                      <div className="text-[10px] text-gray-500">Day to hour turnaround</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center animate-pulse-soft">
                      <Database size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">One Source of Truth</div>
                      <div className="text-[10px] text-gray-500">Centralized data warehousing</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20 shadow-lg animate-pulse-soft">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-medium text-gray-700">Live Pipeline</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 flex gap-2 opacity-30">
                {[0, 1, 2].map((i) => (
                  <span 
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ 
                      background: ['#4f46e5', '#7c3aed', '#059669'][i],
                      animation: `pulse-dot 2s ease-in-out ${i * 0.5}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest animate-pulse-soft">Scroll</span>
          <div className="w-4 h-6 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
            <div className="w-0.5 h-1.5 rounded-full bg-gray-400 animate-scrollDot" />
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section 
        ref={(el) => registerRef(el, 0)}
        className="py-16 px-6 bg-white border-t border-gray-100"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div 
                className="inline-block px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 mb-4"
                style={{
                  opacity: visibleStates[0] ? 1 : 0,
                  transform: visibleStates[0] ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
                }}
              >
                <span className="text-xs font-bold text-indigo-700 tracking-wider">OVERVIEW</span>
              </div>
              <h2 
                className="text-3xl font-bold text-gray-900"
                style={{
                  opacity: visibleStates[0] ? 1 : 0,
                  transform: visibleStates[0] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                }}
              >
                The client
              </h2>
              <p 
                className="text-gray-600 text-lg leading-relaxed mt-4"
                style={{
                  opacity: visibleStates[0] ? 1 : 0,
                  transform: visibleStates[0] ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
                }}
              >
                A data-driven enterprise that needed a scalable, high-performance pipeline to process and analyze large datasets — and instead had slow ETL, inconsistent data, and no real-time view.
              </p>
              <div 
                className="mt-6 flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{
                  opacity: visibleStates[0] ? 1 : 0,
                  transform: visibleStates[0] ? 'translateX(0)' : 'translateX(-30px)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
                }}
              >
                <Quote size={24} className="text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-700 italic">
                    "Our data was everywhere and nowhere. We needed one source of truth that everyone could trust."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">— Head of Data Strategy</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div 
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{
                  opacity: visibleStates[0] ? 1 : 0,
                  transform: visibleStates[0] ? 'translateX(0)' : 'translateX(30px)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
                }}
              >
                <h3 className="text-sm font-semibold text-gray-700 mb-4">At a Glance</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Industry', value: 'Data-Driven Enterprise' },
                    { label: 'Technology', value: 'ETL · Data Warehousing' },
                    { label: 'Duration', value: '~4 months' },
                    { label: 'Impact', value: '3x Faster Reporting', highlight: true },
                  ].map((item, i) => (
                    <div 
                      key={item.label} 
                      className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-sm"
                      style={{
                        opacity: visibleStates[0] ? 1 : 0,
                        transform: visibleStates[0] ? 'translateX(0)' : 'translateX(20px)',
                        transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08 + 0.35}s`,
                      }}
                    >
                      <span className="text-sm text-gray-500">{item.label}</span>
                      <span className={`text-sm font-medium ${item.highlight ? 'text-indigo-600' : 'text-gray-900'}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section 
        ref={(el) => registerRef(el, 1)}
        className="py-16 px-6 bg-gray-50/50 border-y border-gray-100"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div 
                className="inline-block px-3 py-1 rounded-full bg-red-100 border border-red-200 mb-4"
                style={{
                  opacity: visibleStates[1] ? 1 : 0,
                  transform: visibleStates[1] ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
                }}
              >
                <span className="text-xs font-bold text-red-700 tracking-wider">THE PROBLEM</span>
              </div>
              <h2 
                className="text-3xl font-bold text-gray-900"
                style={{
                  opacity: visibleStates[1] ? 1 : 0,
                  transform: visibleStates[1] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                }}
              >
                Data pipeline was the bottleneck
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-4">
              {[
                { icon: X, title: 'Slow Data Processing', desc: 'Every downstream job was late due to slow ETL', color: '#dc2626' },
                { icon: X, title: 'Unstructured Data', desc: 'Disconnected data across multiple sources with no standardization', color: '#dc2626' },
                { icon: X, title: 'No Real-Time View', desc: 'Real-time analytics limited to wishful thinking', color: '#dc2626' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-red-200"
                  style={{
                    opacity: visibleStates[1] ? 1 : 0,
                    transform: visibleStates[1] ? 'translateX(0)' : 'translateX(30px)',
                    transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1 + 0.25}s`,
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 animate-pulse-soft">
                    <X size={16} className="text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section 
        ref={(el) => registerRef(el, 2)}
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-block px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-4"
              style={{
                opacity: visibleStates[2] ? 1 : 0,
                transform: visibleStates[2] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
              }}
            >
              <span className="text-xs font-bold text-emerald-700 tracking-wider">SOLUTION</span>
            </div>
            <h2 
              className="text-3xl font-bold text-gray-900"
              style={{
                opacity: visibleStates[2] ? 1 : 0,
                transform: visibleStates[2] ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
              }}
            >
              What we built
            </h2>
            <p 
              className="text-gray-500 mt-2 max-w-2xl mx-auto"
              style={{
                opacity: visibleStates[2] ? 1 : 0,
                transform: visibleStates[2] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
              }}
            >
              A modern data pipeline from ingestion to insight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Workflow, title: 'Optimized ETL Pipelines', desc: 'Rebuilt for throughput and reliability', color: '#2563eb', bg: 'bg-blue-50' },
              { icon: Database, title: 'Centralized Data Warehousing', desc: 'Single source of truth for the entire organization', color: '#7c3aed', bg: 'bg-purple-50' },
              { icon: LineChart, title: 'Real-Time Analytics', desc: 'Live data processing for immediate insights', color: '#059669', bg: 'bg-emerald-50' },
              { icon: Shield, title: 'Data Governance', desc: 'Quality rules enforced across all systems', color: '#d97706', bg: 'bg-amber-50' },
              { icon: Filter, title: 'Data Quality', desc: 'Consistent, clean data you can trust', color: '#dc2626', bg: 'bg-red-50' },
              { icon: Server, title: 'Scalable Infrastructure', desc: 'Built to grow with your data volume', color: '#0891b2', bg: 'bg-cyan-50' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    opacity: visibleStates[2] ? 1 : 0,
                    transform: visibleStates[2] ? 'translateY(0)' : 'translateY(40px)',
                    transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08 + 0.3}s`,
                  }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    style={{ color: item.color }}
                  >
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  <div className="mt-4 w-10 h-0.5 rounded-full bg-gray-200 group-hover:w-16 transition-all duration-300" style={{ background: item.color }} />
                </div>
              );
            })}
          </div>

          <div 
            className="mt-10 p-6 rounded-2xl bg-gray-50 border border-gray-100"
            style={{
              opacity: visibleStates[2] ? 1 : 0,
              transform: visibleStates[2] ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s',
            }}
          >
            <h4 className="text-sm font-semibold text-gray-700 mb-4 text-center">Technology Stack</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {TECHNOLOGIES.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={tech.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${tech.bg} border border-gray-200 text-sm text-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
                    style={{
                      opacity: visibleStates[2] ? 1 : 0,
                      transform: visibleStates[2] ? 'scale(1)' : 'scale(0.8)',
                      transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.05 + 0.85}s`,
                    }}
                  >
                    <Icon size={16} style={{ color: tech.color }} />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section 
        ref={(el) => registerRef(el, 3)}
        className="py-16 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-block px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-4"
              style={{
                opacity: visibleStates[3] ? 1 : 0,
                transform: visibleStates[3] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
              }}
            >
              <span className="text-xs font-bold text-emerald-700 tracking-wider">RESULTS</span>
            </div>
            <h2 
              className="text-3xl font-bold text-gray-900"
              style={{
                opacity: visibleStates[3] ? 1 : 0,
                transform: visibleStates[3] ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
              }}
            >
              The impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.slice(0, 3).map((stat, i) => (
              <div
                key={stat.label}
                className="group p-8 rounded-2xl bg-white border border-gray-100 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  opacity: visibleStates[3] ? 1 : 0,
                  transform: visibleStates[3] ? 'scale(1)' : 'scale(0.85)',
                  transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.12 + 0.3}s`,
                }}
                onMouseEnter={() => setActiveStat(i)}
                onMouseLeave={() => setActiveStat(null)}
              >
                <div
                  className={`text-5xl font-bold transition-all duration-300 ${activeStat === i ? 'scale-110' : ''}`}
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mt-2">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">
                  {i === 0 && 'ETL processes now run 50% faster' }
                  {i === 1 && 'Data available when you need it' }
                  {i === 2 && 'Weekly numbers from a day to an hour' }
                </div>
                <div className="mt-4 h-1 w-12 mx-auto rounded-full bg-gray-200 group-hover:w-20 transition-all duration-300" style={{ background: stat.color }} />
              </div>
            ))}
          </div>

          <div 
            className="mt-8 p-6 rounded-2xl bg-white border border-gray-100 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            style={{
              opacity: visibleStates[3] ? 1 : 0,
              transform: visibleStates[3] ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s',
            }}
          >
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">ETL 50% faster, 99.9% data availability, reporting 3x faster.</span>
              { ' ' }The weekly numbers that took a day now take an hour, and leadership trusts them.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        ref={(el) => registerRef(el, 4)}
        className="py-16 px-6 bg-white border-t border-gray-100 overflow-hidden"
      >
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-block px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 mb-4"
              style={{
                opacity: visibleStates[4] ? 1 : 0,
                transform: visibleStates[4] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
              }}
            >
              <span className="text-xs font-bold text-indigo-700 tracking-wider">TIMELINE</span>
            </div>
            <h2 
              className="text-3xl font-bold text-gray-900"
              style={{
                opacity: visibleStates[4] ? 1 : 0,
                transform: visibleStates[4] ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
              }}
            >
              How we delivered
            </h2>
            <p 
              className="text-gray-500 mt-2"
              style={{
                opacity: visibleStates[4] ? 1 : 0,
                transform: visibleStates[4] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
              }}
            >
              A methodical approach to data pipeline transformation
            </p>
          </div>

          <div className="relative">
            <div 
              className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 overflow-hidden"
              style={{
                opacity: visibleStates[4] ? 1 : 0,
                transition: 'opacity 0.8s ease 0.4s',
              }}
            >
              <div 
                className="h-full w-full bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400"
                style={{
                  transform: visibleStates[4] ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: 'top',
                  transition: 'transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.5s',
                }}
              />
            </div>

            {TIMELINE.map((item, index) => {
              const Icon = item.icon;
              const delay = index * 0.12 + 0.6;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.phase}
                  className={`relative flex items-start gap-6 mb-6 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setActiveTimeline(index)}
                  onMouseLeave={() => setActiveTimeline(null)}
                  style={{
                    opacity: visibleStates[4] ? 1 : 0,
                    transform: visibleStates[4] 
                      ? 'translateX(0)' 
                      : `translateX(${isEven ? '-30px' : '30px'})`,
                    transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
                  }}
                >
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                    <div 
                      className={`w-4 h-4 rounded-full bg-white border-4 transition-all duration-500 ${
                        activeTimeline === index ? 'scale-150 shadow-lg' : ''
                      }`}
                      style={{ 
                        borderColor: activeTimeline === index ? '#6366f1' : item.color,
                        animation: visibleStates[4] ? `dotPulse 2s ease-in-out ${index * 0.2}s infinite` : 'none',
                      }}
                    >
                      <div 
                        className={`w-2 h-2 rounded-full mx-auto mt-0.5 transition-all duration-500 ${
                          activeTimeline === index ? 'scale-150' : ''
                        }`}
                        style={{ background: item.color }}
                      />
                    </div>
                  </div>

                  <div className={`w-full md:w-[42%] pl-12 md:pl-0 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div
                      className={`p-5 rounded-xl bg-white border transition-all duration-500 ${
                        activeTimeline === index 
                          ? 'shadow-xl border-indigo-300 -translate-y-1' 
                          : 'border-gray-100 hover:shadow-md hover:-translate-y-1'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-1" style={{ justifyContent: isEven ? 'flex-start' : 'flex-end' }}>
                        <Icon 
                          size={16} 
                          style={{ color: item.color }}
                          className={`transition-all duration-500 ${activeTimeline === index ? 'scale-125 rotate-12' : ''}`}
                        />
                        <span className="text-sm font-bold" style={{ color: item.color }}>{item.phase}</span>
                        <span className="text-xs text-gray-400 ml-auto">{item.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                      <div 
                        className={`mt-3 h-0.5 rounded-full transition-all duration-1000 ${
                          activeTimeline === index ? 'w-full' : 'w-0'
                        }`}
                        style={{ background: item.color }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={(el) => registerRef(el, 5)}
        className="py-16 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/30 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-[700px] mx-auto text-center">
          <div 
            className="p-8 rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            style={{
              opacity: visibleStates[5] ? 1 : 0,
              transform: visibleStates[5] ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 mb-4">
              <Database size={12} className="text-indigo-600" />
              <span className="text-xs font-bold text-indigo-700 tracking-wider">DATA SOLUTIONS</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Still assembling reports by hand?
            </h2>
            <p className="text-gray-600 mt-3 max-w-lg mx-auto">
              Let's build a data pipeline that delivers insights when you need them — not hours later.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <Link
                to="/data-science-and-analytics"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
              >
                Explore Data Solutions
                <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/#case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
              >
                View All Case Studies
              </Link>
            </div>
            <p className="text-xs text-gray-400 mt-3">No obligation. Just a conversation about what's possible with your data.</p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(4px); opacity: 0.3; }
        }
        .animate-scrollDot {
          animation: scrollDot 2s ease-in-out infinite;
        }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes bounce-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }

        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 4s ease-in-out infinite;
          background-size: 200% auto;
        }

        @keyframes dotPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </article>
  );
}